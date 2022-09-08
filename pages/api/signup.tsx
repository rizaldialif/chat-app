import type { NextApiRequest, NextApiResponse } from "next";
import { connection } from "../../hooks/dbconnection";
import bcrypt from "bcrypt";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const password = bcrypt.hashSync(req.body.password, 14);
  const query = `INSERT INTO auth (email,username, password) values ('${req.body.email}','${req.body.username}','${password}')`;
  if (req.method == "POST") {
    connection.query(
      `SELECT * FROM auth WHERE username = '${req.body.username}' OR email = '${req.body.email}'`,
      function (error, result) {
        if (error) throw error;
        if (!result.length) {
          connection.query(query, function (error) {
            if (error) throw error;
            res.redirect("/login");
          });
        } else {
          res.send({ result });
        }
      }
    );
  } else {
    res.status(404).json({ message: "Only POST requests" });
  }
}
