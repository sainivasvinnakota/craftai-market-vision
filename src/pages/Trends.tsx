
import { useState, useEffect } from "react";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Share2, ExternalLink, Eye } from "lucide-react";

const Trends = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Mocked API data
  const trendingProducts = {
    etsy: [
      {
        id: 1,
        name: "Handwoven Macrame Wall Hanging",
        description: "Bohemian style wall decor made from natural cotton",
        image: "https://images.unsplash.com/photo-1615728719382-721d50244de5?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 1256,
        views: 8945,
        price: "$45.99",
        shop: "NaturalHomeCrafts",
        tags: ["macrame", "wallhanging", "bohodecor"]
      },
      {
        id: 2,
        name: "Ceramic Pottery Coffee Mug",
        description: "Handmade stoneware mug with minimalist design",
        image: "https://images.unsplash.com/photo-1578146170514-485023eacba9?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 823,
        views: 5621,
        price: "$28.00",
        shop: "ClayCreationsCo",
        tags: ["ceramics", "pottery", "handmadepottery"]
      },
      {
        id: 3,
        name: "Hand-carved Wooden Spoons",
        description: "Set of 3 cooking spoons carved from sustainable walnut",
        image: "https://images.unsplash.com/photo-1635942167453-589963cd2de7?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 745,
        views: 4270,
        price: "$36.50",
        shop: "WoodCraftWonders",
        tags: ["woodenspoons", "kitchenware", "sustainable"]
      },
      {
        id: 4,
        name: "Embroidered Linen Cushion Cover",
        description: "Floral embroidery on natural linen fabric",
        image: "https://images.unsplash.com/photo-1584404268860-f43c526e1e2f?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 678,
        views: 3920,
        price: "$32.99",
        shop: "StitchAndThread",
        tags: ["embroidery", "homedecor", "handstitched"]
      },
    ],
    pinterest: [
      {
        id: 5,
        name: "Woven Rattan Light Fixture",
        description: "Handwoven pendant lamp with natural materials",
        image: "https://images.unsplash.com/photo-1602015103066-bb4ca2c434c1?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 2350,
        views: 15800,
        price: "$89.00",
        tags: ["lighting", "rattan", "sustainablehome"]
      },
      {
        id: 6,
        name: "Block Printed Table Runner",
        description: "Hand block printed linen with natural dyes",
        image: "https://images.unsplash.com/photo-1599619350825-6d4e9e9fab9f?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 1875,
        views: 12400,
        price: "$42.00",
        tags: ["blockprint", "tableware", "textiledesign"]
      },
      {
        id: 7,
        name: "Botanical Pressed Flower Art",
        description: "Real pressed flowers in minimalist frame",
        image: "https://images.unsplash.com/photo-1582456864705-2968902cca4a?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 1624,
        views: 9750,
        price: "$65.00",
        tags: ["pressedflowers", "wallart", "botanicalart"]
      },
      {
        id: 8,
        name: "Hand-dipped Beeswax Candles",
        description: "Set of 4 naturally scented tapered candles",
        image: "https://images.unsplash.com/photo-1603006905294-d8386a35a98e?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 1256,
        views: 7890,
        price: "$24.50",
        tags: ["beeswax", "candles", "ecofriendly"]
      },
    ],
    instagram: [
      {
        id: 9,
        name: "Handtufted Wall Tapestry",
        description: "Abstract design with natural wool yarns",
        image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 5280,
        views: 24700,
        price: "$195.00",
        tags: ["walltapestry", "textileart", "handtufted"]
      },
      {
        id: 10,
        name: "Willow Basket Set",
        description: "Handwoven storage baskets in three sizes",
        image: "https://images.unsplash.com/photo-1591546928238-62a36b06c148?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 4720,
        views: 19800,
        price: "$78.00",
        tags: ["basketweaving", "storagesolutions", "willow"]
      },
      {
        id: 11,
        name: "Hand-painted Ceramic Vase",
        description: "Unique stoneware vase with abstract pattern",
        image: "https://images.unsplash.com/photo-1578500351865-fa99caae5488?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 3950,
        views: 15400,
        price: "$59.00",
        tags: ["ceramicart", "vase", "handpainted"]
      },
      {
        id: 12,
        name: "Reclaimed Wood Wall Art",
        description: "Geometric pattern using salvaged timber",
        image: "https://images.unsplash.com/photo-1572297809561-0dfa264be7c8?auto=format&fit=crop&q=80&w=300&h=300",
        likes: 3420,
        views: 12900,
        price: "$125.00",
        tags: ["reclaimedwood", "wallart", "woodworking"]
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
  
  const ProductCard = ({ product }: { product: any }) => {
    return (
      <Card className="card-hover overflow-hidden">
        <div className="relative h-60">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white/80 rounded-full p-1.5">
            <Heart size={16} className="text-terracotta" />
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center justify-between">
            <span className="font-medium text-lg">{product.price}</span>
            {product.shop && (
              <span className="text-sm text-gray-500">{product.shop}</span>
            )}
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {product.tags.map((tag: string) => (
              <span 
                key={tag} 
                className="bg-cream text-gray-700 px-2 py-0.5 text-xs rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t pt-3 flex justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Heart size={14} className="mr-1" />{product.likes.toLocaleString()}
            <Eye size={14} className="ml-3 mr-1" />{product.views.toLocaleString()}
          </div>
          <div className="flex space-x-2">
            <Share2 size={16} className="text-gray-500 cursor-pointer hover:text-terracotta" />
            <ExternalLink size={16} className="text-gray-500 cursor-pointer hover:text-terracotta" />
          </div>
        </CardFooter>
      </Card>
    );
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Market Trends</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest trending handcrafted products across popular marketplaces
          </p>
        </div>
        
        <Tabs defaultValue="etsy" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="etsy">Etsy</TabsTrigger>
              <TabsTrigger value="pinterest">Pinterest</TabsTrigger>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(trendingProducts).map(([platform, products]) => (
            <TabsContent key={platform} value={platform} className="focus:outline-none">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="h-60 bg-gray-200 animate-pulse" />
                      <CardHeader className="pb-2">
                        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
                        <div className="h-4 bg-gray-100 rounded animate-pulse" />
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="h-5 bg-gray-200 w-20 rounded animate-pulse mb-4" />
                        <div className="flex gap-1">
                          <div className="h-4 w-16 bg-gray-100 rounded-full animate-pulse" />
                          <div className="h-4 w-16 bg-gray-100 rounded-full animate-pulse" />
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-3">
                        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-cream rounded-lg p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Understanding Market Trends</h2>
              <p className="text-gray-700 mb-6">
                Our AI analyzes thousands of products across platforms to identify emerging trends, 
                popular materials, and pricing opportunities. Use these insights to align your 
                artisan products with current market demands.
              </p>
              <ul className="space-y-3">
                {[
                  "Products shown are updated weekly based on engagement metrics",
                  "Price points reflect successful offerings in each category",
                  "Hashtags represent trending search terms for each platform"
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
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Trending Categories</h3>
              <div className="space-y-3">
                {[
                  { name: "Wall Decor", percentage: 75 },
                  { name: "Ceramics", percentage: 65 },
                  { name: "Wooden Homewares", percentage: 58 },
                  { name: "Textile Art", percentage: 52 },
                  { name: "Sustainable Goods", percentage: 48 }
                ].map((category) => (
                  <div key={category.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{category.name}</span>
                      <span className="text-terracotta">{category.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-terracotta rounded-full"
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Trends;
