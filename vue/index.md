# Vue.js
Интерфейсы в современном вебе часто меняют состояние и обычных операций с DOM уже не хватает для удобной работы. Когда код превращается в кашу, а стейт в лапшу, на помощь приходят высокоуровневые библиотеки и ферймворки: Vue, React, Angular и пр.

Для начинающих лучше всего подойдет Vue, кривая вхождения в эту библиотеку самая пологая:

* Простые вещи делаются просто. Не обязательно заводить сборку, можно просто подключить библиотеку в теге `<script>` и начать работать.
* Vue — [прогрессивный фреймворк](https://youtu.be/p2P3z7p_zTI): можно просто подключить вместо jQuery, а можно создать полноценный SPA со стором, роутингом и прочими штуками.
* В компонентах можно использовать HTML, CSS и JS (хватает для большинства проектов, удобно новичкам), а можно добавить TypeScript, JSX, препроцессор и шаблонизатор (для больших, сложных проектов и профессиональных разработчиков).
* Vue нормально впишется в уже работающий сайт, чтобы реализовать какую-то его динамическую часть.
* Vue появилась позже Реакта и Ангуляра и использует некоторые основные принципы обоих. Разобравшись с Vue вам будет проще освоить все прочие популярные библиотеки и фреймворки.

## Быстрый старт
* [Replacing jQuery With Vue.js: No Build Step Necessary](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/).
* Создатель Vue [отвечает на вопросы пользователей](https://habrahabr.ru/post/350290/).

## Курсы
* [Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)](https://www.udemy.com/vuejs-2-the-complete-guide/). Доходчиво и постепенно автор знакомит со всеми особенностями работы Vue. Есть задания для практики, peer-to-peer code review.
* [Learn Vue 2 step-by-step](https://laracasts.com/series/learn-vue-2-step-by-step) от Laracasts — обзорный бесплатный курс, не такой глубокий, как предыдущий, но вполне хороший.

## Nuxt, Server Side Rendering
[Nuxt](https://nuxtjs.org) — надстройка поверх Vue, которая позволяет создавать веб-приложения с рендерингом на сервере без заморочек с конфигурацией. В основе Nuxt — Vue-компоненты.

После установки в директории `/pages` вы создаете свои `.vue`-компоненты, которые сразу становятся доступны по адресу `http://website-name/component-name`.

- Ролик на Ютюбе [Nuxt.js - Introduction by Project](https://youtu.be/nteDXuqBfn0). Автор рассказывает о Nuxt, показывает основные возможности и объясняет, что такое server side rendering.
- Курс [Nuxt.js - Vue.js on Steroids](https://www.udemy.com/nuxtjs-vuejs-on-steroids/?couponCode=ACAD_M) на Udemy.

## VuePress
Если нужно создать статический сайт, где основой будет текстовое наполнение (документацию, книгу, блог), то вместо Nuxt удобнее использовать [VuePress](https://vuepress.vuejs.org). Он создан специально для работы с документацией Vue.

После установки вы просто создаете [маркдаун](https://ru.wikipedia.org/wiki/Markdown)-файлы и все сразу работает. Так же можно создавать и вставлять в текст Vue-компоненты.

- Ролик на Ютюбе [VuePress A Vue.js Static Site Generator First Look](https://youtu.be/XoReHBlSXqI) с обзором основных возможностей.

## Книги
* [Vue.js: Up and Running](http://shop.oreilly.com/product/0636920103455.do).
* [Vue.js in Action](https://www.manning.com/books/vue-js-in-action)
* [Full-Stack Vue.js 2 and Laravel 5](https://www.packtpub.com/application-development/full-stack-vuejs-2-and-laravel-5). PHP-фреймворк Laravel во многом способствовал популяризации Vue. В книге автор создает клон AirBNB на Vue и Laravel, по пути объясняя, как их подружить через REST API.

## Документация
* Официальная документация [на английском](https://vuejs.org/v2/guide/) и [на русском](https://ru.vuejs.org/v2/guide/index.html).
* [Стайл гайд](https://vuejs.org/v2/style-guide/), набор обязательных и рекомендуемых практик по стилю кода.

## Нативный мобильный интерфейс
Есть несколько вариантов использования Vue для реализации нативных мобильных интерфейсов:

* [NativeScript](https://www.nativescript.org/vue).
* Ферймворк [Weex](https://weex.apache.org), от Apache Foundation, поддерживает Alibaba.

## Cordova/WebView
* В [Ionic 4](https://ionicframework.com/) можно использовать Vue.
* [Quasar](http://quasar-framework.org/).

## Гибридные приложения
* [Onsen](https://onsen.io/vue/) — набор интерфейсных компонентов для PWA и Cordova.
* [PWA](https://github.com/vuejs-templates/pwa) — бойлерплейт для Progressive Web App.
