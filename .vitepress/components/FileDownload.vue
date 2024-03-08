<script setup lang="ts">
import type { Assets } from './interfaces'

interface Props { downloads: Assets.fileDownload[] }
const props = defineProps<Props>()


</script>

<template>
  <div class="downloads">
    <div v-for="download in downloads" :key="download.title" class="download">
      <a :href="download.url" class="link-wrapper" target="_blank" download>
        <svg class="download-icon" viewBox="0 0 120 120"><g class="rectangle" fill="none"> <rect width="120" height="120" rx="2"></rect><g class="svg-download-icon"><path d="M72.647 53.353c-.468-.47-1.226-.47-1.697 0L61 63.303V36.2c0-.662-.538-1.2-1.2-1.2-.662 0-1.2.538-1.2 1.2v27.103l-9.95-9.95c-.47-.47-1.23-.47-1.7 0-.468.468-.468 1.226 0 1.697l12 12c.236.232.543.35.85.35.307 0 .614-.118.85-.353l12-12c.468-.468.468-1.226-.003-1.694z"></path><path d="M79 75.8H40.6c-1.985 0-3.6-1.615-3.6-3.6v-4.8c0-.662.538-1.2 1.2-1.2.662 0 1.2.538 1.2 1.2v4.8c0 .662.538 1.2 1.2 1.2H79c.662 0 1.2-.538 1.2-1.2v-4.8c0-.662.538-1.2 1.2-1.2.662 0 1.2.538 1.2 1.2v4.8c0 1.985-1.615 3.6-3.6 3.6z"></path></g></g></svg>
        <div class="download-info">
          <h3 class="title">{{ download.title }}</h3>
          <p class="subtitle">{{ download.subtitle }}<span v-if="download.fileType"> ({{ download.fileType }})</span></p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.downloads {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 1fr;
  gap: 1rem;
  /* margin-bottom: 2rem;
  border: none;
  background: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: row; */
}

a.link-wrapper {
  background-color: var(--vp-c-bg);
  border-radius: .5rem;
  border: 1px solid var(--vp-c-border);
  display: grid;
  grid-template-columns: 80px 4fr;
  height: 100%;
  overflow: hidden;
  text-decoration: none;
  transition: 250ms ease-in-out all;
}

a.link-wrapper:hover {
  background-color: var(--vp-c-bg-alt);
  border-color: var(--vp-c-brand-1);
}

.download-icon {
  width: 80px;
  height: 100%;
  background-color: var(--vp-c-bg-alt);
  transition: 250ms ease-in-out background-color;
}
a:hover .download-icon {
  background-color: var(--vp-c-bg-elv);
}

.svg-download-icon {
  fill: var(--vp-c-text-1);
}

.title,
p {
  margin-top: 0;
  margin-bottom: 0;
}


.title {
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
}

.subtitle {
  color: var(--vp-c-text-2);
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
}

.download-info {
  padding: 1rem;
}
</style>