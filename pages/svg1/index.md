---
title: SVG
tags: [svg]
lastUpdated: true
# head:
#   - - meta
#     - name: description
#       content: hello
#   - - meta
#     - name: keywords
#       content: super duper SEO
---

# {{ $frontmatter.title }}

## 标签

```vue
<template>
  <svg id="mySvg" :style="{ 'width': 12 }" @click="svgClick">
    <!--  -->
  </svg>
</template>

<script setup lang="ts">
import { select, drag, symbol, symbolsFill } from 'd3'
import { ulid, decodeTime } from 'ulid'
import { setAttrs, setDrag } from '@wai-ri/d3'
import { ArrayType, nothing } from '@wai-ri/core'
import { map, Subject } from 'rxjs'
// import { getMousePos } from 'robotjs'


const data = Array.from({ length: 30 }, (v, i) => ({
  value: i,
  id: ulid()
}))


function svgClick() {
  // console.log(getMousePos())
}



onMounted(() => {
  const a = new Subject<number>()

  a.pipe(
    map(d => d * 2),
    // map(d => d + '12'),
    // map(d => !!d)
  )

  const width = window.innerWidth
  const height = window.innerHeight
  const mySvg = select('#mySvg')

  const mask = mySvg.append('mask').attr('id', 'circle-mask')

  mask
    // .append('circle')
    // .each(setAttrs((data, i) => ({
    //   cx: width / 2,
    //   cy: height / 2,
    //   r: 200,
    //   fill: 'white'
    // })))
    .append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'black')

  mask
    .append('circle')
    .each(setAttrs(() => ({
      cx: width / 2,
      cy: height / 2,
      r: 200,
      fill: 'white'
    })))

  const mask2 = mySvg.append('mask').attr('id', 'rect-mask')


  mask2
    .append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'white')


  mask2
    .append('circle')
    .each(setAttrs(() => ({
      cx: width / 2,
      cy: height / 2,
      r: 200,
      fill: 'black'
    })))

  mySvg
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight)
    .append('g')
    .attr('mask', 'url(#circle-mask)')
    .selectChildren('rect')
    .data(data)
    .join('rect')
    .each(setAttrs((data, index, group) => ({
      x: 0,
      y: data.value * 20,
      width,
      height: 10,
      fill: 'white',
    })))

  mySvg
    .append('g')
    .attr('mask', 'url(#rect-mask)')
    .selectChildren('rect')
    .data(data)
    .join('rect')
    .each(setAttrs((data, index, group) => ({
      x: data.value * 20,
      y: 0,
      width: 10,
      height: height,
      fill: 'white',
    })))

})
</script>

```

## 属性

## 方法