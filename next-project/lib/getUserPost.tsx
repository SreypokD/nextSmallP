export default async function getUserPost (userID : string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userID=${userID}` , {next: {revalidate:60}}) 
    if(!res.ok) throw new Error('fail to fetch post user')
  return res.json()
}

