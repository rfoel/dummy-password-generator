<template>
  <div class="range-field">
    <label>Length</label>
    <div class="input">
      <div class="range">
        <input type="range" min="1" max="50" :value="length" @input="onInput">
        <div class="track" :style="style"></div>
      </div>
      <span>
        {{length}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangeField',
  props: ['length'],
  data() {
    return {
      style: 'background: linear-gradient(to right, #200064 0%, #200064 12%, #fff 12%, #fff 100%)',
    };
  },
  methods: {
    onInput(event) {
      const value = event.target.value;
      this.style = `background: linear-gradient(to right, #200064 0%, #200064 ${2 * value}%, #fff ${2 *
        value}%, #fff 100%)`;
      this.$emit('updateLength', value);
    },
  },
};
</script>

<style scoped>
.range-field {
  padding: 20px 0;
}
.track {
  position: absolute;
  top: 7px;
  left: 0;
  width: 100%;
  height: 10px;
  border-radius: 25px;
  z-index: -1;
}
label {
  display: block;
  text-align: center;
}
.input {
  display: flex;
  align-items: center;
}
.range {
  position: relative;
  flex: 8;
}
.input span {
  flex: 1;
}
input[type='range'] {
  width: 100%;
  height: 10px;
  -webkit-appearance: none;
  background: transparent;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 0px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #200064;
  background: #fff;
  border-radius: 1px;
  border: 0px solid #200064;
}
input[type='range']::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #200064;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #200064;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -9px;
}

input[type='range']:focus::-webkit-slider-runnable-track {
  background: #fff;
}
input[type='range']::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #200064;
  background: #fff;
  border-radius: 1px;
  border: 0px solid #200064;
}
input[type='range']::-moz-range-thumb {
  box-shadow: 0px 0px 0px #200064;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #200064;
  cursor: pointer;
}
input[type='range']::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: #fff;
  border: 0px solid #200064;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #200064;
}
input[type='range']::-ms-fill-upper {
  background: #fff;
  border: 0px solid #200064;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #200064;
}
input[type='range']::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #200064;
  border: 1px solid #fff;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #200064;
  cursor: pointer;
}
input[type='range']:focus::-ms-fill-lower {
  background: #fff;
}
input[type='range']:focus::-ms-fill-upper {
  background: #fff;
}
</style>
