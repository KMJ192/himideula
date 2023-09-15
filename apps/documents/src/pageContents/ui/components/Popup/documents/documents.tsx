import { Popup } from '@ssamssam/react-ui';

import type { Documents } from '@src/store/pageContents/uiDocs/state';

const documents: Array<Documents> = [
  {
    title: 'Popup',
    description: 'Popup 컴포넌트',
    view: (
      <Popup
        visible
        style={{
          padding: '36px',
        }}
      >
        Popup 컴포넌트
      </Popup>
    ),
    componentString: [`<Popup visible>Popup 컴포넌트</Popup>`],
  },
];

export { documents };
