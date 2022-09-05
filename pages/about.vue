<template>

  <section>
    <div>
      <div class="py-4 bg-warning">
        <div class="container text-center">
          <h3>About Us</h3>
        </div>
      </div>
  
      <Aboutus />

    </div>


  </section>

</template>

<script>

import Aboutus from "~/components/Aboutus.vue";

export default {
  name: 'about',
  components:{ Aboutus },
  head() {
    return {
      title: 'About Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'NUXTJS Website Designing from Scratch - About Us'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Vue, nuxt ,javascript - About Us'
        }
      ]
    }
  }
}
</script>
