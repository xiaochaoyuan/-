<template>
  <div class="dashboard-container">
    <div class="dashboard-text"></div>
    <table
      border="1"
      cellpadding="0"
      cellspacing="0"
      style="
        border-color: #eee;
        width: 60%;
        text-align: center;
        font-size: 12px;
        margin-left: 100px;
      "
    >
      <tr height="50px">
        <td width="200px">姓名</td>
        <td width="200px">2</td>
        <td width="200px">身份证</td>
        <td width="300px">4</td>
      </tr>
      <tr height="50px">
        <td width="200px">家庭地址</td>
        <td width="200px">2</td>
        <td width="200px">身份证</td>
        <td width="300px">4</td>
      </tr>
      <tr height="50px">
        <td width="200px">改造方式</td>
        <td width="200px" colspan="3">2</td>
      </tr>
      <tr height="50px">
        <td width="200px">联系方式</td>
        <td width="200px">2</td>
        <td width="200px">日期</td>
        <td width="300px">4</td>
      </tr>
      <tr height="50px">
        <td width="200px">备注</td>
        <td width="200px" colspan="3">备注</td>
      </tr>
    </table>
    <!-- 图片展示 -->
    <div class="imgBox">
      <el-row>
        <el-col :span="9"
          >身份证:
          <img src="../../assets/404_images/3.jpg" alt="" class="imgStyle" />
        </el-col>
        <el-col :span="12"
          >户口簿:
          <img src="../../assets/404_images/3.jpg" alt="" class="imgStyle" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="fujian"
          >附件:
          <img src="../../assets/404_images/3.jpg" alt="" class="imgStyle" />
        </el-col>
      </el-row>
    </div>
    <!-- 返回按钮 -->
    <div class="btns">
      <el-button size="medium" @click="$router.go(-1)">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 20px;
    background-color: #fff;
  }
  &-text {
    line-height: 50px;
    padding: 20px 50px;
  }
}
.serchList {
  margin: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  .showBtn {
    float: left;
  }
  .btns {
    float: right;
  }
}
.imgBox {
  font-size: 13px;
  width: 80%;
  margin: 40px 100px;
  .imgStyle {
    width: 184px;
    height: 120px;
    vertical-align: top;
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
  }
}
.fujian {
  margin-left: 11px;
  margin-top: 30px;
}
.btns{
    margin-left: 100px;
}
</style>
