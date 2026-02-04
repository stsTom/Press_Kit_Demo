export interface GameInfo {
  id: number;
  title: string;
  elevatorPitch: string;
  description: string;
  image: string;
  gameUrl: string;
  pressKitUrl: string;
}

export const GAMES_DATA: GameInfo[] = [
  {
    id: 0,
    title: "Endless Fight",
    elevatorPitch: "Killing time - killing demons!",
    description: "Mobile arcade game available for playtest on itch.io",
    image: "public/poster_wide_cut.png",
    gameUrl: "https://firestudio-entertainment.itch.io/endlessfight",
    pressKitUrl: ""
  },
]