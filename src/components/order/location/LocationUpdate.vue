<template>
  <div>
    <el-dialog
      title="修改区位开工单"
      :visible.sync="locationUpdateDialogVisible"
      width="70%"
      append-to-body
    >
      <div class="container">
        <el-form :model="locationData" label-width="155px" ref="houseForm">
          <el-form-item label="文档编号：">
            <el-input type="text" size="small" v-model="locationData.documentNumber"></el-input>
          </el-form-item>
          <el-form-item label="项目名称：">
            <el-input type="text" size="small" v-model="locationData.projectName"></el-input>
          </el-form-item>

          <el-form-item label="下单日期：">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              size="small"
              style="width:100%"
              v-model="locationData.orderDate"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="完成日期：">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              size="small"
              style="width:100%"
              v-model="locationData.completeDate"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="项目节点总负责人：">
            <el-input type="text" size="small" v-model="locationData.projectPrincipal"></el-input>
          </el-form-item>
          <el-form-item label="项目策划人：">
            <el-input type="text" size="small" v-model="locationData.projectPlanner"></el-input>
          </el-form-item>
          <el-form-item label="业务员：">
            <el-input type="text" size="small" v-model="locationData.salesman"></el-input>
          </el-form-item>
          <el-form-item label="项目地址：" style="color:red">
            <el-input type="text" size="small" v-model="locationData.projectAddress"></el-input>
          </el-form-item>
          <h3 style="text-align:center">模型制作内容（模型范围示意图）</h3>

          <el-form-item label="项目沙盘："></el-form-item>
          <el-form-item>
            模型数量
            <br />
            <el-input-number v-model="locationData.projectSandTable.number" :min="0" size="small"></el-input-number>
          </el-form-item>
          <el-form-item>
            模型比例
            <br />
            <el-input
              type="text"
              size="small"
              style="width:48%;margin-right:4%;"
              placeholder="景观"
              v-model="locationData.projectSandTable.landscape"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="建筑"
              v-model="locationData.projectSandTable.building"
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
              v-model="locationData.projectSandTable.externalDimensions"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="内尺寸"
              v-model="locationData.projectSandTable.innerDimension"
            ></el-input>
          </el-form-item>

          <el-form-item label="安装性质："></el-form-item>
          <el-form-item>
            模型数量
            <br />
            <el-input-number v-model="locationData.installationNature.number" :min="0" size="small"></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-radio-group v-model="locationData.installationNature.type">
              <el-radio label="底座安装"></el-radio>
              <el-radio label="挂墙安装"></el-radio>
              <el-radio label="下沉安装"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="其他："></el-form-item>
          <el-form-item>
            模型数量
            <br />
            <el-input-number v-model="locationData.other.number" :min="0" size="small"></el-input-number>
          </el-form-item>
          <el-form-item>
            模型比例
            <br />
            <el-input
              type="text"
              size="small"
              style="width:48%;margin-right:4%;"
              placeholder="景观"
              v-model="locationData.other.landscape"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="建筑"
              v-model="locationData.other.building"
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
              v-model="locationData.other.externalDimensions"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="内尺寸"
              v-model="locationData.other.innerDimension"
            ></el-input>
          </el-form-item>

          <el-form-item label-width="0">
            <el-radio-group v-model="locationData.productionType">
              <el-radio label="玻璃罩"></el-radio>
              <el-radio label="玻璃护栏"></el-radio>
              <el-radio label="自定义厚度及高度"></el-radio>
              <el-radio label="其他特殊要求"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="区位沙盘：">
            <el-checkbox-group v-model="locationData.locationSandTable">
              <el-checkbox label="石材(人造)"></el-checkbox>
              <el-checkbox label="木质"></el-checkbox>
              <el-checkbox label="皮革"></el-checkbox>
              <el-checkbox label="玻璃"></el-checkbox>
              <el-checkbox label="亚克力"></el-checkbox>
              <el-checkbox label="石材(天然)"></el-checkbox>
              <el-checkbox label="不锈钢"></el-checkbox>
              <el-checkbox label="高度"></el-checkbox>
              <el-checkbox label="其它"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="材料说明：">
            <el-input type="textarea" v-model="locationData.materialDescription"></el-input>
          </el-form-item>
          <el-form-item label="安装方式：">
            <el-radio-group v-model="locationData.installationMethod">
              <el-radio label="挂壁式"></el-radio>
              <el-radio label="镶嵌式"></el-radio>
              <el-radio label="常规式"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="其他特殊要求及具体制作内容说明：">
            <el-input type="textarea" v-model="locationData.claimSpecificDescription"></el-input>
          </el-form-item>

          <h3 style="text-align:center">区位模型制作要求</h3>
          <el-form-item label="区位表现方式：">
            <el-checkbox-group v-model="locationData.locationModelProduction.locationPerformance">
              <el-checkbox label="钢化玻璃丝印"></el-checkbox>
              <el-checkbox label="亚克力+道路乳化玻璃(自定亚克力颜色)"></el-checkbox>
              <el-checkbox label="仿铜表现"></el-checkbox>
              <el-checkbox label="侧边透光"></el-checkbox>
              <el-checkbox label="不绣刚表现(自定颜色)"></el-checkbox>
              <el-checkbox label="镜面钢化玻璃丝印"></el-checkbox>
              <el-checkbox label="皮革+道路乳化玻璃(自定皮革材料编号)"></el-checkbox>
              <el-checkbox label="木质表现(自定木质材料)"></el-checkbox>
              <el-checkbox label="拉丝仿铜区位"></el-checkbox>
              <el-checkbox label="真铜区位"></el-checkbox>
              <el-checkbox label="写实区位"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="区位本案表现："></el-form-item>
          <el-form-item>
            插入参考图
            <br />
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="1"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :on-success="uploadLDLMPLPMap"
                :before-upload="beforeUpload"
                ref="uploadLDLMPLPMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(5,locationData.locationModelProduction.locationItselfPerformance)"
              >图库选择</el-button>
              <span class="prompt">注：参考图只能插入一张,且大小不能超出2MB</span>
            </div>
            <div
              v-if="locationData.locationModelProduction.locationItselfPerformance.referenceMap"
              class="reference-map-container"
            >
              <i
                class="el-icon-circle-close close"
                @click="locationData.locationModelProduction.locationItselfPerformance.referenceMap =''
                ;$refs.uploadLDLMPLPMap.clearFiles()"
              ></i>
              <img
                class="reference-map"
                :src="requestUrl + '/upload/' + locationData.locationModelProduction.locationItselfPerformance.referenceMap"
              />
            </div>
          </el-form-item>
          <el-form-item>
            <el-checkbox-group
              v-model="locationData.locationModelProduction.locationItselfPerformance.type"
            >
              <el-checkbox label="水晶"></el-checkbox>
              <el-checkbox label="透明水晶"></el-checkbox>
              <el-checkbox label="金色水晶"></el-checkbox>
              <el-checkbox label="琥珀色水晶"></el-checkbox>
              <el-checkbox label="其他"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            其它要求说明
            <br />
            <el-input
              type="textarea"
              v-model="locationData.locationModelProduction.locationItselfPerformance.description"
            ></el-input>
          </el-form-item>

          <el-form-item label="区位灯光要求："></el-form-item>
          <el-form-item>
            插入参考图
            <br />
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="1"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :on-success="uploadLDLMPLLMap"
                :before-upload="beforeUpload"
                ref="uploadLDLMPLLMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(5,locationData.locationModelProduction.locationLight)"
              >图库选择</el-button>
              <span class="prompt">注：参考图只能插入一张,且大小不能超出2MB</span>
            </div>
            <div
              v-if="locationData.locationModelProduction.locationLight.referenceMap"
              class="reference-map-container"
            >
              <i
                class="el-icon-circle-close close"
                @click="locationData.locationModelProduction.locationLight.referenceMap =''
                ;$refs.uploadLDLMPLLMap.clearFiles()"
              ></i>
              <img
                class="reference-map"
                :src="requestUrl + '/upload/' + locationData.locationModelProduction.locationLight.referenceMap"
              />
            </div>
          </el-form-item>
          <el-form-item>
            <el-checkbox-group v-model="locationData.locationModelProduction.locationLight.type">
              <el-checkbox label="本案"></el-checkbox>
              <el-checkbox label="本案(底部透灯)"></el-checkbox>
              <el-checkbox label="本案(七彩)"></el-checkbox>
              <el-checkbox label="本案(单色)"></el-checkbox>
              <el-checkbox label="周边配套"></el-checkbox>
              <el-checkbox label="周边配套(底部透灯)"></el-checkbox>
              <el-checkbox label="周边配套(七彩)"></el-checkbox>
              <el-checkbox label="周边配套(单色)"></el-checkbox>
              <el-checkbox label="商圈"></el-checkbox>
              <el-checkbox label="商圈(底部透灯)"></el-checkbox>
              <el-checkbox label="商圈(七彩)"></el-checkbox>
              <el-checkbox label="商圈(单色)"></el-checkbox>
              <el-checkbox label="商圈(跑动)"></el-checkbox>
              <el-checkbox label="地铁路线及高贴路线圈"></el-checkbox>
              <el-checkbox label="地铁路线及高贴路线圈(底部透灯)"></el-checkbox>
              <el-checkbox label="地铁路线及高贴路线圈(七彩)"></el-checkbox>
              <el-checkbox label="地铁路线及高贴路线圈(单色)"></el-checkbox>
              <el-checkbox label="地铁路线及高贴路线圈(跑动)"></el-checkbox>
              <el-checkbox label="其它"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            其它要求说明
            <br />
            <el-input
              type="textarea"
              v-model="locationData.locationModelProduction.locationLight.description"
            ></el-input>
          </el-form-item>
          <el-form-item>
            其他特殊要求及具体制作内容说明
            <br />
            <el-input
              type="textarea"
              v-model="locationData.locationModelProduction.claimContentDescription"
            ></el-input>
          </el-form-item>

          <h3 style="text-align:center">规划模型景观制作要求</h3>

          <el-form-item label="景观表现：">
            <el-radio-group v-model="locationData.landscapeProduction.landscapePerformance">
              <el-radio label="无地形"></el-radio>
              <el-radio label="微地形"></el-radio>
              <el-radio label="有地形"></el-radio>
              <el-radio label="其它"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="园林风格：">
            <el-checkbox-group v-model="locationData.landscapeProduction.gardenStyle">
              <el-checkbox label="精诚景观"></el-checkbox>
              <el-checkbox label="木质景观表现(提供照片)"></el-checkbox>
              <el-checkbox label="概念景观表现(提供照片)"></el-checkbox>
              <el-checkbox label="其它(提供照片)"></el-checkbox>
              <el-checkbox label="亚克力景观(提供照片)"></el-checkbox>
              <el-checkbox label="局部现场取景写实制作(参照图片)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="景观道路：">
            <el-checkbox-group v-model="locationData.landscapeProduction.landscapeRoad">
              <el-checkbox label="沥青道路"></el-checkbox>
              <el-checkbox label="亚克力动感道路"></el-checkbox>
              <el-checkbox label="亚克力沥青道路"></el-checkbox>
              <el-checkbox label="镜面玻璃动感道路"></el-checkbox>
              <el-checkbox label="其它(参照图片)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="地形表现：">
            <el-checkbox-group v-model="locationData.landscapeProduction.terrainPerformance">
              <el-checkbox label="常规表现"></el-checkbox>
              <el-checkbox label="等高线表现"></el-checkbox>
              <el-checkbox label="其它(参照图片)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="景观灯光：">
            <el-checkbox-group v-model="locationData.landscapeProduction.landscapeLight">
              <el-checkbox label="地灯"></el-checkbox>
              <el-checkbox label="路灯"></el-checkbox>
              <el-checkbox label="庭院灯"></el-checkbox>
              <el-checkbox label="商业街程序灯光"></el-checkbox>
              <el-checkbox label="重要道路线灯光"></el-checkbox>
              <el-checkbox label="重要道路线灯光(单体)"></el-checkbox>
              <el-checkbox label="重要道路线灯光(七彩)"></el-checkbox>
              <el-checkbox label="重要道路线灯光(静态)"></el-checkbox>
              <el-checkbox label="重要道路线灯光(动态)"></el-checkbox>
              <el-checkbox label="重要地区轮廊灯光"></el-checkbox>
              <el-checkbox label="重要地区轮廊灯光(单色)"></el-checkbox>
              <el-checkbox label="重要地区轮廊灯光(七彩)"></el-checkbox>
              <el-checkbox label="重要地区轮廊灯光(静态)"></el-checkbox>
              <el-checkbox label="重要地区轮廊灯光(动态)"></el-checkbox>
              <el-checkbox label="商业街程序灯光(预埋)"></el-checkbox>
              <el-checkbox label="节点灯光"></el-checkbox>
              <el-checkbox label="地铁路线及高铁路线圈"></el-checkbox>
              <el-checkbox label="地铁路线及高铁路线圈(七彩)"></el-checkbox>
              <el-checkbox label="地铁路线及高铁路线圈(单色)"></el-checkbox>
              <el-checkbox label="地铁路线及高铁路线圈(静态)"></el-checkbox>
              <el-checkbox label="地铁路线及高铁路线圈(跑动)"></el-checkbox>
              <el-checkbox label="其它(参照图片)"></el-checkbox>
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
                :on-success="uploadLDLPWPLMap"
                :before-upload="beforeUpload"
                ref="uploadLDLPWPLMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(2,locationData.landscapeProduction.waterPerformanceLight)"
              >图库选择</el-button>
              <span class="prompt">注：参考图只能插入一张,且大小不能超出2MB</span>
            </div>
            <div
              v-if="locationData.landscapeProduction.waterPerformanceLight.referenceMap"
              class="reference-map-container"
            >
              <i
                class="el-icon-circle-close close"
                @click="locationData.landscapeProduction.waterPerformanceLight.referenceMap =''
                ;$refs.uploadLDLPWPLMap.clearFiles()"
              ></i>
              <img
                class="reference-map"
                :src="requestUrl + '/upload/' + locationData.landscapeProduction.waterPerformanceLight.referenceMap"
              />
            </div>
          </el-form-item>
          <el-form-item>
            <el-checkbox-group
              v-model="locationData.landscapeProduction.waterPerformanceLight.type"
            >
              <el-checkbox label="整体LED透光"></el-checkbox>
              <el-checkbox label="整体LED透光(亚克力)"></el-checkbox>
              <el-checkbox label="整体LED透光(水纹玻璃)"></el-checkbox>
              <el-checkbox label="侧边透光"></el-checkbox>
              <el-checkbox label="侧边透光(亚克力)"></el-checkbox>
              <el-checkbox label="侧边透光(水纹玻璃)"></el-checkbox>
              <el-checkbox label="镭射灯投影灯光"></el-checkbox>
              <el-checkbox label="镭射灯投影灯光(亚克力)"></el-checkbox>
              <el-checkbox label="镭射灯投影灯光(水纹玻璃)"></el-checkbox>
              <el-checkbox label="其它"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            其它要求说明
            <br />
            <el-input
              type="textarea"
              v-model="locationData.landscapeProduction.waterPerformanceLight.description"
            ></el-input>
          </el-form-item>

          <el-form-item label="水晶及灯光方式：">
            <el-checkbox-group v-model="locationData.landscapeProduction.crystalLight">
              <el-checkbox label="平放"></el-checkbox>
              <el-checkbox label="挂靠"></el-checkbox>
              <el-checkbox label="透明水晶"></el-checkbox>
              <el-checkbox label="透明水晶(轮廊灯)"></el-checkbox>
              <el-checkbox label="透明水晶(整体透光)"></el-checkbox>
              <el-checkbox label="透明水晶(底板贴钻)"></el-checkbox>
              <el-checkbox label="透明水晶(底板贴银布)"></el-checkbox>
              <el-checkbox label="透明水晶(住宅水晶高度)"></el-checkbox>
              <el-checkbox label="透明水晶(商业水晶高度)"></el-checkbox>
              <el-checkbox label="金色水晶"></el-checkbox>
              <el-checkbox label="金色水晶(轮廊灯)"></el-checkbox>
              <el-checkbox label="金色水晶(整体透光)"></el-checkbox>
              <el-checkbox label="金色水晶(底板贴钻)"></el-checkbox>
              <el-checkbox label="金色水晶(底板贴银布)"></el-checkbox>
              <el-checkbox label="金色水晶(住宅水晶高度)"></el-checkbox>
              <el-checkbox label="金色水晶(商业水晶高度)"></el-checkbox>
              <el-checkbox label="琥珀水晶"></el-checkbox>
              <el-checkbox label="琥珀水晶(轮廊灯)"></el-checkbox>
              <el-checkbox label="琥珀水晶(整体透光)"></el-checkbox>
              <el-checkbox label="琥珀水晶(底板贴钻)"></el-checkbox>
              <el-checkbox label="琥珀水晶(底板贴银布)"></el-checkbox>
              <el-checkbox label="琥珀水晶(住宅水晶高度)"></el-checkbox>
              <el-checkbox label="琥珀水晶(商业水晶高度)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="体块：">
            <el-checkbox-group v-model="locationData.landscapeProduction.bodyBlock">
              <el-checkbox label="磨砂体块"></el-checkbox>
              <el-checkbox label="贴钻体块"></el-checkbox>
              <el-checkbox label="贴银布体块"></el-checkbox>
              <el-checkbox label="ABS体块"></el-checkbox>
              <el-checkbox label="其它(提供照片)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item>
            插入参考图
            <br />
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="3"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :before-upload="beforeUpload"
                :on-success="uploadLDLPMap"
                ref="uploadLDLPMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(2,locationData.landscapeProduction)"
              >图库选择</el-button>
              <span class="prompt">注：参考图最多插入三张,且大小不能超出2MB</span>
            </div>
            <div style="display:flex;">
              <div
                v-if="locationData.landscapeProduction.referenceMap[0]"
                class="reference-map-container"
              >
                <i
                  class="el-icon-circle-close close"
                  @click="locationData.landscapeProduction.referenceMap.splice(0,1);$refs.uploadLDLPMap.clearFiles()"
                ></i>
                <img
                  class="reference-map"
                  :src="requestUrl + '/upload/' + locationData.landscapeProduction.referenceMap[0]"
                />
              </div>
              <div
                v-if="locationData.landscapeProduction.referenceMap[1]"
                class="reference-map-container"
              >
                <i
                  class="el-icon-circle-close close"
                  @click="locationData.landscapeProduction.referenceMap.splice(1,1);$refs.uploadLDLPMap.clearFiles()"
                ></i>
                <img
                  class="reference-map"
                  :src="requestUrl + '/upload/' + locationData.landscapeProduction.referenceMap[1]"
                />
              </div>
              <div
                v-if="locationData.landscapeProduction.referenceMap[2]"
                class="reference-map-container"
              >
                <i
                  class="el-icon-circle-close close"
                  @click="locationData.landscapeProduction.referenceMap.splice(2,1);$refs.uploadLDLPMap.clearFiles()"
                ></i>
                <img
                  class="reference-map"
                  :src="requestUrl + '/upload/' + locationData.landscapeProduction.referenceMap[2]"
                />
              </div>
            </div>
          </el-form-item>
          <el-form-item label="其他特殊要求及建筑制作内容说明：">
            <el-input
              type="textarea"
              v-model="locationData.landscapeProduction.claimBuildDescription"
            ></el-input>
          </el-form-item>

          <h3 style="text-align:center">规划模型建筑制作要求</h3>

          <el-form-item label="建筑立面：">
            <el-checkbox-group v-model="locationData.buildingProduction.buildingFacade">
              <el-checkbox label="外墙写真表现"></el-checkbox>
              <el-checkbox label="外墙贴钻表现"></el-checkbox>
              <el-checkbox label="外墙亚克力表现"></el-checkbox>
              <el-checkbox label="外墙木质表现"></el-checkbox>
              <el-checkbox label="外墙概念表现"></el-checkbox>
              <el-checkbox label="其它"></el-checkbox>
              <el-checkbox label="公建现场取景写实制作"></el-checkbox>
              <el-checkbox label="幕墙贴膜表现(颜色客户选择)"></el-checkbox>
              <el-checkbox label="幕墙镜面表现"></el-checkbox>
              <el-checkbox label="幕墙喷色表现(甲方定色)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="建筑内部及外立面灯光：">
            <el-checkbox-group
              v-model="locationData.buildingProduction.buildingInteriorFacadeLight"
            >
              <el-checkbox label="住宅常规万家灯光"></el-checkbox>
              <el-checkbox label="住宅常规万家灯光(整体透光)"></el-checkbox>
              <el-checkbox label="住宅常规万家灯光(分组亮灯)"></el-checkbox>
              <el-checkbox label="商业暖色灯光"></el-checkbox>
              <el-checkbox label="内部常规整体透光"></el-checkbox>
              <el-checkbox label="写字楼"></el-checkbox>
              <el-checkbox label="外立面LED轮廊灯光(外贴)"></el-checkbox>
              <el-checkbox label="外立面竖向LED灯光(外贴)"></el-checkbox>
              <el-checkbox label="外立面节点(外贴)"></el-checkbox>
              <el-checkbox label="公建灯光(写实参照)"></el-checkbox>
              <el-checkbox label="内部楼板横向LED轮廊灯光"></el-checkbox>
              <el-checkbox label="内部楼板横向LED轮廊灯光(单色)"></el-checkbox>
              <el-checkbox label="内部楼板横向LED轮廊灯光(七彩)"></el-checkbox>
              <el-checkbox label="内部柱位竖向LED流星灯光"></el-checkbox>
              <el-checkbox label="内部柱位竖向LED流星灯光(单色)"></el-checkbox>
              <el-checkbox label="内部柱位竖向LED流星灯光(七彩)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item>
            插入参考图
            <br />
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="3"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :before-upload="beforeUpload"
                :on-success="uploadLDBPMap"
                ref="uploadLDBPMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(2,locationData.buildingProduction)"
              >图库选择</el-button>
              <span class="prompt">注：参考图最多插入三张,且大小不能超出2MB</span>
            </div>
            <div style="display:flex;">
              <div
                v-if="locationData.buildingProduction.referenceMap[0]"
                class="reference-map-container"
              >
                <i
                  class="el-icon-circle-close close"
                  @click="locationData.buildingProduction.referenceMap.splice(0,1);$refs.uploadLDBPMap.clearFiles()"
                ></i>
                <img
                  class="reference-map"
                  :src="requestUrl + '/upload/' + locationData.buildingProduction.referenceMap[0]"
                />
              </div>
              <div
                v-if="locationData.buildingProduction.referenceMap[1]"
                class="reference-map-container"
              >
                <i
                  class="el-icon-circle-close close"
                  @click="locationData.buildingProduction.referenceMap.splice(1,1);$refs.uploadLDBPMap.clearFiles()"
                ></i>
                <img
                  class="reference-map"
                  :src="requestUrl + '/upload/' + locationData.buildingProduction.referenceMap[1]"
                />
              </div>
              <div
                v-if="locationData.buildingProduction.referenceMap[2]"
                class="reference-map-container"
              >
                <i
                  class="el-icon-circle-close close"
                  @click="locationData.buildingProduction.referenceMap.splice(2,1);$refs.uploadLDBPMap.clearFiles()"
                ></i>
                <img
                  class="reference-map"
                  :src="requestUrl + '/upload/' + locationData.buildingProduction.referenceMap[2]"
                />
              </div>
            </div>
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
const { mapMutations } = createNamespacedHelpers("order");
const locationMapState = createNamespacedHelpers("locationOrder").mapState;
const locationMapActions = createNamespacedHelpers("locationOrder").mapActions;
const locationMapMutations = createNamespacedHelpers("locationOrder")
  .mapMutations;
import { requestUrl } from "@/default";
const OrderAddPop = () => import("../common/OrderAddPop");
import { putLocationOrder } from "@/api";
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
    ...locationMapState(["locationData"]),
    locationUpdateDialogVisible: {
      get() {
        return this.$store.state.locationOrder.locationUpdateDialogVisible;
      },
      set(value) {
        this.$store.commit(
          "locationOrder/setLocationUpdateDialogVisible",
          value
        );
      }
    }
  },
  methods: {
    ...mapMutations(["setImgListdialogVisible", "setType", "setObj"]),
    ...locationMapActions(["getOrderList"]),
    ...locationMapMutations(["setLocationUpdateDialogVisible"]),
    beforeUpload(file) {
      if (file.size / 1024 / 1024 > 2) {
        this.$notify.error({
          title: "错误",
          message: "图片大小不能超出2MB"
        });
        return false;
      }
    },
    openGallery(type, obj) {
      this.setImgListdialogVisible(true);
      this.setType(type);
      this.setObj(obj);
    },
    uploadLDLMPLPMap(response) {
      if (response.status !== 1) {
        this.$notify.error({
          title: "错误",
          message: "图片上传失败"
        });
        return;
      }

      this.locationData.locationModelProduction.locationItselfPerformance.referenceMap =
        response.filename;
    },
    uploadLDLMPLLMap(response) {
      if (response.status !== 1) {
        this.$notify.error({
          title: "错误",
          message: "图片上传失败"
        });
        return;
      }

      this.locationData.locationModelProduction.locationLight.referenceMap =
        response.filename;
    },
    uploadLDLPWPLMap(response) {
      if (response.status !== 1) {
        this.$notify.error({
          title: "错误",
          message: "图片上传失败"
        });
        return;
      }

      this.locationData.landscapeProduction.waterPerformanceLight.referenceMap =
        response.filename;
    },
    uploadLDLPMap(response) {
      if (response.status !== 1) {
        this.$notify.error({
          title: "错误",
          message: "图片上传失败"
        });
        return;
      }

      if (this.locationData.landscapeProduction.referenceMap.length === 3) {
        return;
      }

      this.locationData.landscapeProduction.referenceMap = [
        ...this.locationData.landscapeProduction.referenceMap,
        response.filename
      ];
    },
    uploadLDBPMap(response) {
      if (response.status !== 1) {
        this.$notify.error({
          title: "错误",
          message: "图片上传失败"
        });
        return;
      }

      if (this.locationData.buildingProduction.referenceMap.length === 3) {
        return;
      }

      this.locationData.buildingProduction.referenceMap = [
        ...this.locationData.buildingProduction.referenceMap,
        response.filename
      ];
    },
    updateOrder() {
      if (loading) {
        return;
      }

      const { locationData } = this,
        id = locationData._id,
        sendData = { ...locationData };
      delete locationData._id;

      loading = true;
      putLocationOrder(id, sendData).then(data => {
        loading = false;
        let type;
        if (data.status === 1) {
          type = "success";
          this.getOrderList();
          this.setLocationUpdateDialogVisible(false);
        } else {
          type = "error";
        }
        this.$message({
          message: data.message,
          type
        });
      });
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
.reference-map-container {
  position: relative;
  margin-right: 7px;
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
