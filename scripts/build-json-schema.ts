import { ChallengePack } from "@challenge-pack";
import * as fs from 'fs';
import { Challenge } from "src/challenge-schema";
import { z } from 'zod';

const ChallengeSchema = z.toJSONSchema(Challenge, {target: "draft-7", unrepresentable: "throw", cycles: "ref"});
fs.writeFileSync('challenge.schema.json', JSON.stringify(ChallengeSchema, null, 2), 'utf8');


const ChallengePackSchema = z.toJSONSchema(ChallengePack, {target: "draft-7", unrepresentable: "throw", cycles: "ref"});
fs.writeFileSync('challenge-pack.schema.json', JSON.stringify(ChallengePackSchema, null, 2), 'utf8');