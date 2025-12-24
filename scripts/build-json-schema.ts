import { ChallengePack } from "@challenge-pack";
import * as fs from 'fs';
import { Challenge } from "@challenge-schema";
import { z } from 'zod';

const ChallengeSchema = z.toJSONSchema(Challenge, { unrepresentable: "throw", cycles: "ref" });
fs.writeFileSync('challenge.schema.json', JSON.stringify(ChallengeSchema, null, 2), 'utf8');


const ChallengePackSchema = z.toJSONSchema(ChallengePack, { unrepresentable: "throw", cycles: "ref" });
fs.writeFileSync('challenge-pack.schema.json', JSON.stringify(ChallengePackSchema, null, 2), 'utf8');