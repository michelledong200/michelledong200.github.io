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
  bullets: string[];
  tags: string[];
  links: Link[];
  /** Featured projects span the full grid width and show a status badge. */
  featured?: boolean;
  status?: string;
};
export type SkillGroup = { title: string; icon: string; items: string[] };
export type Involvement = {
  icon: string;
  name: string;
  role: string;
  description: string;
};

export type GameSpot = { id: string; label: string };

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
  game: {
    title: string;
    intro: string;
    collectible: string;
    /** One hidden avocado per entry; ids match section ids ("top" is the hero). */
    spots: GameSpot[];
    /** Rank names by avocados found; each applies from its `min` count upward. */
    ranks: { min: number; name: string }[];
    cheers: string[];
    finale: { title: string; body: string; cta: string };
    reset: string;
  };
};

export const site: Site = {
  name: "Michelle Dong",
  shortName: "Michelle",
  initials: "MD",
  email: "TODO@berkeley.edu", // TODO(michelle): your @berkeley.edu email
  location: "San Francisco & Berkeley, CA",
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
    meta: ["She/Her", "San Francisco & Berkeley", "Class of 2030"],
  },

  about: {
    eyebrow: "About",
    heading: "Hi, I'm Michelle.",
    bio: "I'm a freshman at UC Berkeley studying business and computer science. I grew up in the South Bay, and I like building tools that make everyday things easier, from AI products to apps that help students find their way around campus. Outside of class you'll find me on the tennis court, playing basketball, or out on the water windsurfing and sailing.",
    // TODO(michelle): swap any stat you'd rather not show.
    stats: [
      { value: "5", label: "Projects on GitHub & in progress" },
      { value: "4", label: "Sports I play" },
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
    heading: "Current projects",
    moreHeading: "More on GitHub",
    viewAllLabel: "View all repositories",
    items: [
      {
        category: "Hardware · ML",
        title: "GuacBand",
        featured: true,
        status: "In progress",
        bullets: [
          "Armband used for hand gesture prediction.",
          "Uses 4 magnetic touch sensors to collect data from forearm muscle movements.",
          "Trains our model on the data after signal processing.",
          "Processes live signals and classifies gestures.",
          "Used for gaming and as input for other applications.",
        ],
        tags: ["Wearables", "Sensors", "Signal processing", "Machine learning"],
        links: [], // TODO(michelle): add a GitHub or demo link for GuacBand
      },
      {
        category: "AI · Product",
        title: "Coere AI",
        bullets: [
          "AI-native platform that optimizes LLM context-window usage.",
          "Compresses user data into summaries that transfer across models.",
        ],
        tags: ["LLMs", "Python", "Product"],
        links: [], // TODO(michelle): add a GitHub or live demo link
      },
      {
        category: "Machine learning",
        title: "Skin Disease Classification",
        // TODO(michelle): add bullets on the dataset, model, and accuracy.
        bullets: ["Image classification model for identifying skin conditions."],
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
        // TODO(michelle): add bullets on what it does.
        bullets: ["AI-powered assistant that helps students study."],
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
        // TODO(michelle): add bullets on your contribution.
        bullets: [
          "Working with SkyRL, a modular full-stack reinforcement-learning library for LLMs.",
        ],
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

  game: {
    title: "Guac quest",
    intro: "There's a hidden 🥑 in every section. Find them all to ripen your rank.",
    collectible: "avocado",
    spots: [
      { id: "top", label: "Intro" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "involvement", label: "Involvement" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
    ranks: [
      { min: 0, name: "Seed" },
      { min: 1, name: "Sprout" },
      { min: 3, name: "Sapling" },
      { min: 5, name: "Ripening" },
      { min: 7, name: "Almost ripe" },
      { min: 8, name: "Guac master" },
    ],
    cheers: ["Nice pick!", "Ripe find!", "Smashing!", "Avo-cado you go!", "Holy guac!"],
    finale: {
      title: "Holy guacamole! 🎉",
      body: "You found every avocado. Now you have to say hi.",
      cta: "Email me",
    },
    reset: "Replant avocados",
  },
};
