import { Metadata } from 'next'
import getAllUser from '@/lib/getAllUser'
import Link from 'next/link'
import { Content } from 'next/font/google'


export const metadata: Metadata = {
    title : 'Users'
}

export default  async function UserPage() {
    const usersData: Promise<User[]> = getAllUser()
    const users = await usersData
    const costent = (
        <section>
            <Link href="/">Back home</Link>
            {users.map(user=>{
                return (
                    <p key={user.id}>
                     <Link href={`/users/${user.id}`}> {user.name}</Link>   
                    </p>
                )
            })}
        </section>
    ) 
  return costent
}
