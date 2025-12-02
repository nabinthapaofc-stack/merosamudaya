import { Home, Search, MessageCircle, User } from 'lucide-react';
import { NavLink } from '@/components/NavLink';

interface BottomNavProps {
  role: 'volunteer' | 'organizer';
}

const BottomNav = ({ role }: BottomNavProps) => {
  const basePath = `/${role}`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-30">
      <div className="flex items-center justify-around py-2">
        <NavLink
          to={basePath}
          end
          className="flex flex-col items-center p-2 text-muted-foreground transition-colors"
          activeClassName="text-medical"
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </NavLink>

        <NavLink
          to={`${basePath}/explore`}
          className="flex flex-col items-center p-2 text-muted-foreground transition-colors"
          activeClassName="text-medical"
        >
          <Search className="h-5 w-5" />
          <span className="text-xs mt-1">Explore</span>
        </NavLink>

        <NavLink
          to={`${basePath}/chat`}
          className="flex flex-col items-center p-2 text-muted-foreground transition-colors"
          activeClassName="text-medical"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs mt-1">Chat</span>
        </NavLink>

        <NavLink
          to={`${basePath}/profile`}
          className="flex flex-col items-center p-2 text-muted-foreground transition-colors"
          activeClassName="text-medical"
        >
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
