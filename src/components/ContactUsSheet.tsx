import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Send, Mail } from "lucide-react";

export const ContactUsSheet = ({ title }: { title: string }) => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:press@green-node.studio?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0ASender: ${formData.email}`;
    window.location.href = mailto;
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary bg-transparent border-none cursor-pointer">
          {title}
        </button>
      </SheetTrigger>
      
      <SheetContent side="bottom" className="...">
        <div className="mx-auto max-w-2xl px-4">
          <SheetHeader className="text-left">
            <SheetTitle className="text-2xl flex items-center gap-2">
              <Mail className="h-6 w-6" /> Get in Touch
            </SheetTitle>
            <SheetDescription>
              Want to join us or have other questions? Feel free to fill this form and we'll contact you back very soon. We check our inbox once a week.
            </SheetDescription>
          </SheetHeader>

          <form onSubmit={handleSubmit} className="space-y-6 py-8">
            <div className="space-y-2">
              <Label htmlFor="email">Your Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="media@example.com" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Message title</Label>
              <Input 
                id="subject" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your inquiry..." 
                className="min-h-[150px]"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <SheetFooter>
              <Button type="submit" className="w-full sm:w-auto gap-2">
                <Send className="h-4 w-4" /> Send a message
              </Button>
            </SheetFooter>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};