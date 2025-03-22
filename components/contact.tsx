"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContact } from "@/config/resend-method";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Renseigner une adresse email valide.",
  }),
  subject: z.string().min(5, {
    message: "L'objet du message doit contenir au moins 5 caractères.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const toastId = toast.loading("Envoi en cours...");

    try {
      const res = await sendContact(
        values.email,
        values.name,
        values.subject,
        values.message
      );

      if (res) {
        toast.dismiss(toastId);
        toast.success("Message envoyé avec succès !", {
          description: "Thanks mate! Je vous répondrai dès que possible.",
        });
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Une erreur est survenue lors de l'envoi du message.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Contactez-moi
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              Vous avez un projet en tête ou souhaitez discuter d'opportunités
              potentielles ? N'hésitez pas à me contacter.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Coordonnées</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:azimari.toure.ikbal@gmail.com"
                    className="flex items-center gap-3 text-silver hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>azimari.toure.ikbal@gmail.com</span>
                  </a>
                </div>
                <div className="space-y-4">
                  <a
                    href="tel:+221775651374"
                    className="flex items-center gap-3 text-silver hover:text-white transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+221 77 565 13 74 (+whatsapp)</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Réseaux Sociaux</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/azimari-toure-ikbal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-silver/20 text-silver hover:text-white hover:border-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">Github</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ikbal-azimari-toure/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-silver/20 text-silver hover:text-white hover:border-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Votre nom"
                              {...field}
                              className="bg-transparent border-silver/20 rounded-none focus-visible:ring-silver"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Votre email"
                              {...field}
                              className="bg-transparent border-silver/20 rounded-none focus-visible:ring-silver"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Objet</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Objet du message"
                            {...field}
                            className="bg-transparent border-silver/20 rounded-none focus-visible:ring-silver"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Votre message"
                            {...field}
                            rows={6}
                            className="bg-transparent border-silver/20 rounded-none focus-visible:ring-silver resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-silver hover:text-black transition-colors rounded-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Envoyer votre message
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
