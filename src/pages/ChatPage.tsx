import Header from '@/components/Header';
import ChatInterface from '@/components/ChatInterface';
import SOSButton from '@/components/SOSButton';
import SOSModal from '@/components/SOSModal';
import BottomNav from '@/components/BottomNav';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ChatPage = () => {
  const [sosOpen, setSosOpen] = useState(false);
  const location = useLocation();
  const role = location.pathname.includes('volunteer') ? 'volunteer' : 'organizer';

  return (
    <div className="min-h-screen bg-background">
      <Header showNav={false} />
      <ChatInterface />
      <SOSButton onClick={() => setSosOpen(true)} />
      <SOSModal isOpen={sosOpen} onClose={() => setSosOpen(false)} />
      <BottomNav role={role as 'volunteer' | 'organizer'} />
    </div>
  );
};

export default ChatPage;
