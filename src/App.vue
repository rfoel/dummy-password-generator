<template>
  <div id="app">
    <main>
      <h1>Dummy Password Generator</h1>
      <PasswordGenerator :options="options" />
      <RangeField :length="options.length" @updateLength="onUpdateLength" />
      <div class="options">
        <CheckboxField :options="{name: 'lower',value: options.lower, label: 'Lowercase'}" @updateOption="onUpdateOption" />
        <CheckboxField :options="{name: 'upper',value: options.upper, label: 'Uppercase'}" @updateOption="onUpdateOption" />
        <CheckboxField :options="{name: 'digits',value: options.digits, label: 'Digits'}" @updateOption="onUpdateOption" />
        <CheckboxField :options="{name: 'symbols',value: options.symbols, label: 'Symbols'}" @updateOption="onUpdateOption" />
      </div>
    </main>
    <footer>
      <Socials />
    </footer>
  </div>
</template>

<script>
import PasswordGenerator from './components/PasswordGenerator';
import RangeField from './components/RangeField';
import CheckboxField from './components/CheckboxField';
import Socials from './components/Socials';

export default {
  name: 'app',
  data() {
    return {
      options: {
        length: 6,
        lower: true,
        upper: true,
        digits: true,
        symbols: false,
      },
    };
  },
  components: {
    PasswordGenerator,
    RangeField,
    CheckboxField,
    Socials,
  },
  methods: {
    onUpdateLength(value) {
      this.options.length = value;
    },
    onUpdateOption(target) {
      this.options[target.name] = target.checked;
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto+Slab:700);
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: 'Roboto Slab', serif;
  color: #200064;
  text-align: center;
  background: #a8ff78;
  background: linear-gradient(to right, #78ffd6, #a8ff78);
  background-size: 300% 300%;
  animation: Wave 10s ease infinite;
  box-sizing: border-box;
  padding: 20px;
}

#app {
  width: 100%;
  height: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  /* height: 100%; */
}

::selection {
  color: #a8ff78;
  background: #200064;
}

@keyframes Wave {
  0% {
    background-position: 0% 44%;
  }
  50% {
    background-position: 100% 57%;
  }
  100% {
    background-position: 0% 44%;
  }
}

.options {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.notices {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  padding: 1em;
  overflow: hidden;
  z-index: 1000;
  pointer-events: none;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.notices.is-bottom {
  flex-direction: column-reverse;
}
.notices .notification {
  opacity: 0.8;
  pointer-events: auto;
  display: inline-flex;
  margin-bottom: 1rem;
  color: #fff;
  background: #200064;
  padding: 1rem;
  border-radius: 3px;
}
.notices .notification.is-top {
  align-self: flex-start;
}
.notices .notification.is-bottom {
  align-self: flex-end;
}
.notices .notification.is-left {
  margin-right: auto;
}
.notices .notification.is-right {
  margin-left: auto;
}
.notices .notification.is-center {
  margin: 0 auto;
}
</style>
