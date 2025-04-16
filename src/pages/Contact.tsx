
import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-700">
            Have questions about CraftAI? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-8">
              Fill out the form and our team will get back to you within 24 hours. We're here to answer
              any questions about how CraftAI can help artisans access valuable market insights.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Mail className="h-6 w-6 text-terracotta" />, label: "Email Us", value: "hello@craftai-market.com" },
                { icon: <Phone className="h-6 w-6 text-terracotta" />, label: "Call Us", value: "+1 (555) 123-4567" },
                { icon: <MapPin className="h-6 w-6 text-terracotta" />, label: "Visit Us", value: "123 Innovation Way, Tech City, CA 94107" },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-cream p-3 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.label}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                  <a
                    key={platform}
                    href={`#${platform}`}
                    className="bg-cream text-navy hover:bg-terracotta hover:text-white p-2 rounded-full transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MessageSquare className="mr-2 h-6 w-6 text-terracotta" />
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="mt-2">
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-cream rounded-lg p-6 md:p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left mt-8">
            {[
              {
                question: "How does CraftAI gather market data?",
                answer: "We use web scraping technology to analyze thousands of top-performing products across platforms like Etsy, Pinterest, and Instagram."
              },
              {
                question: "Do I need technical skills to use CraftAI?",
                answer: "No technical skills required! Our dashboard is designed to be user-friendly and provides clear, actionable insights."
              },
              {
                question: "Can CraftAI help with pricing my products?",
                answer: "Yes! Our platform analyzes price points across different product categories and helps you position your offerings competitively."
              },
              {
                question: "How often is the data updated?",
                answer: "Our platform updates trend data weekly, ensuring you always have access to the most current market insights."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
