export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Minimalist Design: Trends to Watch in 2026",
    excerpt: "As we move further into the decade, minimalism is evolving. Discover how texture, biophilic elements, and smart technology are redefining the concept of 'less is more'.",
    category: "Design Trends",
    author: "Bolanle Okusanya",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    image: "/images/blog-1.jpg",
    content: [
      "Minimalism has long been associated with stark white walls and sparse furnishings. However, as we step into 2026, the definition of minimalism is undergoing a profound transformation. The new wave of minimalist design is warmer, more textural, and deeply connected to nature.",
      "One of the most significant shifts is the move away from 'clinical' minimalism towards 'warm' minimalism. This style embraces beige, cream, and taupe tones instead of pure white. It prioritizes natural materials like unpolished stone, raw wood, and linen, adding tactile depth to spaces that remain visually uncluttered.",
      "Biophilic design is also playing a crucial role. It's no longer just about having a potted plant in the corner; it's about integrating nature into the architectural fabric of the home. Large windows that frame outdoor views, indoor courtyards, and the use of organic shapes are becoming standard features in luxury minimalist homes.",
      "Finally, technology is becoming invisible. Smart home features are now seamlessly integrated into the design, hidden behind panels or embedded into surfaces, allowing for a clean aesthetic without sacrificing modern convenience. The future of minimalism is not about having less, but about making space for what truly matters.",
    ],
  },
  {
    id: 2,
    title: "Sustainable Construction: Building Green in Lagos",
    excerpt: "Exploring eco-friendly materials and energy-efficient building techniques suitable for the Nigerian climate.",
    category: "Construction",
    author: "Tunde Bakare",
    date: "Jan 28, 2026",
    readTime: "4 min read",
    image: "/images/blog-2.jpg",
    content: [
      "Sustainability in construction is no longer a niche preference; it is a necessity, especially in rapidly growing cities like Lagos. Building green in our tropical climate presents unique challenges and opportunities that require innovative thinking.",
      "Passive cooling techniques are seeing a resurgence. By orienting buildings to maximize airflow and minimize direct solar gain, we can significantly reduce the reliance on air conditioning. Features like deep overhangs, louvers, and cross-ventilation strategies are being integrated into modern designs.",
      "Material selection is another critical area. We are seeing increased interest in locally sourced materials which reduce transportation emissions. Compressed earth blocks, bamboo, and recycled concrete aggregates are gaining traction not just for their environmental benefits, but for their aesthetic appeal.",
      "Water conservation systems, such as rainwater harvesting and greywater recycling, are also becoming standard in luxury developments. These systems ensure that our buildings are resilient and responsible, contributing to a more sustainable urban environment in Lagos.",
    ],
  },
  {
    id: 3,
    title: "Maximizing Space in Modern Urban Apartments",
    excerpt: "Creative storage solutions and layout strategies to make small spaces feel grand and luxurious.",
    category: "Interior Design",
    author: "Nneka Obi",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    image: "/images/blog-3.jpg",
    content: [
      "Urban living often means compromising on square footage, but it should never mean compromising on style or functionality. With thoughtful planning, even compact apartments can feel spacious and luxurious.",
      "The key to maximizing space is multifunctional furniture and built-in storage. Custom joinery that runs from floor to ceiling draws the eye upward, creating a sense of height while providing ample storage. Hidden compartments and fold-away desks allow spaces to transform based on the time of day.",
      "Mirrors are a classic tool for a reason. Strategically placed mirrors reflect light and views, effectively doubling the visual depth of a room. Combined with a consistent color palette and continuous flooring, they blur the boundaries of the space.",
      "Lighting also plays a vital role. Instead of relying on a single overhead source, layering light with wall sconces, floor lamps, and cove lighting adds dimension and drama, making the apartment feel larger and more inviting.",
    ],
  },
  {
    id: 4,
    title: "The Heart of the Home: Kitchen Trends",
    excerpt: "From hidden appliances to bold marble backsplashes, see what's trending in kitchen design this year.",
    category: "Design Trends",
    author: "David Okonkwo",
    date: "Dec 20, 2025",
    readTime: "3 min read",
    image: "/images/blog-4.jpg",
    content: [
      "The kitchen has evolved from a purely functional workspace into the social hub of the home. In 2026, kitchen design is all about blending performance with high-end aesthetics.",
      "One of the biggest trends is the 'hidden kitchen'. Appliances are panel-ready, disappearing behind cabinetry that matches the rest of the home. Even small appliances are tucked away in 'appliance garages', keeping countertops pristine and clutter-free.",
      "Statement stones are taking center stage. We are moving away from subtle veining to dramatic, bold marble slabs used for backsplashes, islands, and even integrated sinks. These natural stones serve as art pieces, anchoring the room.",
      "Warm metals like unlacquered brass and copper are replacing chrome and stainless steel, adding a touch of luxury and warmth. When paired with dark cabinetry in navy or forest green, the effect is sophisticated and timeless.",
    ],
  },
  {
    id: 5,
    title: "Creating a Wellness Sanctuary in Your Bathroom",
    excerpt: "Transform your daily routine by incorporating spa-like elements into your master bathroom design.",
    category: "Wellness",
    author: "Zainab Ibrahim",
    date: "Dec 05, 2025",
    readTime: "5 min read",
    image: "/images/blog-5.jpg",
    content: [
      "The bathroom is no longer just a utility room; it is a private retreat for relaxation and rejuvenation. Creating a spa-like atmosphere at home is easier than you might think.",
      "Start with the materials. Natural stone, wood elements, and matte finishes create a calming, organic feel. The tactile experience is just as important as the visual one—think heated floors and soft, plush towels.",
      "Lighting is critical for setting the mood. Dimmable lighting and warm-temperature bulbs allow you to transition from bright, functional light in the morning to a soft, relaxing glow in the evening.",
      "Finally, consider the sensory details. A rainfall showerhead, a deep soaking tub, and integrated aromatherapy diffusers can elevate your daily routine into a wellness ritual. It's about designing a space that cares for you.",
    ],
  },
];
