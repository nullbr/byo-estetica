/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import schemas from "./sanity/schemas";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema: { types: schemas },
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
});
