import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-white py-8 border-t-4 border-brand-yellow mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="font-bold">© 2024 Rental Mobil. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-400">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;