
import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import ImageUploader from "@/components/ImageUploader";
import AnalysisResult, { AnalysisResultData } from "@/components/AnalysisResult";
import { analyzeImage } from "@/services/mockAIService";
import { Button } from "@/components/ui/button";
import { Camera, ArrowLeft } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Link } from "react-router-dom";

const SkillInsight = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResultData | null>(null);

  const handleImageUpload = async (file: File) => {
    try {
      setIsLoading(true);
      setAnalysisResult(null);
      
      // Call the mock AI service
      const result = await analyzeImage(file);
      
      // Update state with analysis results
      setAnalysisResult(result);
      toast.success("Analysis complete!", {
        description: "We've analyzed your craft product successfully.",
      });
    } catch (error) {
      console.error("Error analyzing image:", error);
      toast.error("Analysis failed", {
        description: "There was a problem analyzing your image. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetAnalysis = () => {
    setAnalysisResult(null);
  };

  return (
    <MainLayout>
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary/10 rounded-full p-2">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold">Skill Insight from Image</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Upload a photo of any handmade craft item and our AI will analyze it, 
              providing insights on technique, skill level, and creation guidance.
            </p>
          </div>

          {!analysisResult ? (
            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <ImageUploader onImageUpload={handleImageUpload} isLoading={isLoading} />
            </div>
          ) : (
            <div className="space-y-6">
              <Button variant="outline" onClick={resetAnalysis}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Analyze Another Image
              </Button>
              
              <AnalysisResult data={analysisResult} />
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default SkillInsight;
