<template>
  <div>
    <el-dialog title="修改项目开工单" :visible.sync="orderUpdateDialogVisible" width="70%" append-to-body>
      <div class="container">
        <el-form label-width="210px" ref="orderForm" :model="order">
          <el-form-item label="文档编号：">
            <el-input type="text" size="small" v-model="order.documentNumber"></el-input>
          </el-form-item>
          <el-form-item label="项目名称：">
            <el-input type="text" size="small" v-model="order.projectName"></el-input>
          </el-form-item>
          <el-form-item label="下单日期：">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              size="small"
              style="width:100%"
              v-model="order.orderDate"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="完成日期：">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              size="small"
              style="width:100%"
              v-model="order.completeDate"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="项目节点总负责人：">
            <el-input type="text" size="small" v-model="order.projectPrincipal"></el-input>
          </el-form-item>
          <el-form-item label="项目策划人：">
            <el-input type="text" size="small" v-model="order.projectPlanner"></el-input>
          </el-form-item>
          <el-form-item label="业务员：">
            <el-input type="text" size="small" v-model="order.salesman"></el-input>
          </el-form-item>
          <el-form-item label="项目地址：" style="color:red">
            <el-input type="text" size="small" v-model="order.projectAddress"></el-input>
          </el-form-item>
          <h3 style="text-align:center">模型制作内容（模型范围示意图）</h3>
          <el-form-item label="项目沙盘："></el-form-item>
          <el-form-item>
            模型数量
            <br />
            <el-input-number v-model="order.projectSandTable.number" :min="0" size="small"></el-input-number>
          </el-form-item>
          <el-form-item>
            模型比例
            <br />
            <el-input
              type="text"
              size="small"
              style="width:48%;margin-right:4%;"
              placeholder="景观"
              v-model="order.projectSandTable.landscape"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="建筑"
              v-model="order.projectSandTable.building"
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
              v-model="order.projectSandTable.externalDimensions"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="内尺寸"
              v-model="order.projectSandTable.innerDimension"
            ></el-input>
          </el-form-item>
          <el-form-item label="升降设备："></el-form-item>
          <el-form-item>
            模型数量
            <br />
            <el-input-number v-model="order.liftingEquipment.number" :min="0" size="small"></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-radio-group v-model="order.liftingEquipment.type">
              <el-radio label="直升"></el-radio>
              <el-radio label="选升">选升</el-radio>
              <el-radio label="层数">层数</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="其它："></el-form-item>
          <el-form-item>
            模型数量
            <br />
            <el-input-number v-model="order.other.number" :min="0" size="small"></el-input-number>
          </el-form-item>
          <el-form-item>
            模型比例
            <br />
            <el-input
              type="text"
              size="small"
              style="width:48%;margin-right:4%;"
              placeholder="景观"
              v-model="order.other.landscape"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="建筑"
              v-model="order.other.building"
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
              v-model="order.other.externalDimensions"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="内尺寸"
              v-model="order.other.innerDimension"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="0">
            <el-checkbox-group v-model="order.productionType">
              <el-checkbox label="玻璃罩"></el-checkbox>
              <el-checkbox label="玻璃护栏"></el-checkbox>
              <el-checkbox label="自定义厚度及高度"></el-checkbox>
              <el-checkbox label="其它特殊要求"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <h3 style="text-align:center">模型底座要求</h3>
          <el-form-item label="项目沙盘：">
            <el-checkbox-group v-model="order.modelBase.projectSandTableType">
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
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="1"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :on-success="uploadMBMap"
                :before-upload="beforeUpload"
                ref="uploadMBMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(6,order.modelBase)"
              >图库选择</el-button>
              <span class="prompt">注：参考图只能插入一张,且大小不能超出2MB</span>
            </div>
            <div v-if="order.modelBase.referenceMap" class="reference-map-container">
              <i
                class="el-icon-circle-close close"
                @click="order.modelBase.referenceMap ='';$refs.uploadMBMap.clearFiles()"
              ></i>
              <img
                class="reference-map"
                :src="requestUrl + '/upload/' + order.modelBase.referenceMap"
              />
            </div>
          </el-form-item>
          <el-form-item>
            大理石型号
            <br />
            <el-input type="text" size="small" v-model="order.modelBase.marbleType"></el-input>
          </el-form-item>
          <el-form-item>
            贴脚线灯光
            <br />
            <el-input type="text" size="small" v-model="order.modelBase.footLineLighting"></el-input>
          </el-form-item>
          <el-form-item>
            其它要求说明
            <br />
            <el-input type="textarea" v-model="order.modelBase.description"></el-input>
          </el-form-item>
          <h3 style="text-align:center">建筑制作要求</h3>
          <el-form-item label="住宅建筑外立面："></el-form-item>
          <el-form-item>
            插入参考图
            <br />
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="1"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :on-success="uploadBPFMap"
                :before-upload="beforeUpload"
                ref="uploadBPFMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(1,order.buildingProduction.facade)"
              >图库选择</el-button>
              <span class="prompt">注：参考图只能插入一张,且大小不能超出2MB</span>
            </div>
            <div
              v-if="order.buildingProduction.facade.referenceMap"
              class="reference-map-container"
            >
              <i
                class="el-icon-circle-close close"
                @click="order.buildingProduction.facade.referenceMap ='';$refs.uploadBPFMap.clearFiles()"
              ></i>
              <img
                class="reference-map"
                :src="requestUrl + '/upload/' + order.buildingProduction.facade.referenceMap"
              />
            </div>
          </el-form-item>
          <el-form-item>
            <el-checkbox-group v-model="order.buildingProduction.facade.type">
              <el-checkbox label="外墙写实表现"></el-checkbox>
              <el-checkbox label="镜面"></el-checkbox>
              <el-checkbox label="幕墙玻璃"></el-checkbox>
              <el-checkbox label="木质"></el-checkbox>
              <el-checkbox label="水钻"></el-checkbox>
              <el-checkbox label="外墙磨砂"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            其它要求说明
            <br />
            <el-input type="textarea" v-model="order.buildingProduction.facade.description"></el-input>
          </el-form-item>
          <el-form-item label="建筑ABS厚度：">
            <el-radio-group v-model="order.buildingProduction.abs">
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
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="1"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :on-success="uploadBPIFMap"
                :before-upload="beforeUpload"
                ref="uploadBPIFMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(1,order.buildingProduction.innerFacade)"
              >图库选择</el-button>
              <span class="prompt">注：参考图只能插入一张,且大小不能超出2MB</span>
            </div>
            <div
              v-if="order.buildingProduction.innerFacade.referenceMap"
              class="reference-map-container"
            >
              <i
                class="el-icon-circle-close close"
                @click="order.buildingProduction.innerFacade.referenceMap ='';$refs.uploadBPIFMap.clearFiles()"
              ></i>
              <img
                class="reference-map"
                :src="requestUrl + '/upload/' + order.buildingProduction.innerFacade.referenceMap"
              />
            </div>
          </el-form-item>
          <el-form-item>
            <el-checkbox-group v-model="order.buildingProduction.innerFacade.type">
              <el-checkbox label="万家灯动态控制"></el-checkbox>
              <el-checkbox label="透明玻璃灯板"></el-checkbox>
              <el-checkbox label="整体透暖色天花灯"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            建筑内部灯光
            <br />
            <el-radio-group v-model="order.buildingProduction.innerFacade.internalLight">
              <el-radio label="全亮"></el-radio>
              <el-radio label="交替变化"></el-radio>
              <el-radio label="二维灯光"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            建筑轮廓灯光
            <br />
            <el-radio-group v-model="order.buildingProduction.innerFacade.contourLight">
              <el-radio label="单色"></el-radio>
              <el-radio label="彩色"></el-radio>
              <el-radio label="全彩二维"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            其它要求说明
            <br />
            <el-input type="textarea" v-model="order.buildingProduction.innerFacade.description"></el-input>
          </el-form-item>
          <el-form-item label="商业建筑外立面："></el-form-item>
          <el-form-item>
            插入参考图
            <br />
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="1"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :on-success="uploadBPBFMap"
                :before-upload="beforeUpload"
                ref="uploadBPBFMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(1,order.buildingProduction.businessFacade)"
              >图库选择</el-button>
              <span class="prompt">注：参考图只能插入一张,且大小不能超出2MB</span>
            </div>
            <div
              v-if="order.buildingProduction.businessFacade.referenceMap"
              class="reference-map-container"
            >
              <i
                class="el-icon-circle-close close"
                @click="order.buildingProduction.businessFacade.referenceMap ='';$refs.uploadBPBFMap.clearFiles()"
              ></i>
              <img
                class="reference-map"
                :src="requestUrl + '/upload/' + order.buildingProduction.businessFacade.referenceMap"
              />
            </div>
          </el-form-item>
          <el-form-item>
            <el-checkbox-group v-model="order.buildingProduction.businessFacade.type">
              <el-checkbox label="商业写实制作，内部按甲方平面要求布局"></el-checkbox>
              <el-checkbox label="外墙写实表现"></el-checkbox>
              <el-checkbox label="商业支撑剖开制作"></el-checkbox>
              <el-checkbox label="镜面"></el-checkbox>
              <el-checkbox label="幕墙玻璃"></el-checkbox>
              <el-checkbox label="木质"></el-checkbox>
              <el-checkbox label="水钻"></el-checkbox>
              <el-checkbox label="外墙磨砂"></el-checkbox>
              <el-checkbox label="商业镜面勾线，屋面屋顶花园"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            其它要求说明
            <br />
            <el-input type="textarea" v-model="order.buildingProduction.businessFacade.description"></el-input>
          </el-form-item>
          <h3 style="text-align:center">景观制作要求</h3>
          <el-form-item label="景观表现：">
            <el-radio-group v-model="order.landscapeProduction.landscapePerformance">
              <el-radio label="无地形"></el-radio>
              <el-radio label="微地形"></el-radio>
              <el-radio label="有地形"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="园林风光：">
            <el-checkbox-group v-model="order.landscapeProduction.gardenScenery">
              <el-checkbox label="8mm高仿真草坪"></el-checkbox>
              <el-checkbox label="建筑屋顶绿化"></el-checkbox>
              <el-checkbox label="其它（铺砖、种植按照甲方提供景观图纸制作（提供资料））"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="景观道路："></el-form-item>
          <el-form-item>
            插入参考图
            <br />
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="1"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :on-success="uploadIPLRMap"
                :before-upload="beforeUpload"
                ref="uploadIPLRMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(2,order.landscapeProduction.landscapeRoad)"
              >图库选择</el-button>
              <span class="prompt">注：参考图只能插入一张,且大小不能超出2MB</span>
            </div>
            <div
              v-if="order.landscapeProduction.landscapeRoad.referenceMap"
              class="reference-map-container"
            >
              <i
                class="el-icon-circle-close close"
                @click="order.landscapeProduction.landscapeRoad.referenceMap ='';$refs.uploadIPLRMap.clearFiles()"
              ></i>
              <img
                class="reference-map"
                :src="requestUrl + '/upload/' + order.landscapeProduction.landscapeRoad.referenceMap"
              />
            </div>
          </el-form-item>
          <el-form-item>
            景观道路
            <br />
            <el-checkbox-group v-model="order.landscapeProduction.landscapeRoad.type">
              <el-checkbox label="亚克力道路（汽车打灯）"></el-checkbox>
              <el-checkbox label="边预埋蓝色灯带"></el-checkbox>
              <el-checkbox label="边预埋其它颜色灯带"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            其它要求说明
            <br />
            <el-input type="textarea" v-model="order.landscapeProduction.landscapeRoad.description"></el-input>
          </el-form-item>

          <el-form-item label="地形表现：">
            <el-checkbox-group v-model="order.landscapeProduction.terrainPerformance">
              <el-checkbox label="常规表现"></el-checkbox>
              <el-checkbox label="等高线表现"></el-checkbox>
              <el-checkbox label="其它（参考照片）"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="景观灯光：">
            <el-checkbox-group v-model="order.landscapeProduction.landscapeLight">
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
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="1"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :on-success="uploadIPWPLMap"
                :before-upload="beforeUpload"
                ref="uploadIPWPLMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(2,order.landscapeProduction.WaterPerformanceLight)"
              >图库选择</el-button>
              <span class="prompt">注：参考图只能插入一张,且大小不能超出2MB</span>
            </div>
            <div
              v-if="order.landscapeProduction.WaterPerformanceLight.referenceMap"
              class="reference-map-container"
            >
              <i
                class="el-icon-circle-close close"
                @click="order.landscapeProduction.WaterPerformanceLight.referenceMap ='';$refs.uploadIPWPLMap.clearFiles()"
              ></i>
              <img
                class="reference-map"
                :src="requestUrl + '/upload/' + order.landscapeProduction.WaterPerformanceLight.referenceMap"
              />
            </div>
          </el-form-item>
          <el-form-item>
            <el-radio-group v-model="order.landscapeProduction.WaterPerformanceLight.type">
              <el-radio label="亚克力水面"></el-radio>
              <el-radio label="真水"></el-radio>
              <el-radio label="LED水"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            其它要求说明
            <br />
            <el-input
              type="textarea"
              v-model="order.landscapeProduction.WaterPerformanceLight.description"
            ></el-input>
          </el-form-item>
          <el-form-item label="水晶及其它表现方式灯光方式：">
            <el-checkbox-group v-model="order.landscapeProduction.crystalPerformanceLight">
              <el-checkbox label="透明水晶"></el-checkbox>
              <el-checkbox label="底板金色材质板"></el-checkbox>
              <el-checkbox label="整体透光（透明水晶）"></el-checkbox>
              <el-checkbox label="底板贴银铂纸"></el-checkbox>
              <el-checkbox label="住宅水晶高度"></el-checkbox>
              <el-checkbox label="亚克力镜面体块"></el-checkbox>
              <el-checkbox label="贴膜勾窗线体块"></el-checkbox>
              <el-checkbox label="磨砂亚克力体块"></el-checkbox>
              <el-checkbox label="金色水晶"></el-checkbox>
              <el-checkbox label="底板轮廊灯（白色）"></el-checkbox>
              <el-checkbox label="整体透光（金色水晶）"></el-checkbox>
              <el-checkbox label="底板贴银布"></el-checkbox>
              <el-checkbox label="商业水晶高度"></el-checkbox>
              <el-checkbox label="商业勾线镜面体块"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="建筑体块："></el-form-item>
          <el-form-item>
            插入参考图
            <br />
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="1"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :on-success="uploadIPBBMap"
                :before-upload="beforeUpload"
                ref="uploadIPBBMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(2,order.landscapeProduction.buildingBlock)"
              >图库选择</el-button>
              <span class="prompt">注：参考图只能插入一张,且大小不能超出2MB</span>
            </div>
            <div
              v-if="order.landscapeProduction.buildingBlock.referenceMap"
              class="reference-map-container"
            >
              <i
                class="el-icon-circle-close close"
                @click="order.landscapeProduction.buildingBlock.referenceMap ='';$refs.uploadIPBBMap.clearFiles()"
              ></i>
              <img
                class="reference-map"
                :src="requestUrl + '/upload/' + order.landscapeProduction.buildingBlock.referenceMap"
              />
            </div>
          </el-form-item>
          <el-form-item>
            其它要求说明
            <br />
            <el-input type="textarea" v-model="order.landscapeProduction.buildingBlock.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateOrder">保 存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
    <OrderAddPop />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { requestUrl } from "@/default";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("order");
const OrderAddPop = () => import("../common/OrderAddPop");
import { putOrder } from "@/api";
let loading = false;
export default {
  updated() {
    const oUpload = document.getElementsByClassName("el-upload-list");
    for (let i = 0; i < oUpload.length; i++) {
      oUpload[i].style.display = "none";
    }
  },
  data() {
    return {
      requestUrl
    };
  },
  computed: {
    ...mapState(["order"]),
    orderUpdateDialogVisible: {
      get() {
        return this.$store.state.order.orderUpdateDialogVisible;
      },
      set(value) {
        this.$store.commit("order/setOrderUpdateDialogVisible", value);
      }
    }
  },
  methods: {
    ...mapMutations([
      "setImgListdialogVisible",
      "setType",
      "setObj",
      "setOrderUpdateDialogVisible"
    ]),
    ...mapActions(["getOrderList"]),
    uploadMBMap(response) {
      this.order.modelBase.referenceMap = response.filename;
    },
    uploadBPFMap(response) {
      this.order.buildingProduction.facade.referenceMap = response.filename;
    },
    uploadBPIFMap(response) {
      this.order.buildingProduction.innerFacade.referenceMap =
        response.filename;
    },
    uploadBPBFMap(response) {
      this.order.buildingProduction.businessFacade.referenceMap =
        response.filename;
    },
    uploadIPLRMap(response) {
      this.order.landscapeProduction.landscapeRoad.referenceMap =
        response.filename;
    },
    uploadIPWPLMap(response) {
      this.order.landscapeProduction.WaterPerformanceLight.referenceMap =
        response.filename;
    },
    uploadIPBBMap(response) {
      this.order.landscapeProduction.buildingBlock.referenceMap =
        response.filename;
    },
    openGallery(type, obj) {
      this.setImgListdialogVisible(true);
      this.setType(type);
      this.setObj(obj);
    },
    updateOrder() {
      if (loading) {
        return;
      }

      const { order } = this,
        id = order._id,
        sendData = { ...order };
      delete sendData._id;

      loading = true;
      putOrder(id, sendData).then(data => {
        loading = false;
        let type;
        if (data.status === 1) {
          type = "success";
          this.getOrderList();
          this.setOrderUpdateDialogVisible(false);
        } else {
          type = "error";
        }
        this.$message({
          message: data.message,
          type
        });
      });
    },
    beforeUpload(file) {
      if (file.size / 1024 / 1024 > 2) {
        this.$notify.error({
          title: "错误",
          message: "图片大小不能超出2MB"
        });
        return false;
      }
    }
  },
  components: {
    OrderAddPop
  }
};
</script>

<style scoped>
@import "../../../../static/css/order_common.css";
</style>