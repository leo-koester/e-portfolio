<template>
    <header>
        <nav>
            <!-- <img src="/leosoft.svg"> -->
            <!-- <div class="image leo-icon" ></div> -->
            <RouterLink class="image leo-icon" to="/" title="Home"></RouterLink>
            <RouterLink to="/projects" title="Projects">Projects</RouterLink>
            <!-- <RouterLink to="/about" title="About">About</RouterLink> -->
            <a href="./resume.pdf" target="_blank">R&eacute;sum&eacute;</a>
        </nav>
    </header>
</template>


<style scoped >

header {
    display: flex;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    padding: 10px;
    justify-content: center;
    background-color: var(--color-background);
    box-shadow: 0px 3px 30px -10px rgba(0,0,0,0.2);
}

/* img {
    height: 48px;
    border-radius: 50%;
} */

.leo-icon {
    display: block;
    width: 56px;
    height: 56px;
    background-image: url('/leosoft-white.svg');
    background-size: auto 80%;
    background-color: var(--vt-c-indigo);
    border-radius: 50%;
    padding: 10px;
}

nav {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
}
nav > * {
    /* flex-grow: 1; */
    margin: 0 20px;
}

@media (prefers-color-scheme: dark) {
    .leo-icon {
        background-color: var(--color-background-mute);
    }
}

</style>