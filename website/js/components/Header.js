import { h } from 'hyperapp'
import anime from 'animejs'
import logo from '../../assets/img/logo.svg'
import pkg from '../../../package.json'

export const actions = {
  animateLogo(el) {
    anime({
      targets: el,
      translateY: 210,
      duration: 2000,
      elasticity: 250,
      delay: 400
    })
  },
  animateVersion(el) {
    anime({
      targets: el,
      scale: 1,
      opacity: 1,
      duration: 2500,
      delay: 1000
    })
  },
  animateItems(el) {
    el.style.pointerEvents = 'none'
    anime({
      targets: el,
      translateY: 0,
      opacity: 1,
      delay: 1500,
      duration: 2000,
      elasticity: 200,
      begin() {
        el.style.pointerEvents = 'auto'
      }
    })
  }
}

export const state = {}

const styles = {
  logo: {},
  version: {
    opacity: 0,
    transform: 'scale(0.8)'
  },
  items: {
    opacity: 0,
    transform: 'translateY(50px)'
  }
}

export const view = ({ state, actions }) => (
  <header class="header">
    <div class="container">
      <img class="header__logo" src={logo} oncreate={actions.animateLogo} style={styles.logo} />
      <div class="header__heading-wrapper">
        <h1 class="header__heading">
          Tippy.js
          <span oncreate={actions.animateVersion} class="header__version" style={styles.version}>
            v{pkg.version}
          </span>
        </h1>
      </div>
      <h2 class="header__slogan">A highly customizable vanilla JS tooltip & popover library</h2>
      <div oncreate={actions.animateItems} class="header__items" style={styles.items}>
        <div class="header__item">
          <p>
            <i class="header__icon is-code" data-feather="code" />
            14 kB gzipped
          </p>
        </div>
        <div class="header__item">
          <a
            class="header__button"
            href="#"
            title="Popper.js is the <strong>positioning engine</strong> behind the tooltips."
            data-tippy-animation="perspective"
            data-tippy-arrow="true"
            data-tippy-arrowType="round"
            data-tippy-maxWidth="200px"
            data-tippy-theme="light"
            data-tippy-offset="0, 2"
            data-tippy-sticky="true"
            data-tippy-updateDuration="250"
          >
            <i class="icon header__icon is-power" data-feather="cloud-lightning" />
            Powered by Popper.js
          </a>
        </div>
        <div class="header__item has-github-button">
          <a
            class="github-button"
            href="https://github.com/atomiks/tippyjs"
            data-size="large"
            data-count-href="/atomiks/tippyjs/stargazers"
            data-show-count="true"
            data-count-aria-label="# stargazers on GitHub"
            aria-label="Star atomiks/tippyjs on GitHub"
          >
            Star
          </a>
        </div>
        <div class="header__item">
          <p class="header__docs-wrapper">
            <a class="header__docs" href="https://atomiks.github.io/tippyjs/v1/index.html">
              v1 docs
            </a>
          </p>
        </div>
      </div>
    </div>
  </header>
)