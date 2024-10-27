# Vending Machine App

Vending Machine App adalah aplikasi berbasis web untuk mengelola persediaan dan transaksi pada mesin penjual otomatis. 
Aplikasi ini dibuat menggunakan React untuk frontend dan JSON server sebagai backend untuk menyimpan data produk.

## Fitur

- **Melihat daftar produk**: Lihat semua produk yang tersedia di mesin penjual otomatis.
- **Mengelola persediaan produk**: Memperbarui stok produk ketika terjadi transaksi.
- **Backend dengan JSON Server**: Menyimpan data produk menggunakan JSON server untuk simulasi API.

## Teknologi yang Digunakan

- **Frontend**: React, Axios
- **Backend**: JSON Server
- **Tools Lainnya**: Git, GitHub

## Langkah penggunaan
npm run server
npm start

## Struktur Project

├── public              # Folder untuk file statis
├── src                 # Folder untuk kode utama aplikasi
│   ├── api             # API untuk berinteraksi dengan backend
│   ├── components      # Komponen-komponen kecil aplikasi
│   ├── views           # Halaman utama aplikasi
│   ├── styles          # File CSS
│   ├── App.js          # Komponen utama aplikasi
│   └── index.js        # Entry point aplikasi
├── db.json             # Database JSON untuk JSON Server
├── package.json        # Konfigurasi npm dan dependencies
└── README.md           # Penjelasan tentang aplikasi