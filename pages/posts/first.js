import Link from 'next/link'

export default function FirstPost() {
   return (
      <>
         <h1>My First Post</h1>
         <h2>
            <Link href="/">
               Home
            </Link>
         </h2>
         <br/>
         <img src="../images/fig2020.jpg" alt="Logo" />
      </>	  
   )
}