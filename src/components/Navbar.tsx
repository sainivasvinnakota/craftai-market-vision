
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera } from "lucide-react";
import ImageInsightDialog from "./ImageInsightDialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Trends", path: "/trends" },
    { name: "Keywords", path: "/keywords" },
    { name: "Colors", path: "/colors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-terracotta font-poppins font-bold text-xl">Craft</span>
                <span className="text-navy font-poppins font-bold text-xl">AI</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-terracotta bg-cream"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="outline" 
                size="icon" 
                className="ml-2" 
                onClick={openDialog}
              >
                <Camera className="h-5 w-5" />
              </Button>
              <Button variant="default" className="ml-2">Get Started</Button>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-terracotta hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? "text-terracotta bg-cream"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex justify-between pt-4 pb-3 border-t border-gray-200">
                <Button variant="outline" size="icon" onClick={() => {
                  openDialog();
                  setIsMenuOpen(false);
                }}>
                  <Camera className="h-5 w-5" />
                </Button>
                <Button variant="default">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      <ImageInsightDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </>
  );
};

export default Navbar;
