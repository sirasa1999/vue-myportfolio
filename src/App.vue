<template>
  <div class="flex items-center">
  <NavigatorPage/>
  <OverviewPage/>
</div>
</template>

<script>
import NavigatorPage from './components/NavigatorPage.vue'
import OverviewPage from './components/OverviewPage.vue'

export default {
  name: 'App',
  components: {
    NavigatorPage,
    OverviewPage
  }
}
</script>

<style>
</style>
