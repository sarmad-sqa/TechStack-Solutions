import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  ShieldCheck, 
  Gauge, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const services = [
    {
      id: 1,
      title: 'Custom Web Application Development',
      category: 'Web',
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      description: 'Modern, scalable, aur responsive web applications built using React, Node.js, Next.js, and modern frameworks.',
      features: ['Single Page Applications (SPA)', 'Progressive Web Apps (PWA)', 'Custom Dashboard & Admin Panels']
    },
    {
      id: 2,
      title: 'Mobile App Development',
      category: 'Mobile',
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      description: 'Native aur Cross-platform mobile apps for iOS and Android using React Native & Flutter.',
      features: ['Cross-Platform Efficiency', 'UI/UX Optimized', 'Offline Functionality & Push Notifications']
    },
    {
      id: 3,
      title: 'Software Quality Assurance & Automation',
      category: 'Testing',
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      description: 'End-to-end software testing to ensure bug-free, highly stable, and reliable production software.',
      features: ['Automation Testing (Cypress, Selenium)', 'API Testing (Postman)', 'Manual & Regression Testing']
    },
    {
      id: 4,
      title: 'API & Backend Architecture',
      category: 'Backend',
      icon: <Database className="w-8 h-8 text-purple-600" />,
      description: 'Robust RESTful & GraphQL APIs, microservices, aur secure database integration.',
      features: ['Microservices Architecture', 'Database Optimization (SQL/NoSQL)', 'Third-Party API Integration']
    },
    {
      id: 5,
      title: 'Performance & Load Testing',
      category: 'Testing',
      icon: <Gauge className="w-8 h-8 text-amber-600" />,
      description: 'High-volume load, stress, and endurance testing to keep your system performing seamlessly under peak traffic.',
      features: ['Load & Stress Testing (JMeter)', 'Bottleneck Analysis', 'Performance Tuning']
    },
    {
      id: 6,
      title: 'UI/UX Design & Prototyping',
      category: 'Design',
      icon: <Code2 className="w-8 h-8 text-rose-600" />,
      description: 'User-centered design, interactive wireframes, and modern interfaces tailored for conversions.',
      features: ['Figma / Adobe XD Design', 'Interactive Wireframes', 'Design System Architecture']
    }
  ];

  const categories = ['All', 'Web', 'Mobile', 'Testing', 'Backend', 'Design'];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              TechStack Solutions
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">Our Process</a>
            <a href="#contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-md">
              Get Started
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-4">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600">Services</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600">Our Process</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg">Get Started</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-600 bg-blue-100/70 rounded-full border border-blue-200">
            Complete Software Solutions Provider
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Transforming Ideas into High-Quality <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Digital Products</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We design, build, and scale high-performance web and mobile applications. From custom software to automated QA workflows, we transform your vision into market-ready products.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg flex items-center justify-center gap-2">
              Explore Services <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl font-medium text-center">
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Core Expertise</h2>
            <p className="mt-4 text-slate-600 text-lg">Tailored digital solutions to propel your business forward.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-white w-fit rounded-xl border border-slate-200 shadow-sm mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Deliverables</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-700 gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="process" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">OUR PROCESS</h2>
            <p className="mt-4 text-slate-400 text-lg">A streamlined, battle-tested approach to turn your ideas into high-performing digital products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Requirement Gathering', desc: 'Deeply analyzing your business goals and technical specifications.' },
              { step: '02', title: 'Design & Architecture', desc: 'Crafting interactive prototypes, modern UI designs, and robust database schemas.' },
              { step: '03', title: 'Agile Development & QA', desc: 'Writing clean code paired with continuous manual and automated testing.' },
              { step: '04', title: 'Deployment & Support', desc: 'Ensuring seamless production launch along with dedicated ongoing maintenance.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <span className="text-4xl font-extrabold text-blue-500 opacity-80 mb-4 block">{item.step}</span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Contact Us</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 sm:text-4xl">Let’s Build Something Great Together</h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><Mail className="w-6 h-6" /></div>
                  <div><h4 className="text-sm text-slate-500">Email Us</h4><p className="font-semibold text-slate-800">contact@techstacksolutions.com</p></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><Phone className="w-6 h-6" /></div>
                  <div><h4 className="text-sm text-slate-500">Call Us</h4><p className="font-semibold text-slate-800">+92 300 1234567</p></div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <form onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>QA & Automation Testing</option>
                    <option>Backend & API Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows="4" required placeholder="Briefly explain your project..." className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition-all">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} TechStack Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}