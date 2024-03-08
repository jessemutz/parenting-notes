<script setup lang="ts">
import { computed } from 'vue'
import type { Assets } from './interfaces'
import {
  formatRgb,
  formatHex,
  formatHsl,
  rgb,
  converter
} from 'culori'

interface Props { swatches: Assets.colorSwatch[] }

const props = defineProps<Props>()
const oklch = converter('oklch')
const wrapperClasses = computed(() => [`count-${props.swatches.length}`])

function isWhite(l: number): boolean {
  // Check if the lightness value is very close to 1
    return l > 0.99 && l <= 1;
}

function formatOklchColor(colorHex: string) {
  // hex to oklch can be buggy, so we convert to rgb first
  const rgbColor = rgb(colorHex);
  const oklchColor = oklch(rgbColor);

  // Check for white color
  if (oklchColor && isWhite(oklchColor.l)) {
    return `oklch(100% 0 0)`;
  }

  // Culori doesn't define H for pure black, so we define it.
  if (typeof oklchColor.h === 'undefined') {
    // Define "h" as 0 if it is undefined
    oklchColor.h = 0;
  }

  // Check for undefined properties
  if (!oklchColor || typeof oklchColor.l === 'undefined' || typeof oklchColor.c === 'undefined' || typeof oklchColor.h === 'undefined') {
    console.error('Invalid oklchColor:', oklchColor);
    return 'Invalid Color';
  }

  // convert floating points to standard numbers
  const { mode, l, c, h } = oklchColor;
  const formattedL = (l * 100).toFixed(2).replace(/\.?0+$/, '');
  const formattedC = c.toFixed(2).replace(/\.?0+$/, '');
  const formattedH = h.toFixed(2).replace(/\.?0+$/, '');

  return `${mode}(${formattedL}% ${formattedC} ${formattedH})`;
}
</script>

<template>
  <div class="swatches" :class="wrapperClasses">
    <div v-for="swatch in swatches" :key="swatch.colorName" class="swatch" :class="swatch.textColor" :style="{ borderColor: swatch.clr, backgroundColor: swatch.clr }">
      <h3>{{swatch.cssVar}} - {{ swatch.colorName }}</h3>
      <table>
        <tr>
          <td class="color-name">HEX</td>
          <td class="color-value">{{ formatHex(swatch.clr) }}</td>
        </tr>
        <tr>
          <td class="color-name">RGB</td>
          <td class="color-value">{{ formatRgb(swatch.clr) }}</td>
        </tr>
        <tr>
          <td class="color-name">HSL</td>
          <td class="color-value">{{ formatHsl(swatch.clr) }}</td>
        </tr>
        <tr>
          <td class="color-name">Oklch</td>
          <td class="color-value">{{ formatOklchColor(swatch.clr) }}</td>
        </tr>
        <tr v-if="swatch.cssVar">
          <td class="color-name">CSS</td>
          <td class="color-value">var(--{{ swatch.cssVar }})</td>
        </tr>
        <tr v-if="swatch.pantone">
          <td class="color-name">Pantone</td>
          <td class="color-value">{{ swatch.pantone }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.swatches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
  grid-auto-rows: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.dark {
  color: var(--n600);
}
.light {
  color: var(--n10);
}

h3 {
  margin-top: 0;
  text-transform: capitalize;
  border-bottom: 1px solid currentColor;
  padding-bottom: .5rem;
  margin-bottom: .5rem;
}

.swatch {
  min-height: 10rem;
  padding: 1rem;
  box-shadow: var(--vp-shadow-3);
}

table {
  margin-top: 0;
  margin-bottom: 0;
}

table,
td,
tr,
tr:nth-child(2n) {
  background-color: transparent;
  border: 0;
}
td {
  padding: .2rem .75em 0.2rem 0;
  line-height: normal;font-size: 0.8rem;
}
.color-name {
  font-weight: bold;
  vertical-align: top;
  text-align: right;
}
.color-value{
  font-family: var(--vp-font-family-mono);
  vertical-align: middle;
}
</style>