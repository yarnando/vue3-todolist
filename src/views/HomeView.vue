<template>
  <main>
    <input type="text" v-model="usuarioStore.dadosUsuario.nome" class="form-control" />
    <!-- {{title}} -->
    <button class="btn btn-primary" @click="teste()">Test</button>

    <!-- <Task 
      :title="'titulo de exemplo'"
      @alo="teste()"
    /> -->

    {{usuarioStore.dadosUsuario}}
    
  </main>
</template>


<script>
import { computed, reactive, ref, toRefs, onMounted } from 'vue'
import { useUsuarioStore } from '@/stores/usuario'
import Task from "./Task.vue";

export default {
  components: {
    Task
  },
  setup() {
    const usuarioStore = useUsuarioStore()


    const title = ref('Titulo');
    const data = reactive({
      id: '0',
      task: 'clear',
      nome: computed(() => usuarioStore.nome)
      // createdAt: computed(() => data.task.toUpperCase())
    });
    const teste = () => {
      console.log(data.task);
    }
    return {
      title,
      teste,
      ...toRefs(data),
      usuarioStore
    }
  },
}
</script>