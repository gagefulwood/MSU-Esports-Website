"use client"

import { SUPPORTED_GAMES } from "@/data/games"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function GamesCarousel() {
    const plugin = Autoplay({
    delay: 2000,
    stopOnInteraction: true,
  })

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
      plugins={[plugin]}
    >
      <CarouselContent>
        {SUPPORTED_GAMES.map((game) => (
          <CarouselItem
            key={game}
            className="basis-full md:basis-1/2 lg:basis-1/4"
          >
            <div className="bg-linear-to-br from-[#6B2D2D] to-[#8B1538] text-white p-8 rounded-lg hover:shadow-lg transition transform hover:scale-105 text-center font-semibold cursor-pointer h-full flex items-center justify-center">
              {game}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}