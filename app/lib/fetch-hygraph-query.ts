export const fetchHygraphQuery = async <T>(
    query: string,
    revalidate?: number
): Promise<T> => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({
            query,
        }),
    };

    const response = await fetch(process.env.HYGRAPH_URL!, requestOptions);

    if (!response.ok) {
        throw new Error(
            `Error fetching data from HYGRAPH: ${response.statusText}`
        );
    }

    const { data } = await response.json();

    return data;
};
