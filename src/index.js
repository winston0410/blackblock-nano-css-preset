const { create } = require('nano-css')
const { addon: Hydrate } = require('nano-css/addon/hydrate')
const { addon: Prefixer } = require('nano-css/addon/prefixer')
const { addon: Keyframes } = require('nano-css/addon/keyframes')
const { addon: Cache } = require('nano-css/addon/cache')
const { addon: Rule } = require('nano-css/addon/rule')
const { addon: Drule } = require('nano-css/addon/drule')
const { addon: Jsx } = require('nano-css/addon/jsx')
import { createElement } from 'react'
import joli from '@blackblock/joli'
import basicList from '@blackblock/css-chars'

const generator = joli({
	chars: basicList
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
