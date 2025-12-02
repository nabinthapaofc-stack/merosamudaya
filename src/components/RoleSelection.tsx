import { Heart, Building2, Users, Stethoscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Stethoscope className="w-24 h-24 text-medical" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Users className="w-20 h-20 text-alert" />
      </div>
      
      <div className="text-center mb-12 animate-fade-in relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Login</h1>
        <p className="text-muted-foreground text-lg">or</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-2">Sign Up</h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-lg animate-fade-in relative z-10" style={{ animationDelay: '0.1s' }}>
        <button
          onClick={() => navigate('/volunteer')}
          className="flex-1 group relative bg-card/80 backdrop-blur-sm hover:bg-card border-2 border-border hover:border-alert/30 rounded-2xl py-6 px-8 transition-all duration-300 hover:shadow-xl hover:shadow-alert/10 hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-alert/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center gap-3 relative">
            <Heart className="h-5 w-5 text-muted-foreground group-hover:text-alert transition-colors" />
            <span className="text-lg font-semibold text-foreground">Volunteer</span>
          </div>
        </button>

        <button
          onClick={() => navigate('/organizer')}
          className="flex-1 group relative bg-card/80 backdrop-blur-sm hover:bg-card border-2 border-border hover:border-medical/30 rounded-2xl py-6 px-8 transition-all duration-300 hover:shadow-xl hover:shadow-medical/10 hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-medical/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center gap-3 relative">
            <Building2 className="h-5 w-5 text-muted-foreground group-hover:text-medical transition-colors" />
            <span className="text-lg font-semibold text-foreground">Community</span>
          </div>
        </button>
      </div>

      <button
        onClick={() => navigate('/organizer')}
        className="mt-8 text-muted-foreground hover:text-foreground text-sm underline underline-offset-4 transition-colors animate-fade-in relative z-10"
        style={{ animationDelay: '0.2s' }}
      >
        Admin login
      </button>
    </div>
  );
};

export default RoleSelection;
