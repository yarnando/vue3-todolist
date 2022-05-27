<template>
    <div @click="envia()">
        {{tituloMaiusculo}}
        
    </div>
</template>
<script>
import { computed } from 'vue'
export default {
    props: ['title'],
    setup(props, { emit }) {
        const tituloMaiusculo = computed(() => props.title.toUpperCase())
        const envia = () => {
            emit('alo')
        }
        return {
            tituloMaiusculo,
            envia
        }
    },
}
</script>