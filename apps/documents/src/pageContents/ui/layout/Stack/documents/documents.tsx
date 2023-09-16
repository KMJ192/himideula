import type { Documents } from '@src/store/pageContents/uiDocs/state';
import Row from './Direction/Row';
import Column from './Direction/Column';

const documents: Array<Documents> = [
  {
    title: 'Direction - row',
    description: '',
    view: <Row />,
    componentString: [
      `<Stack direction='row'>`,
      `    <div>ele1</div>`,
      `    <div>ele2</div>`,
      `    <div>ele3</div>`,
      `    <div>ele4</div>`,
      `</Stack>`,
    ],
  },
  {
    title: 'Direction - column',
    description: '',
    view: <Column />,
    componentString: [
      `<Stack direction='column'>`,
      `    <div>ele1</div>`,
      `    <div>ele2</div>`,
      `    <div>ele3</div>`,
      `    <div>ele4</div>`,
      `</Stack>`,
    ],
  },
];

export { documents };
