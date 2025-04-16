
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, LineChart, Palette, Search, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{animationDelay: "0.1s"}}>
              <span className="inline-block bg-cream text-terracotta px-4 py-1 rounded-full text-sm font-medium">Empowering Rural Artisans</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight text-balance">
                Market <span className="text-terracotta">Insights</span> for Artisan Crafts
              </h1>
              <p className="text-lg text-gray-700 max-w-lg text-balance">
                CraftAI uses artificial intelligence to analyze market trends and provide valuable insights for rural craftspeople to grow their businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/trends">
                    Explore Trends <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{animationDelay: "0.3s"}}>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="AI Data Analysis for Artisan Crafts" 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How CraftAI Helps Artisans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform analyzes market data to provide actionable insights for rural craftspeople
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <TrendingUp className="h-10 w-10 text-terracotta" />,
                title: "Market Trends",
                description: "Discover what products are trending on platforms like Etsy and Pinterest",
                link: "/trends"
              },
              {
                icon: <LineChart className="h-10 w-10 text-terracotta" />,
                title: "Keyword Analysis",
                description: "Learn what keywords and hashtags are driving traffic to successful products",
                link: "/keywords"
              },
              {
                icon: <Palette className="h-10 w-10 text-terracotta" />,
                title: "Color Palettes",
                description: "Find popular color combinations that appeal to today's consumers",
                link: "/colors"
              },
              {
                icon: <Camera className="h-10 w-10 text-terracotta" />,
                title: "Skill Insight",
                description: "Upload craft images to get detailed analysis and creation guidance",
                link: "/skill-insight"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 card-hover ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{animationDelay: `${0.4 + index * 0.1}s`}}
              >
                <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link 
                  to={feature.link}
                  className="inline-flex items-center text-terracotta hover:text-terracotta/80 font-medium"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3" 
                alt="Rural artisan creating handmade products" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <span className="inline-block bg-white text-terracotta px-4 py-1 rounded-full text-sm font-medium mb-4">Success Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Rural Livelihoods</h2>
              <p className="text-lg text-gray-700 mb-6">
                See how artisans in rural communities use CraftAI to understand market demands and increase their earnings by up to 60%.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-bold text-terracotta">+63%</p>
                  <p className="text-gray-600">Average income increase</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-terracotta">2,500+</p>
                  <p className="text-gray-600">Artisans empowered</p>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link to="/about">Read Full Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Ready to grow your artisan business with market insights?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join CraftAI today and get access to powerful marketing trends and analytics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="default" className="bg-terracotta hover:bg-terracotta/90">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
