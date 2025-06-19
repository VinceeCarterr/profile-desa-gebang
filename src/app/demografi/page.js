export default function Demografi() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-semibold">Demografi & Geografi</h1>
      <section>
        <h2 className="text-2xl font-medium mb-2">Batas Wilayah</h2>
        <ul className="list-disc pl-5">
          <li>Utara: Desa Lumansari</li>
          <li>Selatan: Desa Mojo</li>
          <li>Barat: Desa Poncorejo</li>
          <li>Timur: Desa Krompaan</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-medium mb-2">Luas Wilayah</h2>
        <ul className="list-disc pl-5">
          <li>Pemukiman: 97 ha</li>
          <li>Pertanian Sawah: 89 ha</li>
          <li>Ladang/Tegalan: 4 ha</li>
          <li>Perkantoran: 0.25 ha</li>
          <li>Sekolah: 0.75 ha</li>
          <li>Jalan: 80 ha</li>
          <li>Lapangan Sepak Bola: 1 ha</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-medium mb-2">Populasi</h2>
        <p>Jumlah penduduk: 3.163 orang (1.611 laki-laki & 1.552 perempuan)</p>
        <p>Kepala keluarga: 1.070 KK</p>
      </section>
      <section>
        <h2 className="text-2xl font-medium mb-2">Aksesibilitas</h2>
        <p>Jarak ke ibu kota kecamatan: 1 km (1 menit perjalanan)</p>
        <p>Jarak ke ibu kota kabupaten: 10 km (20 menit perjalanan)</p>
      </section>
    </main>
  );
}