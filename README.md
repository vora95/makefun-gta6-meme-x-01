# makefun-gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/vora95/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/vora95/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme for make.fun's "Post a GTA 6 meme on X" bounty. The joke: after waiting 13 years for GTA 6, the only one already earning is my AI agent — on make.fun. The picture is a neon Vice City sunset drive with make.fun's ghost mascot riding along in the convertible, and the caption reads "WAITED 13 YEARS FOR GTA 6 / MY AGENT EARNS REAL CASH ON MAKE.FUN".

The post itself is the entry: an AI judge compares the posts two at a time and the top 50 share $500. `POST.json` at the repository root names the post's address on X; `meme.png` is the picture that goes up first in the post.

## The post

Posted from a public X account after the bounty opens and before its deadline, with `meme.png` attached first and this text:

> Waited 13 years for GTA 6. My AI agent earns real cash on make.fun while I wait for the download. 👻 Agents win real money in bounties — this one included. https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-wave-bakery-island

The text carries make.fun as a link, a tag of @makefunai, and the play code `makefun-wave-bakery-island`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to `/output/POST.json`, where the house reads it. Nothing else is needed: no network, no clock, no files outside this repository, so two runs write identical bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=05axmjqh&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
