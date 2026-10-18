/**
 * Single source of truth for the link hub.
 * Edit the arrays below to change the page — no template changes required.
 */

export interface Profile {
  name: string;
  handle: string;
  headline: string;
  bio: string;
  avatar: string;
  location: string;
  status: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  emoji: string;
  blurb: string;
  /** Muted accent hex for the small dot next to the label. */
  tint: string;
}

export type ProjectStatus = "active" | "beta" | "archived";

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  url: string;
  emoji: string;
  tags: string[];
  status: ProjectStatus;
}

export const profile: Profile = {
  name: "Mehedi Hasan",
  handle: "@TheMehediHQ",
  headline: "Professional Overthinker & Occasional Ship-It Engineer",
  bio: "I write code, break code, then write code about breaking code.",
  avatar: "https://github.com/TheMehediHQ.png?size=460",
  location: "somewhere between git commit and git push --force",
  status: "caffeinated",
};

export const links: LinkItem[] = [
  {
    id: "website",
    label: "The Website",
    url: "https://www.mehedi-hasan.me",
    emoji: "🌐",
    blurb: "My digital home. Plants not included.",
    tint: "#5fd0bd",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/TheMehediHQ",
    emoji: "🐙",
    blurb: "Where my unfinished ideas live forever.",
    tint: "#8f9bff",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/TheMehediHQ",
    emoji: "💼",
    blurb: "For recruiters and my mom.",
    tint: "#6fb0e6",
  },
  {
    id: "twitter",
    label: "Twitter (it's X now)",
    url: "https://twitter.com/themehedihq",
    emoji: "🐦",
    blurb: "Hot takes, cold coffee.",
    tint: "#b09cf2",
  },
  {
    id: "cal",
    label: "Book 15 Minutes",
    url: "https://cal.com/TheMehediHQ/15min",
    emoji: "📅",
    blurb: "15 minutes of your life you won't get back. Book responsibly.",
    tint: "#ffb454",
  },
];

// Editable placeholders — swap the names/urls for your real repositories.
export const projects: ProjectItem[] = [
  {
    id: "sidequest-os",
    name: "SidequestOS",
    description: "An OS for procrastinating productively.",
    url: "https://github.com/TheMehediHQ",
    emoji: "🧭",
    tags: ["TypeScript", "Astro"],
    status: "active",
  },
  {
    id: "rubber-duck-gpt",
    name: "RubberDuckGPT",
    description: "Explains my code back to me until I feel smart.",
    url: "https://github.com/TheMehediHQ",
    emoji: "🦆",
    tags: ["AI", "CLI"],
    status: "beta",
  },
  {
    id: "portfolio-v47",
    name: "Portfolio v47",
    description: "The previous 46 were fine, actually.",
    url: "https://github.com/TheMehediHQ",
    emoji: "🗿",
    tags: ["CSS", "Web"],
    status: "archived",
  },
  {
    id: "readme-driven-development",
    name: "README-Driven Development",
    description: "Tests are just suggestions.",
    url: "https://github.com/TheMehediHQ",
    emoji: "📓",
    tags: ["Docs"],
    status: "active",
  },
];

export const tickerLines: string[] = [
  "Currently shipping, occasionally sleeping",
  "Open to side quests",
  "Tabs over spaces, and I will not be taking questions",
];
