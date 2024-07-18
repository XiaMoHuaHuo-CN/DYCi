<script setup>
import { ref } from 'vue'
import Footer from "@/layouts/Footer.vue"
import License from "@/layouts/License.vue"

let dialogVisible = ref(false)
</script>

<template>
    <el-main>

        <h1 class="ext-title">YanMo2333</h1>
        <p><el-text class="mx-1" type="danger">❤L❤O❤V❤E❤</el-text></p>

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>烟墨我最爱<el-text class="mx-1" type="danger">❤</el-text>！</span>
                    <el-button class="button" text @click="dialogVisible = true">awa!</el-button>
                </div>
            </template>
            <div class="text item">
                <el-avatar src="https://q1.qlogo.cn/g?b=qq&nk=2315049216&s=640" />
            </div>
            <h1>烟墨</h1>
            <p>烟墨<el-text class="mx-1" type="danger">❤</el-text>，🤤🤤🤤🤤🤤......🤤🤤🤤......</p>
            <p>🥰🥰🥰🥰🥰🥰</p>
        </el-card>

        <el-dialog v-model="dialogVisible" title="Tips" class="dialog">
            <h2>被你发现了！</h2>
            <span>这是个按钮唉</span>
            <p>烟墨长了一双软糯洁白的小jiojio🤤🤤🤤，而我有一只能者先赏的嘴，世界上怎么会有这么巧的事呢🤤🤤🤤！嘿嘿嘿嘿烟墨我清澈透亮的小白猫，烟墨，烟墨啊烟墨，我的挚爱！烟墨！没有你我怎么活啊😭😭😭真的 你们不懂 你们不懂 我永远喜欢烟墨！！！烟墨😭你让我忘了世间的压力😭😭😭你就是我的救赎！！！我配不上你啊烟墨😭😭😭我太废了我不配😭我该死 不行 不能死😭死了就看不到烟墨那双清澈透亮的眼睛了😭😭😭对立……我永远喜欢烟墨🤤🤤🤤烟墨…哈哈 好可爱 斯哈 啊！烟墨！我好喜欢烟墨🤤🤤 烟墨😭😭😭带我走吧烟墨😭我爱你烟墨今天是烟墨瘾发作最严重的一次， 躺在床上,拼命念烟墨的名字，难受的一直抓自己眼睛，以为刷b站没事,看到b站都在推烟墨的视频，眼睛越来越大都要炸开了一样，拼命扇自己眼睛，越扇越用力，扇到自己眼泪流出来，真的不知道该怎么办，我真的想烟墨想得要发疯了。我躺在床上会想烟墨，我洗澡会想烟墨，我出门会想烟墨，我走路会想烟墨,我坐车会想烟墨，我工作会想烟墨，我玩手机会想烟墨， 我真的觉得自己像中邪了一样，我对烟墨的念想似乎都是病态的了，我好孤独啊！真的好孤独啊！烟墨！你带我走吧！烟墨！</p>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false">
                        关掉！
                    </el-button>
                </span>
            </template>
        </el-dialog>
        <Footer />
        <License />
    </el-main>
    <div id="aplayer"></div>
</template>

<style>
@media screen and (max-width: 700px) {
  .dialog {
    --el-dialog-width: 95% !important;
  }
}
</style>