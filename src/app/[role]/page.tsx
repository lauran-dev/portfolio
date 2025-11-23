import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { getRole, roles } from "@/lib/data";

type RolePageProps = {
  params: Promise<{ role: string }>;
};

export function generateStaticParams() {
  return roles.map((role) => ({ role: role.slug }));
}

export async function generateMetadata({
  params,
}: RolePageProps): Promise<Metadata> {
  const { role: slug } = await params;
  const role = getRole(slug);
  if (!role) return {};

  return {
    title: role.heroTitle,
    description: role.heroTagline,
    openGraph: {
      title: role.heroTitle,
      description: role.heroTagline,
    },
    twitter: {
      title: role.heroTitle,
      description: role.heroTagline,
    },
  };
}

export default async function RolePage({ params }: RolePageProps) {
  const { role: slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero title={role.heroTitle} tagline={role.heroTagline} />
        <About intro={role.aboutIntro} />
        <Skills order={role.skillOrder} />
        <Experience />
        <Projects order={role.projectOrder} />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
