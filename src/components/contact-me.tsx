"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FaPaperPlane } from "react-icons/fa";

export function ContactMe() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };
  return (
    <section id="contact" className="py-12 px-4 md:px-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Me</h2>
      <div className="max-w-3xl mx-auto p-6 border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg">
        <p className="mb-8 max-w-xl mx-auto text-sm text-neutral-600 dark:text-neutral-300 text-center">
          Have a question or want to work together? Fill out the form below and I'll get back to you soon.
        </p>
        <form className="my-0" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" type="text"
              className="bg-white border border-gray-300 text-black dark:bg-black dark:border-gray-700 dark:text-white px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="you@email.com" type="email"
              className="bg-white border border-gray-300 text-black dark:bg-black dark:border-gray-700 dark:text-white px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="Type your message here..."
              className="min-h-[100px] bg-white border border-gray-300 text-black dark:bg-black dark:border-gray-700 dark:text-white px-3 py-2 rounded-md text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
            />
          </LabelInputContainer>

          <button
            type="submit"
            className="transform rounded-xl border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 w-full"
          >
            <span className="inline-flex items-center gap-2">
              <FaPaperPlane className="inline-block text-s" />
              Send Message
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
