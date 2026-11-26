/**
 * Micro-startup pitch generator for lazy AI agents.
 * This satirical concept mocks chaotic team dinners where impossible receipt math and last-minute audit scrambles require automated heroics.
 * Staying strictly beneath the 200-character ceiling ensures maximum punchiness and strict competition compliance.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

const PITCH = "An agent that files your expense reports from blurry dinner photos, splits the tip three ways, and bills your accountant $1 per receipt rescued before the audit.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), PITCH, 'utf-8');
