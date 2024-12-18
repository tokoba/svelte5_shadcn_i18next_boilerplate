<script lang="ts">
import { Temperature } from '$lib/components/custom/TemperatureConverter.svelte'
import type { i18n } from 'i18next'
import { getContext } from 'svelte'
import type { Writable } from 'svelte/store'
const i18nContext = getContext<Writable<i18n>>('i18n')

const temp = new Temperature()
</script>

<div class="temp-converter text-3xl">
    <h3 class="temp-converter-title p-3">
        {$i18nContext.t('TemperatureConverter')}
    </h3>
    <input
        type="number"
        step="0.1"
        bind:value={temp.celsius}
        class="temp-c max-w-[7rem] rounded-md border-2 border-gray-500"
    />
    Celcius =
    <input
        type="number"
        step="0.1"
        bind:value={temp.fahrenheit}
        class="temp-f max-w-[7rem] rounded-md border-2 border-gray-500"
    /> Fahrenheit
</div>
