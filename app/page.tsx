import { HeroSection } from "./components/hero-section/HeroSection";
import { ProjectsSection } from "./components/projects-section/ProjectsSection";
import { Skills } from "./components/skills/Skills";
import { TestimonialsSection } from "./components/testimonials-section/TestimonialsSection";
import { WorkExperienceSection } from "./components/work-experience-section/WorkExperienceSection";

import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./lib/fetch-hygraph-query";

export const metadata = {
    title: "Home",
};

const getPageData = async (): Promise<HomePageData> => {
    const query = `
    query MyQuery {
        page(where: {slug: "home"}) {
          introduction {
            raw
          }
          introductionTitle
          profilePicture {
            url
          }
          descriptionTitle
          descriptionText {
            raw
          }
          technologies {
            name
            iconSvg
            startDate
          }
          badges {
            name
          }
        }
      }
    `;

    return fetchHygraphQuery(query);
};

export default async function Home() {
    const { page: pageData } = await getPageData();

    if (!pageData) {
        // Return a fallback UI or loading state if homeInfo is undefined
        return <div className="container">Loading...</div>;
    }

    return (
        <>
            <HeroSection homeInfo={pageData || null} />
            <Skills tech={pageData?.technologies || null} />
            <ProjectsSection />
            <TestimonialsSection />
            <WorkExperienceSection />
        </>
    );
}
