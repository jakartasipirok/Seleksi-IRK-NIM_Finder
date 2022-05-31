# Seleksi-IRK-NIM_Finder

Versi <strong><i>26 Mei 2022</i></strong>

## Latar Belakang

Apakah Anda pernah mendengar maupun menggunakan NIM Finder? Ada beberapa NIM Finder yang pernah dibuat dan masih ada sampai saat ini, 2 diantaranya adalah [ashura](https://ashura.id/nim/) dan [geprek](https://geprek.mkamadeus.dev/). Kelihatannya hebat bukan? Tidakkah Anda penasaran bagaimana cara membuatnya? Regular Expression adalah solusi yang Anda butuhkan (apabila Anda memiliki data). Tunggu apa lagi? Anda mungkin akan membuat salah satu NIM Finder yang sangat diandalkan.

## Spesifikasi Wajib (2000 poin)

NIM Finder dibuat <strong>berbasis web</strong>. Bahasa dan Framework dibebaskan. Perhatikan bahwa UIUX juga memengaruhi penilaian. NIM Finder Anda harus mengandung beberapa fitur pencarian di bawah ini:

1. (400 poin) Pencarian berdasarkan NIM<br />
   Contoh kasus: - Memasukkan NIM `13519` akan memunculkan semua mahasiswa yang NIM nya <strong>mengandung</strong> `13519`. - Memasukkan NIM `101` akan memunculkan semua mahasiswa yang NIM nya mengandung `101`, baik di awal, tengah, maupun akhir.
2. (400 poin) Pencarian berdasarkan jurusan (atau fakultas) dan angkatan<br />
   Contoh kasus: - Memasukkan `IF 19` atau `Informatika 19` akan memunculkan semua mahasiswa Teknik Informatika ITB Angkatan 2019. - Memasukkan `Informatika` saja akan memunculkan semua mahasiswa Teknik Informatika.
3. (400 poin) Pencarian berdasarkan nama<br />
   Contoh kasus: - Memasukkan `Hok` akan memunculkan semua mahasiswa yang namanya mengandung `hok` - Memasukkan `Fis` akan memprioritaskan pencarian berdasarkan jurusan Fisika pada FMIPA.
4. (600 poin) Mengkombinasikan dan menggabungkan ketiga fitur pencarian di atas.<br />
   Contoh kasus: - Salah satu hasil untuk query `Tito IF 19` atau `IF 19 Tito` adalah `Muhammad Tito Prakasa`
5. (200 poin) UIUX
6. Hasil query setidaknya harus mengandung nama lengkap, 2 buah NIM, dan program studi. Apabilabelum memiliki program studi, data yang ditampilkan adalah NIM seadanya dan fakultas saja.
7. Untuk kenyamanan bersama, pencarian tidaklah case sensitive
8. Gunakan [folder ini](https://github.com/mkamadeus/nim-finder-v2/tree/main/src/json) untuk mengisi data mahasiswa (`data_13_21.json`), jurusan, dan fakultas. Disarankan untuk mendownload data-data yang Anda perlukan.

## Spesifikasi Bonus (750 poin)

Note: <i>Sebelum mengerjakan bonus, pastikan Anda sudah memenuhi spesifikasi wajib</i>

1. (250 poin) Melakukan deployment terhadap aplikasi web yang Anda buat
2. (500 poin) Membuat NIM Finder anda menjadi sebuah Progressive Web App/PWA. Apa itu PWA? [Monggo dibaca](https://web.dev/what-are-pwas/).<br />Meskipun dikerjakan, <strong><i>bonus ini dianulir bila Anda tidak melakukan deployment</i></strong>. Disarankan untuk tidak menggunakan Backend apabila Anda ingin mengerjakan bonus ini.

## Pengerjaan dan Pengumpulan

1. Buatlah sebuah repository <strong>private</strong> pada [github](https://github.com) Anda dan undanglah `hokkyss` ke dalam repository tersebut.
2. Buatlah issue di dalam repository ini untuk bertanya
3. Untuk pengumpulan, bisa isi [form](https://forms.gle/H1DHbotY2BE3chpE8)

## Credit

- Terimakasih banyak untuk kak [MK](https://github.com/mkamadeus) yang sudah memberikan izin untuk menggunakan data hasil scrape NIC
