<template>
  <div class="modal">
    <div class="modal__bg">
      <div class="modal__content">
        <p>ModalTypeB</p>
        <button @click="hideModal">closeModal</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { multiMutations } from 'vuex';
// MultiModal共通の処理
import MultiModalMixin from '../mixins/MultiModalMixin';

export default {
  name: 'ModalTypeB',
  mixins: [MultiModalMixin]
}
</script>