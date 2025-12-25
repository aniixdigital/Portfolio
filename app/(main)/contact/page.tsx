import { Metadata } from 'next';
import StaggerText from '@/app/animation/StaggerText';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
import { client } from '@/sanity/lib/client';
import { contactQuery } from '@/sanity/lib/queries';
import { IconType } from 'react-icons';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Animesh Kumar for digital marketing, web development, or creative design projects. Available on WhatsApp, email, LinkedIn, and social media.",
  openGraph: {
    title: "Contact Animesh Kumar | Let's Work Together",
    description: "Ready to start your project? Contact Animesh via WhatsApp, email, or social media. Quick response guaranteed!",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

interface SocialLink {
  platform: string;
  username: string;
  url: string;
}

interface ContactData {
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  socialLinks: SocialLink[];
  ctaTitle: string;
  ctaDescription: string;
}

const platformIcons: Record<string, IconType> = {
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
  twitter: FaTwitter,
  youtube: FaYoutube,
  github: FaGithub,
};

export default async function Contact() {
  const contactData: ContactData | null = await client.fetch(contactQuery);

  // Fallback data if no Sanity data exists
  const data: ContactData = contactData || {
    title: 'Get In Touch',
    subtitle: "Let's discuss your next project or collaboration",
    email: 'aniixdigital@gmail.com',
    phone: '+916209328157',
    whatsapp: '+916209328157',
    socialLinks: [
      { platform: 'instagram', username: '@aniixdigital', url: 'https://www.instagram.com/aniixdigital' },
      { platform: 'facebook', username: 'Aniixdigital', url: 'https://www.facebook.com/share/1BDG9W74Em/?mibextid=wwXIfr' },
      { platform: 'linkedin', username: 'Animesh Kumar', url: 'https://www.linkedin.com/in/animesh-kumar-a60a78307' },
    ],
    ctaTitle: 'Ready to Start Your Project?',
    ctaDescription: "Feel free to reach out through any channel. I'll get back to you as soon as possible.",
  };

  const contactDetails = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: data.email,
      link: `mailto:${data.email}`,
    },
    ...(data.whatsapp ? [{
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: data.whatsapp,
      link: `https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}`,
    }] : []),
    ...(data.phone ? [{
      icon: FaEnvelope,
      label: 'Phone',
      value: data.phone,
      link: `tel:${data.phone}`,
    }] : []),
  ];

  return (
    <div className="min-h-screen bg-[#0f1620] text-[#FFECB6] pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <StaggerText
            text={data.title}
            className="text-5xl sm:text-7xl font-bold text-[#FFECB6] mb-4"
            staggerType="chars"
          />
          <p className="text-lg sm:text-xl text-[#c8b98a] mb-8">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactDetails.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="group p-6 bg-linear-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-[#FD853A]/20 hover:border-[#FD853A] transition-all duration-300 hover:shadow-lg hover:shadow-[#FD853A]/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FD853A]/20 rounded-lg group-hover:bg-[#FD853A]/40 transition-colors">
                    <Icon className="text-2xl text-[#FD853A]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-[#f39c12] uppercase tracking-wide mb-1">
                      {contact.label}
                    </h3>
                    <p className="text-lg font-semibold text-white group-hover:text-[#FD853A] transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FFECB6] mb-8">Connect On Social Media</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.socialLinks.map((social, index) => {
              const Icon = platformIcons[social.platform] || FaLinkedin;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 min-w-[140px] flex-1 bg-linear-to-br from-[#1a1a2e] to-[#16213e] rounded-xl border border-[#FD853A]/20 hover:border-[#FD853A] transition-all duration-300 hover:shadow-lg hover:shadow-[#FD853A]/20 flex flex-col items-center gap-3"
                >
                  <Icon className="text-3xl text-[#FD853A] group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-white capitalize">{social.platform}</p>
                    <p className="text-xs text-[#c8b98a]">{social.username}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="bg-linear-to-r from-[#FD853A]/20 to-[#f39c12]/20 border border-[#FD853A]/40 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#FFECB6] mb-4">{data.ctaTitle}</h3>
          <p className="text-[#c8b98a] mb-6">
            {data.ctaDescription}
          </p>
          <a
            href={`mailto:${data.email}`}
            className="inline-block px-8 py-3 bg-[#FD853A] text-[#0f1620] font-bold rounded-full hover:bg-[#ff9b59] transition-colors"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
