const features = [
  { title: 'Kolaborasi Warga', description: 'Mempererat hubungan antarwarga melalui platform digital.' },
  { title: 'Berbagi Sumber Daya', description: 'Memfasilitasi pertukaran barang dan jasa lokal.' },
  { title: 'Event Desa', description: 'Mengorganisir kegiatan budaya dan edukasi bersama.' },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Fitur Utama</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(f => (
            <div key={f.title} className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}