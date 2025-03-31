import React, { useState } from 'react';
import { Bell, Settings, User, Shield, Key, Moon, Sun, Globe, Mail } from 'lucide-react';

export const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  const notifications = [
    {
      id: 1,
      title: "New Workshop Available",
      description: "Web Development Bootcamp starting next week",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      title: "Project Review",
      description: "Your project has been reviewed by mentor Alex",
      time: "1 day ago",
      unread: false
    },
    {
      id: 3,
      title: "Achievement Unlocked",
      description: "Completed 5 consecutive coding challenges",
      time: "2 days ago",
      unread: false
    }
  ];

  return (
    <section id="profile" className="py-24 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-effect rounded-xl p-8">
          {/* Profile Header */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-primary text-dark-300 p-2 rounded-full">
                <User size={16} />
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">John Developer</h2>
              <p className="text-primary">Full Stack Developer</p>
              <p className="text-gray-400">Member since March 2024</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-4 mb-8 border-b border-gray-700">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'profile'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Profile Settings
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'notifications'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'security'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Security
            </button>
          </div>

          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark-100 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                    defaultValue="John Developer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-dark-100 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                    defaultValue="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Bio
                  </label>
                  <textarea
                    className="w-full bg-dark-100 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                    rows={4}
                    defaultValue="Passionate developer interested in web technologies and AI."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Skills
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark-100 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                    defaultValue="React, Node.js, Python, TypeScript"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-primary text-dark-300 px-6 py-2 rounded-lg font-medium hover:bg-secondary transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg ${
                      notification.unread ? 'bg-dark-100' : 'bg-dark-200'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-white font-medium">{notification.title}</h4>
                        <p className="text-gray-400">{notification.description}</p>
                        <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                      </div>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button className="text-primary hover:text-secondary transition-colors">
                  Mark all as read
                </button>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-dark-100 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Key className="text-primary" />
                    <div>
                      <h4 className="text-white font-medium">Password</h4>
                      <p className="text-gray-400">Change your password</p>
                    </div>
                  </div>
                  <button className="text-primary hover:text-secondary transition-colors">
                    Update
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-dark-100 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-primary" />
                    <div>
                      <h4 className="text-white font-medium">Two-Factor Authentication</h4>
                      <p className="text-gray-400">Add extra security to your account</p>
                    </div>
                  </div>
                  <button className="text-primary hover:text-secondary transition-colors">
                    Enable
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-dark-100 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Globe className="text-primary" />
                    <div>
                      <h4 className="text-white font-medium">Active Sessions</h4>
                      <p className="text-gray-400">Manage your active sessions</p>
                    </div>
                  </div>
                  <button className="text-primary hover:text-secondary transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};