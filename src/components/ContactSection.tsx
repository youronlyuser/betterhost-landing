
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Επικοινώνησε Μαζί μας</h2>
            <p className="text-lg text-gray-600">
              Συμπλήρωσε τη φόρμα και θα επικοινωνήσουμε μαζί σου μέσα σε 24 ώρες
            </p>
          </div>
          
          <iframe
            src="https://tally.so/embed/31RPV4?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
