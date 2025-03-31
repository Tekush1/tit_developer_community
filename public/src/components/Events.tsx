import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

export const Events = () => {
  const events = [
    {
      title: "Web Development Bootcamp",
      date: "April 2, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "TIT (excellence6), Main Campus",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      attendees: 45
    },
    {
      title: "AI/ML Workshop Series",
      date: "April 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      attendees: 30
    },
    {
      title: "Hackathon 2025",
      date: "May 1-2, 2024",
      time: "48 Hours",
      location: "Main Auditorium",
      category: "Competition",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      attendees: 120
    }
  ];

  return (
    <section id="events" className="py-24 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our workshops, hackathons, and tech talks to enhance your skills 
            and connect with fellow developers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="glass-effect rounded-xl overflow-hidden hover-scale">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-primary text-dark-300 rounded-full font-medium">
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{event.title}</h3>
                
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-dark-100 text-primary hover:bg-dark-300 py-3 rounded-lg font-medium transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#calendar"
            className="inline-flex items-center bg-dark-100 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dark-300 transition-colors"
          >
            View Full Calendar
          </a>
        </div>
      </div>
    </section>
  );
};