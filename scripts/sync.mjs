#!/usr/bin/env zx
import 'zx/globals'
let branch = await $`git branch --show-current`
const currTime = (new Date()).toLocaleString()

await $`git add .`;
await $`git commit -m ${currTime}`;
await $`git push`;
console.log(`成功同步到github!`)
