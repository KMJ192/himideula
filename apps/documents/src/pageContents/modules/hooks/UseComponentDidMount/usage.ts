import { Usage } from '@src/store/pageContents/modulesDocs/state';

const usage: Array<Usage> = [
  {
    title: '선언',
    description: '',
    code: [
      `import { useComponentDidMount } from "@upcast/react-modules";`,
      ``,
      `function Component() {`,
      ``,
      `    useComponentDidMount(() => {`,
      `        // ...`,
      `    })`,
      ``,
      `    return <div></div>`,
      `}`,
    ],
  },
];

export { usage };
