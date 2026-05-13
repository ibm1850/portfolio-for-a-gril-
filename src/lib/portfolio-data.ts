export type GalleryCategory =
  | "All"
  | "Fashion"
  | "Lifestyle"
  | "Beauty"
  | "Fitness"
  | "Travel";

export type GalleryItem = {
  mediaType?: "image" | "video";
  title: string;
  category: Exclude<GalleryCategory, "All">;
  src: string;
  poster?: string;
  description: string;
  format: string;
  metric: string;
};

export const profile = {
  name: "Maram Ajmi",
  role: "UGC Creator, Model and Digital Brand Partner",
  tagline: "A confident and feminine creator who shares her world through beauty, lifestyle and real moments.",
  location: "Monastir, Tunisia",
  email: "maram.ajmi@gmail.com",
  phone: "+216 99 566 997",
  whatsapp: "https://wa.me/21699566997",
  instagram: "https://www.instagram.com/maram__ajmii?igsh=MTIwNjhkaGF0dHc5cQ==",
  tiktok: "https://www.tiktok.com/@marram.ajmi?_r=1&_t=ZS-96DbqD2epd9",
  cv: "/media/maram-ajmi-cv.pdf",
  intro:
    "Maram is a confident and expressive young creator whose content mixes feminine charm, real personality and an elegant social-media presence.",
  bio: [
    "Maram is the kind of girl people instantly remember: warm, pretty, sociable and naturally expressive in front of the camera. Her energy feels confident and feminine, while still looking polished and stylish.",
    "She loves sharing pieces of her everyday world through beauty, lifestyle, fashion, fitness and cute personal moments. Her content feels feminine, real and easy to connect with, which helps her audience feel close to her.",
    "Behind the visuals, Maram is also serious about her work. She understands trends, knows how to present a brand in a natural way and creates content that keeps its soft personality while still feeling professional.",
  ],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  "TikTok content creation",
  "Instagram and Facebook content",
  "Reels and short-form video",
  "Canva social visuals",
  "Mobile video editing",
  "Community management",
  "Content planning",
  "Professional communication",
  "Customer experience",
  "Brand presentation",
  "Creative direction",
  "Fast trend adaptation",
];

export const videoTypes = [
  "UGC",
  "Lifestyle",
  "Beauty",
  "Fitness",
  "Talking Videos",
  "Product Content",
];

export const collaborationFeature = {
  title: "Collab Video Preview",
  src: "/media/maram-collab-video.mp4",
  copy:
    "This video shows the kind of content Maram can create for brands: natural camera presence, feminine lifestyle energy, soft beauty moments and creator-style storytelling that still feels polished and professional.",
};

export const specialties = [
  {
    label: "Lifestyle Storytelling",
    copy: "Warm, relatable content built around confidence, routines and memorable social moments.",
  },
  {
    label: "Fitness and Wellness",
    copy: "Gym, healthy eating and routine-based content with an energetic, aspirational tone.",
  },
  {
    label: "Fashion and Beauty",
    copy: "Elegant styling, product-led visuals and creator-led brand presentation for social feeds.",
  },
];

export const stats = [
  {
    label: "Followers",
    value: 2.1,
    suffix: "K",
    decimals: 1,
    note: "TikTok followers",
  },
  {
    label: "TikTok Likes",
    value: 30,
    suffix: "K",
    decimals: 0,
    note: "community reactions",
  },
  {
    label: "Collabs",
    value: 100,
    suffix: "+",
    decimals: 0,
    note: "open for brand work",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Fashion",
  "Lifestyle",
  "Beauty",
  "Fitness",
  "Travel",
];

export const galleryItems: GalleryItem[] = [
  {
    mediaType: "image",
    title: "Main Creator Portrait",
    category: "Beauty",
    src: "/media/maram-main-portrait.webp",
    description:
      "A polished portrait with red-lip elegance for profile features, media kits and premium brand introductions.",
    format: "Hero portrait",
    metric: "Main image",
  },
  {
    mediaType: "video",
    title: "Collab Video Reel",
    category: "Lifestyle",
    src: "/media/maram-collab-video.mp4",
    poster: "/media/maram-main-portrait.webp",
    description:
      "A collaboration-style vertical video preview that highlights Maram's on-camera presence, creator energy and natural UGC storytelling style.",
    format: "Video preview",
    metric: "Brand-ready video",
  },
  {
    mediaType: "image",
    title: "TikTok UGC Profile",
    category: "Lifestyle",
    src: "/media/maram-tiktok-profile.webp",
    description:
      "Live social proof from Maram's TikTok creator profile, showing UGC positioning, likes and collaboration contact details.",
    format: "Profile proof",
    metric: "TikTok channel",
  },
  {
    mediaType: "image",
    title: "Healthy Lifestyle Guide",
    category: "Fitness",
    src: "/media/maram-fitness.webp",
    description:
      "Gym and wellness content concept for training, nutrition and routine-focused partnerships.",
    format: "Reel concept",
    metric: "Wellness vertical",
  },
  {
    mediaType: "image",
    title: "Soft Glam Personal Brand",
    category: "Beauty",
    src: "/media/maram-hero.webp",
    description:
      "Direct portrait framing for beauty, skincare, hair, fragrance and feminine self-care campaigns.",
    format: "Portrait crop",
    metric: "Beauty-ready",
  },
  {
    mediaType: "image",
    title: "Journey With Mimy",
    category: "Travel",
    src: "/media/maram-travel.webp",
    description:
      "Destination-led creator content with warm lighting and an intimate travel diary feel.",
    format: "Travel diary",
    metric: "Cinematic mood",
  },
];

export const experience = [
  {
    title: "TikTok Content Creator",
    meta: "Current",
    details:
      "Creates fitness, lifestyle and healthy nutrition content, edits short-form videos, tracks trends and interacts with followers to grow community visibility.",
  },
  {
    title: "Social Media Manager and Marketing - MANHALTI",
    meta: "Brand content experience",
    details:
      "Produced social posts, promotional visuals and Reels for product collections while developing campaign ideas adapted to audience behavior and trend cycles.",
  },
  {
    title: "Order Confirmation and Client Follow-up",
    meta: "Customer communication",
    details:
      "Handled customer conversations through phone and messaging, solved delivery issues and supported Instagram and Facebook account management.",
  },
  {
    title: "Cashier and Client Service - Cafe, Monastir",
    meta: "Hospitality experience",
    details:
      "Welcomed clients, managed payments and maintained fast, clean and professional front-of-house service.",
  },
];

export const education = [
  "Preparatory cycle, FSM - 2025/2026",
  "Baccalaureate in Mathematics, Tunisia - 2024/2025",
  "Entrepreneurship certificate, Enactus Tunisia",
  "Content creation certificate, ComContent Tunisia",
];

export const services = [
  {
    title: "Sponsored Posts",
    copy: "Platform-native posts and captions designed around brand goals, audience trust and visual polish.",
  },
  {
    title: "UGC Content",
    copy: "Authentic short-form videos, product demos, unboxings, lifestyle integrations and usage stories.",
  },
  {
    title: "Brand Ambassador",
    copy: "Ongoing creator representation with repeated content moments and consistent brand familiarity.",
  },
  {
    title: "Product Photography",
    copy: "Elegant social visuals for beauty, fashion, wellness and lifestyle products.",
  },
  {
    title: "Event Appearances",
    copy: "Confident presence for openings, activations, launches and creator-led social coverage.",
  },
  {
    title: "Modeling",
    copy: "Editorial-style visuals, fashion looks, product styling and campaign-ready portrait content.",
  },
];

export const testimonials = [
  {
    quote:
      "Maram brings warmth, camera confidence and a clear sense of what makes social content feel alive.",
    name: "Fashion boutique collaborator",
    role: "Campaign feedback",
  },
  {
    quote:
      "She understands product presentation and can turn simple concepts into polished visual moments.",
    name: "Digital marketing lead",
    role: "Social content project",
  },
  {
    quote:
      "Professional, responsive and creative. She is easy to brief and brings her own ideas to the table.",
    name: "Local brand partner",
    role: "Creator collaboration",
  },
];

export const brandMarks = [
  "MANHALTI",
  "TikTok Creator",
  "Instagram Content",
  "ComContent Tunisia",
  "Enactus Tunisia",
];
