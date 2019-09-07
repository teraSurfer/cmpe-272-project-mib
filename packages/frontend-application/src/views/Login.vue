<template>
    <b-container class="d-flex justify-content-center h-100 align-items-center">
        <b-card class="border-0 shadow login-card" header-bg-variant="primary">
            <template v-slot:header>
                <h5 class="mb-0 text-white text-center">SSO - User Login</h5>
            </template>
            <b-form>
                <b-form-group 
                    label="Email address:">
                    <b-form-input type="email" required placeholder="Enter Email"></b-form-input>
                </b-form-group>
                <b-form-group 
                    label="Password:">
                    <b-form-input type="password" required placeholder="Enter Password"></b-form-input>
                </b-form-group>
                <div class="text-center">
                    <b-btn variant="outline-primary" size="sm" class="btn-block">Sign In</b-btn>
                    <b-btn variant="primary" size="sm" class="btn-block">Sign In with facebook</b-btn>
                    <b-btn variant="danger" size="sm" class="btn-block">Sign In with Google</b-btn>
                </div>
            </b-form>
        </b-card>
    </b-container>
</template>

<style lang="scss" scoped>
    .login-card{
        width: 350px;
    }
</style>