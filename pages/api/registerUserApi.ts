import type { NextApiRequest, NextApiResponse } from "next";
import { users } from "../../userData/users";

type Data = { id: number; name: string; email: string }[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    console.log("called GET");
    return res.status(200).json(users);
  } else if (req.method === "POST") {
    const nameData = req.body.name;
    const emailData = req.body.email;
    let current_id = users.length + 1;
    users.push({
      id: current_id,
      name: nameData,
      email: emailData,
    });
    return res.status(200).json(users);
  }
}
