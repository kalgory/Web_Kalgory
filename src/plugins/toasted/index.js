import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
  singleton: true,
  duration: 5000,
  keepOnHover: true,
  theme: 'outline',
  position: 'top-center',
  iconPack: 'mdi',
});

Vue.toasted.register('error', (payload) => {
  if (!payload.message) {
    return '특정되지 않은 오류임';
  }
  return payload.message;
}, {
  type: 'error',
  icon: 'mdi-alert-circle-outline',
});

Vue.toasted.register('success', (payload) => {
  if (!payload.message) {
    return '완료했습니다.';
  }
  return payload.message;
},
{
  type: 'success',
  icon: 'mdi-check-bold',
});
