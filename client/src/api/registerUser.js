export const fetchToken = async (username, password, isAdmin) => {

    const response = await fetch('http://localhost:3000/users', {
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
