import { Usage } from '@src/store/pageContents/modulesDocs/state';

const usage: Array<Usage> = [
  {
    title: '선언',
    description: '',
    code: [
      `import { useClickAway } from "@upcast/react-modules";`,
      ``,
      `function Component() {`,
      `    const ref = React.useRef(null)`,
      `    `,
      `    const onClickAway = () => {`,
      `        // ...`,
      `    }`,
      `    `,
      `    useClickAway({`,
      `        onClickAway,`,
      `        elementRefs: [ref],`,
      `    })`,
      `    `,
      `    return <div ref={ref}></div>`,
      `}`,
    ],
  },
];

export { usage };
