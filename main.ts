const { writeFileSync } = require('node:fs');

const poem = `May I cut your hair?
My mother draws an N
across my palm.
I set the scissors down
before she has to make the O.`;

writeFileSync('/output/entry.txt', poem, 'utf8');
