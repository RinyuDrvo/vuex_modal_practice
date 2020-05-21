// MultiModal共通の処理
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations('multiModal', ['hideModal'])
  }
}