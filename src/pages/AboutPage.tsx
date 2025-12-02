import Header from '@/components/Header';
import { Heart, Users, Shield, Clock } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'Connect volunteers with organizations making a difference in communities across Nepal.',
    },
    {
      icon: Users,
      title: 'Easy Coordination',
      description: 'Streamlined platform for organizing and participating in volunteer activities.',
    },
    {
      icon: Shield,
      title: 'Emergency Response',
      description: 'Quick SOS system to dispatch help when emergencies arise.',
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Stay informed about opportunities and connect instantly with organizers.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About मेरो समुदाय
          </h1>
          <p className="text-lg text-muted-foreground">
            A platform dedicated to connecting volunteers with communities in need.
            Together, we build stronger, more resilient neighborhoods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-medical p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-10 w-10 text-medical mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
