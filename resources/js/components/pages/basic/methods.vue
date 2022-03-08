<template>
    <div>
        <h1>
            The number is : {{ views }}
        
        </h1>

        <button @click="updateCounter(1)">Increase</button>
        <button @click="updateCounter(-1)">Decrease</button>

        <br><br><br>

        <div v-if="blogs.length">

            <div v-for="(blog,i) in blogs" :key="i" >
                <h1>{{blog.title}}</h1>
                <p>{{blog.post}}</p>

            </div>
        </div>

        <br><br><br>

    <div>

        <h1 class="css1" v-if="showItem">Show this item if "showItem" is TRUE</h1>
        <h1 v-else>Show this item if "showItem" is FALSE</h1>

    </div>

    <button @click="showItem = !showItem">Change show !=</button>
    
    </div>
</template>

<script>
export default {
    data(){
        return{
            views : 0,
            blogs : [],
            showItem : false
        }
    },
    methods: {
        updateCounter(num){
            this.views +=num
        }
    },

    created(){
        //call the server to get the views from blog post
        this.views = 666

        //get blog posts
        let post = [    
                        {title: 'this is blog title 1', 'post' : 'blablbalbalblabla', id: 1},
                        {title: 'this is blog title 2', 'post' : 'blablbalbalblabla', id: 2},
                        {title: 'this is blog title 3123', 'post' : 'blablbalbalblabla', id: 3},
                        {title: 'this is blog title33', 'post' : 'blablbalbalblabla', id: 4},
                        {title: 'this is blog title132', 'post' : 'blablbalbalblabla', id: 5},
                        {title: 'this is blog title111', 'post' : 'blablbalbalblabla', id: 6},
                    ]

        this.blogs = post
    }
}
</script>