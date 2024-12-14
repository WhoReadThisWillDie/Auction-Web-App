const BASE_URL = 'http://localhost:3000'

export const fetchToken = async (url, username, password, isAdmin= false) => {

    const response = await fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password, isAdmin}),
    });

    const data = await response.json();

    if (response.ok) {
        return data.token;
    }

    throw new Error(data.message);
};
