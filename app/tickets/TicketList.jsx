// import Link from "next/link"
// import { resolve } from "styled-jsx/css"


// async function getTickets() {

//     await new Promise(resolve => setTimeout(resolve, 3000))

//     const res = await fetch('http://localhost:4002/tickets', {
//       next: {
//         revalidate: 0 // use 0 to opt out of using cache
//       }
//     })
  
//     return res.json()
//   }
  
//   export default async function TicketList() {
//     const tickets = await getTickets()
  
//     return (
//       <>
//        {tickets.map((ticket) => (
//         <div key={ticket.id} className="card-my-5">
//         <Link href={`/tickets/${ticket.id}`}>
//         <br />
//         <h3>Name: {ticket.name}</h3>
//         <h3>Last Name: {ticket.lastname}</h3>
//         <h3>Course Name: {ticket.coursename}</h3>
//         <h3>Phone Number: {ticket.phonenumber}</h3>
//         <h3>Website url: {ticket.wesiteurl}</h3>
//         <h3>Email address: {ticket.emailaddress}</h3>
//         <h3>Password: {ticket.password}</h3>
//         <h3>Confirm Password: {ticket.confirmpassword}</h3>
//         <br />
//         </Link>
//         </div>
//       ))}
//         {tickets.length === 0 && (
//           <p className="text-center">There are no open tickets, yay!</p>
//         )}
//       </>
//     )
//   }