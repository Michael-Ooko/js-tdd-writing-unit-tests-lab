import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("returns true for a palindrome", () => {
        expect(isPalindrome("racecar")).toBe(true);
    });

    it("returns false for a non-palindrome", () => {
        expect(isPalindrome("car")).toBe(false);
    });

    it("handles mixed case palindromes correctly", () => {
        expect(isPalindrome("RaceCar")).toBe(true);
    });

    it("returns false for an empty string", () => {
        expect(isPalindrome("")).toBe(false);
    });

    it("throws an error for non-alphabetic characters", () => {
        expect(() => isPalindrome("racecar123")).toThrow("Invalid input");
    });

    it("throws an error for non-string input", () => {
        expect(() => isPalindrome(123)).toThrow("Input must be a string");
    });
});

