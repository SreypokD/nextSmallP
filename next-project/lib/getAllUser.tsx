export default async function getAllUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) throw new Error('fail to fetch data')
    return res.json();
}


