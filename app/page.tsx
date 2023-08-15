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

    try {
        const response = await fetchHygraphQuery(query);
        console.log("Fetched Page Data:", response);
        return response;
    } catch (error) {
        console.error("Error fetching page data:", error);
        throw error;
    }
};

export default async function Home() {
    try {
        const { page: pageData } = await getPageData();
        console.log("Technologies:", pageData?.technologies);

        return (
            <>
                <HeroSection homeInfo={pageData} />
                <Skills tech={pageData?.technologies} />
                <ProjectsSection />
                <TestimonialsSection />
                <WorkExperienceSection />
            </>
        );
    } catch (error) {
        console.error("Error rendering Home:", error);
        // You can render an error message or fallback UI here
        return <div>Error rendering Home</div>;
    }
}
