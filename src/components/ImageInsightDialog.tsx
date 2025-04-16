
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UploadCloud, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ImageInsightDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AnalysisResult {
  productType: string;
  style: string;
  skillLevel: string;
  materials: string[];
  platforms: string[];
  hasTutorial: boolean;
}

const ImageInsightDialog = ({ isOpen, onClose }: ImageInsightDialogProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      
      // Start analyzing
      analyzeImage(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setImage(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      
      // Start analyzing
      analyzeImage(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const analyzeImage = (file: File) => {
    setIsAnalyzing(true);
    
    // Mock analysis - would be replaced with actual API call
    setTimeout(() => {
      // Mock result
      setAnalysisResult({
        productType: "Jewelry",
        style: "Beadwork",
        skillLevel: "Beginner",
        materials: ["Beads", "Wire", "Clasp"],
        platforms: ["Etsy", "Amazon Handmade"],
        hasTutorial: true
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const resetAnalysis = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setImage(null);
    setPreviewUrl(null);
    setAnalysisResult(null);
  };

  const handleDialogClose = () => {
    resetAnalysis();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">AI Skill Insight</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {!previewUrl ? (
            <div
              className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center h-48 transition-all hover:border-primary/50 hover:bg-primary/5"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <UploadCloud className="h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground text-center mb-4">
                Drop your craft image here or click to upload
              </p>
              <Button size="sm" variant="secondary" asChild>
                <label className="cursor-pointer">
                  Upload Image
                  <input
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
                <img
                  src={previewUrl}
                  alt="Uploaded craft"
                  className="object-cover w-full h-full"
                />
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full" />
                  </div>
                )}
              </div>
              
              {analysisResult && (
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Product Type</p>
                          <p>{analysisResult.productType}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Style</p>
                          <p>{analysisResult.style}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Skill Level</p>
                          <p>{analysisResult.skillLevel}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Tutorial</p>
                          <Button variant="link" className="h-auto p-0" asChild>
                            <a href="#" className="inline-flex items-center">
                              View Tutorial
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Materials</p>
                        <div className="flex flex-wrap gap-2">
                          {analysisResult.materials.map((material) => (
                            <span 
                              key={material}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Selling Platforms</p>
                        <div className="flex flex-wrap gap-2">
                          {analysisResult.platforms.map((platform) => (
                            <span 
                              key={platform}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/20 text-secondary-foreground"
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              <div className="flex justify-end">
                <Button
                  variant="outline" 
                  size="sm"
                  onClick={resetAnalysis}
                >
                  Try Another Image
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageInsightDialog;
