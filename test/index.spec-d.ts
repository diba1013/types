import { Callable, Runnable } from "@/index";
import { describe, expectTypeOf, it } from "vitest";

describe("Runnable", () => {
	it("without argument should be a simple function", () => {
		// eslint-disable-next-line unicorn/consistent-function-scoping
		const cut: Runnable = () => {
			// void
		};

		expectTypeOf(cut).toBeFunction();
		expectTypeOf(cut).parameter(0).toBeNever();
		// expectTypeOf(cut).returns.toBeVoid();
	});

	it("with input should resolve proper type", () => {
		// eslint-disable-next-line unicorn/consistent-function-scoping
		const cut: Runnable<void, string> = (ignore: string) => {
			console.log(ignore);
		};

		expectTypeOf(cut).parameter(0).toBeString();
		expectTypeOf(cut).returns.toBeVoid();
	});

	it("with output should resolve proper type", () => {
		// eslint-disable-next-line unicorn/consistent-function-scoping
		const cut: Runnable<string> = () => {
			return "42";
		};

		expectTypeOf(cut).parameter(0).toBeNever();
		// expectTypeOf(cut).returns.toBeString();
	});
});

describe("Callable", () => {
	it("without argument should be a simple function", () => {
		// eslint-disable-next-line unicorn/consistent-function-scoping
		const cut: Callable = async () => {
			// void
		};

		expectTypeOf(cut).toBeFunction();
		expectTypeOf(cut).parameter(0).toBeNever();
		// expectTypeOf(cut).returns.resolves.toBeVoid();
	});

	it("with input should resolve proper type", () => {
		// eslint-disable-next-line unicorn/consistent-function-scoping, @typescript-eslint/require-await
		const cut: Callable<void, string> = async (ignore: string) => {
			console.log(ignore);
		};

		expectTypeOf(cut).parameter(0).toBeString();
		expectTypeOf(cut).returns.resolves.toBeVoid();
	});

	it("with output should resolve proper type", () => {
		// eslint-disable-next-line unicorn/consistent-function-scoping, @typescript-eslint/require-await
		const cut: Callable<string> = async () => {
			return "42";
		};

		expectTypeOf(cut).parameter(0).toBeNever();
		// expectTypeOf(cut).returns.resolves.toBeString();
	});
});
