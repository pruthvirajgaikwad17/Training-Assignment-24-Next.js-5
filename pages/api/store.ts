import type { NextApiRequest, NextApiResponse } from "next";

type typeData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeData>
) {
  const response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  data = data.slice(0, 10);
  console.log(data);
  res.status(200).json(data);
}
