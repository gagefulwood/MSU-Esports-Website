import { GamesCarousel } from '@/components/GamesCarousel';
import { VideoPlayer } from '@/components/VideoPlayer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full">

      {/* Hero Video Section */}
      <section className="relative w-full aspect-video xl:h-screen overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 w-full h-full">
          <VideoPlayer 
            src="/videos/test.mp4"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image 
              src="/images/poster.png" 
              alt="MSU Esports Logo" 
              width={600} 
              height={600}
              className="w-56 sm:w-72 md:w-96 lg:w-150 xl:w-200 h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="w-full py-20 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Teams</h2>
            <div className="w-20 h-1.5 bg-[#5D1725] rounded-full mx-auto"></div>
          </div>
          <GamesCarousel />
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 bg-linear-to-r from-[#5D1725] to-[#3a0f17]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              MSU ESPORTS
            </h2>
            <p className="text-xl sm:text-2xl text-[#DAC79D] font-semibold mb-8">
              We dominate the SEC just like we dominate your mom
            </p>
            <p className="text-lg text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Mississippi State University is the best university in the state of Mississippi. Our esports program is dedicated to fostering a competitive and inclusive environment for gamers of all skill levels. Join us as we strive for excellence both in and out of the gaming arena.
            </p>
            <p className="text-3xl sm:text-4xl text-white font-bold tracking-wider">
              #JustBetter
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
