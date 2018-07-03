<template>
  <div class="input input-with-addon">
    <input type="text" v-model="password" readonly>
    <div class="buttons">
      <a data-tooltip="Copy" v-clipboard:copy="password">
        <img src="../assets/copy.svg" alt="Copy">
      </a>
      <a @click="refresh" data-tooltip="Refresh">
        <img src="../assets/refresh.svg" alt="Refresh">
      </a>
    </div>
  </div>
</template>

<script>
import DummyPassword from '../dummy-password';
const dummy = new DummyPassword();

export default {
  name: 'PasswordGenerator',
  props: ['options'],
  data() {
    return {
      password: '',
    };
  },
  methods: {
    generate() {
      const characters = [];
      for (let option in this.options) {
        if (this.options[option] === true) characters.push(dummy[option.toUpperCase()]);
      }
      this.password = dummy.create(this.options.length, characters.join(''));
    },
    refresh() {
      this.generate();
    },
  },
  watch: {
    options: {
      handler: function() {
        this.generate();
      },
      deep: true,
    },
  },
  mounted() {
    this.generate();
  },
};
</script>

<style scoped>
a img {
  width: 30px;
  cursor: pointer;
}

.input {
  text-align: left;
}

.input-with-addon {
  display: flex;
  background: #ffffff;
  padding: 15px 20px;
  border-radius: 10px;
}

.input-with-addon input {
  flex: 1;
  font-size: 2rem;
  color: #200064;
  border: 0;
  outline: none;
}

.buttons {
  position: relative;
  padding: 5px 0;
}

.input-with-addon .buttons a {
  user-select: none;
  padding: 0 5px;
  background: transparent;
}
</style>
