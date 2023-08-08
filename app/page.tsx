import { HeroSection } from "./components/hero-section/HeroSection";
import { ProjectsSection } from "./components/projects-section/ProjectsSection";
import { Skills } from "./components/skills/Skills";

import { TestimonialsSection } from "./components/testimonials-section/TestimonialsSection";
import { WorkExperienceSection } from "./components/work-experience-section/WorkExperienceSection";
import { fetchHygraphQuery } from "./lib/fetch-hygraph-query";
import { HomePageData } from "./types/page-info";

const getPageData = async (): Promise<HomePageData> => {
    const query = `query MyQuery {
        page(where: {slug: "home"}) {
          badges {
            name
          }
          descriptionText {
            raw
          }
          descriptionTitle
          heroSectionItems {
            name
            icon
          }
          introduction {
            raw
          }
          introductionTitle
          profilePicture {
            url
          }
          skills {
            name
            icon
            startDate
          }
        }
      }

      `;

    return fetchHygraphQuery(query);
};

export default async function Home() {
    const { page: pageData } = await getPageData();
    console.log(pageData);
    return (
        <>
            <HeroSection homeInfo={pageData} />
            <Skills tech={pageData.skills} />
            <ProjectsSection />
            <TestimonialsSection />
            <WorkExperienceSection />
        </>
    );
}
