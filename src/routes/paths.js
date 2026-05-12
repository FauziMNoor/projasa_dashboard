import { kebabCase } from 'es-toolkit';

import { _id } from 'src/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  // Halaman publik
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',

  // AUTH
  auth: {
    supabase: {
      signIn:         `${ROOTS.AUTH}/supabase/sign-in`,
      signUp:         `${ROOTS.AUTH}/supabase/sign-up`,
      verify:         `${ROOTS.AUTH}/supabase/verify`,
      updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
      resetPassword:  `${ROOTS.AUTH}/supabase/reset-password`,
    },
  },

  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,

    // ─── Data Perusahaan ──────────────────────────────────────────────
    companies: {
      root: `${ROOTS.DASHBOARD}/companies`,
      list: `${ROOTS.DASHBOARD}/companies/list`,
      new:  `${ROOTS.DASHBOARD}/companies/new`,
      edit: (id) => `${ROOTS.DASHBOARD}/companies/${id}/edit`,
      demo: { edit: `${ROOTS.DASHBOARD}/companies/${MOCK_ID}/edit` },
    },

    // ─── Pengguna Sistem ──────────────────────────────────────────────
    users: {
      root:    `${ROOTS.DASHBOARD}/users`,
      list:    `${ROOTS.DASHBOARD}/users/list`,
      new:     `${ROOTS.DASHBOARD}/users/new`,
      account: `${ROOTS.DASHBOARD}/users/account`,
      edit:    (id) => `${ROOTS.DASHBOARD}/users/${id}/edit`,
      demo:    { edit: `${ROOTS.DASHBOARD}/users/${MOCK_ID}/edit` },
    },

    // ─── Data Pelanggan ───────────────────────────────────────────────
    customers: {
      root: `${ROOTS.DASHBOARD}/customers`,
      list: `${ROOTS.DASHBOARD}/customers/list`,
      new:  `${ROOTS.DASHBOARD}/customers/new`,
      edit: (id) => `${ROOTS.DASHBOARD}/customers/${id}/edit`,
      demo: { edit: `${ROOTS.DASHBOARD}/customers/${MOCK_ID}/edit` },
    },

    // ─── Layanan Jasa ─────────────────────────────────────────────────
    services: {
      root: `${ROOTS.DASHBOARD}/services`,
      list: `${ROOTS.DASHBOARD}/services/list`,
      new:  `${ROOTS.DASHBOARD}/services/new`,
      edit: (id) => `${ROOTS.DASHBOARD}/services/${id}/edit`,
      demo: { edit: `${ROOTS.DASHBOARD}/services/${MOCK_ID}/edit` },
    },

    // ─── Galeri Portofolio ────────────────────────────────────────────
    portfolios: {
      root: `${ROOTS.DASHBOARD}/portfolios`,
      list: `${ROOTS.DASHBOARD}/portfolios/list`,
      new:  `${ROOTS.DASHBOARD}/portfolios/new`,
      edit: (id) => `${ROOTS.DASHBOARD}/portfolios/${id}/edit`,
      demo: { edit: `${ROOTS.DASHBOARD}/portfolios/${MOCK_ID}/edit` },
    },

    // ─── Pesanan Masuk (CORE) ─────────────────────────────────────────
    orders: {
      root:    `${ROOTS.DASHBOARD}/orders`,
      list:    `${ROOTS.DASHBOARD}/orders/list`,
      new:     `${ROOTS.DASHBOARD}/orders/new`,
      details: (id) => `${ROOTS.DASHBOARD}/orders/${id}`,
      edit:    (id) => `${ROOTS.DASHBOARD}/orders/${id}/edit`,
      demo:    {
        details: `${ROOTS.DASHBOARD}/orders/${MOCK_ID}`,
        edit:    `${ROOTS.DASHBOARD}/orders/${MOCK_ID}/edit`,
      },
    },

    // ─── Laporan Keuangan ─────────────────────────────────────────────
    finance: {
      root: `${ROOTS.DASHBOARD}/finance`,
    },
  },
};
