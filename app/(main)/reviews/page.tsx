import { Metadata } from 'next';
import ReviewForm from "../../components/forms/ReviewForm";

export const metadata: Metadata = {
  title: "Leave a Review",
  description: "Share your experience working with Animesh Kumar. Your feedback helps me improve and helps others make informed decisions.",
  openGraph: {
    title: "Leave a Review | Animesh Kumar",
    description: "Share your experience working with Animesh. Your testimonial matters!",
    url: "/reviews",
  },
  alternates: {
    canonical: "/reviews",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Reviews() {
    return (
        <div className="py-28 bg-[#0f1620] min-h-screen">

            <ReviewForm />
        </div>
    );
}