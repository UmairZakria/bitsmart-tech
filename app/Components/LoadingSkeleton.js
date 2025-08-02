import Image from "next/image"
import Loadimg from "@/public/image.png"



export default function LoadingSkeleton() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="w-full h-screen animate-pulse flex items-center justify-center">

            <Image
                className=" object-cover    "
                src={Loadimg} // Path to your image
                
                alt="Loading..."
            />
        </div>
    );
  }