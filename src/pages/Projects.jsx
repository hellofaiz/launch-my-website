import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/shared/Section';
import SectionTitle from '../components/shared/SectionTitle';

const projects = [
  {
    id: 1,
    title: "Faiz International NGO",
    category: "Web Development",
    description: "A comprehensive NGO website for Faiz International, featuring donation management, volunteer coordination, and community outreach programs.",
    images: [
      '../assets/ngo-1.png',
      '../assets/ngo-2.png',
      '../assets/ngo-3.png'
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://faiz-international.netlify.app/"
  },
  {
    id: 2,
    title: "Luixen - Print On Demand",
    category: "Web Development",
    description: "E-commerce platform specializing in custom print-on-demand products with automated order fulfillment and design customization.",
    images: [
      '../assets/luixen-1.png',
      '../assets/luixen-2.png',
      '../assets/luixen-3.png'
    ],
    technologies: ["Next.js", "Stripe", "Printful API", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://www.luixen.shop/"
  },
  {
    id: 3,
    title: "Varanasi Event Planner",
    category: "Web Development",
    description: "Professional event planning website for Varanasi, offering wedding planning, corporate events, and cultural celebrations with booking system.",
    images: [
      '../assets/varanasi-event-planner.png',
      'best-event-planner-in-varanasi.png',
      'event-planner-in-banaras.png'
    ],
    technologies: ["React", "Express.js", "MongoDB", "Calendar API", "Payment Gateway"],
    liveUrl: "https://www.varanasieventplanner.com/"
  },
  {
    id: 4,
    title: "Clear Background - SAAS",
    category: "Web Development",
    description: "AI-powered background removal SaaS platform offering automated image processing, bulk operations, and API integration for developers.",
    images: [
      '../assets/clear-background.png',
      '../assets/clear-background-1.png'
    ],
    technologies: ["Next.js", "Python", "AI/ML", "AWS", "Stripe", "REST API"],
    liveUrl: "https://www.clear-background.com/"
  },
  {
    id: 5,
    title: "Mainflow - IT Solutions",
    category: "Web Development",
    description: "Comprehensive IT solutions provider offering web development, software consulting, and digital transformation services for businesses.",
    images: [
      '../assets/mainflow-1.png',
      '../assets/mainflow-2.png'
    ],
    technologies: ["React", "Node.js", "Cloud Services", "DevOps", "UI/UX Design"],
    liveUrl: "https://www.mainflow.in/"
  },
  {
    id: 6,
    title: "Jalsa Dance Classes",
    category: "Web Development",
    description: "Professional dance education platform offering various dance styles including classical, contemporary, and cultural dance forms with online and offline classes.",
    images: [
      '../assets/jalsa.png',
      '../assets/jalsa-2.png',
      '../assets/jalsa-3.png'
    ],
    technologies: ["React", "Express.js", "Video Streaming", "Payment Integration", "Responsive Design"],
    liveUrl: "https://www.jalsadanceclass.com/"
  },
  {
    id: 7,
    title: "Patronics - Finance Solutions",
    category: "Web Development",
    description: "Modern financial services platform providing investment management, financial planning, and wealth management solutions with advanced analytics.",
    images: [
      '../assets/patronics.png',
      '../assets/patronics-1.png',
      '../assets/patronics-2.png'
    ],
    technologies: ["React", "Python", "Financial APIs", "Data Analytics", "Security", "Real-time Updates"],
    liveUrl: "https://www.patronics.in/"
  },
  {
    id: 8,
    title: "7 Even Cosmetics",
    category: "Web Development",
    description: "Premium cosmetics e-commerce platform featuring luxury beauty products, skincare solutions, and makeup collections with personalized recommendations.",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    technologies: ["Next.js", "E-commerce", "Payment Gateway", "Product Catalog", "User Authentication", "Mobile App"],
    liveUrl: "https://www.7evencosmetics.com/"
  },
  {
    id: 9,
    title: "FosterX",
    category: "Web Development",
    description: "Its social media marketting platform for the brands and the influencers. Where the brands can find the influencers and the influencers can find the brands.",
    images: [
      '../assets/fosterx.png',
    ],
    liveUrl: "https://www.fosterx.co"
  },
  {
    id: 10,
    title: "XpressNest",
    category: "Web Development",
    description: "Its a food delivery platform for the restaurants and the customers. Where the restaurants can deliver the food to the customers.",
    images: [
      // image related to the food delivery platform from unsplash    
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    liveUrl: "https://www.xpressnest.com"
  },
  {
    id: 11,
    title: "FitnessHub",
    category: "Web Development",
    description: "Its a fitness platform for the users. Where the users can find the fitness trainers and the fitness trainers can find the users.",
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    liveUrl: "https://www.fitnesshub.com"
  },
  {
    id: 12,
    title: "Travel",
    category: "Web Development",
    description: "Its a travel platform for the users. Where the users can find the travel trainers and the travel trainers can find the users.",
    images: ['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    liveUrl: "https://www.travelhub.com"
  }

];


const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Keyboard navigation for carousel
  const handleKeyDown = (e, project) => {
    if (project.images.length <= 1) return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const currentIdx = currentImageIndex[project.id] || 0;
      const nextIdx = currentIdx === 0 ? project.images.length - 1 : currentIdx - 1;
      setCurrentImageIndex(prev => ({
        ...prev,
        [project.id]: nextIdx
      }));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const currentIdx = currentImageIndex[project.id] || 0;
      const nextIdx = currentIdx === project.images.length - 1 ? 0 : currentIdx + 1;
      setCurrentImageIndex(prev => ({
        ...prev,
        [project.id]: nextIdx
      }));
    }
  };

  return (
    <>
      <head>
        <title>Portfolio & Case Studies | Web Development & Design Projects</title>
        <meta
          name="description"
          content="Explore our portfolio of successful web development, mobile app, and UI/UX design projects. See how we deliver value through innovative digital solutions."
        />
      </head>
      <div>
        {/* Hero Section */}
        <Section className="text-center">
          <SectionTitle
            title="Our Success Stories"
            subtitle="Discover how we've helped businesses achieve their digital goals with innovative solutions and measurable results."
            centered
          />


          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {projects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  // className="group relative focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 rounded-xl"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onKeyDown={(e) => handleKeyDown(e, project)}
                  tabIndex={project.images.length > 1 ? 0 : -1}
                  role={project.images.length > 1 ? "button" : undefined}
                  aria-label={project.images.length > 1 ? `Navigate ${project.title} images with arrow keys` : undefined}
                >
                  <div className="overflow-hidden rounded-xl bg-background-light border border-secondary-lighter shadow-lg hover:shadow-xl transition-all duration-500">
                    {/* Image/Carousel Section */}
                    <div className="relative w-full aspect-video overflow-hidden group rounded-t-xl">
                      <img
                        src={project.images[currentImageIndex[project.id] || 0]}
                        alt={`${project.title} - ${project.category} Project`}
                        className="w-full h-full object-cover"
                      />
                      {/* Carousel Controls - Always visible on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Previous Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const currentIdx = currentImageIndex[project.id] || 0;
                            const nextIdx = currentIdx === 0 ? project.images.length - 1 : currentIdx - 1;
                            setCurrentImageIndex(prev => ({
                              ...prev,
                              [project.id]: nextIdx
                            }));
                          }}
                          disabled={project.images.length <= 1}
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 shadow-lg z-20 ${project.images.length > 1
                            ? 'hover:bg-black/80 hover:scale-110 cursor-pointer'
                            : 'opacity-0 cursor-not-allowed'
                            }`}
                          aria-label="Previous image"
                        >
                          ‹
                        </button>
                        {/* Next Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const currentIdx = currentImageIndex[project.id] || 0;
                            const nextIdx = currentIdx === project.images.length - 1 ? 0 : currentIdx + 1;
                            setCurrentImageIndex(prev => ({
                              ...prev,
                              [project.id]: nextIdx
                            }));
                          }}
                          disabled={project.images.length <= 1}
                          className={`absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 shadow-lg z-20 ${project.images.length > 1
                            ? 'hover:bg-black/80 hover:scale-110 cursor-pointer'
                            : 'opacity-0 cursor-not-allowed'
                            }`}
                          aria-label="Next image"
                        >
                          ›
                        </button>
                        {/* Dot Indicators - Only show for multiple images */}
                        {project.images.length > 1 && (
                          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                            {project.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(prev => ({
                                    ...prev,
                                    [project.id]: idx
                                  }));
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${(currentImageIndex[project.id] || 0) === idx
                                  ? 'bg-white shadow-lg scale-110'
                                  : 'bg-white/50 hover:bg-white/70 hover:scale-105'
                                  }`}
                                aria-label={`Go to image ${idx + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-900">
                        {project.title}
                      </h3>

                      <p className="text-gray-700 dark:text-gray-700 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {project.liveUrl ? (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary w-full text-center block"
                        >
                          View Live Project
                        </motion.a>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary w-full"
                        >
                          View Case Study
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Section>

      </div>
    </>
  );
};

export default Projects; 