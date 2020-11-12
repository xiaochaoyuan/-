<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="serchList">
        <div class="showBtn">
          <i class="el-icon-s-order"></i> 农户危改信息录入
        </div>
        <div class="btns">
          <el-button type="primary" size="small">保存</el-button>
          <el-button size="small" type="warning" @click="$router.go(-1)"
            >返回</el-button
          >
          <el-button size="small" type="success">保存,录入下一个</el-button>
        </div>
      </div>
      <!-- 表格信息 -->
      <table
        border="1"
        cellpadding="0"
        cellspacing="0"
        style="
          border-color: #eee;
          width: 100%;
          text-align: center;
          font-size: 12px;
        "
      >
        <tr height="30px">
          <td rowspan="3" width="120px;">农村基本信息</td>
          <td width="130px;">地区</td>
          <td colspan="4"></td>
          <td></td>
        </tr>
        <tr height="30px">
          <td>户主姓名</td>
          <td width="150px;">
            <el-input
              v-model="input"
              size="mini"
              placeholder="请输入姓名"
              style="width: 95%;"
            ></el-input>
          </td>
          <td width="150px;">身份证号</td>
          <td width="200px;">
            <el-input
              v-model="input"
              size="mini"
              placeholder="请输入身份证号"
              style="width: 95%;"
            ></el-input>
          </td>
          <td width="150px;">民族</td>
          <td>
            <el-select
              v-model="minzu"
              placeholder="请选择民族"
              size="mini"
              style="width: 95%;"
            >
              <el-option
                v-for="(item,index) in minzuData"
                :key="index"
                :label="item.label"
                :value="item.label"
              >
              </el-option>
            </el-select>
          </td>
        </tr>
        <tr height="30px">
          <td>家庭人数</td>
          <td width="150px;">
            <el-input
              v-model="input"
              size="mini"
              type="number"
              placeholder="请输入人数"
             style="width: 95%;"
            ></el-input>
          </td>
          <td>联系方式</td>
          <td width="200px;">
            <el-input
              v-model="input"
              size="mini"
              type="number"
              placeholder="请输入联系方式"
             style="width: 95%;"
            ></el-input>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr height="30px">
          <td rowspan="2">农户情况</td>
          <td>农户家庭经济类型</td>
          <td width="150px;">
            <el-select
              v-model="value"
              placeholder="请选择"
              size="mini"
              style="width: 95%;"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>是否唯一住房</td>
          <td align="left" style="padding-left:10px;">
            <el-radio-group v-model="radio">
              <el-radio :label="3">是</el-radio>
              <el-radio :label="6">否</el-radio>
            </el-radio-group>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr height="30px">
          <td>旧住房年代</td>
          <td width="150px;">
            <el-select
              v-model="value1"
              placeholder="请选择"
              size="mini"
               style="width: 95%;"
            >
              <el-option
                v-for="item in optionss"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td>旧住房建筑面积</td>
          <td>
            <el-input
              v-model="input"
              size="mini"
              type="number"
              placeholder="请输入建筑面积"
               style="width: 80%;"
            ></el-input>
            (平方米)
          </td>
          <td>旧住房结构类型</td>
          <td width="150px;">
            <el-select
              v-model="value2"
              placeholder="请选择结构类型"
              size="mini"
              style="width: 95%"
            >
              <el-option
                v-for="item in optionsss"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
        </tr>
      </table>
      <!-- 改造后 -->
      <table
        border="1"
        cellpadding="0"
        cellspacing="0"
        style="
          border-color: #eee;
          width: 100%;
          text-align: center;
          font-size: 12px;
          margin-top: 10px;
        "
      >
        <tr height="30px">
          <td width="120px;">改造后房屋结构类型</td>
          <td width="150px;">
            <el-select
              v-model="value2"
              placeholder="请选择结构类型"
              size="mini"
             style="width: 95%"
            >
              <el-option
                v-for="item in optionsss"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td width="120px;">改造后房屋产权</td>
          <td width="150px;">
            <el-select
              v-model="chuanquan"
              placeholder="请选择产权"
              size="mini"
             style="width: 95%"
            >
              <el-option
                v-for="item in chanquanData"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td width="300px;">
            建设方式  
            <el-select
              v-model="jianshe"
              placeholder="请选择建设方式"
              size="mini"
            style="width: 60%"
            >
              <el-option
                v-for="item in jiansheData"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>

          <td width="150px;">改造后房屋面积</td>
          <td>
            <el-input
              v-model="input"
              size="mini"
              type="number"
              placeholder="请输入面积"
              style="width: 80%"
            ></el-input>
            (平方米)
          </td>
        </tr>
        <tr height="30px">
          <td>改造方式</td>
          <td width="150px;" colspan="6" align="left" style="padding-left: 4px">
            <el-select
              v-model="gaizao"
              placeholder="请选择改造方式"
              size="mini"
             style="width: 140px;"
            >
              <el-option
                v-for="item in gaizaoData"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-button size="mini" style="margin-left: 10px" type="primary"
              >新增</el-button
            >
            <el-button size="mini">保存</el-button>
          </td>
        </tr>
        <tr height="30px">
          <td>进度情况</td>
          <td>列入计划年度</td>
          <td>
            <el-date-picker
              v-model="niandu"
              type="year"
              placeholder="选择年"
              size="mini"
              style="width: 95%"
            >
            </el-date-picker>
          </td>
          <td>批准日期</td>
          <td>
            <el-date-picker
              v-model="date1"
              type="date"
              placeholder="选择日期"
              size="mini"
              style="width: 95%"
            >
            </el-date-picker>
          </td>
          <td>竣工时间</td>
          <td>
            <el-date-picker
              v-model="date1"
              type="date"
              placeholder="选择日期"
              size="mini"
              style="width: 95%"
            >
            </el-date-picker>
          </td>
        </tr>
        <tr height="30px">
          <td>资金情况</td>
          <td>享受补助资金类型</td>
          <td width="150px;">
            <el-select
              v-model="zijin"
              placeholder="请选择资金类型"
              size="mini"
              style="width: 95%"
            >
              <el-option
                v-for="item in zijinData"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td width="150px;">
            <el-select
              v-model="leixing"
              placeholder="请选择资金类型"
              size="mini"
              style="width: 95%"
            >
              <el-option
                v-for="item in leixingData"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
          <td colspan="2">补助金额</td>
          <td>
            <el-input
              v-model="input"
              size="mini"
              type="number"
              placeholder="请输入补助金额"
              style="width: 80%"
            ></el-input>
            (元)
          </td>
        </tr>
        <tr height="30px">
          <td>照片情况</td>
          <td>改造前</td>
          <td>3</td>
          <td>改造中</td>
          <td>5</td>
          <td>改造后</td>
          <td>7</td>
        </tr>
        <tr height="30px">
          <td>资金拨款凭证</td>
          <td colspan="6">2</td>
        </tr>
        <tr height="30px">
          <td>备注</td>
          <td colspan="6" align="left" style="padding: 10px 10px 0">
            <el-input
              type="textarea"
              style="width: 800px"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入内容"
              v-model="textarea2"
            >
            </el-input>
            <div style="color: rgba(242, 6, 6, 1)">
              注：对于跨年度重复享受补助的危房改造农户，需填写该农户重复享受补助的原因
            </div>
          </td>
        </tr>
      </table>
      <table
        border="1"
        cellpadding="0"
        cellspacing="0"
        style="
          border-color: #eee;
          width: 100%;
          text-align: center;
          font-size: 12px;
          margin-top: 10px;
        "
      >
        <tr height="30px">
          <td width="120px">电子材料名称</td>
          <td>已上传材料</td>
          <td width="120px">操作</td>
        </tr>
        <tr height="30px">
          <td width="120px">基本信息表</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
        <tr height="30px">
          <td width="120px">申请书</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
        <tr height="30px">
          <td width="120px">户主身份证复印件</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
        <tr height="30px">
          <td width="120px">户口簿复印件</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
        <tr height="30px">
          <td width="120px">改造对象申报审批表</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
        <tr height="30px">
          <td width="120px">农村危房改造协议</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
        <tr height="30px">
          <td width="120px">资质、资格复印件</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
        <tr height="30px">
          <td width="120px">会议记录</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
        <tr height="30px">
          <td width="120px">改造竣工验收表</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
        <tr height="30px">
          <td width="120px">镇村两级公示证明</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
        <tr height="30px">
          <td width="120px">其他资料</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
        <tr height="30px">
          <td width="120px">电子材料名称</td>
          <td>2</td>
          <td width="120px">3</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { dataList } from "../../assets/js/choise";
export default {
  name: "Dashboard",
  data() {
    return {
      input: "",
      textarea2: "",
      //民族
      minzu:"",
      minzuData:dataList,
      options: [
        {
          value: "选项1",
          label: "建档立卡贫困户",
        },
        {
          value: "选项2",
          label: "非建档立卡贫困户",
        },
        {
          value: "选项3",
          label: "低保户",
        },
        {
          value: "选项4",
          label: "残疾户",
        },
        {
          value: "选项5",
          label: "分散供养人员(五保)",
        },
        {
          value: "选项6",
          label: "一般户",
        },
      ],
      value: "",
      optionss: [
        {
          value: "选项1",
          label: "80年代",
        },
        {
          value: "选项2",
          label: "90年代",
        },
        {
          value: "选项3",
          label: "20年代",
        },
      ],
      value1: "",
      optionsss: [
        {
          value: "选项1",
          label: "土坯",
        },
        {
          value: "选项2",
          label: "砖木(屋顶为木架)",
        },
        {
          value: "选项3",
          label: "砖混(屋顶为水泥浇筑)",
        },
        {
          value: "选项4",
          label: "其他",
        },
      ],

      value2: "",
      radio: 6,
      chuanquan: "",
      chanquanData: [
        {
          value: "选项1",
          label: "归农户",
        },
        {
          value: "选项2",
          label: "归村集体",
        },
        {
          value: "选项4",
          label: "其他",
        },
      ],
      ///---------
      jianshe: "",
      jiansheData: [
        {
          value: "选项1",
          label: "自建",
        },
        {
          value: "选项2",
          label: "统建",
        },
      ],
      //=-------------
      gaizao: "",
      gaizaoData: [
        {
          value: "1",
          label: "拆除",
        },
        {
          value: "2",
          label: "投靠亲友",
        },
        {
          value: "3",
          label: "新建",
        },
        {
          value: "4",
          label: "改(维修加固)",
        },
        {
          value: "5",
          label: "保(修缮)",
        },
        {
          value: "6",
          label: "购买",
        },
        {
          value: "7",
          label: "农房试点建设(新夯土)",
        },
        {
          value: "8",
          label: "两不愁三保障",
        },
        {
          value: "9",
          label: "住房功能完善",
        },
      ],
      //---------------niandu
      niandu: "",
      //----------时间
      date1: "",
      //资金类型
      zijin: "",
      zijinData: [
        {
          value: "1",
          label: "中央级补助",
        },
        {
          value: "2",
          label: "县级财政补助",
        },
      ],
      leixing: "",
      leixingData: [
        {
          value: "1",
          label: "危房改造补助",
        },
        {
          value: "2",
          label: "土坯改造(拆)",
        },
        {
          value: "3",
          label: "土坯改造(建)",
        },
        {
          value: "4",
          label: "土坯改造(改)",
        },
        {
          value: "5",
          label: "土坯改造(保)",
        },
        {
          value: "6",
          label: "两布筹三保障补助资金",
        },
        {
          value: "7",
          label: "住房功能完善补助资金",
        },
        {
          value: "8",
          label: "农房试点建设补助资金",
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
    // height: 35px;
    line-height: 35px;
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
