<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Option Platform</th>
          <th scope="col">Option Name</th>
          <th scope="col">Option Value</th>
          <th scope="col">Dot Digital Id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, message } in options" :key="id">
          <td>{{ name }}</td>
          <td>{{ message }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteOption(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadOptions, deleteOption } from '@/firebase'
export default {
  setup() {
    const options = useLoadOptions()
    return { options, deleteOption }
  }
}
</script>