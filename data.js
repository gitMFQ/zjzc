const CarRentalData = {
  // 导航菜单
  navItems: [
    { id: 'home', name: '首页' },
    { id: 'vehicles', name: '车型展示' },
    { id: 'about', name: '关于我们' },
    { id: 'contact', name: '联系方式' },
    { id: 'help', name: '帮助中心' }
  ],

  // Footer 快速链接
  footerQuickLinks: [
    { page: 'home', name: '首页' },
    { page: 'vehicles', name: '车型展示' },
    { page: 'about', name: '关于我们' },
    { page: 'contact', name: '联系方式' }
  ],

  // Footer 服务支持链接
  footerServiceLinks: [
    { page: 'help', name: '帮助中心' },
    { page: 'help', name: '租车须知' },
    { page: 'help', name: '服务条款' },
    { page: 'help', name: '常见问题' }
  ],

  company: {
    name: "昭佳租车",
    slogan: "昭佳租车，畅享出行",
    description: "专业汽车租赁服务，为您提供安全、舒适、便捷的出行体验",
    phone: "187 9500 7776 / 199 0957 0777",
    email: "info@nxzjzc.cn",
    fax: "0951-5606667",
    address: "银川市金凤区旭辉江南学府44-10号",
    wechat: "昭佳租车",
    established: "2021年"
  },
  
  stores: [
    { address: "银川市金凤区旭辉江南学府44-10号", phone: "0951-5606667" }
  ],

  features: [
    { icon: "shield-check", title: "安全保障", desc: "全程保险覆盖，24小时道路救援" },
    { icon: "clock", title: "快速取还", desc: "预约即可取车，还车手续便捷" },
    { icon: "tag", title: "价格透明", desc: "无隐藏费用，明码标价" },
    { icon: "headphones", title: "专业服务", desc: "一对一客服，全天候在线支持" }
  ],

  advantages: [
    { icon: "check-circle", title: "专业团队", desc: "经验丰富的服务团队，为您提供专业的用车建议" },
    { icon: "check-circle", title: "丰富车型", desc: "涵盖经济型到豪华型，满足各种用车需求" },
    { icon: "check-circle", title: "便捷服务", desc: "线上预订，快速取还，24小时客服支持" },
    { icon: "check-circle", title: "价格优惠", desc: "会员专享折扣，长期租赁更优惠" }
  ],

  categories: [
    { id: "all", name: "全部" },
    { id: "economy", name: "经济型", color: "green" },
    { id: "comfort", name: "舒适型", color: "blue" },
    { id: "luxury", name: "豪华型", color: "purple" },
    { id: "suv", name: "SUV", color: "orange" },
    { id: "mpv", name: "MPV", color: "teal" },
    { id: "sedan", name: "轿车", color: "indigo" },
    { id: "pickup", name: "皮卡", color: "amber" },
    { id: "haval", name: "哈弗", color: "red" },
    { id: "toyota", name: "丰田", color: "gray" },
    { id: "honda", name: "本田", color: "rose" },
    { id: "buick", name: "别克", color: "cyan" },
    { id: "greatwall", name: "长城", color: "slate" },
    { id: "tank", name: "坦克", color: "stone" },
    { id: "byd", name: "比亚迪", color: "emerald" }
  ],

  vehicles: [
    {
      id: 1,
      name: "丰田卡罗拉",
      category: "economy",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 1.6L · 油耗5.8L/100km",
      features: ["适合1-4人出行", "省油经济，适合市区代步"]
    },
    {
      id: 2,
      name: "本田思域",
      category: "economy",
      image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 1.5T · 油耗6.2L/100km",
      features: ["动力充沛，驾驶乐趣", "运动造型，适合年轻人"]
    },
    {
      id: 3,
      name: "大众帕萨特",
      category: "comfort",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 2.0T · 油耗7.1L/100km",
      features: ["空间宽敞，乘坐舒适", "商务出行首选"]
    },
    {
      id: 4,
      name: "丰田凯美瑞",
      category: "comfort",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 2.5L · 油耗6.8L/100km",
      features: ["品质可靠，口碑良好", "静谧性强，长途首选"]
    },
    {
      id: 5,
      name: "奔驰E级",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 2.0T · 油耗8.5L/100km",
      features: ["豪华内饰，尊贵体验", "商务接待，彰显品位"]
    },
    {
      id: 6,
      name: "宝马5系",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 2.0T · 油耗8.2L/100km",
      features: ["操控出色，驾驶乐趣", "科技配置，智能互联"]
    },
    {
      id: 7,
      name: "丰田汉兰达",
      category: "suv",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=250&fit=crop",
      specs: "7座 · 自动挡 · 2.5L · 油耗8.8L/100km",
      features: ["7座空间，全家出行", "通过性强，适合越野"]
    }
  ],

  hotVehicles: [1, 3, 5],

  faqs: [
    {
      q: "预订需要什么证件？",
      a: "取车时需要提供本人有效身份证原件、驾驶证原件（驾龄需满1年）。如需要代驾服务，还需提供代驾司机的相关证件。"
    },
    {
      q: "可以异地还车吗？",
      a: "可以。我们支持同城异地还车服务，但会收取一定的异地还车费。具体费用请咨询客服。"
    },
    {
      q: "租车需要押金吗？",
      a: "是的。根据车型不同，押金金额也不同。经济型押金2000-5000元，舒适型押金5000-10000元，豪华型押金10000-20000元。还车检查无误后7个工作日内退还。"
    },
    {
      q: "油费怎么算？",
      a: "取车时油箱为满油状态，还车时请保持油箱满油。如不足，将按市场油价补足并收取50元加油服务费。"
    },
    {
      q: "发生事故怎么办？",
      a: "请立即拨打24小时救援电话187 9500 7776，我们会第一时间协助处理。所有车辆均投保全险，您只需承担保险免赔额部分（经济型2000元，舒适型3000元，豪华型5000元）。"
    },
    {
      q: "可以取消预订吗？",
      a: "取车前24小时以上可免费取消；24小时内取消收取20%手续费；取车当天不通知不来取车收取100%违约金。"
    }
  ],

  terms: [
    "1. 租赁条件：承租人需年满21周岁，持有有效驾驶证满1年以上，无重大交通事故记录。",
    "2. 租赁期限：最短1天，最长30天。如需长期租赁，请联系商务客户部洽谈。",
    "3. 里程限制：经济型、舒适型每日限300公里，豪华型、SUV每日限500公里。超出部分按2元/公里收费。",
    "4. 车辆使用：承租人应爱护车辆，不得转租、转借、抵押车辆。不得从事违法活动或危险驾驶。",
    "5. 保险说明：车辆投保交强险、第三者责任险、车辆损失险。以下情况保险不生效：酒驾、无证驾驶、故意损坏等。",
    "6. 违章处理：租赁期间产生的违章由承租人自行处理。如未及时处理，我方将代为处理并收取100元/笔服务费。",
    "7. 免责条款：因不可抗力（如自然灾害、政策限制等）导致无法履行租赁的，双方互不承担违约责任。",
    "8. 争议解决：本协议适用中华人民共和国法律。如有争议，双方协商解决；协商不成的，提交租赁所在地人民法院诉讼解决。"
  ],

  about: {
    title: "关于我们",
    description: "昭佳租车成立于2021年，是一家专业从事汽车租赁服务的现代化企业。公司秉承\"安全、便捷、诚信、创新\"的服务理念，致力于为广大用户提供优质的汽车租赁服务。",
    description2: "经过多年的发展，我们已在多个城市建立服务网点，拥有各类车辆数百辆，包括经济型、舒适型、豪华型、SUV等多种车型，满足不同客户的需求。"
  },

  services: [
    { icon: "key", title: "自驾租车", desc: "银川自驾租车，多种车型多种档次任你挑选，可提供接机服务" },
    { icon: "briefcase", title: "公务用车", desc: "银川公务用车，可公对公转账，及时开票" },
    { icon: "map", title: "旅游包车", desc: "宁夏旅游包车，提供中型客车、大型客车带司机服务" },
    { icon: "heart", title: "婚庆租车", desc: "银川婚庆租车，各种豪车应有尽有，随您挑选" },
    { icon: "mountain", title: "沙漠拓展", desc: "提供五湖穿越、沙漠徒步等项目" }
  ],

  process: [
    { icon: "message-circle", step: "01", title: "需求沟通", desc: "您提出对车辆的基本需求，包括使用时间、使用车型等" },
    { icon: "calculator", step: "02", title: "项目评估", desc: "根据您提出的需求进行计算，计算出相应的费用" },
    { icon: "file-signature", step: "03", title: "签订合同", desc: "双方确认费用、时间、车型等要求的基础上，双方共同签订合同" },
    { icon: "car", step: "04", title: "取车验车", desc: "双方对车辆进行外观、油表、里程等进行查验并签署验车单后您取走车辆" },
    { icon: "compass", step: "05", title: "使用阶段", desc: "您在车辆使用过程中有任何问题应及时联系我们" },
    { icon: "undo-2", step: "06", title: "还车验车", desc: "车辆使用完后您联系我们进行还车验车" }
  ],

  team: [
    { name: "牛昭平", role: "总经理", desc: "15年汽车行业经验，深耕租车服务领域", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "邵佳华", role: "运营总监", desc: "专注客户体验优化，提升服务品质", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "马富强", role: "车队经理", desc: "负责车辆维护保养，确保车况优良", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
    { name: "马跃", role: "客户经理", desc: "用心服务每一位客户，解决用车问题", avatar: "https://randomuser.me/api/portraits/men/68.jpg" }
  ],

  testimonials: [
    { name: "刘先生", role: "商务人士", content: "公司长期合作，服务专业，车辆状况良好，每次出差都首选昭佳租车。", rating: 5 },
    { name: "张女士", role: "自驾游客", content: "和家人去宁夏旅游租了一辆SUV，车型新、价格合理，客服态度超好！", rating: 5 },
    { name: "王经理", role: "企业客户", content: "公司团建包车服务很满意，司机师傅专业又热情，下次还会选择。", rating: 5 },
    { name: "李小姐", role: "婚庆用车", content: "婚礼当天的婚车安排得非常完美，车队整齐准时，感谢昭佳租车！", rating: 5 }
  ],

  rentalGuide: [
    { icon: "id-card", title: "证件要求", items: ["本人有效身份证原件", "有效驾驶证原件（驾龄满1年以上）", "本人名下信用卡或储蓄卡（用于押金预授权）"] },
    { icon: "calendar", title: "预订须知", items: ["提前24小时预订可确保车辆供应", "预订成功后请保留订单编号", "如需更改或取消，请提前通知客服"] },
    { icon: "car", title: "取车流程", items: ["携带证件到指定门店办理手续", "与工作人员共同验车并签署验车单", "确认车辆油量、里程、外观状况", "支付押金后即可取车"] },
    { icon: "fuel", title: "油费说明", items: ["取车时油箱为满油状态", "还车时请保持满油", "油量不足将按市价补足并收取服务费"] },
    { icon: "undo-2", title: "还车流程", items: ["按时将车辆归还至指定门店", "与工作人员共同验车", "结算费用、退还押金", "如有违章将在处理完毕后退还剩余押金"] },
    { icon: "shield-check", title: "保险理赔", items: ["所有车辆均投保交强险和商业险", "发生事故请第一时间拨打救援电话", "保留现场照片和相关证据", "按保险流程进行理赔处理"] }
  ]
};
