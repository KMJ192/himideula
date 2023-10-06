import { useRef } from 'react';

import { Select, useInputSelectController } from '@upcast/react-ui';

function InputController() {
  const list = useRef(
    Array.from({ length: 3 }, (_, idx: number) => ({
      key: idx,
      content: `Option${idx + 1}`,
      index: idx,
    })),
  );

  const {
    open,
    inputBoxRef,
    dropboxRef,
    selectedKey,
    reservedKey,
    onClickSelect,
    onClickOption,
    onKeyDown,
    onChange,
    optionList,
    isOption,
  } = useInputSelectController({
    initSelectedIdx: -1,
    optionList: list.current,
  });

  return (
    <Select
      open={open}
      isOption={isOption}
      onClick={onClickSelect}
      onKeyDown={onKeyDown}
    >
      <Select.InputBox
        ref={inputBoxRef}
        placeholder='useInputSelectController'
        onChange={onChange}
      />
      <Select.Dropbox ref={dropboxRef}>
        {optionList.map(({ key, content, disabled }, idx) => {
          const selected = key === selectedKey;
          const reserved = key === reservedKey;
          return (
            <Select.Option
              key={key}
              disabled={disabled}
              selected={selected}
              reserved={reserved}
              onClick={(e: React.MouseEvent) => {
                onClickOption(e, idx);
              }}
            >
              {content}
            </Select.Option>
          );
        })}
      </Select.Dropbox>
    </Select>
  );
}

export default InputController;
