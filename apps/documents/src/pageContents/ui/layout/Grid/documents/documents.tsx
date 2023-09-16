import { Grid } from '@upcast/react-ui';

import type { Documents } from '@src/store/pageContents/uiDocs/state';

const documents: Array<Documents> = [
  {
    title: 'Grid',
    description: '',
    view: <Grid>This is Grid</Grid>,
    componentString: [`<Grid>This is Grid</Grid>`],
  },
];

export { documents };
