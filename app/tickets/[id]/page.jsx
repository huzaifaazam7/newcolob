import { notFound } from "next/navigation"

export const dynamicParams = true

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4002/tickets')

    const tickets = await res.json()

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
    
    
}




async function getTicket(id) {
    const res = await fetch(`http://localhost:4002/tickets/${id}`, {
      next: {
        revalidate: 60
      }
    })

    if(!res.ok) {
        notFound()
    }
  
    return res.json()
  }
  
  
  export default async function TicketDetails({ params }) {
    // const id = params.id
    const ticket = await getTicket(params.id)
  
    return (
      <main>
        <nav>
         <h2>List of Forms</h2>
        </nav>
        <div className="card">
        <h3>Name: {ticket.name}</h3>
        <h3>Last Name: {ticket.lastname}</h3>
        <h3>Course Name: {ticket.coursename}</h3>
        <h3>Phone Number: {ticket.phonenumber}</h3>
        <h3>Website url: {ticket.wesiteurl}</h3>
        <h3>Email address: {ticket.emailaddress}</h3>
        <h3>Password: {ticket.password}</h3>
        <h3>Confirm Password: {ticket.confirmpassword}</h3>
            
            <small>Created by {ticket.user_email}</small>
        </div>
      </main>
    )
  }