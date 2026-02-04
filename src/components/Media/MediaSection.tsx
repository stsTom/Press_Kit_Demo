import { MediaGalleryItem } from "@/components/Media/MediaGalleryItem";
import { MEDIA_ASSETS } from "@/Data/Media";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface MediaSectionProps {
  pressKitDownloadUrl: string;
}

export const MediaSection = ({ pressKitDownloadUrl }: MediaSectionProps) => {
  return (
    <section id="media" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Gallery
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Screenshots, arts and video materials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {MEDIA_ASSETS.map((asset) => (
            <MediaGalleryItem key={asset.id} asset={asset} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" asChild>
            <a href={pressKitDownloadUrl} download>
              <Download className="mr-2 h-5 w-5" /> Download Press Kit
            </a>
          </Button>
          <p className="mt-2 text-sm text-muted-foreground">
            Contains all the materials in high quality, roadmap and information file.
          </p>
        </div>
      </div>
    </section>
  );
};