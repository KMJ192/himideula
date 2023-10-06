import { Select } from '@upcast/react-ui';
import type { Documents } from '@src/store/pageContents/uiDocs/state';

import Controller from './Controller/Controller';
import InputController from './InputController/InputController';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

const documents: Array<Documents> = [
  {
    title: 'Select.Box',
    description: 'SelectBox 컴포넌트',
    view: (
      <Select>
        <Select.Box>Select.Box</Select.Box>
      </Select>
    ),
    componentString: [
      `<Select>`,
      `    <Select.Box>Select.Box</Select.Box>`,
      `</Select>`,
    ],
  },
  {
    title: 'Select.InputBox',
    description: '입력 타입 SelectBox 컴포넌트',
    view: (
      <Select>
        <Select.InputBox defaultValue='Select.InputBox' />
      </Select>
    ),
    componentString: [
      `<Select>`,
      `    <Select.InputBox defaultValue='Select.InputBox' />`,
      `</Select>`,
    ],
  },
  {
    title: 'Select.Dropbox',
    description: 'Dropbox 컴포넌트',
    view: (
      <div className={cx('dropbox')}>
        <Select open>
          <Select.Dropbox>Dropbox</Select.Dropbox>
        </Select>
      </div>
    ),
    componentString: [
      `<Select open>`,
      `    <Select.Dropbox>Dropbox</Select.Dropbox>`,
      `</Select>`,
    ],
  },
  {
    title: 'Select.Option',
    description: '리스트 요소 Option 컴포넌트',
    view: (
      <Select open className={cx('option')}>
        <Select.Box className={cx('box')}>Option1</Select.Box>
        <Select.Dropbox>
          <Select.Option>Option2</Select.Option>
          <Select.Option selected>Option2</Select.Option>
          <Select.Option reserved>Option3</Select.Option>
          <Select.Option>Option4</Select.Option>
          <Select.Option disabled>Option5</Select.Option>
          <Select.Option>Option6</Select.Option>
        </Select.Dropbox>
      </Select>
    ),
    viewStyle: {
      height: '280px',
    },
    componentString: [
      `<Select open>`,
      `    <Select.Box>Option2</Select.Box>`,
      `    <Select.Dropbox>`,
      `        <Select.Option>Option1</Select.Option>`,
      `        <Select.Option selected>Option2</Select.Option>`,
      `        <Select.Option reserved>Option3</Select.Option>`,
      `        <Select.Option>Option4</Select.Option>`,
      `        <Select.Option disabled>Option5</Select.Option>`,
      `        <Select.Option>Option6</Select.Option>`,
      `    </Select.Dropbox>`,
      `</Select>`,
    ],
  },
  {
    title: 'useSelectController',
    description: 'Select 컴포넌트 기능 로직 제공 - 기본 타입',
    view: <Controller />,
    componentString: [
      `const list = useRef([`,
      `    {`,
      `        key: 0`,
      `        content: Option1`,
      `    }`,
      `    {`,
      `        key: 1`,
      `        content: Option2`,
      `    }`,
      `    {`,
      `        key: 2`,
      `        content: Option3`,
      `    }`,
      `])`,
      ``,
      `const {`,
      `    open,`,
      `    selectBoxRef,`,
      `    dropboxRef,`,
      `    selectedKey,`,
      `    reservedKey,`,
      `    boxContent,`,
      `    onClickSelect,`,
      `    onClickOption,`,
      `    onKeyDown,`,
      `    optionList,`,
      `    isOption,`,
      `} = useSelectController({`,
      `    initSelectedIdx: -1,`,
      `    optionList: list.current`,
      `});`,
      ``,
      `return (`,
      `    <Select`,
      `        open={open}`,
      `        isOption={isOption}`,
      `        onClick={onClickSelect}`,
      `        onKeyDown={onKeyDown}`,
      `    >`,
      `        <Select.Box ref={selectBoxRef} placeholder='useSelectController'>{boxContent}</Select.Box>`,
      `        <Select.Dropbox ref={dropboxRef}>`,
      `            {optionList.map(({ key, content, disabled }, idx) => {`,
      `                const selected = key === selectedKey;`,
      `                const reserved = key === reservedKey;`,
      `                return (`,
      `                    <Select.Option`,
      `                        key={key}`,
      `                        disabled={disabled}`,
      `                        selected={selected}`,
      `                        reserved={reserved}`,
      `                        onClick={(e) => onClickOption(e, idx)}`,
      `                    >`,
      `                        {content}`,
      `                    </Select.Option>`,
      `                )`,
      `            })}`,
      `        </Select.Dropbox>`,
      `    </Select>`,
      `);`,
    ],
  },
  {
    title: 'useInputSelectController',
    description: 'Select 컴포넌트 기능 로직 제공 - 입력 타입',
    view: <InputController />,
    componentString: [
      `const list = useRef([`,
      `    {`,
      `        index: 0`,
      `        key: 0`,
      `        content: Option1`,
      `    }`,
      `    {`,
      `        index: 1`,
      `        key: 1`,
      `        content: Option2`,
      `    }`,
      `    {`,
      `        index: 2`,
      `        key: 2`,
      `        content: Option3`,
      `    }`,
      `])`,
      ``,
      `const {`,
      `    open,`,
      `    inputBoxRef,`,
      `    dropboxRef,`,
      `    selectedKey,`,
      `    reservedKey,`,
      `    onClickSelect,`,
      `    onClickOption,`,
      `    onKeyDown,`,
      `    onChange,`,
      `    optionList,`,
      `    isOption,`,
      `} = useInputSelectController({`,
      `    initSelectedIdx: -1,`,
      `    optionList: list.current`,
      `});`,
      ``,
      `return (`,
      `    <Select`,
      `        open={open}`,
      `        isOption={isOption}`,
      `        onClick={onClickSelect}`,
      `        onKeyDown={onKeyDown}`,
      `    >`,
      `        <Select.Box ref={inputBoxRef} placeholder='useSelectController' onChange={onChange} />`,
      `        <Select.Dropbox ref={dropboxRef}>`,
      `            {optionList.map(({ key, content, disabled }, idx) => {`,
      `                const selected = key === selectedKey;`,
      `                const reserved = key === reservedKey;`,
      `                return (`,
      `                    <Select.Option`,
      `                        key={key}`,
      `                        disabled={disabled}`,
      `                        selected={selected}`,
      `                        reserved={reserved}`,
      `                        onClick={(e) => onClickOption(e, idx)}`,
      `                    >`,
      `                        {content}`,
      `                    </Select.Option>`,
      `                )`,
      `            })}`,
      `        </Select.Dropbox>`,
      `    </Select>`,
      `);`,
    ],
  },
];

export { documents };
