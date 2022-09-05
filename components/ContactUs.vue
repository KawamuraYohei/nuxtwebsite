<template>
  <div>
    <div class="py-5">
      <div class="container">
        <div class="p-contact">
          <form
            class="p-contact__form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="onSubmit"
            :class="sendingClass"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div class="p-contact__item">
              <label for="username">お名前</label>
              <input
                type="text"
                id="username"
                name="username"
                v-model="username"
                autocomplete="name"
              />
            </div>
            <!-- /.p-contact__item -->

            <div class="p-contact__item">
              <label for="katakana">フリガナ</label>
              <input
                type="text"
                id="katakana"
                name="katakana"
                v-model="katakana"
              />
            </div>
            <!-- /.p-contact__item -->

            <div class="p-contact__item">
              <label for="useremail">メールアドレス</label>
              <input
                type="text"
                id="useremail"
                name="useremail"
                v-model="useremail"
                autocomplete="email"
              />
            </div>
            <!-- /.p-contact__item -->

            <div class="p-contact__item">
              <label for="message">お問い合わせ内容</label>
              <textarea
                id="message"
                name="message"
                v-model="message"
              ></textarea>
            </div>
            <!-- /.p-contact__item -->

            <div class="p-contact__item" v-show="false">
              <label for="message">スパムでない場合は空欄</label>
              <input type="text" name="bot-field" v-model="botField" />
            </div>
            <!-- /.p-contact__item -->

            <div class="p-contact__submit">
              <button type="submit">送信</button>
            </div>
            <!-- /.p-contact__submit -->
          </form>
          <!-- /.p-contact__form -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style>
</style>