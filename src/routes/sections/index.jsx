import { Navigate } from 'react-router';

import { CONFIG } from 'src/global-config';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { authDemoRoutes } from './auth-demo';
import { dashboardRoutes } from './dashboard';
import { componentsRoutes } from './components';

// ----------------------------------------------------------------------

export const routesSection = [
  {
    path: '/',
    element: <Navigate to={CONFIG.auth.redirectPath} replace />,
  },

  // Auth
  ...authRoutes,
  ...authDemoRoutes,

  // Dashboard
  ...dashboardRoutes,

  // Main
  ...mainRoutes,

  // Components
  ...componentsRoutes,

  // No match
  { path: '*', element: <Navigate to="/404" replace /> },
];
