import { ChallengeBundle } from "@challenge-bundle";
import { ChallengePack } from "@challenge-pack";
import * as fs from 'fs';
import { z } from 'zod';

const ChallengeBundleSchema = z.toJSONSchema(ChallengeBundle, {target: "draft-7", unrepresentable: "throw", cycles: "ref"});
fs.writeFileSync('challenge-bundle.schema.json', JSON.stringify(ChallengeBundleSchema, null, 2), 'utf8');


const ChallengePackSchema = z.toJSONSchema(ChallengePack, {target: "draft-7", unrepresentable: "throw", cycles: "ref"});
fs.writeFileSync('challenge-pack.schema.json', JSON.stringify(ChallengePackSchema, null, 2), 'utf8');