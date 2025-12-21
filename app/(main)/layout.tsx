import Nav from "../components/ui/Nav";
import SmoothScroll from "@/app/animation/SmoothScroll";
import Footer from "../components/ui/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SmoothScroll>
      <div className="h-full w-full bg-[#131313]">
        <Nav />
        {children}
        <Footer/>
      </div>
    </SmoothScroll>
  )
}
