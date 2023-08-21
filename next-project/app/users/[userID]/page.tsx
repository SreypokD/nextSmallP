import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";


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
      <h3 style={{color:"red"}}>{users.name}</h3>
      <Suspense fallback={<p>loading........</p>}>  
        <UserPosts promise={userPostData} />
      </Suspense>
    </div>
  )
}
