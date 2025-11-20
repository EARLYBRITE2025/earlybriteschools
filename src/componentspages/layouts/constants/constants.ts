
export interface FeatureCard {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  age?:string;
  herf:string
}
export interface ActivityType {
  title: string;
  description: string;
}



export const featureCards: FeatureCard[] = [
  {
    id: 1,
    image: "/images/Frame 18.png", 
    title: "The Elite Mentorship Program [TEMP]",
    age:"For ages 11-24",
    description:
      "A mentorship program that helps young people build digital skills, creativity, and leadership through hands-on projects and guidance from global mentors",
    buttonText: "Learn More",
    herf:"/gap"
  },
  {
    id: 2,
    image: "/images/Frame 18(1).png",
    title: "Global Innovation Trek [GIT]",
    description:
      "A 20-day summer journey across Europe for curious learners who want to see the world differently. Participants learn, explore, and collaborate with innovators and changemakers, turning travel into a living classroom.",
    buttonText: "Learn More",
    herf:"/git"
  },
  {
    id: 3,
    image: "/images/Image_fx - 2025-11-10T124246.747 4.png",
    title: "Immaginarium",
    age:"For Age 2-10",
    description:
      " A play-based learning adventure that nurtures curiosity, creativity, and confidence through hands-on discovery.",
    buttonText:"Learn More" ,
    herf:"/immaginarium"
  },
  {
    id: 4,
    image: "/images/IMG_3913 (1) 1.png",
    title: "Summer School",
    description:
      "A short-term, high-impact learning experience for curious learners.Students explore technology, business, sports, and innovation while learning from mentors and building teamwork skills.",
    buttonText: "Learn More",
    herf:""
  },
];

export const learningHighlights = [
  {
    id: 1,
    icon: "/images/checkmark-circle-01.svg",
    title: "Real mentors, not just instructors",
    
  },
  {
    id: 2,
    icon: "/images/checkmark-circle-01.svg",
    title: "Globally aligned learning standards",
   
  },
  {
    id: 3,
    icon: "/images/checkmark-circle-01.svg",
    title: "A community of dreamers and doers",
   
  },
  {
    id: 4,
    icon: "/images/checkmark-circle-01.svg",
    title: "Opportunities that go beyond the classroom",
   
  },
];




interface FeatureItem {
  icon:string ;
  title: string;
  paragraph: string;
  color?:string
  subParagraph? :string
  list?: string[]
  textcolor? : string
}

export const features: FeatureItem[] = [
  {
    icon:"/images/check.svg",
    title: "Safe and Structured",
    paragraph: "Every part of the journey (travel, accommodation, learning, and leisure) is fully supervised by trained mentors and program coordinators.",
  },
  {
    icon:"/images/scale.svg" ,
    title: "Global Exposure with Purpose",
    paragraph: "Students explore innovation hubs, startups, and cultural landmarks that expand their worldview.",
  },
  {
    icon:"/images/network.svg" ,
    title: "Hands-On Learning",
    paragraph: "Workshops and mini-projects turn every city visit into a real lesson in creativity, problem-solving, and teamwork.",
  },
  {
    icon:"/images/check.svg",
    title: "Lifelong Mentorship",
    paragraph: "Participants receive ongoing guidance through our Elite Mentorship Program (TEMP) even after returning home.",
  },
];

export const activities: ActivityType[] = [
  {
    title: "City Tours",
    description:
      "Guided visits to historic landmarks and hidden gems in each destination.",
  },
  {
    title: "Wellness Sessions",
    description:
      "Daily mindfulness and reflection time to help students stay grounded and refreshed.",
  },
  {
    title: "Sports and Fitness",
    description:
      "Optional morning jogs, friendly football matches, and light workouts to stay active.",
  },
  {
    title: "Cultural Experiences",
    description:
      "Dance classes, local cuisine workshops, and interactive performances.",
  },
];

export const programDetails = [
  {
    title: "Age Range",
    value: "12 years and above",
  },
  {
    title: "Destinations",
    value: "Portugal · Spain · France",
  },
  {
    title: "Dates",
    value: "July - August 2027 (Summer)",
  },
  {
    title: "Eligibility",
    value: "Motivated students with curiosity, creativity, and a passion for growth",
  },
  {
    title: "Duration",
    value: "20 days in Europe + 30 months of guided mentorship",
  },
  {
    title: "Investment",
    value: [
      "$8,500 (All-inclusive)",
      "$6,000 (Excluding TEMP mentorship)"
    ],
  },
];

export const Targets: FeatureItem[] = [
  {
    icon:"/gap-page/mortarboard-01.svg",
    title: "Students (Ages 16-20)",
    color:"#BAE6FC",
    paragraph: "For recent school graduates awaiting admission or visa approval, or those exploring their career paths.",
  },
  {
    icon:"/gap-page/raphael_parent.svg" ,
    title: "Parents",
    color:"#00914780",
    paragraph: "For parents seeking a safe, structured, and purposeful program that keeps their young adults learning, growing, and accountable.",
  },
  {
    icon:"/gap-page/streamline-plump-color_global-learning.svg",
    color:"#FFE5A2",
    title: "Global Learners",
    paragraph: "For students looking to combine mentorship, internship, and international readiness during their gap year.",
  },
];
export const Gapfeatures: FeatureItem[] = [
  {
    icon:"/images/check.svg",
    title: "Safe and Structured",
    paragraph: "Every learner follows a clear, mentored pathway with measurable goals and outcomes.",
  },
  {
    icon:"/images/scale.svg" ,
    title: "Globally Benchmarked",
    paragraph: "Aligned with leading global education frameworks from UNESCO, OECD, and Harvard Life Skills.",
  },
  {
    icon:"/images/network.svg" ,
    title: "Mentorship and Community",
    paragraph: "Participants receive one-on-one guidance from trained mentors and join a supportive peer network.",
  },
  {
    icon:"/images/check.svg",
    title: "Career and Life Clarity",
    paragraph: "By the end of the program, your child gains focus, independence, and readiness for university life.",
  },
];

export const GapProgramme: FeatureItem[] = [
  {
    icon:"/gap-page/game-icons_ages.svg",
    title: "Age Range",
    paragraph: "12-20 years",
    color:"#009147",
    textcolor:"#FFFFFF"
  },
  {
    icon:"/gap-page/material-symbols-light_calendar-month-sharp.svg" ,
    title: "Month 1:",
    paragraph: "Orientation & Core Life Skills Bootcamp",
    subParagraph:"Learners start with a guided foundation program focused on emotional intelligence, communication, and time management.",
  color:"#F9BB1E",
   textcolor:"#000000"

  },
  {
    icon:"/gap-page/material-symbols-light_calendar-month-sharp.svg" ,
    title: "Month 6:",
    paragraph: "Capstone Project & Certification",
      subParagraph:"Each learner completes a personal or community project that showcases their growth and creativity.",
  color:"#F9BB1E",
   textcolor:"#000000"

    },
  {
    icon:"/gap-page/nrk_duration.svg",
    title: "Duration",
    paragraph: "6-12 months (flexible start dates)",
  color:"#009147",
  textcolor:"#FFFFFF"
  },
   {
    icon:"/gap-page/material-symbols-light_calendar-month-sharp.svg" ,
    title: "Months 2-5:",
    paragraph: "Internship Placement + Mentorship Sessions",
      subParagraph:"Students gain real-world exposure through internships, professional projects, and guided reflection sessions.",
    color:"#F9BB1E",
    textcolor:"#000000"
    },
    {
    icon:"/gap-page/ri_focus-line.svg" ,
    title: "Focus Tracks:",
    paragraph: "Orientation & Core Life Skills Bootcamp",
     list:["Business &Entrepreneurship", "STEM & Technology", "Creative & Media", "Community Service & NGO"],
   color:"#F9BB1E"
    },
];

export const LargeGapProgramme: FeatureItem[] = [
  {
    icon:"/gap-page/game-icons_ages.svg",
    title: "Age Range",
    paragraph: "12-20 years",
    color:"#009147",
    textcolor:"#FFFFFF"
  },
   {
    icon:"/gap-page/nrk_duration.svg",
    title: "Duration",
    paragraph: "6-12 months (flexible start dates)",
  color:"#009147",
  textcolor:"#FFFFFF"
  },

  {
    icon:"/gap-page/material-symbols-light_calendar-month-sharp.svg" ,
    title: "Month 1:",
    paragraph: "Orientation & Core Life Skills Bootcamp",
    subParagraph:"Learners start with a guided foundation program focused on emotional intelligence, communication, and time management.",
  color:"#F9BB1E",
   textcolor:"#000000"
  },
   {
    icon:"/gap-page/material-symbols-light_calendar-month-sharp.svg" ,
    title: "Months 2-5:",
    paragraph: "Internship Placement + Mentorship Sessions",
      subParagraph:"Students gain real-world exposure through internships, professional projects, and guided reflection sessions.",
    color:"#F9BB1E",
     textcolor:"#000000"
    },
  {
    icon:"/gap-page/material-symbols-light_calendar-month-sharp.svg" ,
    title: "Month 6:",
    paragraph: "Capstone Project & Certification",
      subParagraph:"Each learner completes a personal or community project that showcases their growth and creativity.",
  color:"#F9BB1E",
   textcolor:"#000000"
    },
 
    {
    icon:"/gap-page/ri_focus-line.svg" ,
    title: "Focus Tracks:",
    paragraph: "Orientation & Core Life Skills Bootcamp",
     list:["Business &Entrepreneurship", "STEM & Technology", "Creative & Media", "Community Service & NGO"],
   color:"#F9BB1E",
    textcolor:"#000000"
    },
];

export const GapFEat = [
  {
    title: "UNESCO Global Citizenship Education",
    paragraph: "Encourages empathy, ethics, and a deeper understanding of global cultures.",
    color:"#FFE5A2"
  },
  {
    title: "OECD Skills for 2030",
    paragraph: "Helps students develop adaptability, collaboration, and creativity for the future of work.",
    color:"#BAE6FC"
  },
  {
    title: "Harvard Life Skills Framework",
    paragraph: "Builds leadership, communication, and emotional intelligence for lifelong growth.",
    color:"#00914780"
  },
  {
    title: "World Economic Forum: Future of Jobs Report",
    paragraph: "Guides our approach to 21st-century employability and the skills young people need to thrive.",
    color:"#FFF0CC"
  },
];







export const GapSponsors = [
  {
    logo: "/gap-page/images (1) 1.svg",
    value: "Corona",
  },
  {
    logo: "/gap-page/54ade2_ca348b46904145039146b7e7c1072d83~mv2 1.svg",
    value: "Bluewater",
  },
  {
    logo: "/gap-page/SBS-LOGO 1.svg",
    value: "Standard Bearers",
  },
  {
    logo: "/gap-page/MATER_ECC_LOGO 1.svg",
    value: "Mater Ecclesiae",
  },
 ,
];

