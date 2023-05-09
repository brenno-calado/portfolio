import { Octokit } from "@octokit/rest";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
  });

  try {
    const { data } = await octokit.repos.listForUser({
      username: "brenno-calado",
    });

    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
