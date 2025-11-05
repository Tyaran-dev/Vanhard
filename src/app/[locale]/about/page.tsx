import Footer from "@/src/components/site-footer";
import AboutTimeline from "@/src/components/about-timeline";
import AboutContent from "@/src/components/About-content";

export default function AboutPage() {
  return (
    <main className="min-h-screen  text-gray-900">
      <AboutContent />
      <AboutTimeline />
    </main>
  );
}
