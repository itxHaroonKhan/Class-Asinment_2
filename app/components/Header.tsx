import Link from 'next/link';
import React from 'react';

const HeaderPage = () => {
  return (
    <>
      <div className="flex justify-between items-center px-8 py-4 bg-slate-800 w-full">
        <div className="text-4xl font-bold text-white">Haroon</div>

        <nav>
          <ul className="flex items-center gap-5">
            <li className=" text-white hover:bg-slate-400 p-3 rounded-md font-bold">
              <Link href="#">Home</Link>
            </li>
            <li className="font-bold text-white hover:bg-slate-400 p-3 rounded-md">
              <Link href="/about">About</Link>
            </li>
            <li className="font-bold text-white hover:bg-slate-400 p-3 rounded-md">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HeaderPage;
