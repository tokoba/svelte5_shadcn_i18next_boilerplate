<script lang="ts">
import type { changeLanguage, i18n } from 'i18next'
import language from 'i18next'
import { getContext, onMount } from 'svelte'
import type { Writable } from 'svelte/store'
const i18nContext = getContext<Writable<i18n>>('i18n')
console.log($i18nContext.language)
function toggleLangage() {
    const newLanguage = $i18nContext.language === 'en' ? 'ja' : 'en'
    $i18nContext.changeLanguage(newLanguage).then(() => {
        localStorage.setItem('locale', newLanguage)
    })
}
// 初期化時に localStorage から言語情報を取得し、設定する
onMount(async () => {
    const savedLanguage = localStorage.getItem('locale') || 'en' // デフォルトは 'en'
    await $i18nContext.changeLanguage(savedLanguage)
})
</script>

<h1>ホームページ</h1>
<h2>home page</h2>
<div>
    {$i18nContext.t('Hello')}
    {$i18nContext.t('World')}
</div>

<button onclick={toggleLangage}> Change Language </button>
