import React from 'react';
import { CARS } from '../constants';
import CarCard from '../components/CarCard';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-white py-12 px-4">
      <div className="container mx-auto">
        <div className="border-b-4 border-brand-black mb-12 pb-4">
            <h1 className="text-4xl font-bold uppercase">Katalog Produk</h1>
            <p className="text-gray-600 mt-2">Pilih kendaraan yang sesuai dengan kebutuhan Anda</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;