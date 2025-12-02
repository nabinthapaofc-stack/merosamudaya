import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  showNav?: boolean;
}

const Header = ({ showNav = true }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">मेरो समुदाय</span>
          </Link>

          {showNav && (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  About Us
                </Link>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  Contact us
                </Link>
                <Button 
                  onClick={() => navigate('/')}
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
                >
                  Sign Up
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        {showNav && mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact us
              </Link>
              <Button 
                onClick={() => {
                  navigate('/');
                  setMobileMenuOpen(false);
                }}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full w-fit px-6"
              >
                Sign Up
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
