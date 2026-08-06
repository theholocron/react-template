import { setProjectAnnotations } from "@storybook/react";
import { setupMSWBrowser } from "@theholocron/vitest-config/setup/msw";

// import { setupMSWNode } from "@theholocron/vitest-config/setup/msw";
import * as previewAnnotations from "./.storybook/preview";
import { worker } from "./app/mocks/browser";
// import { server } from "./app/mocks/node";

const annotations = setProjectAnnotations([previewAnnotations]);

// browser-side MSW (default)
setupMSWBrowser(worker, annotations);

// server-side MSW (uncomment and swap imports above to use)
// setupMSWNode(server, annotations);
