import { describe, expect, it } from '@jest/globals';
import fs from 'fs';
import path from 'path';

import { validateChallengeBundle } from '../src/index';

const validChallengeBundles = [
  './examples/cookie-monster/challenge.json'
];
const inValidChallengeBundle = [
  './bad-examples/empty/challenge.json',
  './bad-examples/missing-flag-options/challenge.json',
  //'./bad-examples/invalid-flag/challenge.json',
  //'./bad-examples/invalid-deployment/challenge.json',
];

describe('Challenge Bundle Schema Validation', () => {
  const loadChallengeFile = (filePath: string) => {
    const fullPath = path.resolve(__dirname, filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(fileContents);
  };

  describe('Cookie Monster Challenge', () => {
    it('should load the challenge file', () => {
      const challenge = loadChallengeFile(validChallengeBundles[0]);
      expect(challenge).toBeDefined();
      expect(challenge.name).toBe('Cookie-Monster');
    });

    it('should pass validation', () => {
      const challenge = loadChallengeFile(validChallengeBundles[0]);
      
      expect(() => {
        validateChallengeBundle(challenge);
      }).toBeTruthy();

      // This should not throw an error
      const result = validateChallengeBundle(challenge);
      expect(result).toBeDefined();
      expect(result.name).toBe('Cookie-Monster');
      expect(result.defaultFlag?.value).toBe('flag{C00kies_4r3_the_b3st}');
    });
  });
  describe('Bad Challenge Bundles', () => {
    

    it('should identify specific validation errors', () => {
      const challenge = loadChallengeFile(inValidChallengeBundle[0]);
      
      expect(() => {
        validateChallengeBundle(challenge);
      }).toThrowError();
    });
  });
});