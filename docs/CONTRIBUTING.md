## Contributing (for DEVs)

To contribute to the project, create a separate branch from 'next', develop the idea/feature and create a PR pointing to the 'next' branch.

### Publish

1 - Será necessário, comitar e depois versionar conforme o tipo de mudança:

```bash
npm version patch
# or
npm version minor
# or
npm version major
```

2 - Os comandos para compilar o build final são:

```bash
npm run build-bundle
```

3 - Os comandos para publicar no NPM é:

```bash
npm run publish:new
```
