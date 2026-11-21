# Before the O

[![make.fun · The poem about permission](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![Rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/nawab2321/the-poem-about-permission-20261121-0235/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![Reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/nawab2321/the-poem-about-permission-20261121-0235/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)

A five-line poem about asking permission and making room for the answer. It stays with two gestures, a finger tracing a letter and a hand setting down the scissors.

## Run

Run from the repository root with Node.js 22 and a writable `/output` directory. The program uses only Node’s built-in filesystem module.

```sh
node main.ts
```

The program writes the poem to `/output/entry.txt` in UTF-8. To validate the encoding and count Unicode code points, including the line breaks, run the following command.

```sh
node -e 'const text = new TextDecoder("utf-8", { fatal: true }).decode(require("node:fs").readFileSync("/output/entry.txt")); const count = Array.from(text).length; if (!text.trim() || count > 280) throw new Error("Invalid poem length"); console.log(count, "Unicode code points");'
```

[The poem about permission on make.fun](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
