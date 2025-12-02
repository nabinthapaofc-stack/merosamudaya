import { useState, useEffect, useCallback } from 'react';
import { X, MapPin, Clock, Ambulance, Phone, CheckCircle } from 'lucide-react';
import { mockHospitals } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface SOSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOSModal = ({ isOpen, onClose }: SOSModalProps) => {
  const [timeLeft, setTimeLeft] = useState(180);
  const [isDispatched, setIsDispatched] = useState(false);
  const [cancelProgress, setCancelProgress] = useState(0);
  const [isCancelling, setIsCancelling] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(180);
      setIsDispatched(false);
      setCancelProgress(0);
      setIsCancelling(false);
      return;
    }

    if (isDispatched) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsDispatched(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isDispatched]);

  const handleCancelHold = useCallback(() => {
    if (isCancelling) return;
    setIsCancelling(true);
    
    const interval = setInterval(() => {
      setCancelProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onClose();
          return 0;
        }
        return prev + 2;
      });
    }, 30);
  }, [isCancelling, onClose]);

  const handleCancelRelease = useCallback(() => {
    setIsCancelling(false);
    setCancelProgress(0);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col slide-up">
      {/* Header */}
      <div className="bg-alert text-alert-foreground p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Ambulance className="h-6 w-6" />
          <span className="font-bold text-lg">Emergency Mode</span>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-alert-foreground/10 rounded-full transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-auto p-4 md:p-6">
        {!isDispatched ? (
          <>
            {/* Countdown */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-40 h-40 rounded-full border-8 border-alert bg-alert/5 mb-4">
                <div>
                  <p className="text-5xl font-bold text-alert">{formatTime(timeLeft)}</p>
                  <p className="text-sm text-muted-foreground mt-1">until dispatch</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Ambulance will be dispatched automatically when timer reaches zero
              </p>
            </div>

            {/* Location */}
            <div className="card-medical p-4 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-alert" />
                <span className="font-semibold">Your Location</span>
              </div>
              <p className="text-muted-foreground text-sm pl-8">
                Kathmandu, Nepal • 27.7172° N, 85.3240° E
              </p>
            </div>

            {/* Nearest Hospitals */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Ambulance className="h-5 w-5 text-medical" />
                Nearest Hospitals
              </h3>
              <div className="space-y-3">
                {mockHospitals.map((hospital, index) => (
                  <div
                    key={hospital.id}
                    className={`card-medical p-4 ${index === 0 ? 'border-medical border-2' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{hospital.name}</p>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {hospital.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {hospital.responseTime}
                          </span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        hospital.available 
                          ? 'bg-success/10 text-success' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {hospital.available ? 'Available' : 'Busy'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cancel Button */}
            <div className="sticky bottom-0 bg-background pt-4 border-t border-border">
              <button
                onMouseDown={handleCancelHold}
                onMouseUp={handleCancelRelease}
                onMouseLeave={handleCancelRelease}
                onTouchStart={handleCancelHold}
                onTouchEnd={handleCancelRelease}
                className="w-full relative overflow-hidden bg-secondary text-foreground font-bold py-4 px-6 rounded-xl transition-all duration-200"
              >
                <div 
                  className="absolute inset-0 bg-success transition-all duration-100"
                  style={{ width: `${cancelProgress}%` }}
                />
                <span className="relative z-10">
                  {cancelProgress > 0 ? 'Hold to Cancel...' : 'Hold to Cancel Emergency'}
                </span>
              </button>
              <p className="text-center text-xs text-muted-foreground mt-2">
                Press and hold for 1.5 seconds to cancel
              </p>
            </div>
          </>
        ) : (
          /* Dispatched State */
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center mb-6">
              <CheckCircle className="h-12 w-12 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Ambulance Dispatched</h2>
            <p className="text-muted-foreground mb-6">
              Help is on the way. Stay calm and await arrival.
            </p>
            
            <div className="card-medical p-4 w-full max-w-sm mb-6">
              <p className="text-sm text-muted-foreground mb-1">Estimated arrival</p>
              <p className="text-2xl font-bold text-medical">8 minutes</p>
              <p className="text-sm text-muted-foreground mt-2">
                {mockHospitals[0].name}
              </p>
            </div>

            <Button
              onClick={() => window.location.href = 'tel:102'}
              className="btn-medical flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call Emergency (102)
            </Button>

            <button
              onClick={onClose}
              className="mt-4 text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SOSModal;
