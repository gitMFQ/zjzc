import { computed, reactive } from 'vue'
import { isValidPhone } from '@/data/helpers'

function emptyForm() {
  return {
    name: '',
    phone: '',
    vehicle: '',
    date: '',
    returnDate: '',
    remarks: ''
  }
}

/**
 * 预订表单全局状态（车型页「立即预订」会带入车型，联系页读取）
 */
export const bookingForm = reactive(emptyForm())

export function resetBookingForm() {
  Object.assign(bookingForm, emptyForm())
}

export function bookVehicle(vehicleName) {
  bookingForm.vehicle = vehicleName
}

export const phoneValid = computed(() =>
  bookingForm.phone ? isValidPhone(bookingForm.phone) : true
)

export const canSubmit = computed(
  () =>
    Boolean(bookingForm.name) &&
    isValidPhone(bookingForm.phone) &&
    Boolean(bookingForm.vehicle) &&
    Boolean(bookingForm.date)
)
