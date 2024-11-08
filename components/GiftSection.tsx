"use client"

import Image from 'next/image';

import { MessageForm } from './MessageForm';

export function GiftSection() {
  return (
    <div className='max-w-full bg-gray-100'>
    <div className="mx-auto max-w-2xl rounded bg-gray-100 p-8">
      <h2 className="mb-4 text-center text-3xl font-bold">Presentes</h2>
      <p className="mb-4 text-start text-[18px]">
        Em nosso casamento, decidimos adotar a tradição coreana de receber dinheiro dos convidados,
        conhecida como &quot;honbae&quot;, que é uma prática significativa na cultura do noivo. Essa tradição envolve a
        contribuição dos convidados em vez de presentes físicos, e a quantia pode ser ajustada conforme a preferência de cada um.
      </p>
      <div className="mb-6 flex justify-center">
        <Image
          src="/Presentes.png" // Substitua pelo caminho correto da imagem
          alt="Presente"
          width={500} // Ajuste a largura conforme necessário
          height={300} // Ajuste a altura conforme necessário
          className="rounded"
        />
      </div>
      <p className="mb-6 text-start text-[18px]">
        Para facilitar, pedimos que cada convidado coloque seu nome e escreva uma mensagem especial para nós.
        Após isso, os dados bancários para a transferência aparecerão. Agradecemos de coração qualquer forma de apoio,
        pois isso nos ajudará a construir nossa nova vida juntos.
      </p>
      {/* Reutilizando o componente MessageForm */}
      <MessageForm />
      <p className=" mt-4 text-start text-[18px] text-gray-600">
        Além disso, as mensagens deixadas por vocês se tornarão lembranças valiosas desse momento tão especial.
        A presença de todos em nosso grande dia é o que realmente importa, e ficaremos imensamente gratos por todo o carinho!
      </p>
    </div>
    </div>
  );
}
