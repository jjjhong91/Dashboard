// 初始化地圖
var map = L.map("map").setView([23.6978, 120.9605], 7);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// 添加一些示例標記
var markers = [
  L.marker([25.033, 121.5654]).bindPopup("台北"),
  L.marker([22.9908, 120.2133]).bindPopup("台南"),
  L.marker([22.6273, 120.3014]).bindPopup("高雄"),
];

var markerGroup = L.layerGroup(markers).addTo(map);

function showAllMarkers() {
  map.addLayer(markerGroup);
}

function hideAllMarkers() {
  map.removeLayer(markerGroup);
}

// 統計數據圖表
new Chart(document.getElementById("statisticsChart").getContext("2d"), {
  type: "line",
  data: {
    labels: ["一月", "二月", "三月", "四月", "五月", "六月"],
    datasets: [
      {
        label: "訪問量",
        data: [5000, 7000, 6000, 8000, 9000, 10000],
        borderColor: "#00ffff",
        tension: 0.1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// 用戶增長圖表
new Chart(document.getElementById("userGrowthChart").getContext("2d"), {
  type: "bar",
  data: {
    labels: ["一月", "二月", "三月", "四月", "五月", "六月"],
    datasets: [
      {
        label: "新增用戶",
        data: [300, 450, 320, 500, 480, 600],
        backgroundColor: "#ff00ff",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
