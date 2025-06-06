"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FaPaperPlane } from "react-icons/fa";

export function ContactMe() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFeedbackMessage(result.message || "Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setFeedbackMessage(result.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      setFeedbackMessage("An unexpected error occurred. Please try again later.");
      console.error("Contact form submission error:", error);
    }
  };
  return (
    <section id="contact" className="py-8 md:py-10 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <div className="max-w-3xl mx-auto p-6 border border-neutral-800 rounded-lg shadow-lg">
        <p className="mb-8 max-w-xl mx-auto text-sm text-neutral-300 text-center">
          Have a question or want to work together? Fill out the form below and I&apos;ll get back to you soon.
        </p>
        <form className="my-0" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-black border border-gray-700 text-white px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="you@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-black border border-gray-700 text-white px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[100px] w-full bg-black border border-gray-700 text-white px-3 py-2 rounded-md text-sm focus:outline-none focus:border-gray-500"
            />
          </LabelInputContainer>

          <button
            type="submit"
            disabled={status === "loading"}
            className="transform rounded-xl border border-gray-700 bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="inline-flex items-center gap-2">
              {status === "loading" ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane className="inline-block text-s" />
                  Send Message
                </>
              )}
            </span>
          </button>
          {feedbackMessage && (
            <p className={`mt-4 text-sm text-center ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {feedbackMessage}
            </p>
          )}
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
