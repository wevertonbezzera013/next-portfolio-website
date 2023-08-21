/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import schemas from "./sanity/schemas";

export default defineConfig({
    basePath: "/admin",
    projectId,
    dataset,
    title: "Wev_Dev",
    apiVersion,
    // Add and edit the content schema in the './sanity/schema' folder
    plugins: [deskTool()],
    schema: { types: schemas },
});
