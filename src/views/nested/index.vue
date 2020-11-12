<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="serchList">
        <div class="showBtn">
          <el-button icon="el-icon-plus" size="small" @click="$router.push(`/nested/menu1`)">新增</el-button>
        </div>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 60%" border>
        <el-table-column type="index" width="50" label="序号" align="center">
        </el-table-column>
        <el-table-column prop="name" label="乡、镇" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="村" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="组" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="设置" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" style="color: red" @click="open"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    open() {
      this.$confirm("此操作将永久删除该地址, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 20px;
    background-color: #fff;
    height: 100vh;
  }
  &-text {
    margin-left: 50px;
  }
}
::v-deep {
  .el-table {
    margin-top: 20px;
  }
  .el-table th {
    background-color: rgb(232, 232, 232);
  }
}
</style>
