<template>
    <main>
        
        <div v-for="(project, key) in projectList" :key="key" :class="['main', 'project', 'box-shadow', key%2?'flipped':'']" >
            <div class="image" :style="{backgroundImage: `url(.${project.images[0].src})`}" :title="project.images[0].title" ></div>
            <div class="details">
                <h2>{{ project.name }}</h2>
                <h3>{{ project.purpose }}</h3>
                <h4>Period: {{ project.date }}</h4>
                <p>{{ project.description }}</p>
                <p>Technologies: {{ project.technologies.join(", ") }}</p>
            </div>
        </div>
        
    </main>
</template>

<script lang="ts">
export default {
    
    data() {
        return {
            projectList: []
        }
    },
    
    
    //
    //
    async beforeMount(){
        const projects = (await import("@/data/projects.json")).default;
        
        this.projectList = projects;
    }
    
}
</script>

<style scoped >
.image {
    min-width: 50%;
    transition: all 0.5s;
    border-width: 0 1px 0 1px;
    border-style: solid;
    border-color: transparent var(--color-border) transparent var(--color-border);
}

.main:hover .image {
    background-size: auto 115%;
    border-color: transparent var(--color-border-hover) transparent var(--color-border-hover);
}

.flipped {
    flex-direction: row-reverse;
}

.main + .main {
    margin-top: 80px
}

@media screen and ( min-width: 800px ) {
    .image {
        background-size: auto 110%;
    }
}
</style>