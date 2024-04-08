import { getServerSession } from "next-auth"

const  page = async () => {
    const session = await getServerSession();
    console.log("data",session)
  return (
    <div>

        user authentication details for server component
        {JSON.stringify(session)}
    </div>
  )
}

export default page;