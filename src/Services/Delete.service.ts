export default async function Delete(id: number, path: string): Promise<string | undefined> {
    try {
        const res = await fetch(`http://192.168.31.25:8080/${path}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
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