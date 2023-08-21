import { createClient, groq } from "next-sanity";
import { HomePageData, HomePageInfo } from "../app/types/page-info";

export async function getProjects() {
    const client = createClient({
        projectId: "dw5bak2b",
        dataset: "production",
        apiVersion: "2023-03-04",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            github,
            preview,
            content
        }`
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
            skills
        }`
    );
}
