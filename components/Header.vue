<template>
  <header class="site-header">
    <div class="wrapper site-header__wrapper">
      <NuxtLink to="/" class="site-name">My家計簿</NuxtLink>
      <nav class="nav">
        <button class="nav__toggle" aria-expanded="false" type="button">
          menu
        </button>
        <ul class="nav__wrapper">
          <li class="nav__item"><NuxtLink to="/">トップ</NuxtLink></li>
          <li class="nav__item"><NuxtLink to="/home">ホーム</NuxtLink></li>
          <li class="nav__item">
            <NuxtLink to="/finance/entry">登録</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/finance/detail">一覧</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/finance/graph">グラフ</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
}
.site-name {
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
}
@media (min-width: 600px) {
  .brand {
    margin-bottom: 1rem;
  }
}
.site-header {
  position: relative;
  background-color: #def7ff;
}

.site-header__wrapper {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
@media (min-width: 600px) {
  .site-header__wrapper {
    text-align: center;
  }
}
@media (min-width: 600px) {
  .nav__wrapper {
    display: inline-flex;
  }
}

@media (max-width: 599px) {
  .nav__wrapper {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: -1;
    background-color: #d9f0f7;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  }
  .nav__wrapper.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
}

.nav__item a {
  display: block;
  padding: 1rem;
}

.nav__toggle {
  display: none;
}
@media (max-width: 599px) {
  .nav__toggle {
    display: block;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
}
</style>
