import EmailForm from "../forms/EmailForm";

// Footer uses a simple grid to keep content aligned across breakpoints.
export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-[#0f1620] text-[#FFECB6] border-t border-white/10">
					<h3 className="text-5xl font-semibold px-8 pt-10">Let&apos;s grow bold together</h3>
						<div className="max-w-6xl mx-auto px-6 py-10 grid gap-12 justify-start sm:grid-cols-3">
				<div className="space-y-3">
					<p className="text-md text-[#c8b98a]">
						Strategy, campaigns, performance creative, and data-led experiments built to grow your brand with clarity, speed, and measurable ROI.
					</p>
				</div>

				<div className="space-y-3">
					<h4 className="text-sm font-semibold tracking-wide text-[#f39c12] uppercase">Contact</h4>
					<div className="text-sm text-[#c8b98a] space-y-1">
						<p>aniixdigital@gmail.com</p>
						<p>+91 6209328157</p>
						<p>Bokaro, Jharkhand INDIA · Remote worldwide</p>
					</div>
				</div>

				<div className="space-y-3">
					<h4 className="text-sm font-semibold tracking-wide text-[#f39c12] uppercase">Stay in touch</h4>
					<p className="text-sm text-[#c8b98a]">Drop a note—opens Gmail with my address prefilled.</p>
					<EmailForm/>
				</div>

			</div>

			<div className="border-t border-white/10">
				<div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center justify-between gap-3">
					<p className="text-sm text-[#c8b98a]">© {year} Animesh Kumar. All rights reserved.</p>
					<p className="text-sm text-[#c8b98a]">
						Made by
						<a
							href="https://www.linkedin.com/in/ayush-kumar-772865290/"
							target="_blank"
							rel="noreferrer"
							className="ml-2 font-semibold text-[#d0bd86] hover:text-orange-400 transition-colors"
						>
							Ayush Kumar
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
