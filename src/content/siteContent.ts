/**
 * ============================================================
 *  SITE CONTENT — the "CMS" for this website
 * ============================================================
 * Every piece of copy, contact detail, price, and link used across
 * the site lives in this one file. To update the website, edit the
 * values here — you should almost never need to touch the files in
 * /src/pages or /src/components.
 *
 * Anything wrapped in "// TODO" is a placeholder that must be
 * replaced before the site goes live. See /TODO.md for the full
 * checklist.
 * ============================================================
 */

export type NavLink = {
  label: string;
  path: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Schedule", path: "/schedule" },
  { label: "Gallery", path: "/gallery" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const siteInfo = {
  brandName: "Coach Gideon",
  fullName: "Eluwade Gideon Oluwapelumi",
  tagline: "Private Basketball Skills Coach",
  role: "Lead Skills Trainer & Developer",
  city: "Lagos, Nigeria",
  // TODO: replace with the real phone number
  phone: "+234 XX XXX XXXX",
  // TODO: replace with the real WhatsApp number (digits only, country code, no + or leading 0)
  whatsappNumber: "234XXXXXXXXXX",
  // TODO: replace with the real email address
  email: "coachgideon@example.com",
  // TODO: replace with the real training venue / gym address
  venue: "Training venue address — Lagos, Nigeria",
  // TODO: replace with the real production domain (used in index.html too)
  domain: "https://example.com",
};

export const socialLinks = {
  // TODO: replace "#" with real profile URLs, or remove any platform not used
  instagram: "#",
  twitter: "#",
  facebook: "#",
  linkedin: "#",
};

// Designer credit shown in the footer — keep this pointing at the real site.
export const designerCredit = {
  name: "Peter Lightspeed",
  url: "https://peterlightspeed.com",
};

// TODO: replace with a real Formspree form ID (from https://formspree.io) — see /TODO.md
export const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";

export const heroStats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Players Trained" },
  { value: "25+", label: "Sessions / Week" },
  { value: "98%", label: "Success Rate" },
];

export const whyTrainFeatures = [
  {
    title: "Fundamental Focus",
    desc: "We build from the ground up. Perfecting footwork, balance, and mechanics before adding complexity.",
  },
  {
    title: "Game-Translating Skills",
    desc: "No useless drills. Every drill simulates real game situations, pressure, and decision-making.",
  },
  {
    title: "High-Intensity Reps",
    desc: "Practice at game speed. Conditioning is built directly into skill work for maximum efficiency.",
  },
  {
    title: "Basketball IQ",
    desc: "Learn how to read defenses, exploit mismatches, and understand team concepts, not just individual moves.",
  },
];

export const featuredPrograms = [
  {
    title: "One-on-One Coaching",
    desc: "Highly personalized instruction focused entirely on fixing your weaknesses and sharpening your strengths.",
    image: "action-1v1.jpg",
  },
  {
    title: "Group Training",
    desc: "High-intensity competitive drills with players of similar skill levels to push each other further.",
    image: "team-training.jpg",
  },
  {
    title: "Shooting Development",
    desc: "Mechanics breakdown, catch-and-shoot efficiency, off-the-dribble shot creation, and range extension.",
    image: "action-dribble-fmn.jpg",
  },
];

export const bio = {
  paragraphs: [
    "Based in Lagos, Nigeria, Coach Gideon has dedicated his career to the technical and mental development of basketball players at all levels — from beginners touching a basketball for the first time to elite athletes looking for that competitive edge.",
    "My philosophy is simple: master the fundamentals until they become instinct, then build complexity. I don't believe in flashy drills that look good on camera but fail in real games. Every session is purposeful, intense, and tailored to translate directly to in-game performance.",
    "Over the years, I've worked with hundreds of players across various academies, schools, and private setups. My goal isn't just to make you a better player, but a smarter one who understands the game deeply.",
  ],
};

export const philosophyPillars = [
  {
    title: "Precision",
    desc: "Attention to the smallest details in mechanics separates good players from great ones.",
  },
  {
    title: "Discipline",
    desc: "Hard work beats talent when talent fails to work hard. Consistency is non-negotiable.",
  },
  {
    title: "IQ First",
    desc: "Athleticism fades, but a high basketball IQ lasts forever. We train the mind as much as the body.",
  },
  {
    title: "Results",
    desc: "We measure success by in-game impact. If it doesn't translate to the court, we don't do it.",
  },
];

export const certifications = [
  {
    // TODO: replace with real certification name / year / issuing body
    title: "FIBA Certified Coach Level I",
    detail: "Placeholder certification details.",
  },
  {
    title: "Advanced Skills Development Certification",
    detail: "Placeholder certification details.",
  },
  {
    title: "Sports CPR & First Aid",
    detail: "Placeholder certification details.",
  },
];

export const achievements = [
  // TODO: replace with real achievements and medal history
  {
    title: "State High School Championship",
    detail: "Lead Assistant Coach (2022)",
  },
  {
    title: "Lagos Youth Tournament Gold Medal",
    detail: "Head Coach U-16 Division (2021)",
  },
  {
    title: "Coach of the Year - Local Academy",
    detail: "Recognized for outstanding player development (2023)",
  },
];

export type Service = {
  id: string;
  title: string;
  desc: string;
  features: string[];
  // TODO: replace every "₦--,--" with a real per-session rate
  price: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "one-on-one",
    title: "One-on-One Coaching",
    desc: "Highly personalized training designed exclusively around your specific needs, weaknesses, and goals. Maximum reps, intense focus, and detailed mechanical correction.",
    features: [
      "Customized drill progression",
      "Video breakdown analysis",
      "Detailed mechanical correction",
      "Progress tracking",
    ],
    price: "₦--,--",
    image: "action-1v1.jpg",
  },
  {
    id: "group",
    title: "Group Training",
    desc: "High-intensity sessions with 3-6 players. Focuses on competitive drills, reading defenses, and playing through contact in a game-like environment.",
    features: [
      "Competitive drills",
      "Read-and-react situations",
      "High-intensity cardio",
      "Small-sided games (1v1, 3v3)",
    ],
    price: "₦--,--",
    image: "team-training.jpg",
  },
  {
    id: "youth",
    title: "Youth Development",
    desc: "For beginners and young athletes (ages 7-14). Focuses on building a love for the game while establishing rock-solid fundamentals and proper habits early.",
    features: [
      "Basic fundamentals",
      "Coordination & balance",
      "Fun, engaging drills",
      "Teamwork principles",
    ],
    price: "₦--,--",
    image: "action-dribble-fmn.jpg",
  },
  {
    id: "shooting",
    title: "Shooting Development",
    desc: "A specialized program focused purely on the art of shooting. We break down the mechanics from the feet up to build a fluid, repeatable, and lethal stroke.",
    features: [
      "Catch-and-shoot mechanics",
      "Shooting off the dribble",
      "Range extension",
      "Free throw consistency",
    ],
    price: "₦--,--",
    image: "action-drive-contact.jpg",
  },
  {
    id: "ball-handling",
    title: "Ball Handling",
    desc: "Develop the handle to break down pressure and get anywhere on the floor. Focuses on ball control, shiftiness, change of pace, and protecting the ball.",
    features: [
      "Stationary ball control",
      "Pounding against pressure",
      "Change of direction/pace",
      "Finishing out of moves",
    ],
    price: "₦--,--",
    image: "action-defense.jpg",
  },
  {
    id: "conditioning",
    title: "Basketball Conditioning",
    desc: "Basketball-specific physical preparation. Build the stamina, lateral quickness, and explosive power required to dominate the 4th quarter.",
    features: [
      "Agility ladder work",
      "Sprint intervals",
      "Core strength",
      "Vertical jump basics",
    ],
    price: "₦--,--",
    image: "coach-casual.jpg",
  },
  {
    id: "game-iq",
    title: "Game IQ Sessions",
    desc: "Mental reps. Film study and on-court breakdown of spacing, angles, defensive rotations, and exploiting mismatches.",
    features: [
      "Pick and roll reads",
      "Off-ball movement",
      "Help defense principles",
      "Film study",
    ],
    price: "₦--,--",
    image: "coach-portrait.jpg",
  },
];

export type ScheduleRow = {
  day: string;
  times: string;
  sessionTypes: string;
  available: boolean;
  note?: string;
};

export const scheduleRows: ScheduleRow[] = [
  { day: "Tuesday", times: "4:00 PM - 8:00 PM", sessionTypes: "1-on-1, Small Group", available: true },
  { day: "Thursday", times: "4:00 PM - 8:00 PM", sessionTypes: "1-on-1, Small Group", available: true },
  { day: "Friday", times: "3:00 PM - 7:00 PM", sessionTypes: "Shooting Lab, Youth Dev", available: true },
  { day: "Monday / Wednesday", times: "Unavailable", sessionTypes: "", available: false },
  { day: "Saturday / Sunday", times: "By Special Request Only", sessionTypes: "", available: false, note: "special" },
];

export type GalleryCategory = "Training" | "Match" | "Coaching" | "Success Stories";

export type GalleryImage = {
  id: number;
  category: GalleryCategory;
  title: string;
  image: string;
};

export const galleryImages: GalleryImage[] = [
  { id: 1, category: "Training", title: "One-on-one dribble work", image: "action-1v1.jpg" },
  { id: 2, category: "Match", title: "Driving through contact", image: "action-drive-contact.jpg" },
  { id: 3, category: "Coaching", title: "Group session at Webber Hoops", image: "team-training.jpg" },
  { id: 4, category: "Training", title: "Reading the defense", image: "action-dribble-fmn.jpg" },
  { id: 5, category: "Match", title: "Defensive stance and footwork", image: "action-defense.jpg" },
  { id: 6, category: "Coaching", title: "Coach Gideon on the sideline", image: "coach-casual.jpg" },
  { id: 7, category: "Success Stories", title: "Medals earned by our athletes", image: "medals.jpg" },
  { id: 8, category: "Success Stories", title: "Coach Gideon", image: "coach-portrait.jpg" },
];

export const galleryCategories: Array<"All" | GalleryCategory> = [
  "All",
  "Training",
  "Match",
  "Coaching",
  "Success Stories",
];

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
  category: "Player" | "Parent" | "Team";
};

// TODO: replace with real quotes from athletes/parents (testimonials.html placeholder content)
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tobi A.",
    role: "High School Player",
    text: "Before training with Coach Gideon, my off-hand was extremely weak and I lacked confidence driving left. Within 3 months of focused handle work, I'm now finishing with both hands comfortably through contact.",
    category: "Player",
  },
  {
    id: 2,
    name: "Mr. & Mrs. Johnson",
    role: "Parents of U-14 Player",
    text: "We've seen an incredible transformation in our son, not just in his basketball skills but in his discipline and work ethic. Coach Gideon demands excellence but delivers it with genuine care and encouragement.",
    category: "Parent",
  },
  {
    id: 3,
    name: "David O.",
    role: "College Athlete",
    text: "The conditioning and Game IQ sessions are next level. It's not just running sprints; it's learning how to read defenses while exhausted. It completely changed how I approach the game mentally.",
    category: "Player",
  },
  {
    id: 4,
    name: "Lagos Prep Academy",
    role: "Team Clinic",
    text: "Coach Gideon came in for a weekend shooting clinic with our varsity team. His breakdown of mechanics is the most detailed we've seen. Our team shooting percentage improved significantly over the season.",
    category: "Team",
  },
  {
    id: 5,
    name: "Samuel K.",
    role: "Pro Prospect",
    text: "The attention to detail on footwork is unmatched. Every pivot, every jab step has a purpose. Training here elevated my game from being just athletic to being highly skilled and efficient.",
    category: "Player",
  },
  {
    id: 6,
    name: "Mrs. Adeyemi",
    role: "Parent",
    text: "My daughter was struggling with her shot mechanics. Coach Gideon completely rebuilt her jumper. She went from being hesitant to shoot to being the primary offensive option on her team.",
    category: "Parent",
  },
];

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

// TODO: replace with real articles — these are placeholder posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Anatomy of a Perfect Jump Shot: From Feet to Follow-Through",
    excerpt:
      "Shooting isn't just about the arms. It starts with balance, footwork, and generating power from the ground up. Here's a breakdown of proper mechanics.",
    date: "Oct 12, 2023",
    category: "Shooting Fundamentals",
  },
  {
    id: 2,
    title: "Defensive Principles: Why Stance and Angles Matter More Than Speed",
    excerpt:
      "You don't have to be the fastest player on the court to be an elite defender. Learning proper closeouts, angles, and stance can neutralize quicker opponents.",
    date: "Nov 05, 2023",
    category: "Defense",
  },
  {
    id: 3,
    title: "Building Basketball Confidence: The Mental Side of the Game",
    excerpt:
      "A missed shot shouldn't derail your entire game. Discover techniques for building mental resilience, having a 'next play' mentality, and playing without fear of failure.",
    date: "Dec 18, 2023",
    category: "Mental Toughness",
  },
];

// Simple keyword -> answer map for the on-site chat assistant widget.
export const chatAnswers: Record<string, string> = {
  "training days": "Coach Gideon currently offers coaching sessions on Tuesday, Thursday, and Friday.",
  days: "Coach Gideon currently offers coaching sessions on Tuesday, Thursday, and Friday.",
  session: "Sessions last up to 2 hours.",
  "how long": "Sessions last up to 2 hours.",
  services:
    "One-on-one coaching, group training, shooting development, basketball conditioning, youth development, and game IQ training.",
  offer:
    "One-on-one coaching, group training, shooting development, basketball conditioning, youth development, and game IQ training.",
  contact: "Visit the Contact page or use the contact form on this website.",
  reach: "Visit the Contact page or use the contact form on this website.",
  price: "Please visit the Services page for pricing information.",
  cost: "Please visit the Services page for pricing information.",
  location: "Training is conducted in Lagos, Nigeria. Contact Coach Gideon for the exact location.",
  where: "Training is conducted in Lagos, Nigeria. Contact Coach Gideon for the exact location.",
  book: "To book a session, use the contact form or visit the Schedule page.",
};
