
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowDown01, FileCheck, MailOpen, Rocket, Sparkles } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Πώς Λειτουργεί</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Μια απλή διαδικασία 5 βημάτων για να αποκτήσεις την ιδανική παρουσία στο διαδίκτυο
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <ArrowDown01 className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Βήμα 1: Δες τα Παραδείγματα μας</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                <div className="pl-14">
                  Περιηγήσου στο portfolio μας και δες παραδείγματα από ιστοσελίδες που έχουμε δημιουργήσει για άλλους οικοδεσπότες. Αυτό θα σε βοηθήσει να καταλάβεις καλύτερα τις υπηρεσίες μας και να εμπνευστείς για το δικό σου project.
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FileCheck className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Βήμα 2: Συμπλήρωσε τη Φόρμα</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                <div className="pl-14">
                  Συμπλήρωσε τη φόρμα επικοινωνίας μας με τις λεπτομέρειες του καταλύματός σου, τις ανάγκες σου και το πακέτο που σε ενδιαφέρει. Όσο περισσότερες πληροφορίες μας δώσεις, τόσο καλύτερα θα μπορέσουμε να προσαρμόσουμε την προσέγγισή μας.
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MailOpen className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Βήμα 3: Λάβε Email Επιβεβαίωσης</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                <div className="pl-14">
                  Μέσα σε 24 ώρες θα λάβεις ένα email επιβεβαίωσης από την ομάδα μας. Θα περιλαμβάνει μια σύνοψη των αναγκών σου, το χρονοδιάγραμμα του project και τις λεπτομέρειες πληρωμής. Μπορείς να ζητήσεις τυχόν διευκρινίσεις σε αυτό το στάδιο.
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Rocket className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Βήμα 4: Ξεκινάμε το Website</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                <div className="pl-14">
                  Μετά την επιβεβαίωση και την προκαταβολή, η ομάδα μας ξεκινά τη δημιουργία του website σου. Θα σου παρουσιάσουμε ένα αρχικό σχέδιο μέσα σε 7 ημέρες για να το εγκρίνεις και να μας δώσεις τα σχόλιά σου. Κάνουμε έως και 2 κύκλους αναθεωρήσεων για να διασφαλίσουμε ότι είσαι απόλυτα ικανοποιημένος/η.
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Sparkles className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Βήμα 5: Παράδοση</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                <div className="pl-14">
                  Μετά την τελική έγκριση, παραδίδουμε το website σου έτοιμο για λειτουργία. Θα λάβεις έναν λεπτομερή οδηγό για το πώς να διαχειριστείς τις κρατήσεις, να ενημερώνεις το περιεχόμενο και να παρακολουθείς τα αναλυτικά στοιχεία. Για το Full πακέτο, ξεκινά και η 3μηνη περίοδος υποστήριξης.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
