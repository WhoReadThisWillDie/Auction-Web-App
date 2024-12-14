export const fetchAuctions = async () => {
    const response = await fetch('http://localhost:3000/auctions')
    try {
        return await response.json()
    }
    catch (error) {
        throw new Error(error);
    }
}