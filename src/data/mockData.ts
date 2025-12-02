export type UrgencyLevel = 'low' | 'moderate' | 'high' | 'critical';

export interface Vacancy {
  id: string;
  title: string;
  location: string;
  urgency: UrgencyLevel;
  description: string;
  organizerName: string;
  postedAt: string;
  volunteersNeeded: number;
  volunteersApplied: number;
}

export interface Hospital {
  id: string;
  name: string;
  distance: string;
  responseTime: string;
  available: boolean;
}

export interface ChatContact {
  id: string;
  name: string;
  role: 'organizer' | 'volunteer';
  avatar: string;
  status: 'online' | 'offline';
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

export const mockVacancies: Vacancy[] = [
  {
    id: '1',
    title: 'Blood Donation Drive Volunteers',
    location: 'Kathmandu Medical College',
    urgency: 'high',
    description: 'Urgent need for volunteers to assist with blood donation drive. Help with registration, refreshments, and donor care.',
    organizerName: 'Red Cross Nepal',
    postedAt: '2 hours ago',
    volunteersNeeded: 15,
    volunteersApplied: 8,
  },
  {
    id: '2',
    title: 'Emergency Flood Relief Support',
    location: 'Chitwan District',
    urgency: 'critical',
    description: 'Immediate assistance needed for flood-affected families. Distribution of food, water, and medical supplies.',
    organizerName: 'Nepal Disaster Relief',
    postedAt: '30 minutes ago',
    volunteersNeeded: 50,
    volunteersApplied: 23,
  },
  {
    id: '3',
    title: 'Community Health Camp Assistants',
    location: 'Bhaktapur Hospital',
    urgency: 'moderate',
    description: 'Looking for volunteers to help organize a free health checkup camp for senior citizens.',
    organizerName: 'Bhaktapur Health Foundation',
    postedAt: '1 day ago',
    volunteersNeeded: 10,
    volunteersApplied: 6,
  },
  {
    id: '4',
    title: 'Medical Supply Distribution',
    location: 'Lalitpur Medical Center',
    urgency: 'low',
    description: 'Help needed for sorting and distributing medical supplies to rural health posts.',
    organizerName: 'Health Nepal NGO',
    postedAt: '3 days ago',
    volunteersNeeded: 8,
    volunteersApplied: 5,
  },
];

export const mockHospitals: Hospital[] = [
  {
    id: '1',
    name: 'Tribhuvan University Teaching Hospital',
    distance: '2.3 km',
    responseTime: '8 min',
    available: true,
  },
  {
    id: '2',
    name: 'Bir Hospital',
    distance: '3.1 km',
    responseTime: '12 min',
    available: true,
  },
  {
    id: '3',
    name: 'Grande International Hospital',
    distance: '4.5 km',
    responseTime: '15 min',
    available: true,
  },
  {
    id: '4',
    name: 'Nepal Medical College',
    distance: '6.2 km',
    responseTime: '20 min',
    available: false,
  },
];

export const mockContacts: ChatContact[] = [
  {
    id: '1',
    name: 'Red Cross Nepal',
    role: 'organizer',
    avatar: 'RC',
    status: 'online',
    lastMessage: 'Thank you for volunteering!',
    lastMessageTime: '2 min ago',
    unread: 2,
  },
  {
    id: '2',
    name: 'Dr. Sharma',
    role: 'organizer',
    avatar: 'DS',
    status: 'online',
    lastMessage: 'The camp starts at 9 AM',
    lastMessageTime: '1 hour ago',
    unread: 0,
  },
  {
    id: '3',
    name: 'Ramesh Volunteer',
    role: 'volunteer',
    avatar: 'RV',
    status: 'offline',
    lastMessage: 'I can help tomorrow',
    lastMessageTime: 'Yesterday',
    unread: 0,
  },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '1',
    content: 'Hello! Thank you for signing up for the blood donation drive.',
    timestamp: '10:30 AM',
    isOwn: false,
  },
  {
    id: '2',
    senderId: 'me',
    content: 'Happy to help! What time should I arrive?',
    timestamp: '10:32 AM',
    isOwn: true,
  },
  {
    id: '3',
    senderId: '1',
    content: 'Please come by 8:30 AM. We\'ll brief you on the day\'s activities.',
    timestamp: '10:35 AM',
    isOwn: false,
  },
  {
    id: '4',
    senderId: 'me',
    content: 'Perfect, I\'ll be there. Should I bring anything?',
    timestamp: '10:36 AM',
    isOwn: true,
  },
  {
    id: '5',
    senderId: '1',
    content: 'Just yourself and comfortable clothes. Thank you for volunteering!',
    timestamp: '10:38 AM',
    isOwn: false,
  },
];
