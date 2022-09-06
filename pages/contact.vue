<template>
  <section>
    <div>
      <div class="py-4 bg-warning">
        <div class="container text-center">
          <h3>Contact Us</h3>
        </div>
      </div>

      <template v-if="!finished">
        <div class="py-5">
          <div class="container">
            <div class="p-contact">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                @submit.prevent
              >
                <p>
                  <label>
                    お名前:
                    <input v-model="form.name" type="text" name="name" />
                  </label>
                </p>
                <p>
                  <label>
                    メールアドレス:
                    <input v-model="form.email" type="email" name="email" />
                  </label>
                </p>
                <p>
                  <label>
                    お問い合わせ内容:
                    <textarea
                      id="form-content"
                      v-model="form.content"
                      name="content"
                    />
                  </label>
                </p>
                <p>
                  <button @click="handleSubmit" v-text="'送信'" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <p v-text="'お問い合わせ頂きありがとうございました。'" />
        <p><nuxt-link to="/" v-text="'TOPへ'" /></p>
      </template>
    </div>
  </section>
</template>

<script>
import ContactUs from "~/components/ContactUs.vue";
import axios from "axios";

export default {
  name: "contact",
  components: { ContactUs },

  head() {
    return {
      title: "Contact Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "NUXTJS Website Designing from Scratch - Contact Us",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Vue, nuxt ,javascript - Contact Us",
        },
      ],
    };
  },

  data() {
    return {
      form: {
        name: "",
        email: "",
        content: "",
      },
      finished: false,
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios
        .post(
          "/",
          this.encode({
            "form-name": "contact",
            ...this.form,
          }),
          axiosConfig
        )
        .then(() => {
          this.finished = true;
        });
    },
  },
};
</script>
