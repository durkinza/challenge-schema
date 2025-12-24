import { ChallengePack } from '@challenge-pack';
import { describe, expect, it } from 'bun:test';

describe('Challenge Author Schema Validation', () => {
    it('should validate the full challenge author schema', () => {
        const validPack = {
            challenges: [
                {
                    id: "c66434c0-4943-41fa-9510-a8cb4fb8fc13",
                    value: 100,
                    category: "web",
                    path: "./cookie-monster",
                    prerequisites: ["challenge-1", "challenge-2"],
                }
            ]
        }
        ChallengePack.parse(validPack);
        expect(validPack).toBeDefined();
    });
    it('should throw an error when passed invalid schema', () => {
        const invalidPack = {
            id: "asdfasdfasdfas",
        }
        expect(() => {
            ChallengePack.parse(invalidPack);
        }).toThrowError();
    });
})