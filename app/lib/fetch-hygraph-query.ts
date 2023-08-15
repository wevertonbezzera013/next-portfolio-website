import { HomePageData } from "../types/page-info";

interface CachedData {
    data: HomePageData;
    timestamp: number;
}

let cachedData: CachedData | null = null;

export const fetchHygraphQuery = async (
    query: string,
    revalidate?: number
): Promise<HomePageData> => {
    try {
        if (
            cachedData &&
            revalidate &&
            Date.now() - cachedData.timestamp < revalidate
        ) {
            return cachedData.data;
        }

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

        try {
            const { data } = JSON.parse(content);

            cachedData = {
                data: data as HomePageData,
                timestamp: Date.now(),
            };

            return cachedData.data;
        } catch (jsonError) {
            console.error("Error parsing JSON:", jsonError);
            throw jsonError;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
