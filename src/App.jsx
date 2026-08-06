import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
  MapPin,
  Briefcase,
  Cpu
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const form = useRef();
  const [emailStatus, setEmailStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailStatus('Sending...');

    emailjs.sendForm(
      'service_l636kfb',
      'template_bg0yijd',
      form.current,
      'E-AXlCndjEY-pHuZ4'
    )
      .then(() => {
        setEmailStatus('Message sent successfully! 🚀');
        form.current.reset();
        setTimeout(() => {
          setEmailStatus('');
        }, 2000);
      }, (error) => {
        console.error(error);
        setEmailStatus('Failed to send message. Please try again.');
        setTimeout(() => {
          setEmailStatus('');
        }, 2000);
      });
      const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'Testing', 'Backend', 'Management', 'AI/ML'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory);
  };

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
    title: 'Agile Project & Product Management',
    category: 'Management',
    icon: <Briefcase className="w-8 h-8 text-amber-600" />,
    description: 'Sprint planning, backlog management, requirements analysis (PRD/User Stories), and seamless team execution for on-time delivery.',
    features: ['Sprint Planning & Backlog Management', 'User Stories & PRD Documentation', 'Agile Workflow & Release Delivery']
  },
  {
    id: 6,
    title: 'AI & Machine Learning Solutions',
    category: 'AI/ML',
    icon: <Cpu className="w-8 h-8 text-cyan-600" />,
    description: 'Integrating OpenAI/LLM APIs, predictive machine learning models, smart automated chatbots, and AI workflow automation.',
    features: ['LLM & OpenAI API Integration', 'AI Chatbots & Automation', 'Workflow Optimization & ML Models']
  }
  ];

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
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredServices.map((service, index) => (
    <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
      
      {/* Dynamic Icon */}
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
        {service.icon}
      </div>

      {/* Dynamic Title */}
      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>

      {/* Dynamic Description */}
      <p className="text-slate-600 mb-6">{service.desc}</p>

      {/* Dynamic Features Bullet Points */}
      <ul className="space-y-3">
        {service.features.map((feature, fIdx) => (
          <li key={fIdx} className="flex items-center text-sm text-slate-600">
            <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>

    </div>
  ))}
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
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Briefly explain your project..."
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all cursor-pointer"
                >
                  Send Message
                </button>

                {emailStatus && (
                  <p className="text-center text-sm font-medium text-blue-600 mt-2">
                    {emailStatus}
                  </p>
                )}
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