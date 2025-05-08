import React, { useState } from 'react';
import FormInput from './FormInput';
import { COLORS } from '../../utils/constants';
import { CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  sport: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  sport?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    sport: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est obligatoire';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'adresse e-mail est obligatoire';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'adresse e-mail n\'est pas valide';
    }
    
    if (!formData.sport.trim()) {
      newErrors.sport = 'Veuillez sélectionner un sport';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [id]: undefined
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          sport: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <section id="register" className="py-20 px-6" style={{ backgroundColor: COLORS.background }}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: COLORS.main }}>
              Rejoignez notre communauté sportive
            </h2>
            
            <p className="mb-6 text-lg" style={{ color: COLORS.soft }}>
              Inscrivez-vous à nos programmes et événements, ou obtenez plus d'informations sur nos installations sportives.
              Notre équipe est prête à vous aider à commencer votre parcours sportif avec nous.
            </p>
            
            <ul className="space-y-4">
              {[
                'Entraînement professionnel pour tous les niveaux de compétence',
                'Des installations et des équipements de pointe',
                'Programmes d\'entraînement personnalisés',
                'Événements et tournois communautaires',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start" style={{ color: COLORS.main }}>
                  <CheckCircle2 
                    size={20} 
                    className="mr-3 mt-1 flex-shrink-0" 
                    style={{ color: COLORS.secondary }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div 
              className="bg-blue-700 bg-opacity-30 p-8 rounded-lg shadow-lg"
              style={{ backgroundColor: `${COLORS.primary}40` }}
            >
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div 
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: COLORS.green }}
                  >
                    <CheckCircle2 size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Inscription réussie !</h3>
                  <p className="text-gray-300">
                    Nous vous remercions de votre inscription. Nous vous contacterons prochainement pour vous donner plus d'informations.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-bold mb-6 text-white">S'inscrire aux programmes</h3>
                  
                  <FormInput 
                    id="name"
                    label="Nom complet"
                    type="text"
                    placeholder="Saisissez votre nom complet"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  
                  <FormInput 
                    id="email"
                    label="Adresse e-mail"
                    type="email"
                    placeholder="Saisissez votre adresse e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                  
                  <FormInput 
                    id="phone"
                    label="Numéro de téléphone"
                    type="tel"
                    placeholder="Entrez votre numéro de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                  />
                  
                  <FormInput 
                    id="sport"
                    label="Sport recherché"
                    type="text"
                    placeholder="Quel est le sport qui vous intéresse ?"
                    value={formData.sport}
                    onChange={handleChange}
                    error={errors.sport}
                    required
                  />
                  
                  <FormInput 
                    id="message"
                    label="Informations complémentaires"
                    type="text"
                    placeholder="Faites-nous part de vos intérêts ou de vos questions"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    textarea
                  />
                  
                  <button 
                    type="submit"
                    className={`w-full px-6 py-3 rounded-md text-white font-medium mt-4 transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                    }`}
                    style={{ backgroundColor: COLORS.primary }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Soumission...' : 'S\'inscrire'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;