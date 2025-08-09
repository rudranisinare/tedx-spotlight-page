import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/HeroSection";
import VideoEmbed from "@/components/VideoEmbed";
import SocialShare from "@/components/SocialShare";
import { Mail, User, Calendar } from "lucide-react";

const Index = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const talkData = {
    title: "How to be confident (even if you're not)",
    speaker: "Montana von Fliss",
    event: "TEDxMDIGurgoan",
    date: "December 2019",
    videoId: "eVFzbxmKNUw",
    summary: "Montana von Fliss shares powerful insights on building confidence from the inside out. Drawing from her experience in comedy and personal development, she reveals that confidence isn't about feeling fearless—it's about moving forward despite your fears. Through practical strategies and vulnerable storytelling, Montana demonstrates how anyone can develop authentic confidence by reframing their relationship with uncertainty and self-doubt.",
    speakerBio: "Montana von Fliss is a comedian, speaker, and confidence coach who has performed at comedy clubs across the country. She combines humor with actionable insights to help people overcome self-doubt and build genuine confidence. Montana's approach focuses on practical strategies that work in real-world situations, making confidence accessible to everyone."
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title={talkData.title}
        speaker={talkData.speaker}
        event={talkData.event}
        date={talkData.date}
        onWatchVideo={scrollToVideo}
      />

      {/* Video Section */}
      <section ref={videoRef} className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Watch the Full Talk</h2>
            <p className="text-muted-foreground text-lg">
              Discover the secrets to building authentic confidence
            </p>
          </div>
          
          <VideoEmbed 
            videoId={talkData.videoId} 
            title={talkData.title}
          />
        </div>
      </section>

      {/* Talk Summary & Speaker Bio */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Talk Summary */}
          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Talk Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground leading-relaxed">
                {talkData.summary}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary">Confidence</Badge>
                <Badge variant="secondary">Personal Development</Badge>
                <Badge variant="secondary">Psychology</Badge>
                <Badge variant="secondary">Self-Help</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Speaker Bio */}
          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-primary" />
                <span>About the Speaker</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">{talkData.speaker}</h3>
              <p className="text-card-foreground leading-relaxed mb-4">
                {talkData.speakerBio}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Speaking at {talkData.event}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Share Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Share This Talk</h2>
            <p className="text-muted-foreground">
              Help others discover the power of authentic confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Share Buttons */}
            <div className="text-center">
              <SocialShare 
                url={`https://www.youtube.com/watch?v=${talkData.videoId}`}
                title={`${talkData.title} by ${talkData.speaker}`}
              />
            </div>

            {/* Contact CTA */}
            <Card className="shadow-card bg-gradient-card">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nominate a Speaker</h3>
                <p className="text-muted-foreground mb-4">
                  Know someone with an idea worth spreading? 
                </p>
                <Button 
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                >
                  Submit Nomination
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">
            © 2024 TEDxMDIGurgoan. This independent TEDx event is operated under license from TED.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;