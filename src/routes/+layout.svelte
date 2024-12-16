<script lang="ts">
import type { i18n } from 'i18next'
import getI18nStore from '$lib/i18n'
import { setContext } from 'svelte'
import type { Writable } from 'svelte/store'
import '../app.css'

setContext('i18n', getI18nStore())
export const i18nContext: Writable<i18n> = getI18nStore()

let { children } = $props()
</script>

{@render children()}
