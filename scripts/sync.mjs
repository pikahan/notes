#!/usr/bin/env zx
import 'zx/globals'
let branch = await $`git branch --show-current`
const currTime = (new Date()).toLocaleString()

await Promise.all([
  $`git add .`,
  $`git commit -m "${currTime}"`,
  $`git push`
])
console.log(`成功同步到github!`)
