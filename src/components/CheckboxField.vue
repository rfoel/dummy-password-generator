<template>
  <div class="checkbox">
    Numbers
    <input type="checkbox" id="cbx" style="display:none" />
    <label for="cbx" class="toggle">
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxField',
  props: ['length'],
  methods: {
    onInput(event) {
      this.$emit('updateLength', event.target.value);
    },
  },
};
</script>

<style scoped>
.checkbox {
  text-align: left;
}
.toggle {
  position: relative;
  display: block;
  width: 30px;
  height: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  margin-top: 5px;
}
.toggle:before {
  content: '';
  position: relative;
  top: 4px;
  left: 3px;
  width: 25px;
  height: 10px;
  display: block;
  background: #fff;
  border-radius: 8px;
}
.toggle span {
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  display: block;
  background: white;
  border-radius: 10px;
}
#cbx:checked + .toggle:before {
  background: #200064;
}
#cbx:checked + .toggle span {
  background: #200064;
  transform: translateX(14px);
}
</style>
