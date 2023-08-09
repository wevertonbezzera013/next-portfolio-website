export const fetchHygraphQuery = async <T>(
    query: string,
    revalidate?: number
): Promise<T> => {
    try {
        const response = await fetch(process.env.HYGRAPH_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
            },
            body: JSON.stringify({
                query,
            }),
        });

        if (!response.ok) {
            throw new Error(
                `API request failed with status ${response.status}`
            );
        }

        const responseData = await response.json();

        if (!responseData.data) {
            throw new Error("API response did not contain 'data' property");
        }

        return responseData.data;
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
        throw error; // Re-throw the error to handle it where the fetchHygraphQuery function is called
    }
};
