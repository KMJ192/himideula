import type { APIs } from '@src/store/components/DocsContents/state';

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
      },
    ],
  },
  {
    title: 'DataTable.DataTablePagination',
    defaultTag: 'div',
    props: [
      {
        name: 'selectedPageIndex',
        type: 'number',
        defaultValue: '1',
        description: '선택된 페이지 인덱스',
      },
      {
        name: 'currentPaging',
        type: 'number',
        defaultValue: '1',
        description: '페이징 된 숫자',
      },
      {
        name: 'lastPage',
        type: 'number',
        defaultValue: '1',
        description: '마지막 페이지 인덱스',
      },
      {
        name: 'onClickPaging',
        type: '(move: "prev" | "next" | "first" | "last") => void',
        defaultValue: '() => {}',
        description: '페이지 이동 화살표 클릭 이벤트 수신기',
      },
      {
        name: 'onClickPageIndex',
        type: '(idx: number) => void',
        defaultValue: '() => {}',
        description: '페이지 인덱스 클릭 이벤트 수신기',
      },
    ],
  },
];

export { apis };
