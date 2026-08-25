export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Web Development",
    description: "Core technologies used day to day.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Responsive Design"],
  },
  {
    title: "Programming & Data",
    description: "Languages and data tools used in projects.",
    skills: ["PHP", "SQL", "MySQL"],
  },
  {
    title: "Tools",
    description: "Day-to-day development tools.",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export const currentlyLearning: SkillGroup = {
  title: "Currently Learning",
  description:
    "Areas I'm actively developing skills in — not yet professional expertise, but a genuine part of where I'm headed.",
  skills: [
    "Cloud Computing (AWS fundamentals)",
    "Next.js & React",
    "Linux basics",
    "Automation with APIs and scripts",
  ],
};
