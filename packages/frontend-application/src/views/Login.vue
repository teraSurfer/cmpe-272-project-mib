<template>
    <b-container class="d-flex justify-content-center h-100 align-items-center">
        <b-card class="border-0 shadow login-card" header-bg-variant="primary">
            <template v-slot:header>
                <h5 class="mb-0 text-white text-center">SSO - User Login</h5>
            </template>
            <b-form>
                <b-form-group 
                    label="Email address:">
                    <b-form-input size="sm" type="email" required placeholder="Enter Email"></b-form-input>
                </b-form-group>
                <b-form-group 
                    label="Password:">
                    <b-form-input size="sm" type="password" required placeholder="Enter Password"></b-form-input>
                </b-form-group>
                <div class="text-center">
                    <b-btn variant="outline-primary" size="sm" class="btn-block">Sign In</b-btn>
                    <b-btn variant="primary" size="sm" class="btn-block">Create an account</b-btn>
                    <b-btn variant="light" size="sm" class="btn-block shadow-sm"> <img src="@/assets/images/logo-facebook.svg" width="18" alt="facebook"> Sign in with Facebook</b-btn>
                    <b-btn variant="light" size="sm" class="btn-block shadow-sm"><img src="@/assets/images/google.svg" width="18" alt="google"> Sign in with Google</b-btn>
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