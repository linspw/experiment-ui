import { ATooltip } from '.';
import { AButton } from '@/components/Atoms/AButton';

export default {
  title: 'Design System/Atoms/ATooltip',
};

export const withText = () => ({
  components: { ATooltip },
  template: '<a-tooltip content="foi">Hello Button</a-tooltip>',
});

export const pureComponentUse = () => ({
  render() {
    return (
      <div style="height: 20vh;">
        <ATooltip content="pure component">default is bottom</ATooltip>
        <p />
        <ATooltip content="is a test" position="top-center">is a simple use</ATooltip>
      </div>
    );
  },
});

export const slotUse = () => ({
  components: { ATooltip },
  template: `
    <div style="height: 20vh;">
      <ATooltip>
        Direct content
        <template slot="content">teste 1</template>
      </ATooltip>
      <p />
      <ATooltip>
        <template>
          Simple template
        </template>
        <template slot="content">teste 2</template>
      </ATooltip>
    </div>
  `,
});

export const directiveUse = () => ({
  components: {
    AButton,
  },
  template: `
    <div style="height: 20vh;">
      <span v-tooltip="'Simple string'">teste1</span>
      <strong v-tooltip="{content:'Or object'}">teste2</strong>
      <AButton v-tooltip="{content:'Its ok'}">Button</AButton>
    </div>
  `,
});

export const positionsUse = () => ({
  template: `
    <div style="height: 20vh; display: flex; justify-content: space-around; align-items: center;">
      <span v-tooltip="{content:'Example', position:'bottom-center'}">bottom-center</span>
      <span v-tooltip="{content:'Example', position:'top-center'}">top-center</span>
      <span v-tooltip="{content:'Example', position:'left-center'}">top-center</span>
      <span v-tooltip="{content:'Example', position:'right-center'}">top-center</span>
    </div>
  `,
});
