import { createClient, groq } from "next-sanity";
import {
    HomePageExperience,
    HomePageInfo,
    HomePageProject,
    HomePageTestimonial,
} from "../app/types/page-info";

export async function getProjects(): Promise<HomePageProject[]> {
    const client = createClient({
        projectId: "dw5bak2b",
        dataset: "production",
        apiVersion: "2023-03-04",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            name,
            "slug": slug.current,
            shortDescription,
            "imageOne": imageOne.asset->{"alt": alt, "url": url},
            "imageTwo": imageTwo.asset->{"alt": alt, "url": url},
            links,
            description,
            techTags
        }`
    );
}

export async function getProjectPage(slug: string): Promise<HomePageProject> {
    const client = createClient({
        projectId: "dw5bak2b",
        dataset: "production",
        apiVersion: "2023-03-04",
    });

    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            name,
            "slug": slug.current,
            shortDescription,
            "imageOne": imageOne.asset->{"alt": alt, "url": url},
            "imageTwo": imageTwo.asset->{"alt": alt, "url": url},
            links,
            description,
            techTags
        }`,
        { slug: slug }
    );
}

export async function getPage(): Promise<HomePageInfo[]> {
    const client = createClient({
        projectId: "dw5bak2b",
        dataset: "production",
        apiVersion: "2023-03-04",
    });

    return client.fetch(
        groq`*[_type == "page"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        introductionTitle,
        introduction,
        "profilePicture": profilePicture.asset->url,
        descriptionTitle,
        descriptionText,
        skills,
        "testimonials": testimonials[]->{
          name,
          content,
          title,
          socialMediaLink,
          "profilePicture": profilePicture.asset->url
        }
      }`
    );
}

export async function getTestimonial(): Promise<HomePageTestimonial[]> {
    const client = createClient({
        projectId: "dw5bak2b",
        dataset: "production",
        apiVersion: "2023-03-04",
    });

    return client.fetch(
        groq`*[_type == "testimonial"]{
        _id,
        _createdAt,
        name,
        content,
        title,
        socialMediaLink,
        "picture": picture.asset->url
      }`
    );
}

export async function getExperience(): Promise<HomePageExperience[]> {
    const client = createClient({
        projectId: "dw5bak2b",
        dataset: "production",
        apiVersion: "2023-03-04",
    });

    return client.fetch(
        groq`*[_type == "experience"]{
        _id,
        _createdAt,
        name,
        company,
        role,
        startDate,
        endDate,
        description,
        "companyPicture": companyPicture.asset->url,
        companyURL,
        skills,
        techTags,
        year
      }`
    );
}
