import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(user && (await User.matchPassword(password)))
    {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

// @desc Register user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

// @desc Get user profile
// @route GET /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('user profile');
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('user profile update');
});

// @desc Get users
// @route GET /api/users
// @access private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get users');
});

// @desc Get user by ID
// @route GET /api/users/:id
// @access private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send('get user by id');
});

// @desc Delete users
// @route DELETE /api/users/:id
// @access private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
  res.send('delete users');
});

// @desc Update user
// @route PUT /api/users/:id
// @access private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('update user');
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUsers,
    updateUser
};