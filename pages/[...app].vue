<template>
  <div v-if="canShowContent">
    <Content :api-key="builderIoApiKey" :model="model" :content="content" />
  </div>
  <div v-else>Content not Found</div>
</template>

<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { ref } from 'vue';

const config = useRuntimeConfig();
const route = useRoute();
const builderIoApiKey = config.public.builderIoApiKey;
const canShowContent = ref(false);
const model = 'page';

const { data: content } = await useAsyncData('builderData', async () =>
  await fetchOneEntry({ //
    model,
    apiKey: builderIoApiKey,
    userAttributes: {
      urlPath: route.path,
    },
  })
);
canShowContent.value = content.value ? true : (isPreviewing(route.query) | process.env.NODE_ENV === 'development');
</script>
