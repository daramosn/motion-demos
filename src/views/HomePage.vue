<template>
  <main class="home">
    <h1>Motion exercises</h1>
    <section>
      <ul>
        <li><RouterLink to="/infinite-text"> Infinite text with move on scroll</RouterLink></li>
      </ul>
    </section>
  </main>
</template>

<style>
.home {
  /* TODO: different design */
  margin: 32px max(32px, calc((100% - var(--body)) / 2));
  text-align: center;
  h1 {
    font-size: 64px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    font-size: customClamp(24px, 32px, 536px, 1200px);
    a {
      text-decoration: none;
      color: currentColor;
    }
  }
}
</style>
