 <template>
     <div class="container" :class="anClass">
         <slot></slot>
     </div>
 </template>

 <script>
     export default {
         props: {
             anClass: String
         }
     }
 </script>

 <style lang="scss">
     .container {
         max-width: 1036px;
         margin: 0 auto;
         width: 96%;
     }

     @media (max-width: 1200px) {
         .container_def {}
     }
 </style>