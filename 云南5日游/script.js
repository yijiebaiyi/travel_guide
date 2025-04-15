// 行程数据
const tripData = {
    days: [
        {
            day: 1,
            date: "2025-04-16",
            title: "昆明市区游",
            weather: {
                dayweather: "多云",
                nightweather: "多云",
                daytemp: 26,
                nighttemp: 15,
                tips: "天气适宜，建议带伞，昆明紫外线较强"
            },
            spots: [
                {
                    icon: "landmark",
                    name: "翠湖公园"
                },
                {
                    icon: "archway",
                    name: "金马碧鸡坊"
                },
                {
                    icon: "museum",
                    name: "云南省博物馆"
                }
            ],
            schedule: [
                {
                    time: "09:00 - 12:00",
                    spot: "翠湖公园",
                    icon: "landmark",
                    details: {
                        duration: "2-3小时",
                        ticket: "免费",
                        tips: "1. 早晨是最佳游览时间，可以看到晨练的市民\n2. 公园内设有茶座，可以品尝云南特色早茶\n3. 建议携带相机，园内野鸭和红嘴鸥很适合拍照\n4. 周边有多个公交站点，交通便利\n5. 建议准备防晒用品，昆明紫外线较强"
                    }
                },
                {
                    time: "12:00 - 14:00",
                    spot: "金马碧鸡坊",
                    icon: "archway",
                    details: {
                        duration: "1-2小时",
                        ticket: "免费",
                        tips: "1. 建议在附近的文化巷品尝云南特色美食\n2. 最佳拍照时间是黄昏时分\n3. 周边商业区较多，可以购物\n4. 建议避开中午人流高峰\n5. 附近有多家老字号餐厅，可以品尝过桥米线",
                        food: [
                            {
                                name: "云南过桥米线",
                                price: "25-35元/份",
                                description: "正宗云南特色小吃，汤底鲜美，配料丰富，建议在文化巷的老字号店铺品尝"
                            },
                            {
                                name: "汽锅鸡",
                                price: "88-128元/锅",
                                description: "云南名菜，鸡肉鲜嫩，配以菌菇和时令蔬菜，营养美味"
                            },
                            {
                                name: "破酥包",
                                price: "5-8元/个",
                                description: "昆明特色小吃，外酥内软，馅料丰富，适合当做小点心"
                            }
                        ]
                    }
                },
                {
                    time: "14:30 - 16:30",
                    spot: "云南省博物馆",
                    icon: "museum",
                    details: {
                        duration: "2小时",
                        ticket: "免费（需要提前预约）",
                        tips: "1. 必须提前在官网预约参观时间\n2. 需要携带身份证\n3. 馆内禁止拍照\n4. 建议参加免费讲解服务\n5. 周一闭馆，请注意安排时间"
                    }
                }
            ]
        },
        {
            day: 2,
            date: "2025-04-17",
            title: "石林一日游",
            weather: {
                dayweather: "晴",
                nightweather: "晴",
                daytemp: 26,
                nighttemp: 16,
                tips: "天气晴朗，注意防晒，户外活动适宜"
            },
            spots: [
                {
                    icon: "mountain",
                    name: "石林景区"
                },
                {
                    icon: "store",
                    name: "斗南花市"
                }
            ],
            schedule: [
                {
                    time: "07:00 - 08:30",
                    spot: "前往石林",
                    icon: "bus",
                    details: {
                        duration: "1.5小时",
                        ticket: "约50元/人",
                        tips: "1. 建议在昆明东部客运站乘坐班车\n2. 首班车6:30发车\n3. 建议提前购买车票\n4. 路程约90公里\n5. 可以选择包车或拼车前往"
                    }
                },
                {
                    time: "09:00 - 13:00",
                    spot: "石林景区游览",
                    icon: "mountain",
                    details: {
                        duration: "3-4小时",
                        ticket: "130元/人",
                        tips: "1. 建议请当地导游讲解（约100元）\n2. 景区内步行距离较长，穿舒适鞋子\n3. 准备充足饮用水和防晒用品\n4. 建议携带干粮，景区内食品较贵\n5. 主要景点：大石林、小石林、乃古石林"
                    }
                }
            ]
        },
        {
            day: 3,
            date: "2025-04-18",
            title: "大理古城和洱海",
            weather: {
                dayweather: "多云",
                nightweather: "多云",
                daytemp: 25,
                nighttemp: 12,
                tips: "气温适宜，适合游览，早晚温差大注意添加衣物"
            },
            spots: [
                {
                    icon: "landmark",
                    name: "大理古城"
                },
                {
                    icon: "water",
                    name: "洱海"
                }
            ],
            schedule: [
                {
                    time: "08:00 - 12:00",
                    spot: "前往大理",
                    icon: "bus",
                    details: {
                        duration: "4-5小时",
                        ticket: "约150元/人",
                        tips: "1. 建议在昆明西部客运站乘坐大巴\n2. 提前一天购买车票\n3. 建议选择上午班次\n4. 途中会有休息站\n5. 可选择动车或飞机，时间更短但价格较高"
                    }
                },
                {
                    time: "14:00 - 17:00",
                    spot: "大理古城",
                    icon: "landmark",
                    details: {
                        duration: "3小时",
                        ticket: "免费",
                        tips: "1. 建议从古城南门进入\n2. 洋人街有多家特色餐厅\n3. 可以体验扎染、银器制作\n4. 建议品尝白族三道茶\n5. 晚上可以去夜市逛逛",
                        food: [
                            {
                                name: "白族三道茶",
                                price: "38-58元/人",
                                description: "大理特色茶文化体验，苦、甜、回味三种层次，配以点心"
                            },
                            {
                                name: "大理乳扇",
                                price: "20-40元/份",
                                description: "大理特产奶制品，可以现场观看制作过程，口感独特"
                            },
                            {
                                name: "洱海小贝",
                                price: "15-25元/份",
                                description: "大理特色小吃，选用洱海淡水螺，配以特制调料"
                            }
                        ]
                    }
                }
            ]
        },
        {
            day: 4,
            date: "2025-04-19",
            title: "大理-丽江",
            weather: {
                dayweather: "多云",
                nightweather: "多云",
                daytemp: 23,
                nighttemp: 13,
                tips: "气温适宜，适合出行，注意防晒"
            },
            spots: [
                {
                    icon: "road",
                    name: "前往丽江"
                },
                {
                    icon: "landmark",
                    name: "丽江古城"
                }
            ],
            schedule: [
                {
                    time: "09:00 - 12:10",
                    spot: "大理到丽江",
                    icon: "bus",
                    details: {
                        duration: "3小时10分钟",
                        ticket: "约100元/人",
                        tips: "1. 建议在大理客运站乘坐快巴\n2. 提前购买车票避免售罄\n3. 途中会经过漾濞、鸡足山\n4. 可选择包车，方便途中观景\n5. 建议选择上午班次，保证有充足时间游览丽江"
                    }
                },
                {
                    time: "14:00 - 18:00",
                    spot: "丽江古城",
                    icon: "landmark",
                    details: {
                        duration: "4小时",
                        ticket: "免费（古城维护费80元/人）",
                        tips: "1. 建议先在古城内找好住宿\n2. 一定要记住住处位置，古城内很容易迷路\n3. 可以去狮子山俯瞰古城全景\n4. 晚上可以体验纳西古乐\n5. 建议品尝纳西特色美食：丽江粑粑、腊排骨",
                        food: [
                            {
                                name: "丽江粑粑",
                                price: "8-12元/个",
                                description: "纳西族特色小吃，外酥内软，可选择多种馅料"
                            },
                            {
                                name: "纳西烤鱼",
                                price: "68-98元/条",
                                description: "使用丽江特有的高原鱼类，配以特制香料烤制"
                            },
                            {
                                name: "腊排骨",
                                price: "45-65元/份",
                                description: "丽江特色腊味，可以单点也可以配饭，口感独特"
                            }
                        ]
                    }
                }
            ]
        },
        {
            day: 5,
            date: "2025-04-20",
            title: "玉龙雪山",
            weather: {
                dayweather: "多云",
                nightweather: "多云",
                daytemp: 23,
                nighttemp: 13,
                tips: "山区温差大，需要准备保暖衣物"
            },
            spots: [
                {
                    icon: "mountain",
                    name: "玉龙雪山"
                },
                {
                    icon: "water",
                    name: "蓝月谷"
                }
            ],
            schedule: [
                {
                    time: "07:00 - 12:00",
                    spot: "玉龙雪山",
                    icon: "mountain",
                    details: {
                        duration: "5小时",
                        ticket: "大索道：180元/人，景区门票：130元/人",
                        tips: "1. 建议提前一天适应高原环境\n2. 必须携带身份证购票\n3. 准备防寒衣物，山上气温很低\n4. 建议租用氧气瓶（约60元）\n5. 上山建议慢步行，预防高原反应"
                    }
                },
                {
                    time: "13:00 - 15:00",
                    spot: "蓝月谷",
                    icon: "water",
                    details: {
                        duration: "2小时",
                        ticket: "100元/人",
                        tips: "1. 最佳拍照时间是上午9点-11点\n2. 蓝月谷景区内步行距离较长\n3. 建议携带饮用水和零食\n4. 可以选择乘坐电瓶车游览\n5. 适合拍照，建议带好相机"
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