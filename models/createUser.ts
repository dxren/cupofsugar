import { createUser } from "../models/user"

const user = await createUser({name:"john", email:"11112@gmail.com", location: "nyc", bio:"graphy"} )

console.log(user)
