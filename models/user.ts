import prisma from '../models/utils/prisma';

interface User {
    name: string,
    email: string,
    location: string,
    bio: string,
}

export function createUser ({
    name,
    email,
    location,
    bio
}: User) {

    return(prisma.user.create({

        data:{
            name, email, location, bio
        }

    })) 

} 


// takes in attributes that the user 
// has updated. overwrites the current
// user attributes 
export function editUser(userId:string, {
    name,
    email,
    location,
    bio,
}: User){
    return (prisma.user.update({
        where:{
            id: userId,
        },
        data:{
            name: name,
            email: email,
            location: location,
            bio
        }
    }))
}