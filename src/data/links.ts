/**
 * Single source of truth for the link hub.
 * Rebuilt to match the hilarious, neo-brutalist comic UI!
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
  status: "Online",
  statusSub: "Probably sleeping 💤",
  headline:
    "Full-Stack Developer, Professional Bug Creator, & Part-time Couch Potato.",
  bio: "I turn coffee into bugs, then bugs into features, then features into load-bearing legacy code.",
  location: "somewhere between git commit and git push --force",
};

export const linkCards: LinkCardItem[] = [
  {
    id: "github",
    title: "GitHub (My messy codebase)",
    subtitle: "Abandon hope, all ye who enter here",
    url: "https://github.com/TheMehediHQ",
    icon: "/icon_github.png",
    bg: "#82e042",
    accent: "#61bf24",
  },
  {
    id: "linkedin",
    title: "Linkedin (The professional lies)",
    subtitle: "Watch me act like an adult",
    url: "https://www.linkedin.com/in/TheMehediHQ",
    icon: "/icon_linkedin.png",
    bg: "#52a5e8",
    accent: "#388fe3",
  },
  {
    id: "hire",
    title: "Hire Me! Please? 🙏",
    subtitle: "Need money for coffee and server bills",
    url: "https://cal.com/TheMehediHQ/15min",
    icon: "/icon_hire.png",
    bg: "#fd60b1",
    accent: "#df4083",
  },
  {
    id: "projects",
    title: "Stupid Side Projects",
    subtitle: "They don’t work, but they look cool",
    url: "https://github.com/TheMehediHQ?tab=repositories",
    icon: "/icon_projects.png",
    bg: "#fed61a",
    accent: "#e2af14",
  },
  {
    id: "games",
    title: "My Kids Game (droptop)",
    subtitle: "Work in heating problem cool",
    url: "https://github.com/TheMehediHQ",
    icon: "/icon_games.png",
    bg: "#b364e4",
    accent: "#8e57e0",
  },
  {
    id: "cv",
    title: "My CV (Fabricated? Maybe.)",
    subtitle: "100% human-written (mostly)",
    url: "/cv.pdf",
    icon: "/icon_cv.png",
    bg: "#42e796",
    accent: "#32c47e",
  },
];
