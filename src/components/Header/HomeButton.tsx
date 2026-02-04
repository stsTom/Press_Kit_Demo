import { Button } from "@/components/ui/button";

export const HomeButton = () => (
  <Button variant="ghost"
  className="p-0 hover:bg-transparent"
  onClick={() => window.location.href = '/'}>
    <img src="public/FTLogo.png" alt="Logo" className="h-25 w-35" />
  </Button>
)