import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To empower the next generation of tech leaders through mentorship and hands-on learning"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a supportive network of passionate developers and innovators"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Fostering creativity and cutting-edge technological solutions"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do"
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">About Us</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a community-driven initiative focused on bridging the gap between academic learning 
            and industry requirements through peer-to-peer mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="glass-effect rounded-xl p-8 text-center hover-scale">
              <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="./src/public/publics/images/Slide2.JPG"
              alt="Team collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded by passionate tech enthusiasts, TIT Developer Community has grown from a small 
                study group to a thriving ecosystem of learners and mentors.
              </p>
              <p>
                We believe in the power of peer-to-peer learning and practical experience. Our community 
                members don't just learn to code; they build real projects, solve actual problems, and 
                develop essential industry skills.
              </p>
              <p>
                Through our structured mentorship program, workshops, and hands-on projects, we're 
                creating the next generation of tech leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};