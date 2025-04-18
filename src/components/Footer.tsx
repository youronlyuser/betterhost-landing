
import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-xl font-bold mb-4">BetterHost</h2>
            <p className="text-gray-400 mb-6">
              Βοηθάμε τους οικοδεσπότες του Airbnb να αυξήσουν τις κρατήσεις τους μέσω επαγγελματικής παρουσίας στο διαδίκτυο και στρατηγικής branding.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@betterhost.gr" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Σύνδεσμοι</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Αρχική</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">Βιογραφικό</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Υπηρεσίες</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Τιμές</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Επικοινωνία</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Επικοινωνία</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mr-3 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">Αθήνα, Ελλάδα</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-primary mr-3 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">+30 210 1234567</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-primary mr-3 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">info@betterhost.gr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} BetterHost. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
