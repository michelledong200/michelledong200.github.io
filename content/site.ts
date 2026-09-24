// Single source of truth for every piece of copy on the site.
// Edit this file to update the page — components never hardcode personal text.
// Search the repo for "TODO(michelle)" to find everything that still needs your input.

export type Link = { label: string; href: string };
export type ExperienceItem = {
  org: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
};
export type Project = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  links: Link[];
};
export type SkillGroup = { title: string; icon: string; items: string[] };
export type Involvement = {
  icon: string;
  name: string;
  role: string;
  description: string;
};

export type Site = {
  name: string;
  shortName: string;
  initials: string;
  email: string;
  location: string;
  url: string;
  description: string;
  links: { github: string; linkedin: string };
  githubUser: string;
  nav: Link[];
  hero: {
    status: string;
    tagline: string;
    /** Words in the tagline to emphasize, like Reference A's highlighted keywords. */
    highlights: string[];
    meta: string[];
  };
  about: {
    eyebrow: string;
    heading: string;
    bio: string;
    stats: { value: string; label: string }[];
  };
  experience: { eyebrow: string; heading: string; items: ExperienceItem[] };
  projects: {
    eyebrow: string;
    heading: string;
    items: Project[];
    moreHeading: string;
    viewAllLabel: string;
  };
  skills: { eyebrow: string; heading: string; groups: SkillGroup[] };
  involvement: { eyebrow: string; heading: string; items: Involvement[] };
  education: {
    eyebrow: string;
    heading: string;
    school: string;
    program: string;
    expected: string;
    currentTerm: string;
    current: string[];
    completed: string[];
  };
  contact: { heading: string; blurb: string; cta: string };
};

export const site: Site = {
  name: "Michelle Dong",
  shortName: "Michelle",
  initials: "MD",
  email: "TODO@berkeley.edu", // TODO(michelle): your @berkeley.edu email
  location: "Berkeley, CA",
  url: "https://michelledong200.github.io",
  description:
    "Michelle Dong — UC Berkeley student in business and computer science. Projects in AI, apps, and machine learning.",
  links: {
    github: "https://github.com/michelledong200",
    linkedin: "https://www.linkedin.com/in/michelle-dong1777",
  },
  githubUser: "michelledong200",

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Involvement", href: "#involvement" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    status: "Freshman @ UC Berkeley",
    tagline:
      "Business and computer science student at UC Berkeley, building at the intersection of AI, product, and people.",
    highlights: ["AI", "product", "people"],
    // TODO(michelle): confirm pronouns and grad year.
    meta: ["She/Her", "San Francisco Bay Area", "Class of 2030"],
  },

  about: {
    eyebrow: "About",
    heading: "Hi, I'm Michelle.",
    bio: "I'm a freshman at UC Berkeley studying business and computer science. I grew up in the San Francisco Bay Area, and I like building tools that make everyday things easier, from AI products to apps that help students find their way around campus. Outside of class you'll find me on the tennis court, playing basketball, or out on the water windsurfing and sailing.",
    // TODO(michelle): swap any stat you'd rather not show.
    stats: [
      { value: "5", label: "Projects on GitHub & in progress" },
      { value: "4", label: "Sports I play" },
      { value: "A", label: "in C++" },
    ],
  },

  experience: {
    eyebrow: "Experience",
    heading: "Where I've worked",
    items: [
      {
        org: "Shoreline Lake",
        role: "Sailing & Windsurfing Coach",
        dates: "Jun 2026 – Aug 2026",
        location: "Mountain View, CA",
        bullets: [
          "Taught group sailing and windsurfing classes for beginner through intermediate students.",
          "Ran private lessons tailored to each student's skill level and goals.",
          // TODO(michelle): add numbers (e.g. students taught, age range).
          "Coached on-water safety, rigging, and technique.",
        ],
      },
    ],
  },

  projects: {
    eyebrow: "Projects",
    heading: "Things I've built",
    moreHeading: "More on GitHub",
    viewAllLabel: "View all repositories",
    items: [
      {
        category: "AI · Product",
        title: "Coere AI",
        description:
          "An AI-native platform that optimizes LLM context-window usage by compressing user data into summaries that transfer across models.",
        tags: ["LLMs", "Python", "Product"],
        links: [], // TODO(michelle): add a GitHub or live demo link
      },
      {
        category: "Mobile · Maps",
        title: "Walkie",
        description:
          "Indoor campus navigation for universities: find a café, lecture hall, or club room inside complex buildings, with indoor positioning that works without GPS and crowdsourced paths.",
        tags: ["Cross-platform", "PostgreSQL", "PostGIS"],
        links: [], // TODO(michelle): add a GitHub or live demo link
      },
      {
        category: "Machine learning",
        title: "Skin Disease Classification",
        // TODO(michelle): describe dataset, model, accuracy.
        description: "Image classification model for identifying skin conditions.",
        tags: ["Python", "Jupyter"],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/michelledong200/skin_disease_classification",
          },
        ],
      },
      {
        category: "AI · Education",
        title: "AI Study Assistant",
        // TODO(michelle): describe what it does.
        description: "An AI-powered assistant that helps students study.",
        tags: ["Python", "LLMs"],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/michelledong200/ai_study_assistant",
          },
        ],
      },
      {
        category: "Research · RL",
        title: "SkyRL (fork)",
        // TODO(michelle): describe your contribution.
        description:
          "Working with SkyRL, a modular full-stack reinforcement-learning library for LLMs.",
        tags: ["Python", "RL"],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/michelledong200/SkyRL_Project",
          },
        ],
      },
    ],
  },

  skills: {
    eyebrow: "Toolbox",
    heading: "Skills",
    groups: [
      // TODO(michelle): add/remove skills in each group.
      { title: "Programming", icon: "💻", items: ["Python", "C++", "SQL", "Jupyter", "Git"] },
      { title: "AI & data", icon: "🧠", items: ["LLMs", "Machine learning", "Data analysis"] },
      {
        title: "Business",
        icon: "📈",
        items: ["Consulting", "Product thinking", "Public speaking"],
      },
    ],
  },

  involvement: {
    eyebrow: "Involvement",
    heading: "Clubs & activities",
    items: [
      {
        icon: "💾",
        name: "Codeology",
        role: "Member · Newbie Bootcamp",
        description: "Berkeley's project-based software development club.",
      },
      {
        icon: "📊",
        name: "Consulting club", // TODO(michelle): consulting club name
        role: "Member",
        description: "Student consulting club working with real clients.",
      },
      {
        icon: "🎾",
        name: "Tennis",
        role: "Player",
        description: "Regular practice and play.",
      },
      {
        icon: "⛵",
        name: "Sailing, windsurfing & basketball",
        role: "Athlete & coach",
        description: "On the water whenever possible; pickup basketball on land.",
      },
    ],
  },

  education: {
    eyebrow: "Education",
    heading: "Berkeley & beyond",
    school: "University of California, Berkeley",
    // TODO(michelle): confirm exact major/program name and year.
    program: "Business and computer science",
    expected: "Expected 2030",
    currentTerm: "Fall 2026",
    current: ["CS 61A", "Data C8", "Math 52", "EPS 7"],
    completed: ["C++ programming course (A)"],
  },

  contact: {
    heading: "Let's build something.",
    blurb:
      "Open to internships, project collaborations, and coffee chats. Email is the fastest way to reach me.",
    cta: "Email me",
  },
};
