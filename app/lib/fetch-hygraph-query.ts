export const fetchHygraphQuery = async <T>(query: string): Promise<T> => {
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
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const { data } = await response.json();
        return data;
    } catch (error) {
        // Handle and log any errors here
        console.error("Error fetching data:", error);
        throw error;
    }
};
