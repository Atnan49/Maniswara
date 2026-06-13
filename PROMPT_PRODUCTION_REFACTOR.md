# Prompt: Production-Readiness Refactor — Maniswara Website

Kamu sedang bekerja di repo Next.js + TypeScript + Sanity untuk website
Maniswara (House of Dapoer Baru & Bagel's). Project ini awalnya digenerate
dari Figma export (figma/repo-template) dan masih dalam tahap demo. Tugasmu
adalah merapikan struktur dan kode supaya layak disebut "production-ready",
TANPA mengubah tampilan visual yang sudah disetujui (kecuali warna theme yang
memang belum sesuai brand — lihat poin 3).

Kerjakan secara bertahap, dan untuk setiap perubahan besar, jelaskan dulu apa
yang akan diubah sebelum mengeksekusi.

---

## 1. Package Manager Cleanup
- Project ini punya `package-lock.json` (npm) DAN `pnpm-lock.yaml` +
  `pnpm-workspace.yaml` (pnpm) sekaligus — ini berisiko menyebabkan konflik
  dependency version antar environment.
- Tentukan satu package manager (pakai **pnpm**, karena `pnpm-workspace.yaml`
  sudah ada dan ini umum untuk project hasil Figma export).
- Hapus `package-lock.json`, jalankan `pnpm install` untuk regenerate
  `pnpm-lock.yaml` yang bersih.
- Update `vercel.json` dan dokumentasi (`README.md`) supaya instruksi install
  & run menyebut pnpm, bukan npm.

## 2. Audit & Rapikan Struktur Folder `src/`
- Inventarisir semua file di `src/` — kelompokkan menjadi:
  - `app/` — routes (App Router): pastikan setiap halaman (Home, Menu,
    Gallery, Contact) punya folder/route yang jelas.
  - `components/` — komponen UI reusable, dipisah dari komponen page-specific.
  - `components/ui/` — komponen shadcn/ui (biarkan struktur default shadcn).
  - `lib/` — utility functions, helper, konstanta (misal formatter harga
    Rupiah, fungsi fetch Sanity).
  - `types/` — TypeScript interfaces/types (misal `MenuItem`, `Promo`,
    `Category`).
- Identifikasi komponen yang terlalu besar/monolitik (umum terjadi pada hasil
  Figma export — satu file berisi seluruh halaman). Pecah menjadi komponen
  lebih kecil sesuai section (Hero, OurStory, MenuSection, Gallery, Contact,
  Footer) agar mudah dimaintain.
- Hapus file/komponen yang tidak terpakai (dead code) — cek dengan mencari
  import yang tidak pernah dipanggil.

## 3. Design Tokens — Ganti Default shadcn Theme dengan Brand Maniswara
- File `default_shadcn_theme.css` mengindikasikan theme masih default
  shadcn/ui, belum pakai warna brand Maniswara.
- Definisikan CSS variables sesuai design tokens berikut (format HSL untuk
  shadcn) di file theme:
  - `--bg-cream`: #F4EFE3 (background utama)
  - `--green-deep`: #2F3B2C (header/footer/aksen gelap)
  - `--terracotta`: #C1652F (CTA, badge, aksen utama)
  - `--olive`: #5E5F4C (background section sekunder)
  - `--cream-text`: #F1ECD9 (teks di atas background gelap)
  - `--ink`: #2A2620 (teks utama di atas cream)
- Rename file jadi nama yang lebih jelas, misal `maniswara-theme.css`, dan
  update referensi import-nya.
- Pastikan semua komponen yang masih hardcode warna (misal `bg-white`,
  `text-black`, hex code langsung) diganti memakai token/CSS variable di atas
  atau utility class Tailwind yang sudah dipetakan ke token tersebut.
- Setelah selesai, jalankan dev server dan screenshot/verifikasi visual tidak
  berubah drastis dari demo yang sudah ada di maniswara.vercel.app.

## 4. Type Safety
- Pastikan `menu.json` punya TypeScript type/interface yang sesuai (`Category`,
  `MenuItem`, `MenuOption`) di `types/menu.ts`, dan komponen yang merender
  menu memakai type ini (bukan `any`).
- Cek `global.d.ts` — hapus deklarasi yang tidak relevan/tidak terpakai.
- Jalankan `tsc --noEmit` dan perbaiki semua TypeScript error/warning yang
  muncul.

## 5. Sanity Integration Review
- Cek `sanity.config.ts` — pastikan schema untuk `Promo`/`Event` dan `MenuItem`
  (jika sudah mulai dibuat) sesuai dengan struktur data di `menu.json`.
- Pastikan environment variables (project ID, dataset, API token) TIDAK
  di-hardcode di kode — harus lewat `.env.local` dan didaftarkan di
  `.env.example` (buat file ini jika belum ada, tanpa isi value asli).
- Tambahkan `.env.local` ke `.gitignore` jika belum ada.

## 6. Code Quality & Linting
- Jalankan `.eslintrc.json` yang sudah ada — perbaiki semua warning/error.
- Pastikan tidak ada `console.log` yang tertinggal di kode production.
- Cek konsistensi formatting (kalau belum ada Prettier config, tambahkan
  `.prettierrc` sederhana dan format ulang seluruh codebase).

## 7. Performance & Image Handling
- Pastikan semua `<img>` tag memakai komponen `next/image` (bukan tag HTML
  biasa) untuk optimasi otomatis — penting karena halaman ini banyak gambar
  (hero, gallery, menu).
- Tambahkan `alt` text deskriptif untuk semua gambar (accessibility +
  SEO) — gunakan nama item menu/deskripsi section sebagai referensi.

## 8. SEO & Metadata Dasar
- Pastikan `app/layout.tsx` (atau equivalent) punya metadata: title, meta
  description ("House of Dapoer Baru & Bagel's"), Open Graph tags, dan
  favicon.
- Tambahkan `sitemap.xml` dan `robots.txt` dasar jika belum ada (Next.js App
  Router punya convention file `sitemap.ts` dan `robots.ts`).

## 9. Cek Open Pull Request
- Ada 1 PR terbuka di repo — review isinya, pastikan tidak ada perubahan
  penting yang konflik dengan refactor ini. Merge atau close dengan penjelasan
  jika sudah tidak relevan.

## 10. Dokumentasi Akhir
- Update `README.md`: instruksi setup (pnpm install, env vars yang
  dibutuhkan, cara run dev server, cara akses Sanity Studio).
- Tambahkan section "Project Structure" singkat yang menjelaskan folder
  `app/`, `components/`, `lib/`, `types/`.

---

## Output yang Diharapkan
Setelah selesai, repo harus:
- Hanya punya satu lock file (pnpm).
- Struktur `src/` terorganisir per fungsi (app/components/lib/types).
- Theme warna sesuai brand Maniswara, tidak ada sisa warna default shadcn.
- Lolos `tsc --noEmit` dan ESLint tanpa error.
- Tidak ada secret/API key di kode.
- README ter-update dan akurat.
- Tampilan visual di browser tetap sama seperti demo sebelumnya (kecuali
  perbaikan warna theme di poin 3).

Kerjakan satu bagian dulu, tunjukkan hasilnya, baru lanjut ke bagian
berikutnya — jangan ubah semuanya sekaligus dalam satu commit besar.
