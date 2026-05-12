# Analisa Dashboard Lama Projasa (projasa.co.id)

## Dokumen 01: Dashboard Overview & Data Perusahaan

---

## 📍 URL yang Dianalisa

| No | Halaman | URL |
|----|---------|-----|
| 1 | Dashboard Utama | `https://projasa.co.id/dashboard` |
| 2 | Data Perusahaan | `https://projasa.co.id/admin/companies` |
| 3 | Tambah Perusahaan | `https://projasa.co.id/admin/companies/create` |

---

## 1. Dashboard Utama (`/dashboard`)

### Summary Cards (4 kartu statistik atas)

| No | Label | Value | Warna |
|----|-------|-------|-------|
| 1 | Total Permintaan | 2 | Biru |
| 2 | Menunggu | 1 | Kuning/Orange |
| 3 | Pemasukan Bulan Ini | Rp 0 | Hijau |
| 4 | Pengeluaran Bulan Ini | Rp 0 | Merah/Pink |

### Tabel "Permintaan Terbaru" (5 permintaan terakhir)

| Kolom | Contoh Data |
|-------|-------------|
| NO. REG | REG-20251228-001 |
| PELANGGAN | CV Maju Jaya |
| LAYANAN | Izin Usaha Mikro |
| STATUS | Processing (badge kuning) |

**Data yang terlihat:**

| No. Reg | Pelanggan | Layanan | Status |
|---------|-----------|---------|--------|
| REG-20251228-001 | CV Maju Jaya | Izin Usaha Mikro | Processing |
| REG-20251228-002 | PT Properti Indah | UKL - UPL | Pending |

### Panel "Aksi Cepat" (Quick Actions)

| No | Aksi | Icon/Warna |
|----|------|------------|
| 1 | Kelola Permintaan | Biru |
| 2 | Tambah Pelanggan | Hijau |
| 3 | Tambah Layanan | Abu |
| 4 | Laporan Keuangan | Kuning |
| 5 | Tambah Portfolio | Abu |
| 6 | Tambah Pengguna | Abu |
| 7 | Kelola Perusahaan | Ungu |

### Sidebar Menu (Navigasi)

```
ADMIN AREA
├── Dashor Utama (Dashboard)
├── Data Perusahaan
│
MANAJEMEN DATA
├── Pengguna Sistem
├── Data Pelanggan
├── Layanan Jasa
├── Galeri Proyek
├── Pengaturan Slider
│
OPERASIONAL
├── Pesanan Masuk
└── Laporan Keuangan
```

**Total modul yang teridentifikasi: 9 menu**

---

## 2. Data Perusahaan (`/admin/companies`)

### Header
- Judul: "Manajemen Perusahaan"
- Subtitle: "Kelola data perusahaan yang terdaftar"
- Tombol: "+ Tambah Perusahaan"

### Tabel Perusahaan

| Kolom | Keterangan |
|-------|------------|
| PERUSAHAAN | Nama + email (di bawah nama) |
| KONTAK | No. telepon |
| ALAMAT | Alamat lengkap |
| AKSI | Edit, Hapus |

**Data yang ada saat ini:**

| No | Perusahaan | Email | Kontak | Alamat |
|----|-----------|-------|--------|--------|
| 1 | PT Projasa Teknika Studio | teknika@projasagroup.com | +62 812-5532-111 | Jl. Kuningan No. 789, Jakarta Selatan |
| 2 | PT Projasa Legal Insani | legal@projasagroup.com | +62 812-5532-111 | Jl. Sudirman No. 123, Jakarta Pusat |
| 3 | PT Projasa Nusantara Jaya | nusantara@projasagroup.com | +62 812-5532-111 | Jl. Thamrin No. 456, Jakarta Pusat |

### Aksi per Row
- **Edit** (tombol hijau)
- **Hapus** (tombol merah)

---

## 3. Tambah Perusahaan (`/admin/companies/create`)

### Form Fields

| No | Field | Tipe | Required | Placeholder/Keterangan |
|----|-------|------|----------|------------------------|
| 1 | Nama Perusahaan | Text | ✅ Ya | "Masukkan nama perusahaan" |
| 2 | Email | Email | ✅ Ya | "email@perusahaan.com" |
| 3 | No. Telepon | Text | ✅ Ya | "021-xxxxxxx" |
| 4 | Alamat | Textarea | ✅ Ya | "Alamat lengkap perusahaan" |
| 5 | Deskripsi | Textarea | ✅ Ya | "Deskripsi singkat tentang perusahaan" |
| 6 | Informasi Legal | Textarea | ❌ Opsional | "NPWP, NIB, atau informasi legal lainnya (opsional)" |
| 7 | Logo Perusahaan | File Upload | ❌ Opsional | Format: JPG, PNG. Maksimal 2MB |

### Tombol Aksi
- **Simpan Perusahaan** (biru, primary)
- **Batal** (abu, secondary)

---

## 📊 Tabel Database yang Teridentifikasi

### Tabel: `companies`

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT / UUID | PK | Auto increment |
| nama_perusahaan | VARCHAR(200) | Ya | Nama PT/CV |
| email | VARCHAR(150) | Ya | Email perusahaan |
| telepon | VARCHAR(20) | Ya | No. telepon |
| alamat | TEXT | Ya | Alamat lengkap |
| deskripsi | TEXT | Ya | Deskripsi singkat |
| informasi_legal | TEXT | Tidak | NPWP, NIB, dll |
| logo_url | VARCHAR(500) | Tidak | Path file logo |
| created_at | TIMESTAMP | Auto | |
| updated_at | TIMESTAMP | Auto | |

### Tabel: `service_requests` (dari dashboard)

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT | PK |
| nomor_reg | VARCHAR(20) | Format: REG-YYYYMMDD-XXX |
| pelanggan | VARCHAR / FK | Nama pelanggan / relasi ke tabel customers |
| layanan | VARCHAR / FK | Jenis layanan / relasi ke tabel services |
| status | ENUM | 'pending', 'processing', 'completed', dll |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

---

## 🔍 Format Nomor Registrasi

```
REG-{YYYYMMDD}-{3 DIGIT}

Contoh:
REG-20251228-001
REG-20251228-002
```

**Catatan:** Format ini berbeda dari yang di landing page baru (`SRV-2025-XXXXXX`). Perlu diputuskan mau pakai format yang mana untuk dashboard baru.

---

## 📝 Catatan Analisa

1. **Tech Stack Lama**: Kemungkinan Laravel (PHP) — terlihat dari URL pattern `/admin/...`, storage pattern, dan struktur form
2. **Multi-company**: Sistem mendukung multiple perusahaan (3 PT di bawah Projasa Group)
3. **Keuangan**: Ada modul Laporan Keuangan + tracking pemasukan/pengeluaran bulanan
4. **Status Order**: Minimal ada 2 status — `Pending` dan `Processing`
5. **Slider**: Ada modul pengaturan slider (untuk homepage lama)
6. **Portfolio/Galeri**: Ada modul galeri proyek

---

## ⏭️ Halaman Berikutnya yang Perlu Dianalisa

- [ ] Pengguna Sistem (`/admin/users`)
- [ ] Data Pelanggan (`/admin/customers`)
- [ ] Layanan Jasa (`/admin/services`)
- [ ] Galeri Proyek (`/admin/portfolios`)
- [ ] Pengaturan Slider (`/admin/sliders`)
- [ ] Pesanan Masuk (`/admin/service-requests`)
- [ ] Laporan Keuangan (`/admin/finance`)
