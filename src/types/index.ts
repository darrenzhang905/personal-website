export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "languages";
  proficiency: "beginner" | "intermediate" | "advanced";
}

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}