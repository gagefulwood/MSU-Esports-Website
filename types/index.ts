export type StudentClass = 'Freshman' | 'Sophomore' | 'Junior' | 'Senior' | 'Graduate';
export type StaffLevel = 'Board of Directors' | 'Executive Committee';
export type Department = 'Media' | 'Broadcasting' | 'Events' | 'Outreach' | 'Esports';
export type TeamTier = 'Maroon' | 'White' | 'Black';

export interface Member {
    id: string;
    name: string;
    major: string;
    class: StudentClass;
}

export interface Staff {
    memberId: string;
    role: string;
    department: Department;
    level: StaffLevel;
}

export interface Team {
    id: string;
    game: string;
    tier: TeamTier;
    roster: string[];
    captainId: string;
}