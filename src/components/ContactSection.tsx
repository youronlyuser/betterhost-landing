
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    airbnbUrl: '',
    package: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, package: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Η φόρμα στάλθηκε επιτυχώς!",
        description: "Θα επικοινωνήσουμε μαζί σου σύντομα.",
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        airbnbUrl: '',
        package: '',
        comments: ''
      });
    }, 1500);
  };

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
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ονοματεπώνυμο *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Το πλήρες όνομά σου"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Το email σου"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Τηλέφωνο *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Το τηλέφωνο επικοινωνίας"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="airbnbUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    URL Καταχώρησης Airbnb
                  </label>
                  <Input
                    id="airbnbUrl"
                    name="airbnbUrl"
                    value={formData.airbnbUrl}
                    onChange={handleInputChange}
                    placeholder="https://airbnb.com/rooms/..."
                  />
                </div>
                
                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                    Επίλεξε Πακέτο *
                  </label>
                  <Select value={formData.package} onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Επίλεξε ένα πακέτο" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Website Package - €799</SelectItem>
                      <SelectItem value="full">Full Website Package - €1,199</SelectItem>
                      <SelectItem value="custom">Θέλω εξατομικευμένη πρόταση</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                    Σχόλια ή Ερωτήσεις
                  </label>
                  <Textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Πες μας περισσότερα για τις ανάγκες σου..."
                    rows={4}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                type="submit" 
                className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 h-auto"
                disabled={isSubmitting}
              >
                Ας Ξεκινήσουμε Κάτι Όμορφο <Sparkles className="ml-2" size={18} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
