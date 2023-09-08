import type { RadioGroupOption } from '@ssamssam/react-ui';

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

const ANIMATION: Array<RadioGroupOption> = [
  {
    key: 0,
    children: 'none',
  },
  {
    key: 1,
    children: 'fade',
  },
];

const OPTIONS = {
  TOGGLE,
  ANIMATION,
};

export { OPTIONS };
