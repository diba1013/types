import { defineConfig } from "@diba1013/tscz";
import { version } from "./package.json";

const NAME = "types";

export default defineConfig({
	name: NAME,
	define: {
		__NAME__: NAME,
		__VERSION__: version,
	},
});
