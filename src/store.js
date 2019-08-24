import Vue from 'vue';
import Vuex from 'vuex';
import { key } from '../api.config.json';
import firebase from 'firebase';
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather: {
      currentWeather: null,
      forecast: null,
    },
    geolocationCoords: {
      lat: null,
      lng: null,
    },
    user: null,
    authenticated: false,

  },
  mutations: {
    forecastMutation: (state, data) => {
      state.weather = data;
    },
    coordsMutation: (state, data) => {
      state.geolocationCoords = {
        lat: data.lat, 
        lng: data.lng,
      };
    },
    setUser: (state, data) => {
      state.user = data;
    },
    setAuthenticated: (state, data) => {
      state.authenticated = data;
    }
  },
  actions: {
    async getForecast({ commit }) {
      try {
        const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.geolocationCoords.lat}&lon=${this.state.geolocationCoords.lng}&APPID=${key}`);
        const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.geolocationCoords.lat}&lon=${this.state.geolocationCoords.lng}&APPID=${key}`);
        commit('forecastMutation', {
          currentWeather,
          forecast
        });
      } catch(err) {
        console.log(err);
      }
    },
    updateCoords({ commit }, data) {
      commit('coordsMutation', data);
    },
    async createUser({ commit }, { email, password }) {
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        commit('setUser', user);
        commit('setAuthenticated', true);
      } catch(err) {
        commit('setUser', null);
        commit('setAuthenticated', false);
      }
    },
    async signinUser({ commit }, { email, password }) {
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        commit('setUser', user);
        commit('setAuthenticated', true);
      } catch(err) {
        commit('setUser', null);
        commit('setAuthenticated', false);
      }
    }
  },
})
