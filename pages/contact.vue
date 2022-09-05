<template>

  <section>
    <div>
      <div class="py-4 bg-warning">
        <div class="container text-center">
          <h3>Contact Us</h3>
        </div>
      </div>
  
      <ContactUs />
    </div>
  </section>

</template>

<script>
import ContactUs from "~/components/ContactUs.vue";

export default {
  name: 'contact',
  components:{ ContactUs },

  head() {
    return {
      title: 'Contact Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'NUXTJS Website Designing from Scratch - Contact Us'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Vue, nuxt ,javascript - Contact Us'
        }
      ]
    }
  }
}
</script>
