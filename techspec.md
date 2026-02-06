# Spesifikasi Teknis Proyek Portofolio

## 1. Teknologi Utama & Dependencies

### Framework & Library Inti
- Next.js v12.1.6 - Framework React untuk SSR dan static site generation
- React v18.1.0 - Library UI utama
- React DOM v18.1.0 - Package rendering React
- Tailwind CSS v3.0.24 - Framework CSS utility-first

### UI Components & Animasi
- Framer Motion v6.3.4 - Library animasi
- Radix UI (react-slot) - Primitive UI components
- Lucide React - Icon library
- Class Variance Authority - Utility styling
- Tailwind Merge - Utility untuk menggabungkan class Tailwind
- Tailwind Animate - Animasi untuk Tailwind

### Development Tools
- ESLint v8.16.0 - Linter JavaScript
- Prettier v2.6.2 - Code formatter
- PostCSS v8.4.14 - Tool transformasi CSS
- Autoprefixer v10.4.7 - Plugin PostCSS untuk vendor prefixes

## 2. Struktur Proyek & Arsitektur

### Struktur Direktori
```
portofolio/
├── components/           # Komponen React yang dapat digunakan kembali
│   ├── lib/             # Utility functions
│   └── ui/              # Komponen UI dasar
├── data/                # Data statis (Projects, Skills, Contacts, dll)
├── pages/               # Route pages Next.js
│   ├── api/            # API endpoints
│   ├── about/          # Halaman About
│   ├── contact/        # Halaman Contact
│   ├── projects/       # Halaman Projects
│   └── edits/          # Halaman Edits
├── public/             # Asset statis
│   └── images/         # Gambar-gambar
├── styles/             # File CSS global
```

### Arsitektur Aplikasi
- Menggunakan arsitektur berbasis komponen React
- Routing berbasis file menggunakan Next.js
- Styling menggunakan Tailwind CSS dengan konfigurasi custom
- State management menggunakan React hooks
- Component library custom dengan shadcn/ui

## 3. Konfigurasi & Setup

### Next.js Config
- Mode strict React diaktifkan
- Konfigurasi dasar tanpa custom config tambahan

### Tailwind Config
- Dark mode menggunakan class strategy
- Custom color scheme dengan tema neobrutalism
- Custom border radius dan box shadow
- Animasi custom dengan tailwindcss-animate
- CSS variables untuk theming

### PostCSS
- Menggunakan autoprefixer
- Integrasi dengan Tailwind CSS

### Environment Variables
- Google Sheets URL untuk integrasi data eksternal

### Aliases Path
- @/components/* -> components/*
- @/data/* -> data/*

## 4. Development & Deployment

### Scripts NPM
- `dev`: Menjalankan server development
- `build`: Build produksi
- `start`: Menjalankan build produksi
- `lint`: Menjalankan ESLint
- `export`: Export static site

### Linting & Formatting
- ESLint dengan konfigurasi next/core-web-vitals
- Prettier dengan plugin Tailwind CSS

### Deployment
- Siap untuk deployment di Vercel
- Static export tersedia
- Gitignore untuk file sensitif dan build artifacts

## 5. Persyaratan Sistem

### Minimum Requirements
- Node.js versi yang kompatibel dengan Next.js 12.1.6
- NPM atau Yarn untuk package management
- Git untuk version control

### Development Environment
- VSCode atau editor kode lainnya
- Chrome DevTools untuk debugging
- Terminal untuk command line operations