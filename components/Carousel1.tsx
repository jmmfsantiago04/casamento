import Image from "next/image";
    
import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  SliderMainItem,
  CarouselThumbsContainer,
  SliderThumbItem,
} from "@/components/ui/carousel";

const CarouselOrientation = () => {
  const images = ["/carousel1.png", "/carousel2.png", "/carousel3.png", "/carousel4.png"];

  return (
    <Carousel className=""> 
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
      <CarouselMainContainer className="flex max-h-[800px] min-h-[600px] min-w-[600] ">
        {images.map((src, index) => (
          <SliderMainItem key={index} className=" relative bg-transparent ">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill  
              quality={100}
              className="mx-auto self-center rounded-xl object-fill"
            />
          </SliderMainItem>
        ))}
      </CarouselMainContainer>

      <CarouselThumbsContainer className=" gap-2">
        {images.map((src, index) => (
          <SliderThumbItem key={index} index={index} className="max-h-[250px]">
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="rounded-xl object-cover"
            />
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
};

export default CarouselOrientation;
