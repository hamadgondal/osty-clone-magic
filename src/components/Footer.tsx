import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, Dribbble, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  const marqueeText =
    "Mobile apps • Web engineering • Brand identity • UI/UX design • Build to scale • Code & color fusion";
  const textParts = marqueeText.split(" • ");

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-border bg-[hsl(var(--header-footer))]"
    >
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-end">
          {/* Large Heading */}
          <div className="lg:col-span-1">
            <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-tight">
              LET'S MAKE
              <br />
              IT HAPPEN.
            </h2>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-6 text-sm">Social Media</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/irozon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/irozonllc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/irozon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-6 text-sm">Contact</h4>
            <a
              href="mailto:contact@irozon.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              hello@irozon.se
            </a>
          </div>
        </div>
        {/* Moving text marquee */}
        <div className="overflow-hidden py-6">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="text-foreground text-5xl md:text-7xl font-bold mx-8 inline-flex items-center"
              >
                {textParts.map((part, partIndex) => (
                  <React.Fragment key={partIndex}>
                    {part}
                    {partIndex < textParts.length - 1 && (
                      <span className="inline-flex items-center mx-5">
                        <svg
                          className="text-primary w-16 h-16"
                          viewBox="0 0 125 125"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M48.6406 120.406C46.9536 120.406 45.5983 119.015 45.6416 117.329L46.54 82.3173C46.5999 79.9859 44.0934 78.4808 42.0637 79.6293L11.62 96.8551C10.1069 97.7112 8.18531 97.1061 7.43577 95.5375L0.924993 81.9123C0.212664 80.4216 0.839691 78.6355 2.32753 77.9172L33.2866 62.9706C35.5475 61.8791 35.5475 58.6589 33.2866 57.5674L2.34269 42.628C0.848929 41.9068 0.223908 40.1103 0.947480 38.6177L7.43504 25.235C8.18762 23.6826 10.0913 23.0833 11.5975 23.9246L42.0781 40.9501C44.1078 42.0839 46.6001 40.5777 46.54 38.2536L45.6421 3.4837C45.5985 1.79708 46.9539 0.40625 48.6411 0.40625H63.3794C65.059 0.40625 66.4114 1.78507 66.3789 3.46435L65.7042 38.2921C65.6594 40.6079 68.1444 42.0988 70.1666 40.9693L100.648 23.9433C102.167 23.095 104.086 23.7119 104.826 25.2861L111.101 38.6346C111.801 40.1231 111.171 41.8974 109.69 42.6125L78.7141 57.5674C76.4532 58.6589 76.4532 61.8791 78.7141 62.9706L109.705 77.9325C111.18 78.6448 111.811 80.409 111.123 81.8954L104.825 95.4864C104.088 97.0766 102.151 97.6992 100.625 96.8361L70.1811 79.6099C68.1588 78.4657 65.6595 79.9556 65.7042 82.2786L66.3792 117.348C66.4116 119.027 65.0593 120.406 63.3798 120.406H48.6406Z" />
                        </svg>
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </span>
            ))}
          </motion.div>
        </div>
        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>©2025 irozon. All Rights Reserved.</p>
          <p>Way ahead</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
