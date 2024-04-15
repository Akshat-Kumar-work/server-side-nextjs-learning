import { getServerSession } from "next-auth"
import { authOptions } from "../lib/auth";

const  page = async () => {
  //to add extra information like id etc, pass authoptions in arugument of getServerSession because by default it dont return extra added info
  //but get session hook does return it , no need to pass there
    const session = await getServerSession(authOptions);
    console.log("data",session)
  return (
    <div>

        user authentication details for server component
        {JSON.stringify(session)}
    </div>
  )
}

export default page;