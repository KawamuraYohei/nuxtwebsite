<template>
  <section>
    <div>
      <div class="py-4 bg-warning">
        <div class="container text-center">
          <h3>Our Services</h3>
        </div>
      </div>

      <OurServices />
    </div>
  </section>
</template>

<script>
import OurServices from "~/components/OurServices.vue";

export default {
  name: "services",
  components: { OurServices },

  head() {
    return {
      title: "Our Services",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "NUXTJS Website Designing from Scratch - Our Services",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Vue, nuxt ,javascript - Our Services",
        },
      ],
    };
  },
};
</script>
