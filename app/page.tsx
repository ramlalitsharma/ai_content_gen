'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      title: "AI-Powered Content",
      description: "Generate high-quality articles, blogs, and social media posts in seconds",
      icon: "🤖"
    },
    {
      title: "Multi-Language Support",
      description: "Create content in 25+ languages with native-level fluency",
      icon: "🌍"
    },
    {
      title: "SEO Optimization",
      description: "Smart keyword integration and content optimization tools",
      icon: "🔍"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              AI<span className="text-purple-400">ContentGen</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-purple-400 transition-colors">
              Features
            </a>
           
            <a href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
            <a href='./dashboard'>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>
            </a>
          
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4" role="menu">
            <a href="#features" className="block hover:text-purple-400" role="menuitem">
              Features
            </a>
           
            <a href="#contact" className="block hover:text-purple-400" role="menuitem">
              Contact
            </a>
            <button 
              className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full"
              role="menuitem"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Transform Your Content Creation with AI
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Generate high-quality, SEO-optimized content in seconds using our advanced AI writing assistant.
              </p>
              
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-1">
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="space-y-4 animate-pulse">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-gray-700 rounded-full" />
                      <div className="h-4 bg-gray-700 rounded w-2/3" />
                    </div>
                    <div className="h-32 bg-gray-700 rounded-lg" />
                    <div className="h-4 bg-gray-700 rounded w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <article 
                key={index}
                className="bg-gray-800 p-8 rounded-2xl hover:transform hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Revolutionize Your Content?</h2>
            <p className="text-xl text-gray-300 mb-12">Join thousands of satisfied users today</p>
           <a href="./dashboard">
            <button className="bg-purple-600 hover:bg-purple-700 px-12 py-4 rounded-full text-lg transition-colors">
              Get Started Now
            </button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12">
        <div className="border-t border-gray-700 pt-12 text-center">
          <div className="text-2xl font-bold mb-4">
            AI<span className="text-purple-400">ContentGen</span>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AI Content Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}