"use client"
import React , {useEffect} from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const page = () => {
  const { slug } = useParams();
  const router = useRouter();


  return (
    <div>
        <div>

      About Page: {slug}
        </div>
        <button onClick={() => router.push("/dashboard")}>Go to Dashboard</button>
    </div>
  )
}

export default page
