<template>
    <div>
        <form class="form">
            <textarea 
                cols="25"
                rows="5"
                class="form-input">
            </textarea>
            <span class="notice">
                Hit Return to send a message
            </span>
        </form>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>
    .form {
        padding: 8px;
    }
    .form-input {
        width: 100%;
        border: 1px solid #d3e0e9;
        padding: 5px 10px;
        outline: none;
    }
    .notice {
        color: #aaa
    }
    
</style>