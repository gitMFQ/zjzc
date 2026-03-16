const CarRentalData = {
  // 导航菜单
  navItems: [
    { id: 'home', name: '首页' },
    { id: 'vehicles', name: '车型展示' },
    { id: 'packages', name: '服务套餐' },
    { id: 'about', name: '关于我们' },
    { id: 'contact', name: '联系方式' },
    { id: 'help', name: '帮助中心' }
  ],

  // Footer 快速链接
  footerQuickLinks: [
    { page: 'home', name: '首页' },
    { page: 'vehicles', name: '车型展示' },
    { page: 'packages', name: '服务套餐' },
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
    { id: "byd", name: "比亚迪", color: "emerald" },
    { id: "trumpchi", name: "传祺", color: "blue" },
    { id: "jetour", name: "捷途", color: "orange" },
    { id: "denza", name: "腾势", color: "sky" }
  ],

  vehicles: [
    {
      id: 1,
      name: "坦克300 2024挑战者",
      categories: ["tank", "suv", "luxury"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/坦克1.jpg",
      specs: "5座 · 自动挡 · 2.0T · 硬派越野SUV",
      features: ["硬派潮品，燃擎而至", "越野能力强，适合自驾游"]
    },
    {
      id: 2,
      name: "哈弗H6 2023国潮版",
      categories: ["haval", "suv", "economy"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/h6-2023-2.jpg",
      specs: "5座 · 自动挡 · 1.5T",
      features: ["目之所及，心之所动", "国民神车，性价比之选"]
    },
    {
      id: 3,
      name: "丰田威兰达",
      categories: ["toyota", "suv", "comfort"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/威兰达.jpg",
      specs: "5座 · 自动挡 · 2.0L",
      features: ["丰田品质，可靠耐用", "城市SUV首选"]
    },
    {
      id: 4,
      name: "比亚迪宋PLUS DM-i",
      categories: ["byd", "suv", "economy"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/宋plusdmi.jpg",
      specs: "5座 · 自动挡 · 插电混动",
      features: ["新能源首选，超低油耗", "智能科技配置丰富"]
    },
    {
      id: 5,
      name: "本田XR-V",
      categories: ["honda", "suv", "economy"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/xrv.jpg",
      specs: "5座 · 自动挡 · 1.5L",
      features: ["小型SUV，灵活好开", "省油经济，适合市区代步"]
    },
    {
      id: 6,
      name: "别克英朗",
      categories: ["buick", "sedan", "economy"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/英朗.jpg",
      specs: "5座 · 自动挡 · 1.3T",
      features: ["经济实惠，家用首选", "空间舒适，性价比高"]
    },
    {
      id: 7,
      name: "别克GL8",
      categories: ["buick", "mpv", "luxury"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/gl8.jpg",
      specs: "7座 · 自动挡 · 2.0T · 豪华MPV",
      features: ["全场景豪华MPV", "恢弘气场，礼敬非凡", "商务接待首选"]
    },
    {
      id: 8,
      name: "长城风骏5",
      categories: ["greatwall", "pickup", "economy"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/风骏5.jpg",
      specs: "5座 · 手动挡 · 2.4L · 皮卡",
      features: ["皮实耐用，载货能力强", "适合工地、农用等场景"]
    },
    {
      id: 9,
      name: "本田雅阁",
      categories: ["honda", "sedan", "comfort"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/雅阁.jpg",
      specs: "5座 · 自动挡 · 1.5T",
      features: ["商务轿车典范", "操控出色，舒适静音"]
    },
    {
      id: 10,
      name: "哈弗H6 2023豪华版",
      categories: ["haval", "suv", "comfort"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/h6-2023-1.jpg",
      specs: "5座 · 自动挡 · 1.5T",
      features: ["配置丰富，驾乘舒适", "智能科技加持"]
    },
    {
      id: 11,
      name: "丰田卡罗拉锐放",
      categories: ["toyota", "suv", "economy"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/锐放.jpg",
      specs: "5座 · 自动挡 · 2.0L",
      features: ["大气硬朗，动静皆主场", "丰田品质，省心可靠"]
    },
    {
      id: 12,
      name: "丰田皇冠陆放",
      categories: ["toyota", "suv", "luxury"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/陆放.jpg",
      specs: "7座 · 自动挡 · 2.5L双擎 · 混合动力",
      features: ["承经典，铸传奇", "旗舰SUV，豪华舒适"]
    },
    {
      id: 13,
      name: "丰田普拉多",
      categories: ["toyota", "suv", "luxury"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/霸道.jpg",
      specs: "7座 · 自动挡 · 3.5L · 硬派越野",
      features: ["越野王者，可靠性极高", "适合长途穿越"]
    },
    {
      id: 14,
      name: "丰田雷凌",
      categories: ["toyota", "sedan", "economy"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/雷凌.jpg",
      specs: "5座 · 自动挡 · 1.2T",
      features: ["经济省油，家用实惠", "操控灵活，适合城市"]
    },
    {
      id: 15,
      name: "哈弗H6 2019版",
      categories: ["haval", "suv", "economy"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/h6-2019.jpg",
      specs: "5座 · 自动挡 · 1.5T",
      features: ["经典款型，价格实惠", "性价比之选"]
    },
    {
      id: 16,
      name: "丰田RAV4荣放",
      categories: ["toyota", "suv", "comfort"],
      image: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/rav4.jpg",
      specs: "5座 · 自动挡 · 2.0L",
      features: ["城市SUV标杆", "均衡可靠，保值率高"]
    },
    {
      id: 17,
      name: "传祺M8宗师版",
      categories: ["trumpchi", "mpv", "luxury"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop",
      specs: "7座 · 自动挡 · 2.0T · 豪华MPV",
      features: ["东方豪华，礼遇非凡", "商务接待尊贵之选", "静谧舒适，空间宽敞"]
    },
    {
      id: 18,
      name: "比亚迪海豹05",
      categories: ["byd", "sedan", "economy"],
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 插电混动",
      features: ["海洋美学设计", "超低油耗，节能环保", "智能科技，年轻动感"]
    },
    {
      id: 19,
      name: "捷途旅行者",
      categories: ["jetour", "suv", "comfort"],
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 2.0T · 轻越野SUV",
      features: ["旅行+轻越野", "硬朗造型，个性十足", "适合自驾旅行"]
    },
    {
      id: 20,
      name: "哈弗大狗",
      categories: ["haval", "suv", "economy"],
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 1.5T",
      features: ["潮玩越野，城市探索", "个性命名，年轻潮流", "轻度越野能力"]
    },
    {
      id: 21,
      name: "捷途山海T2",
      categories: ["jetour", "suv", "comfort"],
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 插电混动 · 轻越野SUV",
      features: ["旅行越野混动SUV", "新能源+越野双重属性", "适合长途自驾"]
    },
    {
      id: 22,
      name: "腾势D9",
      categories: ["denza", "mpv", "luxury"],
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop",
      specs: "7座 · 自动挡 · 插电混动 · 豪华MPV",
      features: ["新能源豪华MPV", "比亚迪与奔驰联合打造", "商务接待尊贵之选"]
    },
    {
      id: 23,
      name: "比亚迪秦PLUS DM-i",
      categories: ["byd", "sedan", "economy"],
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 插电混动",
      features: ["国民家轿首选", "超低油耗，经济实惠", "DM-i超级混动技术"]
    },
    {
      id: 24,
      name: "比亚迪汉DM",
      categories: ["byd", "sedan", "luxury"],
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 插电混动",
      features: ["旗舰轿车，豪华座驾", "Dragon Face设计语言", "商务出行首选"]
    },
    {
      id: 25,
      name: "比亚迪唐DM-i",
      categories: ["byd", "suv", "luxury"],
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop",
      specs: "7座 · 自动挡 · 插电混动",
      features: ["旗舰SUV，大七座", "家庭出行首选", "豪华舒适，空间宽敞"]
    },
    {
      id: 26,
      name: "比亚迪元PLUS",
      categories: ["byd", "suv", "economy"],
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 纯电动",
      features: ["纯电SUV，城市通勤", "龙颜美学设计", "年轻时尚，经济环保"]
    },
    {
      id: 27,
      name: "比亚迪海豚",
      categories: ["byd", "sedan", "economy"],
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 纯电动",
      features: ["海洋美学设计", "纯电小车，城市代步", "灵活好开，经济实惠"]
    },
    {
      id: 28,
      name: "比亚迪宋Pro DM-i",
      categories: ["byd", "suv", "economy"],
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 插电混动",
      features: ["家用SUV首选", "DM-i超级混动", "空间实用，性价比高"]
    },
    {
      id: 29,
      name: "坦克500",
      categories: ["tank", "suv", "luxury"],
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 3.0T · 硬派越野SUV",
      features: ["商务豪华越野", "V6动力，强劲性能", "高端商务与越野兼顾"]
    },
    {
      id: 30,
      name: "坦克700",
      categories: ["tank", "suv", "luxury"],
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=250&fit=crop",
      specs: "5座 · 自动挡 · 3.0T Hi4-T · 硬派越野SUV",
      features: ["旗舰越野之王", "极致豪华与越野", "新能源混动越野"]
    }
  ],

  hotVehicles: [1, 2, 12],

  faqs: [
    {
      q: "预订需要什么证件？",
      a: "取车时需提供本人有效身份证原件、驾驶证原件（准驾车型与租赁车辆相符）。如有多人轮换驾驶，需同时提供驾驶证并如实填写驾驶人信息。信用卡持有人与承租人非同一人时，持卡人视为担保人，需提供本人身份证原件并签字确认。"
    },
    {
      q: "可以异地还车吗？",
      a: "可以。需提前与客服沟通确认是否可以异地还车（包括同城异地和非同城异地）。异地还车费用根据车型不同，按2.4~3.0元/公里收取。"
    },
    {
      q: "租车需要押金吗？",
      a: "是的。取车前需支付租车押金、违章押金、ETC押金等。租车押金在还车结算后7个工作日内无息退还；违章押金在还车后30日内未发现违章自动解冻；ETC押金在还车后30日内根据实际使用情况结算。如参与芝麻信用等免押金活动且符合条件，可不支付押金。"
    },
    {
      q: "油费怎么算？",
      a: "取车时油箱为满油状态，还车时请保持油箱满油。如油量不足，将按市场油价补足并收取加油服务费。建议还车前提前加满油，避免额外费用。"
    },
    {
      q: "发生事故怎么办？",
      a: "发生事故后请首先保护现场并向甲方通报，在指导下报案：有人伤或不涉及第三者的，直接向保险公司报案；有人伤或涉及第三者的，应首先向公安机关报案，同时向保险公司报案。出险报案时效为自出险之时起24小时内。因未及时报案导致保险公司拒赔的责任由承租人承担。"
    },
    {
      q: "可以取消预订吗？",
      a: "预定车辆需支付定金500~1000元。预定后24小时内取消的，定金原路退还；预定后超过24小时取消的，定金转为违约金不予退还。"
    },
    {
      q: "违章怎么处理？",
      a: "租赁期间发生的交通违法由承租人承担，应在甲方通知之日起7天内处理完毕。如借用行驶证处理违章，需提前预约并支付押金500元/次，借用时间市区1天、郊区3天、市外5天。逾期未处理的，甲方有权代为处理并收取违约金。"
    },
    {
      q: "续租怎么收费？",
      a: "如需续租，应按照标准流程发起续租需求，续租费用按租车时公示的费用为准。延期半小时内免费；延期超过2小时按全天租金30%收取超时费；延期4小时内按50%收取；超过4小时按全天计收。未经同意擅自继续使用车辆的，按续租首日租金的200%按日计算超期违约金。"
    },
    {
      q: "车辆有哪些禁行区域？",
      a: "租赁车辆不得驶出中国大陆，不得驶出国（边）境，不得驶入新疆、西藏、云南、固原、海原、红寺堡区，不得驶入无可行驶公路的沙漠、戈壁、草原、森林、赛道、水渠、沼泽。禁止未经许可擅自驶入保护区、无人区、军事管制区。"
    },
    {
      q: "夜间可以还车吗？",
      a: "营业时间为7:00~21:00。如需在夜间服务时间（21:00~7:00）办理还车，将额外收取夜间服务费100元/次。建议提前联系确认还车时间。"
    }
  ],

  terms: [
    "1. 租赁条件：承租人须是合法且满足要求的机动车驾驶人，准驾类别与租赁车辆相符，保证提供的身份证、驾驶证、联系方式等信息真实有效。如提供虚假证件和信息，须承担相关法律责任。",
    "2. 租赁期限：日租方式按天计费，月租方式按月计费。因承租人原因延长租赁期限的，延期半小时内免费，超过2小时按全天租金30%收取超时费，超过4小时按全天计收。",
    "3. 车辆使用：承租人应妥善保管、使用租赁车辆，不得擅自改装、更换、增设他物或改变车身颜色。不得将车辆用于营利性运营、竞赛、测试、教练等活动，不得转租、转借、抵押、倒卖车辆。",
    "4. 禁行区域：租赁车辆不得驶出中国大陆，不得驶入新疆、西藏、云南、固原、海原、红寺堡区，不得驶入沙漠、戈壁、草原、森林、赛道、水渠、沼泽等无可行驶公路区域。禁止擅自驶入保护区、无人区、军事管制区。",
    "5. 保险说明：车辆已投保交强险、车损险、第三者责任险、车上人员险等。承租人可选择购买基础服务、优享服务或尊享服务，不同服务等级对应不同的车辆损失承担额度和折旧费标准。酒驾、毒驾、无证驾驶等违法行为导致的事故保险拒赔，承租人承担全部责任。",
    "6. 违章处理：租赁期间发生的交通违法由承租人承担，应在甲方通知之日起7天内处理完毕。逾期未处理的，甲方有权代为处理并收取违约金。无扣分违章违约金=罚款额+200元；扣分1-6分的违约金=罚款额+200元/分+100元服务费。",
    "7. 事故处理：发生事故后请在24小时内报案。有人伤或涉及第三者的应先向公安机关报案。因未及时报案导致保险公司拒赔的责任由承租人承担。发生事故需承担保险费上浮损失（每次为全部保费的10%）及维修期间的停驶费。",
    "8. 违约责任：逾期支付租金的，每逾期一日按应交租金的0.3%支付违约金。提前解除合同的，按未履行部分租金的20%支付违约金。擅自抵押、倒卖、转租车辆或用于违法活动的，甲方有权解除合同并要求按车辆购置价20%支付违约金。",
    "9. 免责条款：因不可抗力（如自然灾害、战争、政府行为、疫情等）导致无法履行租赁的，双方互不承担违约责任。如不可抗力超过10天且双方未达成一致解决方案，任何一方有权终止合同。",
    "10. 争议解决：本合同适用中华人民共和国法律。如有争议，双方协商解决；协商不成的，提交甲方所在地人民法院诉讼解决。合同载明的联系方式为法律文书送达地址。"
  ],

  about: {
    title: "关于我们",
    description: "昭佳租车成立于2021年，是一家专业从事汽车租赁服务的现代化企业。公司秉承\"安全、便捷、诚信、创新\"的服务理念，致力于为广大用户提供优质的汽车租赁服务。",
    description2: "经过多年的发展，我们已在多个城市建立服务网点，拥有各类车辆数百辆，包括经济型、舒适型、豪华型、SUV等多种车型，满足不同客户的需求。"
  },

  services: [
    { icon: "key", title: "自驾租车", desc: "银川自驾租车，多种车型多种档次任你挑选", bgImage: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/自驾.png" },
    { icon: "briefcase", title: "公务用车", desc: "银川公务用车，可公对公转账，及时开票", bgImage: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/公务.png" },
    { icon: "map", title: "旅游包车", desc: "宁夏旅游包车，提供中型客车、大型客车带司机服务", bgImage: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/大巴车.png" },
    { icon: "heart", title: "婚庆租车", desc: "银川婚庆租车，各种豪车应有尽有，随您挑选", bgImage: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/婚庆.png" },
    { icon: "mountain", title: "沙漠拓展", desc: "提供五湖穿越、沙漠徒步等项目", bgImage: "https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/沙漠.png" }
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
    { name: "牛昭平", role: "总经理", desc: "15年汽车行业经验，深耕租车服务领域", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=niuzhaoping" },
    { name: "邵佳华", role: "运营总监", desc: "专注客户体验优化，提升服务品质", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=shaojiahua" },
    { name: "马富强", role: "车队经理", desc: "负责车辆维护保养，确保车况优良", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=马富强" },
    { name: "马跃", role: "客户经理", desc: "用心服务每一位客户，解决用车问题", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=mayue" }
  ],

  testimonials: [
    { name: "刘先生", role: "商务人士", content: "公司长期合作，服务专业，车辆状况良好，每次出差都首选昭佳租车。", rating: 5 },
    { name: "张女士", role: "自驾游客", content: "和家人去宁夏旅游租了一辆SUV，车型新、价格合理，客服态度超好！", rating: 5 },
    { name: "王经理", role: "企业客户", content: "公司团建包车服务很满意，司机师傅专业又热情，下次还会选择。", rating: 5 },
    { name: "李小姐", role: "婚庆用车", content: "婚礼当天的婚车安排得非常完美，车队整齐准时，感谢昭佳租车！", rating: 5 }
  ],

  rentalGuide: [
    { icon: "id-card", title: "证件要求", items: ["本人有效身份证原件", "有效驾驶证原件（准驾车型与租赁车辆相符）", "本人名下信用卡或储蓄卡（用于押金预授权）", "如有多人轮换驾驶，需同时提供驾驶证", "信用卡持有人与承租人非同一人时，持卡人视为担保人"] },
    { icon: "calendar", title: "预订须知", items: ["预定车辆需支付定金500~1000元", "预定后24小时内取消的，定金原路退还", "预定后超过24小时取消的，定金不予退还", "如需更改或取消，请提前通知客服"] },
    { icon: "car", title: "取车流程", items: ["携带证件到指定门店办理手续", "与工作人员共同验车并签署《租赁车辆交接单》", "确认车辆油量、里程、外观状况、随车设备及工具", "支付租车押金、违章押金、ETC押金后即可取车"] },
    { icon: "fuel", title: "油费说明", items: ["取车时油箱为满油状态", "还车时请保持满油", "油量不足将按市价补足并收取加油服务费", "建议还车前提前加满油，避免额外费用"] },
    { icon: "undo-2", title: "还车流程", items: ["按时将车辆归还至指定门店（营业时间7:00~21:00）", "与工作人员共同验车并签署还车确认", "结算租金及相关费用", "租车押金在还车后7个工作日内退还", "违章押金在还车后30日内未发现违章自动解冻"] },
    { icon: "shield-check", title: "保险理赔", items: ["车辆已投保交强险、车损险、第三者责任险", "发生事故请在24小时内报案", "有人伤或涉及第三者的，先向公安机关报案", "保留现场照片和相关证据", "因未及时报案导致保险公司拒赔的责任自负"] },
    { icon: "alert-triangle", title: "禁行区域", items: ["不得驶出中国大陆，不得驶出国（边）境", "不得驶入新疆、西藏、云南、固原、海原、红寺堡区", "不得驶入沙漠、戈壁、草原、森林、赛道、水渠、沼泽", "禁止驶入保护区、无人区、军事管制区", "违反禁行规定视为违约，甲方有权收回车辆"] }
  ],

  // 增值服务套餐（合同附件2）
  servicePackages: [
    {
      name: "基础服务",
      price: "30-60元/天",
      desc: "经济实惠，基本保障",
      features: [
        { label: "收费标准", value: "依车型确定：A1/40元，A2/B1/50元，B2/C1/60元" },
        { label: "车辆损失", value: "承租人承担1500元内损失，1500元以上由甲方承担" },
        { label: "折旧费", value: "维修费1500-5000元收10%，5000元以上收20%" },
        { label: "停驶费", value: "维修时间×每日租金（含定损期间）" },
        { label: "第三者损失", value: "甲方承担50万元以内损失" },
        { label: "车辆报废", value: "保险内车损保额与保险赔付差额由承租人承担" }
      ]
    },
    {
      name: "优享服务",
      price: "40-60元/天",
      desc: "全面保障，安心出行",
      features: [
        { label: "收费标准", value: "A1/40元；A2、B1/50元；B2、C1/60元" },
        { label: "车辆损失", value: "甲方承担5000元内损失，承租人承担5000元以上部分" },
        { label: "折旧费", value: "维修费超5000元收20%，超30000元收30%" },
        { label: "停驶费", value: "维修时间×每日租金（含定损期间）" },
        { label: "第三者损失", value: "甲方承担150万元以内损失" },
        { label: "车辆报废", value: "无额外费用" }
      ],
      recommended: true
    },
    {
      name: "尊享服务",
      price: "80-120元/天",
      desc: "尊贵体验，无忧出行",
      features: [
        { label: "收费标准", value: "A1/80元，A2/B1/90元，B2/C1/100元，C2/120元" },
        { label: "车辆损失", value: "甲方承担全部损失" },
        { label: "折旧费", value: "维修费超30000元收20%，超50000元收30%" },
        { label: "停驶费", value: "超过5000元以上部分由甲方承担" },
        { label: "第三者损失", value: "保险额外部分由甲方承担" },
        { label: "车辆报废", value: "无额外费用" }
      ]
    }
  ],

  // 押金说明
  depositInfo: [
    {
      type: "租车押金",
      icon: "car",
      desc: "车辆使用的保证金",
      details: [
        "根据车型不同，金额有所差异",
        "还车结算后7个工作日内无息退还",
        "如发生车损等情形，从押金中扣除相应金额",
        "参与芝麻信用等免押金活动且符合条件可免除"
      ]
    },
    {
      type: "违章押金",
      icon: "alert-circle",
      desc: "交通违法处理的保证金",
      details: [
        "还车后30日内未发现违章自动解冻",
        "如刷取银行卡预授权，解冻时间以银行规定为准",
        "租赁期间发生违章需在7天内处理完毕",
        "逾期未处理，甲方有权代为处理并从押金扣除费用"
      ]
    },
    {
      type: "ETC押金",
      icon: "credit-card",
      desc: "ETC设备使用保证金",
      details: [
        "使用车辆配备的ETC设备时需支付",
        "还车后30日内根据实际使用情况结算",
        "如ETC设备损坏，需承担维修更换费用",
        "不使用ETC设备则无需支付此押金"
      ]
    }
  ],

  // 车辆价格分类
  vehiclePriceClasses: [
    { class: "A1", priceRange: "10万元以内", examples: "经济型轿车、小型车" },
    { class: "A2", priceRange: "10-16万元", examples: "紧凑型轿车、部分SUV" },
    { class: "B1", priceRange: "16-23万元", examples: "中型轿车、主流SUV" },
    { class: "B2", priceRange: "23-30万元", examples: "中高端轿车、豪华SUV入门" },
    { class: "C1", priceRange: "30-35万元", examples: "豪华品牌入门、高端SUV" },
    { class: "C2", priceRange: "35-60万元", examples: "豪华品牌中高端车型" }
  ]
};
