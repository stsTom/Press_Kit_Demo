import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { MediaAsset } from "@/Data/Media";
import { Play } from "lucide-react";

interface MediaGalleryItemProps {
  asset: MediaAsset;
}

export const MediaGalleryItem = ({ asset }: MediaGalleryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Для YouTube видео
  const youtubeEmbedUrl = asset.type === 'video' 
    ? `https://www.youtube.com/embed/${asset.src}?autoplay=1` 
    : '';

  return (
    <>
      <div 
        className="relative group aspect-video cursor-pointer overflow-hidden rounded-lg shadow-sm transition-transform duration-300 hover:scale-[1.02]"
        onClick={() => setIsOpen(true)}
      >
        {asset.type === 'image' && (
          <img 
            src={asset.src} 
            alt={asset.alt} 
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80" 
          />
        )}
        {asset.type === 'video' && (
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <img 
              src={asset.thumbnail || `https://img.youtube.com/vi/${asset.src}/hqdefault.jpg`} 
              alt={asset.alt || "YouTube Video Thumbnail"} 
              className="w-full h-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-80"
            />
            <Play className="absolute h-12 w-12 text-white/90 group-hover:text-primary transition-colors duration-200" fill="currentColor" />
          </div>
        )}
      </div>
 
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 border-none bg-transparent shadow-none">
          {asset.type === 'image' && (
            <img 
              src={asset.src} 
              alt={asset.alt} 
              className="max-h-[90vh] object-contain mx-auto" 
            />
          )}
          {asset.type === 'video' && (
            <div className="relative pt-[56.25%] bg-black"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src={youtubeEmbedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={asset.alt || "YouTube Video"}
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};