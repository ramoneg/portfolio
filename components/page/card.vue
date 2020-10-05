<template>
  <div class="pr-4">
    <a :href="url ? url : '#'" target="_blank" class="card p-4 border-l-4 border-gray-700 block rounded">
      <h2 class="font-bold text-xl">{{ title }}</h2>
      <h2 class="font-bold text-gray-500 tracking-wide">{{ subtitle }}</h2>

      <slot>
      </slot>
    </a>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['url', 'title', 'subtitle']
}
</script>