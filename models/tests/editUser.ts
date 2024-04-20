import { editUser } from "../user"

const newUser = await editUser("001a", {name:"jane", email:"jane@gmail.com", location: "la", bio:"nic"})

console.log(newUser)
