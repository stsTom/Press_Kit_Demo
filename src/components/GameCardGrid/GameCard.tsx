import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";
import type { GameInfo } from "@/Data/Games";

export const GameCard = ({ project }: { project: GameInfo }) => {
  return (
    <Card className="overflow-hidden group flex flex-col h-full transition-all hover:shadow-lg pt-0">
      <div className="relative aspect-relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="text-xs mb-2 line-clamp-2">
          {project.elevatorPitch}
        </CardDescription>
        <CardDescription>  
          {project.description}
        </CardDescription>
      </CardHeader>

      <div className="flex-grow" />

      <CardFooter className="grid grid-cols-2 gap-2 pt-4">
        <Button variant="default" asChild className="w-full">
          <a href={project.gameUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Link
          </a>
        </Button>
        
        <Button variant="outline" asChild className="w-full">
          <a href={project.pressKitUrl} download>
            <Download className="mr-2 h-4 w-4" /> Press Kit
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};