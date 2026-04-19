<script setup>
defineProps(["lang"]);
</script>
<template>
  <footer>
    <p>
      {{ lang === "uk"
        ? "© 2026 Катя. Усі права захищено."
        : "© 2026 Katya. All rights reserved." }}
    </p>

    <ul>
      <li>
        <strong>Email:</strong>
        <a href="mailto:k.cherevatenko.zk41.fbmi28@lll.kpi.ua">
          k.cherevatenko.zk41.fbmi28@lll.kpi.ua
        </a>
      </li>

      <li>
        <strong>GitHub:</strong>
        <a href="https://github.com/elora-coder" target="_blank">
          github.com/elora-coder
        </a>
      </li>
    </ul>
  </footer>
</template>