<template>
    <div class="hello">
        <h1 @click="changeMsg">{{ msg }}</h1>
    </div>
</template>

<script>

import data from 'STATIC/mork.js'
// import data from '../../static/js/mork.js'
// import Test from 'zp-test'
// import Test from '@js/test.js'
// import '@js/test.js'

export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },

    created() {
        this.$nextTick( done => {
            console.log('done:', done);
        } );
    },

    methods: {
        unitTest( a, b ) {
            return a + b;
        },

        changeMsg() {
            // let log = console.count('changeMsg');
            this.msg = data.name;
        }
    },
}
</script>

