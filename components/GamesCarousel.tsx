"use client"

import { SUPPORTED_GAMES } from "@/data/games"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export function GamesCarousel() {
    const plugin = Autoplay({
    delay: 2000,
    stopOnInteraction: true,
  })

  // Convert game name to image filename
  const getImagePath = (gameName: string) => {
    const words = gameName.split(/\s+/)
    const fileName = words
      .map((word, idx) => 
        idx === 0 
          ? word.toLowerCase() 
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join("")
      .replace(/[&]/g, "and")
    return `/images/games/${fileName}.png`
  }

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
            className="basis-full md:basis-1/2 lg:basis-1/4 p-2"
          >
            <div className="relative w-full h-64 rounded-lg overflow-hidden hover:shadow-lg transition transform hover:scale-105 cursor-pointer bg-gray-200 flex items-center justify-center">
              <Image
                src={getImagePath(game)}
                alt={game}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-2"
                priority={false}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}