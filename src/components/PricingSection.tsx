
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Επίλεξε το Ιδανικό Πακέτο</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ξεκίνα να αυξάνεις τις κρατήσεις σου με επαγγελματική υποστήριξη και στρατηγική
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Package */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <h3 className="text-xl font-bold mb-2 text-center">Basic Website Package</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">€799</span>
              <span className="text-gray-600 ml-2">εφάπαξ</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span>Επαγγελματικό website για το κατάλυμα σου</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span>Βασική SEO βελτιστοποίηση</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span>Φόρμα επικοινωνίας και κρατήσεων</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span>Σύνδεση με Google Analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span>Οδηγός βελτιστοποίησης καταχώρησης Airbnb</span>
              </li>
            </ul>
            
            <a href="#contact">
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Επιλογή Πακέτου
              </Button>
            </a>
          </div>
          
          {/* Full Package */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-primary relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full">
              Προτεινόμενο
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Full Website Package</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">€1,199</span>
              <span className="text-gray-600 ml-2">εφάπαξ</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span>Όλα όσα περιλαμβάνει το Basic πακέτο</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span>Προηγμένη SEO βελτιστοποίηση</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span>Ολοκληρωμένη στρατηγική branding</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span>Στρατηγική Instagram για προβολή</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span>Αναλυτικός οδηγός marketing για ιδιοκτήτες</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                <span>Μηνιαία υποστήριξη για 3 μήνες</span>
              </li>
            </ul>
            
            <a href="#contact">
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Επιλογή Πακέτου
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
