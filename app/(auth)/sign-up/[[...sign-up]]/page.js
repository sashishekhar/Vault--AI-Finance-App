import { SignUp } from "@clerk/nextjs";
import { Divide } from "lucide-react";



const page = () => {
  return (
    <div className="flex justify-center items-center pt-25">
      <SignUp/>
    </div>
  )
}

export default page
