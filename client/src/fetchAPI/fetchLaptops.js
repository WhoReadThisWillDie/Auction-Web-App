export const fetchLaptops = async () => {
    const response = await fetch('http://localhost:3000/laptops')
    try {
        return await response.json()
    }
    catch (error) {
        console.log("Error fetching laptops", error);
    }
}