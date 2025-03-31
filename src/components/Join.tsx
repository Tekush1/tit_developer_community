import React from 'react';
import { Trophy, Calendar, Users, ArrowRight } from 'lucide-react';

export const Join = () => {
  const registrationSteps = [
    'Fill out the registration form',
    'Complete Round 1: MCQ Challenge',
    'Qualify for Round 2: Coding Challenge',
    'Join the Community (Selected candidates)',
  ];

  const importantDates = [
    { event: 'Registration Opens', date: 'March 15, 2024' },
    { event: 'Round 1: MCQ Challenge', date: 'March 25, 2024' },
    { event: 'Round 2: Coding Challenge', date: 'April 5, 2024' },
    { event: 'Results & Community Induction', date: 'April 15, 2024' },
  ];

  return (
    <section id="join" className="py-24 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Take part in our selection process and become a member of our elite developer community.
          </p>
        </div>

        {/* Coding Quest Section */}
        <div className="glass-effect rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Coding Quest 2024</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Competition Format</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Round 1: MCQ Challenge</p>
                    <p className="text-gray-400">Technical MCQs via TIT-developed app</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Round 2: Coding Challenge</p>
                    <p className="text-gray-400">Live coding on Unstop platform</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Statistics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect p-4 rounded-lg">
                  <Users className="w-6 h-6 text-primary mb-2" />
                  <p className="font-bold text-2xl text-white">200+</p>
                  <p className="text-gray-400">Participants</p>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <Trophy className="w-6 h-6 text-primary mb-2" />
                  <p className="font-bold text-2xl text-white">₹1000</p>
                  <p className="text-gray-400">Category Prize</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Steps */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-4">Registration Guide</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-white mb-2">Steps to Join</h5>
                <ul className="space-y-3">
                  {registrationSteps.map((step, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-sm font-medium">{index + 1}</span>
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-white mb-2">Eligibility</h5>
                <p className="text-gray-400 mb-4">Open to all students from 1st to 4th year</p>
                
                <h5 className="font-medium text-white mb-2">Important Dates</h5>
                <div className="space-y-2">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-gray-400">{item.event}:</span>
                      <span className="text-gray-300">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="#register"
              className="inline-flex items-center bg-primary text-dark-300 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Hackathon & Recruitment */}
        <div className="glass-effect rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Hackathon & Community Recruitment</h3>
          <p className="text-lg text-gray-300 mb-6">
            titrmers from Coding Quest get exclusive invitations to join our annual hackathon.
            Exceptional candidates will be inducted into the TIT Developer Community.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-dark-100 text-primary hover:bg-dark-300 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
       {/* Footer */}
       <footer className="bg-dark-200 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold gradient-text">TIT Developer Community</h3>
              <p className="text-gray-400">Empowering the next generation of tech leaders through mentorship and hands-on learning.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-primary">About Us</a></li>
                <li><a href="#events" className="text-gray-400 hover:text-primary">Events</a></li>
                <li><a href="#mentors" className="text-gray-400 hover:text-primary">Mentors</a></li>
                <li><a href="#join" className="text-gray-400 hover:text-primary">Join Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-gray-400 hover:text-primary">Blog</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-primary">Projects</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-primary">FAQ</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#linkedin" className="text-gray-400 hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#github" className="text-gray-400 hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#twitter" className="text-gray-400 hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
              <div className="mt-4">
                <p className="text-gray-400">Email: contact@titdev.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};