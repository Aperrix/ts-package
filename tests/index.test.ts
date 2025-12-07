import { describe, expect, test } from "bun:test"
import { one, two } from "../src"

describe("should", () => {
    test("equal", () => {
        expect(one).toEqual(one)
    })

    test("not equal", () => {
        expect(one).not.toEqual(two)
    })
})
