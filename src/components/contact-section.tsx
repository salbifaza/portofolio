"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section-title";
import { useToast } from "@/hooks/use-toast";
import { icons } from "@/components/icons";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <Section id="contact" className="bg-gray-800 dark:bg-black">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-300 dark:text-gray-400 mb-8">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of an ambitious team. Feel free to reach out.
        </p>
        <div className="flex justify-center items-center space-x-6 mb-12">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
            aria-label="Email"
          >
            {icons.mail}
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            {icons.linkedin}
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            {icons.github}
          </a>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 text-left"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="w-full bg-gray-700 dark:bg-gray-800 text-white p-3 rounded-lg border border-gray-600 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                    <FormControl>
                      <Input
                        placeholder="Your Email"
                        {...field}
                        type="email"
                        className="w-full bg-gray-700 dark:bg-gray-800 text-white p-3 rounded-lg border border-gray-600 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      {...field}
                      className="w-full bg-gray-700 dark:bg-gray-800 text-white p-3 rounded-lg border border-gray-600 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              size="lg"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </Section>
  );
}
