
export default async function getUser(userID : string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    if(!res.ok) throw new Error('fail to fetch user')
  return res.json()
}
