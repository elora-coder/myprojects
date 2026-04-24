<script setup>
defineProps(["lang"]); // Це обов'язково має бути тут!
</script>
<template>
  <div>
    <main>
      <section id="contacts">
        <h2>{{ lang === "uk" ? "Контактна інформація" : "Contact information" }}</h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
          
          <article>
            <h3>{{ lang === "uk" ? "Робочі канали" : "Working channels" }}</h3>
            <p>{{ lang === "uk" ? "Найшвидший спосіб отримати відповідь — написати в Telegram або на пошту." : "The fastest way to get an answer is to write to Telegram or email." }}</p>

            <ul style="list-style: none; margin-left: 0; margin-top: 20px;">
              <li style="margin-bottom: 15px;">
                <strong>Email:</strong><br>
                <a href="mailto:k.cherevatenko.zk41.fbmi28@lll.kpi.ua">
                  k.cherevatenko.zk41.fbmi28@lll.kpi.ua
                </a>
              </li>

              <li style="margin-bottom: 15px;">
                <strong>Telegram:</strong><br>
                <a href="https://t.me/katyxa31cm" target="_blank">
                  @katyxa31cm
                </a>
              </li>
            </ul>
          </article>

          <article>
            <h3>{{ lang === "uk" ? "Для розробників" : "For developers" }}</h3>

            <ul style="list-style: none; margin-left: 0; margin-top: 20px;">
              <li>
                <strong>GitHub:</strong><br>
                <a href="https://github.com/elora-coder" target="_blank">
                  github.com/elora-coder
                </a>
              </li>
            </ul>

            <p style="margin-top: 20px; font-style: italic;">
              {{ lang === "uk" ? "Код бачать усі, але розуміють лише ті, хто ним живе." : "Everyone sees the code, but only those who live it understand it." }}
            </p>
          </article>

        </div>
      </section>
    </main>

  </div>
</template>