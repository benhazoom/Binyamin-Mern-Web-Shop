import express from "express";
const router = express.Router();
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
  } from '../controllers/userController.js';
import { protect,admin } from "../middleware/authMiddleware.js";//adding user and admin protection to routs - router.route('/profile').put(protect,updateUserProfile)

  router.route('/').post(registerUser).get(protect,admin,getUsers);
  router.post('/logout',logoutUser);
  router.post('/login',authUser);
  router.route('/profile').put(protect,updateUserProfile).get(protect,getUserProfile);
  router.route('/:id').delete(protect,admin,deleteUser).get(protect,admin,getUserByID).put(protect,admin,updateUser);//all admin routes


export default router;