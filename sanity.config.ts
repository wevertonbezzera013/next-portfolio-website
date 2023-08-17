import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas/index";

const config = defineConfig({
    projectId: "dw5bak2b",
    dataset: "production",
    title: "Wev_Dev",
    apiVersion: "2023-03-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
});

export default config;
