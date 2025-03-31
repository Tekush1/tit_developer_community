import React from 'react';
import { Trophy, Star, Award, Medal } from 'lucide-react';
import { image } from 'framer-motion/client';

export const HallOfFame = () => {
  const achievements = [
    {
      category: "UI/UX",
      members: [
        {
          name: "sejal tiwari (2nd Year)",
          achievement: "Most Active Mentor 2024",
          image: "https://media.licdn.com/dms/image/v2/D5603AQE9cN1vVYuFMA/profile-displayphoto-shrink_100_100/B56ZPvBhAIGQAU-/0/1734881988754?e=1749081600&v=beta&t=aHv5-IeBEzRn9__4XDo2loAiCzWc1GvDQBrGa35bUsk",
          stats: "5+ projects, 4+ certification "
        },
        {
          name: "Aryan Sharma (3rd Year)",
          achievement: "Best Android Developer",
          image:"https://media.licdn.com/dms/image/v2/D4D03AQGEY_uH_dqjWQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719082966054?e=1749081600&v=beta&t=jvkHmRtTDSrbaAq4smQBTMVHm-bcNeSE1KWZgKFaKdw",
          stats: "10+ projects ,5+ hackathons, Play Store deployments"
        }
      ]
    },
    {
      category: "Machine learing",
      members: [
        {
          name: "Deepika Deshmukh (2nd Year)",
          achievement: "Best Machine Learning Developer",
          image: "https://media.licdn.com/dms/image/v2/D4D03AQE-DEqXm8hUtA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714599648062?e=1749081600&v=beta&t=vRAV2sViONyRuURal8PEvPlDuY6BYA4DfQrJUE7l6JY",
          stats: "10+ major projects ,5+ hackathons "
        },
        {
          name: "Aman mishra (2nd year)",
          achievement: "SIH finalist 2024 ",
          image: "https://media.licdn.com/dms/image/v2/D4E03AQF9s41k2eFXQA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688059359913?e=1749081600&v=beta&t=wjU_lNMCOwm9eNUehz_IQK02LbZCJ70vTY8TuqyXBM4",
          stats: "10+ projects, SIH finalist 2024"
        }
      ]
    },
    {
      category: "web development",
      members: [
        {
          name: "naman kumar (2nd Year)",
          achievement: "Best Machine Learning Developer",
          image: "https://media.licdn.com/dms/image/v2/D4D03AQHyzcz55f-zcQ/profile-displayphoto-shrink_200_200/B4DZRmOEooG4Ag-/0/1736881753280?e=1749081600&v=beta&t=k0G9lGS1jgElaBjkcyPhoVm96P7xFAbPC4WomZ_yG1c",
          stats: "5+ major projects , 5+ hackathons"
        },
        {
          name: "Prakhar shrivastav (2nd year)",
          achievement: "SIH finalist 2024 ",
          image: "https://media.licdn.com/dms/image/v2/D4D03AQHslmGH_WiX6w/profile-displayphoto-shrink_100_100/B4DZPBifRWHQAU-/0/1734118865331?e=1749081600&v=beta&t=Cw2HX7RMlAqSV7i5L_ru0SzrkL5d3ENlUBWtl0Fe1mo",
          stats: "10+ projects, SIH finalist 2024"
        }
      ]
    },
    {
      category: "Cyber Security",
      members: [
        {
          name: "Akash Kumar (2nd Year)",
          achievement: "diving into blockchain ",
          image: "https://media.licdn.com/dms/image/v2/D4D03AQF8yl9fEXyZWg/profile-displayphoto-shrink_200_200/B4DZQTPxJRGkAc-/0/1735489690283?e=1749081600&v=beta&t=bLFDfQcvrKKqvu5QqS4O1H4G7FMiUEQvG-T8a5O44sw",
          stats: "5+ projects, ATS-optimized resume"
        },
        {
          name: "Mohd Meraaz ",
          achievement: "expert in remote sensing and Iot ",
          image: "https://media.licdn.com/dms/image/v2/D4D35AQGZXIPjfFWL-w/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1697564832741?e=1744045200&v=beta&t=SIgFR96LAGN0_XqncWJ70UtNnjsMGRgCG3BzH6Tj06I",
          stats: "10+ projects, cyber security traine"
        }
      ]
    }
  ];

  const stats = [
    { icon: <Trophy className="w-6 h-6" />, value: "200+", label: "Active Members" },
    { icon: <Star className="w-6 h-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Award className="w-6 h-6" />, value: "30+", label: "Awards Won" },
    { icon: <Medal className="w-6 h-6" />, value: "100%", label: "Success Rate" }
  ];

  return (
    <section id="hall-of-fame" className="py-24 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Hall of Fame</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Celebrating excellence and outstanding achievements in our community.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 text-center hover-scale">
              <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement Categories */}
        {achievements.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">{category.category}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {category.members.map((member, mIndex) => (
                <div key={mIndex} className="glass-effect rounded-xl p-6 hover-scale">
                  <div className="flex items-center space-x-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                      <p className="text-primary">{member.achievement}</p>
                      <p className="text-gray-400 mt-1">{member.stats}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Featured Project Showcase */}
        <div className="glass-effect rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Monthly Spotlight</h3>
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-6">
            <img
              src="./src/public/publics/images/Slide3.JPG"
              alt="Featured project"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-xl font-semibold text-white">AI-Powered Learning Platform</h4>
          <p className="text-gray-400 mt-2">
            An innovative solution that revolutionizes how students learn programming.
          </p>
        </div>
      </div>
    </section>
  );
};