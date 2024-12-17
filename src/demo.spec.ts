/* Customize your test conditions for vitest
 * The default sample is just calculating using JavaScript native function.
 */
import { describe, it, expect } from 'vitest'

describe('sum test', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3)
    })
})
