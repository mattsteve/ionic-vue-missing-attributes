<template>
    <ion-page>
        <ion-content style="--background: transparent;">
            <div style="height: 50px" />
            <ion-button type="submit" color="primary" expand="block" fill="outline" class="ion-no-margin ion-margin-vertical" data-test-ref="login-button">
                Button Inside Router
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';

@Options({
    name: 'login-view'
})
export default class LoginView extends Vue {

}
</script>
