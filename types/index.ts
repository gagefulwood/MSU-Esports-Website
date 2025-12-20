export type StudentClass = 'Freshman' | 'Sophomore' | 'Junior' | 'Senior' | 'Graduate';
export type StaffLevel = 'Board of Directors' | 'Executive Committee';
export type Department = 'Media' | 'Broadcasting' | 'Events' | 'Outreach' | 'Esports' | 'Leadership';
export type TeamTier = 'Maroon' | 'White' | 'Black';

export interface Member {
    id: string;
    name: string;
    major: string;
    class: StudentClass;
}

export interface Staff {
    memberId: string;
    name: string,
    role: string;
    department: Department;
    level: StaffLevel;
    imageUrl: string;
}

export interface Team {
    id: string;
    game: string;
    tier: TeamTier;
    roster: string[];
    captainId: string;
}

export interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}