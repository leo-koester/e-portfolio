<template>
    <footer>
        <div class="social-media" >
            <a v-for="(lnk, key) of linkList" :key="key"
                target="_blank" 
                :href="lnk.url" 
                :class="lnk.icons"
                :title="lnk.name"></a>
        </div>
        <div class="copyright">
            <p>
                &copy; <span>{{ yearList }}</span> <span>Leonidio Koester Jr.</span>
            </p>
            <p>
                Logo by <a href="https://www.vecteezy.com">Vecteezy</a>
            </p>
        </div>
    </footer>
</template>

<script lang="ts">
export default {
    
    data() {
        return {
            linkList: [],//Array<{ name: string, url: string, icon: string }>,
            yearList: String
        }
    },
    
    async mounted(){
        const result = [];
        for ( let year = 2024; year <= (new Date).getFullYear(); year++ ){
            result.push( year );
        }
        this.yearList = result.length <= 2 ? result.join(", ") : result[0]+"-"+result.pop();
        
        this.linkList = (await import("@/data/social.json")).default;
    }
    
}
</script>

<style scoped >
footer div {
    display: flex;
    margin: 80px auto;
    justify-content: center;
    align-content: center;
}
*.social-media > a {
    font-size: x-large;
    color: var(--color-text);
    margin: auto 30px;
}

div.copyright p {
    margin: auto 20px;
}

@media screen and ( max-width: 800px ) {
    .copyright {
        display: flex;
        flex-direction: column;
    }
    p {
        text-align: center;
    }
    span + span { white-space: nowrap; }
}
</style>