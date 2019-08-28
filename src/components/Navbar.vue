<template>
    <nav>
        <v-app-bar app clipped-left class="px-4">
            <v-toolbar-title class="text-uppercase px-4">
                <v-icon class="grey--text">mdi-cloud</v-icon>
                <span class="mx-1 text-capitalize">Cloudy</span>
            </v-toolbar-title>
            <v-spacer />
            <!-- <v-list v-if="getUser !== null">
                <v-list-item v-for="{icon, text, route} in links" :key="text" router :to="route">
                    <v-list-item-action>
                        <v-icon>{{icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list> -->
            <template v-if="getUser !== null">
                <v-btn text v-for="{icon, text, route} in links" :key="text" router :to="route">
                    <v-icon right class="grey--text">{{ icon }}</v-icon>
                    <span class="mx-2">{{ text }}</span>
                </v-btn>
            </template>

            <v-btn text @click="dialog = true" v-if="getUser === null">
                <v-icon right class="grey--text">fa-user-circle</v-icon>
                <span class="mx-3">Sign in</span>
            </v-btn>
        </v-app-bar>

        <v-dialog v-model="dialog" max-width="600px">
            <v-card v-if="form">
                <v-card-title>
                <span class="headline mt-3 ml-3">Sign In</span>
                </v-card-title>
                <v-form ref="signIn" v-model="validSignIn" lazy-validation>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Email" type="email" :rules="signInRules" required v-model="email"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Password" type="password" :rules="signInRules" required v-model="password"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <a @click="changeForm">Don't have account? Sign up now!</a>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions class="pb-3 pr-3">
                    <div class="flex-grow-1"></div>
                    <v-btn color="blue darken-1" text @click="validateSignin" :disabled="!validSignIn">Sign In</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
            <v-card v-else>
                <v-card-title>
                <span class="headline mt-3 ml-3">Sign Up</span>
                </v-card-title>
                <v-form ref="signUp" v-model="validSignUp" lazy-validation>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Email" type="email" :rules="emailRules" required v-model="email"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Password" type="password" :rules="passwordRules" required v-model="password"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Confirm Password" type="password" :rules="[comparePasswords]" required v-model="confirmPassword"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions class="pb-3 pr-3">
                    <div class="flex-grow-1"></div>
                    <v-btn color="blue darken-1" text @click="validateSignup" :disabled="!validSignUp">Sign up</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </nav>
</template>

<script>
export default {
    data: () => ({
        validSignIn: true,
        validSignUp: true,
        drawer: false,
        dialog: false,
        form: true,
        links: [
            {icon: 'fa-sun', text: 'Forecast', route: '/'},
            {icon: 'fa-chart-line', text: 'Dashboard', route: '/dashboard'},
        ],
        email: '',
        password: '',
        confirmPassword: '',
        emailRules: [
            value => !!value || 'Required.',
            value => (value || '').length <= 30 || 'Max 30 characters',
            value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },
        ],
        passwordRules: [
            value => !!value || 'Required',
            value => (value || '').length >= 8 || 'Min 8 characters',
            value => (value || '').length <= 20 || 'Max 20 characters',
            value => {
                const pattern = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
                return pattern.test(value) || 'Password too weak (At least 1 uppercase letter and at least 1 number or special character)'
            }
        ],
        signInRules: [
            value => !!value || 'Required',
        ]
    }),
    methods: {
        async validateSignin() {
            if (this.$refs.signIn.validate()) {
                await this.$store.dispatch('signinUser', { email: this.email, password: this.password })
                this.dialog = false;
            }
        },
        async validateSignup() {
            if (this.$refs.signUp.validate()) {
                await this.$store.dispatch('createUser', { email: this.email, password: this.password })
                this.dialog = false;
                this.form = true
            }
        },
        changeForm() {
            this.form = false
        }
    },
    computed: {
        comparePasswords() {
            return this.password !== this.confirmPassword ? 'Passwords don\'t match' : true
        },
        getUser() {
            return this.$store.state.user;
        },
    },
    beforeUpdate() {
        if (this.dialog !== true) {
            this.form = true;
        }
    }
};
</script>