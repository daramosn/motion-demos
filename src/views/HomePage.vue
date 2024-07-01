<template>
  <main class="home">
    <h1>Motion demos</h1>
    <section>
      <ul>
        <li><RouterLink to="/infinite-text"> Infinite text with move on scroll</RouterLink></li>
        <li><RouterLink to="/floating-gallery"> Floating gallery</RouterLink></li>
        <li><RouterLink to="/mask-cursor"> Mask cursor</RouterLink></li>
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
    margin-bottom: 64px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    font-size: customClamp(24px, 32px, 536px, 1200px);
    padding: 32px 16px;
    color: rgb(187, 187, 187);
    transition: color ease-out 0.2s;
    border-bottom: 1px solid white;
    &:first-child {
      border-top: 1px solid white;
    }
    &:hover {
      color: white;
    }

    a {
      text-decoration: none;
      color: currentColor;
    }
  }
}
</style>
