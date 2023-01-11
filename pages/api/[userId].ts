import type { NextApiRequest, NextApiResponse } from "next";
import { users } from "../../userData/users";

type Data =
  | {
      id: number;
      name: string;
      email: string;
    }
  | undefined;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { userId }: any = req.query;
  if (req.method === "GET") {
    const userIndvidual = users.find((c) => c.id == parseInt(userId));
    console.log("Deleted Item");
    return res.status(200).json(userIndvidual);
  } else if (req.method === "DELETE") {
    const deleteUser = users.find((c) => c.id == parseInt(userId));
    const index = users.findIndex((ur) => ur.id === parseInt(userId));
    console.log(index);
    users.splice(index, 1);
    console.log(users);
    return res.status(200).json(deleteUser);
  }
}
