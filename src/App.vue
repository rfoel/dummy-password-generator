<template>
  <div id="app">
    <h1>Dummy Password Generator</h1>

    <PasswordGenerator :length="length" />
    <RangeField :length="length" @updateLength="onUpdateLength" />
    <CheckboxField :length="length" @updateLength="onUpdateLength" />
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
      length: 6,
    };
  },
  components: {
    PasswordGenerator,
    RangeField,
    CheckboxField,
  },
  methods: {
    onUpdateLength(value) {
      this.length = value;
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
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  pointer-events: none;
}

[data-tooltip]:before {
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-bottom: 5px;
  margin-left: -60px;
  padding: 7px;
  width: 100px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #000;
  background-color: hsla(0, 0%, 20%, 0.9);
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
  width: 0;
  border-top: 5px solid #000;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: ' ';
  font-size: 0;
  line-height: 0;
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
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
</style>
