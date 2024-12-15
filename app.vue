<script setup lang="ts">
const config = useRuntimeConfig()

const state = reactive({
  name: '',
  email: '',
  gender: ''
})

async function onSubmit(event) {  
  await $fetch('/api/user', {
    method: 'POST',
    body: event.data
  })  
}
</script>

<template>
  <UContainer class="h-screen flex items-center justify-center">
    <UCard class="w-full max-w-2xl">
      <template #header>
        <h3>Create User</h3>
        <p class="text-sm text-gray-500">Environment: {{ config.public.ENV }}</p>
      </template>
      <UForm :state="state" @submit="onSubmit" class="flex flex-col gap-4">
        <UFormGroup label="Name" name="name" class="w-full">
          <UInput v-model="state.name" label="Name" />
        </UFormGroup>
        <UFormGroup label="Email" name="email" class="w-full">
          <UInput v-model="state.email" label="Email" />
        </UFormGroup>
        <UFormGroup label="Gender" name="gender">
          <USelect v-model="state.gender" label="Gender" :options="['male', 'female', 'other']" class="w-48" />
        </UFormGroup>
        <UButton type="submit" class="w-fit ml-auto">Create</UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>
