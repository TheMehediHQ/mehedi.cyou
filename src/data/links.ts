
/**
 * Single source of truth for the personal link hub.
 * A professional, personality-driven profile with a clean neo-brutalist UI.
 */

export interface Profile {
  name: string;
  subname: string;
  handle: string;
  avatar: string;
  status: string;
  statusSub: string;
  headline: string;
  bio: string;
  location: string;
}

export interface LinkCardItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon: string;
  bg: string;
  accent: string;
}

export const profile: Profile = {
  name: "Mehedi Hasan",
  subname: "(TheMehediHQ)",
  handle: "@TheMehediHQ",
  avatar: "/avatar.png",
  status: "Available for Opportunities",
  statusSub: " 🚀",
  headline:
    "Software Engineer building modern web applications and AI-powered experiences.",
  bio: "I turn ideas into reliable digital products using JavaScript, TypeScript, React, Next.js, Node.js, and modern web technologies. Occasionally, I turn coffee into code.",
  location: "Bangladesh 🇧🇩 · Working with people worldwide",
};

export const linkCards: LinkCardItem[] = [
  {
    id: "github",
    title: "GitHub — Open Source & Code",
    subtitle: "Explore my projects, experiments, and contributions.",
    url: "https://github.com/TheMehediHQ",
    icon: "/icon_github.png",
    bg: "#82e042",
    accent: "#61bf24",
  },
  {
    id: "linkedin",
    title: "LinkedIn — Professional Profile",
    subtitle: "My experience, career journey, and professional updates.",
    url: "https://www.linkedin.com/in/TheMehediHQ",
    icon: "/icon_linkedin.png",
    bg: "#52a5e8",
    accent: "#388fe3",
  },
  {
    id: "hire",
    title: "Let's Work Together",
    subtitle: "Have a project or opportunity? Let's talk.",
    url: "https://cal.com/TheMehediHQ/15min",
    icon: "/icon_hire.png",
    bg: "#fd60b1",
    accent: "#df4083",
  },
  {
    id: "projects",
    title: "Projects & Experiments",
    subtitle: "Real-world applications, side projects, and ideas in progress.",
    url: "https://github.com/TheMehediHQ?tab=repositories",
    icon: "/icon_projects.png",
    bg: "#fed61a",
    accent: "#e2af14",
  },
  {
    id: "games",
    title: "Side Projects & Creative Builds",
    subtitle: "Small experiments, creative ideas, and things I'm building.",
    url: "https://github.com/TheMehediHQ?tab=repositories",
    icon: "/icon_games.png",
    bg: "#b364e4",
    accent: "#8e57e0",
  },
  {
    id: "cv",
    title: "Resume — Mehedi Hasan",
    subtitle: "My technical skills, experience, and professional background.",
    url: "/cv.pdf",
    icon: "/icon_cv.png",
    bg: "#42e796",
    accent: "#32c47e",
  },
];