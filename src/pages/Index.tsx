
import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Users, Rocket, Target, Lightbulb, BookOpen, Mic, Newspaper, ExternalLink, Star, Award, Building, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      title: "Dial-an-AI-Expert",
      price: "$500/hour",
      description: "One-on-one AI strategy consultation with immediate booking",
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      features: ["Immediate expert consultation", "AI strategy guidance", "Implementation roadmaps", "Risk assessment"],
      cta: "Book Now",
      highlight: true
    },
    {
      title: "Fractional Chief AI Officer",
      price: "Custom Pricing",
      description: "Part-time AI leadership for your organization",
      icon: <Award className="h-8 w-8 text-purple-500" />,
      features: ["Strategic AI leadership", "Team development", "Governance framework", "Investment guidance"],
      cta: "Learn More"
    },
    {
      title: "Enterprise AI Enablement",
      price: "Custom Packages",
      description: "Comprehensive AI transformation programs",
      icon: <Building className="h-8 w-8 text-green-500" />,
      features: ["3-day GenAI Hackathon", "2-day AI Strategy Offsite", "Custom workshops", "Team enablement"],
      cta: "Get Started"
    },
    {
      title: "AI Product Intensive",
      price: "4-6 Week Program",
      description: "From concept to launch with AI-powered products",
      icon: <Rocket className="h-8 w-8 text-orange-500" />,
      features: ["4 weeks to functional product", "6 weeks to launch", "AI integration", "Go-to-market strategy"],
      cta: "Apply Now"
    }
  ];

  const contentSources = [
    {
      title: "AI After Hours Podcast",
      description: "Weekly insights on AI trends and enterprise applications",
      icon: <Mic className="h-6 w-6" />,
      link: "https://www.youtube.com/@AIAfterHours-sh9qc",
      color: "bg-red-500"
    },
    {
      title: "GenAI Real Talk Newsletter",
      description: "Strategic AI insights for business leaders",
      icon: <Newspaper className="h-6 w-6" />,
      link: "https://yuying.substack.com",
      color: "bg-blue-500"
    },
    {
      title: "LinkedIn Thought Leadership",
      description: "Daily AI strategy insights and industry commentary",
      icon: <Users className="h-6 w-6" />,
      link: "https://www.linkedin.com/in/yuyingchenwynn/",
      color: "bg-blue-600"
    },
    {
      title: "Speaking Engagements",
      description: "Conference talks and executive roundtables",
      icon: <Target className="h-6 w-6" />,
      link: "http://www.wittinglyventures.com",
      color: "bg-purple-500"
    }
  ];

  const achievements = [
    "Built proprietary GenAI platform with 87% adoption across 6 companies",
    "Driving $10M annual savings and $500M valuation increase",
    "15+ years building AI products across FinTech, EdTech, and Big Tech",
    "MIT Computer Science & Electrical Engineering"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Yuying Chen-Wynn
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#content" className="text-gray-700 hover:text-blue-600 transition-colors">Content</a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Contact
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            Head of AI at PEAK6 | MIT Graduate | AI Thought Leader
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
            Enterprise AI Strategy
            <span className="block">That Delivers Results</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Transforming enterprises with AI strategy that drives $10M+ in annual savings,
            <br />built on 15+ years of AI product expertise across FinTech, EdTech, and Big Tech
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
              Book AI Expert Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            AI Strategy Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From immediate expert consultation to comprehensive AI transformation programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-white/50 ${service.highlight ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <Badge variant="secondary" className="text-lg font-semibold">
                    {service.price}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Star className="h-4 w-4 text-yellow-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                AI Executive & Thought Leader
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As Head of AI at PEAK6, I'm driving AI strategy across 6 companies with $38B AUM, 
                targeting $10M in annual savings and $500M in valuation increase. With a Master's 
                in Computer Science from MIT and 15+ years of AI product experience, I combine 
                deep technical knowledge with strategic business acumen.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My proprietary GenAI platform achieved 87% adoption in just 6 months, and I've 
                led AI transformations across FinTech, EdTech, and Big Tech, generating hundreds 
                of millions in value through AI-driven innovation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-100 text-blue-800">MIT Graduate</Badge>
                <Badge className="bg-purple-100 text-purple-800">15+ Years AI Experience</Badge>
                <Badge className="bg-green-100 text-green-800">$500M Value Created</Badge>
                <Badge className="bg-orange-100 text-orange-800">6 Companies Led</Badge>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/80 rounded-lg border border-white/50">
                  <Lightbulb className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub Section */}
      <section id="content" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            AI Thought Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access all my content across podcasts, newsletters, speaking engagements, and more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contentSources.map((source, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-white/50 cursor-pointer">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${source.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {source.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {source.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {source.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  onClick={() => window.open(source.link, '_blank')}
                >
                  Explore
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your AI Strategy?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Join the enterprises already leveraging AI for $10M+ in annual savings. 
            Start with a strategic consultation today.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold">
              Book $500 Expert Call
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600">
              Download AI Strategy Guide
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Yuying Chen-Wynn
              </h3>
              <p className="text-gray-400 mb-4">
                AI Technology Executive driving enterprise transformation through strategic AI implementation.
              </p>
              <p className="text-gray-400">
                Head of AI at PEAK6 | MIT Graduate | Thought Leader
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dial-an-AI-Expert</li>
                <li>Fractional Chief AI Officer</li>
                <li>Enterprise AI Enablement</li>
                <li>AI Product Intensive</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.linkedin.com/in/yuyingchenwynn/" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://yuying.substack.com" className="hover:text-blue-400 transition-colors">Newsletter</a></li>
                <li><a href="https://www.youtube.com/@AIAfterHours-sh9qc" className="hover:text-blue-400 transition-colors">Podcast</a></li>
                <li><a href="mailto:yuyingcwynn@gmail.com" className="hover:text-blue-400 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Yuying Chen-Wynn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
