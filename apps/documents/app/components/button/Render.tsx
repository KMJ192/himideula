import { Button } from '@ssamssam/react-ui';

import DocsContents from '@src/components/DocsContents/DocsContents';

const documents = [
  {
    title: 'Basic',
    description: '기본 버튼 컴포넌트 입니다.',
    view: <Button>Button</Button>,
    componentString: `
      <Button>Button</Button>
    `,
  },
  {
    title: 'Clear',
    description: 'variant가 "clear"인 버튼 컴포넌트 입니다.',
    view: <Button variant='clear'>Button</Button>,
    componentString: `
      <Button variant='clear'>Button</Button>
    `,
  },
  {
    title: 'Outlined',
    description: 'variant "outlined"인 버튼 컴포넌트 입니다.',
    view: <Button variant='outlined'>Button</Button>,
    componentString: `
      <Button variant='outlined'>Button</Button>
    `,
  },
];

function Render() {
  return (
    <DocsContents
      title='Button'
      description='Button 컴포넌트'
      documents={documents}
    />
  );
}

export default Render;
