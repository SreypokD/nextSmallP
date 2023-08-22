import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import getAllUser from "@/lib/getAllUser";


type Params = {
  params: {
    userID: string
  }
}
export default async function UserPage({ params: { userID } }: Params) {
  const userData: Promise<User> = getUser(userID);
  const userPostData: Promise<Post[]> = getUserPost(userID)
  // const [users, userPost] = await Promise.all([userData, userPostData])
  const users = await userData 
  return (
    <div> 
      <h1 style={{color:"red"}}>{users.name}</h1>
      <Suspense fallback={<p>loading........</p>}>  
        <UserPosts promise={userPostData} />
      </Suspense>
    </div>
  )
}

export async function generateStaticParams() {
  const userData: Promise<User[]> = getAllUser()
  const users = await userData
  return users.map(user=>({
    userID : user.id.toString()
  }))
}
