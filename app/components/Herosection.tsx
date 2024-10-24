import React from 'react';

const Herosection = () => {
  return (
     <div className="bg-[url('https://i.pinimg.com/originals/62/39/4d/62394d753859943e6a1a36443ef78795.gif')]  bg-cover h-screen bg-no-repeat ">
      <hr />
      <div className="flex flex-col items-center mt-10">
      <img 
  src="/img/Picsart_24-10-24_19-36-16-076.png" 
  alt="Profile Picture" 
  width="200" 
  height="200" 
  className="rounded-full mb-5 border-4 border-gray-500 shadow-lg transition-transform transform hover:scale-105" 
/>


    <p className="text-white text-center px-4 max-w-xl font-serif underline">
        I am a dedicated full-stack Software Engineer with over a year of professional experience, specializing in backend development. My expertise lies in designing and implementing robust and scalable SaaS architectures on the Amazon AWS platform. I am passionate about creating efficient solutions that drive performance and enhance user experience.
    </p>
</div>



    
</div>

  );
}

export default Herosection;
