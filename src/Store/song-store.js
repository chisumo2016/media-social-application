import { defineStore } from 'pinia'
import axios from "axios";

export const useSongStore = defineStore('song', {
    state: () => ({
        artistId: null,
        artistName: null,
        songs: null,
    }),

    actions: {
        async fetchSongsByUserId(userId){
          let res = await axios.get('http://music-social-network-api.test/api/user/' + userId + '/songs')
            //let res = await axios.get('api/users/' + this.$state.id)
            this.$state.artistId    = res.data.artist_id
            this.$state.artistName  = res.data.artist_name
            this.$state.songs       = res.data.songs

        },

        clearSongs(){
            this.$state.songs = null
        }
    },
    persist: true,
})