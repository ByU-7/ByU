---
title: "Perpus-Bootstrap"
description: "A complete digital library management system. Features automated fine calculations, interactive 3D book cover transitions, and member tracking."
pubDate: "2026-06-24"
---

### The Idea
Mengelola perpustakaan bukan hanya tentang mencatat buku masuk dan keluar, tetapi juga melacak ketersediaan, mengkalkulasi denda, dan membuat pengalaman meminjam buku lebih interaktif bagi anggota. **Perpus-Bootstrap** adalah purwarupa sistem manajemen perpustakaan yang fungsional sekaligus atraktif.

### The Process
Proyek ini sangat berfokus pada logika *backend* dan manipulasi *frontend*.
Pada sisi pengunjung (publik), saya mengimplementasikan animasi **3D Book Cover Transition** yang memberikan ilusi seolah pengunjung memegang fisik buku saat melihat detailnya.

Pada sisi admin, sistem ini dilengkapi dengan:
- **Denda Otomatis:** Perhitungan biaya keterlambatan dan kerusakan buku (berdasarkan tingkat kerusakannya).
- **Manajemen Inventaris:** Laporan ketersediaan buku yang dibedakan antara stok hilang dan stok rusak.
- **Statistik:** Dasbor lengkap untuk memantau sirkulasi peminjaman.

### Tech Stack
- **Frontend:** Bootstrap 5, Custom CSS/JS Animations, Vanilla JS (Theme Switcher & 3D Transitions).
- **Backend:** PHP (Native/XAMPP environment).
- **Database:** MySQL (Member, Book, and Borrowing tracking).
