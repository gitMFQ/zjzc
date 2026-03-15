// Tailwind 配置
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        accent: '#f59e0b'
      }
    }
  }
};

// 模板生成函数
const Templates = {
  // 导航栏桌面菜单项
  navItems() {
    const items = ['home', 'vehicles', 'packages', 'about', 'contact', 'help'];
    const names = { home: '首页', vehicles: '车型展示', packages: '服务套餐', about: '关于我们', contact: '联系方式', help: '帮助中心' };
    return items.map(item => `
      <a href="#" @click.prevent="page='${item}'" 
         :class="page==='${item}'?'text-primary font-semibold':'text-gray-700 hover:text-primary'" 
         x-text="'${names[item]}'"></a>
    `).join('');
  },

  // 导航栏移动端菜单项
  mobileNavItems() {
    const items = ['home', 'vehicles', 'packages', 'about', 'contact', 'help'];
    const names = { home: '首页', vehicles: '车型展示', packages: '服务套餐', about: '关于我们', contact: '联系方式', help: '帮助中心' };
    return items.map(item => `
      <a href="#" @click.prevent="page='${item}';mobileMenu=false" 
         :class="page==='${item}'?'bg-blue-50 text-primary':'text-gray-700'" 
         class="block px-4 py-2 rounded-lg" 
         x-text="'${names[item]}'"></a>
    `).join('');
  },

  // 服务内容区块
  servicesSection() {
    return CarRentalData.services.map(service => `
      <div class="relative rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-48">
        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style="background-image: url('${service.bgImage}')"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/60 transition-all duration-300"></div>
        <div class="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
          <div class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition">
            <i data-lucide="${service.icon}" class="h-7 w-7 text-white"></i>
          </div>
          <h3 class="font-bold text-lg text-white mb-2">${service.title}</h3>
          <p class="text-gray-200 text-sm leading-relaxed">${service.desc}</p>
        </div>
      </div>
    `).join('');
  },

  // 特色优势区块
  featuresSection() {
    return CarRentalData.features.map(feature => `
      <div class="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition group">
        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <i data-lucide="${feature.icon}" class="h-8 w-8 text-white"></i>
        </div>
        <h3 class="font-bold text-lg text-gray-800 mb-2">${feature.title}</h3>
        <p class="text-gray-600 text-sm">${feature.desc}</p>
      </div>
    `).join('');
  },

  // 热门车型区块
  hotVehiclesSection() {
    return CarRentalData.hotVehicles.map(id => {
      const vehicle = CarRentalData.vehicles.find(v => v.id === id);
      if (!vehicle) return '';
      const categoryName = CarRentalData.categories.find(c => c.id === vehicle.category)?.name || '';
      const categoryClass = {
        economy: 'text-green-700', comfort: 'text-blue-700', luxury: 'text-purple-700',
        suv: 'text-orange-700', mpv: 'text-teal-700', sedan: 'text-indigo-700', pickup: 'text-amber-700'
      }[vehicle.category] || 'text-gray-700';
      return `
        <div class="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div class="relative h-48 overflow-hidden">
            <img src="${vehicle.image}" alt="${vehicle.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.src='https://placehold.co/400x250/2563eb/ffffff?text=车辆图片'">
            <div class="absolute top-3 right-3">
              <span class="text-xs font-medium backdrop-blur-sm bg-white/80 px-3 py-1 rounded-full ${categoryClass}">${categoryName}</span>
            </div>
          </div>
          <div class="p-5">
            <h3 class="font-semibold text-lg text-gray-800 mb-2">${vehicle.name}</h3>
            <p class="text-gray-500 text-sm mb-3">${vehicle.specs.split(' · ').slice(0,3).join(' · ')}</p>
            <div class="flex flex-wrap gap-2 mb-3">
              ${vehicle.features.map(f => `<span class="text-xs bg-white text-gray-600 px-2 py-1 rounded">${f}</span>`).join('')}
            </div>
            <button onclick="goToPage('vehicles')" class="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition text-sm font-medium flex items-center justify-center gap-2">
              <span>更多车型</span>
              <i data-lucide="arrow-right" class="h-4 w-4"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
  },

  // 服务流程区块
  processSection() {
    return CarRentalData.process.map(item => `
      <div class="text-center group">
        <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg border-2 border-blue-100 group-hover:border-primary transition">
          <i data-lucide="${item.icon}" class="h-8 w-8 text-primary"></i>
        </div>
        <div class="text-sm font-bold text-accent mb-1">Step ${item.step}</div>
        <h3 class="font-semibold mb-2 text-gray-800">${item.title}</h3>
        <p class="text-gray-500 text-xs leading-relaxed">${item.desc}</p>
      </div>
    `).join('');
  },

  // 团队成员区块
  teamSection() {
    return CarRentalData.team.map(member => `
      <div class="bg-gray-50 rounded-xl shadow-lg overflow-hidden text-center hover:shadow-xl transition group">
        <div class="pt-8 pb-4">
          <img src="${member.avatar}" alt="${member.name}" class="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-primary transition" onerror="this.src='https://placehold.co/100x100/2563eb/ffffff?text=${member.name.charAt(0)}'">
        </div>
        <div class="p-6 pt-2">
          <h3 class="font-semibold text-lg">${member.name}</h3>
          <p class="text-primary text-sm mb-2">${member.role}</p>
          <p class="text-gray-600 text-sm">${member.desc}</p>
        </div>
      </div>
    `).join('');
  },

  // 客户评价区块
  testimonialsSection() {
    return CarRentalData.testimonials.map(review => `
      <div class="bg-white rounded-xl p-6 hover:shadow-lg transition">
        <div class="flex items-center mb-4">
          ${Array(review.rating).fill('<i data-lucide="star" class="h-4 w-4 text-yellow-400 fill-current"></i>').join('')}
        </div>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">"${review.content}"</p>
        <div class="flex items-center">
          <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">${review.name.charAt(0)}</div>
          <div>
            <p class="font-semibold text-sm">${review.name}</p>
            <p class="text-gray-500 text-xs">${review.role}</p>
          </div>
        </div>
      </div>
    `).join('');
  },

  // 车型筛选按钮
  vehicleFilterButtons() {
    return `
      <template x-for="cat in CarRentalData.categories">
        <button @click="vehicleFilter=cat.id" :class="vehicleFilter===cat.id?'bg-primary text-white':'bg-white text-gray-700 hover:bg-gray-100'" class="px-5 py-2 rounded-full text-sm transition" x-text="cat.name"></button>
      </template>
    `;
  },

  // 车型列表
  vehicleList() {
    return `
      <template x-for="vehicle in CarRentalData.vehicles" :key="vehicle.id">
        <div x-show="vehicleFilter==='all'||vehicleFilter===vehicle.category" class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div class="relative h-48 overflow-hidden">
            <img :src="vehicle.image" :alt="vehicle.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.src='https://placehold.co/400x200/2563eb/ffffff?text=车辆图片'">
            <div class="absolute top-3 right-3">
              <span class="text-xs font-medium backdrop-blur-sm bg-white/80 px-3 py-1 rounded-full" :class="getCategoryClass(vehicle.category)" x-text="getCategoryName(vehicle.category)"></span>
            </div>
          </div>
          <div class="p-5">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-semibold text-lg text-gray-800" x-text="vehicle.name"></h3>
            </div>
            <p class="text-gray-500 text-sm mb-4" x-text="vehicle.specs"></p>
            <div class="flex flex-wrap gap-2 mb-4">
              <template x-for="feature in vehicle.features">
                <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded" x-text="feature"></span>
              </template>
            </div>
            <button @click="bookingForm.vehicle=vehicle.name; page='contact'" class="w-full bg-primary text-white py-2.5 rounded-lg hover:bg-blue-700 transition text-sm font-medium">立即预订</button>
          </div>
        </div>
      </template>
    `;
  },

  // 优势区块
  advantagesSection() {
    return CarRentalData.advantages.map(advantage => `
      <div class="flex items-start space-x-4">
        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i data-lucide="${advantage.icon}" class="h-5 w-5 text-primary"></i>
        </div>
        <div>
          <h3 class="font-semibold mb-1">${advantage.title}</h3>
          <p class="text-gray-600 text-sm">${advantage.desc}</p>
        </div>
      </div>
    `).join('');
  },

  // 联系信息
  contactInfo() {
    const c = CarRentalData.company;
    return `
      <div class="flex items-start space-x-4">
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i data-lucide="phone" class="h-6 w-6 text-primary"></i>
        </div>
        <div>
          <h3 class="font-semibold">客服热线</h3>
          <p class="text-gray-600">${c.phone}</p>
          <p class="text-sm text-gray-500">7×24小时为您服务</p>
        </div>
      </div>
      <div class="flex items-start space-x-4">
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i data-lucide="mail" class="h-6 w-6 text-primary"></i>
        </div>
        <div>
          <h3 class="font-semibold">电子邮箱</h3>
          <p class="text-gray-600">${c.email}</p>
          <p class="text-sm text-gray-500">我们将在24小时内回复</p>
        </div>
      </div>
      <div class="flex items-start space-x-4">
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i data-lucide="printer" class="h-6 w-6 text-primary"></i>
        </div>
        <div>
          <h3 class="font-semibold">传真</h3>
          <p class="text-gray-600">${c.fax}</p>
          <p class="text-sm text-gray-500">商务合作传真</p>
        </div>
      </div>
      <div class="flex items-start space-x-4">
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i data-lucide="message-square" class="h-6 w-6 text-primary"></i>
        </div>
        <div>
          <h3 class="font-semibold mb-2">微信公众号</h3>
          <img src="https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/qrcode.jpg" alt="微信公众号二维码" class="w-28 h-28 rounded-lg shadow-sm">
        </div>
      </div>
    `;
  },

  // 门店地址
  storesSection() {
    return CarRentalData.stores.map((store, index) => `
      <div class="${index < CarRentalData.stores.length - 1 ? 'border-b pb-4' : ''}">
        <p class="text-gray-600 text-sm">${store.address}</p>
        <p class="text-sm text-gray-500">电话：${store.phone}</p>
      </div>
    `).join('');
  },

  // FAQ 区块
  // FAQ 区块 - 折叠手风琴式
  faqSection() {
    return CarRentalData.faqs.map((faq, index) => `
      <div class="border border-gray-200 rounded-lg overflow-hidden" x-data="{ open: ${index === 0} }">
        <button @click="open = !open" class="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition">
          <span class="font-medium text-gray-800 pr-4">Q: ${faq.q}</span>
          <i data-lucide="chevron-down" class="h-5 w-5 text-gray-400 transition-transform duration-200" :class="open ? 'rotate-180' : ''"></i>
        </button>
        <div x-show="open" x-collapse class="px-4 pb-4 bg-gray-50">
          <p class="text-gray-600 text-sm leading-relaxed">${faq.a}</p>
        </div>
      </div>
    `).join('');
  },

  // 租车须知
  rentalGuideSection() {
    return CarRentalData.rentalGuide.map(guide => `
      <div class="bg-gray-50 rounded-lg p-5">
        <div class="flex items-center mb-3">
          <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <i data-lucide="${guide.icon}" class="h-5 w-5 text-primary"></i>
          </div>
          <h3 class="font-semibold">${guide.title}</h3>
        </div>
        <ul class="space-y-2">
          ${guide.items.map(item => `
            <li class="text-gray-600 text-sm flex items-start">
              <span class="text-primary mr-2">•</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  },

  // 服务条款
  termsSection() {
    return CarRentalData.terms.map(term => `<p>${term}</p>`).join('');
  },

  // Footer 快速链接
  footerQuickLinks() {
    return `
      <li><a href="#" @click.prevent="page='home'" class="hover:text-white">首页</a></li>
      <li><a href="#" @click.prevent="page='vehicles'" class="hover:text-white">车型展示</a></li>
      <li><a href="#" @click.prevent="page='packages'" class="hover:text-white">服务套餐</a></li>
      <li><a href="#" @click.prevent="page='about'" class="hover:text-white">关于我们</a></li>
      <li><a href="#" @click.prevent="page='contact'" class="hover:text-white">联系方式</a></li>
    `;
  },

  // Footer 服务支持
  footerServiceLinks() {
    return `
      <li><a href="#" @click.prevent="page='help'" class="hover:text-white">帮助中心</a></li>
      <li><a href="#" @click.prevent="page='help'" class="hover:text-white">租车须知</a></li>
      <li><a href="#" @click.prevent="page='help'" class="hover:text-white">服务条款</a></li>
      <li><a href="#" @click.prevent="page='help'" class="hover:text-white">常见问题</a></li>
    `;
  },

  // Footer 联系信息
  footerContactInfo() {
    return `
      <li class="flex items-center"><i data-lucide="phone" class="h-4 w-4 mr-2"></i><span x-text="CarRentalData.company.phone"></span></li>
      <li class="flex items-center"><i data-lucide="mail" class="h-4 w-4 mr-2"></i><span x-text="CarRentalData.company.email"></span></li>
      <li class="flex items-center"><i data-lucide="map-pin" class="h-4 w-4 mr-2"></i><span x-text="CarRentalData.company.address"></span></li>
    `;
  },

  // 增值服务套餐
  servicePackagesSection() {
    return CarRentalData.servicePackages.map(pkg => `
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${pkg.recommended ? 'ring-2 ring-primary relative' : ''}">
        ${pkg.recommended ? '<div class="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg font-medium">推荐</div>' : ''}
        <div class="p-6 ${pkg.recommended ? 'bg-gradient-to-r from-blue-50 to-blue-100' : 'bg-gray-50'}">
          <h3 class="text-xl font-bold text-gray-800 mb-1">${pkg.name}</h3>
          <p class="text-sm text-gray-500 mb-2">${pkg.desc}</p>
          <p class="text-2xl font-bold text-primary">${pkg.price}</p>
        </div>
        <div class="p-6">
          <ul class="space-y-3">
            ${pkg.features.map(f => `
              <li class="flex items-start">
                <i data-lucide="check-circle" class="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"></i>
                <div>
                  <span class="font-medium text-gray-700">${f.label}：</span>
                  <span class="text-gray-600 text-sm">${f.value}</span>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  },

  // 押金说明
  depositInfoSection() {
    return CarRentalData.depositInfo.map(item => `
      <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <i data-lucide="${item.icon}" class="h-6 w-6 text-primary"></i>
          </div>
          <div>
            <h3 class="font-bold text-lg text-gray-800">${item.type}</h3>
            <p class="text-sm text-gray-500">${item.desc}</p>
          </div>
        </div>
        <ul class="space-y-2">
          ${item.details.map(d => `
            <li class="flex items-start text-sm text-gray-600">
              <i data-lucide="chevron-right" class="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5"></i>
              <span>${d}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  },

  // 车辆价格分类
  vehiclePriceClassesSection() {
    return `
      <div class="overflow-x-auto">
        <table class="w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead class="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <tr>
              <th class="px-6 py-4 text-left font-semibold">车辆分类</th>
              <th class="px-6 py-4 text-left font-semibold">购置价格区间</th>
              <th class="px-6 py-4 text-left font-semibold">车型示例</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            ${CarRentalData.vehiclePriceClasses.map((item, index) => `
              <tr class="${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition">
                <td class="px-6 py-4">
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">${item.class}</span>
                </td>
                <td class="px-6 py-4 font-medium text-gray-800">${item.priceRange}</td>
                <td class="px-6 py-4 text-gray-600">${item.examples}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
};

// 全局页面切换函数 - 使用自定义事件
function goToPage(pageId) {
  window.dispatchEvent(new CustomEvent('navigate', { detail: { page: pageId } }));
}

// 全局预订车辆函数 - 使用自定义事件
function bookVehicle(vehicleName) {
  window.dispatchEvent(new CustomEvent('book', { detail: { vehicle: vehicleName } }));
}

// Alpine.js 应用初始化
document.addEventListener('alpine:init', () => {
  Alpine.data('carRentalApp', () => ({
    page: 'home',
    mobileMenu: false,
    vehicleFilter: 'all',
    bookingForm: { name: '', phone: '', vehicle: '', date: '', returnDate: '', remarks: '' },
    submitSuccess: false,
    scrollY: 0,
    data: CarRentalData,
    templates: Templates,
    
    init() {
      // 初始渲染图标
      this.$nextTick(() => lucide.createIcons());
      // 监听页面切换，重新渲染图标
      this.$watch('page', () => {
        this.$nextTick(() => lucide.createIcons());
      });
      // 监听全局导航事件
      window.addEventListener('navigate', (e) => {
        this.page = e.detail.page;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.$nextTick(() => lucide.createIcons());
      });
      // 监听全局预订事件
      window.addEventListener('book', (e) => {
        this.bookingForm.vehicle = e.detail.vehicle;
        this.page = 'contact';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.$nextTick(() => lucide.createIcons());
      });
    },
    
    // 获取分类名称
    getCategoryName(categoryId) {
      const cat = this.data.categories.find(c => c.id === categoryId);
      return cat ? cat.name : '';
    },
    
    // 获取分类颜色类
    getCategoryClass(categoryId) {
      const colorMap = {
        economy: 'text-green-700',
        comfort: 'text-blue-700',
        luxury: 'text-purple-700',
        suv: 'text-orange-700',
        mpv: 'text-teal-700',
        sedan: 'text-indigo-700',
        pickup: 'text-amber-700'
      };
      return colorMap[categoryId] || 'text-gray-700';
    },
    
    // 筛选车辆
    get filteredVehicles() {
      if (this.vehicleFilter === 'all') {
        return this.data.vehicles;
      }
      return this.data.vehicles.filter(v => v.category === this.vehicleFilter);
    },
    
    // 热门车辆
    get hotVehicles() {
      return this.data.hotVehicles.map(id => 
        this.data.vehicles.find(v => v.id === id)
      ).filter(Boolean);
    },
    
    // Webhook 提交函数 - 钉钉机器人（通过 Vercel 云函数代理）
    async submitBooking() {
      // Cloudflare Worker 代理地址
      const apiUrl = 'https://webhook.osai.eu.org';
      
      try {
        // 构建消息内容（包含关键词：昭佳、车型、姓名、电话）
        const messageContent = `【昭佳租车】新预订通知
━━━━━━━━━━━━━━━━
姓名：${this.bookingForm.name}
电话：${this.bookingForm.phone}
车型：${this.bookingForm.vehicle}
取车日期：${this.bookingForm.date}
还车日期：${this.bookingForm.returnDate || '未填写'}
备注：${this.bookingForm.remarks || '无'}
━━━━━━━━━━━━━━━━
提交时间：${new Date().toLocaleString('zh-CN')}`;

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            msgtype: 'text',
            text: {
              content: messageContent
            }
          })
        });

        const result = await response.json();
        
        if (result.errcode === 0) {
          this.submitSuccess = true;
          setTimeout(() => {
            this.submitSuccess = false;
            this.bookingForm = { name: '', phone: '', vehicle: '', date: '', returnDate: '', remarks: '' };
          }, 3000);
        } else {
          console.error('钉钉推送失败:', result);
          alert('提交失败：' + (result.errmsg || '请稍后重试'));
        }
      } catch (error) {
        console.error('Error:', error);
        alert('提交失败，请检查网络后重试');
      }
    },
    
    // 验证手机号格式
    isValidPhone(phone) {
      return /^1[3-9]\d{9}$/.test(phone);
    },
    
    // 滚动到顶部
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
    // 切换页面
    goToPage(pageId) {
      this.page = pageId;
      this.mobileMenu = false;
    }
  }));
});