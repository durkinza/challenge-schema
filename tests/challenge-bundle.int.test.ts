import { describe, expect, it } from "bun:test";
import fs from 'fs';
import path from 'path';

import { validateChallengeBundle } from '../src/index';

const validChallenges = [
    './examples/cookie-monster/challenge.json',
    './examples/caesar-cipher/challenge.json'
];
const inValidChallenges = [
    './bad-examples/empty/challenge.json',
    './bad-examples/missing-flag-options/challenge.json',
    './bad-examples/duplicate-hint-ids/challenge.json',
    //'./bad-examples/invalid-flag/challenge.json',
    //'./bad-examples/invalid-deployment/challenge.json',
];

describe('Challenge Schema Validation', () => {
    const loadChallengeFile = (filePath: string) => {
        const fullPath = path.resolve(__dirname, filePath);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');
        return JSON.parse(fileContents);
    };

    describe('Cookie Monster Challenge', () => {
        it('should load the challenge file', () => {
            const challenge = loadChallengeFile(validChallenges[0]);
            expect(challenge).toBeDefined();
            expect(challenge.name).toBe('Cookie-Monster');
        });

        it('should pass validation', () => {
            const challenge = loadChallengeFile(validChallenges[0]);

            expect(() => {
                validateChallengeBundle(challenge);
            }).toBeTruthy();

            // This should not throw an error
            const result = validateChallengeBundle(challenge);
            expect(result).toBeDefined();
            expect(result.name).toBe('Cookie-Monster');
            expect(result.defaultFlag?.static?.[0]).toBe('flag{C00kies_4r3_the_b3st}');
        });
    });


    describe('Caesar Cipher Challenge', () => {
        it('should load the challenge file', () => {
            const challenge = loadChallengeFile(validChallenges[1]);
            expect(challenge).toBeDefined();
            expect(challenge.name).toBe('Caesar Cipher');
        });

        it('should pass validation', () => {
            const challenge = loadChallengeFile(validChallenges[1]);

            expect(() => {
                validateChallengeBundle(challenge);
            }).toBeTruthy();

            // This should not throw an error
            const result = validateChallengeBundle(challenge);
            expect(result).toBeDefined();
            expect(result.name).toBe('Caesar Cipher');
            expect(result.defaultFlag?.static?.[0]).toBe('flag{caesar_salad}');
        });
    });

    describe('Bad Challenge Bundles', () => {

        it('should identify specific validation errors', () => {
            const challenge = loadChallengeFile(inValidChallenges[0]);
            expect(() => {
                validateChallengeBundle(challenge);
            }).toThrowError();
        });
        it('should identify missing flag options as a validation error', () => {
            const challenge = loadChallengeFile(inValidChallenges[1]);
            expect(() => {
                validateChallengeBundle(challenge);
            }).toThrowError();
        });
        it('should identify duplicate hint Ids as a validation error', () => {
            const challenge = loadChallengeFile(inValidChallenges[2]);
            expect(() => {
                validateChallengeBundle(challenge);
            }).toThrowError();
        });
    });
});