import { Heart, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Login</h1>
        <p className="text-muted-foreground text-lg">or</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-2">Sign Up</h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <button
          onClick={() => navigate('/volunteer')}
          className="flex-1 group relative bg-secondary hover:bg-secondary/80 border-2 border-border hover:border-foreground/20 rounded-2xl py-6 px-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="flex items-center justify-center gap-3">
            <Heart className="h-5 w-5 text-muted-foreground group-hover:text-alert transition-colors" />
            <span className="text-lg font-semibold text-foreground">Volunteer</span>
          </div>
        </button>

        <button
          onClick={() => navigate('/organizer')}
          className="flex-1 group relative bg-secondary hover:bg-secondary/80 border-2 border-border hover:border-foreground/20 rounded-2xl py-6 px-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="flex items-center justify-center gap-3">
            <Building2 className="h-5 w-5 text-muted-foreground group-hover:text-medical transition-colors" />
            <span className="text-lg font-semibold text-foreground">Community</span>
          </div>
        </button>
      </div>

      <button
        onClick={() => navigate('/organizer')}
        className="mt-8 text-muted-foreground hover:text-foreground text-sm underline underline-offset-4 transition-colors animate-fade-in"
        style={{ animationDelay: '0.2s' }}
      >
        Admin login
      </button>
    </div>
  );
};

export default RoleSelection;
