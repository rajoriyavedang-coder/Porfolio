export interface Skill {
  name: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ProjectStepFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ml' | 'dev' | 'all';
  techStack: string[];
  achievements: string[];
  githubUrl?: string;
  demoUrl?: string;
  docUrl?: string;
  image?: string;
  results?: {
    accuracy?: string;
    f1Score?: string;
    featuresCount?: string;
  };
  steps?: ProjectStepFeature[];
  features?: ProjectStepFeature[];
}

export interface Certification {
  name: string;
  issuer: string;
  certificateUrl: string;
  badgeUrl?: string;
  date?: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  activities: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  expectedGraduation: string;
  cgpa: string;
  relevantCoursework: string[];
}
