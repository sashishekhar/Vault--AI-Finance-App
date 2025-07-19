"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title"
        >
          Manage Your Finances <br /> with Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/sashishekhar/Vault--AI-Finance-App">
            <Button size="lg" variant="outline" className="px-8">
              ReadMe.md
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="hero-image-wrapper mt-10"
        >
          <Image
            src="/dashboard.png"
            width={1280}
            height={720}
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl border mx-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
