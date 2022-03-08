<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h1>contact</h1>
      <peta />
    </div>
    <div>
      <formContact />
    </div>
  </div>
  </div>
</template>

<script>
import peta from '../components/peta.vue'
import FormContact from '../components/formContact.vue'
  export default {
    components : {
        peta,
        FormContact,
    }
  }  

</script>