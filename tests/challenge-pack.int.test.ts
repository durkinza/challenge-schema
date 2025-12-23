import { describe, expect, it } from "bun:test";
import fs from 'fs';
import path from 'path';

import { validateChallengePack } from '../src/index';

const validChallengePacks = [
    './examples/nlan-pack/challenge-pack.json'
];
const inValidChallengePacks = [
    './bad-examples/empty/challenge-pack.json',
];

describe('Challenge Pack Schema Validation', () => {
    const loadChallengeFile = (filePath: string) => {
        const fullPath = path.resolve(__dirname, filePath);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');
        return JSON.parse(fileContents);
    };

    describe('Cookie Monster Challenge', () => {
        it('should load the challenge pack file', () => {
            const challenge = loadChallengeFile(validChallengePacks[0]);
            expect(challenge).toBeDefined();
        });

        it('should pass validation', () => {
            const challenge = loadChallengeFile(validChallengePacks[0]);

            expect(() => {
                validateChallengePack(challenge);
            }).toBeTruthy();

            // This should not throw an error
            const result = validateChallengePack(challenge);
            expect(result).toBeDefined();
            expect(result.challenges[0].id).toBe('cookie-monster');
            expect(result.challenges[0].path).toBe('./c66434c0-4943-41fa-9510-a8cb4fb8fc13');
        });
    });
    describe('Bad Challenge Bundles', () => {
        it('should identify specific validation errors', () => {
            const challenge = loadChallengeFile(inValidChallengePacks[0]);

            expect(() => {
                validateChallengePack(challenge);
            }).toThrowError();
        });
    });
});