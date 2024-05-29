<script setup>
import { FormKit } from "@formkit/vue";
import { useRouter } from "vue-router";
import ClienteService from '../services/ClienteService';
import BotonLink from "../components/UI/BotonLink.vue";
import Heading from "../components/UI/Heading.vue";

const router = useRouter()

defineProps({
  titulo: {
    type:String
  }
})

const handleSubmit = (data) => {
  data.estado = 1
  ClienteService.agregarCliente(data)
   .then(res => {
    router.push('/')

    })
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
        submit-label="Agregar Cliente"
        incomplete-message="No se pudo registrar, revise los datos"
        @submit="handleSubmit"
      >
      <FormKit
        type="text"
        label="Nombre"
        name="nombre"
        placeholder="Nombre del Cliente"
        validation="required"
        :validation-messages="{required:'El Nombre del Cliente es Obligatorio'}"
      />
      <FormKit
        type="text"
        label="Apellidos"
        name="apellidos"
        placeholder="Apellidos del Cliente"
        validation="required"
        :validation-messages="{required:'Los apellidos del Cliente son Obligatorios'}"
      />
      <FormKit
        type="email"
        label="Email"
        name="email"
        placeholder="Email del Cliente"
        validation="required|email"
        :validation-messages="{required:'El Email del Cliente es Obligatorio', email:'El email no tiene un formato correcto'}"
      />
      <FormKit
        type="text"
        label="Teléfono"
        name="telefono"
        placeholder="Teléfono: XXXXXXXXX"
        validation="required|matches:/^[0-9]{9}$/"
        :validation-messages="{matches: 'El formato no es correcto', required:'El Teléfono del Cliente es Obligatorio'}"
      />
      <FormKit
        type="text"
        label="Empresa"
        name="empresa"
        placeholder="Empresa del Cliente"
      />
      <FormKit
        type="text"
        label="Puesto"
        name="puesto"
        placeholder="Puesto del Cliente"
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
