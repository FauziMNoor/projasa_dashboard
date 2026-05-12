import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { CONFIG } from 'src/global-config';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

import { usePathname } from '../hooks';

// ----------------------------------------------------------------------
// Halaman Dashboard Utama
const IndexPage = lazy(() => import('src/pages/dashboard'));

// Perusahaan
const CompanyListPage   = lazy(() => import('src/pages/dashboard/companies/list'));
const CompanyNewPage    = lazy(() => import('src/pages/dashboard/companies/new'));
const CompanyEditPage   = lazy(() => import('src/pages/dashboard/companies/edit'));

// Pengguna
const UserListPage  = lazy(() => import('src/pages/dashboard/users/list'));
const UserNewPage   = lazy(() => import('src/pages/dashboard/users/new'));
const UserEditPage  = lazy(() => import('src/pages/dashboard/users/edit'));

// Pelanggan
const CustomerListPage = lazy(() => import('src/pages/dashboard/customers/list'));
const CustomerNewPage  = lazy(() => import('src/pages/dashboard/customers/new'));
const CustomerEditPage = lazy(() => import('src/pages/dashboard/customers/edit'));

// Layanan
const ServiceListPage = lazy(() => import('src/pages/dashboard/services/list'));
const ServiceNewPage  = lazy(() => import('src/pages/dashboard/services/new'));
const ServiceEditPage = lazy(() => import('src/pages/dashboard/services/edit'));

// Portofolio
const PortfolioListPage = lazy(() => import('src/pages/dashboard/portfolios/list'));
const PortfolioNewPage  = lazy(() => import('src/pages/dashboard/portfolios/new'));
const PortfolioEditPage = lazy(() => import('src/pages/dashboard/portfolios/edit'));

// Pesanan
const OrderListPage    = lazy(() => import('src/pages/dashboard/orders/list'));
const OrderDetailsPage = lazy(() => import('src/pages/dashboard/orders/details'));
const OrderNewPage     = lazy(() => import('src/pages/dashboard/orders/new'));
const OrderEditPage    = lazy(() => import('src/pages/dashboard/orders/edit'));

// Keuangan
const FinancePage = lazy(() => import('src/pages/dashboard/finance'));

// ----------------------------------------------------------------------

function SuspenseOutlet() {
  const pathname = usePathname();
  return (
    <Suspense key={pathname} fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  );
}

const dashboardLayout = () => (
  <DashboardLayout>
    <SuspenseOutlet />
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? dashboardLayout() : <AuthGuard>{dashboardLayout()}</AuthGuard>,
    children: [
      // Dashboard Utama
      { index: true, element: <IndexPage /> },

      // Data Perusahaan
      {
        path: 'companies',
        children: [
          { index: true,          element: <CompanyListPage /> },
          { path: 'list',         element: <CompanyListPage /> },
          { path: 'new',          element: <CompanyNewPage /> },
          { path: ':id/edit',     element: <CompanyEditPage /> },
        ],
      },

      // Pengguna Sistem
      {
        path: 'users',
        children: [
          { index: true,      element: <UserListPage /> },
          { path: 'list',     element: <UserListPage /> },
          { path: 'new',      element: <UserNewPage /> },
          { path: ':id/edit', element: <UserEditPage /> },
        ],
      },

      // Data Pelanggan
      {
        path: 'customers',
        children: [
          { index: true,      element: <CustomerListPage /> },
          { path: 'list',     element: <CustomerListPage /> },
          { path: 'new',      element: <CustomerNewPage /> },
          { path: ':id/edit', element: <CustomerEditPage /> },
        ],
      },

      // Layanan Jasa
      {
        path: 'services',
        children: [
          { index: true,      element: <ServiceListPage /> },
          { path: 'list',     element: <ServiceListPage /> },
          { path: 'new',      element: <ServiceNewPage /> },
          { path: ':id/edit', element: <ServiceEditPage /> },
        ],
      },

      // Galeri Portofolio
      {
        path: 'portfolios',
        children: [
          { index: true,      element: <PortfolioListPage /> },
          { path: 'list',     element: <PortfolioListPage /> },
          { path: 'new',      element: <PortfolioNewPage /> },
          { path: ':id/edit', element: <PortfolioEditPage /> },
        ],
      },

      // Pesanan Masuk (CORE)
      {
        path: 'orders',
        children: [
          { index: true,       element: <OrderListPage /> },
          { path: 'list',      element: <OrderListPage /> },
          { path: 'new',       element: <OrderNewPage /> },
          { path: ':id',       element: <OrderDetailsPage /> },
          { path: ':id/edit',  element: <OrderEditPage /> },
        ],
      },

      // Laporan Keuangan
      { path: 'finance', element: <FinancePage /> },
    ],
  },
];
