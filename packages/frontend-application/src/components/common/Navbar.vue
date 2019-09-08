<template>
    <b-navbar toggleable="md" variant="dark" type="dark" class="shadow" fixed="top">
        <b-container>
            <b-navbar-brand to="/" class="nunito-font">
                Project
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown class="text-center" right no-caret>
                        <template v-slot:button-content>
                            <fa :icon="['fas', 'cog']"/>
                        </template>
                        <b-dropdown-item>
                            Settings
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown class="text-center" right no-caret>
                        <template v-slot:button-content>
                            <fa :icon="['fas', 'user']"/>
                        </template>
                        <b-dropdown-item to="/login">
                            Sign In
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .nunito-font{
        font-family: 'Nunito', sans-serif;
    }
</style>