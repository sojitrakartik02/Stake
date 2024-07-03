const create = require('../Models/userModel');
const bcrypt = require('bcryptjs');

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email or password is incorrect' });
        }

        // Find user by email
        const user = await create.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Email or password is incorrect' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Email or password is incorrect' });
        }

        // Return user details upon successful login
        res.status(200).json({
            message: "Login Successful",
            user: {
                _id: user._id,
                name: user.name,
                phone: user.phone,
                address: user.address,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({ message: "Error in Logging In" });
    }
};

module.exports = loginController;
