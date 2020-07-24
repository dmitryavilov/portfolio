<template>
    <div class="title-block title-block_top">
        <div class="title-block__rectangle">
            <div class="title-block__rectangle-number">{{number}}</div>
        </div>
        <div class="title-block__text-wrapper">
            <h2 class="title-block__text"><slot></slot></h2>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        number: String
    }
}
</script>

<style lang="scss" scoped>
    $brown: #402A17;

    .title-block {
        display: flex;
        align-items: flex-end;

        &__rectangle {
            width: 55px;
            height: 55px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $brown;

            &-number {
                font-family: 'Montserrat' sans-serif;
                font-size: 30px;
                font-weight: 700;
                color: white;
                letter-spacing: 0.1em;
            }
        }

        &__text {
            font-size: 30px;
            font-family: 'Montserrat' sans-serif;
            font-weight: 500;
            color: $brown;
            letter-spacing: -0.01em;

            &-wrapper{
                height: 46.43px;
                padding-left: 25px;
                display: flex;
                align-items: center;
                border-bottom: 5px solid $brown;
            }
        }

        &_top {
            margin-top: 60px;
        }
    }
</style>