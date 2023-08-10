import { PollyClient } from "@aws-sdk/client-polly";

const client = new PollyClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.REACT_APP_AMAZON_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AMAZON_SECRET_ACCESS_KEY,
  },
});

export default client;
