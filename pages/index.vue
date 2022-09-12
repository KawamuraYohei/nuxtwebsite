<template>
  <div>
    <section>
      <Slider />
    </section>

    <section>
      <Aboutus />
    </section>

    <section>
      <OurServices />
    </section>

    <section>
      <ul>
        <li v-for="item in items" :key="item.id">
          <nuxt-link :to="`/${item.id}`">
            {{ item.n_title }}
          </nuxt-link>
        </li>
      </ul>
    </section>

    <section>
      <ContactUs />
    </section>
  </div>
</template>

<script>
import Slider from "~/components/Slider.vue";
import Aboutus from "~/components/Aboutus.vue";
import OurServices from "~/components/OurServices.vue";
import ContactUs from "~/components/ContactUs.vue";
import axios from "axios";

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
  data() {
    return {
      items: [],
    };
  },
  async asyncData({ params }) {
    const page = params.p || "1";
    const limit = 2;
    const { data } = await axios.get(
      `https://nuxtwebsite.microcms.io/api/v1/news?limit=${limit}&offset=${
        (page - 1) * limit
      }`,
      {
        headers: {
          "X-MICROCMS-API-KEY": "d1bced36fdc040bb9287629c218850dd0cb6",
        },
      }
    );
    return {
      items: data.contents,
    };
  },
};
</script>
