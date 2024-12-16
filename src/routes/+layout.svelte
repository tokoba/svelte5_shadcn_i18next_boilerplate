<script lang="ts">
import type { i18n } from 'i18next'
import getI18nStore from '$lib/i18n'
import { setContext } from 'svelte'
import type { Writable } from 'svelte/store'
import '../app.css'

/* setContext() is a request-scoped store instance to avoid the issue with
 * sveltekit-SSR, when you change languages on the server, it attects server
 * state and change the languages on other person's browser.
 */
setContext('i18n', getI18nStore())
export const i18nContext: Writable<i18n> = getI18nStore()

let { children } = $props()
</script>

{@render children()}
