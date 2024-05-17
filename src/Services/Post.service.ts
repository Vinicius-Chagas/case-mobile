export default async function Post(data: any, path: string): Promise<Response | undefined> {
    try {
        const res = await fetch(`http://192.168.31.25:8080/${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            const data: { message: string } = await res.json();
            throw new Error(data.message);
        }
        else {
            return await res.json();
        }

    } catch (error) {
        alert(error);
    }
}