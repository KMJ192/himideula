import type { RadioGroupOption } from '@upcast/react-ui';

const TOGGLE: Array<RadioGroupOption> = [
  {
    key: 0,
    children: 'false',
  },
  {
    key: 1,
    children: 'true',
  },
];

const VARIANT = [
  {
    key: 0,
    children: 'primary',
  },
  {
    key: 1,
    children: 'outlined',
  },
  {
    key: 2,
    children: 'clear',
  },
];

const SHAPE = [
  {
    key: 0,
    children: 'rect',
  },
  {
    key: 1,
    children: 'circle',
  },
  {
    key: 2,
    children: 'square',
  },
];

const OPTIONS = {
  TOGGLE,
  VARIANT,
  SHAPE,
};

export { OPTIONS };
