export interface LinkProps {
  link: string;
  name: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  team?: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  blurb: string;
  tech: string[];
  links: LinkProps[];
  date?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}
