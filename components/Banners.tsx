// components/Banner.tsx

import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[60vh]  sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen">
      <div className="absolute inset-0">
        <Image
          src="/Banner1.png"
          alt="Background Image"
          fill
          quality={100}
          className="sm:object-cover"
        />
      </div>
      <div className="relative flex h-full flex-col justify-center   bg-white/30">
        <h1 className="font-style:italic mt-[55px] text-center text-[18px] sm:mt-[50px] sm:text-[30px] md:text-[30px] lg:text-[40px] ">
          Kim Ju Hyung e Maria Clara de Faria
        </h1>
        <p className="font-style:italic ml-3 mt-4 text-center text-[18px] sm:mt-4 sm:text-[24px] md:text-[28px]">
          “사랑을 축하하는 자리에 함께하세요”
        </p>
        <p className=" mx-4 text-start text-[13px] sm:text-[15px] md:text-[20px] xl:ml-[380px] xl:mr-[382px] xl:max-w-[750px]">
          Bem-vindos à nossa alegre celebração de amor! Estamos muito felizes em convidá-los para compartilhar um dia repleto de risadas, lágrimas de felicidade e momentos inesquecíveis. Nossa jornada juntos tem sido uma aventura extraordinária, e mal podemos esperar para iniciar este novo capítulo rodeados por nossos queridos familiares e amigos. Por favor, juntem-se a nós no dia 28/12/2024 enquanto trocamos votos e embarcamos em uma vida de companheirismo.
        </p>
      </div>
    </div>
  );
};

export default Banner;
