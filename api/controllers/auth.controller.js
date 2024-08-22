import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        // Respond with success
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: 'Error creating user', error });
    }
};





