import Header from '@/components/Header';
import RoleSelection from '@/components/RoleSelection';
import BackgroundPattern from '@/components/BackgroundPattern';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundPattern variant="hero" />
      <Header />
      <main>
        <RoleSelection />
      </main>
    </div>
  );
};

export default Index;
