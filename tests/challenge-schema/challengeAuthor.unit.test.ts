import { challengeAuthor } from '@challenge-schema/challengeAuthor';
import { describe, expect, it } from "bun:test";

describe('Challenge Author Schema Validation', () => {
    it('should validate the full challenge author schema', () => {
        const validAuthor = {
            name: "John Doe",
            email: "johndoe@example.com",
            website: "https://example.com",
        }
        challengeAuthor.parse(validAuthor);
        expect(validAuthor).toBeDefined();
        expect(validAuthor.name).toBe("John Doe");
        expect(validAuthor.email).toBe("johndoe@example.com");
        expect(validAuthor.website).toBe("https://example.com");
    });
    it('should throw an error when passed invalid schema', () => {
        const invalidAuthor = {
            id: "asdfasdfasdf",
        }
        expect(() => {
            challengeAuthor.parse(invalidAuthor);
        }).toThrowError();
    });
})