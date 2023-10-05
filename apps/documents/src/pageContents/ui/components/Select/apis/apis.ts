import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Select',
    defaultTag: 'div',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
      {
        name: 'open',
        type: 'boolean',
        defaultValue: 'false',
        description: 'dropbox 열림 여부',
        essential: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
        description: '비활성화 여부',
        essential: false,
      },
      {
        name: 'error',
        type: 'boolean',
        defaultValue: 'false',
        description: '오류 여부 (box 경계선 표시)',
        essential: false,
      },
      {
        name: 'isOption',
        type: 'boolean',
        defaultValue: 'true',
        description: '리스트 유무(dropbox 레이아웃 개선)',
        essential: false,
      },
    ],
  },
  {
    title: 'Select.Box',
    defaultTag: 'div',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        defaultValue: '""',
        description: 'placeholder',
        essential: false,
      },
    ],
  },
  {
    title: 'Select.Box',
    defaultTag: 'div',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        defaultValue: '""',
        description: 'placeholder',
        essential: false,
      },
    ],
  },
  {
    title: 'Select.InputBox',
    defaultTag: 'input',
    props: [],
  },
  {
    title: 'Select.Dropbox',
    defaultTag: 'ul',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
      {
        name: 'direction',
        type: '"down" | "up"',
        defaultValue: '"down"',
        description: 'Dropbox 출력 위치',
        essential: false,
      },
    ],
  },
  {
    title: 'Select.Option',
    defaultTag: 'li',
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
        type: 'boolean',
        defaultValue: 'false',
        description: '비활성화 여부',
        essential: false,
      },
      {
        name: 'selected',
        type: 'boolean',
        defaultValue: 'false',
        description: '선택 여부',
        essential: false,
      },
      {
        name: 'reserved',
        type: 'boolean',
        defaultValue: 'false',
        description: '선택 예비 여부',
        essential: false,
      },
    ],
  },
  {
    title: 'useSelectController',
    defaultTag: '',
    props: [
      {
        name: 'initSelectedIdx',
        type: 'number',
        defaultValue: '-1',
        description: '선택된 요소의 인덱스 (-1일 경우 요소 미설정으로 인식)',
        essential: false,
      },
      {
        name: 'optionList',
        type: 'ReadonlyArray<InputSelectOption>',
        defaultValue: '[]',
        description: 'Dropbox에 출력할 리스트',
        essential: false,
      },
    ],
  },
  {
    title: 'useInputSelectController',
    defaultTag: '',
    props: [
      {
        name: 'initSelectedIdx',
        type: 'number',
        defaultValue: '-1',
        description: '선택된 요소의 인덱스 (-1일 경우 요소 미설정으로 인식)',
        essential: false,
      },
      {
        name: 'caseSensitive',
        type: 'boolean',
        defaultValue: 'false',
        description: '자동완성 대소문자 구분 여부',
        essential: false,
      },
      {
        name: 'optionList',
        type: 'ReadonlyArray<InputSelectOption>',
        defaultValue: '[]',
        description: 'Dropbox에 출력할 리스트',
        essential: false,
      },
    ],
  },
];

export { apis };
