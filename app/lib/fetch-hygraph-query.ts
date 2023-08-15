import { HomePageData } from "../types/page-info";

export const fetchHygraphQuery = async (
    query: string,
    revalidate?: number
): Promise<HomePageData> => {
    const response = await fetch(process.env.HYGRAPH_URL!, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({
            query,
            revalidate,
        }),
    });

    const { data } = await response.json();
    console.log("HYGRAPH_URL: ", process.env.HYGRAPH_TOKEN);

    // Here, make sure 'data' is properly typed as HomePageData
    return data as HomePageData;
};
