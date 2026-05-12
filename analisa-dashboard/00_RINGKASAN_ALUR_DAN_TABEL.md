# Ringkasan: Alur Kerja & Tabel Database Dashboard Projasa

> Dokumen ini berisi **hanya** alur kerja dan struktur tabel yang dibutuhkan.
> Referensi dari dashboard lama (projasa.co.id), tapi **bukan** berarti harus mengikuti logic lamanya.

---

## 🔄 ALUR KERJA

### Alur 1: Setup Data Master

```
Superadmin setup awal (satu kali / jarang berubah):

1. Buat data Perusahaan (3 PT di bawah Projasa Group)
2. Buat User sistem + assign ke perusahaan + set role & permission
3. Buat daftar Layanan (assign ke perusahaan masing-masing)
```

### Alur 2: Order / Permintaan Layanan Masuk

```
Klien hubungi via WhatsApp / datang langsung
        │
        ▼
Admin buat "Permintaan Layanan" baru:
  - Pilih pelanggan (atau buat baru)
  - Pilih layanan
  - Isi catatan publik (requirement klien)
  - Isi catatan internal (untuk tim)
        │
        ▼
Sistem auto-generate nomor registrasi: REG-YYYYMMDD-XXX
Status awal: Pending
        │
        ▼
Admin proses order → update status:
  Pending → Processing → Finished
        │
        ▼
Klien bisa cek status via halaman publik (/track)
```

### Alur 3: Keuangan

```
Pembayaran masuk dari klien
        │
        ▼
Admin/Finance catat pemasukan:
  - Tanggal
  - Sumber (dari mana)
  - Jumlah (IDR)
        │
        ▼
Ada pengeluaran operasional
        │
        ▼
Admin/Finance catat pengeluaran:
  - Tanggal
  - Kategori (Operasional, Gaji, Material, dll)
  - Deskripsi
  - Jumlah (IDR)
        │
        ▼
Sistem hitung otomatis:
  Laba Bersih = Total Pemasukan - Total Pengeluaran
```

### Alur 4: Portofolio (Showcase Proyek)

```
Proyek selesai
        │
        ▼
Admin tambah ke galeri portofolio:
  - Judul proyek
  - Tahun selesai
  - Gambar
  - Deskripsi
        │
        ▼
Tampil di halaman publik website
```

---

## 🗄️ TABEL DATABASE

### 1. `companies` — Data Perusahaan

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | |
| nama_perusahaan | VARCHAR(200) | ✅ | |
| email | VARCHAR(150) | ✅ | |
| telepon | VARCHAR(20) | ✅ | |
| alamat | TEXT | ✅ | |
| deskripsi | TEXT | ✅ | |
| informasi_legal | TEXT | ❌ | NPWP, NIB, dll |
| logo_url | VARCHAR(500) | ❌ | |
| created_at | TIMESTAMP | auto | |
| updated_at | TIMESTAMP | auto | |

---

### 2. `users` — Pengguna Sistem

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | |
| company_id | INT / NULL | FK → companies | NULL = akses semua perusahaan |
| name | VARCHAR(100) | ✅ | |
| email | VARCHAR(150) | ✅ Unique | Login |
| password | VARCHAR(255) | ✅ | Hashed |
| role_title | VARCHAR(50) | ✅ | Superadmin, Admin, Finance, Staff |
| phone | VARCHAR(20) | ❌ | |
| created_at | TIMESTAMP | auto | |
| updated_at | TIMESTAMP | auto | |

**4 Role:** Superadmin, Admin, Finance, Staff

---

### 3. `user_permissions` — Hak Akses Per User

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT | PK |
| user_id | INT | FK → users |
| permission | VARCHAR(50) | Nama permission |

**7 Permission:**
1. `lihat_dasbor`
2. `kelola_pengguna`
3. `kelola_pelanggan`
4. `kelola_layanan`
5. `kelola_portofolio`
6. `kelola_pesanan`
7. `kelola_keuangan`

---

### 4. `customers` — Data Pelanggan

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | |
| nama | VARCHAR(200) | ✅ | Nama perusahaan/individu |
| email | VARCHAR(150) | ❌ | Untuk komunikasi & notifikasi |
| telepon | VARCHAR(20) | ❌ | |
| alamat | TEXT | ❌ | |
| created_at | TIMESTAMP | auto | |
| updated_at | TIMESTAMP | auto | |

---

### 5. `services` — Daftar Layanan

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | |
| company_id | INT | FK → companies, ✅ | Layanan milik perusahaan mana |
| nama_layanan | VARCHAR(200) | ✅ | |
| kategori | VARCHAR(100) | ❌ | Free text (Perizinan, Konstruksi, SDM, dll) |
| harga | DECIMAL(15,2) | ✅ | Dalam IDR |
| estimasi_durasi | VARCHAR(100) | ❌ | Free text (3 Hari, 1 Minggu, dll) |
| deskripsi | TEXT | ❌ | |
| created_at | TIMESTAMP | auto | |
| updated_at | TIMESTAMP | auto | |

---

### 6. `service_requests` — Permintaan Layanan (CORE)

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | |
| nomor_registrasi | VARCHAR(20) | Auto, Unique | Format: REG-YYYYMMDD-XXX |
| customer_id | INT | FK → customers, ✅ | |
| service_id | INT | FK → services, ✅ | |
| status | ENUM | Default 'pending' | pending, processing, finished |
| public_note | TEXT | ❌ | Catatan publik (terlihat klien) |
| internal_note | TEXT | ❌ | Catatan internal (hidden) |
| created_at | TIMESTAMP | auto | Tanggal masuk |
| updated_at | TIMESTAMP | auto | |

**3 Status:** Pending → Processing → Finished

---

### 7. `portfolios` — Galeri Proyek

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | |
| judul | VARCHAR(200) | ✅ | |
| tahun_selesai | VARCHAR(4) | ❌ | |
| gambar_url | VARCHAR(500) | ❌ | Rekomendasi: 1200x800px |
| deskripsi | TEXT | ❌ | |
| created_at | TIMESTAMP | auto | |
| updated_at | TIMESTAMP | auto | |

---

### 8. `incomes` — Pemasukan

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | |
| tanggal | DATE | ✅ | |
| sumber | VARCHAR(200) | ✅ | Sumber pemasukan (free text) |
| jumlah | DECIMAL(15,2) | ✅ | Dalam IDR |
| created_at | TIMESTAMP | auto | |
| updated_at | TIMESTAMP | auto | |

---

### 9. `expenses` — Pengeluaran

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | |
| tanggal | DATE | ✅ | |
| kategori | VARCHAR(100) | ✅ | Operasional, Gaji, Material, dll |
| deskripsi | TEXT | ✅ | |
| jumlah | DECIMAL(15,2) | ✅ | Dalam IDR |
| created_at | TIMESTAMP | auto | |
| updated_at | TIMESTAMP | auto | |

---

## 🔗 RELASI ANTAR TABEL

```
companies (1) ───► (N) users
companies (1) ───► (N) services
users (1) ───────► (N) user_permissions
customers (1) ───► (N) service_requests
services (1) ────► (N) service_requests
```

**Tabel standalone (tanpa relasi):**
- portfolios
- incomes
- expenses

---

## 📊 TOTAL: 9 TABEL

| No | Tabel | Fungsi |
|----|-------|--------|
| 1 | companies | Data 3 PT Projasa |
| 2 | users | Admin/staff login |
| 3 | user_permissions | Hak akses granular |
| 4 | customers | Data pelanggan |
| 5 | services | Daftar layanan per PT |
| 6 | service_requests | ⭐ Order/tracking layanan |
| 7 | portfolios | Showcase proyek selesai |
| 8 | incomes | Catat pemasukan |
| 9 | expenses | Catat pengeluaran |

---

## 📝 CATATAN

- Ini adalah struktur **dari dashboard lama** sebagai referensi
- Logic dan flow bisa diubah/ditingkatkan di dashboard baru
- Lihat `projasa-dashboard-blueprint.md` untuk desain dashboard baru yang lebih lengkap (tambahan: progress bar, PIC, history, dokumen, dll)
