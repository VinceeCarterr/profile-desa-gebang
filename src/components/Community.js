const logos = [
  '/logos/logo1.jpg',
  '/logos/logo2.jpg',
  '/logos/logo3.jpg',
  '/logos/logo4.jpg',
];

export default function Community() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Komunitas & Mitra</h2>
        <div className="flex flex-wrap justify-center items-center space-x-6">
          {logos.map((src, i) => (
            <img key={i} src={src} alt={`Logo ${i+1}`} className="h-12 opacity-70 hover:opacity-100 transition" />
          ))}
        </div>
      </div>
    </section>
  );
}