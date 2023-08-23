import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import getAllUser from "@/lib/getAllUser";
import { Metadata } from "next";



type Params = {
  params: {
    userID: string
  }
}

//to put metadata -----------------------
export  async function generateMetadata({ params: { userID } }: Params): Promise <Metadata>{
  const userData: Promise<User> = getUser(userID);
  const user: User = await userData
  return {
    title: user.name,
    description: `this is page of ${user.name}`
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
