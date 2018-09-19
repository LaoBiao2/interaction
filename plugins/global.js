import Vue from 'vue'

Vue.mixin({
    methods: {
        $seo(title, description, keywords, payload = []) {
            return {
                title,
                meta: [{
                    hid: 'description',
                    name: 'description',
                    description, 
                },{
                    hid: 'keywords',
                    name: 'keywords',
                    keywords
                }].concat(payload)
            }
        }
    }
})