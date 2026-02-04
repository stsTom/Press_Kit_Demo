import { GameCard } from "./GameCard";
import { GAMES_DATA } from "@/Data/Games";

export const GamesSection = () => {
  return (
    <section id="games" className="py-12 container">
      <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
      <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-6">
        {GAMES_DATA.map((p) => (
          <GameCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};