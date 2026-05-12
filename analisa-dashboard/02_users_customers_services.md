# Analisa Dashboard Lama Projasa — Bagian 02

## Pengguna Sistem, Data Pelanggan, Layanan Jasa

---

## 📍 URL yang Dianalisa

| No | Halaman | URL |
|----|---------|-----|
| 3 | Pengguna Sistem | `https://projasa.co.id/admin/users` |
| 3.1 | Tambah User Baru | `https://projasa.co.id/admin/users/create` |
| 4 | Manajemen Pelanggan | `https://projasa.co.id/admin/customers` |
| 4.1 | Tambah Pelanggan Baru | `https://projasa.co.id/admin/customers/create` |
| 5 | Manajemen Layanan | `https://projasa.co.id/admin/services` |
| 5.1 | Tambah Layanan Baru | `https://projasa.co.id/admin/services/create` |

---

## 3. Pengguna Sistem (`/admin/users`)

### Header
- Judul: "Users Management"
- Subtitle: "Kelola semua pengguna dan hak akses mereka"
- Tombol: "+ Tambah User" (pojok kanan atas)

### Tabel Pengguna

| Kolom | Keterangan |
|-------|------------|
| PENGGUNA | Nama + No. telepon (di bawah nama) |
| EMAIL | Alamat email |
| ROLE | Badge warna (Staff, Finance, Super admin, Admin) |
| PERUSAHAAN | Assigned company atau "System" |
| AKSI | Edit, Hapus |

### Data User yang Ada

| No | Nama | Email | Telepon | Role | Perusahaan |
|----|------|-------|---------|------|------------|
| 1 | kamal sanata | sanatakamal34@gmail.com | No phone | Staff | System |
| 2 | adminxps | budakizcrew@gmail.com | No phone | Staff | System |
| 3 | Finance Legal | finance@projasa.co.id | +62 812-5532-111 | Finance | PT Projasa Legal Insani |
| 4 | Super Admin | superadmin@projasa.co.id | +62 812-5532-111 | Super admin | System |
| 5 | Super Admin | superadmin@projasagroup.com | +62 812-5532-111 | Super admin | System |
| 6 | Admin Legal | admin.legal@projasagroup.com | +62 812-5532-111 | Admin | PT Projasa Legal Insani |

### 4 Role yang Teridentifikasi

| Role | Badge Warna | Keterangan |
|------|-------------|------------|
| Super admin | Ungu | Akses penuh ke semua modul & semua perusahaan |
| Admin | Biru | Admin per perusahaan |
| Finance | Hijau | Khusus akses keuangan |
| Staff | Abu-abu | Akses terbatas sesuai permission |

### Catatan Penting
- User bisa di-assign ke **perusahaan tertentu** atau **"System"** (akses semua)
- Role "Finance" terpisah — artinya ada kebutuhan khusus untuk akses laporan keuangan
- Ada user tanpa nomor telepon ("No phone") — field telepon opsional

---

## 3.1 Tambah User Baru (`/admin/users/create`)

### Form Fields

| No | Field | Tipe | Required | Placeholder/Keterangan |
|----|-------|------|----------|------------------------|
| 1 | **Company Assignment** | Dropdown | Opsional | "-- Select Company --" / Assign ke perusahaan tertentu |
| 2 | Full Name | Text | Ya | "e.g. John Doe" |
| 3 | Role Title | Dropdown | Ya | Options: "Company Admin" (dan lainnya) — Label Only |
| 4 | Email Address | Email | Ya | (pre-filled: superadmin@projasagroup.com) |
| 5 | Password | Password | Ya | ●●●●●●●●●● |
| 6 | Confirm Password | Password | Ya | |
| 7 | Phone Number | Text | Opsional | "e.g. 08123456789" |

### Section: GRANT ACCESS PERMISSIONS (Checkbox)

| No | Permission | Keterangan |
|----|-----------|------------|
| 1 | Lihat Dasbor | Akses halaman dashboard |
| 2 | Kelola Pengguna | CRUD user |
| 3 | Kelola Pelanggan | CRUD pelanggan |
| 4 | Kelola Layanan | CRUD layanan |
| 5 | Kelola Portofolio | CRUD galeri proyek |
| 6 | Kelola Pesanan | CRUD service requests |
| 7 | Kelola Keuangan | Akses laporan keuangan |

### Tombol Aksi
- **Create User** (biru/ungu, primary)
- **Cancel** (abu, secondary)

### Catatan Penting
- **Role Title** hanya label display, bukan penentu akses
- **Akses sebenarnya ditentukan oleh checkbox permissions** — ini granular permission system
- User bisa di-assign ke 1 perusahaan atau "System" (semua perusahaan)

---

## 4. Manajemen Pelanggan (`/admin/customers`)

### Header
- Judul: "Manajemen Pelanggan"
- Subtitle: "Kelola semua data pelanggan dari sini"
- Tombol: "+ Tambah Pelanggan"

### Tabel Pelanggan

| Kolom | Keterangan |
|-------|------------|
| NAMA PELANGGAN | Nama + email (di bawah nama) |
| KONTAK | No. telepon |
| ALAMAT | Alamat lengkap (truncated) |
| AKSI | Edit, Hapus |

### Data Pelanggan yang Ada

| No | Nama | Email | Kontak | Alamat |
|----|------|-------|--------|--------|
| 1 | PT Properti Indah | propertiindah@email.com | +62 812-5532-111 | Jl. HR Rasuna Said No. 100, Jakarta Sela... |
| 2 | CV Konstruksi Utama | konstruksi.utama@email.com | +62 812-5532-111 | Jl. Casablanca No. 55, Jakarta Selatan |
| 3 | PT Developer Nusantara | developer.nusantara@email.com | +62 812-5532-111 | Jl. Kuningan No. 77, Jakarta Selatan |
| 4 | PT Bank Mandiri | hr.bankmandiri@email.com | +62 812-5532-111 | Jl. Jend. Sudirman No. 55, Jakarta Pusat... |
| 5 | PT Telkom Indonesia | hr.telkom@email.com | +62 812-5532-111 | Jl. Gatot Subroto No. 151, Jakarta Selat... |
| 6 | CV Maju Jaya | cv.majujaya@email.com | +62 812-5532-111 | Jl. Kemang Raya No. 45, Jakarta Selatan |
| 7 | Toko Berkah Abadi | berkah.abadi@email.com | +62 812-5532-111 | Jl. Fatmawati No. 12, Jakarta Selatan |
| 8 | PT Sukses Mandiri | sukses.mandiri@email.com | +62 812-5532-111 | Jl. Gatot Subroto No. 88, Jakarta Pusat |

### Catatan
- Avatar/initial menggunakan huruf pertama nama (P, C, T)
- Warna avatar berbeda per tipe (PT = ungu, CV = hijau, Toko = biru)
- Di pojok kiri bawah terlihat: "SUPER ADMIN" badge — menandakan user yang login

---

## 4.1 Tambah Pelanggan Baru (`/admin/customers/create`)

### Form Fields

| No | Field | Tipe | Required | Placeholder/Keterangan |
|----|-------|------|----------|------------------------|
| 1 | Nama Lengkap | Text | ✅ Ya | "Masukkan nama lengkap pelanggan" |
| 2 | Alamat Email | Email | ❌ Opsional | "contoh@email.com" — untuk komunikasi dan notifikasi |
| 3 | Nomor Telepon | Text | Opsional | "08xxxxxxxxxxx" |
| 4 | Alamat Lengkap | Textarea | Opsional | "Masukkan alamat lengkap pelanggan" |

### Tombol Aksi
- **Simpan Pelanggan** (hijau/teal, primary)
- **Batal** (abu, secondary)

### Catatan
- Form pelanggan sangat **simpel** — hanya 4 field
- Tidak ada field "tipe badan usaha" (PT/CV/UD) — kemungkinan dideteksi otomatis dari nama
- Email opsional — "untuk komunikasi dan notifikasi"
- Tidak ada field khusus untuk kontak person / PIC dari sisi klien

---

## 5. Manajemen Layanan (`/admin/services`)

### Header
- Judul: "Manajemen Layanan"
- Subtitle: "Kelola semua jenis layanan yang tersedia"
- Tombol: "+ Tambah Layanan"

### Tabel Layanan

| Kolom | Keterangan |
|-------|------------|
| NAMA LAYANAN | Nama + deskripsi singkat (di bawah nama, truncated) |
| KATEGORI | Badge warna |
| HARGA (IDR) | Harga dalam Rupiah |
| DURASI | Estimasi durasi (semua masih "-" / kosong) |
| AKSI | Edit, Hapus |

### Data Layanan yang Ada

| No | Nama Layanan | Deskripsi (truncated) | Kategori | Harga | Durasi |
|----|-------------|----------------------|----------|-------|--------|
| 1 | Pengetesan Bangunan | Layanan pengetesan struktur bangunan mel... | Konstruksi (biru) | Rp 25.000.000 | - |
| 2 | As Built Drawing | Pembuatan gambar teknis as-built drawing... | Konstruksi (biru) | Rp 8.000.000 | - |
| 3 | PBG - SLF | Pengurusan Persetujuan Bangunan Gedung (... | Perizinan (hijau) | Rp 20.000.000 | - |
| 4 | Jasa Outsourcing | Layanan penyediaan tenaga kerja outsourc... | SDM (abu) | Rp 5.000.000 | - |
| 5 | Izin Usaha Mikro | Layanan perizinan usaha mikro dengan pro... | Perizinan (hijau) | Rp 1.500.000 | - |
| 6 | Izin Usaha Kecil | Izin resmi untuk usaha kecil menengah. P... | Perizinan (hijau) | Rp 3.500.000 | - |
| 7 | Izin Reklame | Penerbitan izin pemasangan reklame untuk... | Perizinan (hijau) | Rp 2.500.000 | - |
| 8 | SAMSAT | Layanan pengurusan pajak kendaraan bermo... | Kendaraan (kuning) | Rp 500.000 | - |
| 9 | UKL - UPL | Penyusunan dokumen Upaya Pengelolaan Lin... | Lingkungan (biru muda) | Rp 15.000.000 | - |

### Kategori Layanan (Badge Warna)

| Kategori | Warna Badge |
|----------|-------------|
| Konstruksi | Biru |
| Perizinan | Hijau |
| SDM | Abu-abu |
| Kendaraan | Kuning |
| Lingkungan | Biru muda |

### Catatan
- Kolom **DURASI** semua masih kosong ("-") — field ini ada tapi belum diisi
- Layanan terkait dengan perusahaan (dari scraping publik sebelumnya)
- Di pojok kiri bawah: "SUPER ADMIN - Semua Perusahaan" — konfirmasi superadmin bisa lihat semua

---

## 5.1 Tambah Layanan Baru (`/admin/services/create`)

### Form Fields

| No | Field | Tipe | Required | Placeholder/Keterangan |
|----|-------|------|----------|------------------------|
| 1 | Pilih Perusahaan | Dropdown | ✅ Ya | "-- Pilih Perusahaan --" / Layanan terdaftar di perusahaan yang dipilih |
| 2 | Nama Layanan | Text | ✅ Ya | "Masukkan nama layanan" |
| 3 | Kategori | Text | Opsional | "Contoh: Renovasi, Konstruksi" |
| 4 | Harga (IDR) | Number | ✅ Ya | "Contoh: 1000000" |
| 5 | Estimasi Durasi | Text | Opsional | "Contoh: 3 Hari, 1 Minggu, 2 Bulan" — Perkiraan waktu pengerjaan |
| 6 | Deskripsi Layanan | Textarea | Opsional | "Jelaskan detail layanan yang ditawarkan..." |

### Tombol Aksi
- **Simpan Layanan** (orange, primary)
- **Batal** (abu, secondary)

### Catatan Penting
- **Layanan wajib di-assign ke perusahaan** — relasi 1 layanan : 1 perusahaan
- **Kategori** adalah free text, bukan dropdown/enum — bisa diisi apa saja
- **Harga** dalam IDR (Rupiah), format angka tanpa titik
- **Estimasi Durasi** juga free text — bukan field numerik (bisa "3 Hari", "1 Minggu", dll)

---

## 📊 Tabel Database yang Teridentifikasi (Update)

### Tabel: `users`

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | Auto increment |
| company_id | INT / NULL | FK → companies.id | NULL = System (akses semua) |
| name | VARCHAR(100) | Ya | Nama lengkap |
| email | VARCHAR(150) | Ya, Unique | Email login |
| password | VARCHAR(255) | Ya | Hashed |
| role_title | VARCHAR(50) | Ya | Label: 'Super admin', 'Admin', 'Finance', 'Staff' |
| phone | VARCHAR(20) | Tidak | No. telepon |
| is_active | BOOLEAN | Default true | |
| created_at | TIMESTAMP | Auto | |
| updated_at | TIMESTAMP | Auto | |

### Tabel: `user_permissions` (Pivot/Junction)

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT | PK |
| user_id | INT | FK → users.id |
| permission | VARCHAR(50) | Nama permission |

**Daftar Permission:**
1. `lihat_dasbor`
2. `kelola_pengguna`
3. `kelola_pelanggan`
4. `kelola_layanan`
5. `kelola_portofolio`
6. `kelola_pesanan`
7. `kelola_keuangan`

### Tabel: `customers`

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | Auto increment |
| nama | VARCHAR(200) | Ya | Nama perusahaan/individu |
| email | VARCHAR(150) | Tidak | Untuk komunikasi & notifikasi |
| telepon | VARCHAR(20) | Tidak | No. telepon |
| alamat | TEXT | Tidak | Alamat lengkap |
| created_at | TIMESTAMP | Auto | |
| updated_at | TIMESTAMP | Auto | |

### Tabel: `services`

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | Auto increment |
| company_id | INT | FK → companies.id, Ya | Layanan milik perusahaan mana |
| nama_layanan | VARCHAR(200) | Ya | Nama layanan |
| kategori | VARCHAR(100) | Tidak | Free text (Konstruksi, Perizinan, SDM, dll) |
| harga | DECIMAL(15,2) | Ya | Harga dalam IDR |
| estimasi_durasi | VARCHAR(100) | Tidak | Free text (3 Hari, 1 Minggu, dll) |
| deskripsi | TEXT | Tidak | Deskripsi detail layanan |
| created_at | TIMESTAMP | Auto | |
| updated_at | TIMESTAMP | Auto | |

---

## 🔗 Relasi Antar Tabel (Update)

```
companies (1) ──────► (N) users          → User di-assign ke 1 company
companies (1) ──────► (N) services       → Layanan milik 1 company
users (1) ──────────► (N) user_permissions → User punya banyak permission
customers (1) ──────► (N) service_orders  → Pelanggan punya banyak order
services (1) ────────► (N) service_orders  → Layanan bisa di-order berkali-kali
```

---

## 💡 Insight Penting

1. **Permission-based access control** — bukan murni role-based. Role hanya label, akses ditentukan oleh checkbox permission.

2. **Multi-tenant by company** — user bisa di-assign ke perusahaan tertentu atau "System" (semua). Ini penting untuk isolasi data per PT.

3. **Kategori layanan = free text** — tidak di-normalize ke tabel terpisah. Fleksibel tapi bisa inkonsisten (typo, dll).

4. **Durasi = free text** — bukan field numerik. Artinya tidak bisa dipakai untuk kalkulasi otomatis estimasi selesai.

5. **Form pelanggan sangat minimal** — hanya nama, email, telepon, alamat. Tidak ada field tipe badan usaha, NPWP, atau kontak person.

---

## ⏭️ Halaman Berikutnya yang Perlu Dianalisa

- [ ] Galeri Proyek (`/admin/portfolios`)
- [ ] Pengaturan Slider (`/admin/sliders`)
- [ ] Pesanan Masuk (`/admin/service-requests`) ⭐ PALING PENTING
- [ ] Detail Pesanan (`/admin/service-requests/{id}`)
- [ ] Laporan Keuangan (`/admin/finance`)
