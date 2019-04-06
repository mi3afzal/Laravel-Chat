<template>
    <div class="message self">
        <strong class="user">Krunal</strong>
        <p class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque quaerat rem quia veniam exercitationem, commodi numquam omnis! Non placeat perspiciatis nulla illum cumque ad natus asperiores fuga. Facere, dignissimos.</p>
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
    .user {
        font-weight: 800;
    }
    .body {
        margin-bottom: 0;
        white-space: pre-wrap;
    }
    .message {
        border-bottom: 1px solid #000000
    }
    .self {
        background-color: #f0f0f0;
        padding: 10px;
    }
</style>