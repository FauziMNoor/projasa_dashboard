# Analisa Dashboard Lama Projasa — Bagian 03

## Portofolio, Permintaan Layanan, Laporan Keuangan

---

## 📍 URL yang Dianalisa

| No | Halaman | URL |
|----|---------|-----|
| 6 | Manajemen Portofolio | `https://projasa.co.id/admin/portfolios` |
| 6.1 | Tambah Portofolio | `https://projasa.co.id/admin/portfolios/create` |
| 7 | Permintaan Layanan | `https://projasa.co.id/admin/service-requests` |
| 7.1 | Buat Permintaan Baru | `https://projasa.co.id/admin/service-requests/create` |
| 8 | Laporan Keuangan | `https://projasa.co.id/admin/finance` |
| 8.1 | Tambah Pemasukan | Modal popup |
| 8.2 | Tambah Pengeluaran | Modal popup |

---

## 6. Manajemen Portofolio (`/admin/portfolios`)

### Header
- Judul: "Manajemen Portofolio"
- Subtitle: "Kelola galeri proyek dan portofolio perusahaan"
- Tombol: "+ Tambah Portofolio"

### Layout: Card Grid (bukan tabel)

Setiap card menampilkan:
- **Gambar proyek** (placeholder jika belum ada)
- **Badge tahun** (pojok kanan atas)
- **Judul proyek**
- **Deskripsi singkat**
- **Tombol:** Edit (biru), Hapus (merah)

### Data Portofolio yang Ada

| No | Judul Proyek | Deskripsi | Tahun |
|----|-------------|-----------|-------|
| 1 | PBG Mall Sentra Bisnis | Pengurusan PBG dan SLF untuk Mall Sentra Bisnis dengan luas 50.000 m2. | 2024 |
| 2 | UKL-UPL Pabrik Tekstil | Penyusunan dokumen lingkungan untuk pabrik tekstil di kawasan industri. | 2023 |
| 3 | Outsourcing PT Bank Mandiri | Penyediaan 50 tenaga customer service untuk cabang-cabang Bank Mandiri di Jabode... | 2024 |
| 4 | Izin Usaha CV Maju Jaya | Pengurusan izin usaha lengkap untuk CV Maju Jaya dalam waktu 14 hari kerja. | 2024 |

---

## 6.1 Tambah Portofolio Baru (`/admin/portfolios/create`)

### Form Fields

| No | Field | Tipe | Required | Placeholder/Keterangan |
|----|-------|------|----------|------------------------|
| 1 | Judul Proyek | Text | ✅ Ya | "Masukkan judul proyek" |
| 2 | Tahun Selesai | Text/Number | Opsional | "Contoh: 2024" — Tahun proyek selesai dikerjakan |
| 3 | Gambar Proyek | File Upload | Opsional | Format: JPG, PNG. Rekomendasi ukuran: 1200x800 piksel |
| 4 | Deskripsi Proyek | Textarea | Opsional | "Jelaskan detail proyek, tantangan, dan hasil yang dicapai..." |

### Tombol Aksi
- **Simpan Portofolio** (biru, primary)
- **Batal** (abu, secondary)

### Catatan
- Form sangat simpel — hanya 4 field
- Tidak ada relasi ke perusahaan (company) — portofolio bersifat global
- Tidak ada relasi ke pelanggan atau service request
- Gambar rekomendasi 1200x800px — landscape format

---

## 7. Permintaan Layanan (`/admin/service-requests`) ⭐ CORE MODULE

### Header
- Judul: "Permintaan Layanan"
- Subtitle: "Kelola semua permintaan layanan dari pelanggan"
- Tombol: "+ Buat Permintaan"

### Summary Cards (4 kartu statistik)

| No | Label | Value | Warna |
|----|-------|-------|-------|
| 1 | Total | 2 | Abu/default |
| 2 | Pending | 1 | Kuning |
| 3 | Processing | 1 | Biru |
| 4 | Finished | 0 | Hijau |

### Tabel Permintaan

| Kolom | Keterangan |
|-------|------------|
| NO. REGISTRASI | Nomor + tanggal di bawahnya |
| PELANGGAN | Avatar initial + nama |
| LAYANAN | Nama layanan |
| STATUS | Badge (Processing = biru, Pending = kuning) |
| AKSI | Kelola (biru), Hapus (merah) |

### Data yang Ada

| No. Registrasi | Tanggal | Pelanggan | Layanan | Status | Aksi |
|---------------|---------|-----------|---------|--------|------|
| REG-20251228-001 | 28 Dec 2025 | CV Maju Jaya | Izin Usaha Mikro | Processing | Kelola, Hapus |
| REG-20251228-002 | 28 Dec 2025 | PT Properti Indah | UKL - UPL | Pending | Kelola, Hapus |

### Status yang Teridentifikasi

| Status | Warna | Keterangan |
|--------|-------|------------|
| Pending | Kuning | Baru masuk, belum diproses |
| Processing | Biru | Sedang dikerjakan |
| Finished | Hijau | Selesai |

### Catatan Penting
- Hanya **3 status**: Pending → Processing → Finished
- Tombol **"Kelola"** (bukan "Edit") — kemungkinan buka halaman detail untuk update progress
- Format nomor: `REG-YYYYMMDD-XXX`
- Tanggal ditampilkan di bawah nomor registrasi

---

## 7.1 Buat Permintaan Baru (`/admin/service-requests/create`)

### Form Fields

| No | Field | Tipe | Required | Placeholder/Keterangan |
|----|-------|------|----------|------------------------|
| 1 | Customer | Dropdown | ✅ Ya | "Select Customer" — pilih dari daftar pelanggan |
| 2 | Service | Dropdown | ✅ Ya | "Select Service" — pilih dari daftar layanan |
| 3 | Public Note (Goal/Requirement) | Textarea | Opsional | Catatan yang bisa dilihat klien |
| 4 | Internal Note (Hidden) | Textarea | Opsional | Catatan internal, tidak terlihat klien |

### Link Tambahan
- "Create new customer?" — link untuk buat pelanggan baru langsung dari form ini

### Tombol Aksi
- **Create Request** (biru, primary)
- **Cancel** (abu, secondary)

### Catatan Penting
- Form sangat **minimalis** — hanya 4 field
- **Tidak ada field**: PIC/assigned to, estimasi selesai, harga deal, prioritas
- **Public Note vs Internal Note** — sudah ada pemisahan catatan publik dan internal
- Nomor registrasi di-generate otomatis (tidak diinput manual)
- Status awal otomatis = "Pending"

---

## 8. Laporan Keuangan (`/admin/finance`)

### Header
- Judul: "Laporan Keuangan"
- Subtitle: "Ringkasan pemasukan dan pengeluaran perusahaan"

### Summary Cards (3 kartu)

| No | Label | Value | Icon/Warna |
|----|-------|-------|------------|
| 1 | Total Pemasukan | Rp 0 | Hijau (icon dollar) |
| 2 | Total Pengeluaran | Rp 0 | Merah (icon wallet) |
| 3 | Laba Bersih | Rp 0 | Biru (icon chart) |

**Laba Bersih = Total Pemasukan - Total Pengeluaran**

### Layout: 2 Panel Side-by-Side

#### Panel Kiri: Pemasukan
- Judul: "Pemasukan"
- Subtitle: "Daftar semua pemasukan"
- Tombol: "+ Tambah Pemasukan" (hijau)
- Tabel kolom: TANGGAL | SUMBER | JUMLAH
- Status: "Belum ada data pemasukan"

#### Panel Kanan: Pengeluaran
- Judul: "Pengeluaran"
- Subtitle: "Daftar semua pengeluaran"
- Tombol: "+ Tambah Pengeluaran" (merah)
- Tabel kolom: TANGGAL | DESKRIPSI | JUMLAH
- Status: "Belum ada data pengeluaran"

---

## 8.1 Tambah Pemasukan (Modal Popup)

### Form Fields

| No | Field | Tipe | Required | Placeholder/Keterangan |
|----|-------|------|----------|------------------------|
| 1 | Tanggal | Date Picker | ✅ Ya | dd/mm/yyyy |
| 2 | Sumber Pemasukan | Text | ✅ Ya | "Contoh: Pembayaran Proyek A" |
| 3 | Jumlah (IDR) | Number | ✅ Ya | "Contoh: 5000000" |

### Tombol Aksi
- **Simpan Pemasukan** (hijau, primary)
- **Batal** (abu, secondary)

---

## 8.2 Tambah Pengeluaran (Modal Popup)

### Form Fields

| No | Field | Tipe | Required | Placeholder/Keterangan |
|----|-------|------|----------|------------------------|
| 1 | Tanggal | Date Picker | ✅ Ya | dd/mm/yyyy |
| 2 | Kategori | Text | ✅ Ya | "Contoh: Operasional, Gaji, Material" |
| 3 | Deskripsi | Text | ✅ Ya | "Jelaskan pengeluaran ini" |
| 4 | Jumlah (IDR) | Number | ✅ Ya | "Contoh: 2000000" |

### Tombol Aksi
- **Simpan Pengeluaran** (merah, primary)
- **Batal** (abu, secondary)

### Perbedaan Form Pemasukan vs Pengeluaran

| Field | Pemasukan | Pengeluaran |
|-------|-----------|-------------|
| Tanggal | ✅ | ✅ |
| Sumber/Kategori | "Sumber Pemasukan" (free text) | "Kategori" (free text) |
| Deskripsi | ❌ Tidak ada | ✅ Ada |
| Jumlah | ✅ | ✅ |

---

## 📊 Tabel Database yang Teridentifikasi (Final)

### Tabel: `portfolios`

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | Auto increment |
| judul | VARCHAR(200) | Ya | Judul proyek |
| tahun_selesai | VARCHAR(4) / INT | Tidak | Tahun selesai (cth: 2024) |
| gambar_url | VARCHAR(500) | Tidak | Path file gambar |
| deskripsi | TEXT | Tidak | Detail proyek |
| created_at | TIMESTAMP | Auto | |
| updated_at | TIMESTAMP | Auto | |

### Tabel: `service_requests` (CORE)

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | Auto increment |
| nomor_registrasi | VARCHAR(20) | Auto-generated, Unique | Format: REG-YYYYMMDD-XXX |
| customer_id | INT | FK → customers.id, Ya | Pelanggan |
| service_id | INT | FK → services.id, Ya | Layanan yang diminta |
| status | ENUM('pending','processing','finished') | Default 'pending' | Status order |
| public_note | TEXT | Tidak | Catatan publik (goal/requirement) — terlihat klien |
| internal_note | TEXT | Tidak | Catatan internal — hidden dari klien |
| created_at | TIMESTAMP | Auto | Tanggal masuk |
| updated_at | TIMESTAMP | Auto | |

### Tabel: `incomes` (Pemasukan)

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | Auto increment |
| tanggal | DATE | Ya | Tanggal pemasukan |
| sumber | VARCHAR(200) | Ya | Sumber pemasukan (free text) |
| jumlah | DECIMAL(15,2) | Ya | Jumlah dalam IDR |
| created_at | TIMESTAMP | Auto | |
| updated_at | TIMESTAMP | Auto | |

### Tabel: `expenses` (Pengeluaran)

| Kolom | Tipe | Required | Keterangan |
|-------|------|----------|------------|
| id | INT | PK | Auto increment |
| tanggal | DATE | Ya | Tanggal pengeluaran |
| kategori | VARCHAR(100) | Ya | Kategori (Operasional, Gaji, Material, dll) |
| deskripsi | TEXT | Ya | Penjelasan pengeluaran |
| jumlah | DECIMAL(15,2) | Ya | Jumlah dalam IDR |
| created_at | TIMESTAMP | Auto | |
| updated_at | TIMESTAMP | Auto | |

---

## 🔗 ERD Lengkap (Semua Tabel)

```
┌──────────────┐
│  companies   │
│──────────────│
│ id (PK)      │◄──────────────────────────────────────┐
│ nama         │                                        │
│ email        │         ┌──────────────┐               │
│ telepon      │         │    users     │               │
│ alamat       │         │──────────────│               │
│ deskripsi    │    ┌───►│ id (PK)      │               │
│ info_legal   │    │    │ company_id(FK)│───────────────┘
│ logo_url     │    │    │ name         │
└──────┬───────┘    │    │ email        │
       │            │    │ role_title   │
       │            │    │ phone        │
       │            │    └──────┬───────┘
       │            │           │
       │            │           ▼
       │            │    ┌──────────────────┐
       │            │    │ user_permissions  │
       │            │    │──────────────────│
       │            │    │ user_id (FK)     │
       │            │    │ permission       │
       │            │    └──────────────────┘
       │            │
       ▼            │
┌──────────────┐    │
│   services   │    │
│──────────────│    │
│ id (PK)      │◄───┼─────────────────────────────┐
│ company_id(FK)│    │                              │
│ nama_layanan │    │                              │
│ kategori     │    │                              │
│ harga        │    │                              │
│ durasi       │    │                              │
│ deskripsi    │    │    ┌───────────────────┐     │
└──────────────┘    │    │ service_requests   │     │
                    │    │───────────────────│     │
┌──────────────┐    │    │ id (PK)           │     │
│  customers   │    │    │ nomor_registrasi  │     │
│──────────────│    │    │ customer_id (FK)  │─────┼──┐
│ id (PK)      │◄───┼────│ service_id (FK)   │─────┘  │
│ nama         │    │    │ status            │        │
│ email        │    │    │ public_note       │        │
│ telepon      │    │    │ internal_note     │        │
│ alamat       │    │    └───────────────────┘        │
└──────────────┘    │                                  │
                    │                                  │
                    └──────────────────────────────────┘

┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  portfolios  │    │   incomes    │    │   expenses   │
│──────────────│    │──────────────│    │──────────────│
│ id (PK)      │    │ id (PK)      │    │ id (PK)      │
│ judul        │    │ tanggal      │    │ tanggal      │
│ tahun_selesai│    │ sumber       │    │ kategori     │
│ gambar_url   │    │ jumlah       │    │ deskripsi    │
│ deskripsi    │    └──────────────┘    │ jumlah       │
└──────────────┘                        └──────────────┘
```

---

## 📋 Ringkasan Semua Tabel Database

| No | Tabel | Jumlah Field | Relasi |
|----|-------|-------------|--------|
| 1 | `companies` | 9 | Parent untuk users & services |
| 2 | `users` | 9 | FK → companies |
| 3 | `user_permissions` | 3 | FK → users |
| 4 | `customers` | 6 | Parent untuk service_requests |
| 5 | `services` | 8 | FK → companies, parent untuk service_requests |
| 6 | `service_requests` | 8 | FK → customers, FK → services |
| 7 | `portfolios` | 6 | Standalone (tidak ada FK) |
| 8 | `incomes` | 5 | Standalone |
| 9 | `expenses` | 6 | Standalone |

**Total: 9 tabel**

---

## 🔄 Alur Kerja Lengkap (Berdasarkan Dashboard Lama)

### Flow 1: Setup Awal (Satu Kali)
```
1. Superadmin buat Companies (3 PT)
2. Superadmin buat Users + assign ke company + set permissions
3. Admin buat daftar Services per company
```

### Flow 2: Order Masuk (Harian)
```
1. Klien hubungi via WhatsApp
        │
        ▼
2. Admin buka "Pesanan Masuk" → "+ Buat Permintaan"
        │
        ▼
3. Pilih Customer (atau buat baru via link "Create new customer?")
   Pilih Service
   Isi Public Note (requirement klien)
   Isi Internal Note (catatan tim)
        │
        ▼
4. Submit → Auto-generate nomor: REG-YYYYMMDD-XXX
   Status otomatis = "Pending"
        │
        ▼
5. Admin klik "Kelola" → Update status:
   Pending → Processing → Finished
        │
        ▼
6. Klien bisa cek status via halaman /track (publik)
```

### Flow 3: Keuangan (Berkala)
```
1. Ada pembayaran masuk dari klien
        │
        ▼
2. Finance/Admin buka "Laporan Keuangan"
   Klik "+ Tambah Pemasukan"
   Isi: Tanggal, Sumber, Jumlah
        │
        ▼
3. Ada pengeluaran operasional
        │
        ▼
4. Klik "+ Tambah Pengeluaran"
   Isi: Tanggal, Kategori, Deskripsi, Jumlah
        │
        ▼
5. Dashboard otomatis hitung:
   Laba Bersih = Total Pemasukan - Total Pengeluaran
```

### Flow 4: Portofolio (Setelah Proyek Selesai)
```
1. Proyek selesai (status = Finished)
        │
        ▼
2. Admin buka "Galeri Proyek" → "+ Tambah Portofolio"
   Isi: Judul, Tahun, Gambar, Deskripsi
        │
        ▼
3. Tampil di halaman publik /portfolios
```

---

## 💡 Insight & Kekurangan Dashboard Lama

### Yang Sudah Bagus ✅
1. Multi-company support (3 PT dalam 1 sistem)
2. Permission-based access control (granular)
3. Pemisahan Public Note vs Internal Note
4. Auto-generate nomor registrasi
5. Halaman tracking publik (/track)

### Yang Kurang / Bisa Ditingkatkan ⚠️

| No | Kekurangan | Saran Perbaikan |
|----|-----------|-----------------|
| 1 | Hanya 3 status (Pending/Processing/Finished) | Tambah: Revisi, Menunggu TTD, Dibatalkan |
| 2 | Tidak ada progress bar (%) | Tambah field progress 0-100% |
| 3 | Tidak ada PIC/assigned to per order | Tambah field pic_id → users |
| 4 | Tidak ada estimasi selesai | Tambah field estimasi_selesai (date) |
| 5 | Tidak ada history perubahan status | Tambah tabel order_history |
| 6 | Keuangan tidak terhubung ke order | Tambah relasi income → service_request |
| 7 | Portofolio tidak terhubung ke order/company | Tambah FK ke companies & service_requests |
| 8 | Tidak ada upload dokumen per order | Tambah tabel order_documents |
| 9 | Tidak ada notifikasi (WA/email) | Integrasi WhatsApp API |
| 10 | Kategori & durasi = free text | Buat enum/dropdown untuk konsistensi |

---

## ⏭️ Rekomendasi untuk Dashboard Baru

Berdasarkan analisa lengkap ini, dashboard baru sebaiknya:

1. **Pertahankan** semua fitur yang sudah ada (9 modul)
2. **Tambahkan** fitur tracking yang lebih detail (progress, PIC, history)
3. **Hubungkan** keuangan dengan order (pemasukan dari order mana)
4. **Integrasikan** dengan landing page baru (API untuk tracking publik)
5. **Tambah** modul konten website (typing texts, brand logos, hero stats)

Lihat file `projasa-dashboard-blueprint.md` untuk desain lengkap dashboard baru.
