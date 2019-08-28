<template>
  <v-container style="background: #899EEB;">
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-col lg="3" md="12" sm="12" align-self="end">
            <v-card class="mx-auto my-1" title width="375" raised>
              <v-img :src="currentWeather.imgPath"></v-img>
              <v-list disabled>
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="display-1 font-weight-light">
                        {{ currentWeather.data.name }} 
                        <span class="mx-2 title font-weight-light">
                          {{ `${currentWeather.date.day}.${currentWeather.date.month}.${currentWeather.date.year}` }}
                        </span>
                      </v-list-item-title>
                      <v-list-item-subtitle class="headline font-weight-light mt-1 text-capitalize">
                        {{ currentWeather.data.weather[0].description }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="title font-weight-medium">
                      <v-list-item-title class="my-1">Temperature: {{ parseInt(currentWeather.data.main.temp -272.15) }}°C</v-list-item-title>
                      <v-list-item-title class="my-1">Pressure: {{ currentWeather.data.main.pressure }} hPa</v-list-item-title>
                      <v-list-item-title class="my-1">Humidity: {{ currentWeather.data.main.humidity }}%</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
          <v-col lg="3" md="4" sm="12" v-for="forecast in weatherData" :key="forecast.date.day" align-self="end"> 
            <v-card class="mx-auto my-1" title width="375" raised>
              <v-img :src="forecast.imgPath"></v-img>
              <v-list disabled>
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="display-1 font-weight-light">
                        {{ currentWeather.data.name }} 
                        <span class="mx-2 title font-weight-light">
                          {{ `${forecast.date.day}.${forecast.date.month}.${forecast.date.year}` }}
                        </span>
                      </v-list-item-title>
                      <v-list-item-subtitle class="headline font-weight-light mt-1 text-capitalize">
                        {{ forecast.data.weather[0].description }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="title font-weight-medium">
                      <v-list-item-title class="my-1">Temperature: {{ parseInt(forecast.data.main.temp -272.15) }}°C</v-list-item-title>
                      <v-list-item-title class="my-1">Pressure: {{ forecast.data.main.pressure }} hPa</v-list-item-title>
                      <v-list-item-title class="my-1">Humidity: {{ forecast.data.main.humidity }}%</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const clear = require('../assets/cards/CloudyBase.png');
const clouds = require('../assets/cards/CloudyClouds.png');
const scatteredClouds = require('../assets/cards/CloudyScatteredClouds.png');
const brokenClouds = require('../assets/cards/CloudyBrokenClouds.png');
const mist = require('../assets/cards/CloudyMist.png');
const snow = require('../assets/cards/CloudySnow.png');
const rain = require('../assets/cards/CloudyRain.png');
const heavyRain = require('../assets/cards/CloudyHeavyRain.png');
const thunder = require('../assets/cards/CloudyThunder.png');

export default {
  data: () => ({
    weatherData: [],
    currentWeather: null,
    cardsData: [
      {
        main: 'Clear', 
        card: [ 
          {id: 800, img: clear}, 
        ]},
      {
        main: 'Clouds', 
        card: [ 
          {id: 801, img: clouds}, 
          {id: 802, img: scatteredClouds}, 
          {id: 803, img: brokenClouds}, 
          {id: 804, img: brokenClouds} ,
      ]},
      {
        main: 'Atmosphere', 
        card: [
          // I will design cards for this later
          {id: 701, img: mist},
          {id: 711, img: mist},
          {id: 721, img: mist},
          {id: 731, img: mist},
          {id: 741, img: mist},
          {id: 751, img: mist},
          {id: 761, img: mist},
          {id: 762, img: mist},
          {id: 771, img: mist},
          {id: 781, img: mist},
        ]
      },
      {
        main: 'Snow',
        card: [
          // I will design cards for this later
          {id: 600, img: snow},
          {id: 601, img: snow},
          {id: 602, img: snow},
          {id: 611, img: snow},
          {id: 612, img: snow},
          {id: 613, img: snow},
          {id: 615, img: snow},
          {id: 616, img: snow},
          {id: 620, img: snow},
          {id: 621, img: snow},
          {id: 622, img: snow},
        ]
      },
      {
        main: 'Rain',
        card: [
          // I will design cards for this later
          {id: 500, img: rain},
          {id: 501, img: rain},
          {id: 502, img: heavyRain},
          {id: 503, img: heavyRain},
          {id: 504, img: heavyRain},
          {id: 511, img: heavyRain},
          {id: 520, img: heavyRain},
          {id: 521, img: heavyRain},
          {id: 522, img: heavyRain},
          {id: 531, img: heavyRain},
        ]
      },
      {
        main: 'Drizzle',
        card: [
          // I will design cards for this later
          {id: 300, img: rain},
          {id: 301, img: rain},
          {id: 302, img: rain},
          {id: 310, img: rain},
          {id: 311, img: rain},
          {id: 312, img: rain},
          {id: 313, img: rain},
          {id: 314, img: rain},
          {id: 321, img: rain},
        ]
      },
      {
        main: 'Thuderstrom',
        card: [
          // I will design cards for this later
          {id: 200, img: thunder},
          {id: 201, img: thunder},
          {id: 202, img: thunder},
          {id: 210, img: thunder},
          {id: 211, img: thunder},
          {id: 212, img: thunder},
          {id: 221, img: thunder},
          {id: 230, img: thunder},
          {id: 231, img: thunder},
          {id: 232, img: thunder},
        ]
      },
    ],
    // darkTheme: this.$vuetify.theme.dark,
  }),
  methods: {
    async getForecast() {
      try { 
        await this.$store.dispatch('getForecast');
        const tempData = this.$store.state.weather.forecast.data.list;
        const tempCurrentData = this.$store.state.weather.currentWeather.data;
        let currentImg;

        let dates = new Array();
        const checkTime = tempData[0].dt_txt.split(' ')[1];

        tempData.forEach((data, index) => {
          const temp = data.dt_txt.split(' ');
          const tempDate = temp[0].split('-');
          let imgLink;

          this.cardsData.forEach(obj => {
            obj.card.forEach(objData => {
              if(objData.id === data.weather[0].id) return imgLink = objData.img;
            })
          });

          if(temp[1] === checkTime) {
            dates.push({
              index: index,
              date: {
                year: tempDate[0],
                month: tempDate[1],
                day: tempDate[2],
                time: temp[1],
              },
              data,
              imgPath: imgLink,
            });
          }
        });

        this.cardsData.forEach(obj => {
            obj.card.forEach(objData => {
              if(objData.id === tempCurrentData.weather[0].id) return currentImg = objData.img;
            })
        })

        this.weatherData = dates.slice(1, 4);
        this.currentWeather = {
          data: this.$store.state.weather.currentWeather.data,
          date: dates[0].date,
          imgPath: currentImg,
        };
      } catch(err) {
        console.log(err);
      }
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async pos => {
          try {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            
            await this.$store.dispatch('updateCoords', {lat, lng});
            return this.getForecast();
          } catch(err) {
            console.log(err);
          }
        });
      }
    },
  },
  created() {
    return this.getLocation();
  },
};
</script>
