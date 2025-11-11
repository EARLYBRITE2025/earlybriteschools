
export interface FeatureCard {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  age?:string
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
  },
  {
    id: 2,
    image: "/images/Frame 18(1).png",
    title: "Global Innovation Trek [GIT]",
    description:
      "A 20-day summer journey across Europe for curious learners who want to see the world differently. Participants learn, explore, and collaborate with innovators and changemakers, turning travel into a living classroom.",
    buttonText: "Learn More",
  },
  {
    id: 3,
    image: "/images/Image_fx - 2025-11-10T124246.747 4.png",
    title: "Immaginarium",
    age:"For Age 2-10",
    description:
      " A play-based learning adventure that nurtures curiosity, creativity, and confidence through hands-on discovery.",
    buttonText: "Learn More",
  },
  {
    id: 4,
    image: "/images/IMG_3913 (1) 1.png",
    title: "Summer School",
    description:
      "A short-term, high-impact learning experience for curious learners.Students explore technology, business, sports, and innovation while learning from mentors and building teamwork skills.",
    buttonText: "Learn More",
  },
];
