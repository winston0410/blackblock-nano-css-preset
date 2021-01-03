import { create } from 'nano-css'
import { addon as Hydrate } from 'nano-css/addon/hydrate'
import { addon as Prefixer } from 'nano-css/addon/prefixer'
import { addon as Keyframes } from 'nano-css/addon/keyframes'
import { addon as Cache } from 'nano-css/addon/cache'
import { addon as Rule } from 'nano-css/addon/rule'
import { addon as Jsx } from 'nano-css/addon/jsx'
import { createElement } from 'react'

const nano = create({ h: createElement })

Hydrate(nano)
Prefixer(nano)
Keyframes(nano)
Cache(nano)
Rule(nano)
Jsx(nano)

const { rule, sheet, jsx, keyframes } = nano

export { nano, rule, sheet, jsx, keyframes }
