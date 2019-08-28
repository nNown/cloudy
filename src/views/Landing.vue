<template>
    <div style="height: 100%;">
        <landing-page />
        <forecast />
    </div>
</template>

<script>
import LandingPage from '../components/LandingPage.vue';
import Forecast from '../components/Forecast.vue';

export default {
    components: {
        LandingPage,
        Forecast
    },
    data: () => ({

    }),
}
</script>