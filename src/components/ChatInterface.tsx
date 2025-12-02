import { useState } from 'react';
import { Send, Paperclip, ArrowLeft, Circle } from 'lucide-react';
import { mockContacts, mockMessages, ChatContact, Message } from '@/data/mockData';

interface ChatInterfaceProps {
  onBack?: () => void;
}

const ChatInterface = ({ onBack }: ChatInterfaceProps) => {
  const [selectedContact, setSelectedContact] = useState<ChatContact | null>(null);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-background">
      {/* Contacts Sidebar */}
      <div className={`w-full md:w-80 border-r border-border flex flex-col ${selectedContact ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold text-lg">Messages</h2>
        </div>
        <div className="flex-1 overflow-auto">
          {mockContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`w-full p-4 flex items-center gap-3 hover:bg-secondary/50 transition-colors border-b border-border/50 ${
                selectedContact?.id === contact.id ? 'bg-secondary' : ''
              }`}
            >
              <div className="relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm ${
                  contact.role === 'organizer' 
                    ? 'bg-medical/10 text-medical' 
                    : 'bg-alert/10 text-alert'
                }`}>
                  {contact.avatar}
                </div>
                <Circle
                  className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 ${
                    contact.status === 'online' ? 'fill-success text-success' : 'fill-muted text-muted'
                  }`}
                />
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium truncate">{contact.name}</p>
                  <span className="text-xs text-muted-foreground">{contact.lastMessageTime}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
              </div>
              {contact.unread > 0 && (
                <span className="bg-alert text-alert-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                  {contact.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className={`flex-1 flex flex-col ${!selectedContact ? 'hidden md:flex' : 'flex'}`}>
        {selectedContact ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center gap-3">
              <button
                onClick={() => setSelectedContact(null)}
                className="md:hidden p-2 -ml-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                selectedContact.role === 'organizer' 
                  ? 'bg-medical/10 text-medical' 
                  : 'bg-alert/10 text-alert'
              }`}>
                {selectedContact.avatar}
              </div>
              <div>
                <p className="font-medium">{selectedContact.name}</p>
                <p className="text-xs text-muted-foreground capitalize">
                  {selectedContact.role} — {selectedContact.status}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-2.5 rounded-2xl ${
                      message.isOwn
                        ? 'bg-medical text-medical-foreground rounded-br-md'
                        : 'bg-secondary text-foreground rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.isOwn ? 'text-medical-foreground/70' : 'text-muted-foreground'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-secondary rounded-full transition-colors">
                  <Paperclip className="h-5 w-5 text-muted-foreground" />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-secondary rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-medical/50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="p-2.5 bg-alert text-alert-foreground rounded-full hover:bg-alert/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <p>Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
