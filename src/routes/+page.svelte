<script lang="ts">
import type { changeLanguage, i18n } from 'i18next'
import language from 'i18next'
import { getContext, onMount } from 'svelte'
import type { Writable } from 'svelte/store'
const i18nContext = getContext<Writable<i18n>>('i18n')
console.log('[page] language:', $i18nContext.language)

// 初期化時に localStorage から言語情報を取得し、設定する
</script>

<h1>HOME PAGE</h1>
<h2>home page</h2>
<div>
    {$i18nContext.t('Hello')}
    {$i18nContext.t('World')}
</div>
