import React, { useState } from 'react';
import { Github,Linkedin, Mail, Search, Filter, BookOpen, Code, Brain, Star, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const Mentors = () => {
  const [selectedExpertise, setSelectedExpertise] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const mentors = [
    {
      name: "Kushagra Dwivedi ",
      role: "Security Specialist",
      expertise: ["Cybersecurity", "Ethical Hacking", "DevSecOps"],
      experience: "10+ years",
      availability: "Flexible Hours",
      rating: 5,
      reviews: 156,
      image: "https://media.licdn.com/dms/image/v2/D4E03AQG5-iwtXiZvTg/profile-displayphoto-shrink_200_200/B4EZRxNdDQHgAY-/0/1737066140641?e=1749081600&v=beta&t=v26GwFkJnyXJSIIErvgomspWYCHYPpTR0omnNxaoeM4",
      bio: "Rank 3 all over India guild leader of Team Evil.",
      achievements: ["SIH finalist 2024 as a Team leader", "CTF Nationl player" , "BPS 2022 State winnder"],
      socials: {
        github: "",
        linkedin: "https://www.linkedin.com/in/kushagra-dwivedi-0342062b8/",
        email: "kushdwivedikd@gmail.com"
      }
    },
    {
      name: "Anand soni",
      role: "Senior Full Stack Developer",
      expertise: ["Web Development", "React", "Node.js"],
      experience: "8+ years",
      availability: "Evenings & Weekends",
      rating: 4.9,
      reviews: 124,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFtoOYzAphO-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712473487552?e=1749081600&v=beta&t=R8vvirrSbVRK7HJrS1VqHk8ch0_3d7b6GyCSCvIf2No",
      bio: "Passionate about helping juniors master full-stack development. Specialized in React and Node.js ecosystems.",
      achievements: ["Google Developer Expert", "100+ Students Mentored"],
      socials: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/anandsoni992/",
        email: "mailto:alex@example.com"
      }
    },
    {
      name: "Prakhar srivastav",
      role: "Security Specialist",
      expertise: ["Cybersecurity", "Ethical Hacking", "web developer"],
      experience: "10+ years",
      availability: "Flexible Hours",
      rating: 5,
      reviews: 156,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHslmGH_WiX6w/profile-displayphoto-shrink_100_100/B4DZPBifRWHQAU-/0/1734118865331?e=1749081600&v=beta&t=Cw2HX7RMlAqSV7i5L_ru0SzrkL5d3ENlUBWtl0Fe1mo",
      bio: "icy bear naam toh suna hoga ",
      achievements: ["SIH finalist 2024 as a Team leader", "10+ market project" , "tech lead"],
      socials: {
        github: "",
        linkedin: "",
        email: "Prakhar.aka@gmail.com"
      }
    },
    {
      name: "Aman mishra",
      role: "ML Engineer",
      expertise: ["Machine Learning", "Python", "Data Science"],
      experience: "6+ years",
      availability: "Weekdays",
      rating: 4.8,
      reviews: 98,
      image: "https://media.licdn.com/dms/image/v2/D4E03AQF9s41k2eFXQA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688059359913?e=1749081600&v=beta&t=wjU_lNMCOwm9eNUehz_IQK02LbZCJ70vTY8TuqyXBM4",
      bio: "AI/ML expert focused on practical applications. Love teaching complex concepts in simple ways.",
      achievements: ["AWS ML Specialist", "Published ML Researcher","SIH FINALIST 2024 "],
      socials: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/aman-mishra-116b63280/",
        email: "mailto:sarah@example.com"
      }
    },
   
    {
      name: "Aniket kumar",
      role: "ML Engineer",
      expertise: ["Machine Learning", "Python", "Data Science"],
      experience: "6+ years",
      availability: "Weekdays",
      rating: 4.8,
      reviews: 98,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQElptBKx-H7Jw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696008326446?e=1749081600&v=beta&t=EN55SsKTEzWdjp1Oq8qf9P5OrZ5iFkKqaEbIFhsMgy0",
      bio: "AI/ML expert focused on practical applications. Love teaching complex concepts in simple ways.",
      achievements: ["AWS ML Specialist", "Published ML Researcher"],
      socials: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/ankitkumar0905/",
        email: "@gmail.com"
      }
    },
    {
      name: "aniket patel",
      role: "Security Specialist",
      expertise: ["Cybersecurity", "Ethical Hacking", "DevSecOps"],
      experience: "10+ years",
      availability: "Flexible Hours",
      rating: 4.9,
      reviews: 156,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGAK8JKw_UnkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700471847726?e=1749081600&v=beta&t=GUym3n89ZK6oFJ8rxeFSbZzkvONqFH5jE6WKhBRw2g8",
      bio: "CISSP certified security expert. Dedicated to teaching secure coding practices and ethical hacking.",
      achievements: ["CISSP Certified", "Security Conference Speaker"],
      socials: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/ankit-patel-563b9927b/",
        email: "mailto:michael@example.com"
      }
    }
    
  ];

  const expertiseCategories = [
    { id: 'all', label: 'All Categories', icon: <Filter /> },
    { id: 'Web Development', label: 'Web Development', icon: <Code /> },
    { id: 'Machine Learning', label: 'Machine Learning', icon: <Brain /> },
    { id: 'Product Management', label: 'Product Management', icon: <BookOpen /> }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesExpertise = selectedExpertise === 'all' || mentor.expertise.includes(selectedExpertise);
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesExpertise && matchesSearch;
  });

  return (
    <section className="py-24 bg-dark-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            Learn from Industry Experts
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Connect with experienced mentors who are passionate about helping you succeed in your tech journey.
          </motion.p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, role, or expertise..."
                className="w-full bg-dark-100 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {expertiseCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedExpertise(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    selectedExpertise === category.id
                      ? 'bg-primary text-dark-300'
                      : 'bg-dark-100 text-gray-300 hover:bg-dark-200'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden hover-scale"
            >
              {/* Mentor Card Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start gap-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{mentor.name}</h3>
                    <p className="text-primary">{mentor.role}</p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-primary fill-current" />
                      <span className="ml-1 text-white">{mentor.rating}</span>
                      <span className="ml-1 text-gray-400">({mentor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-100 text-primary rounded-full text-sm"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="px-6 pb-4">
                <p className="text-gray-300 text-sm">{mentor.bio}</p>
              </div>

              {/* Experience & Availability */}
              <div className="px-6 pb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 text-primary mr-2" />
                    <span className="text-gray-300">{mentor.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-primary mr-2" />
                    <span className="text-gray-300">{mentor.availability}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="px-6 pb-4">
                <div className="space-y-2">
                  {mentor.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links & CTA */}
              <div className="px-6 py-4 bg-dark-100 flex items-center justify-between">
                <div className="flex space-x-4">
                  <a href={mentor.socials.github} className="text-gray-400 hover:text-primary">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={mentor.socials.linkedin} className="text-gray-400 hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={mentor.socials.email} className="text-gray-400 hover:text-primary">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <button className="bg-primary text-dark-300 px-4 py-2 rounded-lg font-medium hover:bg-secondary transition-colors">
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a Mentor CTA */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to Share Your Knowledge?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our community of mentors and help shape the next generation of tech leaders.
              Share your expertise and make a lasting impact.
            </p>
            <button className="bg-primary text-dark-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors">
              Become a Mentor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};