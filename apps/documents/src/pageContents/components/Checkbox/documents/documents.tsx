import type { Documents } from '@src/store/components/DocsContents/state';
import Multiple from './Multiple/Multiple';

const documents: Array<Documents> = [
  {
    title: 'Mark shape',
    description: '마킹 모양 (싱글, 멀티)',
    view: <Multiple />,
    componentString: [
      `<Checkbox multiple={false}>Single</Checkbox>`,
      `<Checkbox multiple={true}>Multi</Checkbox>`,
    ],
  },
];

export { documents };
