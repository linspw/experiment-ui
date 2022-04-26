/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-syntax */
import dedent from 'ts-dedent';
import { paramCase } from 'change-case';

const templateSourceCode = (
  templateSource,
  args,
  argTypes,
  replacing = ' v-bind="args"',
) => {
  const componentArgs = {};
  for (const [k, t] of Object.entries(argTypes)) {
    const val = args[k];
    if (
      typeof val !== 'undefined'
      && t.table
      && t.table.category !== 'events'
      && t.table.category !== 'Slots'
      && val !== t.defaultValue
    ) {
      componentArgs[k] = val;
    }
  }

  const propToSource = (key, val) => {
    const type = typeof val;
    switch (type) {
      case 'boolean':
        return `:${key}="${val}"`;
      case 'string':
        return `${key}="${val}"`;
      default:
        return `:${key}="${val}"`;
    }
  };

  return templateSource.replace(
    replacing,
    Object.keys(componentArgs)
      .map((key) => ` ${propToSource(paramCase(key), args[key])}`)
      .join(''),
  );
};

export const transformSource = (src, ctx) => {
  const match = /template: [\'\"\`](.+)[\'\"\`][.\s]*\}\)/.exec(src);
  if (match) {
    const value = match[1];
    return templateSourceCode(dedent(value), ctx.initialArgs, ctx.argTypes)
      .replace(/{{ args.default }}/g, ctx.initialArgs?.default)
      .replace(/ :?default=\"[^"]*\"/g, '');
  }
  return src;
};

const tokenContext = require.context(
  '!!raw-loader!../../src',
  true,
  /.\.(css|less|scss|svg|vue)$/,
);

export const tokenFiles = tokenContext.keys().map((filename) => ({
  filename,
  content: tokenContext(filename).default,
}));
