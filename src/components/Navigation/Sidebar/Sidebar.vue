<template>
    <div class="SideBar-Prime" :style="{ width: sidebarWidth }">
        <h1>
            <span v-if="collapsed">
                <div>C</div>
                <div>T</div>
            </span>
            <span v-else>Camryn Truban</span>
        <br/>
        </h1>
        <span v-if="!collapsed">
            Full-Stack Software Engineer
        </span>
        <SidebarLink to="/" icon="fas fa-home" name="Home"/>
        <SidebarLink to="/pj" icon="fas fa-database" name="Projects"/>
        <SidebarLink to="/wh" icon="fas fa-handshake" name="Work History"/>
        <SidebarLink to="/edu" icon="fas fa-school" name="Education"/>
        <SidebarLink to="/skl" icon="fas fa-home" name="Skills"/>
        <SidebarLink to="/hby" icon="fas fa-robot" name="Hobbies"/>
        <span class="collapse-icon" @click="toggleSidebar" :class="{ 'rotate-180': collapsed }">
            <font-awesome-icon icon="fas fa-angles-left" />
        </span>
    </div>
</template>
<script>
import { collapsed, toggleSidebar, sidebarWidth } from './state'
import SidebarLink from './SidebarLink.vue';

export default {
    name: 'SideBar',
    components: {
        SidebarLink
    },
    props: {},
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth };
    }
}
</script>
<style scoped>


.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>