import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="group relative bg-white border-2 border-brand-black h-full flex flex-col">
      {/* Hard Shadow Element - Static position */}
      <div className="absolute top-0 left-0 w-full h-full bg-brand-black translate-x-2 translate-y-2 -z-10"></div>

      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-brand-black">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-brand-yellow text-brand-black font-bold px-4 py-1 border-2 border-brand-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {car.brand}
        </div>
        <div className="absolute bottom-0 left-0 bg-brand-black text-white px-4 py-2 font-bold text-sm">
            {car.year}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow text-left">
        <div className="flex justify-between items-start mb-4">
             <h3 className="text-xl font-bold uppercase leading-tight text-brand-black">{car.name}</h3>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium text-gray-600 mb-6">
            <div className="flex items-center gap-1">
                <span>⚙️</span> {car.transmission}
            </div>
            <div className="flex items-center gap-1">
                <span>👥</span> {car.seats} Seat
            </div>
            <div className="flex items-center gap-1">
                <span>⛽</span> {car.fuel}
            </div>
        </div>

        <div className="mt-auto flex flex-col gap-3">
            <div className="text-lg font-bold text-brand-black">
                Rp {car.price.toLocaleString('id-ID')}<span className="text-sm font-normal text-gray-500"> / hari</span>
            </div>
            <Link 
                to={`/produk/${car.id}`}
                className="block w-full text-center bg-brand-black text-white font-bold py-3 uppercase text-sm border-2 border-brand-black hover:bg-brand-yellow hover:text-brand-black transition-colors"
            >
                Lihat Detail
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;