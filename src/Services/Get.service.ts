export default async function GET(id:string | string[], path: string): Promise<string | undefined> {
    const fullPath = id ? `${path}/${id}` : `${path}`

    try {
        const res = await fetch(`http://192.168.31.25:8080/${fullPath}`, {
            method: 'GET',
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