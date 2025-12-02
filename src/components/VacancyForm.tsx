import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UrgencyLevel } from '@/data/mockData';

interface VacancyFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: VacancyFormData) => void;
}

export interface VacancyFormData {
  title: string;
  location: string;
  urgency: UrgencyLevel;
  description: string;
  volunteersNeeded: number;
}

const VacancyForm = ({ isOpen, onClose, onSubmit }: VacancyFormProps) => {
  const [formData, setFormData] = useState<VacancyFormData>({
    title: '',
    location: '',
    urgency: 'moderate',
    description: '',
    volunteersNeeded: 10,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      location: '',
      urgency: 'moderate',
      description: '',
      volunteersNeeded: 10,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl w-full max-w-lg shadow-2xl animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold">Create New Vacancy</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Blood Donation Drive Volunteers"
              className="w-full bg-secondary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medical/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g., Kathmandu Medical College"
              className="w-full bg-secondary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medical/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Urgency Level</label>
            <div className="grid grid-cols-4 gap-2">
              {(['low', 'moderate', 'high', 'critical'] as UrgencyLevel[]).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData({ ...formData, urgency: level })}
                  className={`py-2 px-3 rounded-xl text-sm font-medium capitalize transition-all ${
                    formData.urgency === level
                      ? level === 'low'
                        ? 'bg-success text-success-foreground'
                        : level === 'moderate'
                        ? 'bg-warning text-warning-foreground'
                        : level === 'high'
                        ? 'bg-alert/80 text-alert-foreground'
                        : 'bg-alert text-alert-foreground'
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Volunteers Needed</label>
            <input
              type="number"
              required
              min={1}
              value={formData.volunteersNeeded}
              onChange={(e) => setFormData({ ...formData, volunteersNeeded: parseInt(e.target.value) })}
              className="w-full bg-secondary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medical/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the volunteer opportunity..."
              className="w-full bg-secondary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medical/50 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 rounded-xl"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 btn-medical">
              Create Vacancy
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VacancyForm;
