import { fSub } from 'src/utils/format-time';

// ----------------------------------------------------------------------
// DATA PERUSAHAAN (3 PT di bawah Projasa Group)
// ----------------------------------------------------------------------

export const _companies = [
  {
    id: 'comp-1',
    nama_perusahaan: 'PT Projasa Teknika Studio',
    email: 'teknika@projasagroup.com',
    telepon: '+62 812-5532-111',
    alamat: 'Jl. Kuningan No. 789, Jakarta Selatan',
    deskripsi: 'Spesialis layanan teknik sipil, konstruksi, dan perizinan bangunan (PBG/SLF).',
    informasi_legal: 'NPWP: 01.234.567.8-901.000 | NIB: 1234567890123',
    logo_url: null,
    created_at: new Date('2024-01-01').toISOString(),
  },
  {
    id: 'comp-2',
    nama_perusahaan: 'PT Projasa Legal Insani',
    email: 'legal@projasagroup.com',
    telepon: '+62 812-5532-222',
    alamat: 'Jl. Sudirman No. 123, Jakarta Pusat',
    deskripsi: 'Fokus pada layanan perizinan usaha, legalitas dokumen, dan kepatuhan regulasi.',
    informasi_legal: 'NPWP: 01.234.567.8-902.000 | NIB: 9876543210123',
    logo_url: null,
    created_at: new Date('2024-01-01').toISOString(),
  },
  {
    id: 'comp-3',
    nama_perusahaan: 'PT Projasa Nusantara Jaya',
    email: 'nusantara@projasagroup.com',
    telepon: '+62 812-5532-333',
    alamat: 'Jl. Thamrin No. 456, Jakarta Pusat',
    deskripsi: 'Menyediakan layanan outsourcing SDM, jasa kendaraan, dan lingkungan hidup.',
    informasi_legal: 'NPWP: 01.234.567.8-903.000 | NIB: 1122334455667',
    logo_url: null,
    created_at: new Date('2024-01-01').toISOString(),
  },
];

// ----------------------------------------------------------------------
// PENGGUNA SISTEM (6 user, 4 role)
// ----------------------------------------------------------------------

export const PERMISSIONS = [
  'lihat_dasbor',
  'kelola_pengguna',
  'kelola_pelanggan',
  'kelola_layanan',
  'kelola_portofolio',
  'kelola_pesanan',
  'kelola_keuangan',
];

export const USER_ROLES = ['Superadmin', 'Admin', 'Finance', 'Staff'];

export const ROLE_COLORS = {
  Superadmin: 'error',
  Admin: 'primary',
  Finance: 'success',
  Staff: 'default',
};

export const _projasaUsers = [
  {
    id: 'user-1',
    company_id: null,
    name: 'Super Admin',
    email: 'superadmin@projasagroup.com',
    role_title: 'Superadmin',
    phone: '+62 812-5532-111',
    is_active: true,
    permissions: [...PERMISSIONS],
    created_at: new Date('2024-01-01').toISOString(),
  },
  {
    id: 'user-2',
    company_id: 'comp-2',
    name: 'Admin Legal',
    email: 'admin.legal@projasagroup.com',
    role_title: 'Admin',
    phone: '+62 812-5532-444',
    is_active: true,
    permissions: ['lihat_dasbor', 'kelola_pelanggan', 'kelola_layanan', 'kelola_pesanan'],
    created_at: new Date('2024-02-01').toISOString(),
  },
  {
    id: 'user-3',
    company_id: 'comp-2',
    name: 'Finance Legal',
    email: 'finance@projasa.co.id',
    role_title: 'Finance',
    phone: '+62 812-5532-555',
    is_active: true,
    permissions: ['lihat_dasbor', 'kelola_keuangan'],
    created_at: new Date('2024-02-15').toISOString(),
  },
  {
    id: 'user-4',
    company_id: 'comp-1',
    name: 'Admin Teknika',
    email: 'admin.teknika@projasagroup.com',
    role_title: 'Admin',
    phone: '+62 812-5532-666',
    is_active: true,
    permissions: ['lihat_dasbor', 'kelola_pelanggan', 'kelola_layanan', 'kelola_pesanan', 'kelola_portofolio'],
    created_at: new Date('2024-03-01').toISOString(),
  },
  {
    id: 'user-5',
    company_id: 'comp-3',
    name: 'Staff Nusantara',
    email: 'staff@nusantara.projasagroup.com',
    role_title: 'Staff',
    phone: null,
    is_active: true,
    permissions: ['lihat_dasbor', 'kelola_pesanan'],
    created_at: new Date('2024-04-01').toISOString(),
  },
  {
    id: 'user-6',
    company_id: null,
    name: 'Kamal Sanata',
    email: 'sanatakamal34@gmail.com',
    role_title: 'Staff',
    phone: null,
    is_active: false,
    permissions: ['lihat_dasbor'],
    created_at: new Date('2024-05-01').toISOString(),
  },
];

// ----------------------------------------------------------------------
// DATA PELANGGAN (8 pelanggan)
// ----------------------------------------------------------------------

export const _customers = [
  { id: 'cust-1', nama: 'PT Properti Indah',       email: 'propertiindah@email.com',       telepon: '+62 812-1001-0001', alamat: 'Jl. HR Rasuna Said No. 100, Jakarta Selatan' },
  { id: 'cust-2', nama: 'CV Konstruksi Utama',     email: 'konstruksi.utama@email.com',     telepon: '+62 812-1001-0002', alamat: 'Jl. Casablanca No. 55, Jakarta Selatan' },
  { id: 'cust-3', nama: 'PT Developer Nusantara',  email: 'developer.nusantara@email.com',  telepon: '+62 812-1001-0003', alamat: 'Jl. Kuningan No. 77, Jakarta Selatan' },
  { id: 'cust-4', nama: 'PT Bank Mandiri',         email: 'hr.bankmandiri@email.com',       telepon: '+62 812-1001-0004', alamat: 'Jl. Jend. Sudirman No. 55, Jakarta Pusat' },
  { id: 'cust-5', nama: 'PT Telkom Indonesia',     email: 'hr.telkom@email.com',            telepon: '+62 812-1001-0005', alamat: 'Jl. Gatot Subroto No. 151, Jakarta Selatan' },
  { id: 'cust-6', nama: 'CV Maju Jaya',            email: 'cv.majujaya@email.com',          telepon: '+62 812-1001-0006', alamat: 'Jl. Kemang Raya No. 45, Jakarta Selatan' },
  { id: 'cust-7', nama: 'Toko Berkah Abadi',       email: 'berkah.abadi@email.com',         telepon: '+62 812-1001-0007', alamat: 'Jl. Fatmawati No. 12, Jakarta Selatan' },
  { id: 'cust-8', nama: 'PT Sukses Mandiri',       email: 'sukses.mandiri@email.com',       telepon: '+62 812-1001-0008', alamat: 'Jl. Gatot Subroto No. 88, Jakarta Pusat' },
].map((c) => ({ ...c, created_at: new Date('2025-01-15').toISOString() }));

// ----------------------------------------------------------------------
// LAYANAN JASA (9 layanan, 5 kategori)
// ----------------------------------------------------------------------

export const SERVICE_CATEGORIES = ['Perizinan', 'Konstruksi', 'SDM', 'Kendaraan', 'Lingkungan'];

export const CATEGORY_COLORS = {
  Perizinan:   'success',
  Konstruksi:  'primary',
  SDM:         'default',
  Kendaraan:   'warning',
  Lingkungan:  'info',
};

export const _services = [
  { id: 'svc-1', company_id: 'comp-1', nama_layanan: 'Pengetesan Bangunan',  kategori: 'Konstruksi', harga: 25000000, estimasi_durasi: '2 Minggu',  deskripsi: 'Layanan pengetesan struktur bangunan meliputi uji tekan, tarik, dan non-destruktif.' },
  { id: 'svc-2', company_id: 'comp-1', nama_layanan: 'As Built Drawing',     kategori: 'Konstruksi', harga: 8000000,  estimasi_durasi: '1 Minggu',  deskripsi: 'Pembuatan gambar teknis as-built drawing sesuai kondisi aktual bangunan terbangun.' },
  { id: 'svc-3', company_id: 'comp-1', nama_layanan: 'PBG - SLF',            kategori: 'Perizinan',  harga: 20000000, estimasi_durasi: '1 Bulan',   deskripsi: 'Pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF).' },
  { id: 'svc-4', company_id: 'comp-3', nama_layanan: 'Jasa Outsourcing',     kategori: 'SDM',        harga: 5000000,  estimasi_durasi: '-',          deskripsi: 'Layanan penyediaan tenaga kerja outsourcing terlatih untuk berbagai bidang.' },
  { id: 'svc-5', company_id: 'comp-2', nama_layanan: 'Izin Usaha Mikro',    kategori: 'Perizinan',  harga: 1500000,  estimasi_durasi: '3 Hari',    deskripsi: 'Layanan perizinan usaha mikro dengan proses cepat dan terpadu.' },
  { id: 'svc-6', company_id: 'comp-2', nama_layanan: 'Izin Usaha Kecil',    kategori: 'Perizinan',  harga: 3500000,  estimasi_durasi: '5 Hari',    deskripsi: 'Izin resmi untuk usaha kecil menengah, termasuk NIB dan dokumen pendukung.' },
  { id: 'svc-7', company_id: 'comp-2', nama_layanan: 'Izin Reklame',        kategori: 'Perizinan',  harga: 2500000,  estimasi_durasi: '7 Hari',    deskripsi: 'Penerbitan izin pemasangan reklame untuk keperluan promosi usaha.' },
  { id: 'svc-8', company_id: 'comp-3', nama_layanan: 'SAMSAT',              kategori: 'Kendaraan',  harga: 500000,   estimasi_durasi: '1 Hari',    deskripsi: 'Layanan pengurusan pajak kendaraan bermotor melalui Samsat.' },
  { id: 'svc-9', company_id: 'comp-1', nama_layanan: 'UKL - UPL',          kategori: 'Lingkungan', harga: 15000000, estimasi_durasi: '3 Minggu',  deskripsi: 'Penyusunan dokumen Upaya Pengelolaan Lingkungan Hidup & Pemantauan Lingkungan Hidup.' },
].map((s) => ({ ...s, created_at: new Date('2024-06-01').toISOString() }));

// ----------------------------------------------------------------------
// PESANAN MASUK - service_requests (CORE)
// Format nomor: SRV-YYYY-XXXXXX
// ----------------------------------------------------------------------

export const ORDER_STATUSES = ['pending', 'processing', 'finished'];

export const ORDER_STATUS_COLORS = {
  pending:    'warning',
  processing: 'primary',
  finished:   'success',
};

export const ORDER_STATUS_LABELS = {
  pending:    'Pending',
  processing: 'Sedang Proses',
  finished:   'Selesai',
};

export const _orders = [
  {
    id: 'ord-1',
    nomor_registrasi: 'SRV-2026-000001',
    customer_id: 'cust-6',
    service_id: 'svc-5',
    status: 'processing',
    public_note: 'Klien membutuhkan izin usaha mikro untuk toko sembako yang baru dibuka.',
    internal_note: 'Dokumen KTP dan KK sudah diterima. Menunggu verifikasi kelurahan.',
    created_at: fSub({ days: 5 }),
    updated_at: fSub({ days: 3 }),
  },
  {
    id: 'ord-2',
    nomor_registrasi: 'SRV-2026-000002',
    customer_id: 'cust-1',
    service_id: 'svc-9',
    status: 'pending',
    public_note: 'Butuh dokumen UKL-UPL untuk properti di kawasan Serpong.',
    internal_note: null,
    created_at: fSub({ days: 3 }),
    updated_at: fSub({ days: 3 }),
  },
  {
    id: 'ord-3',
    nomor_registrasi: 'SRV-2026-000003',
    customer_id: 'cust-4',
    service_id: 'svc-4',
    status: 'finished',
    public_note: 'Penyediaan 50 tenaga customer service untuk cabang Jabodebek.',
    internal_note: 'Kontrak sudah TTD. 50 tenaga sudah ditempatkan per 1 Maret 2026.',
    created_at: fSub({ days: 45 }),
    updated_at: fSub({ days: 10 }),
  },
  {
    id: 'ord-4',
    nomor_registrasi: 'SRV-2026-000004',
    customer_id: 'cust-2',
    service_id: 'svc-3',
    status: 'processing',
    public_note: 'PBG untuk gedung perkantoran 8 lantai di kawasan Kuningan.',
    internal_note: 'IMB lama sudah ada. Tinggal proses perpanjangan ke PBG.',
    created_at: fSub({ days: 20 }),
    updated_at: fSub({ days: 2 }),
  },
  {
    id: 'ord-5',
    nomor_registrasi: 'SRV-2026-000005',
    customer_id: 'cust-7',
    service_id: 'svc-6',
    status: 'pending',
    public_note: 'Izin usaha kecil untuk toko retail pakaian.',
    internal_note: null,
    created_at: fSub({ hours: 6 }),
    updated_at: fSub({ hours: 6 }),
  },
  {
    id: 'ord-6',
    nomor_registrasi: 'SRV-2026-000006',
    customer_id: 'cust-5',
    service_id: 'svc-2',
    status: 'finished',
    public_note: 'As-built drawing untuk gedung pusat data PT Telkom.',
    internal_note: 'Selesai 2 hari lebih cepat dari estimasi.',
    created_at: fSub({ days: 30 }),
    updated_at: fSub({ days: 18 }),
  },
];

// ─── Helper: enriched users ──────────

export const getUsersEnriched = () =>
  _projasaUsers.map((user) => ({
    ...user,
    company: user.company_id ? _companies.find((c) => c.id === user.company_id)?.nama_perusahaan ?? 'System' : 'System',
    status: user.is_active ? 'active' : 'banned',
  }));

// ─── Helper: enriched order (join dengan customer & service) ──────────

export const getOrdersEnriched = () =>
  _orders.map((order) => ({
    ...order,
    customer: _customers.find((c) => c.id === order.customer_id) ?? null,
    service:  _services.find((s) => s.id === order.service_id) ?? null,
    company:  (() => {
      const svc = _services.find((s) => s.id === order.service_id);
      return svc ? _companies.find((c) => c.id === svc.company_id) ?? null : null;
    })(),
  }));

// ----------------------------------------------------------------------
// GALERI PORTOFOLIO (4 proyek)
// ----------------------------------------------------------------------

export const _portfolios = [
  {
    id: 'port-1',
    judul: 'PBG Mall Sentra Bisnis',
    tahun_selesai: '2024',
    gambar_url: null,
    deskripsi: 'Pengurusan PBG dan SLF untuk Mall Sentra Bisnis dengan luas 50.000 m2 di kawasan pusat bisnis Jakarta.',
    created_at: new Date('2024-06-01').toISOString(),
  },
  {
    id: 'port-2',
    judul: 'UKL-UPL Pabrik Tekstil',
    tahun_selesai: '2023',
    gambar_url: null,
    deskripsi: 'Penyusunan dokumen lingkungan untuk pabrik tekstil di kawasan industri Karawang.',
    created_at: new Date('2023-11-01').toISOString(),
  },
  {
    id: 'port-3',
    judul: 'Outsourcing PT Bank Mandiri',
    tahun_selesai: '2024',
    gambar_url: null,
    deskripsi: 'Penyediaan 50 tenaga customer service untuk cabang-cabang Bank Mandiri di Jabodebek.',
    created_at: new Date('2024-03-01').toISOString(),
  },
  {
    id: 'port-4',
    judul: 'Izin Usaha CV Maju Jaya',
    tahun_selesai: '2024',
    gambar_url: null,
    deskripsi: 'Pengurusan izin usaha lengkap untuk CV Maju Jaya dalam waktu 14 hari kerja.',
    created_at: new Date('2024-09-01').toISOString(),
  },
];

// ----------------------------------------------------------------------
// LAPORAN KEUANGAN
// ----------------------------------------------------------------------

export const _incomes = [
  { id: 'inc-1', tanggal: fSub({ days: 2 }),  sumber: 'Pembayaran SRV-2026-000003 (Bank Mandiri Outsourcing)', jumlah: 5000000 },
  { id: 'inc-2', tanggal: fSub({ days: 8 }),  sumber: 'Pembayaran SRV-2026-000006 (Telkom As Built Drawing)',  jumlah: 8000000 },
  { id: 'inc-3', tanggal: fSub({ days: 15 }), sumber: 'DP SRV-2026-000004 (PBG Konstruksi Utama)',              jumlah: 10000000 },
];

export const _expenses = [
  { id: 'exp-1', tanggal: fSub({ days: 5 }),  kategori: 'Operasional', deskripsi: 'Biaya listrik & internet kantor bulan Mei 2026',    jumlah: 2500000 },
  { id: 'exp-2', tanggal: fSub({ days: 10 }), kategori: 'Gaji',        deskripsi: 'Gaji staff bulan April 2026',                        jumlah: 15000000 },
  { id: 'exp-3', tanggal: fSub({ days: 12 }), kategori: 'Material',    deskripsi: 'Pembelian alat ukur pengetesan bangunan',             jumlah: 3200000 },
  { id: 'exp-4', tanggal: fSub({ days: 20 }), kategori: 'Transport',   deskripsi: 'Biaya survey lapangan proyek PBG Kuningan',           jumlah: 750000 },
];

// ─── Summary keuangan bulan ini ──────────────────────────────────────

export const getFinanceSummary = () => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const totalIncome = _incomes
    .filter((i) => new Date(i.tanggal) >= startOfMonth)
    .reduce((sum, i) => sum + i.jumlah, 0);

  const totalExpense = _expenses
    .filter((e) => new Date(e.tanggal) >= startOfMonth)
    .reduce((sum, e) => sum + e.jumlah, 0);

  return {
    totalIncome,
    totalExpense,
    netProfit: totalIncome - totalExpense,
  };
};

// ─── Dashboard summary stats ──────────────────────────────────────────

export const getDashboardStats = () => {
  const finance = getFinanceSummary();
  return {
    totalOrders:     _orders.length,
    pendingOrders:   _orders.filter((o) => o.status === 'pending').length,
    processingOrders: _orders.filter((o) => o.status === 'processing').length,
    finishedOrders:  _orders.filter((o) => o.status === 'finished').length,
    incomeThisMonth: finance.totalIncome,
    expenseThisMonth: finance.totalExpense,
  };
};
