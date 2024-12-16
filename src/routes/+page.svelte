<script lang="ts">
import type { i18n } from 'i18next'
import { getContext } from 'svelte'
import type { Writable } from 'svelte/store'
const i18nContext = getContext<Writable<i18n>>('i18n')
</script>

<div>
    {$i18nContext.t('key')}
</div>
