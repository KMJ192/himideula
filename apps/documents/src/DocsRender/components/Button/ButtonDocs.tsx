import DocsContents from '@src/components/DocsContents/DocsContents';
import type { APIs, Documents } from '@src/store/components/DocsContents/state';

import Variant from './Variant/Variant';

const documents: Array<Documents> = [
  {
    title: 'Variant',
    description: '버튼 변형 형태',
    view: <Variant />,
    componentString: `
      <Button variant='primary'>default</Button>

      <Button variant='outlined'>outlined</Button>
      
      <Button variant='clear'>clear</Button>
    `,
  },
];

const apis: Array<APIs> = [
  {
    name: 'children',
    type: 'React.ReactNode',
    defaultValue: 'undefined',
    description: 'Children 컴포넌트',
  },
  {
    name: 'variant',
    type: `"primary" | "outlined" | "clear"`,
    defaultValue: `primary`,
    description: 'Button 컴포넌트 변환 타입',
  },
  {
    name: 'shape',
    type: `"rect" | "circle" | "square"`,
    defaultValue: 'rect',
    description: 'Button 컴포넌트 모양',
  },
  {
    name: 'loading',
    type: 'boolean',
    defaultValue: 'false',
    description: '로딩 버튼 여부',
  },
  {
    name: 'loadingElement',
    type: 'React.ReactNode',
    defaultValue: 'undefined',
    description: '로딩 컴포넌트 주입',
  },
  {
    name: 'leftIcon',
    type: 'React.ReactNode',
    defaultValue: 'undefined',
    description: '좌측 아이콘',
  },
  {
    name: 'rightIcon',
    type: 'React.ReactNode',
    defaultValue: 'undefined',
    description: '우측 아이콘',
  },
];

function ButtonDocs() {
  return (
    <DocsContents
      title='Button'
      description='Button 컴포넌트'
      documents={documents}
      apis={apis}
    />
  );
}

export default ButtonDocs;
