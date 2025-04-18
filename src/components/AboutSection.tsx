
import React from 'react';
import { Award, Star, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-300 relative">
                    {/* This would be an actual image in production */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg font-medium">
                      Φωτογραφία Ομάδας
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full z-[-1]"></div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ποιοι Είμαστε</h2>
              <p className="text-gray-600 mb-6">
                Η BetterHost είναι μια ομάδα επαγγελματιών με πάθος για τον τουρισμό και την τεχνολογία. Δημιουργήθηκε το 2022 με στόχο να βοηθήσει τους οικοδεσπότες του Airbnb στην Ελλάδα να βελτιστοποιήσουν την παρουσία τους και να αυξήσουν τις κρατήσεις τους.
              </p>
              <p className="text-gray-600 mb-8">
                Με εμπειρία τόσο στον τομέα του τουρισμού όσο και στο digital marketing, είμαστε σε θέση να προσφέρουμε ολοκληρωμένες λύσεις που συνδυάζουν αισθητική, λειτουργικότητα και αποτελεσματικότητα.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Users className="text-primary" size={20} />
                  </div>
                  <h4 className="font-semibold">50+</h4>
                  <p className="text-gray-600 text-sm">Ικανοποιημένοι Πελάτες</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Star className="text-primary" size={20} />
                  </div>
                  <h4 className="font-semibold">30%</h4>
                  <p className="text-gray-600 text-sm">Αύξηση Κρατήσεων</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Award className="text-primary" size={20} />
                  </div>
                  <h4 className="font-semibold">5+</h4>
                  <p className="text-gray-600 text-sm">Χρόνια Εμπειρίας</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
