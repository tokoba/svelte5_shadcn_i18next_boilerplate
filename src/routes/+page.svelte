<script lang="ts">
import * as Card from '$lib/components/ui/card/index.js'

import type { i18n } from 'i18next'
import { getContext } from 'svelte'
import type { Writable } from 'svelte/store'
const i18nContext = getContext<Writable<i18n>>('i18n')
</script>

<div class="introduction">
    <h1>
        This is an example of Svelte5, SvelteKit2, Shadcn-Svelte,
        Svelte-i18Next.
    </h1>
    <h2>Customize the configurations as you need.</h2>

    <div class="greeting-various-languages p-5 text-center text-5xl">
        {$i18nContext.t('Hello')}
        {$i18nContext.t('World')}
    </div>
</div>

<Card.Root>
    <a href="/tempconverter">
        <Card.Header>
            <Card.Title>{$i18nContext.t('TemperatureConverter')}</Card.Title>
            <Card.Description
                >{$i18nContext.t('tempconverter_description')}</Card.Description
            >
        </Card.Header>
        <Card.Content>
            <p>{$i18nContext.t('tempconverter_contents')}</p>
        </Card.Content>
    </a>
</Card.Root>
