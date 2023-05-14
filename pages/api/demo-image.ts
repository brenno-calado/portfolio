import { GraphQLClient } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";

interface ImageTextQuery {
  repository: {
    object: {
      objectUrl: string;
    };
  };
}

export interface ImageUrl {
  imageUrl: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    
    const graphQLClient = new GraphQLClient(
      String(process.env.GH_GRAPHQL_ENDPOINT),
    {
      headers: {
        authorization: `Bearer ${String(process.env.GH_TOKEN)}`,
      },
    }
    );
    
    const query = `
    query ($repo: String!) {
      repository(name: $repo, owner: "brenno-calado") {
        name
        object(expression: "main:demo.gif") {
          ... on Blob {
            objectUrl
          }
        }
      }
    }
    `;

  const variables = {
    repo: req.query.repo,
  };
  
  const data = await graphQLClient.request<ImageTextQuery>(query, variables);
  
  console.log(data)
  const imageUrl = data.repository.object?.objectUrl;
  
  res.status(200).json({ imageUrl });
} catch (error) {
  console.error(error)
  res.status(401).json({ error })
}
}
