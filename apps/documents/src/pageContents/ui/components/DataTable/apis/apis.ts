import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'DataTableContainer',
    defaultTag: 'div',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
    ],
  },
  {
    title: 'DataTable',
    defaultTag: 'table',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
    ],
  },
  {
    title: 'DataTable.Cation',
    defaultTag: 'caption',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
    ],
  },
  {
    title: 'DataTable.Thead',
    defaultTag: 'thead',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
    ],
  },
  {
    title: 'DataTable.Tbody',
    defaultTag: 'tbody',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
    ],
  },
  {
    title: 'DataTable.Tfoot',
    defaultTag: 'tfoot',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
    ],
  },
  {
    title: 'DataTable.Tr',
    defaultTag: 'tr',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
      {
        name: 'disabled',
        type: 'React.ReactNode',
        defaultValue: 'false',
        description: 'Row 비활성화',
        essential: false,
      },
    ],
  },
  {
    title: 'DataTable.Th',
    defaultTag: 'th',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
    ],
  },
  {
    title: 'DataTable.Td',
    defaultTag: 'td',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
    ],
  },
  {
    title: 'DataTable.Pagination',
    defaultTag: 'div',
    props: [
      {
        name: 'selectedPageIndex',
        type: 'number',
        defaultValue: '1',
        description: '선택된 페이지 인덱스',
        essential: false,
      },
      {
        name: 'currentPaging',
        type: 'number',
        defaultValue: '1',
        description: '페이징 된 숫자',
        essential: false,
      },
      {
        name: 'lastPageIndex',
        type: 'number',
        defaultValue: '1',
        description: '마지막 페이지 인덱스',
        essential: false,
      },
      {
        name: 'onClickPaging',
        type: '(move: "prev" | "next" | "first" | "last") => void',
        defaultValue: '() => {}',
        description: '페이지 이동 아이콘 클릭 이벤트 수신기',
        essential: false,
      },
      {
        name: 'onClickPageIndex',
        type: '(idx: number) => void',
        defaultValue: '() => {}',
        description: '페이지 인덱스 클릭 이벤트 수신기',
        essential: false,
      },
    ],
  },
];

export { apis };
