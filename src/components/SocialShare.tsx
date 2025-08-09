import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Linkedin, Link2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare = ({ url, title }: SocialShareProps) => {
  const { toast } = useToast();

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        <Share2 className="w-5 h-5 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Share this talk</span>
      </div>
      
      <div className="flex space-x-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.twitter, '_blank')}
          className="hover:bg-blue-50 hover:border-blue-200"
        >
          <Twitter className="w-4 h-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.facebook, '_blank')}
          className="hover:bg-blue-50 hover:border-blue-200"
        >
          <Facebook className="w-4 h-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.linkedin, '_blank')}
          className="hover:bg-blue-50 hover:border-blue-200"
        >
          <Linkedin className="w-4 h-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="hover:bg-gray-50 hover:border-gray-200"
        >
          <Link2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;