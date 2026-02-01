import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CARS, WHATSAPP_NUMBER } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const car = CARS.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [id]);

  if (!car) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold">Mobil tidak ditemukan</h2>
        <button 
            onClick={() => navigate('/produk')} 
            className="mt-4 bg-brand-black text-brand-white px-6 py-2 uppercase font-bold"
        >
            Kembali ke Produk
        </button>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Halo, saya tertarik rental mobil: ${car.name}`
  )}`;

  return (
    <div className="bg-gray-50 py-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 font-bold uppercase tracking-wider text-sm hover:text-brand-yellow transition-colors bg-white px-4 py-2 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit"
        >
          <span>←</span> Kembali
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white border-2 border-brand-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-video overflow-hidden relative">
                    <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-0 left-0 bg-brand-yellow text-brand-black font-bold px-6 py-2 border-r-2 border-b-2 border-brand-black">
                        Rp {car.price.toLocaleString('id-ID')} / 24 Jam
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-white border-2 border-brand-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2">
                    <span className="w-3 h-3 bg-brand-yellow border border-brand-black"></span> 
                    Deskripsi
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                    {car.description}
                </p>
            </div>
          </div>

          {/* Right Column: Specs & Action (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-brand-black text-white p-6 border-2 border-brand-black shadow-[8px_8px_0px_0px_#FFD700]">
                <h1 className="text-3xl font-bold uppercase leading-tight mb-2">{car.name}</h1>
                <p className="text-brand-yellow font-mono text-lg">{car.brand} Series</p>
            </div>

            <div className="bg-white border-2 border-brand-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold uppercase mb-6 border-b-2 border-brand-black pb-2">Spesifikasi</h3>
                
                <div className="space-y-4">
                    <SpecRow label="Tahun" value={car.year} />
                    <SpecRow label="Transmisi" value={car.transmission} />
                    <SpecRow label="Mesin" value={`${car.cc} CC`} />
                    <SpecRow label="Kapasitas" value={`${car.seats} Orang`} />
                    <SpecRow label="Warna" value={car.color} />
                    <SpecRow label="BBM" value={car.fuel} />
                </div>
            </div>

            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full bg-[#25D366] text-white text-center font-bold text-xl py-5 border-2 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all uppercase overflow-hidden"
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.669-.698c1.009.551 2.061.848 3.3.848 3.179 0 5.764-2.586 5.765-5.766.001-3.18-2.585-5.766-5.765-5.766zm.92 8.414c-.387.192-2.287 1.127-2.613 1.189-.327.06-.704.092-.99-.204-.648-.669-1.928-2.271-2.67-3.69-.19-.364-.017-.557.172-.736.171-.161.382-.419.574-.633.16-.178.212-.299.317-.497.106-.198.053-.371-.026-.525-.08-.154-.712-1.705-.975-2.336-.256-.613-.516-.529-.71-.539-.186-.009-.4-.011-.613-.011-.214 0-.56.079-.853.394-.293.315-1.119 1.091-1.119 2.661 0 1.569 1.142 3.085 1.302 3.303.16.219 2.249 3.42 5.441 4.793 2.126.915 2.556.732 3.023.687.712-.069 1.706-.696 1.946-1.368.24-.673.24-1.25.168-1.369-.071-.12-.266-.192-.559-.338z"/></svg>
                    Booking Sekarang
                </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecRow: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <div className="flex justify-between items-center border-b border-dashed border-gray-300 last:border-0 pb-3 last:pb-0">
        <span className="text-gray-500 font-bold text-sm uppercase">{label}</span>
        <span className="font-bold text-brand-black">{value}</span>
    </div>
);

export default ProductDetail;