<template>
  <section>
    <Slider />

    <Aboutus />

    <OurServices />

    <ContactUs />
  </section>
</template>

<script>
import Slider from "~/components/Slider.vue";
import Aboutus from "~/components/Aboutus.vue";
import OurServices from "~/components/OurServices.vue";
import ContactUs from "~/components/ContactUs.vue";

export default {
  name: "IndexPage",
  components: { Slider, Aboutus, OurServices, ContactUs },
  head() {
    return {
      title: "Home Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "NUXTJS Website Designing from Scratch - HomePage",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Vue, nuxt ,javascript - HomePage",
        },
      ],
    };
  },
};
</script>
