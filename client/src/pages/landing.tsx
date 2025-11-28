import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import heroImage from "@assets/generated_images/forest_marathon_runners_cinematic.png";
import athletesImage from "@assets/generated_images/athletes_with_headphones_running.png";
import logoHiRes from "@assets/vfx_960x1152_crop_1763913291536.png";

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden min-h-screen snap-start snap-always"
      data-testid="section-hero"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <img
          src={heroImage}
          alt="Athletes jogging through forest marathon trail"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="relative z-20 text-center px-4 sm:px-6 max-w-5xl py-20"
        style={{ opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight"
          style={{ 
            color: "#ffd100",
            textShadow: "0 4px 20px rgba(0,0,0,0.5)"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          data-testid="text-hero-title"
        >
          Volume Fitness
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-light leading-relaxed max-w-3xl mx-auto px-4"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          data-testid="text-hero-subtitle"
        >
          Your favorite songs, re-mixed by AI, to match every peak, sprint, and finish line.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        data-testid="icon-scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60 text-sm"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/90 z-30 pointer-events-none"></div>
    </section>
  );
}

function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden min-h-screen snap-start snap-always"
      data-testid="section-experience"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />
        <img
          src={athletesImage}
          alt="Athletes preparing to run"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 w-full py-12 sm:py-16 lg:py-20">
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 lg:mb-16 text-center tracking-tight px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          data-testid="text-section-title"
        >
          What Exactly Do We Do?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          <div></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-md p-6 sm:p-8 lg:p-10 xl:p-12 rounded-md border border-white/10 mx-4 sm:mx-6 lg:mr-8 lg:ml-0"
            data-testid="text-experience-content"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="float-left mr-4 sm:mr-5 mb-2 sm:mb-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              data-testid="logo-container-drop-cap"
            >
              <img 
                src={logoHiRes} 
                alt="" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                At Volume Fitness, we're redefining how you experience music and movement. 
                Our AI-driven music engine is the first of its kind by blending tempo, energy, and emotion to match your every step, sprint, or stride.
              </p>
              <p>
                With our geo-based technology, Volume Fitness syncs perfectly to your location, pace, and mood by turning your morning commute, evening jog, or weekend walk into a cinematic experience.
              </p>
              <ul className="space-y-3 sm:space-y-4 pl-2 sm:pl-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                  <span>Crushing your last mile through City Park? Let Metallica power you to the finish.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                  <span>Strolling the shores of Laguna Beach, lost in your thoughts? Lana Del Rey sets the perfect tone.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                  <span>Taking a midday walk through the city? Feel-good vibes from Pharrell keep your rhythm strong.</span>
                </li>
              </ul>
              <p className="font-medium">
                Every run, jog, and walk deserves its own soundtrack — and with Volume Fitness, the music moves with you.
              </p>
              <p>
                Our patented AI technology doesn't just match your mood; it amplifies your moments.
              </p>
              <p className="italic">
                Because every journey deserves to sound as epic as it feels.
              </p>
              <p className="text-xs sm:text-sm text-white/70 pt-3 sm:pt-4 border-t border-white/10 clear-both">
                Find out more through our partners like Garmin and experience the next generation of music-driven fitness.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/90 z-30 pointer-events-none"></div>
    </section>
  );
}

function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll be in touch shortly. Thank you for your interest!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden min-h-screen snap-start snap-always"
      data-testid="section-contact"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={logoHiRes} 
          alt="" 
          className="w-1/2 max-w-md h-auto object-contain opacity-[0.07]"
          style={{ filter: "brightness(0.5)" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <motion.div
        className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            data-testid="text-contact-title"
          >
            Interested in working together?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/70 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            data-testid="text-contact-subtitle"
          >
            Fill out some info and we will be in touch shortly. We can't wait to hear from you!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6" data-testid="form-contact">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-sm font-medium">Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 h-11 sm:h-12 rounded-md"
                        placeholder="Your name"
                        data-testid="input-name"
                      />
                    </FormControl>
                    <FormMessage className="text-destructive-foreground" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-sm font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 h-11 sm:h-12 rounded-md"
                        placeholder="your@email.com"
                        data-testid="input-email"
                      />
                    </FormControl>
                    <FormMessage className="text-destructive-foreground" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-sm font-medium">
                      Company <span className="text-white/40">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 h-11 sm:h-12 rounded-md"
                        placeholder="Your company"
                        data-testid="input-company"
                      />
                    </FormControl>
                    <FormMessage className="text-destructive-foreground" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-sm font-medium">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 min-h-28 sm:min-h-32 rounded-md resize-none"
                        placeholder="Tell us about your project..."
                        data-testid="input-message"
                      />
                    </FormControl>
                    <FormMessage className="text-destructive-foreground" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full h-11 sm:h-12 text-base sm:text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-md"
                data-testid="button-submit"
              >
                {contactMutation.isPending ? "Sending..." : "Send"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.documentElement.style.scrollSnapType = "y proximity";
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.style.scrollPadding = "0";
    
    return () => {
      document.documentElement.style.scrollSnapType = "";
      document.documentElement.style.scrollBehavior = "";
      document.documentElement.style.scrollPadding = "";
    };
  }, []);

  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
