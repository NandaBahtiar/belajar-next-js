import React from 'react';

/**
 * @description Komponen ini adalah "Pekerja Pabrik" yang generik (bisa melakukan banyak jenis pekerjaan).
 * Ia tidak tahu apa itu 'Project' atau 'Card'. Tugasnya hanya:
 * 1. Menerima daftar item (items).
 * 2. Menerima instruksi untuk merender satu item (renderItem).
 * 3. Menerima instruksi untuk mendapatkan key unik dari satu item (getKey).
 * Karena ia sangat abstrak, ia bisa digunakan untuk menampilkan daftar apa saja.
 */

// <T> adalah placeholder untuk tipe data. Ini membuat interface ini generik.
// T akan digantikan dengan tipe data spesifik (misalnya 'Project') saat komponen digunakan.
interface ListProps<T> {
  items: T[]; // Sebuah array dengan tipe generik T.
  renderItem: (item: T) => React.ReactNode; // Sebuah FUNGSI yang akan dipanggil untuk merender setiap item.
  getKey: (item: T) => React.Key; // Sebuah FUNGSI yang akan dipanggil untuk mendapatkan key dari setiap item.
}

// Kita menulis <T,> untuk memberitahu TSX bahwa ini adalah komponen generik.
const List = <T,>({ items, renderItem, getKey }: ListProps<T>) => {
  return (
    <>
      {/* Logika inti: looping (map) melalui setiap item */}
      {items.map((item) => (
        // Untuk setiap item, panggil fungsi yang diberikan dari luar untuk melakukan pekerjaan.
        <React.Fragment key={getKey(item)}>
          {renderItem(item)}
        </React.Fragment>
      ))}
    </>
  );
};

export default List;