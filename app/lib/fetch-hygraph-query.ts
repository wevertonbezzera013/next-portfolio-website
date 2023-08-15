import { HomePageData } from "../types/page-info";

export const fetchHygraphQuery = async (
    query: string,
    revalidate?: number
): Promise<HomePageData> => {
    try {
        console.log("Fetching data with query:", query);

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

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const content = await response.text();
        console.log("API Response Content:", content);

        try {
            const { data } = JSON.parse(content);
            console.log("Parsed Data:", data);
            return data as HomePageData;
        } catch (jsonError) {
            console.error("Error parsing JSON:", jsonError);
            throw jsonError;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
