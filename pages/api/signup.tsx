import type { NextApiRequest, NextApiResponse } from "next";
import { connection } from "../../hooks/dbconnection";
import bcrypt from "bcrypt";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = req.body.email,
    password = bcrypt.hashSync(req.body.password, 14);
  const query = `INSERT INTO user_accounts (email, password) values ('${email}','${password}')`;
  if (req.method == "POST") {
    connection.query(query, (error, result) => {
      if (error) throw error;
      res.send({ message: "succes" });
    });
  } else {
    res.status(404).json({ message: "Page Not Found" });
  }
}
