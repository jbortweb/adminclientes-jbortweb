import api from '../helper/axios.js'

export default {
  obtenerClientes(){
    return api.get('/clientes')
  },

  agregarCliente(data) {
    return api.post("/clientes", data)
  },
  obtenerCliente(id) {
    return api("/clientes/" + id)
  },
  actualizarCliente(id, data) {
    return api.patch("/clientes/" + id, data)
  },
  cambiarEstado(id, data) {
    return api.patch("/clientes/" + id, data)
  },
  eliminarCliente(id) {
    return api.delete("/clientes/" + id)
  }
}