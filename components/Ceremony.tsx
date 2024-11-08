import Image from 'next/image';
import React from 'react';

const Cerimonia = () => {
   return (
    <div className="flex flex-col items-center bg-gray-100 ">
      <h1 className="mb-4 mt-5 text-center text-[30px] lg:text-[40px] xl:text-[40px]">Cerimônia</h1>
      <p className="mb-8 ml-4 max-w-[632px] text-start  text-[16px] lg:text-[18px] xl:text-[18px]">
        Será uma alegria imensa ter vocês conosco no momento em que nossa união
        será abençoada diante de Deus! Aguardamos vocês no dia 28 de dezembro de
        2024, às 18h, na Igreja de Senhora SantAna, em Rio de Contas, BA.
      </p>
      <div className="flex  flex-col gap-1 md:flex-row">
        <div className=" flex">
          <Image
            src="/Igreja.png"
            alt="Igreja de Senhora Sant'Ana"
            width={350}
            height={530}
            className=" w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15512.875602825905!2d-41.81372990958509!3d-13.583433967616086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x743869bb47b37f5%3A0x280a2d497b0871e5!2sIgreja%20de%20Senhora%20Sant&#39;Ana!5e0!3m2!1sen!2sbr!4v1731005321579!5m2!1sen!2sbr"
            height={630}
            width={665}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=" w-full rounded-lg object-cover"
          ></iframe>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>Igreja de Senhora SantAna</p>
        <p>Rio de Contas, BA, 46170-000</p>
      </div>

      <div className="mt-16 flex flex-col items-center bg-gray-100 ">
        <h1 className="mb-4 text-center text-[40px]">Recepção</h1>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5432.590310488948!2d-41.81685911524951!3d-13.605322489570284!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1731007548605!5m2!1sen!2sbr"
            width={500}
            height={500}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="max-w-full rounded-lg"
          ></iframe>
        </div>
        <div className="mt-4 text-center">
          <p>Casa Vermelha</p>
          <p>Estrada Carlos Souto, loteamento Sazabé, Casa Vermelha, Rio de Contas, BA</p>
        </div>
      </div>
    </div>
  );
};

export default Cerimonia;
