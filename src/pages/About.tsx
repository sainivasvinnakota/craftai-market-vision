
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, BarChart2, Lightbulb, Heart } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-terracotta">CraftAI</span></h1>
          <p className="text-xl text-gray-700">
            We're using artificial intelligence to empower rural artisans with market insights and data-driven decision making.
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="AI data visualization" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              CraftAI was founded with a simple mission: to bridge the gap between rural artisans and global market trends. 
              We believe that by providing data-driven insights, we can help traditional craftspeople 
              adapt their products to meet current demand without sacrificing their unique cultural heritage.
            </p>
            <p className="text-gray-700 mb-6">
              Many skilled artisans in rural communities have limited access to market research and trend data, 
              which puts them at a disadvantage in today's digital marketplace. CraftAI uses artificial intelligence 
              to analyze vast amounts of information from platforms like Etsy, Pinterest, and Instagram, 
              transforming this data into actionable insights.
            </p>
            <Button asChild>
              <Link to="/contact">
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How CraftAI Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform uses advanced technology to provide simple, actionable insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BarChart2 className="h-10 w-10 text-terracotta" />,
                title: "Data Collection",
                description: "We gather market data from major platforms where handmade products are sold and shared."
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-terracotta" />,
                title: "AI Analysis",
                description: "Our algorithms analyze trends, keywords, and visual elements to identify patterns."
              },
              {
                icon: <Users className="h-10 w-10 text-terracotta" />,
                title: "Insight Generation",
                description: "We transform complex data into clear, accessible insights tailored for artisans."
              },
              {
                icon: <Heart className="h-10 w-10 text-terracotta" />,
                title: "Business Growth",
                description: "Artisans use these insights to adapt their products and increase sales."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Impact Section */}
        <div className="bg-cream rounded-lg p-6 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measuring our success through the success of rural artisan communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Artisans Supported", value: "2,500+" },
              { title: "Rural Communities", value: "45" },
              { title: "Average Income Increase", value: "63%" },
              { title: "Product Categories", value: "18" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-4xl font-bold text-terracotta mb-2">{stat.value}</h3>
                <p className="text-gray-700">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A passionate group of technologists, data scientists, and craft enthusiasts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Founder & CEO",
                bio: "Former data scientist with a passion for traditional crafts and rural development.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80"
              },
              {
                name: "Maya Patel",
                role: "Head of AI Research",
                bio: "PhD in Machine Learning with 10+ years experience in computer vision and NLP.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80"
              },
              {
                name: "David Kim",
                role: "Lead Developer",
                bio: "Full-stack engineer specializing in data visualization and user experience.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80"
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-terracotta font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-navy text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're an artisan looking to grow your business, or an organization working with rural communities, 
            we'd love to collaborate with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-terracotta hover:bg-terracotta/90">
              Sign Up for Early Access
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
