import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail, Linkedin, Car, Download } from "lucide-react";
import { toast } from "sonner";
import { SectionTitle } from "./SectionTitle";
import cvFile from "/assets/CV_Alexis_Maugain.png";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "07 66 07 82 12",
    link: "tel:0766078212",
  },
  {
    icon: Mail,
    label: "Email",
    value: "alexis.maugain@gmail.com",
    link: "mailto:alexis.maugain@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "@alexis-maugain",
    link: "https://linkedin.com/in/alexis-maugain",
  },
  {
    icon: Car,
    label: "Mobilité",
    value: "Permis B",
    link: null,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };  const handleDownloadCV = () => {
    // Créer un lien pour télécharger le fichier importé
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'CV_Alexis_Maugain.png';
    
    // Déclencher le téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Notification de succès
    toast.success("CV téléchargé avec succès !");
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="contact">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionTitle subtitle="Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins.">
          Contact
        </SectionTitle>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-primary">Mes coordonnées</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-4">
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.icon === Linkedin ? "_blank" : undefined}
                            rel={info.icon === Linkedin ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-4 group"
                          >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">{info.label}</p>
                              <p className="group-hover:text-primary transition-colors">
                                {info.value}
                              </p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">{info.label}</p>
                              <p>{info.value}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6"
              onClick={handleDownloadCV}            >
                <Download className="w-5 h-5 mr-2" />
                Télécharger le CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="mb-6 text-primary">Envoyez-moi un message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Nom
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full rounded-lg border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      className="w-full rounded-lg border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={6}
                      className="w-full rounded-lg border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
