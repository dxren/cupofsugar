import prisma from '../models/utils/prisma';

interface User {
    name: string,
    email: string,
    location: string,
    bio: string,
    id: string
}

export function createUser ({
    name,
    email,
    location,
    bio,
    id
}: User) {

    return(prisma.user.create({

        data:{
            name, email, location, bio, id
        }

    }))
    
    
    

} 