"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card as RawCard, CardContent as RawCardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/Hero";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";

const Card = motion(RawCard);
const CardContent = motion(RawCardContent);

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tl from-gray-50 to-white text-gray-800 overflow-x-hidden">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                className="rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white border-t">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-12"
          >
            Tools That Empower You
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-6 rounded-xl bg-white border shadow hover:shadow-lg">
                  <CardContent className="space-y-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50 border-t">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-12"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md text-center"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white border-t">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-12"
          >
            Hear From Our Users
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-50 rounded-xl border shadow">
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-screen-md mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-4">
            Take Full Control of Your Finances
          </h2>
          <p className="text-blue-100 mb-8">
            Join thousands of users who trust Welth to manage and grow their money intelligently.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-100 text-lg font-semibold px-8 py-4 rounded-lg"
            >
              Get Started Free
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default LandingPage;
