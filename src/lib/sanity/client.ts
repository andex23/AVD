import { createClient } from "next-sanity";
import { hasSanityConfig, sanityEnv } from "@/lib/sanity/env";

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: sanityEnv.projectId,
      dataset: sanityEnv.dataset,
      apiVersion: sanityEnv.apiVersion,
      useCdn: true,
      token: sanityEnv.token,
      perspective: "published",
    })
  : null;
