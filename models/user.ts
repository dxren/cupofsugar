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