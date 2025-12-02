import { MapPin, Clock, Users, AlertTriangle } from 'lucide-react';
import { Vacancy, UrgencyLevel } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface VacancyCardProps {
  vacancy: Vacancy;
  onApply?: (id: string) => void;
}

const urgencyConfig: Record<UrgencyLevel, { label: string; className: string }> = {
  low: { label: 'Low', className: 'urgency-low' },
  moderate: { label: 'Moderate', className: 'urgency-moderate' },
  high: { label: 'High', className: 'urgency-high' },
  critical: { label: 'Critical', className: 'urgency-critical' },
};

const VacancyCard = ({ vacancy, onApply }: VacancyCardProps) => {
  const urgency = urgencyConfig[vacancy.urgency];

  return (
    <div className="card-medical p-6 fade-in">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-foreground">{vacancy.title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${urgency.className}`}>
              {urgency.label}
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-medium">{vacancy.organizerName}</p>
        </div>
        {vacancy.urgency === 'critical' && (
          <AlertTriangle className="h-6 w-6 text-alert animate-pulse flex-shrink-0" />
        )}
      </div>

      <p className="text-muted-foreground mb-4 line-clamp-2">{vacancy.description}</p>

      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4" />
          <span>{vacancy.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span>{vacancy.postedAt}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="h-4 w-4" />
          <span>{vacancy.volunteersApplied}/{vacancy.volunteersNeeded} volunteers</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="w-full bg-secondary rounded-full h-2 mr-4">
          <div 
            className="bg-medical h-2 rounded-full transition-all duration-500"
            style={{ width: `${(vacancy.volunteersApplied / vacancy.volunteersNeeded) * 100}%` }}
          />
        </div>
        <Button 
          onClick={() => onApply?.(vacancy.id)}
          className="btn-medical flex-shrink-0"
        >
          Volunteer
        </Button>
      </div>
    </div>
  );
};

export default VacancyCard;
