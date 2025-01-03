<script lang="ts">
import { siteConfig } from '../../../siteConfig'
/* Theme Selector */
import Sun from 'lucide-svelte/icons/sun'
import Moon from 'lucide-svelte/icons/moon'
import Languages from 'lucide-svelte/icons/languages'
import { toggleMode } from 'mode-watcher'
import { Button } from '$lib/components/ui/button/index.js'

/* i18next translation */
import { languages } from '../../i18n'
import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js'
import { buttonVariants } from '$lib/components/ui/button/index.js'
import { type i18n } from 'i18next'
import { getContext, onMount } from 'svelte'
import type { Writable } from 'svelte/store'

/* i18next Context is created at i18n.ts.
 * We use i18n Context as global state.
 */
const i18nContext = getContext<Writable<i18n>>('i18n')
const currentLanguage = $derived($i18nContext.language)
let lang: string = $state('en')

onMount(async () => {
    /* We use local storage of the browser.
     * If locale variant is found on local storage, it's locale is loaded.
     * If locale variant is not found, then we use English as default language.
     */
    const savedLanguage = localStorage.getItem('locale') || 'en'
    await $i18nContext.changeLanguage(savedLanguage)
    lang = savedLanguage /* update the lang variable using local storage */
    console.log('[navi] language:', $i18nContext.language) // debug
    console.log('[navi] currentLanguage:', currentLanguage) // debug
})

function switchLanguage(nextLanguage: string) {
    $i18nContext.changeLanguage(nextLanguage).then(() => {
        localStorage.setItem('locale', nextLanguage)
    })
    console.log('[navi] language:', $i18nContext.language)
    console.log('[navi] currentLanguage:', currentLanguage)
}
</script>

<nav class="flex items-center justify-between bg-gray-100 p-4 dark:bg-gray-800">
    <div class="flex items-center space-x-2">
        <img src="/i18next-icon.svg" alt="Logo" class="h-6 w-6" />
        <a href="/">
            <span class="text-lg font-semibold">{siteConfig.title}</span>
        </a>
    </div>
    <div class="flex items-center space-x-2">
        <Button onclick={toggleMode} variant="outline" size="icon">
            <Sun
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
        </Button>

        <DropdownMenu.Root>
            <DropdownMenu.Trigger
                class={buttonVariants({ variant: "outline" })}
            >
                <Languages
                    class="w-[1.2rem]text-gray-800 h-[1.2rem]  dark:text-white"
                />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content class="w-56">
                <DropdownMenu.Group>
                    <DropdownMenu.GroupHeading
                        >Choose Your Language</DropdownMenu.GroupHeading
                    >
                    <DropdownMenu.Separator />
                    <DropdownMenu.RadioGroup
                        onclick={() => switchLanguage(lang)}
                        bind:value={lang}
                    >
                        {#each languages as language (language.value)}
                            <DropdownMenu.RadioItem value={language.value}>
                                {language.label}
                            </DropdownMenu.RadioItem>
                        {/each}
                    </DropdownMenu.RadioGroup>
                </DropdownMenu.Group>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </div>
</nav>
