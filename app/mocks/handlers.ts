import { handlers as authHandlers } from "../../src/auth/handlers";
import { handlers as taskHandlers } from "../../src/tasks/handlers";

export const handlers = [...taskHandlers, ...authHandlers];
