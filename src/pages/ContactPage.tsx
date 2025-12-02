import Header from '@/components/Header';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent',
      description: 'We\'ll get back to you as soon as possible.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'support@merosamudaya.np' },
    { icon: Phone, label: 'Phone', value: '+977 1 4XXXXXX' },
    { icon: MapPin, label: 'Location', value: 'Kathmandu, Nepal' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-medical/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-medical" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="card-medical p-6 space-y-4 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medical/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medical/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medical/50 resize-none"
                />
              </div>
              <Button type="submit" className="w-full btn-medical">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
