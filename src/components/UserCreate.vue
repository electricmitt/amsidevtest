<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Option Platform</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Option Name</label>
        <input
          v-model="form.message"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-success mt-3">
        Save
      </button>
      <br>
      <dropdown :options="arrayOfObjects" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown>
    </form>
  </div>
</template>

<script>
import { createOption } from '@/firebase'
import { reactive } from 'vue'
import dropdown from 'vue-dropdowns';
import db from '@/firebasetwo'

export default {
  setup() {
    const form = reactive({ name: '', message: '' })
    const onSubmit = async () => {
      await createOption({ ...form })
      form.name = ''
      form.message = ''
      form.value = ''
      form.digital = ''
    }
    return { form, onSubmit }
  }, 
    data() {
          return {
            arrayOfObjects: [],
            object: {
              name: 'Options',
            }
          }
        },

        components: {
            'dropdown': dropdown,
        },

        methods: {
          methodToRunOnSelect(payload) {
            this.object = payload;
          }
        }
}

</script>