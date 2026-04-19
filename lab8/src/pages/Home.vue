<script setup>
const props = defineProps(["lang"]);
</script>

<template>
  <main>
    <section id="about">
      <h2>{{ lang === "uk" ? "Про мене" : "About" }}</h2>

      <article>
        <p>
          {{ lang === "uk"
            ? "Цікавлюся веб-розробкою та цифровими технологіями. У вільний час люблю дивитися фільми, грати в комп’ютерні та настільні ігри, а також подорожувати, відкриваючи нові місця та культури."
            : "I am interested in web development and digital technologies. In my free time I enjoy movies, video and board games. I travel and explore new cultures and places." }}
        </p>
      </article>

      <article>
        <p>
          {{ lang === "uk"
            ? "Хочу навчитися створювати інтерфейси, що викликають довіру та залишають враження."
            : "I want to create interfaces that feel intuitive and trustworthy." }}
        </p>
      </article>
    </section>

    <section id="skills">
      <h2>{{ lang === "uk" ? "Навички" : "Skills" }}</h2>

      <article>
        <h3>{{ lang === "uk" ? "Основні технології" : "Main technologies" }}</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </article>
      <article>
          <h3 data-key="skills_tools">{{ lang === "uk" ? "Дизайн та інструменти" : "Design tools"}}</h3>
          <ul>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Wix</li>
          </ul>
        </article>
        <article>
          <h3>Soft Skills</h3>
          <ul>
            <li data-key="softskills_1">{{ lang === "uk" ?"Швидко навчаюся новому": "I learn new things quickly"}}</li>
            <li data-key="softskills_2">{{ lang === "uk" ?"Відповідально ставлюся до завдань": "I take responsibility for tasks"}}</li>
            <li data-key="softskills_3">{{ lang === "uk" ?"Уважна до деталей": "I pay attention to details"}}</li>
            <li data-key="softskills_4">{{ lang === "uk" ?"Орієнтована на результат": "I am result-oriented"}}</li>
            <li data-key="softskills_5">{{ lang === "uk" ?"Вміння працювати як самостійно, так і в команді": "Ability to work both independently and in a team"}}</li>
          </ul>
        </article>
    </section>

    <section id="education">
      <h2>{{ lang === "uk" ? "Освіта" : "Education" }}</h2>
      <article>
        <h3 data-key="edu_kpi">{{ lang === "uk" ? "Національний технічний університет України «Київський політехнічний інститут імені Ігоря Сікорського»" : "National Technical University of Ukraine “Igor Sikorsky KPI”" }}</h3>
        <p data-key="edu_speciality"><strong>{{ lang === "uk" ? "Спеціальність: Комп'ютерні науки": "Specialization: Computer Science" }}</strong></p>
        <p data-key="edu_period"><strong>{{ lang === "uk" ? "Період: 2024 - 2028": "Period 2024-2028" }}</strong></p>
      </article>
      <article>
        <h3 data-key="edu_courses">{{ lang === "uk" ? "Додаткові курси": "Additional courses" }}</h3>
        <article>
            <h3 data-key="edu_shag">{{ lang === "uk" ? "Мала комп’ютерна академія «ШАГ»": "Small Computer Academy “ШАГ”" }}</h3> 
              <p data-key="edu_program">{{ lang === "uk" ? "Програма додаткової ІТ-освіти для підлітків.": "Additional IT education program for teenagers." }}</p>
              <ul>
                <li data-key="edu_1">{{ lang === "uk" ? "Веб-розробка: HTML, JavaScript, Wix": "Web Development: HTML, JavaScript, Wix" }}</li>
                <li data-key="edu_2">{{ lang === "uk" ? "Графічний та веб-дизайн: Photoshop, Illustrator, Figma, Inkscape, GIMP": "Graphic and Web Design: Photoshop, Illustrator, Figma, Inkscape, GIMP" }}</li>
                <li data-key="edu_3">{{ lang === "uk" ? "3D-графіка та анімація: Blender, Autodesk 3ds Max, TinkerCad": "3D Graphics and Animation: Blender, Autodesk 3ds Max, TinkerCad" }}</li>
                <li>GameDev: Unity, Unreal Engine, Construct, Click Fusion</li>
                <li data-key="edu_4">{{ lang === "uk" ? "Програмування: Python, C#, Go": "Programming: Python, C#, Go" }}</li>
                <li data-key="edu_5">{{ lang === "uk" ? "Медіа та контент: Adobe Premiere, Sony Vegas, цифрова фотографія": "Media and Content: Adobe Premiere, Sony Vegas, Digital Photography" }}</li>
                <li data-key="edu_6">{{ lang === "uk" ? "Робототехніка та основи IT": "Robotics and IT Fundamentals" }}</li>
              </ul>
        </article>
      </article>
    </section>
  </main>
</template>