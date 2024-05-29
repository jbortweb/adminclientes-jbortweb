<script setup>
import { FormKit } from "@formkit/vue";
import { useRouter, useRoute } from "vue-router";
import ClienteService from '../services/ClienteService';
import BotonLink from "../components/UI/BotonLink.vue";
import Heading from "../components/UI/Heading.vue";
import { onMounted, reactive, ref } from "vue";

const router = useRouter()
const route = useRoute()

const {id} = route.params

const formData = reactive({
})



defineProps({
  titulo: {
    type:String
  }
})

onMounted(()=>{
  ClienteService.obtenerCliente(id)
  .then(({data})=> {
    Object.assign(formData, data)
  })
  .catch(error => console.log(error))  
})


const handleSubmit = (data) => {
  ClienteService.actualizarCliente(id, data)
  .then(()=> router.push({name:'inicio'}))
  .catch(error => console.log(error))
};

</script>

<template>
  <div>
    <div class="flex justify-end">
      <BotonLink to="inicio"> Volver </BotonLink>
    </div>
    <Heading>{{ titulo }}</Heading>
    <div class="mx-auto m-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
        type='form'
        submit-label="Guardiar cambios"
        incomplete-message="No se pudo registrar, revise los datos"
        @submit="handleSubmit"
        :value="formData"
      >
      <FormKit
        type="text"
        label="Nombre"
        name="nombre"
        placeholder="Nombre del Cliente"
        validation="required"
        :validation-messages="{required:'El Nombre del Cliente es Obligatorio'}"
        v-model="formData.nombre"
      />
      <FormKit
        type="text"
        label="Apellidos"
        name="apellidos"
        placeholder="Apellidos del Cliente"
        validation="required"
        :validation-messages="{required:'Los apellidos del Cliente son Obligatorios'}"
        v-model="formData.apellidos"
      />
      <FormKit
        type="email"
        label="Email"
        name="email"
        placeholder="Email del Cliente"
        validation="required|email"
        :validation-messages="{required:'El Email del Cliente es Obligatorio', email:'El email no tiene un formato correcto'}"
        v-model="formData.email"
      />
      <FormKit
        type="text"
        label="Teléfono"
        name="telefono"
        placeholder="Teléfono: XXXXXXXXX"
        validation="required|matches:/^[0-9]{9}$/"
        :validation-messages="{matches: 'El formato no es correcto', required:'El Teléfono del Cliente es Obligatorio'}"
        v-model="formData.telefono"
      />
      <FormKit
        type="text"
        label="Empresa"
        name="empresa"
        placeholder="Empresa del Cliente"
        v-model="formData.empresa"
      />
      <FormKit
        type="text"
        label="Puesto"
        name="puesto"
        placeholder="Puesto del Cliente"
        v-model="formData.puesto"
      />
      </FormKit>
      </div>
    </div>
  </div>
</template>
<style>
.formkit-wrapper{
  max-width: 100%;
}
.formkit-label{
  margin-bottom: 5px;
  font-size:20px;
}
</style>
