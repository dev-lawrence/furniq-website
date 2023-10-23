import { createClient } from '@sanity/client';

const clientConfig = {
  projectId: 'ea89udt1',
  dataset: 'production',
  apiVersion: 'v2022-10-22',
  useCdn: false,
};

export const client = createClient(clientConfig);

export const fetchData = async () => {
  const products = await client.fetch('*[_type == "product"]');
  return products;
};
