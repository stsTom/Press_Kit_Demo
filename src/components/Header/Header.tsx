import { HomeButton } from "./HomeButton";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="w-full mx-auto flex h-16 items-center gap-2 justify-start px-0">
        <HomeButton />
        <div className="h-8 w-[1px] bg-black ml-0 mr-5" />
        <NavMenu />
      </div>
    </header>
  );
};