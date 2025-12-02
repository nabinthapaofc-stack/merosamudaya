import { AlertCircle } from 'lucide-react';

interface SOSButtonProps {
  onClick: () => void;
}

const SOSButton = ({ onClick }: SOSButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 bg-alert text-alert-foreground rounded-full p-4 shadow-2xl sos-pulse transition-transform duration-200 hover:scale-110 active:scale-95"
      aria-label="Emergency SOS"
    >
      <div className="flex items-center gap-2">
        <AlertCircle className="h-6 w-6" />
        <span className="font-bold text-lg pr-1">SOS</span>
      </div>
    </button>
  );
};

export default SOSButton;
