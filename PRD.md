# Product Requirements Document — Aljaffarsyah Labs

> Dokumen kebutuhan produk untuk website portfolio Aljaffarsyah Labs. PRD ini
> menjadi sumber kebenaran untuk scope, perilaku, dan acceptance criteria MVP.

## 1. Informasi Produk

| Item | Detail |
|---|---|
| Nama produk | Aljaffarsyah Labs |
| Tipe produk | Website personal portfolio dan showcase proyek SaaS |
| Tujuan utama | Menampilkan karya dan kemampuan secara profesional serta membuka jalur inquiry |
| Pengguna utama | Calon klien, founder, business owner |
| Pengguna sekunder | Recruiter, investor, partner, komunitas developer |
| Platform | Website responsif; desktop, tablet, dan mobile |
| Bahasa | Bahasa Inggris untuk konten publik MVP; dokumen pengembangan berbahasa Indonesia |
| Model bisnis | Portfolio personal, bukan SaaS berbayar |

## 2. Ringkasan Produk

Aljaffarsyah Labs adalah website terpusat untuk memperkenalkan developer,
menampilkan produk SaaS dan software yang pernah dibuat, menjelaskan
permasalahan serta hasil tiap proyek, dan memudahkan pengunjung menghubungi
pemilik portfolio.

Website harus menyajikan informasi yang nyata dan dapat diverifikasi. Angka
metrik, testimoni, pengalaman kerja, ketersediaan layanan, dan klaim performa
tidak boleh ditampilkan sebagai fakta tanpa konfirmasi pemilik.

## 3. Masalah dan Solusi

**Masalah:** informasi proyek developer tersebar di berbagai repository,
demo, dan platform sehingga calon klien atau recruiter sulit memahami konteks,
peran, proses, dan hasil pekerjaan.

**Solusi:** satu website yang menggabungkan profil, daftar proyek, studi kasus
terstruktur, tautan demo/repository, dan contact flow yang jelas.

## 4. Product Goals

1. Memperkenalkan pemilik portfolio dengan positioning yang jelas.
2. Menampilkan proyek melalui daftar yang mudah dijelajahi dan halaman detail
   yang konsisten.
3. Menjelaskan kontribusi, solusi, teknologi, dan hasil proyek secara kredibel.
4. Memudahkan calon klien atau partner memulai percakapan.
5. Memastikan konten proyek dapat dipelihara tanpa membangun platform admin
   multi-user yang kompleks.
6. Memberikan pengalaman cepat, responsif, accessible, dan SEO-friendly.

### Bukan tujuan MVP

- Menjadi marketplace atau produk SaaS dengan billing.
- Menyediakan social network, kolaborasi tim, atau akun pengunjung.
- Menghasilkan konten atau metrik proyek secara otomatis menggunakan AI.
- Menyediakan analytics dashboard internal yang kompleks.

## 5. Target Users dan Kebutuhan

| Persona | Kebutuhan |
|---|---|
| Calon klien / founder | Memahami layanan dan melihat bukti pekerjaan yang relevan |
| Recruiter | Menilai kemampuan, pengalaman, teknologi, dan cara menghubungi developer |
| Investor / partner | Memahami fokus produk, proyek, dan peluang kolaborasi |
| Pemilik portfolio | Memperbarui informasi proyek dan menerima inquiry dengan aman |

## 6. MVP Scope dan Prioritas

| Prioritas | Kemampuan |
|---|---|
| P0 | Homepage dengan positioning, CTA, dan proyek pilihan |
| P0 | Daftar proyek dan halaman detail per slug |
| P0 | About/profile dengan biografi dan skill yang telah diverifikasi |
| P0 | Contact flow dengan validasi dan konfirmasi status pengiriman |
| P0 | Layout responsive, navigasi, metadata dasar, dan not-found state |
| P1 | Pencarian dan filter kategori proyek yang benar-benar berfungsi |
| P1 | Pengelolaan konten project yang praktis untuk pemilik |
| P1 | SEO lanjutan, sitemap, social sharing image, dan analytics yang sesuai privasi |
| P2 | Blog, newsletter, testimonials, project timeline, dan public roadmap |
| P3 | AI project search, AI portfolio assistant, dan analytics dashboard |

### Batasan MVP

- Tidak ada pembayaran, subscription, atau customer account.
- Tidak ada multi-user authorization atau admin dashboard kompleks.
- Tidak ada CMS eksternal kecuali kebutuhan konten membuktikannya perlu.
- Tidak ada klaim metrik/testimoni yang belum disetujui pemilik.
- Kontak tidak boleh gagal secara diam-diam; kegagalan harus terlihat oleh
  pengunjung dan dapat ditelusuri oleh operator tanpa membocorkan data sensitif.

## 7. Kondisi Repository Saat Ini

Dokumen ini dibuat berdasarkan implementasi yang tersedia saat ini:

- Aplikasi menggunakan Next.js App Router, React, TypeScript, dan Tailwind CSS.
- Route yang ada mencakup homepage, daftar proyek, dan detail proyek
  `/projects/[slug]`.
- Data proyek saat ini berada di `lib/projects.ts`; beberapa konten dan tautan
  tampak sebagai data contoh dan perlu diverifikasi sebelum dipublikasikan.
- Homepage memiliki data proyek terpisah dari sumber data halaman projects,
  sehingga konten berisiko tidak konsisten.
- About dan contact saat ini berupa section di homepage; belum menjadi alur
  halaman/form lengkap yang tervalidasi.
- Belum ada CRUD project, penyimpanan inquiry, atau integrasi email yang
  terkonfirmasi.
- Metadata root masih berupa metadata starter dan harus disesuaikan.

Kondisi tersebut adalah baseline, bukan pernyataan bahwa acceptance criteria
MVP telah terpenuhi. Pertahankan perubahan yang sudah ada dan audit file aktual
sebelum mengubah implementasi.

## 8. Functional Requirements

### FR-01 — Homepage

Homepage memperkenalkan pemilik dan memberi jalur yang jelas ke proyek serta
contact.

**Acceptance criteria:**

- Menampilkan headline/positioning, ringkasan profil, CTA proyek, dan CTA kontak.
- Menampilkan proyek pilihan yang berasal dari sumber data yang sama dengan
  halaman projects.
- Tidak menampilkan placeholder, CTA `#`, tanggal ketersediaan usang, atau
  klaim yang belum disetujui.
- Navigasi menuju section/route yang benar dan bekerja dengan keyboard.

### FR-02 — Profil dan kemampuan

Pengunjung dapat memahami pengalaman dan fokus teknis pemilik.

**Acceptance criteria:**

- Biografi, pengalaman, skill, tautan sosial, dan CV hanya ditampilkan setelah
  diverifikasi pemilik.
- Informasi penting dapat ditemukan dari navigasi utama atau homepage.
- Tautan CV dan sosial memiliki tujuan valid; bila belum tersedia, kontrolnya
  tidak ditampilkan.

### FR-03 — Katalog proyek

Pengunjung dapat menjelajahi proyek SaaS, web app, dan karya lain.

**Acceptance criteria:**

- Setiap item menggunakan slug unik dan memiliki judul, kategori, deskripsi,
  thumbnail, stack, dan status publikasi yang valid.
- Item draft atau tidak lengkap tidak muncul pada halaman publik.
- Pencarian/filter (bila masuk iterasi P1) benar-benar mempersempit daftar dan
  memiliki empty state.
- Featured projects di homepage tidak memiliki konten yang berbeda dari katalog.

### FR-04 — Detail proyek

Setiap proyek publik memiliki halaman studi kasus.

**Acceptance criteria:**

- Detail memuat overview, masalah, solusi, kontribusi/highlights, tech stack,
  media, serta demo/repository bila tersedia.
- Metrik hanya ditampilkan jika nilai dan sumbernya sudah dikonfirmasi pemilik.
- Tautan eksternal memiliki URL valid dan perilaku keamanan yang sesuai.
- Slug tidak ditemukan menghasilkan not-found state/HTTP 404.
- Metadata judul dan deskripsi spesifik proyek tersedia.

### FR-05 — Contact

Pengunjung dapat mengirim inquiry yang relevan.

**Acceptance criteria:**

- Form meminta nama, email, dan pesan; validasi dijalankan di client dan server.
- Pengguna memperoleh status sukses hanya setelah pengiriman benar-benar
  diterima oleh integrasi yang digunakan.
- Error, validasi, dan loading state ditampilkan dengan jelas tanpa menghapus
  input secara tidak sengaja.
- Form memiliki perlindungan spam dan rate limit yang sesuai deployment.
- Pesan dan kredensial tidak dicatat ke log publik. Kebijakan penyimpanan data
  dan privasi dijelaskan sebelum launch.

### FR-06 — Pengelolaan proyek

Pemilik dapat menambah, mengedit, dan menghapus atau meng-unpublish proyek.

**Acceptance criteria:**

- Akses perubahan konten dibatasi hanya untuk pemilik.
- Konten tidak dipublikasikan sebelum validasi wajib terpenuhi.
- Penghapusan proyek mencegah broken links dan menangani slug yang sudah
  diindeks dengan tepat.
- Solusi yang dipilih tetap sederhana: source-controlled content atau
  pengelolaan terproteksi; keputusan dan trade-off harus dicatat sebelum
  membangun admin UI.

### FR-07 — Navigasi dan layout

**Acceptance criteria:**

- Route publik minimal: `/`, `/about`, `/projects`, `/projects/[slug]`, dan
  `/contact` (atau section contact yang konsisten jika keputusan sitemap
  menunda route khusus).
- Navigasi berfungsi di mobile dan desktop.
- Halaman memiliki loading/not-found/error state yang sesuai.

## 9. Sitemap dan User Flow

```text
/
├── /about
├── /projects
│   └── /projects/[slug]
└── /contact
```

Alur utama pengunjung:

```text
Home → Projects → Project Detail → Contact → Inquiry Submitted
```

Alur recruiter:

```text
Home → About → Projects → Project Detail → Contact / CV
```

## 10. Konten dan Model Data

### Project

| Field | Keterangan |
|---|---|
| id | Identifier stabil |
| title | Nama proyek |
| slug | URL unik |
| category | Kategori proyek |
| description | Ringkasan untuk katalog dan metadata |
| overview | Konteks studi kasus |
| problem / solution | Masalah dan pendekatan |
| role / highlights | Kontribusi pemilik dan poin penting |
| hero_image / gallery | Media dengan alt text |
| tech_stack | Teknologi yang digunakan |
| metrics | Opsional; hanya metrik terverifikasi beserta label |
| demo_url / github_url | Opsional; URL valid |
| featured / published | Pengurutan homepage dan status publikasi |
| created_at / updated_at | Timestamp |

### Contact inquiry

| Field | Keterangan |
|---|---|
| id | Identifier |
| name | Nama pengirim |
| email | Email valid |
| message | Isi inquiry |
| created_at | Waktu diterima |
| status | Status penanganan internal bila disimpan |

Jangan menyimpan field tambahan atau data pribadi yang tidak diperlukan.
Tetapkan retensi dan akses sebelum menyimpan inquiry secara persisten.

## 11. Technical Direction

| Area | Arah |
|---|---|
| Framework | Next.js App Router (versi project saat ini: 16.2.9) |
| Language | TypeScript strict |
| UI | React 19, Tailwind CSS 4, komponen shadcn/ui yang sudah ada |
| Forms | React Hook Form dan Zod sudah tersedia; validasi server tetap wajib |
| Content | Gunakan satu sumber data kanonik untuk homepage, listing, dan detail |
| Database | Supabase/PostgreSQL dan Drizzle ORM adalah opsi dari konsep awal; verifikasi kebutuhan dan kompatibilitas sebelum menambahkannya |
| Email | Resend adalah opsi integrasi contact; jangan mengirim status sukses sebelum provider mengonfirmasi penerimaan |
| Analytics | Google Analytics opsional; aktifkan sesuai kebutuhan privasi/consent dan kebijakan yang berlaku |
| Deployment | Vercel sebagai target awal; environment variables disimpan di konfigurasi deployment |
| Repository | GitHub |

Jangan menganggap dependency atau service pada tabel sudah terpasang atau
terkonfigurasi. Untuk perubahan kode Next.js, baca panduan yang relevan pada
`node_modules/next/dist/docs/` terlebih dahulu dan ikuti API versi repository.

## 12. Non-Functional Requirements

| Aspek | Requirement |
|---|---|
| Responsive | Konten usable pada mobile, tablet, dan desktop |
| Performance | Hindari JavaScript client yang tidak perlu; optimasi gambar dan font |
| SEO | Metadata per route, semantic HTML, sitemap/robots saat siap launch |
| Accessibility | Keyboard navigation, focus visible, label form, alt text, kontras |
| Security | Validasi input server-side, rahasia hanya di server, rate limit contact |
| Reliability | Error integration terlihat dan dapat dipantau; tidak ada success palsu |
| Privacy | Data inquiry minimal, akses terbatas, retensi dijelaskan |
| Maintainability | Satu sumber data dan komponen bersama tanpa abstraksi berlebihan |
| Compatibility | Browser evergreen modern dan breakpoint mobile utama |

## 13. Success Criteria

- Pengunjung dapat mencapai detail proyek dari homepage dan katalog.
- Semua proyek publik menampilkan konten valid, konsisten, dan memiliki link
  yang diperiksa.
- Contact flow menghasilkan konfirmasi sesuai hasil provider dan menangani
  kegagalan dengan benar.
- Pemilik dapat memperbarui konten melalui mekanisme yang dipilih tanpa
  merusak halaman lain.
- Tidak ada placeholder kritis, broken route, atau error build/lint pada
  pemeriksaan yang disepakati.
- Halaman utama dapat digunakan dengan keyboard dan layout mobile.

Baseline angka analytics atau conversion rate ditentukan setelah website
berjalan dan traffic nyata tersedia; jangan mengarang target numerik.

## 14. Risiko dan Keputusan Terbuka

| Risiko/keputusan | Tindakan |
|---|---|
| Konten proyek yang ada mungkin data contoh | Pemilik memverifikasi judul, klaim, metrik, gambar, dan link sebelum launch |
| Sumber konten statis vs database/admin | Putuskan berdasarkan frekuensi update dan kebutuhan CRUD; catat di technical plan |
| Pengelolaan kredensial/form spam | Pilih provider dan strategi rate limit sebelum contact production |
| Gambar eksternal | Pastikan hak penggunaan, stabilitas URL, optimasi, dan konfigurasi Next.js |
| Profil dan CTA memiliki placeholder | Kumpulkan URL/biografi/CV/ketersediaan aktual sebelum publikasi |
| Analytics dan privasi | Aktifkan hanya jika tujuan dan consent/pemberitahuan jelas |

## 15. Future Roadmap

- Blog dan newsletter.
- Testimonials dan case study yang lebih mendalam.
- Timeline perjalanan proyek dan public roadmap.
- Pencarian proyek berbantuan AI.
- Portfolio assistant dan analytics dashboard.
- CMS eksternal bila kebutuhan pengelolaan konten berkembang.
