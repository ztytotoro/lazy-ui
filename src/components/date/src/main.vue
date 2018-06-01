<template>
    <el-date-picker class="lz-date" :type="type" placeholder :value="value" @change="$emit('input', $event)" style="width:200px" :value-format="format" :disabled="disabled"></el-date-picker>
</template>

<script>
    import {DatePicker} from "element-ui";
    export default {
        name: "LzDate",
        props: {
            value: String,
            type: {
                type: String,
                default: "date"
            },
            format: {
                type: String,
                default: "yyyy-MM-dd HH:mm:ss"
            }
        },

        watch: {
            data: function () {
                if (this.data) {
                    if (this.data.includes("T")) {
                        this.thisData = this.data.replace("T", " ")
                    }
                }
            }
        },
    }
</script>

<style lang="less">
    
</style>