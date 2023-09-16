import type { Documents } from '@src/store/pageContents/uiDocs/state';
import Multiple from './Multiple/Multiple';

const documents: Array<Documents> = [
  {
    title: 'Mark shape',
    description: '마킹 모양 (싱글, 멀티)',
    view: <Multiple />,
    componentString: [
      `<Checkbox checked={false}>UnChecked</Checkbox>`,
      `<Checkbox checked multiple={false}>Single</Checkbox>`,
      `<Checkbox checked disabled multiple={false}>Single + Disabled</Checkbox>`,
      `<Checkbox checked multiple={true}>Multi</Checkbox>`,
      `<Checkbox checked disabled multiple={true}>Multi + Disabled</Checkbox>`,
    ],
  },
];

export { documents };
