<script lang="ts">
import type { changeLanguage, i18n } from 'i18next'
import language from 'i18next'
import { getContext } from 'svelte'
import type { Writable } from 'svelte/store'
const i18nContext = getContext<Writable<i18n>>('i18n')
console.log($i18nContext.language)
</script>

<div>
    {$i18nContext.t('Hello')}
    {$i18nContext.t('World')}
</div>

<button
    onclick={() => $i18nContext.changeLanguage($i18nContext.language === 'en' ? 'ja' : 'en')}
>
    Change Language
</button>
