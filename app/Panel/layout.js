
'use client'

import Navbar from "./components/Navbar";
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LoadingSkeleton from "../Components/LoadingSkeleton";
import Link from "next/link";

import { SessionProvider } from "next-auth/react";
function AdminLayoutWrapper({ children }) {
    const { data: session, status } = useSession()
    const router = useRouter()
    // useEffect(() => {
    //     if (status === 'unauthenticated') {
    //         router.push('/Login'); 
    //     }
    // }, [status]);

    if (status === 'loading') {
        return (
            <div className="w-full h-screen flex items-center justify-center">

                <LoadingSkeleton />
            </div>
        );
    }

    if (status === 'unauthenticated') {
        return (
            <div  className="flex   items-center justify-center w-full h-screen ">
                <span className=" text-2xl md:text-5xl ">😵 Something Went Wrong </span><Link className="underline text-blue-600" href={'/'}>Return Home</Link>

            </div>
        ) // Avoid rendering while redirecting
    }
    return (
        <div  >

            {children}
        </div>

    )

}

export default function RootLayout({ children }) {
    return (
        <SessionProvider>
            <AdminLayoutWrapper>
                <Navbar />
                {children}

            </AdminLayoutWrapper>
        </SessionProvider>
    );
}
