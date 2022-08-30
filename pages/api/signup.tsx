import type { NextApiRequest, NextApiResponse } from "next";
import { connection } from "../../hooks/dbconnection";
import bcrypt from "bcrypt";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const password = bcrypt.hashSync(req.body.password, 14);
  const query1 = `INSERT INTO users (firstname, lastname, email, phonenumber) values ('${req.body.firstname}','${req.body.lastname}', '${req.body.email}', '${req.body.phoneNumber}')`,
    query2 = `INSERT INTO auth (username, password) values ('${req.body.username}','${password}')`;
  if (req.method == "POST") {
    connection.connect();
    connection.query(query1, function (error) {
      if (error) throw error;
    });
    connection.query(query2, function (error) {
      if (error) throw error;
    });
    connection.end();
  } else {
    res.status(404).json({ message: "Page Not Found" });
  }
}
