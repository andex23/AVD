const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";
const token = process.env.SANITY_READ_TOKEN;

export const sanityEnv = {
  projectId,
  dataset,
  apiVersion,
  token,
};

export const hasSanityConfig = Boolean(projectId && dataset);
