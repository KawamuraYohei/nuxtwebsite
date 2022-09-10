<template>
  <main class="main">
    <h1 class="title">{{ n_title }}</h1>
    <div class="ogimageWrap">
      <picture v-if="n_eyecatch">
        <source
          media="(min-width: 1160px)"
          type="image/webp"
          :srcset="`${n_eyecatch.url}?w=820&fm=webp, ${n_eyecatch.url}?w=1640&fm=webp 2x`"
        />
        <source
          media="(min-width: 820px)"
          type="image/webp"
          :srcset="`${n_eyecatch.url}?w=740&fm=webp, ${n_eyecatch.url}?w=1480&fm=webp 2x`"
        />
        <source
          media="(min-width: 768px)"
          type="image/webp"
          :srcset="`${n_eyecatch.url}?w=728&fm=webp, ${n_eyecatch.url}?w=1456&fm=webp 2x`"
        />
        <source
          media="(max-width: 768px)"
          type="image/webp"
          :srcset="`${n_eyecatch.url}?w=375&fm=webp, ${n_eyecatch.url}?w=750&fm=webp 2x`"
        />
        <img
          ref="n_eyecatch"
          :src="n_eyecatch.url + '?w=820&q=100'"
          class="n_eyecatch"
          alt
        />
      </picture>
    </div>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="n_body"></div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://nuxtwebsite.microcms.io/api/v1/news/${params.slug}`,
      {
        headers: {
          "X-MICROCMS-API-KEY": "d1bced36fdc040bb9287629c218850dd0cb6",
        },
      }
    );
    return data;
  },
};
</script>

<style>
</style>