# Sequential Development Playbook — Aljaffarsyah Labs

> Panduan pengerjaan bertahap untuk website portfolio SaaS Aljaffarsyah Labs.
> PRD.md adalah sumber kebutuhan produk. Jalankan satu fase pada satu waktu;
> jangan otomatis melanjutkan ke fase berikutnya.

## Cara menggunakan

1. Buka repository ini di VS Code dan baca `PRD.md`.
2. Periksa kondisi worktree dan kode yang sudah ada sebelum mengubah file.
3. Jalankan prompt satu fase saja, review diff, lalu jalankan acceptance checks.
4. Catat keputusan penting dan blocker. Jangan mengarang hasil test.
5. Buat checkpoint/commit hanya jika diminta atau workflow repository
   mengharuskannya; jangan menimpa perubahan yang sudah ada.
6. Fase 0 adalah persiapan, tidak dihitung sebagai fase pengembangan. Fase
   pengembangan berjumlah sepuluh: Phase 1 sampai Phase 10.

## Aturan umum untuk AI coding assistant

```text
Kamu membantu mengembangkan website Aljaffarsyah Labs.

Sebelum bekerja:
- Baca PRD.md dan fase yang diminta dari PLAYBOOK.md.
- Periksa struktur, status git, dan implementasi yang sudah ada.
- Untuk perubahan kode Next.js, baca dokumentasi yang relevan dari
  node_modules/next/dist/docs/ sebelum menulis atau mengubah kode. Project ini
  menggunakan Next.js 16.2.9; jangan mengasumsikan API dari versi lain.

Aturan:
1. Kerjakan hanya fase yang diminta; jangan mengerjakan fase berikutnya.
2. Pertahankan perubahan pengguna dan hindari perubahan di luar scope.
3. Jangan membuat data profil, metrik, testimoni, pengalaman, URL, atau hasil
   test yang tidak diberikan/dibuktikan.
4. Reuse stack dan pola project yang ada. Dependency baru harus punya alasan
   dan kompatibilitas yang sudah diperiksa.
5. Validasi input pada server untuk semua operasi yang mengubah data atau
   mengirim inquiry. Jangan pernah mengekspos secret ke client.
6. Jangan menampilkan success state palsu ketika integrasi gagal.
7. Jalankan lint/build/test yang relevan dan laporkan hasil aktual.
8. Jika keputusan produk penting menghalangi implementasi, tanyakan sebelum
   mengambil keputusan yang sulit dibatalkan.
9. Setelah selesai, laporkan ringkasan, file, dependency, command, test, dan
   risiko. Tunggu instruksi sebelum melanjutkan fase.
```

## Phase 0 — Persiapan Environment

**Tujuan:** memastikan repository dan tool lokal siap untuk pekerjaan yang
diminta. Tidak mengubah fitur produk.

Periksa:

```powershell
node --version
npm --version
git --version
git status --short
```

Pastikan dependency lokal tersedia (`npm install` hanya bila dibutuhkan atau
lockfile/dependency berubah). Jangan menjalankan install atau mengubah
lockfile tanpa alasan. Sebelum mengimplementasikan perubahan Next.js, cari dan
baca guide yang relevan pada `node_modules/next/dist/docs/`.

**Selesai jika:** versi/runtime diketahui, worktree diperiksa, dan perubahan
yang sudah ada terlindungi.

## Phase 1 — Audit Produk dan Baseline

**Tujuan:** memastikan kondisi repository dan konten saat ini sesuai PRD.

### Prompt AI

```text
Jalankan Phase 1 dari PLAYBOOK.md.
Baca PRD.md lalu audit struktur route, data proyek, navigasi, metadata, form,
dependency, dan command yang tersedia. Bandingkan dengan bagian kondisi
repository saat ini dan acceptance criteria PRD.

Jangan mengubah kode produk pada fase ini. Buat daftar:
- fitur yang sudah ada dan telah diverifikasi;
- gap dan placeholder yang perlu dikonfirmasi pemilik;
- risiko teknis serta keputusan yang menghalangi fase berikutnya.
Perbarui PRD hanya jika fakta repository berubah; jangan mengarang konten.
```

**Acceptance criteria:**

- Baseline route dan data terdokumentasi.
- Placeholder/klaim yang perlu verifikasi pemilik teridentifikasi.
- Tidak ada perubahan kode fitur.

## Phase 2 — Sitemap, User Flow, dan Content Plan

**Tujuan:** menyepakati navigasi, struktur halaman, dan kebutuhan konten sebelum
implementasi.

### Prompt AI

```text
Jalankan Phase 2 dari PLAYBOOK.md.
Gunakan sitemap dan user flow pada PRD.md. Periksa route yang ada lalu
tentukan struktur final untuk Home, About, Projects, Project Detail, dan
Contact. Catat CTA utama, navigasi desktop/mobile, empty/not-found state, dan
konten yang masih harus diberikan pemilik.

Jangan mengimplementasikan fitur atau membuat konten personal yang tidak
terverifikasi. Jika perubahan sitemap diperlukan, jelaskan dampaknya dan
tunggu persetujuan sebelum mengubah scope PRD.
```

**Acceptance criteria:**

- Semua route dan alur utama memiliki tujuan yang jelas.
- Konten yang memerlukan masukan pemilik tercatat.
- Perubahan scope tidak dilakukan diam-diam.

## Phase 3 — Architecture dan Data Design

**Tujuan:** memilih cara mengelola project content dan contact dengan solusi
sesederhana mungkin.

### Prompt AI

```text
Jalankan Phase 3 dari PLAYBOOK.md.
Analisis implementasi Next.js 16 yang ada dan PRD. Buat technical decision
record singkat untuk:
1. Satu sumber data project untuk homepage, katalog, dan detail.
2. Source-controlled content dibanding Supabase/PostgreSQL + Drizzle/CMS.
3. Cara memenuhi kebutuhan owner CRUD dengan akses yang aman dan tidak
   over-engineered.
4. Alur contact, email provider, penyimpanan inquiry, anti-spam, rate limit,
   serta retensi data.
5. Validasi, error mapping, environment variables, dan deployment target.

Periksa dokumentasi resmi untuk versi dependency yang akan dipakai. Jangan
menambah dependency atau mengimplementasikan fitur di fase ini. Dokumentasikan
keputusan, opsi yang ditolak, dan keputusan yang masih menunggu pemilik.
```

**Acceptance criteria:**

- Ada keputusan tercatat untuk content source, CRUD, dan contact.
- Keamanan, privasi, serta kebutuhan konfigurasi masuk pertimbangan.
- Tidak ada integrasi yang diklaim sudah tersedia bila belum ada.

## Phase 4 — UI/UX dan Design Foundation

**Tujuan:** menetapkan hierarki, responsive behavior, komponen, dan state
visual berdasarkan gaya project yang ada.

### Prompt AI

```text
Jalankan Phase 4 dari PLAYBOOK.md.
Baca PRD dan hasil Phase 2-3. Audit komponen serta styling yang ada. Susun
spesifikasi UI untuk halaman publik dan state loading, empty, error, success,
dan not-found. Pertahankan identitas visual yang memang sudah ada, tetapi
hindari duplikasi komponen dan tautan placeholder.

Jangan mengimplementasikan backend. Jika membuat perubahan UI pada fase ini,
gunakan komponen/pattern yang tersedia dan validasi keyboard serta mobile.
Jangan menambahkan design system atau dependency baru tanpa kebutuhan nyata.
```

**Acceptance criteria:**

- Halaman dan komponen punya hierarki visual yang konsisten.
- Responsive dan keyboard behavior dipertimbangkan.
- Semua CTA dan state memiliki perilaku/tujuan yang ditentukan.

## Phase 5 — Frontend Foundation dan Halaman Profil

**Tujuan:** merapikan fondasi frontend, layout, navigasi, metadata global, dan
halaman Home/About/Contact presentation.

### Prompt AI

```text
Jalankan Phase 5 dari PLAYBOOK.md.
Sebelum mengubah kode, baca guide Next.js yang relevan di
node_modules/next/dist/docs/. Audit layout, route, komponen bersama, CSS, dan
metadata yang ada. Implementasikan hanya fondasi dan halaman Home/About serta
presentasi Contact sesuai PRD.

Gunakan Server Components secara default dan Client Components hanya untuk
interaksi yang membutuhkannya. Reuse navigasi/footer bila sesuai. Jangan
mengarang biografi, pengalaman, skill, CV, URL sosial, atau availability.
Jangan implementasikan pengiriman inquiry di fase ini.

Jalankan npm run lint dan npm run build.
```

**Acceptance criteria:**

- Halaman publik memiliki layout/navigasi konsisten dan responsive.
- Metadata starter dan placeholder kritis yang dapat diperbaiki tanpa data
  pemilik ditangani.
- Konten personal yang belum diverifikasi tidak dipublikasikan sebagai fakta.
- Lint dan build lulus atau kegagalan dijelaskan dengan bukti.

## Phase 6 — Katalog dan Detail Proyek

**Tujuan:** membuat satu sumber data proyek dan menghubungkan homepage,
katalog, serta halaman detail.

### Prompt AI

```text
Jalankan Phase 6 dari PLAYBOOK.md.
Baca guide Next.js yang relevan sebelum mengubah kode. Audit seluruh pemakaian
data project. Buat satu sumber data kanonik sesuai keputusan Phase 3 lalu
gunakan untuk featured projects, katalog, metadata, dan detail slug.

Validasi field wajib, slug unik, URL opsional, status publikasi, alt text, dan
not-found behavior. Jangan mengarang metrik atau mengganti proyek contoh
dengan klaim faktual. Implementasikan pencarian/filter hanya jika disepakati
di scope iterasi ini dan hasilnya benar-benar berfungsi.

Jalankan npm run lint dan npm run build, lalu uji route detail valid dan slug
yang tidak ditemukan.
```

**Acceptance criteria:**

- Tidak ada duplikasi data yang membuat homepage dan katalog berbeda.
- Data tidak valid/draft tidak tampil sebagai project publik.
- Detail dan metadata sesuai slug; slug invalid menghasilkan 404.
- Link eksternal dan media memiliki fallback yang aman.

## Phase 7 — Contact dan Pengelolaan Konten

**Tujuan:** mengimplementasikan contact flow dan mekanisme owner project
management yang dipilih dalam technical decision.

### Prompt AI

```text
Jalankan Phase 7 dari PLAYBOOK.md.
Baca guide Next.js untuk pola form/server API yang sesuai versi project.
Implementasikan hanya provider dan arsitektur yang disetujui pada Phase 3.

Contact:
- validasi client dan server;
- error/loading/success yang sesuai hasil provider;
- anti-spam dan rate limit yang cocok untuk deployment;
- rahasia hanya pada server dan tidak mencatat isi inquiry ke log.

Project management:
- batasi operasi create/update/delete atau unpublish kepada owner;
- validasi seluruh payload;
- cegah konten invalid menjadi publik;
- tangani slug, error provider, dan kegagalan persistence secara eksplisit.

Jangan membangun multi-user admin atau database baru tanpa persetujuan.
Tambahkan pengujian untuk jalur sukses dan kegagalan.
```

**Acceptance criteria:**

- Inquiry tidak menunjukkan sukses sebelum provider menerima permintaan.
- Kegagalan provider/rate limit ditangani secara eksplisit.
- Operasi project hanya dapat dilakukan oleh owner.
- Secret tidak ada di bundle/browser atau repository.
- Retensi dan akses data sesuai keputusan Phase 3.

## Phase 8 — SEO, Accessibility, Security, dan Performance

**Tujuan:** meningkatkan kualitas teknis website sebelum QA.

### Prompt AI

```text
Jalankan Phase 8 dari PLAYBOOK.md.
Audit aplikasi terhadap persyaratan NFR PRD tanpa menambah fitur produk.
Periksa metadata per route, canonical/robots/sitemap bila relevan, semantic
HTML, keyboard/focus, form labels, alt text, responsive layout, gambar/font,
client bundle, external links, validasi server, rate limiting, dan secret.

Baca dokumentasi Next.js versi repository untuk setiap API yang disentuh.
Perbaiki temuan yang terkait dengan scope. Jangan mengaktifkan analytics atau
mengumpulkan data pengguna tanpa keputusan privasi yang jelas.

Jalankan lint/build dan pengujian yang relevan. Laporkan hasil, jangan
mengklaim skor atau audit yang tidak dijalankan.
```

**Acceptance criteria:**

- Route utama mempunyai metadata dan struktur semantic yang wajar.
- Form dan navigasi dapat digunakan dengan keyboard.
- Tidak ada secret atau trust pada validasi client saja.
- Perubahan tidak menambah client code atau analytics tanpa alasan.

## Phase 9 — Testing dan Release Readiness

**Tujuan:** memvalidasi acceptance criteria, menemukan regresi, dan menutup
bug sebelum deploy.

### Prompt AI

```text
Jalankan Phase 9 dari PLAYBOOK.md.
Uji alur end-to-end berdasarkan PRD:
- Home ke katalog, featured project, detail, dan contact;
- slug valid dan tidak valid;
- mobile/desktop dan navigasi keyboard;
- field form invalid, valid, spam/rate limit, provider error;
- akses owner ditolak/diizinkan dan CRUD project bila tersedia;
- gambar/link tidak tersedia dan empty state.

Jalankan npm run lint, npm run build, serta test yang telah dikonfigurasi.
Perbaiki hanya bug dalam scope dan buat laporan hasil uji dengan status
pass/fail serta bukti aktual. Jangan menambahkan fitur baru atau mengarang
hasil browser/device yang tidak diuji.
```

**Acceptance criteria:**

- Skenario P0 lulus atau blocker tercatat.
- Build/lint berhasil atau kegagalannya memiliki diagnosis.
- Test report mencatat lingkungan dan skenario yang benar-benar dijalankan.
- Tidak ada perubahan scope yang belum disetujui.

## Phase 10 — Deployment dan Launch

**Tujuan:** merilis website ke environment production dan memeriksa konfigurasi
runtime.

### Prompt AI

```text
Jalankan Phase 10 dari PLAYBOOK.md.
Periksa konfigurasi build dan deployment Vercel yang disetujui. Verifikasi
environment variables, domain, metadata/OG image, sitemap/robots, contact
provider, rate limit, database permissions bila digunakan, dan build
production.

Jangan mencetak secret, menambahkan nilai credential palsu, atau melakukan
deploy tanpa otorisasi pengguna. Setelah deploy yang diizinkan, smoke-test
homepage, project listing/detail, not-found, contact flow, dan responsive
layout. Dokumentasikan URL hasil deploy, command, hasil pemeriksaan, rollback
plan, serta item launch yang masih menunggu pemilik.
```

**Acceptance criteria:**

- Production build lulus.
- Secret dan integration config tersedia hanya di environment yang tepat.
- Domain dan route publik dapat diakses.
- Smoke test dilaporkan berdasarkan pengujian aktual.
- Konten dan legal/privacy information yang diwajibkan telah disetujui pemilik.

## Urutan dan Output

| Fase | Fokus | Output utama |
|---:|---|---|
| 0 | Persiapan | Environment dan worktree diketahui |
| 1 | Audit | Baseline dan gap terverifikasi |
| 2 | Sitemap/flow | Navigasi dan content plan |
| 3 | Arsitektur/data | Keputusan content, database, CRUD, contact |
| 4 | UI/UX | Spesifikasi layout dan state |
| 5 | Frontend foundation | Layout, Home, About, Contact presentation |
| 6 | Proyek | Sumber data, katalog, detail |
| 7 | Integrasi | Contact dan project management |
| 8 | Hardening | SEO, accessibility, security, performance |
| 9 | QA | Hasil test dan bug fix |
| 10 | Launch | Production deployment dan smoke test |

## Command Harian

Jalankan dari root repository:

```powershell
npm run dev
npm run lint
npm run build
git status --short
git diff --check
```

Jalankan hanya command yang relevan dengan fase aktif. Script test otomatis
belum tentu tersedia; periksa `package.json` sebelum menjalankannya dan jangan
menambah framework test tanpa kebutuhan.

## Checklist Sebelum Pindah Fase

- [ ] Acceptance criteria fase selesai diperiksa.
- [ ] Perubahan direview dan tidak menghapus pekerjaan yang sudah ada.
- [ ] Command yang relevan dijalankan dan hasil aktual dicatat.
- [ ] Error dan blocker dijelaskan; tidak ada success-shaped fallback.
- [ ] Konten faktual serta perubahan scope sudah disetujui pemilik.
- [ ] Pengguna memberi instruksi untuk melanjutkan.

## Format Laporan Setelah Setiap Fase

```text
PHASE:
STATUS: Completed / Blocked / Partially completed

SUMMARY:
- ...

FILES CREATED / MODIFIED:
- ...

DEPENDENCIES:
- ...

COMMANDS:
- ...

TEST RESULTS:
- ...

KNOWN ISSUES / OWNER INPUT NEEDED:
- ...

NEXT PHASE:
- Belum dijalankan; menunggu instruksi.
```

## Catatan Pelaksanaan

1. PRD adalah sumber kebutuhan; perubahan scope harus dibahas, bukan dibuat
   diam-diam.
2. Jangan tampilkan data placeholder sebagai informasi personal atau bukti
   hasil proyek.
3. Gunakan pola Next.js yang terdokumentasi untuk versi yang benar-benar
   terpasang di repository.
4. Hindari database, CMS, auth, atau dependency baru jika kebutuhan dapat
   dipenuhi dengan solusi lebih sederhana.
5. Proteksi secret, inquiry, dan operasi owner sejak server boundary.
6. Jangan lanjut otomatis setelah sebuah fase selesai.
