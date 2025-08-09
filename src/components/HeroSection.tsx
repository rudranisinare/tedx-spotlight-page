import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  title: string;
  speaker: string;
  event: string;
  date: string;
  onWatchVideo: () => void;
}

const HeroSection = ({ title, speaker, event, date, onWatchVideo }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 px-6">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
          {event} • {date}
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          by <span className="font-semibold">{speaker}</span>
        </p>
        
        <Button 
          onClick={onWatchVideo}
          size="lg"
          variant="secondary"
          className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg"
        >
          Watch the Talk
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;