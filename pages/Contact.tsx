import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah kami terima (Simulasi).');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-brand-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold uppercase mb-8 border-b-4 border-brand-black pb-4">
          Hubungi Kami
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-brand-black text-brand-white p-8 h-fit border-2 border-brand-black">
            <h2 className="text-2xl font-bold uppercase text-brand-yellow mb-6">Info Kontak</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-1">📍 Alamat</h3>
                <p className="text-gray-300">Jl. Raya Rental Mobil No. 123<br/>Jakarta Selatan, DKI Jakarta</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-1">📧 Email</h3>
                <p className="text-gray-300">info@rentalmobil.com</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-1">📱 WhatsApp</h3>
                <p className="text-gray-300">+62 812 3456 7890</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1">⏰ Jam Operasional</h3>
                <p className="text-gray-300">Senin - Minggu<br/>24 Jam Nonstop</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold uppercase mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="block font-bold mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-brand-black p-3 focus:outline-none focus:bg-brand-yellow/10"
                  placeholder="Masukkan nama anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-bold mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-brand-black p-3 focus:outline-none focus:bg-brand-yellow/10"
                  placeholder="contoh@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-bold mb-1">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-2 border-brand-black p-3 focus:outline-none focus:bg-brand-yellow/10"
                  placeholder="Tulis pesan anda disini..."
                />
              </div>

              <button
                type="submit"
                className="bg-brand-yellow text-brand-black font-bold uppercase py-4 border-2 border-brand-black hover:bg-brand-black hover:text-brand-yellow transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;