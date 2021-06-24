<template>
  <div class="card card-body mt-4">
    <h3>Edit users</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Option Platform</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Option Name</label>
        <input
          v-model="form.message"
          class="form-control"
          type="text"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getOption, updateOption } from '@/firebase'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const optionId = computed(() => route.params.id)
    const form = reactive({ name: '', email: '' })
    onMounted(async () => {
      const option = await getOption(optionId.value)
      console.log(option, optionId.value)
      form.name = option.name
      form.message = option.message
    })
    const update = async () => {
      await updateOption(optionId.value, { ...form })
      router.push('/')
      form.name = ''
      form.message = ''
    }
    return { form, update }
  }
}
</script>