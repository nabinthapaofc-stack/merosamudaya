import { useState } from 'react';
import { Building2, Plus, Users, Clock, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import VacancyCard from '@/components/VacancyCard';
import VacancyForm, { VacancyFormData } from '@/components/VacancyForm';
import SOSButton from '@/components/SOSButton';
import SOSModal from '@/components/SOSModal';
import BottomNav from '@/components/BottomNav';
import { mockVacancies, Vacancy } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const OrganizerDashboard = () => {
  const [sosOpen, setSosOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [vacancies, setVacancies] = useState<Vacancy[]>(mockVacancies.slice(0, 2));

  const handleCreateVacancy = (data: VacancyFormData) => {
    const newVacancy: Vacancy = {
      id: Date.now().toString(),
      ...data,
      organizerName: 'Your Organization',
      postedAt: 'Just now',
      volunteersApplied: 0,
    };
    setVacancies([newVacancy, ...vacancies]);
    toast({
      title: 'Vacancy Created',
      description: 'Your volunteer opportunity has been posted successfully.',
    });
  };

  const stats = [
    { label: 'Active Vacancies', value: vacancies.length, icon: Users, color: 'text-medical' },
    { label: 'Total Applications', value: 47, icon: TrendingUp, color: 'text-success' },
    { label: 'Pending Reviews', value: 12, icon: Clock, color: 'text-warning' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header showNav={false} />
      
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="h-5 w-5 text-medical" />
            <span className="text-sm font-medium text-medical">Organizer Dashboard</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Manage Your Vacancies
          </h1>
          <p className="text-muted-foreground mt-1">
            Post opportunities and connect with volunteers
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="card-medical p-4 text-center">
              <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Create Button */}
        <Button
          onClick={() => setFormOpen(true)}
          className="w-full btn-medical mb-6 animate-fade-in"
          style={{ animationDelay: '0.15s' }}
        >
          <Plus className="h-5 w-5 mr-2" />
          Create New Vacancy
        </Button>

        {/* Active Vacancies */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-lg font-semibold mb-4">Your Active Vacancies</h2>
          <div className="space-y-4">
            {vacancies.length > 0 ? (
              vacancies.map((vacancy, index) => (
                <div key={vacancy.id} style={{ animationDelay: `${0.2 + index * 0.05}s` }}>
                  <VacancyCard vacancy={vacancy} />
                </div>
              ))
            ) : (
              <div className="card-medical p-8 text-center">
                <p className="text-muted-foreground">No active vacancies yet.</p>
                <Button
                  onClick={() => setFormOpen(true)}
                  variant="link"
                  className="text-medical mt-2"
                >
                  Create your first vacancy
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <VacancyForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleCreateVacancy}
      />
      <SOSButton onClick={() => setSosOpen(true)} />
      <SOSModal isOpen={sosOpen} onClose={() => setSosOpen(false)} />
      <BottomNav role="organizer" />
    </div>
  );
};

export default OrganizerDashboard;
