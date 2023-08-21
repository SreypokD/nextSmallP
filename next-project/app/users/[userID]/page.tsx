import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost";
import { Suspense } from "react";


type Params = {
  params: {
    userID: string
  }
}
export default async function UserPage({ params: { userID } }: Params) {
  const userData: Promise<User> = getUser(userID);
  const userPostData: Promise<Post[]> = getUserPost(userID)
  const [users, userPost] = await Promise.all([userData, userPostData])

  return (
    <div>
      <strong style={{color:"red"}}>{users.name}</strong>
      <Suspense fallback={<p>loading........</p>}>
        <
      </Suspense>
    </div>
  )
}
