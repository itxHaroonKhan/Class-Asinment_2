import React from 'react';

const FooterPage = () => {
  return (
    <div>
      <footer className='flex flex-col items-center p-5 bg-gradient-to-r from-blue-900 to-blue-600 text-white w-full'>
        <p className='text-lg font-semibold'>Haroon Rasheed</p>
        <div className='mt-2'>
          <a href="#" className='text-white hover:underline mx-2'>Privacy Policy</a>
          <a href="#" className='text-white hover:underline mx-2'>Terms of Service</a>
        </div>
        <p className='mt-4 text-sm'>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FooterPage;
