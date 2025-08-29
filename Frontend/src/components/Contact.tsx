import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/thematrix-club",
      label: "GitHub",
      color: "text-green-400 hover:text-green-300"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/thematrix-club",
      label: "LinkedIn",
      color: "text-cyan-400 hover:text-cyan-300"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/thematrix.club",
      label: "Instagram",
      color: "text-purple-400 hover:text-purple-300"
    },
    {
      icon: Mail,
      href: "mailto:contact@thematrixclub.edu",
      label: "Email",
      color: "text-pink-400 hover:text-pink-300"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 mb-6 glow-text">
            Contact
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto">
            Ready to join the matrix? Get in touch with us and become part of our data science community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold font-orbitron text-cyan-400 mb-6">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/50 rounded-lg text-white font-mono placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/50 rounded-lg text-white font-mono placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/50 rounded-lg text-white font-mono placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your interest in data science..."
                />
              </div>
              
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-mono font-medium rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 glow-border"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold font-orbitron text-purple-400 mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-mono">Email</p>
                    <p className="text-gray-400 font-mono text-sm">contact@thematrixclub.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <span className="text-purple-400 font-bold">📍</span>
                  </div>
                  <div>
                    <p className="text-white font-mono">Location</p>
                    <p className="text-gray-400 font-mono text-sm">Data Science Lab, Building A</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold font-orbitron text-green-400 mb-6">
                Connect With Us
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-gray-700 hover:border-current transition-all duration-300 ${link.color} group`}
                    >
                      <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-mono text-sm">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;