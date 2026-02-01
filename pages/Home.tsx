import React from 'react';
import { Link } from 'react-router-dom';
import { CARS } from '../constants';
import CarCard from '../components/CarCard';

const Home: React.FC = () => {
  const featuredCars = CARS.slice(0, 6);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] flex items-center border-b-4 border-brand-black">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1600&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-yellow text-brand-black font-bold px-4 py-2 mb-6 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              #1 RENTAL MOBIL TERPERCAYA
            </div>
            <h1 className="text-5xl md:text-7xl font-bold uppercase text-white mb-6 leading-tight drop-shadow-lg">
              Perjalanan Nyaman <br/>
              <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "2px white" }}>Harga Teman</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl leading-relaxed">
              Sewa mobil lepas kunci atau dengan supir. Armada terbaru, bersih, dan siap antar jemput 24 Jam.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/produk"
                className="bg-brand-yellow text-brand-black text-lg font-bold py-4 px-10 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
              >
                Lihat Katalog
              </Link>
              <Link
                to="/kontak"
                className="bg-white text-brand-black text-lg font-bold py-4 px-10 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-brand-white py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-brand-black max-w-md leading-none">
              Kenapa Harus <br/>Rental Disini?
            </h2>
            <p className="mt-4 md:mt-0 max-w-md text-gray-600 font-medium">
              Kami menjamin kepuasan perjalanan Anda dengan standar pelayanan tinggi dan unit yang selalu prima.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 border-2 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_#FFD700] transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-black text-brand-yellow flex items-center justify-center text-3xl mb-6 border-2 border-brand-black group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors">
                💰
              </div>
              <h3 className="text-2xl font-bold uppercase mb-3">Harga Jujur</h3>
              <p className="text-gray-600">Transparansi harga adalah prioritas kami. Tidak ada biaya tersembunyi saat pembayaran akhir.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-brand-yellow p-8 border-2 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_#000000] transition-all duration-300">
              <div className="w-16 h-16 bg-white text-brand-black flex items-center justify-center text-3xl mb-6 border-2 border-brand-black">
                ✨
              </div>
              <h3 className="text-2xl font-bold uppercase mb-3">Unit Terbaru</h3>
              <p className="text-brand-black font-medium">Rata-rata usia kendaraan kami di bawah 3 tahun. Selalu bersih, wangi, dan terawat.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border-2 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_#FFD700] transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-black text-brand-yellow flex items-center justify-center text-3xl mb-6 border-2 border-brand-black group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors">
                🕒
              </div>
              <h3 className="text-2xl font-bold uppercase mb-3">Support 24/7</h3>
              <p className="text-gray-600">Tim support kami siap membantu kapanpun Anda membutuhkan bantuan darurat di jalan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="bg-gray-50 border-t-2 border-brand-black py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="bg-brand-yellow px-4 py-1 font-bold border-2 border-brand-black text-sm uppercase tracking-widest mb-4 inline-block">Koleksi Kami</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-brand-black">
              Pilih Kendaraan Anda
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/produk"
              className="inline-flex items-center gap-2 text-xl font-bold uppercase hover:text-brand-yellow transition-colors border-b-4 border-brand-yellow pb-1 hover:border-brand-black"
            >
              Lihat Semua Mobil <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             {/* Abstract pattern or noise if wanted, keeping it clean for now */}
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 text-white">
            Butuh Mobil Sekarang?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Proses booking cepat via WhatsApp. Tanpa ribet, langsung jalan.
          </p>
          <Link
            to="/kontak"
            className="inline-block bg-brand-yellow text-brand-black text-xl font-bold py-5 px-12 border-2 border-white hover:bg-white hover:border-brand-yellow transition-all uppercase shadow-[6px_6px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            Hubungi Admin
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;