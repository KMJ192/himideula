import type { ReactNode } from 'react';

import Router from './components/Router/Router';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import { routerMap } from './routerMap/routerMap';
import type { RouterMap } from './components/Router/types';

type Props = {
  children?: ReactNode;
  error500?: ReactNode;
  notFound404?: ReactNode;
  forbidden403?: ReactNode;
  extractElement?: (page: ReactNode, pageInfo: Omit<RouterMap, 'page'>) => ReactNode;
};

function RootRouter({ children, error500, notFound404, forbidden403, extractElement }: Props) {
  return (
    <ErrorBoundary fallback={error500}>
      <Router
        auth='common'
        routerMap={routerMap}
        notFoundPage={notFound404}
        wrongAccessPage={forbidden403}
        extractElement={extractElement}
      >
        {children}
      </Router>
    </ErrorBoundary>
  );
}

export default RootRouter;
