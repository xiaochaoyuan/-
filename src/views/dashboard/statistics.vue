<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="serchList">
        <div class="showBtn">
          数据总览
          <el-select
            v-model="value"
            placeholder="请选择数据年份"
            size="small"
            style="margin: -17px 50px 0px"
            :popper-append-to-body="false"
            popper-class="selectStyle"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-button size="small">展示金额</el-button>
        </div>
        <div class="btns">
          <el-button type="info" icon="el-icon-download" size="small"
            >导出excel</el-button
          >
        </div>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{ background: '#fff' }"
      >
        <el-table-column prop="date" label="地区" width="80" align="center">
        </el-table-column>
        <el-table-column prop="date" label="总数" width="80" align="center">
        </el-table-column>
        <!-- 家庭人员经纪类型 -->
        <el-table-column label="家庭人员经纪类型" align="center">
          <el-table-column prop="name" label="建档立卡贫困户" align="center">
          </el-table-column>
          <el-table-column label="非建档立卡贫困户" prop="name" align="center">
          </el-table-column>
          <el-table-column
            prop="province"
            label="低保户"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="city"
            label="分散供养人员"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="address" label="残疾" width="80">
          </el-table-column>
          <el-table-column prop="zip" label="一般户" width="80" align="center">
          </el-table-column>
        </el-table-column>
        <!-- 改造方式 -->
        <el-table-column label="改造方式" align="center"
          >>
          <el-table-column prop="name" label="拆" width="80" align="center">
          </el-table-column>
          <el-table-column label="建" prop="name" width="80" align="center">
          </el-table-column>
          <el-table-column prop="province" label="改" width="80" align="center">
          </el-table-column>
          <el-table-column prop="city" label="保" width="80" align="center">
          </el-table-column>
          <el-table-column prop="address" label="两不愁三保障" align="center">
          </el-table-column>
          <el-table-column prop="zip" label="住房功能完善" align="center">
          </el-table-column>
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
      value: "",
      tableData: [
        {
          date: "梓潼县",
          name: "389",
          province: "389",
          city: "389",
          address: "44",
          zip: 66,
        },
        {
          date: "梓潼县",
          name: "389",
          province: "389",
          city: "389",
          address: "44",
          zip: 66,
        },
        {
          date: "梓潼县",
          name: "389",
          province: "389",
          city: "389",
          address: "44",
          zip: 66,
        },
        {
          date: "梓潼县",
          name: "389",
          province: "389",
          city: "389",
          address: "44",
          zip: 66,
        },
        {
          date: "梓潼县",
          name: "389",
          province: "389",
          city: "389",
          address: "44",
          zip: 66,
        },
      ],
    };
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
  }
  .btns {
    float: right;
  }
}
</style>
