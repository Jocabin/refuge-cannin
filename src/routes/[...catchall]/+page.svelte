<script>
  import { isPreviewing, Content } from "@builder.io/sdk-svelte";
  import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public'
  import { builder } from '@builder.io/sdk'

  const model = 'page';

  export let data;

  const canShowContent = data.content || isPreviewing();
</script>

<main>
  {#if canShowContent}
    <div>page Title: {data.content?.data?.title || "Unpublished"}</div>
    <Content
      model={model}
      content={data.content}
      apiKey={PUBLIC_BUILDER_IO_KEY} 
    />
  {:else}
    Content Not Found
  {/if}
</main>