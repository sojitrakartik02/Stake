const create = require('../Models/userModel');
const bcrypt = require('bcryptjs');

const createController = async (req, res) => {
    try {
        const { name, email, password, address, phone } = req.body;
        
        // Check for missing fields
        if (!name || !email || !password || !address || !phone) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if user already exists
        const user = await create.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        // Create new user
        const createUser = new create({
            name, email, password: hashedPassword, phone, address
        });

        await createUser.save();
        
        // Respond with success message and user data
        res.status(201).json({
            message: 'User created successfully',
            user: {
                _id: createUser._id,
                name: createUser.name,
                phone: createUser.phone,
                address: createUser.address,
                email: createUser.email
            }
        });
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({ message: "Error in Creating Account" });
    }
};

module.exports = createController;
