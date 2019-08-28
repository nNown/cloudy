<template>
    <div class="landing" :style="{background: `url(${require('../assets/Background.png')})`}"> 
        <!-- <svg width="335" height="170" viewBox="0 0 335 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V170C17.5742 138.446 85.56 129.785 155.659 120.855H155.66C261.065 107.427 371.248 93.391 322 0H0ZM54.183 77.4435C52.0756 78.3724 49.7507 78.8873 47.3077 78.8873C37.7489 78.8873 30 71.005 30 61.2817C30 52.2878 36.6298 44.8693 45.1893 43.8066C47.2431 36.4158 53.9229 31 61.8461 31C65.9692 31 69.7555 32.4666 72.7285 34.9147C73.907 34.6569 75.1302 34.5211 76.3846 34.5211C83.6512 34.5211 89.8719 39.0764 92.4374 45.5328C98.1077 48.424 102 54.3905 102 61.2817C102 71.005 94.2511 78.8873 84.6923 78.8873C81.5646 78.8873 78.6306 78.0433 76.0985 76.5671C73.0432 79.3251 69.0215 81 64.6154 81C60.6976 81 57.0838 79.6758 54.183 77.4435ZM134.457 70.207C136.098 68.7773 137.064 66.7148 137.357 64.0195H135.178C134.908 66.1875 134.199 67.8164 133.051 68.9062C131.902 69.9844 130.197 70.5234 127.936 70.5234C125.65 70.5234 123.834 69.6445 122.486 67.8867C121.15 66.1289 120.482 63.7734 120.482 60.8203V57.6914C120.482 54.6328 121.168 52.2363 122.539 50.502C123.922 48.7676 125.773 47.9004 128.094 47.9004C132.277 47.9004 134.639 50.0742 135.178 54.4219H137.357C137.1 51.8086 136.174 49.7637 134.58 48.2871C132.998 46.7988 130.836 46.0547 128.094 46.0547C126.148 46.0547 124.426 46.5352 122.926 47.4961C121.438 48.4453 120.295 49.7988 119.498 51.5566C118.701 53.3145 118.303 55.3301 118.303 57.6035V60.9258C118.314 63.1641 118.719 65.1562 119.516 66.9023C120.312 68.6367 121.438 69.9785 122.891 70.9277C124.355 71.877 126.037 72.3516 127.936 72.3516C130.654 72.3516 132.828 71.6367 134.457 70.207ZM142.367 72H144.477V45H142.367V72ZM150.102 57.2695C149.398 58.7344 149.047 60.3809 149.047 62.209V62.6309C149.047 65.5605 149.832 67.916 151.402 69.6973C152.984 71.4668 155.035 72.3516 157.555 72.3516C159.207 72.3516 160.678 71.9531 161.967 71.1562C163.256 70.3594 164.252 69.2285 164.955 67.7637C165.67 66.2871 166.027 64.6289 166.027 62.7891V62.3496C166.027 59.4199 165.242 57.0703 163.672 55.3008C162.102 53.5195 160.051 52.6289 157.52 52.6289C155.879 52.6289 154.408 53.0391 153.107 53.8594C151.818 54.668 150.816 55.8047 150.102 57.2695ZM152.914 68.3965C151.742 66.9316 151.156 65.0625 151.156 62.7891V62.4023C151.156 60.0234 151.748 58.1016 152.932 56.6367C154.115 55.1602 155.645 54.4219 157.52 54.4219C158.773 54.4219 159.887 54.7559 160.859 55.4238C161.832 56.0801 162.588 57.0117 163.127 58.2188C163.666 59.4258 163.936 60.7559 163.936 62.209V62.6133C163.936 65.0039 163.344 66.9316 162.16 68.3965C160.988 69.8496 159.453 70.5762 157.555 70.5762C155.645 70.5762 154.098 69.8496 152.914 68.3965ZM176.557 72.3516C179.334 72.3516 181.355 71.4316 182.621 69.5918L182.656 72H184.695V52.9805H182.586V66.7441C181.777 69.2637 179.85 70.5234 176.803 70.5234C173.873 70.5234 172.408 68.7129 172.408 65.0918V52.9805H170.316V65.3555C170.34 67.6641 170.879 69.4102 171.934 70.5938C172.988 71.7656 174.529 72.3516 176.557 72.3516ZM191.305 55.2656C189.992 57.0117 189.336 59.3613 189.336 62.3145V62.5605C189.336 65.5605 190.004 67.9453 191.34 69.7148C192.688 71.4727 194.457 72.3516 196.648 72.3516C199.262 72.3516 201.242 71.3906 202.59 69.4688L202.678 72H204.646V45H202.555V55.6699C201.207 53.6426 199.25 52.6289 196.684 52.6289C194.422 52.6289 192.629 53.5078 191.305 55.2656ZM192.922 68.4316C191.949 67.0254 191.463 65.1094 191.463 62.6836C191.463 59.9766 191.955 57.9316 192.939 56.5488C193.924 55.1543 195.301 54.457 197.07 54.457C199.637 54.457 201.465 55.6934 202.555 58.166V67.0957C201.465 69.3809 199.625 70.5234 197.035 70.5234C195.266 70.5234 193.895 69.8262 192.922 68.4316ZM221.768 52.9805L216.213 68.9766L210.307 52.9805H208.004L215.176 71.8418L214.244 74.4082C213.799 75.6504 213.254 76.5234 212.609 77.0273C211.977 77.543 211.145 77.8008 210.113 77.8008L209.023 77.6953L209.041 79.4355C209.615 79.5996 210.154 79.6816 210.658 79.6816C212.838 79.6816 214.449 78.5273 215.492 76.2188L215.914 75.2344L224.035 52.9805H221.768Z" fill="#899EEB"/>
        </svg> -->
        
        <div class="mid">
            <div class="mid-info">
                <h1 class="font-weight-regular">Best app for daily forecasts</h1>
                <h3 class="font-weight-light mb-4">Don't be surprised by weather never again and download Cloudy now</h3>
                <div>
                    <v-btn color="#899EEB" class="white--text mx-1 mt-4" large>Get mobile app</v-btn>
                    <v-btn color="#899EEB" class="mx-1 mt-4" outlined large>Check weather online</v-btn>
                </div>
            </div>
            <div class="mid-weather">
                <div class="top">
                    <v-img :src="icon" max-width="200" max-height="150"></v-img>
                    <div>
                        <h1 class="font-weight-regular">{{ `${currentWeather.name}, ${currentWeather.sys.country}` }}</h1>
                        <h3 class="font-weight-regular">{{ getDate }}</h3>
                    </div>
                </div>
                <!-- <h2 class="font-weight-regular">{{ capitalize(currentWeather.weather[0].description) }}</h2> -->
                <div class="desc">
                    <h2 class="font-weight-regular">
                        <v-icon class="mr-2" color="#899EEB">fa-thermometer-half</v-icon>
                        {{ `${parseInt(currentWeather.main.temp - 272.15)}°C` }}
                    </h2>
                    <h2 class="font-weight-regular">
                        <v-icon class="mr-2" color="#899EEB">fa-globe-americas</v-icon>
                        {{ `${currentWeather.main.pressure} hPa` }}
                    </h2>
                    <h2 class="font-weight-regular">
                        <v-icon class="mr-2" color="#899EEB">fa-tint</v-icon>
                        {{ `${currentWeather.main.humidity}%` }}
                    </h2>
                </div>
            </div>
        </div>

        <!-- <svg width="1920" height="241" viewBox="0 0 1920 241" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 53C0 241 1929.5 207.5 1920 241C1910.5 274.5 0 241 0 241C0 241 0 -135 0 53Z" fill="#899EEB"/>
        </svg> -->
    </div>
</template>

<script>
const icon = require('../assets/Icon.png');

export default {
    data: () => ({
        icon: icon,
        currentWeather: null,
    }),
    methods: {
        async getForecast() {
            try {
                await this.$store.dispatch('getForecast');
                this.currentWeather = this.$store.state.weather.currentWeather.data;
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
        capitalize(s) {
            if (typeof s !== 'string') return '';
            return s.charAt(0).toUpperCase() + s.slice(1);
        }
    },
    computed: {
        getDate() {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();
            
            return `${dd}/${mm}/${yyyy}`;
        }
    },
    created() {
        this.getLocation();
    }
}
</script>

<style scoped>
    .landing {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .mid {
        height: 100%;
        padding: 0 5vw;
        display: flex;
        justify-content: center;
    }
    .mid-info {
        flex-grow: 1;
        display: flex;
        flex-basis: 50%;
        flex-direction: column;
        justify-content: center;
        margin: 0 5rem 0 0;
    }
    .mid-info h1 {
        font-size: 3.5rem;
        color: #899EEB;
    }
    .mid-info h3 {
        max-width: 80%;
        font-size: 2rem;
        color: #556291;
    }
    .mid-weather {
        display: flex;
        flex-basis: 50%;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
        margin: 0 0 0 5rem;
    }
    .mid-weather .top {
        display: flex;
        /* justify-content: center; */
        align-items: center;
    }
    .mid-weather .top > * {
        margin: 0 .5rem;
    }
    .mid-weather .top > div {
        display: flex;
        flex-direction: column;
    }
    .mid-weather .top > div h1 {
        font-size: 2.5rem;
        letter-spacing: 2px;
        color: #899EEB;
    }
    .mid-weather .top > div h3 {
        font-size: 1.25rem;
        color: #899EEB;
    }
    .mid-weather > h2 {
        font-size: 2.5rem;
        margin: .5rem 0;
        color: #899EEB;
    }
    .mid-weather .desc {
        max-width: 70%;
        display: flex;
        justify-content: space-between;
    }
    .mid-weather .desc > h2 {
        display: flex;
        align-items: center;
        color: #899EEB;
        font-size: 2rem;
    }

    @media (max-width: 1400px) {
        .mid-weather {
            flex-basis: 30%;
        }
        .mid-weather .desc {
            padding: 1rem;
            flex-direction: column;
        }
        .mid-weather .desc > h2 {
            font-size: 1.4rem;
        }
        .mid-weather .top {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    @media (max-width: 1000px) {
        .mid {
            flex-direction: column;
        }
        .mid-info {
            flex-basis: 20%;
            flex-grow: 1;
            justify-content: flex-end;
            align-items: center;
            margin: 0;
        }
        .mid-info > div {
            margin-right: 6rem;
        }
        .mid-info > h3 {
            max-width: 70%;
        }
        .mid-weather {
            justify-content: center;
            flex-grow: 1;
        }
        .mid-weather .desc {   
            flex-direction: row;
        }
        .mid-weather .top {
            flex-direction: row;
            align-items: center;
        }
    }
    @media (max-width: 750px) {
        .mid-info > h1 {
            font-size: 2.5rem;
        }
        .mid-info > h3 {
            font-size: 1.5rem;
        }
        .mid-info > div {
            margin-right: 2rem;
        }
        .mid-weather .top > div h1 {
            font-size: 2rem;
        }
    }
    @media (max-width: 600px) {
        .mid-info {
            /* justify-content: center; */
            /* align-items: center; */
            margin: 0;
        }
        .mid-info h1 {
            font-size: 1.75rem;
        }
        .mid-info h3 {
            font-size: 1rem;
        }
        .mid-info div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .mid-info > * {
            max-width: 100%;
            margin: 0;
        }
        .mid-weather {
            flex-basis: 30%;
        }
        .mid-weather .desc {
            padding: 1rem;
            flex-direction: column;
        }
        .mid-weather .desc > h2 {
            font-size: 1.4rem;
        }
        .mid-weather .top {
            flex-direction: column;
            align-items: flex-start;
        }
    }
    @media (max-width: 420px) {
        .mid-weather {
            display: none;
        }
        .mid-info {
            justify-content: center;
            align-items: center;
        }
    }
    @media (max-width: 360px) {
        .mid-info h1 {
            font-size: 1.5rem;
        }
    }
</style>