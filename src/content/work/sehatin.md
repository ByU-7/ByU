---
title: "seHATIn"
description: "A wellness web application featuring a questionnaire-based assessment system. Built to help users reflect on their mental well-being through guided questions."
pubDate: "2026-06-10"
isFeatured: true
---

### The Idea
Seringkali, langkah pertama untuk menjaga kesejahteraan mental adalah dengan menyadarinya. **seHATIn** adalah aplikasi berbasis web yang dirancang untuk menjadi ruang aman bagi pengguna melakukan penilaian diri (self-assessment) terkait kondisi emosional dan psikologis mereka melalui kuesioner interaktif.

### The Process
Saya membangun sistem ini dengan dua sisi yang saling melengkapi:
- **Public-facing App:** Antarmuka modern yang nyaman dan ramah bagi pengguna, menggunakan elemen desain modern seperti *floating forms*, lencana (*badges*), dan tipografi yang tenang.
- **Admin Dashboard:** Sebuah panel kontrol modular di belakang layar untuk mengelola Bank Pertanyaan, Kategori, dan Subkategori secara dinamis.

Tantangan utamanya adalah bagaimana merancang struktur kuesioner yang mendukung pertanyaan "positif" dan "negatif" (scoring terbalik) namun tetap berjalan mulus dalam satu alur *quiz* yang intuitif.

### Tech Stack
- **Frontend:** HTML5, Custom CSS Variables & Components, Phosphor Icons.
- **Backend:** PHP (Native), PDO (PHP Data Objects).
- **Database:** MySQL (Categories, Subcategories, Questions logic).
