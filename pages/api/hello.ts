// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql";

type Data = {
  name: string;
};

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connection.connect();
  connection.query("SELECT * from users", function (error, results, fields) {
    if (error) throw error;
    res.status(200).json(results);
  });
}
