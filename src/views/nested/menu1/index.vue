<template>
  <div class="box">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input
          size="small"
          v-model="form.name"
          style="width: 430px"
          placeholder="请输入名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="行政区域">
        <el-select
          v-model="form.region"
          placeholder="请选择乡"
          size="small"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <el-select
          v-model="form.region"
          size="small"
          placeholder="请选择村"
          style="margin-left: 20px"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <div class="tips">
          不选择行政区域默认添加乡/镇，只选择乡镇添加村，选择乡/镇和村添加组
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="small"
          >保存</el-button
        >
        <el-button size="small"  @click="$router.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped lang="scss">
.box{
  height: 100vh;
  background-color: #fff;
}
.el-form {
  padding: 40px;
  
}
::v-deep {
  .el-form-item__label {
    font-size: 12px;
  }
  .el-select-dropdown__item {
    font-size: 12px;
  }
}
.tips{
  color:red;
}
</style>
