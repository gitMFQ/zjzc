<script setup>
import { ref } from 'vue'
import { bookingForm, canSubmit, phoneValid, resetBookingForm } from '@/stores/booking'
import { submitBooking } from '@/services/bookingService'

const submitting = ref(false)
const success = ref(false)
const errorMessage = ref('')

async function onSubmit() {
  if (!canSubmit.value || submitting.value) return

  submitting.value = true
  errorMessage.value = ''

  const result = await submitBooking({ ...bookingForm })
  submitting.value = false

  if (result.ok) {
    success.value = true
    setTimeout(() => {
      success.value = false
      resetBookingForm()
    }, 3000)
  } else {
    errorMessage.value = result.message
  }
}
</script>

<template>
  <form novalidate @submit.prevent="onSubmit">
    <div class="space-y-4">
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label for="booking-name" class="block text-sm font-medium text-gray-700 mb-1">
            您的姓名 <span class="text-red-500">*</span>
          </label>
          <input
            id="booking-name"
            v-model.trim="bookingForm.name"
            type="text"
            required
            class="form-input"
            placeholder="请输入姓名"
          />
        </div>
        <div>
          <label for="booking-phone" class="block text-sm font-medium text-gray-700 mb-1">
            联系电话 <span class="text-red-500">*</span>
          </label>
          <input
            id="booking-phone"
            v-model.trim="bookingForm.phone"
            type="tel"
            required
            maxlength="11"
            class="form-input"
            :class="!phoneValid ? 'border-red-500' : ''"
            placeholder="请输入手机号"
          />
          <p v-if="!phoneValid" class="text-red-500 text-xs mt-1">请输入正确的11位手机号</p>
        </div>
      </div>

      <div>
        <label for="booking-vehicle" class="block text-sm font-medium text-gray-700 mb-1">
          意向车型 <span class="text-red-500">*</span>
        </label>
        <input
          id="booking-vehicle"
          v-model.trim="bookingForm.vehicle"
          type="text"
          required
          class="form-input"
          placeholder="请输入车型或从车型页选择"
        />
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label for="booking-date" class="block text-sm font-medium text-gray-700 mb-1">
            取车日期 <span class="text-red-500">*</span>
          </label>
          <input id="booking-date" v-model="bookingForm.date" type="date" required class="form-input" />
        </div>
        <div>
          <label for="booking-return-date" class="block text-sm font-medium text-gray-700 mb-1">还车日期</label>
          <input id="booking-return-date" v-model="bookingForm.returnDate" type="date" class="form-input" />
        </div>
      </div>

      <div>
        <label for="booking-remarks" class="block text-sm font-medium text-gray-700 mb-1">备注信息</label>
        <textarea
          id="booking-remarks"
          v-model="bookingForm.remarks"
          rows="3"
          class="form-input"
          placeholder="请输入其他需求或备注"
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="!canSubmit || submitting"
        class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ submitting ? '提交中…' : '提交预订' }}
      </button>
    </div>
  </form>

  <div v-if="success" class="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
    预订提交成功！我们将尽快联系您
  </div>

  <div v-if="errorMessage" class="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
    {{ errorMessage }}
  </div>
</template>
