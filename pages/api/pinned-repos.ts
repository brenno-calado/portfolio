import { GraphQLClient } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";

export interface PinnedRepos {
  name: string;
  description: string;
  url: string;
  primaryLanguage: string;
}

interface PinnedItemsQuery {
  user: {
    pinnedItems: {
      nodes: {
        name: string;
        description: string;
        url: string;
        primaryLanguage: {
          name: string;
        };
      }[];
    };
  };
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('GH_GRAPHQL_ENDPOINT')
    console.log(String(process.env.GH_GRAPHQL_ENDPOINT))
    const client = new GraphQLClient(String(process.env.GH_GRAPHQL_ENDPOINT), {
      headers: {
        authorization: `Bearer ${String(process.env.GH_TOKEN)}`,
      },
    });

    const query = `
    query {
      user(login: "brenno-calado") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              primaryLanguage {
                name
              }
            }
          }
        }
      }
    }
  `;

    const data = await client.request<PinnedItemsQuery>(query);

    const pinnedReposInfo = data.user.pinnedItems.nodes.map((repo) => {
      return {
        name: repo.name,
        description: repo.description,
        url: repo.url,
        primaryLanguage: repo.primaryLanguage?.name,
      };
    });

    res.status(200).json({ data: pinnedReposInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
