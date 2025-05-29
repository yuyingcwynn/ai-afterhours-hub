
import React from 'react';
import { ArrowRight, Brain, Users, Rocket, Zap, Building, Award, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const services = [
    {
      title: "Dial-an-AI-Expert",
      description: "Get immediate access to deep AI expertise. Perfect for strategic decisions, technical deep-dives, or AI transformation guidance.",
      price: "$500/hour",
      icon: <Brain className="h-8 w-8" />,
      cta: "Book Session",
      highlight: true
    },
    {
      title: "Fractional Chief AI Officer",
      description: "Strategic AI leadership without the full-time commitment. Drive AI vision, governance, and execution across your organization.",
      price: "Custom Pricing",
      icon: <Users className="h-8 w-8" />,
      cta: "Learn More"
    },
    {
      title: "GenAI Hackathon",
      description: "3-day intensive hackathon to jumpstart your team's AI capabilities. Hands-on learning with real business use cases.",
      price: "Enterprise Package",
      icon: <Rocket className="h-8 w-8" />,
      cta: "Schedule Event"
    }
  ];

  const additionalServices = [
    {
      title: "AI Strategy Offsite",
      description: "2-day strategic planning session to define your AI roadmap and implementation strategy.",
      duration: "2 days"
    },
    {
      title: "AI Product Intensive",
      description: "4-6 week bootcamp: 4 weeks to build a fully functional AI product, 6 weeks to launch.",
      duration: "4-6 weeks"
    }
  ];

  const contentSources = [
    {
      title: "AI After Hours Podcast",
      description: "Weekly insights on AI trends and enterprise applications",
      link: "https://www.youtube.com/@AIAfterHours-sh9qc"
    },
    {
      title: "GenAI Real Talk Newsletter",
      description: "Strategic AI insights for business leaders",
      link: "https://yuying.substack.com"
    },
    {
      title: "LinkedIn Thought Leadership",
      description: "Daily AI strategy insights and industry commentary",
      link: "https://www.linkedin.com/in/yuyingchenwynn/"
    },
    {
      title: "Speaking Engagements",
      description: "Conference talks and executive roundtables",
      link: "http://www.wittinglyventures.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            YCW.AI
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#content" className="text-gray-700 hover:text-blue-600 transition-colors">Content</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        {/* Background gradient circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Yuying Chen-Wynn
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl">
              AI Technology Executive & Strategic Advisor
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed">
              Driving generative AI transformation with 15+ years of expertise in AI/ML products, platforms, and governance. Former Head of AI at PEAK6, delivering $10M+ in efficiency gains and $500M in value creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full">
                Book AI Expert Session
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Enterprise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="relative">
            {/* Background gradient circle */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-15 transform translate-x-40 -translate-y-20"></div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
              Transform Your Enterprise with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
              Comprehensive AI consulting services tailored to accelerate your digital transformation
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className={`bg-white border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow ${service.highlight ? 'ring-2 ring-blue-200' : ''}`}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-bold text-blue-600 mb-6">
                    {service.price}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Enterprise Services</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <Card key={index} className="bg-gray-50 border-none">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-blue-600 font-medium">{service.duration}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Yuying</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                As Head of AI at PEAK6, I drove AI strategy across 6 companies with $38B AUM, 
                targeting $10M in annual savings and $500M in valuation increase. With a Master's 
                in Computer Science from MIT and 15+ years of AI product experience, I combine 
                deep technical knowledge with strategic business acumen.
              </p>
              <p className="mb-8">
                My proprietary GenAI platform achieved 87% adoption in just 6 months, and I've 
                led AI transformations across FinTech, EdTech, and Big Tech, generating hundreds 
                of millions in value through AI-driven innovation.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Built proprietary GenAI platform with 87% adoption</li>
                    <li>• Driving $10M annual savings and $500M valuation increase</li>
                    <li>• 15+ years building AI products across industries</li>
                    <li>• MIT Computer Science & Electrical Engineering</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expertise</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Generative AI Strategy & Implementation</li>
                    <li>• AI Risk & Governance Frameworks</li>
                    <li>• Enterprise AI Product Development</li>
                    <li>• AI Investment & M&A Strategy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub */}
      <section id="content" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Thought Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access all my content across podcasts, newsletters, speaking engagements, and more
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contentSources.map((source, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => window.open(source.link, '_blank')}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{source.title}</h3>
                  <p className="text-gray-600 mb-4">{source.description}</p>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Explore
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your AI Strategy?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Join the enterprises already leveraging AI for $10M+ in annual savings. 
            Start with a strategic consultation today.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
              Book $500 Expert Call
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full">
              Download AI Strategy Guide
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                YCW.AI
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
