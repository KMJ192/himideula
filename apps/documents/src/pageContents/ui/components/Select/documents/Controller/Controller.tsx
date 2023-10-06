import { useRef } from 'react';

import { Select, useSelectController } from '@upcast/react-ui';

function Controller() {
  const list = useRef(
    Array.from({ length: 3 }, (_, idx: number) => ({
      key: idx,
      content: `Option${idx + 1}`,
    })),
  );

  const {
    open,
    selectBoxRef,
    dropboxRef,
    selectedKey,
    reservedKey,
    boxContent,
    onClickSelect,
    onClickOption,
    onKeyDown,
    optionList,
    isOption,
  } = useSelectController({
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
      <Select.Box ref={selectBoxRef} placeholder='useSelectController'>
        {boxContent}
      </Select.Box>
      <Select.Dropbox ref={dropboxRef} direction='down'>
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

export default Controller;
