
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export interface AnalysisResultData {
  productType: string;
  technique: string;
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  skillPercent: number;
  steps: string[];
  materials: string[];
  platforms: { name: string; url: string }[];
  tutorialLink?: string;
}

interface AnalysisResultProps {
  data: AnalysisResultData;
}

const AnalysisResult = ({ data }: AnalysisResultProps) => {
  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-amber-500";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Info Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Product Information
            </CardTitle>
            <CardDescription>Analysis of the craft product</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Product Type</p>
              <p className="text-lg font-semibold">{data.productType}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Traditional Technique</p>
              <p className="text-lg font-semibold">{data.technique}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Skill Level</p>
              <div className="flex items-center gap-3">
                <Badge className={getSkillLevelColor(data.skillLevel)}>
                  {data.skillLevel}
                </Badge>
                <Progress value={data.skillPercent} className="h-2" />
                <span className="text-sm">{data.skillPercent}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Materials Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Materials Needed
            </CardTitle>
            <CardDescription>Items required for this craft</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {data.materials.map((material, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{material}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Step by Step Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Step-by-Step Guidance</CardTitle>
          <CardDescription>How to create this craft</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4 list-decimal list-inside">
            {data.steps.map((step, index) => (
              <li key={index} className="pl-2">{step}</li>
            ))}
          </ol>
          {data.tutorialLink && (
            <Button variant="outline" className="mt-4" asChild>
              <a href={data.tutorialLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Watch Video Tutorial
              </a>
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Selling Platforms */}
      <Card>
        <CardHeader>
          <CardTitle>Where to Sell</CardTitle>
          <CardDescription>Platforms that feature similar items</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.platforms.map((platform, index) => (
              <Button key={index} variant="outline" asChild>
                <a href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {platform.name}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisResult;
