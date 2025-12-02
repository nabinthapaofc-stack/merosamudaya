import heroBg from '@/assets/hero-bg.jpg';

interface BackgroundPatternProps {
  variant?: 'default' | 'hero';
}

const BackgroundPattern = ({ variant = 'default' }: BackgroundPatternProps) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Hero background image with overlay */}
      {variant === 'hero' && (
        <>
          <img 
            src={heroBg} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </>
      )}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical/5 via-transparent to-alert/5" />
      
      {/* Animated floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-medical/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-alert/5 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-success/5 rounded-full blur-3xl animate-float" />
      
      {/* Medical cross pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="medical-cross" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M55 25h10v25h25v10h-25v25h-10v-25h-25v-10h25v-25z" fill="currentColor" className="text-medical" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#medical-cross)" />
      </svg>
      
      {/* Heartbeat line at bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-24 opacity-[0.06]" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          d="M0,50 L200,50 L220,50 L240,20 L260,80 L280,30 L300,70 L320,50 L400,50 L600,50 L620,50 L640,15 L660,85 L680,25 L700,75 L720,50 L900,50 L1000,50 L1020,50 L1040,20 L1060,80 L1080,30 L1100,70 L1120,50 L1200,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-alert"
        />
      </svg>
      
      {/* Corner decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-medical">
          <circle cx="150" cy="50" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="150" cy="50" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="150" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-alert">
          <circle cx="50" cy="150" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="150" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="150" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundPattern;
