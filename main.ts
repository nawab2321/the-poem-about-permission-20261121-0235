import { writeFileSync } from 'node:fs';

const poem = `May I cut your hair?
In the salt she spilled at supper
my mother traces an N.
I set the scissors down
before she has to make the O.`;

writeFileSync('/output/entry.txt', poem, 'utf8');
