
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Globe, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Αύξησε τις Κρατήσεις σου στο Airbnb
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ξεχώρισε από τον ανταγωνισμό με εξατομικευμένη στρατηγική branding και επαγγελματικό website.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">🚀 Αύξηση Κρατήσεων</h3>
                <p className="text-gray-600 text-center">Αύξησε μέχρι και 30% τις κρατήσεις σου με στρατηγική προσέγγιση</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">💻 Επαγγελματικό Website</h3>
                <p className="text-gray-600 text-center">Απόκτησε τον δικό σου χώρο online για απευθείας κρατήσεις</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                  <Star className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">✨ Ξεχώρισε στην Αγορά</h3>
                <p className="text-gray-600 text-center">Χτίσε ένα επαγγελματικό brand που θα σε κάνει να ξεχωρίζεις</p>
              </div>
            </div>
            
            <a href="#pricing">
              <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-6 py-6 h-auto">
                Δες τα Πακέτα μας
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
