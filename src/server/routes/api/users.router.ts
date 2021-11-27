import express from 'express';
import db from '../../db';
import {generateHashSync} from "../../common/utilities/hash.util";

export const userRouter = express.Router();

// GET ALL USERS
userRouter.post('/', async (req, res, next) => {
  try {
    const result = await db.userQueries.selectAllUsers();
    res.send(result);
  } catch (err: any) {
    console.log("Route Error: ", err);
    res.status(500).send({msg: "GET ALL USERS Route Error", error: err.message});
  }
});

// GET USER BY ID
userRouter.get('/:userId', async (req, res, next) => {
  try {
    const result = await db.userQueries.selectUser(req.params.userId);
    res.json(result[0]);
  } catch (err: any) {
    console.log("Route Error: ", err);
    res.status(500).send({msg: "GET USER Route Error", error: err.message});
  }
});

// CREATE NEW USER
userRouter.post('/register', async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await db.userQueries.insertUser(
      newUser.email,
      newUser.displayName,
      generateHashSync(newUser.password)
    );
    res.send(result);
  } catch (err: any) {
    console.log("Route Error: ", err);
    res.status(500).send({msg: "POST USER Route Error", error: err.message});
  }
});

// MODIFY EXISTING USER BY ID
userRouter.put('/:userId', async (req, res, next) => {
  try {
    const user = req.body;
    const result = await db.userQueries.updateUser(req.params.userId, user);
    res.send(result);
  } catch (err: any) {
    console.log("Route Error: ", err);
    res.status(500).send({msg: "PUT USER Route Error", error: err.message});
  }
});

// DELETE EXISTING USER BY ID
userRouter.delete('/:userId', async (req, res, next) => {
  try {
    const result = await db.userQueries.deleteUser(req.params.userId);
    res.send(result);
  } catch (err: any) {
    console.log("Route Error: ", err);
    res.status(500).send({msg: "DELETE USER Route Error", error: err.message});
  }
});