<template>
  <div class="checkbox">
    {{options.label}}
    <input :name="options.name" type="checkbox" :id="options.name" style="display:none" :checked="options.value" @change="onChange" />
    <label :for="options.name" class="toggle">
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxField',
  props: ['options'],
  methods: {
    onChange(event) {
      this.$emit('updateOption', event.target);
    },
  },
};
</script>

<style scoped>
.checkbox {
  text-align: center;
  flex: 1;
  user-select: none;
  min-width: 130px;
  margin: 10px 0;
}
.toggle {
  position: relative;
  display: block;
  width: 30px;
  height: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  margin: 5px auto 0 auto;
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
input:checked + .toggle:before {
  background: #200064;
}
input:checked + .toggle span {
  background: #200064;
  transform: translateX(14px);
}
</style>
