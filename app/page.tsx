import { Button } from '@/components/ui/button';
import { GamesCarousel } from '@/components/GamesCarousel';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-linear-to-br from-[#6B2D2D] via-[#8B1538] to-[#4A1A1A] text-white">
        <div className="relative max-w-6xl mx-auto px-4 py-32 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            MSU Esports
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow">
            Compete. Dominate. Represent.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="btn-primary animate-in fade-in duration-700">
              Join Us
            </Button>
            <Button className="btn-secondary animate-in fade-in duration-700 delay-100">
              Learn More
            </Button>
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
      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-[#6B2D2D] mb-8 text-center">
          About MSU Esports
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          MSU Esports is a student-run organization dedicated to competitive gaming and fostering a community for esports enthusiasts.
        </p>
      </section>
    </div>
  );
}
