
import { useState, useEffect } from "react";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Paintbrush, Download, Copy, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Colors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  // Mocked color palette data
  const colorData = {
    trending: [
      {
        id: 1,
        name: "Earthy Terracotta",
        description: "Popular in rustic and bohemian home decor",
        colors: ["#C8553D", "#F4A259", "#F4E285", "#7D8471", "#5D5D5D"],
        likes: 1245
      },
      {
        id: 2,
        name: "Sage & Natural",
        description: "Trending in sustainable and minimalist products",
        colors: ["#9CBB85", "#E8E5D7", "#D1C9B7", "#6B705C", "#3D5043"],
        likes: 985
      },
      {
        id: 3,
        name: "Coastal Calm",
        description: "Popular for summer and beachside home decor",
        colors: ["#A4C3B2", "#EAF4F4", "#CCE3DE", "#6B9080", "#1D3557"],
        likes: 874
      },
      {
        id: 4,
        name: "Desert Sunset",
        description: "Warm tones inspired by southwestern landscapes",
        colors: ["#CB997E", "#DDBEA9", "#FFE8D6", "#B7B7A4", "#6B705C"],
        likes: 762
      },
      {
        id: 5,
        name: "Modern Vintage",
        description: "Muted tones with a nostalgic feel",
        colors: ["#606C38", "#DDA15E", "#BC6C25", "#FEFAE0", "#283618"],
        likes: 684
      },
      {
        id: 6,
        name: "Clay & Indigo",
        description: "Earthy clay tones paired with deep indigo blues",
        colors: ["#E07A5F", "#3D405B", "#81B29A", "#F2CC8F", "#403D39"],
        likes: 621
      },
    ],
    seasonal: [
      {
        id: 7,
        name: "Spring Bloom",
        description: "Fresh floral tones for spring collections",
        colors: ["#FF8BA7", "#FFC6C7", "#FAE3D9", "#BBDED6", "#61C0BF"],
        likes: 542
      },
      {
        id: 8,
        name: "Summer Harvest",
        description: "Bright, vibrant colors inspired by summer produce",
        colors: ["#FF7B00", "#FF8800", "#FFB700", "#73BA9B", "#003049"],
        likes: 498
      },
      {
        id: 9,
        name: "Autumn Spice",
        description: "Rich, warm colors perfect for fall collections",
        colors: ["#582F0E", "#7F4F24", "#936639", "#A68A64", "#B6AD90"],
        likes: 475
      },
      {
        id: 10,
        name: "Winter Frost",
        description: "Cool, muted tones with icy blue accents",
        colors: ["#CAF0F8", "#90E0EF", "#48CAE4", "#00B4D8", "#03045E"],
        likes: 432
      },
    ],
    materials: [
      {
        id: 11,
        name: "Natural Wood",
        description: "Color palette inspired by different wood types",
        colors: ["#5E503F", "#A9927D", "#C49A6C", "#F2F3F4", "#22333B"],
        likes: 387
      },
      {
        id: 12,
        name: "Ceramic & Clay",
        description: "Earthy tones popular in ceramic products",
        colors: ["#E6BEAE", "#C9ADA7", "#9A8C98", "#4A4E69", "#22223B"],
        likes: 365
      },
      {
        id: 13,
        name: "Woven Textiles",
        description: "Colors inspired by natural fibers and yarns",
        colors: ["#F6BD60", "#F7EDE2", "#F5CAC3", "#84A59D", "#F28482"],
        likes: 329
      },
      {
        id: 14,
        name: "Metals & Glass",
        description: "Metallic and transparent inspirations",
        colors: ["#D8E2DC", "#ECE4DB", "#FFE5D9", "#D4C7B0", "#6B705C"],
        likes: 312
      },
    ]
  };
  
  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = (colorHex: string) => {
    navigator.clipboard.writeText(colorHex);
    toast({
      title: "Color copied!",
      description: `${colorHex} has been copied to clipboard.`,
      duration: 2000,
    });
  };
  
  const ColorPalette = ({ palette }: { palette: any }) => {
    return (
      <Card className="overflow-hidden card-hover h-full flex flex-col">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between">
            {palette.name}
            <span className="flex items-center text-sm text-gray-500">
              <Eye size={16} className="mr-1" /> {palette.likes}
            </span>
          </CardTitle>
          <CardDescription>{palette.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pb-2">
          <div className="grid grid-cols-5 gap-1 h-24 mb-3 rounded-md overflow-hidden">
            {palette.colors.map((color: string, index: number) => (
              <div 
                key={index}
                className="h-full relative group cursor-pointer" 
                style={{ backgroundColor: color }}
                onClick={() => copyToClipboard(color)}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <Copy size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-wrap gap-1">
              {palette.colors.map((color: string, index: number) => (
                <div 
                  key={index}
                  className="text-xs px-2 py-0.5 rounded" 
                  style={{ background: color, color: isLightColor(color) ? "#000" : "#fff" }}
                >
                  {color}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <div className="p-3 pt-0 mt-auto border-t">
          <div className="flex justify-between">
            <Button variant="outline" size="sm" className="text-xs">
              <Copy size={14} className="mr-1" /> Copy All
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <Download size={14} className="mr-1" /> Download
            </Button>
          </div>
        </div>
      </Card>
    );
  };
  
  // Function to determine if a color is light or dark
  const isLightColor = (color: string) => {
    // Convert hex to RGB
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5;
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Color Palettes</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover trending color combinations for your artisan products
          </p>
        </div>
        
        <Tabs defaultValue="trending" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="trending">
                <Paintbrush className="mr-2 h-4 w-4" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
              <TabsTrigger value="materials">Material-Based</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(colorData).map(([category, palettes]) => (
            <TabsContent key={category} value={category} className="focus:outline-none">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="h-5 bg-gray-200 rounded animate-pulse mb-2 w-2/3" />
                        <div className="h-4 bg-gray-100 rounded animate-pulse w-full" />
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-5 gap-1 h-24 mb-3 rounded-md overflow-hidden">
                          {[1, 2, 3, 4, 5].map((j) => (
                            <div key={j} className="h-full bg-gray-200 animate-pulse" />
                          ))}
                        </div>
                        <div className="flex gap-1 mt-2">
                          {[1, 2, 3, 4, 5].map((j) => (
                            <div key={j} className="h-4 w-14 bg-gray-100 rounded animate-pulse" />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {palettes.map((palette: any) => (
                    <ColorPalette key={palette.id} palette={palette} />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-cream rounded-lg p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Color Psychology in Crafts</h2>
              <p className="text-gray-700 mb-6">
                Colors evoke emotions and influence purchasing decisions. Our AI analyzes successful
                artisan products to identify color combinations that appeal to today's consumers.
              </p>
              <ul className="space-y-3">
                {[
                  "Earthy tones convey authenticity, sustainability, and organic quality",
                  "Muted colors suggest handmade, artisanal production methods",
                  "Complementary color schemes create visual interest and balance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-terracotta rounded-full p-0.5 mt-1.5 mr-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Card className="border-2 border-sage/50">
                <CardHeader>
                  <CardTitle>Color Trend Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span>Earthy & Natural Tones</span>
                        <span className="text-terracotta">Rising 28%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-terracotta rounded-full" style={{ width: "82%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span>Blues & Greens</span>
                        <span className="text-terracotta">Rising 15%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-sage rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span>Warm Neutrals</span>
                        <span className="text-terracotta">Rising 22%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#DDA15E] rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span>Bright & Vibrant</span>
                        <span className="text-red-500">Falling 8%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF7B00] rounded-full" style={{ width: "35%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Colors;
