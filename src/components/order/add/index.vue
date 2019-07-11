<template>
  <div class="container">
    <el-form label-width="155px">
      <el-form-item label="文档编号">
        <el-input type="text" size="small" v-model="documentNumber"></el-input>
      </el-form-item>
      <el-form-item label="项目名称">
        <el-input type="text" size="small" v-model="projectName"></el-input>
      </el-form-item>
      <el-form-item label="下单日期">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          size="small"
          style="width:100%"
          v-model="orderDate"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="完成日期">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          size="small"
          style="width:100%"
          v-model="completeDate"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="项目节点总负责人">
        <el-input type="text" size="small" v-model="projectPrincipal"></el-input>
      </el-form-item>
      <el-form-item label="项目策划人">
        <el-input type="text" size="small" v-model="projectPlanner"></el-input>
      </el-form-item>
      <el-form-item label="业务员">
        <el-input type="text" size="small" v-model="salesman"></el-input>
      </el-form-item>
      <el-form-item label="项目地址" style="color:red">
        <el-input type="text" size="small" v-model="projectAddress"></el-input>
      </el-form-item>
      <h3 style="text-align:center">模型制作内容（模型范围示意图）</h3>

      <el-form-item label="项目沙盘："></el-form-item>
      <el-form-item>
        模型数量
        <br />
        <el-input-number v-model="projectSandTable.number" :min="0" size="small"></el-input-number>
      </el-form-item>
      <el-form-item>
        模型比例
        <br />
        <el-input
          type="text"
          size="small"
          style="width:48%;margin-right:4%;"
          placeholder="景观"
          v-model="projectSandTable.landscape"
        ></el-input>
        <el-input
          type="text"
          size="small"
          style="width:48%;"
          placeholder="建筑"
          v-model="projectSandTable.building"
        ></el-input>
      </el-form-item>
      <el-form-item>
        地盘规格
        <br />
        <el-input
          type="text"
          size="small"
          style="width:48%;margin-right:4%;"
          placeholder="外尺寸"
          v-model="projectSandTable.externalDimensions"
        ></el-input>
        <el-input
          type="text"
          size="small"
          style="width:48%;"
          placeholder="内尺寸"
          v-model="projectSandTable.innerDimension"
        ></el-input>
      </el-form-item>

      <el-form-item label="升降设备："></el-form-item>
      <el-form-item>
        模型数量
        <br />
        <el-input-number v-model="liftingEquipment.number" :min="0" size="small"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="liftingEquipment.type">
          <el-radio label="直升"></el-radio>
          <el-radio label="选升">选升</el-radio>
          <el-radio label="层数">层数</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="其他："></el-form-item>
      <el-form-item>
        模型数量
        <br />
        <el-input-number v-model="other.number" :min="0" size="small"></el-input-number>
      </el-form-item>
      <el-form-item>
        模型比例
        <br />
        <el-input
          type="text"
          size="small"
          style="width:48%;margin-right:4%;"
          placeholder="景观"
          v-model="other.landscape"
        ></el-input>
        <el-input
          type="text"
          size="small"
          style="width:48%;"
          placeholder="建筑"
          v-model="other.building"
        ></el-input>
      </el-form-item>
      <el-form-item>
        地盘规格
        <br />
        <el-input
          type="text"
          size="small"
          style="width:48%;margin-right:4%;"
          placeholder="外尺寸"
          v-model="other.externalDimensions"
        ></el-input>
        <el-input
          type="text"
          size="small"
          style="width:48%;"
          placeholder="内尺寸"
          v-model="other.innerDimension"
        ></el-input>
      </el-form-item>

      <el-form-item label-width="0">
        <el-radio-group v-model="productionType">
          <el-radio label="厚度高度：根据地形高度制作300mm高，12mm厚"></el-radio>
          <el-radio label="厚度及高度：厚度 12mm，高度400mm"></el-radio>
          <el-radio label="特殊要求：根据地形做护栏"></el-radio>
          <el-radio label="玻璃护栏"></el-radio>
          <el-radio label="玻璃罩"></el-radio>
          <el-radio label="其它"></el-radio>
        </el-radio-group>
      </el-form-item>

      <h3 style="text-align:center">模型底座要求</h3>
      <el-form-item label="项目沙盘：">
        <el-checkbox-group v-model="modelBase.projectSandTableType">
          <el-checkbox label="天然大理石"></el-checkbox>
          <el-checkbox label="颜色待定"></el-checkbox>
          <el-checkbox label="不锈钢"></el-checkbox>
          <el-checkbox label="木质烤漆"></el-checkbox>
          <el-checkbox label="仿石材"></el-checkbox>
          <el-checkbox label="人造大理石"></el-checkbox>
          <el-checkbox label="其它"></el-checkbox>
          <el-checkbox label="底座高度 600mm"></el-checkbox>
          <el-checkbox label="黑色镜面玻璃"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="底座说明："></el-form-item>
      <el-form-item>
        插入参考图
        <br />
        <div class="flex">
          <el-upload :action="requestUrl + '/upload'" :on-success="uploadMBMap">
            <el-button size="small" type="primary" plain>自行上传</el-button>
          </el-upload>
          <el-button size="small" type="primary" plain @click="openGallery(6)">图库选择</el-button>
          <span class="prompt">注：参考图只能插入一张</span>
        </div>
        <div v-if="modelBase.referenceMap" class="img-container">
          <i class="el-icon-circle-close close" @click="modelBase.referenceMap =''"></i>
          <img class="reference-map" :src="requestUrl + '/upload/' + modelBase.referenceMap" />
        </div>
      </el-form-item>
      <el-form-item>
        大理石型号
        <br />
        <el-input type="text" size="small" v-model="modelBase.marbleType"></el-input>
      </el-form-item>
      <el-form-item>
        贴脚线灯光
        <br />
        <el-input type="text" size="small" v-model="modelBase.footLineLighting"></el-input>
      </el-form-item>
      <el-form-item>
        其它要求说明
        <br />
        <el-input type="textarea" v-model="modelBase.description"></el-input>
      </el-form-item>

      <h3 style="text-align:center">建筑制作要求</h3>
      <el-form-item label="住宅建筑外立面："></el-form-item>
      <el-form-item>
        插入参考图
        <br />
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" :limit="1">
          <el-button size="small" type="primary" plain>自行上传</el-button>
        </el-upload>
        <el-button size="small" type="primary" plain>图库选择</el-button>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="buildingProduction.facade.type">
          <el-radio label="外墙写实表现"></el-radio>
          <el-radio label="镜面"></el-radio>
          <el-radio label="幕墙玻璃"></el-radio>
          <el-radio label="木质"></el-radio>
          <el-radio label="水钻"></el-radio>
          <el-radio label="外墙磨砂"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        其它要求说明
        <br />
        <el-input type="textarea" v-model="buildingProduction.facade.description"></el-input>
      </el-form-item>

      <el-form-item label="建筑ABS厚度：">
        <el-radio-group v-model="buildingProduction.abs">
          <el-radio label="ABS1.0"></el-radio>
          <el-radio label="ABS1.2"></el-radio>
          <el-radio label="ABS1.5"></el-radio>
          <el-radio label="ABS2.0"></el-radio>
          <el-radio label="ABS3.0拼角"></el-radio>
          <el-radio label="ABS4.0拼角"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="住宅内部及立面灯光："></el-form-item>
      <el-form-item>
        插入参考图
        <br />
        <span class="reference-map">
          <i class="el-icon-plus"></i>
        </span>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="buildingProduction.innerFacade.type">
          <el-radio label="万家灯动态控制"></el-radio>
          <el-radio label="透明玻璃灯板"></el-radio>
          <el-radio label="整体透暖色天花灯"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        建筑内部灯光
        <br />
        <el-radio-group v-model="buildingProduction.innerFacade.internalLight">
          <el-radio label="全亮"></el-radio>
          <el-radio label="交替变化"></el-radio>
          <el-radio label="二维灯光"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        建筑轮廓灯光
        <br />
        <el-radio-group v-model="buildingProduction.innerFacade.contourLight">
          <el-radio label="单色"></el-radio>
          <el-radio label="彩色"></el-radio>
          <el-radio label="全彩二维"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        其它要求说明
        <br />
        <el-input type="textarea" v-model="buildingProduction.innerFacade.description"></el-input>
      </el-form-item>

      <el-form-item label="商业建筑外立面："></el-form-item>
      <el-form-item>
        插入参考图
        <br />
        <span class="reference-map">
          <i class="el-icon-plus"></i>
        </span>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="buildingProduction.businessFacade.type">
          <el-radio label="商业写实制作，内部按甲方平面要求布局"></el-radio>
          <el-radio label="外墙写实表现"></el-radio>
          <el-radio label="商业支撑剖开制作"></el-radio>
          <el-radio label="镜面"></el-radio>
          <el-radio label="幕墙玻璃"></el-radio>
          <el-radio label="木质"></el-radio>
          <el-radio label="水钻"></el-radio>
          <el-radio label="外墙磨砂"></el-radio>
          <el-radio label="商业镜面勾线，屋面屋顶花园"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        其它要求说明
        <br />
        <el-input type="textarea" v-model="buildingProduction.businessFacade.description"></el-input>
      </el-form-item>

      <h3 style="text-align:center">景观制作要求</h3>
      <el-form-item label="景观表现：">
        <el-radio-group v-model="landscapeProduction.landscapePerformance">
          <el-radio label="无地形"></el-radio>
          <el-radio label="微地形"></el-radio>
          <el-radio label="有地形"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="园林风光：">
        <el-radio-group v-model="landscapeProduction.gardenScenery">
          <el-radio label="8mm高仿真草坪"></el-radio>
          <el-radio label="建筑屋顶绿化"></el-radio>
          <el-radio label="其它（铺砖、种植按照甲方提供景观图纸制作（提供资料））"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="景观道路："></el-form-item>
      <el-form-item>
        插入参考图
        <br />
        <span class="reference-map">
          <i class="el-icon-plus"></i>
        </span>
      </el-form-item>
      <el-form-item>
        景观道路
        <br />
        <el-radio-group v-model="landscapeProduction.landscapeRoad.type">
          <el-radio label="亚克力道路（汽车打灯）"></el-radio>
          <el-radio label="边预埋蓝色灯带"></el-radio>
          <el-radio label="边预埋其他颜色灯带"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        其它要求说明
        <br />
        <el-input type="textarea" v-model="landscapeProduction.landscapeRoad.description"></el-input>
      </el-form-item>

      <el-form-item label="地形表现：">
        <el-radio-group v-model="landscapeProduction.terrainPerformance">
          <el-radio label="常规表现"></el-radio>
          <el-radio label="等高线表现"></el-radio>
          <el-radio label="其它（参考照片）"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="景观灯光：">
        <el-checkbox-group v-model="landscapeProduction.landscapeLight">
          <el-checkbox label="地灯"></el-checkbox>
          <el-checkbox label="路灯"></el-checkbox>
          <el-checkbox label="庭院灯"></el-checkbox>
          <el-checkbox label="商业街程序灯光（预埋）"></el-checkbox>
          <el-checkbox label="节点灯光"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="水景表现及灯光："></el-form-item>
      <el-form-item>
        插入参考图
        <br />
        <span class="reference-map">
          <i class="el-icon-plus"></i>
        </span>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="landscapeProduction.WaterPerformanceLight.type">
          <el-radio label="亚克力水面"></el-radio>
          <el-radio label="真水"></el-radio>
          <el-radio label="LED水"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        其它要求说明
        <br />
        <el-input type="textarea" v-model="landscapeProduction.WaterPerformanceLight.description"></el-input>
      </el-form-item>

      <el-form-item label="水晶及其他表现方式灯光方式：">
        <el-checkbox-group v-model="landscapeProduction.crystalPerformanceLight">
          <el-checkbox label="透明水晶"></el-checkbox>
          <el-checkbox label="底板金色材质板"></el-checkbox>
          <el-checkbox label="整体透光"></el-checkbox>
          <el-checkbox label="底板贴银铂纸"></el-checkbox>
          <el-checkbox label="住宅水晶高度"></el-checkbox>
          <el-checkbox label="亚克力镜面体块"></el-checkbox>
          <el-checkbox label="贴膜勾窗线体块"></el-checkbox>
          <el-checkbox label="磨砂亚克力"></el-checkbox>
          <el-checkbox label="金色水晶"></el-checkbox>
          <el-checkbox label="底板轮廊灯（白色）"></el-checkbox>
          <el-checkbox label="整体透光"></el-checkbox>
          <el-checkbox label="底板贴银布"></el-checkbox>
          <el-checkbox label="商业水晶高度"></el-checkbox>
          <el-checkbox label="商业勾线镜面体块"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="建筑体块："></el-form-item>
      <el-form-item>
        插入参考图
        <br />
        <span class="reference-map">
          <i class="el-icon-plus"></i>
        </span>
      </el-form-item>
      <el-form-item>
        其它要求说明
        <br />
        <el-input type="textarea" v-model="landscapeProduction.buildingBlock.description"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">创 建</el-button>
      </el-form-item>
    </el-form>

    <OrderAddPop />
  </div>
</template>

<script>
const OrderAddPop = () => import("./OrderAddPop");
import { requestUrl } from "@/default";
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("order");
export default {
  mounted() {
    document.getElementsByClassName("el-upload-list")[0].style.display = "none";
  },
  data() {
    return {
      requestUrl,
      documentNumber: "", //文档编号
      projectName: "", //项目名称
      orderDate: "", //下单日期
      completeDate: "", //完成日期
      projectPrincipal: "", //项目节点负责人
      projectPlanner: "", //项目策划人
      salesman: "", //业务员
      projectAddress: "", //项目地址
      projectSandTable: {
        number: 0, //数量
        landscape: "", //景观
        building: "", //建筑
        externalDimensions: "", //外尺寸
        innerDimension: "" //内尺寸
      }, //项目沙盘
      liftingEquipment: {
        number: 0, //数量
        type: "" //类型
      }, //升降设备
      other: {
        number: "", //数量
        landscape: "", //景观
        building: "", //建筑
        externalDimensions: "", //外尺寸
        innerDimension: "" //内尺寸
      }, //其他
      productionType: "", //制作类型
      modelBase: {
        projectSandTableType: [], //项目沙盘
        referenceMap: "", //参考图
        marbleType: "", //大理石型号
        footLineLighting: "", //贴脚线灯光
        description: "" //其他要求说明
      }, //模型底座
      buildingProduction: {
        facade: {
          referenceMap: "",
          type: "",
          description: ""
        }, //外立面
        abs: "",
        innerFacade: {
          referenceMap: "",
          type: "",
          internalLight: "",
          contourLight: "",
          description: ""
        }, //内立面
        businessFacade: {
          referenceMap: "",
          type: "",
          description: ""
        } //商业外立面
      }, //建筑制作要求
      landscapeProduction: {
        landscapePerformance: "", //景观表现
        gardenScenery: "", //林园风光
        landscapeRoad: {
          referenceMap: "",
          type: "",
          description: ""
        },
        terrainPerformance: "", //地形表现
        landscapeLight: [], //景观灯光
        WaterPerformanceLight: {
          referenceMap: "",
          type: "",
          description: ""
        }, //水景表现及灯光
        crystalPerformanceLight: [], //水晶及其他表现方式灯光方式
        buildingBlock: {
          referenceMap: "",
          description: ""
        } //建筑体块
      } //景观制作要求
    };
  },
  methods: {
    ...mapMutations(["setImgListdialogVisible", "setType"]),
    uploadMBMap(response, file) {
      this.modelBase.referenceMap = response.filename;
    },
    openGallery(type) {
      this.setImgListdialogVisible(true);
      this.setType(type);
    }
  },
  components: {
    OrderAddPop
  }
};
</script>

<style scoped>
.container {
  margin: 30px auto;
  width: 48%;
}
.reference-map {
  margin-top: 10px;
  width: 148px;
  height: 148px;
}
.el-radio {
  margin: 10px 5px;
}
.flex {
  display: flex;
  line-height: 20px;
}
.flex > button {
  margin-left: 10px;
  height: 32px;
}
.img-container {
  position: relative;
  width: 148px;
  height: 148px;
}
.close {
  position: absolute;
  font-size: 20px;
  color: #cccccc;
  right: 0;
  top: 10px;
  cursor: pointer;
}
.prompt {
  margin-left: 15px;
  font-size: 12px;
  color: #cccccc;
  line-height: 30px;
}
</style>
