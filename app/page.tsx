// pages/index.tsx

import Banner from "@/components/Banners";
import CarouselOrientation from "@/components/Carousel1";
import Ceremony from "@/components/Ceremony";
import { ConfirmationForm } from "@/components/ConfirmationForm";
import { GiftSection } from "@/components/GiftSection";




export default function Home() {
  return (
    <div>
      <Banner />
      <CarouselOrientation/>
      <Ceremony/>
      <ConfirmationForm/>
      <GiftSection/>
    </div>
  );
}
