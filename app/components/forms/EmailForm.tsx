'use client';

import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

export default function EmailForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        setTimeout(() => {
            form.reset();
        }, 0);
    };

    return (
        <form
            action="https://mail.google.com/mail/"
            method="get"
            target="_blank"
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="view" value="cm" />
            <input type="hidden" name="fs" value="1" />
            <input type="hidden" name="tf" value="1" />
            <input type="hidden" name="to" value="info@animeshmarketing.com" />
            <input type="hidden" name="su" value="Let&apos;s Work Together" />
            <label className="sr-only" htmlFor="footer-email">Your message or email</label>
            <input
                id="footer-email"
                name="body"
                type="text"
                placeholder="Share your email or a quick note"
                required
                className="flex-1 rounded-lg bg-white/5 border border-orange-500/20 px-4 py-3 text-sm text-white placeholder:text-[#c8b98a] focus:outline-none focus:border-[#FD853A] focus:ring-2 focus:ring-[#FD853A]/40"
            />
            <button
                type="submit"
                className="rounded-lg bg-[#FD853A] text-[#0f1620] px-5 py-3 text-sm font-semibold hover:bg-[#ff9b59] transition-colors"
            >
                <RiSendPlane2Fill/>
            </button>
        </form>
    );
}