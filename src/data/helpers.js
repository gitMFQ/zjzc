import { CarRentalData } from './carRentalData'

/**
 * 分类标签的文字颜色（Tailwind class）
 * 新增品牌分类时，在这里补一条颜色映射即可。
 */
export const categoryColorMap = {
  economy: 'text-green-700',
  comfort: 'text-blue-700',
  luxury: 'text-purple-700',
  suv: 'text-orange-700',
  mpv: 'text-teal-700',
  sedan: 'text-indigo-700',
  pickup: 'text-amber-700',
  tank: 'text-stone-700',
  haval: 'text-red-700',
  toyota: 'text-gray-700',
  honda: 'text-rose-700',
  buick: 'text-cyan-700',
  byd: 'text-emerald-700',
  greatwall: 'text-slate-700',
  trumpchi: 'text-blue-600',
  jetour: 'text-orange-600',
  denza: 'text-sky-600'
}

export function categoryName(categoryId) {
  const category = CarRentalData.categories.find((item) => item.id === categoryId)
  return category ? category.name : ''
}

export function categoryClass(categoryId) {
  return categoryColorMap[categoryId] || 'text-gray-700'
}

/** 首页热门车型（hotVehicles 存的是车辆 id） */
export function getHotVehicles() {
  return CarRentalData.hotVehicles
    .map((id) => CarRentalData.vehicles.find((vehicle) => vehicle.id === id))
    .filter(Boolean)
}

/** 按分类过滤车型，'all' 表示全部 */
export function filterVehicles(categoryId) {
  if (!categoryId || categoryId === 'all') return CarRentalData.vehicles
  return CarRentalData.vehicles.filter(
    (vehicle) => Array.isArray(vehicle.categories) && vehicle.categories.includes(categoryId)
  )
}

/** 手机号校验（11 位大陆手机号） */
export function isValidPhone(phone) {
  return /^1[3-9]\d{9}$/.test(String(phone || '').trim())
}
