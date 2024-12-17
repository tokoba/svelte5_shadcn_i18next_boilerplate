<script lang="ts">
    import type { changeLanguage, i18n } from 'i18next'
    import language from 'i18next'
    import { getContext, onMount } from 'svelte'
    import type { Writable } from 'svelte/store'
    const i18nContext = getContext<Writable<i18n>>('i18n')
    // console.log('[page] language:', $i18nContext.language)
</script>

<h1>This is an example of Svelte5, SvelteKit2, Shadcn-Svelte, Svelte-i18Next.</h1>
<h2>Customize the configurations as you need.</h2>
<div class="greeting-various-languages text-5xl text-center">
    {$i18nContext.t('Hello')}
    {$i18nContext.t('World')}
</div>