import { create } from 'nano-css'
import { addon as Hydrate } from 'nano-css/addon/hydrate'
import { addon as Prefixer } from 'nano-css/addon/prefixer'
import { addon as Keyframes } from 'nano-css/addon/keyframes'
import { addon as Cache } from 'nano-css/addon/cache'
import { addon as Rule } from 'nano-css/addon/rule'
import { addon as Drule } from 'nano-css/addon/drule'
import { addon as Jsx } from 'nano-css/addon/jsx'
import { createElement } from 'react'
import joli from '@blackblock/joli'
import basicList from '@blackblock/css-chars'
import withUpsideDownChars from '@blackblock/css-chars/withUpsideDownChars'

const charList = withUpsideDownChars(basicList)

const generator = joli({
	chars: charList
})

const nano = create({
	pfx: '',
	h: createElement,
	hash: function (obj) {
		return generator.next().value
	},
	sh: typeof document === 'object' ? document.getElementById('nano-css') : null
})

Hydrate(nano)
Prefixer(nano)
Keyframes(nano)
Cache(nano)
Rule(nano)
Drule(nano)
Jsx(nano)

const { rule, sheet, jsx, keyframes } = nano

export { rule, sheet, jsx, keyframes }

export default nano
