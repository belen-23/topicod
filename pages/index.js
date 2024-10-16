import Link from 'next/link'

function HomePage() {
   return (
      <>
         <div>Welcome to Next.js!</div>
         <Link href="/posts/first">First Post</Link>
      </>	    
   )
}

export default HomePage
 