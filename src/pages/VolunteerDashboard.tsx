import { useState } from 'react';
import { Heart, Filter } from 'lucide-react';
import Header from '@/components/Header';
import VacancyCard from '@/components/VacancyCard';
import SOSButton from '@/components/SOSButton';
import SOSModal from '@/components/SOSModal';
import BottomNav from '@/components/BottomNav';
import { mockVacancies } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';

const VolunteerDashboard = () => {
  const [sosOpen, setSosOpen] = useState(false);

  const handleApply = (id: string) => {
    toast({
      title: 'Application Submitted',
      description: 'Thank you for volunteering! The organizer will contact you soon.',
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header showNav={false} />
      
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-alert" />
            <span className="text-sm font-medium text-alert">Volunteer Portal</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Find Opportunities
          </h1>
          <p className="text-muted-foreground mt-1">
            Make a difference in your community today
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['All', 'Critical', 'High', 'Moderate', 'Low'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  filter === 'All'
                    ? 'bg-medical text-medical-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Filter className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Vacancy Feed */}
        <div className="space-y-4">
          {mockVacancies.map((vacancy, index) => (
            <div key={vacancy.id} style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
              <VacancyCard vacancy={vacancy} onApply={handleApply} />
            </div>
          ))}
        </div>
      </main>

      <SOSButton onClick={() => setSosOpen(true)} />
      <SOSModal isOpen={sosOpen} onClose={() => setSosOpen(false)} />
      <BottomNav role="volunteer" />
    </div>
  );
};

export default VolunteerDashboard;
