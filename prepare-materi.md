# Persiapan Materi untuk Besok: Chapter 4

Ini adalah materi yang akan kita pelajari besok. Santai saja, tidak perlu dikerjakan sekarang. Ini hanya agar Anda punya gambaran.

---

### **Chapter 4: Data Fetching & API Integration (Typed)**

Di chapter ini, kita akan membuat aplikasi kita menjadi hidup dengan mengambil data dari internet. Kita akan mengubah halaman statis menjadi halaman dinamis.

**1. Tujuan Pembelajaran**
- Memahami perbedaan fundamental antara **Server Components** dan **Client Components**.
- Mengambil data dari API publik langsung di dalam Server Component menggunakan `async/await`.
- Membuat "blueprint" data (`interface` atau `type`) untuk memastikan data dari API 100% *type-safe*.
- Menampilkan data yang telah diambil di antarmuka pengguna (UI).
- Menangani kondisi *loading* dan *error* (jika waktu memungkinkan).

**2. TypeScript Concepts**
- `Promise<T>`: Memahami bahwa `fetch` mengembalikan sebuah "janji" yang akan berisi data.
- `interface` / `type`: Menggunakannya untuk memodelkan struktur data JSON dari sebuah API.
- `async` / `await`: Sintaks modern untuk menangani operasi asinkron seperti pengambilan data.

**3. Teori Singkat: Server Components adalah Default**
Di Next.js App Router, semua komponen yang Anda buat secara default adalah **Server Components**. Anggap saja ini adalah komponen "super" yang bisa melakukan hal-hal di sisi server, seperti mengakses database atau mengambil data dari API, sebelum halamannya dikirim ke browser pengguna.

- **Bisa `async`**: Server components bisa didefinisikan sebagai fungsi `async`.
- **Aman**: Karena kodenya berjalan di server, Anda bisa menyimpan *API keys* atau koneksi database dengan aman di sini.
- **Performa**: Mengurangi jumlah JavaScript yang dikirim ke browser, membuat situs lebih cepat.

Kita hanya akan menggunakan Client Components (dengan `"use client"`) jika kita butuh interaktivitas di browser, seperti `onClick`, `useState`, dll.

**4. Hands-on Project: Membuat Halaman "Inspirational Quotes"**

Kita akan membuat halaman baru (`/quotes`) yang menampilkan daftar kutipan (quotes) yang diambil dari API publik gratis.

**Rencana Langkah-demi-Langkah untuk Besok:**
1.  **Buat Halaman Baru**: Kita akan membuat halaman di `src/app/quotes/page.tsx`.
2.  **Definisikan Tipe Data**: Kita akan membuat `type Quote = { ... }` yang cocok dengan data dari API.
3.  **Fetch Data**: Kita akan mengubah komponen `QuotesPage` menjadi `async` dan menggunakan `fetch()` untuk mengambil data dari API `https://dummyjson.com/quotes`.
4.  **Tampilkan Data**: Kita akan menggunakan `.map()` untuk me-render setiap kutipan, mungkin menggunakan komponen `Card` yang sudah kita buat atau komponen baru yang lebih sederhana.

**Contoh Kode Awal (untuk besok):**
```tsx
import React from 'react';

// Tipe data untuk satu kutipan
type Quote = {
  id: number;
  quote: string;
  author: string;
};

// Fungsi untuk mengambil data
async function getQuotes() {
  const res = await fetch('https://dummyjson.com/quotes');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.quotes; // API ini mengembalikan objek dengan properti 'quotes'
}

// Komponen halaman kita menjadi async
const QuotesPage = async () => {
  const quotes: Quote[] = await getQuotes();

  return (
    <div>
      <h1>Inspirational Quotes</h1>
      {/* Kita akan map 'quotes' di sini */}
    </div>
  );
};

export default QuotesPage;
```

---
Itu saja persiapannya. Selamat istirahat, dan sampai jumpa besok untuk melanjutkan petualangan Next.js kita!