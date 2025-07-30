import { setupServer } from "msw/node/index.js";
import { handlers } from "./handlers.ts";

export const server = setupServer(...handlers);
