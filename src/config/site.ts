// ============================================================================
// SITE CONFIGURATION
// Edit everything here — names, prices, contact info, modules, testimonials.
// Nothing below should need to be hardcoded anywhere else in the app.
// ============================================================================

export const siteConfig = {
  academyName: "Baby Art Academy",
  tagline: "Learn the beautiful art of Mehndi with simple, practical, step-by-step lessons.",

  instructor: {
    name: "Aqleema Parveen",
    title: "Founder & Lead Mehndi Artist",
    bio: "With over 3 years of hands-on experience designing bridal and Arabic Mehndi for clients across the country, Aisha built this course to teach the way she wishes she'd been taught — one shape at a time, with no shortcuts and no guesswork.",
    photo: "/instructor.jpg",
  },

  contact: {
    email: "hello@babyartacademy.com",
    phone: "+91 8601387883",
    whatsapp: "+91 8601387883",
    whatsappLink: "https://wa.me/918601387883",
    instagram: "https://instagram.com/babyartacademy",
    facebook: "https://facebook.com/babyartacademy",
    youtube: "https://youtube.com/@babyartacademy",
    address: "Studio 4, Near Sub-District, Padrauna Road, Khadda",
  },

  course: {
    name: "Professional Mehndi Course",
    level: "Beginner to Advanced",
    format: "Online, self-paced",
    duration: "8 weeks (lifetime access)",
    lessons: 42,
    language: "Hindi & English",
    suitableFor: "Beginners and intermediate learners",
    originalPrice: 599,
    offerPrice: 499,
    currency: "₹",
    certificate: true,
  },

  pricingIncludes: [
    "42 step-by-step video lessons",
    "Beginner-friendly, no experience needed",
    "Downloadable practice sheets",
    "Bridal & advanced design modules",
    "Direct support from your instructor",
    "Certificate of completion",
  ],

  modules: [
    {
      title: "Introduction to Mehndi",
      lessons: [
        "The story and tradition of Mehndi",
        "Cones, cones and tools you'll need",
        "Setting up your practice space",
      ],
    },
    {
      title: "Basic Lines & Shapes",
      lessons: [
        "How to hold and control the cone",
        "Straight lines, curves and dots",
        "Building confidence with pressure control",
      ],
    },
    {
      title: "Floral & Leaf Patterns",
      lessons: [
        "Simple five-petal flowers",
        "Layered leaves and vines",
        "Combining florals into a strip",
      ],
    },
    {
      title: "Arabic Mehndi Designs",
      lessons: [
        "Bold outlines and negative space",
        "Trailing floral vines",
        "Full-hand Arabic composition",
      ],
    },
    {
      title: "Indian Mehndi Designs",
      lessons: [
        "Traditional motifs and fillers",
        "Paisleys and jaali patterns",
        "Dense traditional coverage",
      ],
    },
    {
      title: "Mandala Designs",
      lessons: [
        "Drawing a balanced circular grid",
        "Layering mandala details",
        "Palm-centred mandala design",
      ],
    },
    {
      title: "Front Hand Designs",
      lessons: [
        "Composing a front-hand layout",
        "Finger tip and border detailing",
        "Practice: full front-hand design",
      ],
    },
    {
      title: "Back Hand Designs",
      lessons: [
        "Wrist-to-finger flow",
        "Working around knuckles",
        "Practice: full back-hand design",
      ],
    },
    {
      title: "Bridal Mehndi Basics",
      lessons: [
        "Planning a bridal composition",
        "Portraits and storytelling elements",
        "Timing yourself for a bridal booking",
      ],
    },
    {
      title: "Advanced Designs",
      lessons: [
        "Mixing Arabic and Indian styles",
        "Shading and 3D-style fill",
        "Signature style development",
      ],
    },
    {
      title: "Practice & Design Composition",
      lessons: [
        "Balancing empty and filled space",
        "Fixing common mistakes",
        "Building a personal design library",
      ],
    },
    {
      title: "Starting Your Mehndi Business",
      lessons: [
        "Pricing your first bookings",
        "Building a portfolio that sells",
        "Finding and keeping clients",
      ],
    },
  ],

  whatYouWillLearn: [
    "Mehndi Basics",
    "How to Hold a Mehndi Cone",
    "Basic Lines & Shapes",
    "Arabic Mehndi Designs",
    "Indian Mehndi Designs",
    "Bridal Mehndi Basics",
    "Floral Patterns",
    "Mandala Designs",
    "Finger Designs",
    "Back Hand Designs",
    "Front Hand Designs",
    "Practice Techniques",
    "Design Composition",
    "Tips for Faster Designing",
    "Client Work Basics",
    "Mehndi Business Basics",
  ],

  journey: [
    { step: "Learn the Basics", detail: "Get comfortable holding the cone and drawing clean lines." },
    { step: "Master Basic Patterns", detail: "Build a toolkit of dots, petals, leaves and fillers." },
    { step: "Learn Different Design Styles", detail: "Explore Arabic, Indian and mandala design language." },
    { step: "Practice Complete Hand Designs", detail: "Put it together into full front and back hand pieces." },
    { step: "Learn Bridal Designs", detail: "Compose larger, detailed bridal-ready designs." },
    { step: "Build Confidence & Start Taking Clients", detail: "Price, present and book your first paid work." },
  ],

  whoItsFor: [
    "Complete beginners",
    "Students looking for a creative skill",
    "Home-based Mehndi artists",
    "Anyone wanting to start a Mehndi business",
    "Aspiring bridal Mehndi artists",
    "Anyone who simply loves Mehndi art",
  ],

  testimonials: [
    {
      name: "Priya Sharma",
      photo: "/testimonials/priya.jpg",
      rating: 5,
      text: "Before this course I could only draw basic dots and lines. The step-by-step lessons helped me build real confidence in a few weeks.",
    },
    {
      name: "Fatima Khan",
      photo: "/testimonials/fatima khan.png",
      rating: 5,
      text: "I started taking small bookings from friends after Module 9. The bridal section alone was worth the price.",
    },
    {
      name: "Neha Verma",
      photo: "/testimonials/Neha verma.png",
      rating: 5,
      text: "I loved how each lesson built on the last one. Nothing felt rushed and I could always go back and rewatch.",
    },
    {
      name: "Ayesha Siddiqui",
      photo: "/testimonials/ayesha.jpg",
      rating: 4,
      text: "The Arabic Mehndi module completely changed how I compose a design. Simple explanations, beautiful results.",
    },
    {
      name: "Ritu Malhotra",
      photo: "/testimonials/ritu.jpg",
      rating: 5,
      text: "I run a small home business now thanks to the business basics module. It's the part most courses skip entirely.",
    },
  ],

  faqs: [
    {
      q: "Is this course suitable for beginners?",
      a: "Yes. The course starts from the very basics — how to hold a cone and draw your first lines — before moving into more advanced designs.",
    },
    {
      q: "Do I need previous Mehndi experience?",
      a: "No previous experience is required. Everything is explained step by step, from the ground up.",
    },
    {
      q: "Is the course online?",
      a: "Yes, the entire course is delivered online so you can learn from anywhere, at your own pace.",
    },
    {
      q: "How long will I have access to the course?",
      a: "Once enrolled, you get lifetime access to all lessons, including any future updates.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, you'll receive a certificate of completion once you finish all the modules.",
    },
    {
      q: "Do I need special materials?",
      a: "Just a few Mehndi cones and practice paper are enough to get started — we'll show you exactly what to buy.",
    },
    {
      q: "Can I learn bridal Mehndi through this course?",
      a: "Yes, an entire module is dedicated to bridal Mehndi basics and composition.",
    },
    {
      q: "Can I use these skills professionally?",
      a: "Absolutely. The final module walks you through pricing, portfolios and finding your first clients.",
    },
    {
      q: "Is there any support available?",
      a: "Yes, you can reach out to your instructor directly with questions as you go through the course.",
    },
    {
      q: "How can I enroll?",
      a: "Tap any \"Enroll Now\" button on the site to go to the enrollment page and complete your payment.",
    },
  ],

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Course", href: "/course" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  footerQuickLinks: [
    { label: "Home", href: "/" },
    { label: "Course", href: "/course" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],

  footerLegalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export type SiteConfig = typeof siteConfig;
