<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="serchList">
        <el-popover width="700" v-model="visible" placement="bottom-start">
          <div style="margin-top: 20px; margin-left: 20px; font-size: 12px">
            地址情况
            <el-cascader
              v-model="value"
              :options="options"
              size="small"
            ></el-cascader>
          </div>
          <div style="margin: 30px 0; margin-left: 20px; font-size: 12px">
            农户情况
            <el-input
              v-model="input"
              placeholder="请输入姓名"
              size="small"
            ></el-input
            ><el-input
              size="small"
              v-model="input"
              placeholder="请输入身份证号码"
              style="width: 150px"
            ></el-input
            ><el-input
              v-model="input"
              placeholder="请输入内容"
              size="small"
            ></el-input>
          </div>
          <div style="margin-left: 20px; font-size: 12px">
            改造情况
            <el-select
              v-model="value1"
              multiple
              placeholder="请选择改造方式"
              size="small"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select
              v-model="value1"
              multiple
              placeholder="请选择改造日期"
              size="small"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select
              v-model="value1"
              multiple
              placeholder="请选择资金类型"
              size="small"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div style="text-align: left; margin: 20px 90px">
            <el-button size="mini" @click="visible = false">搜索</el-button>
            <el-button size="mini">清空</el-button>
            <el-button size="mini" @click="visible = false">关闭</el-button>
          </div>
          <div slot="reference" class="showBtn">
            <i class="iconfont icon-icon-"></i>
            条件筛选
          </div>
        </el-popover>

        <div class="btns">
          <el-button
            type="primary"
            icon="el-icon-edit-outline"
            size="small"
            @click="$router.push(`/addList`)"
            >新增</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="small"
            >删除</el-button
          >
          <el-button type="info" icon="el-icon-download" size="small"
            >导出</el-button
          >
        </div>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center" fixed>
        </el-table-column>
        <el-table-column label="乡、镇" width="90" align="center" fixed>
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="组" width="90" align="center" fixed>
        </el-table-column>
        <el-table-column label="姓名" width="90" align="center" fixed>
          <template slot-scope="scope">
            <span style="color: #409eff" @click="$router.push(`/detail`)">{{
              scope.row.name
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="身份证"
          width="120"
          align="center"
          fixed
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="家庭人数"
          width="120"
          align="center"
          fixed
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="民族"
          width="120"
          align="center"
          fixed
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="农户贫困类型"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="是否贫困残疾人家庭"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="上年家庭纯收入"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="旧住房建造年代"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="旧住房建造年代"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="旧住房建造年代"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="address" label="操作" align="center">
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
      value: "",
      input: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: [],
      visible: false,
      tableData: [
        {
          date: "王小虎",
          name: "王小虎",
          address: "上海市普陀",
        },
        {
          date: "王小虎",
          name: "王小虎",
          address: "上海市普陀",
        },
        {
          date: "王小虎",
          name: "王小虎",
          address: "上海市普陀",
        },
        {
          date: "王小虎",
          name: "王小虎",
          address: "上海市普陀",
        },
        {
          date: "王小虎",
          name: "王小虎",
          address: "上海市普陀",
        },
        {
          date: "王小虎",
          name: "王小虎",
          address: "上海市普陀",
        },
        {
          date: "王小虎",
          name: "王小虎",
          address: "上海市普陀",
        },
      ],
    };
  },
  methods: {
    handleSelectionChange() {},
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
    line-height: 46px;
  }
}
.serchList {
  margin: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  .showBtn {
    float: left;
    cursor: pointer;
  }
  .btns {
    float: right;
  }
}
.el-cascader {
  margin-left: 20px;
}
.el-input {
  width: 120px;
  margin-left: 20px;
}
.el-select {
  width: 150px;
  margin-left: 20px;
}
</style>
