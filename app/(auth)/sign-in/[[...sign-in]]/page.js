import { SignIn } from "@clerk/nextjs";
import { Divide } from "lucide-react";



const page = () => {
  return (
    <div className="flex justify-center items-center pt-35">
      <SignIn/>
    </div>
  )
}

export default page
