import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Brain, Shield, Rocket, MousePointer, Users, Trophy, Laptop, GraduationCap, Star, Target, Award, BookOpen, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ParticleBackground } from './ParticleBackground';
import { TechStack } from './TechStack';
import { FloatingCube } from './FloatingCube';
import { DynamicText } from './DynamicText';
import { CountUp } from './CountUp';

export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80",
      title: "Code Together, Grow Together",
      description: "Join our collaborative coding sessions and workshops"
    },
    {
      image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80",
      title: "Learn from the Best",
      description: "Get mentored by industry-experienced seniors"
    },
    {
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80",
      title: "Build the Future",
      description: "Work on real projects that matter"
    }
  ];

  const impactStats = [
    {
      icon: <Target className="w-12 h-12" />,
      value: 90,
      suffix: "%",
      label: "ATS-Friendly Resumes",
      description: "Successfully crafted and optimized"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      value: 15,
      suffix: "+",
      label: "ML Engineers Trained",
      description: "Mastering AI & Data Science"
    },
    {
      icon: <Code className="w-12 h-12" />,
      value: 20,
      suffix: "+",
      label: "App Developers",
      description: "Building the future of tech"
    },
    {
      icon: <Award className="w-12 h-12" />,
      value: 100,
      suffix: "%",
      label: "Success Rate",
      description: "In placement assistance"
    }
  ];

  const additionalStats = [
    {
      icon: <Users className="w-12 h-12" />,
      value: 500,
      suffix: "+",
      label: "Active Members",
      description: "Growing community of developers"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      value: 50,
      suffix: "+",
      label: "Events Conducted",
      description: "Workshops & hackathons"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      value: 30,
      suffix: "+",
      label: "Learning Paths",
      description: "Structured career guidance"
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      value: 200,
      suffix: "+",
      label: "Projects Completed",
      description: "Real-world applications"
    }
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Master modern web technologies and frameworks"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Dive into AI and data science fundamentals"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Learn ethical hacking and security practices"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Career Growth",
      description: "Get mentored by industry experts"
    }
  ];

  const dynamicTexts = [
    "Innovate",
    "Create",
    "Transform",
    "Lead"
  ];

  const testimonials = [
    {
      name: "aniket patel",
      role: "Full stack web devloper & cyber security",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGAK8JKw_UnkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700471847726?e=1749081600&v=beta&t=GUym3n89ZK6oFJ8rxeFSbZzkvONqFH5jE6WKhBRw2g8",
      quote: "The mentorship I received here was invaluable. The hands-on projects and guidance from seniors helped me land my dream job.",
      rating: 5
    },
    {
      name: "Anand soni ",
      role: "Machine learning Engineer at accenters /11+ company offers  ",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFtoOYzAphO-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712473487552?e=1749081600&v=beta&t=R8vvirrSbVRK7HJrS1VqHk8ch0_3d7b6GyCSCvIf2No",
      quote: "This communaity transformed my understanding of machine learning. The practical experience was far beyond what I learned in regular classes.",
      rating: 5
    },
    {
      name: "Aniket kumar",
      role: "Full Stack Developer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQElptBKx-H7Jw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696008326446?e=1749081600&v=beta&t=EN55SsKTEzWdjp1Oq8qf9P5OrZ5iFkKqaEbIFhsMgy0",
      quote: "From a complete beginner to a confident developer, this community guided me through every step. The peer support is amazing!",
      rating: 5
    }
  ];

  return (
    <section id="home" className="relative">
      {/* Luxurious Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-dark-300 to-dark-300" />
          <ParticleBackground />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            style={{ y, opacity }}
            className="text-center lg:text-left lg:flex items-center justify-between gap-12"
          >
            {/* Left Content */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30" />
                <h1 className="relative text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Empowering Juniors,{' '}
                  <span className="gradient-text">Led by</span>
                  <br />
                  <DynamicText texts={["Innovators", "Creators", "Leaders", "Mentors"]} />
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              >
                Join the revolution! Build real-world projects, learn from experienced mentors, 
                and become part of a thriving tech community.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#join"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden px-8 py-4 rounded-lg font-semibold text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-105" />
                  <span className="relative z-10 text-dark-300">Join Our Community</span>
                  <ArrowRight className="relative z-10 inline-block ml-2" />
                </motion.a>

                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden px-8 py-4 rounded-lg font-semibold text-lg border border-primary/30"
                >
                  <div className="absolute inset-0 bg-primary/10 transition-opacity duration-300 group-hover:opacity-20" />
                  <span className="relative z-10 text-white">Learn More</span>
                  <MousePointer className="relative z-10 inline-block ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Content - 3D Animation */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="lg:w-1/2 mt-12 lg:mt-0"
              >
                <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                  <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <FloatingCube />
                  </Canvas>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-primary cursor-pointer"
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wall of Impact Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-300 via-dark-200 to-dark-300 opacity-50" />
        <ParticleBackground />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming careers and building the next generation of tech leaders
            </p>
          </motion.div>

          {/* Primary Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                  <div className="relative text-primary flex justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-semibold text-primary mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-400">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats with Horizontal Scroll on Mobile */}
          <div className="overflow-x-auto pb-6 -mx-4 sm:mx-0 sm:overflow-x-visible">
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0 min-w-max sm:min-w-0">
              {additionalStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-72 sm:w-auto glass-effect rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-primary mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                  </div>
                  <div className="text-lg font-semibold text-primary mb-2">
                    {stat.label}
                  </div>
                  <p className="text-gray-400">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="#join"
              className="inline-flex items-center bg-primary text-dark-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105"
            >
              Join Our Success Story
              <ArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Features Section */}
      <div className="bg-dark-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4"
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-base md:text-lg px-4"
            >
              Comprehensive learning paths tailored for your success
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              Hear from our alumni who have transformed their careers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect rounded-xl p-6 hover-scale"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-primary">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-24 bg-dark-300 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <ParticleBackground />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Join our community of passionate developers and start building your future today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <a
                href="#join"
                className="group inline-flex items-center bg-primary text-dark-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors relative overflow-hidden"
              >
                Join Our Community
                <ArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
};