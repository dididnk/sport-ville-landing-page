import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 me-10">
        <svg width="58px" height="58px" viewBox="-4.8 -4.8 57.60 57.60" fill="none" xmlns="http://www.w3.org/2000/svg">

            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

            <g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fillOpacity="0.01"/> 
              <path d="M36 15C38.7614 15 41 12.7614 41 10C41 7.23858 38.7614 5 36 5C33.2386 5 31 7.23858 31 10C31 12.7614 33.2386 15 36 15Z" fill="#BA1A1A" stroke="#0d41e1" strokeWidth="2.4"/> 
              <path d="M12 16.7691L20.0031 13.998L31 19.2466L20.0031 27.4442L31 34.6834L24.0083 43.998" stroke="#0d41e1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/> 
              <path d="M35.3198 21.6434L38.0015 23.1018L43.9998 17.4658" stroke="#0d41e1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/> 
              <path d="M16.849 31.5454L13.8793 35.4572L4.00391 40.9964" stroke="#0d41e1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/> 
            </g>

        </svg>
      <span className="text-white text-xl appName">SportVille</span>
    </div>
  );
};

export default Logo;