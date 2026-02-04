// userData.js - 用户数据管理系统（完整中国省市版）
const UserSystem = {
    // 用户数据存储
    users: JSON.parse(localStorage.getItem('irrigation_users')) || [],
    currentUser: JSON.parse(localStorage.getItem('irrigation_currentUser')) || null,
    
    // 位置数据
    locations: JSON.parse(localStorage.getItem('irrigation_locations')) || [
        {
            id: '1',
            country: '中国',
            province: '陕西省',
            city: '西安市',
            coordinates: { lat: 34.3416, lng: 108.9398 },
            climateZone: '西北',
            default: true
        }
    ],
    
    // 完整的中国省份数据
    provinces: [
        { code: '11', name: '北京市' },
        { code: '12', name: '天津市' },
        { code: '13', name: '河北省' },
        { code: '14', name: '山西省' },
        { code: '15', name: '内蒙古自治区' },
        { code: '21', name: '辽宁省' },
        { code: '22', name: '吉林省' },
        { code: '23', name: '黑龙江省' },
        { code: '31', name: '上海市' },
        { code: '32', name: '江苏省' },
        { code: '33', name: '浙江省' },
        { code: '34', name: '安徽省' },
        { code: '35', name: '福建省' },
        { code: '36', name: '江西省' },
        { code: '37', name: '山东省' },
        { code: '41', name: '河南省' },
        { code: '42', name: '湖北省' },
        { code: '43', name: '湖南省' },
        { code: '44', name: '广东省' },
        { code: '45', name: '广西壮族自治区' },
        { code: '46', name: '海南省' },
        { code: '50', name: '重庆市' },
        { code: '51', name: '四川省' },
        { code: '52', name: '贵州省' },
        { code: '53', name: '云南省' },
        { code: '54', name: '西藏自治区' },
        { code: '61', name: '陕西省' },
        { code: '62', name: '甘肃省' },
        { code: '63', name: '青海省' },
        { code: '64', name: '宁夏回族自治区' },
        { code: '65', name: '新疆维吾尔自治区' },
        { code: '71', name: '台湾省' },
        { code: '81', name: '香港特别行政区' },
        { code: '82', name: '澳门特别行政区' }
    ],
    
    // 完整的中国城市数据（按省份分组）
    cities: {
        // 北京市
        '11': [
            { code: '1101', name: '北京市' }
        ],
        
        // 天津市
        '12': [
            { code: '1201', name: '天津市' }
        ],
        
        // 河北省
        '13': [
            { code: '1301', name: '石家庄市' },
            { code: '1302', name: '唐山市' },
            { code: '1303', name: '秦皇岛市' },
            { code: '1304', name: '邯郸市' },
            { code: '1305', name: '邢台市' },
            { code: '1306', name: '保定市' },
            { code: '1307', name: '张家口市' },
            { code: '1308', name: '承德市' },
            { code: '1309', name: '沧州市' },
            { code: '1310', name: '廊坊市' },
            { code: '1311', name: '衡水市' }
        ],
        
        // 山西省
        '14': [
            { code: '1401', name: '太原市' },
            { code: '1402', name: '大同市' },
            { code: '1403', name: '阳泉市' },
            { code: '1404', name: '长治市' },
            { code: '1405', name: '晋城市' },
            { code: '1406', name: '朔州市' },
            { code: '1407', name: '晋中市' },
            { code: '1408', name: '运城市' },
            { code: '1409', name: '忻州市' },
            { code: '1410', name: '临汾市' },
            { code: '1411', name: '吕梁市' }
        ],
        
        // 内蒙古自治区
        '15': [
            { code: '1501', name: '呼和浩特市' },
            { code: '1502', name: '包头市' },
            { code: '1503', name: '乌海市' },
            { code: '1504', name: '赤峰市' },
            { code: '1505', name: '通辽市' },
            { code: '1506', name: '鄂尔多斯市' },
            { code: '1507', name: '呼伦贝尔市' },
            { code: '1508', name: '巴彦淖尔市' },
            { code: '1509', name: '乌兰察布市' },
            { code: '1522', name: '兴安盟' },
            { code: '1525', name: '锡林郭勒盟' },
            { code: '1529', name: '阿拉善盟' }
        ],
        
        // 辽宁省
        '21': [
            { code: '2101', name: '沈阳市' },
            { code: '2102', name: '大连市' },
            { code: '2103', name: '鞍山市' },
            { code: '2104', name: '抚顺市' },
            { code: '2105', name: '本溪市' },
            { code: '2106', name: '丹东市' },
            { code: '2107', name: '锦州市' },
            { code: '2108', name: '营口市' },
            { code: '2109', name: '阜新市' },
            { code: '2110', name: '辽阳市' },
            { code: '2111', name: '盘锦市' },
            { code: '2112', name: '铁岭市' },
            { code: '2113', name: '朝阳市' },
            { code: '2114', name: '葫芦岛市' }
        ],
        
        // 吉林省
        '22': [
            { code: '2201', name: '长春市' },
            { code: '2202', name: '吉林市' },
            { code: '2203', name: '四平市' },
            { code: '2204', name: '辽源市' },
            { code: '2205', name: '通化市' },
            { code: '2206', name: '白山市' },
            { code: '2207', name: '松原市' },
            { code: '2208', name: '白城市' },
            { code: '2224', name: '延边朝鲜族自治州' }
        ],
        
        // 黑龙江省
        '23': [
            { code: '2301', name: '哈尔滨市' },
            { code: '2302', name: '齐齐哈尔市' },
            { code: '2303', name: '鸡西市' },
            { code: '2304', name: '鹤岗市' },
            { code: '2305', name: '双鸭山市' },
            { code: '2306', name: '大庆市' },
            { code: '2307', name: '伊春市' },
            { code: '2308', name: '佳木斯市' },
            { code: '2309', name: '七台河市' },
            { code: '2310', name: '牡丹江市' },
            { code: '2311', name: '黑河市' },
            { code: '2312', name: '绥化市' },
            { code: '2327', name: '大兴安岭地区' }
        ],
        
        // 上海市
        '31': [
            { code: '3101', name: '上海市' }
        ],
        
        // 江苏省
        '32': [
            { code: '3201', name: '南京市' },
            { code: '3202', name: '无锡市' },
            { code: '3203', name: '徐州市' },
            { code: '3204', name: '常州市' },
            { code: '3205', name: '苏州市' },
            { code: '3206', name: '南通市' },
            { code: '3207', name: '连云港市' },
            { code: '3208', name: '淮安市' },
            { code: '3209', name: '盐城市' },
            { code: '3210', name: '扬州市' },
            { code: '3211', name: '镇江市' },
            { code: '3212', name: '泰州市' },
            { code: '3213', name: '宿迁市' }
        ],
        
        // 浙江省
        '33': [
            { code: '3301', name: '杭州市' },
            { code: '3302', name: '宁波市' },
            { code: '3303', name: '温州市' },
            { code: '3304', name: '嘉兴市' },
            { code: '3305', name: '湖州市' },
            { code: '3306', name: '绍兴市' },
            { code: '3307', name: '金华市' },
            { code: '3308', name: '衢州市' },
            { code: '3309', name: '舟山市' },
            { code: '3310', name: '台州市' },
            { code: '3311', name: '丽水市' }
        ],
        
        // 安徽省
        '34': [
            { code: '3401', name: '合肥市' },
            { code: '3402', name: '芜湖市' },
            { code: '3403', name: '蚌埠市' },
            { code: '3404', name: '淮南市' },
            { code: '3405', name: '马鞍山市' },
            { code: '3406', name: '淮北市' },
            { code: '3407', name: '铜陵市' },
            { code: '3408', name: '安庆市' },
            { code: '3410', name: '黄山市' },
            { code: '3411', name: '滁州市' },
            { code: '3412', name: '阜阳市' },
            { code: '3413', name: '宿州市' },
            { code: '3415', name: '六安市' },
            { code: '3416', name: '亳州市' },
            { code: '3417', name: '池州市' },
            { code: '3418', name: '宣城市' }
        ],
        
        // 福建省
        '35': [
            { code: '3501', name: '福州市' },
            { code: '3502', name: '厦门市' },
            { code: '3503', name: '莆田市' },
            { code: '3504', name: '三明市' },
            { code: '3505', name: '泉州市' },
            { code: '3506', name: '漳州市' },
            { code: '3507', name: '南平市' },
            { code: '3508', name: '龙岩市' },
            { code: '3509', name: '宁德市' }
        ],
        
        // 江西省
        '36': [
            { code: '3601', name: '南昌市' },
            { code: '3602', name: '景德镇市' },
            { code: '3603', name: '萍乡市' },
            { code: '3604', name: '九江市' },
            { code: '3605', name: '新余市' },
            { code: '3606', name: '鹰潭市' },
            { code: '3607', name: '赣州市' },
            { code: '3608', name: '吉安市' },
            { code: '3609', name: '宜春市' },
            { code: '3610', name: '抚州市' },
            { code: '3611', name: '上饶市' }
        ],
        
        // 山东省
        '37': [
            { code: '3701', name: '济南市' },
            { code: '3702', name: '青岛市' },
            { code: '3703', name: '淄博市' },
            { code: '3704', name: '枣庄市' },
            { code: '3705', name: '东营市' },
            { code: '3706', name: '烟台市' },
            { code: '3707', name: '潍坊市' },
            { code: '3708', name: '济宁市' },
            { code: '3709', name: '泰安市' },
            { code: '3710', name: '威海市' },
            { code: '3711', name: '日照市' },
            { code: '3713', name: '临沂市' },
            { code: '3714', name: '德州市' },
            { code: '3715', name: '聊城市' },
            { code: '3716', name: '滨州市' },
            { code: '3717', name: '菏泽市' }
        ],
        
        // 河南省
        '41': [
            { code: '4101', name: '郑州市' },
            { code: '4102', name: '开封市' },
            { code: '4103', name: '洛阳市' },
            { code: '4104', name: '平顶山市' },
            { code: '4105', name: '安阳市' },
            { code: '4106', name: '鹤壁市' },
            { code: '4107', name: '新乡市' },
            { code: '4108', name: '焦作市' },
            { code: '4109', name: '濮阳市' },
            { code: '4110', name: '许昌市' },
            { code: '4111', name: '漯河市' },
            { code: '4112', name: '三门峡市' },
            { code: '4113', name: '南阳市' },
            { code: '4114', name: '商丘市' },
            { code: '4115', name: '信阳市' },
            { code: '4116', name: '周口市' },
            { code: '4117', name: '驻马店市' },
            { code: '4190', name: '省直辖县级行政区划' }
        ],
        
        // 湖北省
        '42': [
            { code: '4201', name: '武汉市' },
            { code: '4202', name: '黄石市' },
            { code: '4203', name: '十堰市' },
            { code: '4205', name: '宜昌市' },
            { code: '4206', name: '襄阳市' },
            { code: '4207', name: '鄂州市' },
            { code: '4208', name: '荆门市' },
            { code: '4209', name: '孝感市' },
            { code: '4210', name: '荆州市' },
            { code: '4211', name: '黄冈市' },
            { code: '4212', name: '咸宁市' },
            { code: '4213', name: '随州市' },
            { code: '4228', name: '恩施土家族苗族自治州' },
            { code: '4290', name: '省直辖县级行政区划' }
        ],
        
        // 湖南省
        '43': [
            { code: '4301', name: '长沙市' },
            { code: '4302', name: '株洲市' },
            { code: '4303', name: '湘潭市' },
            { code: '4304', name: '衡阳市' },
            { code: '4305', name: '邵阳市' },
            { code: '4306', name: '岳阳市' },
            { code: '4307', name: '常德市' },
            { code: '4308', name: '张家界市' },
            { code: '4309', name: '益阳市' },
            { code: '4310', name: '郴州市' },
            { code: '4311', name: '永州市' },
            { code: '4312', name: '怀化市' },
            { code: '4313', name: '娄底市' },
            { code: '4331', name: '湘西土家族苗族自治州' }
        ],
        
        // 广东省
        '44': [
            { code: '4401', name: '广州市' },
            { code: '4402', name: '韶关市' },
            { code: '4403', name: '深圳市' },
            { code: '4404', name: '珠海市' },
            { code: '4405', name: '汕头市' },
            { code: '4406', name: '佛山市' },
            { code: '4407', name: '江门市' },
            { code: '4408', name: '湛江市' },
            { code: '4409', name: '茂名市' },
            { code: '4412', name: '肇庆市' },
            { code: '4413', name: '惠州市' },
            { code: '4414', name: '梅州市' },
            { code: '4415', name: '汕尾市' },
            { code: '4416', name: '河源市' },
            { code: '4417', name: '阳江市' },
            { code: '4418', name: '清远市' },
            { code: '4419', name: '东莞市' },
            { code: '4420', name: '中山市' },
            { code: '4451', name: '潮州市' },
            { code: '4452', name: '揭阳市' },
            { code: '4453', name: '云浮市' }
        ],
        
        // 广西壮族自治区
        '45': [
            { code: '4501', name: '南宁市' },
            { code: '4502', name: '柳州市' },
            { code: '4503', name: '桂林市' },
            { code: '4504', name: '梧州市' },
            { code: '4505', name: '北海市' },
            { code: '4506', name: '防城港市' },
            { code: '4507', name: '钦州市' },
            { code: '4508', name: '贵港市' },
            { code: '4509', name: '玉林市' },
            { code: '4510', name: '百色市' },
            { code: '4511', name: '贺州市' },
            { code: '4512', name: '河池市' },
            { code: '4513', name: '来宾市' },
            { code: '4514', name: '崇左市' }
        ],
        
        // 海南省
        '46': [
            { code: '4601', name: '海口市' },
            { code: '4602', name: '三亚市' },
            { code: '4603', name: '三沙市' },
            { code: '4604', name: '儋州市' },
            { code: '4690', name: '省直辖县级行政区划' }
        ],
        
        // 重庆市
        '50': [
            { code: '5001', name: '重庆市' }
        ],
        
        // 四川省
        '51': [
            { code: '5101', name: '成都市' },
            { code: '5103', name: '自贡市' },
            { code: '5104', name: '攀枝花市' },
            { code: '5105', name: '泸州市' },
            { code: '5106', name: '德阳市' },
            { code: '5107', name: '绵阳市' },
            { code: '5108', name: '广元市' },
            { code: '5109', name: '遂宁市' },
            { code: '5110', name: '内江市' },
            { code: '5111', name: '乐山市' },
            { code: '5113', name: '南充市' },
            { code: '5114', name: '眉山市' },
            { code: '5115', name: '宜宾市' },
            { code: '5116', name: '广安市' },
            { code: '5117', name: '达州市' },
            { code: '5118', name: '雅安市' },
            { code: '5119', name: '巴中市' },
            { code: '5120', name: '资阳市' },
            { code: '5132', name: '阿坝藏族羌族自治州' },
            { code: '5133', name: '甘孜藏族自治州' },
            { code: '5134', name: '凉山彝族自治州' }
        ],
        
        // 贵州省
        '52': [
            { code: '5201', name: '贵阳市' },
            { code: '5202', name: '六盘水市' },
            { code: '5203', name: '遵义市' },
            { code: '5204', name: '安顺市' },
            { code: '5205', name: '毕节市' },
            { code: '5206', name: '铜仁市' },
            { code: '5223', name: '黔西南布依族苗族自治州' },
            { code: '5226', name: '黔东南苗族侗族自治州' },
            { code: '5227', name: '黔南布依族苗族自治州' }
        ],
        
        // 云南省
        '53': [
            { code: '5301', name: '昆明市' },
            { code: '5302', name: '曲靖市' },
            { code: '5303', name: '玉溪市' },
            { code: '5304', name: '保山市' },
            { code: '5305', name: '昭通市' },
            { code: '5306', name: '丽江市' },
            { code: '5307', name: '普洱市' },
            { code: '5308', name: '临沧市' },
            { code: '5323', name: '楚雄彝族自治州' },
            { code: '5325', name: '红河哈尼族彝族自治州' },
            { code: '5326', name: '文山壮族苗族自治州' },
            { code: '5328', name: '西双版纳傣族自治州' },
            { code: '5329', name: '大理白族自治州' },
            { code: '5331', name: '德宏傣族景颇族自治州' },
            { code: '5333', name: '怒江傈僳族自治州' },
            { code: '5334', name: '迪庆藏族自治州' }
        ],
        
        // 西藏自治区
        '54': [
            { code: '5401', name: '拉萨市' },
            { code: '5402', name: '日喀则市' },
            { code: '5403', name: '昌都市' },
            { code: '5404', name: '林芝市' },
            { code: '5405', name: '山南市' },
            { code: '5406', name: '那曲市' },
            { code: '5425', name: '阿里地区' }
        ],
        
        // 陕西省
        '61': [
            { code: '6101', name: '西安市' },
            { code: '6102', name: '铜川市' },
            { code: '6103', name: '宝鸡市' },
            { code: '6104', name: '咸阳市' },
            { code: '6105', name: '渭南市' },
            { code: '6106', name: '延安市' },
            { code: '6107', name: '汉中市' },
            { code: '6108', name: '榆林市' },
            { code: '6109', name: '安康市' },
            { code: '6110', name: '商洛市' }
        ],
        
        // 甘肃省
        '62': [
            { code: '6201', name: '兰州市' },
            { code: '6202', name: '嘉峪关市' },
            { code: '6203', name: '金昌市' },
            { code: '6204', name: '白银市' },
            { code: '6205', name: '天水市' },
            { code: '6206', name: '武威市' },
            { code: '6207', name: '张掖市' },
            { code: '6208', name: '平凉市' },
            { code: '6209', name: '酒泉市' },
            { code: '6210', name: '庆阳市' },
            { code: '6211', name: '定西市' },
            { code: '6212', name: '陇南市' },
            { code: '6229', name: '临夏回族自治州' },
            { code: '6230', name: '甘南藏族自治州' }
        ],
        
        // 青海省
        '63': [
            { code: '6301', name: '西宁市' },
            { code: '6302', name: '海东市' },
            { code: '6322', name: '海北藏族自治州' },
            { code: '6323', name: '黄南藏族自治州' },
            { code: '6325', name: '海南藏族自治州' },
            { code: '6326', name: '果洛藏族自治州' },
            { code: '6327', name: '玉树藏族自治州' },
            { code: '6328', name: '海西蒙古族藏族自治州' }
        ],
        
        // 宁夏回族自治区
        '64': [
            { code: '6401', name: '银川市' },
            { code: '6402', name: '石嘴山市' },
            { code: '6403', name: '吴忠市' },
            { code: '6404', name: '固原市' },
            { code: '6405', name: '中卫市' }
        ],
        
        // 新疆维吾尔自治区
        '65': [
            { code: '6501', name: '乌鲁木齐市' },
            { code: '6502', name: '克拉玛依市' },
            { code: '6504', name: '吐鲁番市' },
            { code: '6505', name: '哈密市' },
            { code: '6523', name: '昌吉回族自治州' },
            { code: '6527', name: '博尔塔拉蒙古自治州' },
            { code: '6528', name: '巴音郭楞蒙古自治州' },
            { code: '6529', name: '阿克苏地区' },
            { code: '6530', name: '克孜勒苏柯尔克孜自治州' },
            { code: '6531', name: '喀什地区' },
            { code: '6532', name: '和田地区' },
            { code: '6540', name: '伊犁哈萨克自治州' },
            { code: '6542', name: '塔城地区' },
            { code: '6543', name: '阿勒泰地区' },
            { code: '6590', name: '自治区直辖县级行政区划' }
        ],
        
        // 台湾省（仅包含主要城市）
        '71': [
            { code: '7101', name: '台北市' },
            { code: '7102', name: '高雄市' },
            { code: '7103', name: '台南市' },
            { code: '7104', name: '台中市' },
            { code: '7105', name: '新竹市' },
            { code: '7106', name: '嘉义市' },
            { code: '7107', name: '基隆市' }
        ],
        
        // 香港特别行政区
        '81': [
            { code: '8101', name: '香港岛' },
            { code: '8102', name: '九龙' },
            { code: '8103', name: '新界' }
        ],
        
        // 澳门特别行政区
        '82': [
            { code: '8201', name: '澳门半岛' },
            { code: '8202', name: '氹仔岛' },
            { code: '8203', name: '路环岛' },
            { code: '8204', name: '路氹城' }
        ]
    },
    
    // 气候区域数据（更详细）
    climateZones: {
        '西北': {
            name: '西北干旱半干旱区',
            description: '气候干燥，降雨稀少，昼夜温差大，日照充足',
            temperature: { min: -10, max: 35, avg: 15 },
            rainfall: { annual: 50, summer: 20, winter: 5 },
            humidity: { avg: 40 },
            irrigationMultiplier: 1.3,
            features: ['干旱少雨', '温差大', '日照充足', '蒸发强烈'],
            suitableCrops: ['小麦', '玉米', '棉花', '葡萄', '枸杞'],
            cities: ['西安市', '兰州市', '西宁市', '银川市', '乌鲁木齐市', '宝鸡市', '咸阳市', '天水市']
        },
        '华北': {
            name: '华北温带季风区',
            description: '四季分明，春季干燥多风，夏季炎热多雨',
            temperature: { min: -5, max: 32, avg: 18 },
            rainfall: { annual: 400, summer: 250, winter: 20 },
            humidity: { avg: 55 },
            irrigationMultiplier: 1.1,
            features: ['四季分明', '春季干燥', '夏季多雨', '冬季寒冷'],
            suitableCrops: ['小麦', '玉米', '大豆', '棉花', '苹果'],
            cities: ['北京市', '天津市', '石家庄市', '太原市', '济南市', '郑州市', '青岛市', '大连市']
        },
        '华东': {
            name: '华东亚热带季风区',
            description: '气候湿润，雨量充沛，梅雨季节明显',
            temperature: { min: 0, max: 35, avg: 22 },
            rainfall: { annual: 800, summer: 450, winter: 100 },
            humidity: { avg: 70 },
            irrigationMultiplier: 0.9,
            features: ['湿润多雨', '梅雨季节', '冬季温和', '夏季炎热'],
            suitableCrops: ['水稻', '茶叶', '油菜', '柑橘', '蚕桑'],
            cities: ['上海市', '南京市', '杭州市', '合肥市', '福州市', '南昌市', '宁波市', '苏州市']
        },
        '华南': {
            name: '华南热带亚热带区',
            description: '高温多雨，雨季长，台风影响频繁',
            temperature: { min: 10, max: 38, avg: 25 },
            rainfall: { annual: 1200, summer: 700, winter: 150 },
            humidity: { avg: 75 },
            irrigationMultiplier: 0.8,
            features: ['高温多雨', '雨季长', '台风影响', '无冬季'],
            suitableCrops: ['水稻', '甘蔗', '橡胶', '香蕉', '荔枝'],
            cities: ['广州市', '深圳市', '海口市', '南宁市', '香港', '厦门市', '珠海市', '三亚市']
        },
        '西南': {
            name: '西南高原山地区',
            description: '立体气候明显，昼夜温差大，日照适中',
            temperature: { min: 5, max: 30, avg: 18 },
            rainfall: { annual: 600, summer: 400, winter: 50 },
            humidity: { avg: 65 },
            irrigationMultiplier: 1.0,
            features: ['立体气候', '昼夜温差', '日照适中', '多云雾'],
            suitableCrops: ['茶叶', '烟草', '咖啡', '中药材', '水果'],
            cities: ['成都市', '昆明市', '贵阳市', '拉萨市', '重庆市', '大理市', '丽江市', '林芝市']
        },
        '东北': {
            name: '东北寒温带区',
            description: '冬季漫长寒冷，夏季短暂凉爽，积雪期长',
            temperature: { min: -20, max: 28, avg: 10 },
            rainfall: { annual: 500, summer: 350, winter: 30 },
            humidity: { avg: 65 },
            irrigationMultiplier: 1.2,
            features: ['冬季寒冷', '夏季凉爽', '积雪期长', '春秋短暂'],
            suitableCrops: ['大豆', '玉米', '水稻', '甜菜', '人参'],
            cities: ['哈尔滨市', '长春市', '沈阳市', '大连市', '吉林市', '齐齐哈尔市', '牡丹江市']
        }
    },
    
    // 用户相关方法（保持不变）
        updateUserPreferences(userId, preferences) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            user.preferences = { ...user.preferences, ...preferences };
            if (this.currentUser && this.currentUser.id === userId) {
                this.currentUser.preferences = user.preferences;
                this.saveCurrentUser();
            }
            this.saveUsers();
            return true;
        }
        return false;
    },
    
    updateUserInfo(userId, userInfo) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            // 不允许修改邮箱（邮箱作为唯一标识）
            if (userInfo.email && userInfo.email !== user.email) {
                const existingEmail = this.users.find(u => u.email === userInfo.email && u.id !== userId);
                if (existingEmail) {
                    return { success: false, message: '该邮箱已被其他用户使用' };
                }
            }
            
            // 更新用户信息
            const updatedUser = { ...user, ...userInfo };
            
            if (userInfo.password) {
                updatedUser.password = userInfo.password;
            }
            
            // 更新数组中对应的用户
            const index = this.users.findIndex(u => u.id === userId);
            if (index !== -1) {
                this.users[index] = updatedUser;
                
                // 如果当前登录的是这个用户，也更新currentUser
                if (this.currentUser && this.currentUser.id === userId) {
                    this.currentUser = updatedUser;
                    this.saveCurrentUser();
                }
                
                this.saveUsers();
                return { success: true, user: updatedUser };
            }
        }
        return { success: false, message: '用户不存在' };
    },
    
    addLocation(locationData) {
        const newLocation = {
            id: 'loc_' + Date.now(),
            ...locationData,
            isDefault: this.locations.length === 0, // 如果是第一个位置，设为默认
            createdAt: new Date().toISOString()
        };
        
        this.locations.push(newLocation);
        this.saveLocations();
        return newLocation;
    },
    
    removeLocation(locationId) {
        const locationIndex = this.locations.findIndex(loc => loc.id === locationId);
        if (locationIndex === -1) return false;
        
        const isDefault = this.locations[locationIndex].isDefault;
        this.locations.splice(locationIndex, 1);
        
        // 如果删除的是默认位置，设置第一个位置为默认
        if (isDefault && this.locations.length > 0) {
            this.locations[0].isDefault = true;
        }
        
        this.saveLocations();
        return true;
    },
    
    setDefaultLocation(locationId) {
        let found = false;
        
        this.locations.forEach(loc => {
            if (loc.id === locationId) {
                loc.isDefault = true;
                found = true;
            } else {
                loc.isDefault = false;
            }
        });
        
        if (found) {
            this.saveLocations();
            
            // 如果用户已登录，更新用户的默认位置
            if (this.currentUser) {
                const location = this.locations.find(loc => loc.id === locationId);
                if (location) {
                    this.currentUser.defaultLocation = location;
                    this.saveCurrentUser();
                }
            }
            return true;
        }
        return false;
    },
    
    // 位置搜索功能
    searchLocations(keyword) {
        keyword = keyword.toLowerCase();
        return this.locations.filter(loc => 
            loc.city.toLowerCase().includes(keyword) || 
            loc.province.toLowerCase().includes(keyword)
        );
    },
    
    // 获取用户的所有农田（如果有多块农田）
    getUserFarms(userId) {
        const user = this.users.find(u => u.id === userId);
        return user?.farms || [];
    },
    
    addUserFarm(userId, farmData) {
        const user = this.users.find(u => u.id === userId);
        if (!user) return { success: false, message: '用户不存在' };
        
        const newFarm = {
            id: 'farm_' + Date.now(),
            ...farmData,
            createdAt: new Date().toISOString(),
            devices: [], // 设备列表
            crops: []    // 种植作物列表
        };
        
        if (!user.farms) {
            user.farms = [];
        }
        
        user.farms.push(newFarm);
        this.saveUsers();
        
        // 如果当前用户，更新currentUser
        if (this.currentUser && this.currentUser.id === userId) {
            this.currentUser.farms = user.farms;
            this.saveCurrentUser();
        }
        
        return { success: true, farm: newFarm };
    },
    
    updateUserFarm(userId, farmId, farmData) {
        const user = this.users.find(u => u.id === userId);
        if (!user || !user.farms) return { success: false, message: '农田不存在' };
        
        const farmIndex = user.farms.findIndex(farm => farm.id === farmId);
        if (farmIndex === -1) return { success: false, message: '农田不存在' };
        
        user.farms[farmIndex] = { ...user.farms[farmIndex], ...farmData };
        this.saveUsers();
        
        if (this.currentUser && this.currentUser.id === userId) {
            this.currentUser.farms = user.farms;
            this.saveCurrentUser();
        }
        
        return { success: true, farm: user.farms[farmIndex] };
    },
    
    removeUserFarm(userId, farmId) {
        const user = this.users.find(u => u.id === userId);
        if (!user || !user.farms) return false;
        
        const farmIndex = user.farms.findIndex(farm => farm.id === farmId);
        if (farmIndex === -1) return false;
        
        user.farms.splice(farmIndex, 1);
        this.saveUsers();
        
        if (this.currentUser && this.currentUser.id === userId) {
            this.currentUser.farms = user.farms;
            this.saveCurrentUser();
        }
        
        return true;
    },
    
    // 设备管理
    addDeviceToFarm(userId, farmId, deviceData) {
        const user = this.users.find(u => u.id === userId);
        if (!user || !user.farms) return { success: false, message: '农田不存在' };
        
        const farm = user.farms.find(f => f.id === farmId);
        if (!farm) return { success: false, message: '农田不存在' };
        
        const newDevice = {
            id: 'device_' + Date.now(),
            ...deviceData,
            status: 'online',
            lastUpdate: new Date().toISOString(),
            readings: [] // 设备读数历史
        };
        
        if (!farm.devices) {
            farm.devices = [];
        }
        
        farm.devices.push(newDevice);
        this.saveUsers();
        
        if (this.currentUser && this.currentUser.id === userId) {
            this.currentUser.farms = user.farms;
            this.saveCurrentUser();
        }
        
        return { success: true, device: newDevice };
    },
    
    updateDeviceReading(userId, farmId, deviceId, readingData) {
        const user = this.users.find(u => u.id === userId);
        if (!user || !user.farms) return { success: false, message: '设备不存在' };
        
        const farm = user.farms.find(f => f.id === farmId);
        if (!farm || !farm.devices) return { success: false, message: '设备不存在' };
        
        const device = farm.devices.find(d => d.id === deviceId);
        if (!device) return { success: false, message: '设备不存在' };
        
        // 更新设备读数
        const newReading = {
            ...readingData,
            timestamp: new Date().toISOString()
        };
        
        device.readings.push(newReading);
        device.lastUpdate = newReading.timestamp;
        
        // 只保留最近1000条记录
        if (device.readings.length > 1000) {
            device.readings = device.readings.slice(-1000);
        }
        
        this.saveUsers();
        
        if (this.currentUser && this.currentUser.id === userId) {
            this.currentUser.farms = user.farms;
            this.saveCurrentUser();
        }
        
        return { success: true, reading: newReading };
    },
    
    // 作物种植管理
    addCropToFarm(userId, farmId, cropData) {
        const user = this.users.find(u => u.id === userId);
        if (!user || !user.farms) return { success: false, message: '农田不存在' };
        
        const farm = user.farms.find(f => f.id === farmId);
        if (!farm) return { success: false, message: '农田不存在' };
        
        const newCrop = {
            id: 'crop_' + Date.now(),
            ...cropData,
            plantedDate: new Date().toISOString(),
            growthStage: 'seedling', // 初始为幼苗期
            health: 'healthy',
            irrigationHistory: []
        };
        
        if (!farm.crops) {
            farm.crops = [];
        }
        
        farm.crops.push(newCrop);
        this.saveUsers();
        
        if (this.currentUser && this.currentUser.id === userId) {
            this.currentUser.farms = user.farms;
            this.saveCurrentUser();
        }
        
        return { success: true, crop: newCrop };
    },
    
    updateCropGrowth(userId, farmId, cropId, growthData) {
        const user = this.users.find(u => u.id === userId);
        if (!user || !user.farms) return { success: false, message: '作物不存在' };
        
        const farm = user.farms.find(f => f.id === farmId);
        if (!farm || !farm.crops) return { success: false, message: '作物不存在' };
        
        const crop = farm.crops.find(c => c.id === cropId);
        if (!crop) return { success: false, message: '作物不存在' };
        
        Object.assign(crop, growthData);
        crop.lastUpdate = new Date().toISOString();
        
        this.saveUsers();
        
        if (this.currentUser && this.currentUser.id === userId) {
            this.currentUser.farms = user.farms;
            this.saveCurrentUser();
        }
        
        return { success: true, crop };
    },
    
    // 灌溉记录管理
    addIrrigationRecord(userId, farmId, recordData) {
        const user = this.users.find(u => u.id === userId);
        if (!user || !user.farms) return { success: false, message: '农田不存在' };
        
        const farm = user.farms.find(f => f.id === farmId);
        if (!farm) return { success: false, message: '农田不存在' };
        
        const newRecord = {
            id: 'irrigation_' + Date.now(),
            ...recordData,
            timestamp: new Date().toISOString(),
            status: 'completed'
        };
        
        if (!farm.irrigationHistory) {
            farm.irrigationHistory = [];
        }
        
        farm.irrigationHistory.push(newRecord);
        
        // 如果是针对特定作物的灌溉，也记录到作物历史中
        if (recordData.cropId && farm.crops) {
            const crop = farm.crops.find(c => c.id === recordData.cropId);
            if (crop) {
                if (!crop.irrigationHistory) {
                    crop.irrigationHistory = [];
                }
                crop.irrigationHistory.push(newRecord);
            }
        }
        
        this.saveUsers();
        
        if (this.currentUser && this.currentUser.id === userId) {
            this.currentUser.farms = user.farms;
            this.saveCurrentUser();
        }
        
        return { success: true, record: newRecord };
    },
    
    // 天气预报和气候数据
    getWeatherForecast(location, days = 7) {
        // 模拟天气数据 - 实际项目中应该调用天气API
        const forecasts = [];
        const today = new Date();
        
        // 根据地区获取基础气候数据
        const climate = this.getClimateByCity(location.city);
        
        for (let i = 0; i < days; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() + i);
            
            // 模拟温度变化
            const baseTemp = 20 + (Math.sin(i * 0.5) * 5); // 正弦波模拟温度变化
            const temp = baseTemp + (Math.random() * 4 - 2); // 添加随机波动
            
            // 模拟降雨概率
            let rainProb = 0;
            if (climate.zone === '华南' || climate.zone === '华东') {
                rainProb = 0.3 + (Math.random() * 0.3); // 湿润地区降雨概率高
            } else if (climate.zone === '西北') {
                rainProb = 0.05 + (Math.random() * 0.1); // 干旱地区降雨概率低
            } else {
                rainProb = 0.1 + (Math.random() * 0.2);
            }
            
            forecasts.push({
                date: date.toISOString().split('T')[0],
                temperature: Math.round(temp * 10) / 10,
                humidity: Math.round((50 + Math.random() * 30) * 10) / 10,
                rainfall: Math.round((rainProb > 0.5 ? Math.random() * 10 : 0) * 10) / 10,
                windSpeed: Math.round((2 + Math.random() * 4) * 10) / 10,
                weather: rainProb > 0.7 ? 'rain' : rainProb > 0.4 ? 'cloudy' : 'sunny'
            });
        }
        
        return forecasts;
    },
    
    // AI灌溉建议
    getIrrigationRecommendation(userId, farmId, cropId) {
        const user = this.users.find(u => u.id === userId);
        if (!user || !user.farms) return null;
        
        const farm = user.farms.find(f => f.id === farmId);
        if (!farm) return null;
        
        const crop = farm.crops.find(c => c.id === cropId);
        if (!crop) return null;
        
        // 获取当前天气
        const forecast = this.getWeatherForecast(farm.location || user.defaultLocation, 3)[0];
        
        // 获取设备最新数据
        let soilMoisture = 60; // 默认值
        if (farm.devices && farm.devices.length > 0) {
            const moistureSensors = farm.devices.filter(d => d.type === 'moisture');
            if (moistureSensors.length > 0) {
                const latestReading = moistureSensors[0].readings[moistureSensors[0].readings.length - 1];
                soilMoisture = latestReading?.value || 60;
            }
        }
        
        // 根据作物类型、生长阶段、土壤湿度、天气等因素生成建议
        const recommendations = [];
        
        // 1. 土壤湿度建议
        const cropTypes = {
            wheat: { optimal: 65, min: 60, max: 75 },
            rice: { optimal: 80, min: 75, max: 85 },
            corn: { optimal: 75, min: 70, max: 80 },
            vegetable: { optimal: 70, min: 65, max: 75 },
            fruit: { optimal: 68, min: 65, max: 72 }
        };
        
        const cropType = crop.cropType || 'wheat';
        const cropOptimal = cropTypes[cropType] || cropTypes.wheat;
        
        if (soilMoisture < cropOptimal.min) {
            recommendations.push({
                type: 'irrigation',
                priority: 'high',
                message: `土壤湿度(${soilMoisture}%)低于${cropOptimal.min}%，建议立即灌溉`,
                suggestedWater: calculateWaterAmount(cropType, crop.growthStage, farm.area || 1)
            });
        } else if (soilMoisture < cropOptimal.optimal) {
            recommendations.push({
                type: 'irrigation',
                priority: 'medium',
                message: `土壤湿度(${soilMoisture}%)偏低，建议适时灌溉`,
                suggestedWater: calculateWaterAmount(cropType, crop.growthStage, farm.area || 1) * 0.8
            });
        }
        
        // 2. 天气建议
        if (forecast.rainfall > 5) {
            recommendations.push({
                type: 'weather',
                priority: 'info',
                message: `预计${forecast.rainfall}mm降雨，可适当减少灌溉量`
            });
        }
        
        if (forecast.temperature > 30) {
            recommendations.push({
                type: 'weather',
                priority: 'warning',
                message: `高温预警(${forecast.temperature}°C)，建议在早晚凉爽时段灌溉`
            });
        }
        
        // 3. 生长阶段建议
        const growthStages = {
            seedling: { freq: '每天', amount: 0.5 },
            vegetative: { freq: '每2天', amount: 0.8 },
            flowering: { freq: '每3天', amount: 1.0 },
            fruiting: { freq: '每4天', amount: 1.2 },
            mature: { freq: '每周', amount: 0.3 }
        };
        
        const stage = growthStages[crop.growthStage] || growthStages.seedling;
        recommendations.push({
            type: 'growth',
            priority: 'info',
            message: `当前为${crop.growthStage}期，建议${stage.freq}灌溉一次`
        });
        
        return recommendations;
        
        function calculateWaterAmount(cropType, growthStage, area) {
            // 简化计算：根据不同作物和生长阶段计算需水量
            const baseAmounts = {
                wheat: { seedling: 20, vegetative: 30, flowering: 35, fruiting: 40, mature: 15 },
                rice: { seedling: 40, vegetative: 50, flowering: 55, fruiting: 60, mature: 20 },
                corn: { seedling: 25, vegetative: 35, flowering: 40, fruiting: 45, mature: 18 }
            };
            
            const cropAmounts = baseAmounts[cropType] || baseAmounts.wheat;
            const stageAmount = cropAmounts[growthStage] || cropAmounts.seedling;
            
            return stageAmount * area; // m³
        }
    },
    
    // 统计分析
    getUserStats(userId) {
        const user = this.users.find(u => u.id === userId);
        if (!user) return null;
        
        let totalFarms = 0;
        let totalCrops = 0;
        let totalIrrigations = 0;
        let totalWaterUsed = 0;
        
        if (user.farms) {
            totalFarms = user.farms.length;
            
            user.farms.forEach(farm => {
                if (farm.crops) totalCrops += farm.crops.length;
                if (farm.irrigationHistory) {
                    totalIrrigations += farm.irrigationHistory.length;
                    totalWaterUsed += farm.irrigationHistory.reduce((sum, record) => 
                        sum + (record.waterAmount || 0), 0
                    );
                }
            });
        }
        
        return {
            totalFarms,
            totalCrops,
            totalIrrigations,
            totalWaterUsed: Math.round(totalWaterUsed * 100) / 100,
            waterSaved: Math.round(totalWaterUsed * 0.3 * 100) / 100, // 假设智能灌溉节水30%
            efficiency: '85%' // 灌溉效率
        };
    },
    
    // 导出用户数据
    exportUserData(userId) {
        const user = this.users.find(u => u.id === userId);
        if (!user) return null;
        
        return {
            userInfo: {
                username: user.username,
                email: user.email,
                createdAt: user.createdAt
            },
            farms: user.farms || [],
            preferences: user.preferences,
            locations: this.locations.filter(loc => 
                user.farms?.some(farm => 
                    farm.location?.province === loc.province && 
                    farm.location?.city === loc.city
                )
            ),
            stats: this.getUserStats(userId)
        };
    },
    
    // 备份和恢复
    backupUserData(userId) {
        const userData = this.exportUserData(userId);
        if (!userData) return null;
        
        const backup = {
            userId,
            backupTime: new Date().toISOString(),
            data: userData
        };
        
        // 保存到localStorage
        const backups = JSON.parse(localStorage.getItem('user_backups') || '{}');
        backups[userId] = backups[userId] || [];
        backups[userId].push(backup);
        
        // 只保留最近5次备份
        if (backups[userId].length > 5) {
            backups[userId] = backups[userId].slice(-5);
        }
        
        localStorage.setItem('user_backups', JSON.stringify(backups));
        return backup;
    },
    
    getUserBackups(userId) {
        const backups = JSON.parse(localStorage.getItem('user_backups') || '{}');
        return backups[userId] || [];
    }
};
// 在你的 userData.js 文件末尾添加以下代码：

UserSystem.login = function(email, password) {
    const user = this.users.find(u => u.email === email);
    
    if (!user) {
        return { success: false, message: '用户不存在' };
    }
    
    if (user.password !== password) {
        return { success: false, message: '密码错误' };
    }
    
    // 更新最后登录时间
    user.lastLogin = new Date().toISOString();
    this.saveUsers();
    
    // 设置当前用户
    this.currentUser = user;
    this.saveCurrentUser();
    
    return { success: true, user };
};

UserSystem.logout = function() {
    this.currentUser = null;
    localStorage.removeItem('irrigation_currentUser');
    return { success: true };
};

UserSystem.register = function(username, email, password) {
    // 检查邮箱是否已存在
    const existingUser = this.users.find(u => u.email === email);
    if (existingUser) {
        return { success: false, message: '该邮箱已被注册' };
    }
    
    // 创建新用户
    const newUser = {
        id: 'user_' + Date.now(),
        username: username,
        email: email,
        password: password,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        preferences: {
            language: 'zh-CN',
            theme: 'light',
            notifications: true
        },
        farms: []
    };
    
    // 添加到用户列表
    this.users.push(newUser);
    this.saveUsers();
    
    // 自动登录
    this.currentUser = newUser;
    this.saveCurrentUser();
    
    return { success: true, user: newUser };
};

// 保存用户数据到本地存储
UserSystem.saveUsers = function() {
    localStorage.setItem('irrigation_users', JSON.stringify(this.users));
};

UserSystem.saveCurrentUser = function() {
    localStorage.setItem('irrigation_currentUser', JSON.stringify(this.currentUser));
};

UserSystem.saveLocations = function() {
    localStorage.setItem('irrigation_locations', JSON.stringify(this.locations));
};

// 根据城市获取气候信息
UserSystem.getClimateByCity = function(cityName) {
    for (const [zone, data] of Object.entries(this.climateZones)) {
        if (data.cities.includes(cityName)) {
            return {
                zone: zone,
                ...data
            };
        }
    }
    return {
        zone: '未知',
        name: '未知气候区',
        description: '气候数据未知',
        temperature: { min: 0, max: 30, avg: 15 },
        rainfall: { annual: 500, summer: 300, winter: 50 },
        humidity: { avg: 50 }
    };
};