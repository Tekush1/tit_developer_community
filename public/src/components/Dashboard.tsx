import React from 'react';
import { Activity, Award, Book, Calendar, Code, Star, Trophy, Users } from 'lucide-react';

export const Dashboard = () => {
  const stats = [
    { icon: <Trophy size={24} />, label: 'Achievements', value: '12' },
    { icon: <Code size={24} />, label: 'Projects', value: '8' },
    { icon: <Activity size={24} />, label: 'Activity Score', value: '92%' },
    { icon: <Users size={24} />, label: 'Mentees', value: '5' },
  ];

  const upcomingEvents = [
    { title: 'Web Dev Workshop', date: 'March 20, 2024', type: 'Workshop' },
    { title: 'Code Review Session', date: 'March 22, 2024', type: 'Meeting' },
    { title: 'Hackathon Prep', date: 'March 25, 2024', type: 'Event' },
  ];

  const achievements = [
    { icon: <Star size={20} />, title: 'Top Contributor', date: 'March 2024' },
    { icon: <Award size={20} />, title: 'Best Project', date: 'February 2024' },
    { icon: <Book size={20} />, title: 'Learning Milestone', date: 'January 2024' },
  ];

  return (
    <section id="dashboard" className="py-24 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold gradient-text mb-2">Dashboard</h2>
          <p className="text-gray-400">Track your progress and achievements</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary">{stat.icon}</div>
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <h3 className="text-gray-300">{stat.label}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Events */}
          <div className="glass-effect rounded-xl p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar size={20} className="text-primary mr-2" />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-dark-100 rounded-lg">
                  <div>
                    <h4 className="font-medium text-white">{event.title}</h4>
                    <p className="text-sm text-gray-400">{event.date}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Trophy size={20} className="text-primary mr-2" />
              Recent Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-dark-100 rounded-lg">
                  <div className="text-primary">{achievement.icon}</div>
                  <div>
                    <h4 className="font-medium text-white">{achievement.title}</h4>
                    <p className="text-sm text-gray-400">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};