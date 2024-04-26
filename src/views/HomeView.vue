<template>
    <main class="main box-shadow">
        <div class="image" ></div>
        <div class="details">
            <h2>Hi, I'm Leo.</h2>
            <h3>Fullstack Developer and System Administrator</h3>
            <p>
                I started my career as a Web Developer Intern with a representative of CVC, 
                a big player in the travel business in Brazil, which gave me a good idea of how the hospitality industry works.
            </p>
            <p>
                Through the years, I designed and maintained several critical systems, 
                some of them automated. Here, I also gained the opportunity to deploy Windows Servers that worked as a Datacenter environment, 
                to maintain relational databases like ORACLE, and to implement measures to improve the overall system security, 
                among many other roles.
            </p>
            <p>
                As for development skills, I started as a Classic ASP developer, later on moving to PHP, which became my principal domain.
                I also had some projects written in Delphi by 2007, which ended up growing in me the will to learn more about software programming.
            </p>
            <p>
                Already in Canada, while pursuing my Computer Systems Technology Diploma at Saskatchewan Polytechnic, I honed even further my JS skills with Vue, Node.js/Typescript and ORM, as well as networking, and information security, along with learning new programming skills - especially in Java, C, and C# - and an introduction to mobile development with Android Studio and Xamarin/MAUI.
            </p>
            <p>Main interests: Travel, Hicking, Custom Motorcyles, and Rock'n'roll.</p>
        </div>
    </main>
</template>

<script setup lang="ts">
</script>

<style scoped >
.image {
    background-image: url("/images/leokoester3.jpg");
    background-position: center;
}

@media screen and ( max-width: 800px ){
    .image {
        background-position-y: -40px;
    }
}

</style>