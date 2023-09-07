import { Input } from '@ssamssam/react-ui';

import type { Documents } from '@src/store/components/DocsContents/state';

const documents: Array<Documents> = [
  {
    title: 'Text',
    description: '텍스트 타입',
    view: <Input placeholder='input text' />,
    componentString: [`<Input placeholder='input text' />`],
  },
  {
    title: 'Password',
    description: '비밀번호 타입',
    view: <Input placeholder='input password' type='password' />,
    componentString: [`<Input placeholder='input text' type='password' />`],
  },
];

export { documents };
