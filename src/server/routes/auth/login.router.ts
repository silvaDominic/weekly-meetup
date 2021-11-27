import {Router} from 'express';
import db from '../../db';
import {compareHashSync} from '../../common/utilities/hash.util';

export const loginRouter = Router();

loginRouter.post('/', async (req: any, res: any) => {
  const email: string = req.body.email;
  const password: string = req.body.password;
  try {
    const [userRows]: any = await db.userQueries.findUser("email", email);
    const user = userRows[0];
    if (user && compareHashSync(password, user.password)) {
      return res.status(200).send(user);
    }
    return res.status(401).send({msg: "Invalid credentials."});
  } catch (err: any) {
    console.log("Route Error: ", err);
    res.status(500).send({msg: "LOGIN USER Route Error", error: err.message});
  }
});