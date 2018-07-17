<template>
  <div id="app">
    <h1>Dummy Password Generator</h1>

    <PasswordGenerator :options="options" />
    <RangeField :length="options.length" @updateLength="onUpdateLength" />
    <div class="options">
      <CheckboxField :options="{name: 'lower',value: options.lower, label: 'Lowercase'}" @updateOption="onUpdateOption" />
      <CheckboxField :options="{name: 'upper',value: options.upper, label: 'Uppercase'}" @updateOption="onUpdateOption" />
      <CheckboxField :options="{name: 'digits',value: options.digits, label: 'Digits'}" @updateOption="onUpdateOption" />
      <CheckboxField :options="{name: 'symbols',value: options.symbols, label: 'Symbols'}" @updateOption="onUpdateOption" />
    </div>
  </div>
</template>

<script>
import PasswordGenerator from './components/PasswordGenerator';
import RangeField from './components/RangeField';
import CheckboxField from './components/CheckboxField';

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
  max-width: 600px;
}

::selection {
  color: #a8ff78;
  background: #200064;
}

[data-tooltip] {
  position: relative;
  z-index: 2;
  cursor: pointer;
}

[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  pointer-events: none;
}

[data-tooltip]:before {
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-bottom: 25px;
  margin-left: -60px;
  padding: 7px;
  width: 100px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #200064;
  color: #fff;
  content: attr(data-tooltip);
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}

[data-tooltip]:after {
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  margin-bottom: 20px;
  width: 0;
  border-top: 5px solid #200064;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: ' ';
  font-size: 0;
  line-height: 0;
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
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
  color: #a8ff78;
  background: #200064;
  padding: 1rem 0.5rem;
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
