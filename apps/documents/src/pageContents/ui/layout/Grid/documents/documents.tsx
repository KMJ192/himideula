import { Grid } from '@ssamssam/react-ui';

import type { Documents } from '@src/store/components/DocsContents/state';

const documents: Array<Documents> = [
  {
    title: 'Grid',
    description: '',
    view: <Grid>This is Grid</Grid>,
    componentString: [`<Grid>This is Grid</Grid>`],
  },
];

export { documents };
