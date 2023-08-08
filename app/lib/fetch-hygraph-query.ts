export const fetchHygraphQuery = async <T>(
    query: string,
    revalidate?: number
): Promise<T> => {
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
        throw new Error(`Network response was not ok: ${response.status}`);
    }

    const responseData = await response.json();
    const { data } = responseData;

    if (!data) {
        throw new Error("No data returned from the server");
    }

    return data;
};
