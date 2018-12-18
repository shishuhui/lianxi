var map = new AMap.Map('container', {
  resizeEnable: true
})

export default {
  getLocation() {
    return new Promise((resolve, reject) => {
      AMap.plugin('AMap.Geolocation', () => {
        const geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          buttonOffset: new AMap.Pixel(10, 20),
          zoomToAccuracy: true,
          buttonPosition: 'RB',          
          extensions: 'all'
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (data) => {
          resolve(data)
        })
        AMap.event.addListener(geolocation, 'error', (data) => {
          reject(data)
        })
      })
    })
  },
  getSearchMap(city, keyword) {
    return new Promise((resolve, reject) => {
      AMap.plugin('AMap.Autocomplete', function () {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: city
        }
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(keyword, function (status, result) {
          // 搜索成功时，result即是对应的匹配数据
          resolve(result)
        })
      })
    })
  },
  getPrvince() {
    return new Promise((resolve, reject) => {
      AMap.plugin('AMap.DistrictSearch', function () {
        var districtSearch = new AMap.DistrictSearch({
          // 关键字对应的行政区级别，country表示国家
          level: 'country',
          //  显示下级行政区级数，1表示返回下一级行政区
          subdistrict: 1
        })
        
        // 搜索所有省/直辖市信息
        districtSearch.search('中国', function(status, result) {
          // 查询成功时，result即为对应的行政区信息
          resolve(result)
        })
      })
    })
  },
  drawMap () {
    return new Promise((resolve, reject) => {
      AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker) => {
        var map = new AMap.Map('container', {
          zoom: 16,
          scrollWheel: false
        })
        var positionPicker = new PositionPicker({
          mode: 'dragMap',
          map: map
        })
        positionPicker.setMode('dragMap')
        positionPicker.start()
        resolve(positionPicker)
      })
    })
  }
}
