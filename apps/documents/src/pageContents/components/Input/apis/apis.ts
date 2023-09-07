import type { APIs } from '@src/store/components/DocsContents/state';

const apis: Array<APIs> = [
  {
    name: 'error',
    type: 'boolean',
    defaultValue: 'false',
    description: 'error 여부',
  },
];

export { apis };
