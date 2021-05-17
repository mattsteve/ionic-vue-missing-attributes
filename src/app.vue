<template>
    <ion-app id="app">
        <ion-button type="submit" color="primary" expand="block" fill="outline" class="ion-no-margin" data-test-ref="login-button">
            Button Outside Router
        </ion-button>
        <ion-router-outlet />
    </ion-app>
</template>

<script lang="ts">
import { Options, Vue, Watch, mixins } from 'vue-property-decorator';
export default class App extends Vue {

}
</script>
