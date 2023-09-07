import type { APIs } from '@src/store/components/DocsContents/state';

const apis: Array<APIs> = [
  {
    name: 'percent',
    type: 'number',
    defaultValue: '0',
    description: 'Percent',
  },
  {
    name: 'pending',
    type: 'boolean',
    defaultValue: 'false',
    description: '진행 여부',
  },
];

export { apis };
