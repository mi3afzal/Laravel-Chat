<template>
    <div class="message-area" ref="message">
        <message-component 
            v-for="message in messages" 
            :key="message.id" 
            :message="message">
        </message-component>      
    </div>
</template>

<script>

    import Event from '../event.js';

    export default {
        data() {
            return {
                messages: []
            }
        },
        mounted() {
            console.log('ChatMessagesComponent mounted.');
            axios.get('/message').then((response) => {
                console.log(response.data);
                this.messages = response.data;
            });
            Event.$on('added_message', (message) => {
                this.messages.push(message);
                if(message.selfMessage) {
                    //console.log(this.$refs.message.scrollHeight);
                    //this.$refs.message.scrollTop = this.$refs.message.scrollHeight;
                }
            });
        },
        updated(){
            let elem = this.$refs.message;
            //console.log(elem.scrollHeight);
            elem.scrollTop = elem.scrollHeight;
        }
    }
</script>
<style>
    .message-area {
        height: 400px;
        max-height: 400px;
        overflow-y: scroll;
        padding: 15px;
        border-bottom: 1px solid #eee;
    }
</style>