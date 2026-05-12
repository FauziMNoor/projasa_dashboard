import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  dashboard: icon('ic-dashboard'),
  company:   icon('ic-banking'),
  user:      icon('ic-user'),
  customer:  icon('ic-label'),
  service:   icon('ic-course'),
  portfolio: icon('ic-tour'),
  order:     icon('ic-order'),
  finance:   icon('ic-invoice'),
};

// ----------------------------------------------------------------------

/**
 * Navigasi dashboard PROJASA
 *
 * Setiap item dapat memiliki:
 * - `title`        : Label menu
 * - `path`         : URL tujuan
 * - `icon`         : Ikon komponen
 * - `allowedRoles` : Array role yang boleh melihat item ini
 * - `children`     : Sub-menu
 */
export const navData = [
  // ─── ADMIN AREA ───────────────────────────────────────────────────────
  {
    subheader: 'Admin Area',
    items: [
      {
        title: 'Dasbor Utama',
        path: paths.dashboard.root,
        icon: ICONS.dashboard,
      },
      {
        title: 'Data Perusahaan',
        path: paths.dashboard.companies.root,
        icon: ICONS.company,
      },
    ],
  },

  // ─── MANAJEMEN DATA ───────────────────────────────────────────────────
  {
    subheader: 'Manajemen Data',
    items: [
      {
        title: 'Pengguna Sistem',
        path: paths.dashboard.users.root,
        icon: ICONS.user,
        children: [
          { title: 'Daftar Pengguna', path: paths.dashboard.users.list },
          { title: 'Tambah Pengguna', path: paths.dashboard.users.new },
        ],
      },
      {
        title: 'Data Pelanggan',
        path: paths.dashboard.customers.root,
        icon: ICONS.customer,
        children: [
          { title: 'Daftar Pelanggan', path: paths.dashboard.customers.list },
          { title: 'Tambah Pelanggan', path: paths.dashboard.customers.new },
        ],
      },
      {
        title: 'Layanan Jasa',
        path: paths.dashboard.services.root,
        icon: ICONS.service,
        children: [
          { title: 'Daftar Layanan', path: paths.dashboard.services.list },
          { title: 'Tambah Layanan', path: paths.dashboard.services.new },
        ],
      },
      {
        title: 'Galeri Portofolio',
        path: paths.dashboard.portfolios.root,
        icon: ICONS.portfolio,
        children: [
          { title: 'Semua Proyek', path: paths.dashboard.portfolios.list },
          { title: 'Tambah Proyek', path: paths.dashboard.portfolios.new },
        ],
      },
    ],
  },

  // ─── OPERASIONAL ──────────────────────────────────────────────────────
  {
    subheader: 'Operasional',
    items: [
      {
        title: 'Pesanan Masuk',
        path: paths.dashboard.orders.root,
        icon: ICONS.order,
        children: [
          { title: 'Semua Pesanan', path: paths.dashboard.orders.list },
          { title: 'Buat Pesanan',  path: paths.dashboard.orders.new },
        ],
      },
      {
        title: 'Laporan Keuangan',
        path: paths.dashboard.finance.root,
        icon: ICONS.finance,
      },
    ],
  },
];
