import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "6wzsf1yl",
  dataset: "production",
  apiVersion: "2023-11-07",
  useCdn: true,
  token:
    "skNQJyVueBr0hEcsmfvPa2ahhph0eouhdUYLAuhsZ7wwtdIe8LMidKdgcgtP2wYwMNRcyPkE6qMNnUwuQDo3khONeUQYu6MlqSAY7cyEDaPNsCd8MojckqrYE9PwPKUvj18kJPqCrtZ20nSC0lQdPQHygRlydZZBrdhgMI9s1nFXOQ9qWeJT",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);