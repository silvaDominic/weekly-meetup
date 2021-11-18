import express from 'express';

const router = express.Router();

// GET ALL USERS
router.get('/', async (req, res, next) => {
  try {
    res.send({msg: "GET Users"});
  } catch (err: any) {
    console.log("Route Error: ", err);
    res.status(500).send({msg: "GET ALL USERS Route Error", error: err.message});
  }
});

// GET USER BY ID
router.get('/:userId', async (req, res, next) => {
  try {
    res.send({msg: "GET User By ID"});
  } catch (err: any) {
    console.log("Route Error: ", err);
    res.status(500).send({msg: "GET USER Route Error", error: err.message});
  }
});

// CREATE NEW USER
router.post('/', async (req, res, next) => {
  try {
    const { user } = req.body;
    res.send({msg: "POST User", ...user});
  } catch (err: any) {
    console.log("Route Error: ", err);
    res.status(500).send({msg: "POST USER Route Error", error: err.message});
  }
});

// MODIFY EXISTING USER BY ID
router.put('/:userId', async (req, res, next) => {
  try {
    const modifiedUser = req.body;
    res.send({msg: "PUT User " + req.params.userId, ...modifiedUser});
  } catch (err: any) {
    console.log("Route Error: ", err);
    res.status(500).send({msg: "PUT USER Route Error", error: err.message});
  }
});

// DELETE EXISTING USER BY ID
router.delete('/:userId', async (req, res, next) => {
  try {
    res.send({msg: "DELETE User " + req.params.userId});
  } catch (err: any) {
    console.log("Route Error: ", err);
    res.status(500).send({msg: "DELETE USER Route Error", error: err.message});
  }
});

export default router;