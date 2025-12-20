import { GamesCarousel } from '@/components/GamesCarousel';
import { VideoPlayer } from '@/components/VideoPlayer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full">

      {/* Video Section */}
      <section className="relative w-full h-200 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <VideoPlayer 
            src="/videos/test.mp4"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image 
              src="/images/poster.png" 
              alt="MSU Esports Logo" 
              width={800} 
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="w-full py-20">
        <div className="w-full px-4">
          <GamesCarousel />
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 bg-[#5D1725]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white b-6">
            MSU ESPORTS
          </h2>
          <p className="text-xl md:text-2xl text-white font-semibold mb-8">
            We dominate the SEC just like we dominate your mom
          </p>
          <p className="text-lg text-white mb-6 max-w-3xl mx-auto leading-relaxed">
            Mississippi State University is the best university in the state of Mississippi. Our esports program is dedicated to fostering a competitive and inclusive environment for gamers of all skill levels. Join us as we strive for excellence both in and out of the gaming arena.
          </p>
          <p className="text-lg text-white mb-8 font-semibold">
            We are just getting started
          </p>
          <p className="text-2xl text-white font-bold">
            #JustBetter
          </p>
        </div>
      </section>
    </div>
  );
}
