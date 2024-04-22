<template>
    <main class="main box-shadow">
        <div class="image"></div>
        <form class="details" action="https://formspree.io/f/meqyvrrz" target="_blank" method="post" @submit="submit" >
            <h1>Let's get in touch</h1>
            <p>
                <input type="text" name="name" id="name" placeholder="You name" required >
            </p>
            <p>
                <input type="email" name="email" id="email" placeholder="Your e-mail" required >
            </p>
            <p>
                <textarea name="message" id="message" placeholder="Your message" rows="10" required ></textarea>
            </p>
            <button type="submit">Submit</button> 
            <button type="reset">Reset</button>
        </form>
    </main>
</template>

<script lang="ts" >
export default {
    
    methods: {
        submit( event: Event ){
            const form = event.target as HTMLFormElement;
            setTimeout(() => form.reset(), 1000 );
        }
    }
    
}
</script>

<style scoped >
.details {
    width: 70%;
}
.image {
    background-image: url('/an-intricately-set-up-image-serving-as-a-backdrop-for-a-contact-form-page-featuring-a-wooden-desk-s-404969268.jpeg');
    background-size: cover;
    background-position: left !important;
}
p {
    display: flex;
}
p > * {
    width: 100%;
}
button{
    float: right;
}
button + button {
    margin-right: 20px;
}

@media screen and ( max-width: 800px ) {
    .details {
        width: 100%;
    }
    .image {
        display: none;
    }
}
</style>