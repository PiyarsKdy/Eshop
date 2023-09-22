import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Darshit Goyani',
        email: 'darshit@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Kashyap Kakadiya',
        email: 'kashyap@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }
];

export default users;