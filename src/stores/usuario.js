import { defineStore } from 'pinia'

export const useUsuarioStore = defineStore({
    id: 'usuario',
    state: () => ({
        dadosUsuario: {
            nome: 'CUZAO',
            idade: null
        }
    }),
    getters: {
        doubleCount: (state) => state.nome.toUpperCase()
    },
    actions: {
        dizNome() {
            console.log(this.nome);
        }
    }
})
