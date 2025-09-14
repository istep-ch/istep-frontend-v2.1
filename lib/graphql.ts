import { createClient } from "urql";

const url = "https://vercel.saleor.cloud/graphql/";

export const client = createClient({
  url,
  exchanges: [],
});
