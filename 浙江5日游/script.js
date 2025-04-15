// 行程数据
const tripData = {
    days: [
        {
            day: 1,
            date: "2025-04-16",
            title: "杭州西湖景区游",
            weather: {
                dayweather: "多云",
                nightweather: "多云",
                daytemp: 30,
                nighttemp: 19,
                tips: "天气适宜，建议带伞，注意防晒"
            },
            spots: [
                {
                    icon: "water",
                    name: "西湖"
                },
                {
                    icon: "landmark",
                    name: "雷峰塔"
                },
                {
                    icon: "tree",
                    name: "苏堤春晓"
                }
            ],
            schedule: [
                {
                    time: "08:30 - 11:30",
                    spot: "西湖游船+苏堤春晓",
                    icon: "water",
                    details: {
                        duration: "3小时",
                        ticket: "游船：45元/人",
                        tips: "1. 建议清晨或傍晚游览，景色最佳\n2. 可以选择包船或散客船\n3. 苏堤是徒步最佳路线\n4. 建议在断桥边拍照\n5. 可以租自行车环湖游览",
                        food: [
                            {
                                name: "外婆家（湖滨店）",
                                price: "人均80-120元",
                                description: "杭帮菜老字号，推荐叫花鸡、东坡肉、龙井虾仁"
                            },
                            {
                                name: "知味观糕点",
                                price: "30-50元/盒",
                                description: "杭州特色糕点，推荐桂花糕、艾草青团"
                            }
                        ]
                    }
                },
                {
                    time: "14:00 - 16:00",
                    spot: "雷峰塔",
                    icon: "landmark",
                    details: {
                        duration: "2小时",
                        ticket: "40元/人",
                        tips: "1. 建议登塔俯瞰西湖全景\n2. 塔内设有电梯\n3. 了解白蛇传传说\n4. 建议傍晚观赏夕阳\n5. 周边有茶室可以品茶",
                        food: [
                            {
                                name: "楼外楼(孤山路店)",
                                price: "人均150-200元",
                                description: "百年老字号，西湖醋鱼、龙井虾仁必点"
                            }
                        ]
                    }
                }
            ]
        },
        {
            day: 2,
            date: "2025-04-17",
            title: "杭州灵隐寺-西溪湿地",
            weather: {
                dayweather: "多云",
                nightweather: "晴",
                daytemp: 31,
                nighttemp: 18,
                tips: "天气较热，注意防暑，建议带遮阳伞"
            },
            spots: [
                {
                    icon: "pray",
                    name: "灵隐寺"
                },
                {
                    icon: "leaf",
                    name: "西溪湿地"
                }
            ],
            schedule: [
                {
                    time: "08:00 - 11:30",
                    spot: "灵隐寺",
                    icon: "pray",
                    details: {
                        duration: "3.5小时",
                        ticket: "门票30元/人，香火票10元/人",
                        tips: "1. 建议早晨前往避开人流\n2. 着装需要庄重\n3. 可以在飞来峰观赏摩崖石刻\n4. 禁止在大雄宝殿拍照\n5. 建议请讲解员了解佛教文化",
                        food: [
                            {
                                name: "灵隐素斋",
                                price: "人均60-80元",
                                description: "正宗佛教素斋，环境清幽"
                            }
                        ]
                    }
                },
                {
                    time: "14:00 - 17:00",
                    spot: "西溪湿地",
                    icon: "leaf",
                    details: {
                        duration: "3小时",
                        ticket: "门票80元/人，船票50元/人",
                        tips: "1. 建议坐船游览水路\n2. 可以观赏芦苇荡和水生植物\n3. 春季可以观赏梅花\n4. 建议带驱蚊水\n5. 拍照注意防水",
                        food: [
                            {
                                name: "西溪天堂茶叶",
                                price: "50-200元/位",
                                description: "品尝龙井茶，配以茶点"
                            }
                        ]
                    }
                }
            ]
        },
        {
            day: 3,
            date: "2025-04-18",
            title: "乌镇水乡游",
            weather: {
                dayweather: "晴",
                nightweather: "小雨",
                daytemp: 32,
                nighttemp: 20,
                tips: "白天炎热，傍晚有雨，建议带伞"
            },
            spots: [
                {
                    icon: "water",
                    name: "乌镇东栅"
                },
                {
                    icon: "moon",
                    name: "乌镇西栅"
                }
            ],
            schedule: [
                {
                    time: "09:00 - 12:00",
                    spot: "乌镇东栅",
                    icon: "water",
                    details: {
                        duration: "3小时",
                        ticket: "东栅门票120元/人",
                        tips: "1. 建议先游览东栅景区\n2. 可以参观江南百床馆\n3. 染坊体验扎染\n4. 观看传统手工艺制作\n5. 建议租用导览器",
                        food: [
                            {
                                name: "乌镇三白酒坊",
                                price: "人均60-80元",
                                description: "特色黄酒、醉蟹、白水鱼"
                            },
                            {
                                name: "张阿婆糕团",
                                price: "10-20元/份",
                                description: "传统手工糕点，现场制作"
                            }
                        ]
                    }
                },
                {
                    time: "14:00 - 21:00",
                    spot: "乌镇西栅",
                    icon: "moon",
                    details: {
                        duration: "7小时",
                        ticket: "西栅门票120元/人",
                        tips: "1. 西栅可以夜游，很美\n2. 可以观看水乡表演\n3. 建议住一晚感受水乡夜色\n4. 可以体验特色民宿\n5. 晚上注意保暖",
                        food: [
                            {
                                name: "姚记米厨",
                                price: "人均100-150元",
                                description: "特色农家菜，推荐红烧肉、醉虾"
                            },
                            {
                                name: "水乡特色小吃",
                                price: "5-20元不等",
                                description: "臭豆腐、糯米藕、白水豆腐"
                            }
                        ]
                    }
                }
            ]
        },
        {
            day: 4,
            date: "2025-04-19",
            title: "横店影视城",
            weather: {
                dayweather: "多云",
                nightweather: "多云",
                daytemp: 30,
                nighttemp: 19,
                tips: "天气适宜，建议带防晒用品"
            },
            spots: [
                {
                    icon: "film",
                    name: "秦王宫"
                },
                {
                    icon: "camera",
                    name: "广州街香港街"
                }
            ],
            schedule: [
                {
                    time: "09:00 - 12:00",
                    spot: "秦王宫",
                    icon: "film",
                    details: {
                        duration: "3小时",
                        ticket: "横店影视城联票248元/人",
                        tips: "1. 建议购买联票比较划算\n2. 可以体验古装拍照\n3. 观看大型表演秀\n4. 建议请导游讲解\n5. 注意防晒",
                        food: [
                            {
                                name: "横店小吃街",
                                price: "人均30-50元",
                                description: "各地特色小吃汇集"
                            }
                        ]
                    }
                },
                {
                    time: "14:00 - 17:00",
                    spot: "广州街香港街",
                    icon: "camera",
                    details: {
                        duration: "3小时",
                        ticket: "含在联票内",
                        tips: "1. 可以体验民国和香港风情\n2. 参与互动表演\n3. 建议傍晚观赏夜景\n4. 可以拍摄复古照片\n5. 注意保管随身物品",
                        food: [
                            {
                                name: "茶餐厅",
                                price: "人均40-60元",
                                description: "港式奶茶、菠萝包等特色美食"
                            }
                        ]
                    }
                }
            ]
        },
        {
            day: 5,
            date: "2025-04-20",
            title: "杭州购物休闲",
            weather: {
                dayweather: "多云",
                nightweather: "多云",
                daytemp: 29,
                nighttemp: 18,
                tips: "天气舒适，适合逛街购物"
            },
            spots: [
                {
                    icon: "shopping-bag",
                    name: "湖滨银泰"
                },
                {
                    icon: "store",
                    name: "清河坊街"
                }
            ],
            schedule: [
                {
                    time: "10:00 - 14:00",
                    spot: "湖滨银泰",
                    icon: "shopping-bag",
                    details: {
                        duration: "4小时",
                        ticket: "免费",
                        tips: "1. 杭州最大商圈之一\n2. 临近西湖景区\n3. 汇集各类品牌店\n4. 有很多美食选择\n5. 建议错峰购物",
                        food: [
                            {
                                name: "奈雪的茶",
                                price: "25-40元/杯",
                                description: "网红茶饮，特色水果茶"
                            },
                            {
                                name: "绿茶餐厅",
                                price: "人均80-100元",
                                description: "杭州本土连锁，创新杭帮菜"
                            }
                        ]
                    }
                },
                {
                    time: "15:00 - 18:00",
                    spot: "清河坊街",
                    icon: "store",
                    details: {
                        duration: "3小时",
                        ticket: "免费",
                        tips: "1. 古色古香的商业街\n2. 可以买到地道手信\n3. 有很多老字号店铺\n4. 建议品尝特色小吃\n5. 适合买伴手礼",
                        food: [
                            {
                                name: "杭州小笼包",
                                price: "15-25元/笼",
                                description: "传统老店，汤汁丰富"
                            },
                            {
                                name: "王星记扇子",
                                price: "50-500元不等",
                                description: "百年老字号，传统工艺扇子"
                            }
                        ]
                    }
                }
            ]
        }
    ]
};

// 生成行程卡片
function generateDayCards() {
    const dayCardsContainer = document.querySelector('.day-cards');
    dayCardsContainer.innerHTML = tripData.days.map(day => `
        <div class="day-card">
            <div class="day-header">
                <span>第${day.day}天 (${day.date})</span>
            </div>
            <div class="weather-info">
                <div class="weather-main">
                    <i class="fas fa-sun"></i> 天气：${day.weather.dayweather} / ${day.weather.nightweather}
                </div>
                <div class="temp">
                    <i class="fas fa-temperature-high"></i> 温度：${day.weather.daytemp}°C / ${day.weather.nighttemp}°C
                </div>
                <div class="weather-tips">
                    <i class="fas fa-info-circle"></i> ${day.weather.tips}
                </div>
            </div>
            <div class="day-title">${day.title}</div>
            <div class="day-spots">
                ${day.spots.map(spot => `
                    <span><i class="fas fa-${spot.icon}"></i> ${spot.name}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// 生成详细行程
function generateDailyDetails() {
    const dailyDetailsContainer = document.querySelector('.daily-details');
    dailyDetailsContainer.innerHTML = `<h2>详细行程</h2>` + tripData.days.map(day => `
        <div class="day-detail" id="day${day.day}">
            <h3>第${day.day}天：${day.title} (${day.date})</h3>
            <div class="weather-info">
                <div class="weather-main">
                    <i class="fas fa-sun"></i> 天气：${day.weather.dayweather} / ${day.weather.nightweather}
                </div>
                <div class="temp">
                    <i class="fas fa-temperature-high"></i> 温度：${day.weather.daytemp}°C / ${day.weather.nighttemp}°C
                </div>
                <div class="weather-tips">
                    <i class="fas fa-info-circle"></i> ${day.weather.tips}
                </div>
            </div>
            <div class="timeline">
                ${day.schedule.map(item => `
                    <div class="timeline-item">
                        <div class="time">${item.time}</div>
                        <div class="content">
                            <h4><i class="fas fa-${item.icon}"></i> ${item.spot}</h4>
                            <p><i class="fas fa-clock"></i> 游览时长：${item.details.duration}</p>
                            <p><i class="fas fa-ticket-alt"></i> 门票：${item.details.ticket}</p>
                            <div class="tips-section">
                                <h5><i class="fas fa-lightbulb"></i> 游览建议：</h5>
                                <ul class="tips-list">
                                    ${item.details.tips.split('\n').map(tip => `
                                        <li>${tip}</li>
                                    `).join('')}
                                </ul>
                            </div>
                            ${item.details.food ? `
                                <div class="food-section">
                                    <h5><i class="fas fa-utensils"></i> 美食推荐：</h5>
                                    <ul class="food-list">
                                        ${item.details.food.map(food => `
                                            <li>
                                                <span class="food-name">${food.name}</span>
                                                <span class="food-price">${food.price}</span>
                                                <p class="food-desc">${food.description}</p>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    generateDayCards();
    generateDailyDetails();
}); 