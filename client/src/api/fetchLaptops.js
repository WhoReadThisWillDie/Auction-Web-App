export const fetchLaptops = async () => {
    const response = await fetch('http://localhost:3000/laptops')
    try {
        return await response.json()
    }
    catch (error) {
        throw new Error(error);
    }
}