<template>
  <div class="title-block-two title-block-two_top">
      <h2 class="title-block-two__title"><slot></slot></h2>
  </div>
  <!-- /.title-block-two -->
</template>

<style lang="scss" scoped>
    .title-block-two {
        width: 100%;
        display: flex;
        justify-content: center;

        &_top {
            padding-top: 40px;
        }

        &__title {
            color: #ffffff;
            font-family: 'Montserrat' sans-serif;
            font-weight: 500;
            font-size: 40px;
            letter-spacing: -0.03em;
        }
    }
</style>