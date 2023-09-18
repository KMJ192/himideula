import { Usage } from '@src/store/pageContents/modulesDocs/state';

const usage: Array<Usage> = [
  {
    title: '선언',
    description: '',
    code: [
      `import { InfiniteScroll } from "@upcast/react-modules";`,
      ``,
      `function Component() {`,
      `    const [isLoading, setIsLoading] = useState(false);`,
      `    `,
      `    const onLoad = () => {`,
      `        setIsLoading(true);`,
      `        // fetch...`,
      `        setIsLoading(false);`,
      `    }`,
      `    `,
      `    <InfiniteScroll`,
      `        isLoading={isLoading}`,
      `        loadingElement={<div>Loading...</div>}`,
      `        onLoad={onLoad}`,
      `    `,
      `    >`,
      `        // List...`,
      `    </InfiniteScroll>`,
      `}`,
    ],
  },
];

export { usage };
