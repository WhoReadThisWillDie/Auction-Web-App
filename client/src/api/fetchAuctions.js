export const fetchAuctions = async (filters = {}) => {
    const queryParams = new URLSearchParams();

    if (filters.laptopName) {
        queryParams.append('laptopName', filters.laptopName);
    }
    if (filters.endTime) {
        queryParams.append('endTime', filters.endTime);
    }
    if (filters.lowestPrice) {
        queryParams.append('lowestPrice', filters.lowestPrice);
    }
    if (filters.highestPrice) {
        queryParams.append('highestPrice', filters.highestPrice);
    }

    let url = `http://localhost:3000/auctions`;
    if (queryParams.toString() !== '') {
        url = `http://localhost:3000/auctions/?${queryParams.toString()}`;
    }
    const response = await fetch(url);

    const data = await response.json();
    if (response.ok) {
        return data;
    }
    throw new Error(data.error);
};