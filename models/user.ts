import { z } from 'zod';
import prisma from '../models/utils/prisma';
import { v4 as uuidv4 } from 'uuid';

export interface CreateUser {
    name?: string,
    email: string,
    location?: string,
    bio?: string,
    password: string,
}

export async function login(email: string, password: string) {

    const LoginSchema = z.object({
        email: z
            .string()
            .min(1, { message: "This field has to be filled." })
            .email("This is not a valid email."),
        password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    });
    const loginDetails = LoginSchema.parse({ email, password })

    console.log(loginDetails);

    let user = await prisma.user.findUnique({ where: { email: loginDetails.email } });
    if (!user) {
        user = await prisma.user.create({ data: { email: loginDetails.email, password: loginDetails.password } })
    }

    console.log(user)

    // Compare the provided password with the hashed password
    // const passwordMatch = await bcrypt.compare(password, user.password);
    const passwordMatch = password === user.password;
    if (!passwordMatch) {
        throw new Error('Invalid email or password');
    }

    // Generate a new session token
    const sessionToken = uuidv4();

    // Update or create the session for the user
    const session = await prisma.session.create({
        data: {
            user: { connect: { id: user.id } },
            sessionToken,
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Set expiration (e.g., 24 hours from now)
        },
    });

    return session;

}

export function getUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email }, select: { id: true, email: true, name: true, location: true, bio: true } });
}

export function createUser(createUserData: CreateUser) {

    const CreateUserSchema = z.object({
        name: z.string().min(1, { message: "This field has to be filled." }).optional().default(""),
        email: z
            .string()
            .min(1, { message: "This field has to be filled." })
            .email("This is not a valid email."),
        password: z.string().min(8, { message: "Password must be at least 8 characters." }),
        location: z.string().min(1, { message: "This field has to be filled." }).optional().default(""),
        bio: z.string().min(1, { message: "This field has to be filled." }).optional().default(""),
    })

    const { name, email, password, location, bio } = CreateUserSchema.parse(createUserData)

    return (prisma.user.create({
        data: {
            name,
            email,
            password,
            location,
            bio
        },
        select: {
            id: true,
            name: true,
            email: true,
            location: true,
            bio: true
        }
    }))

}

interface EditUser {
    name: string,
    email: string,
    location: string,
    bio: string
}


// takes in attributes that the user 
// has updated. overwrites the current
// user attributes 
export function editUser(userId: string, {
    name,
    email,
    location,
    bio,
}: EditUser) {
    return (prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            name: name,
            email: email,
            location: location,
            bio
        },
        select: {
            id: true,
            name: true,
            email: true,
            location: true,
            bio: true
        }
    }))
}