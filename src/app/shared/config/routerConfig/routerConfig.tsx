import { RouteProps } from 'react-router-dom';
import { AddNewsPage } from '../../../pages/AddNewsPage';
import { EditNewsPage } from '../../../pages/EditNewsPage';
import { NewsListPage } from '../../../pages/NewsListPage';

export enum AppRoutes {
  NEWS_LIST = 'newsList',
  ADD_NEWS = 'addNews',
  EDIT_NEWS = 'editNews',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.NEWS_LIST]: '/',
  [AppRoutes.ADD_NEWS]: '/add',
  [AppRoutes.EDIT_NEWS]: '/edit/:id',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.NEWS_LIST]: {
    path: RoutePath.newsList,
    element: <NewsListPage />,
  },
  [AppRoutes.ADD_NEWS]: {
    path: RoutePath.addNews,
    element: <AddNewsPage />,
  },
  [AppRoutes.EDIT_NEWS]: {
    path: RoutePath.editNews,
    element: <EditNewsPage />,
  },
};
