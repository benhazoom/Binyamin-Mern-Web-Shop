//The controller acts as a bridge between the application's routes and the underlying business logic and data management,
//ensuring that requests are processed correctly and responses are sent back to the client.

import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.send("Auth user");
});

// @desc    Register user & get token
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc    Logout user & clear cookie
// @route   POST /api/users/logout
// @access  Privet
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Privet
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc    Update userprofile
// @route   GET /api/users/profile
// @access  Privet
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc    Get users
// @route   GET /api/users
// @access  Privet/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Privet/Admin
const getUserByID = asyncHandler(async (req, res) => {
    res.send("get user by id");
  });

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Privet/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Privet/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,updateUser
}
