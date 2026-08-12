'use client';

import { contact } from '@/data/data';

interface BtnProps {
  className?: string;
  children: React.ReactNode;
}

export function ScrollToContactButton({ className = "", children }: BtnProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
    >
      {children}
    </button>
  );
}

export function SendMessageButton({ className = "", children }: BtnProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const visitorEmail = (
          document.getElementById("contact-email") as HTMLInputElement | null
        )?.value.trim();
        const subject = encodeURIComponent("Portfolio Contact Request");
        const body = encodeURIComponent(
          `Hi Pranil,\n\nMy email is ${visitorEmail || "not provided"}.\nI would like to discuss a project with you.\n\nThanks!`
        );
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      }}
    >
      {children}
    </button>
  );
}

export function NewsletterButton({ className = "", children }: BtnProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const email = (
          document.querySelector('input[placeholder="Email Address"]') as HTMLInputElement | null
        )?.value.trim();
        const subject = encodeURIComponent("Newsletter Subscription Request");
        const body = encodeURIComponent(
          `Hi Pranil,\n\nPlease subscribe my email: ${email || "not provided"} to your newsletter.\n\nThanks!`
        );
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      }}
    >
      {children}
    </button>
  );
}
