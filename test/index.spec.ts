import { NONE, UNDEFINED } from "@/index";
import { expect, it } from "vitest";

it("NONE should be null", () => {
	expect(NONE).to.be.null;
});

it("UNDEFINED should be undefined", () => {
	expect(UNDEFINED).to.be.undefined;
});
