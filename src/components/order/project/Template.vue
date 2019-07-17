<template>
  <div>
    <div style="margin:10px 0 0 10px;">
      <el-button type="primary" @click="download">下 载</el-button>
    </div>
    <div class="table-container">
      <div class="container">
        <div class="flex border-b">
          <div style="width:19%;" class="border-r">
            <div class="center height border-b li-he">文档编号</div>
            <div class="height li-he">TS&nbsp;&nbsp;{{order.documentNumber}}</div>
          </div>
          <h3 style="width:50%;line-height:100px;" class="center border-r">精诚模型项目制作单</h3>
          <div style="width:10%;" class="border-r">
            <div class="center height border-b li-he">下单日期</div>
            <div class="center height li-he">完成日期</div>
          </div>
          <div style="flex:1;">
            <div class="center height border-b li-he">{{order.orderDate}}</div>
            <div class="center height li-he">{{order.completeDate}}</div>
          </div>
        </div>
        <div class="flex border-b">
          <div style="width:7%;" class="height li-he border-r">项目名称：</div>
          <div style="width:62%;" class="height li-he border-r">&nbsp;&nbsp;{{order.projectName}}</div>
          <div style="width:10%;" class="height"></div>
          <div style="flex:1;" class="height center li-he border-l">项目地址</div>
        </div>
        <div class="flex border-b">
          <div style="width:19%;" class="border-r">
            <div class="height border-b"></div>
            <div class="height"></div>
          </div>
          <div style="width:41%;" class="border-r">
            <div class="height border-b li-he">
              <span class="i-b">项目节点总负责人：{{order.projectPrincipal}}</span>
            </div>
            <div class="height li-he">
              <span class="i-b">项目策划人：{{order.projectPlanner}}</span>
            </div>
          </div>
          <div style="width:19%;" class="border-r">
            <div class="height border-b li-he">
              <span class="i-b">业务员：{{order.salesman}}</span>
            </div>
            <div class="height li-he"></div>
          </div>
          <div style="flex:1;" class="box-s">{{order.projectAddress}}</div>
        </div>
        <div class="height center li-he border-b">模型制作内容（模型范围示意图）</div>
        <div class="flex border-b">
          <div style="width:19%;" class="height center li-he">模型类别</div>
          <div style="flex:1;" class="height center li-he border-l">项目沙盘</div>
          <div style="width:19%;" class="height center li-he border-l">项目沙盘</div>
          <div style="width:19%;" class="height center li-he border-l">升降设备</div>
          <div style="width:19%;" class="height center li-he border-l">其它</div>
        </div>
        <div class="flex border-b">
          <div style="width:19%;" class="height center li-he">模型数量</div>
          <div style="flex:1;" class="height center li-he border-l"></div>
          <div style="width:19%;" class="height center li-he border-l">
            <template v-if="order.projectSandTable.number">{{order.projectSandTable.number}}</template>
            <template v-else>&nbsp;</template>
            套
          </div>
          <div style="width:19%;" class="height center li-he border-l">
            <template v-if="order.liftingEquipment.number">{{order.liftingEquipment.number}}</template>
            <template v-else>&nbsp;</template>
            套
          </div>
          <div style="width:19%;" class="height center li-he border-l">
            <template v-if="order.other.number">{{order.other.number}}</template>
            <template v-else>&nbsp;</template>
            套
          </div>
        </div>
        <div class="flex border-b">
          <div style="width:19%;" class="flex-j-i">
            <span>模型比例</span>
          </div>
          <div style="flex:1;" class="center li-he border-l"></div>
          <div style="width:19%;" class="border-l">
            <span class="i-b" style="margin-bottom:5px;">景观：{{order.projectSandTable.landscape}}</span>
            <span class="i-b">建筑：{{order.projectSandTable.building}}</span>
          </div>
          <div class="flex-j-i border-l" style="justify-content:center;width:19%;">
            <span v-if="order.liftingEquipment.type === '直升'" class="marqueed">直升</span>
            <span v-else class="marquee">直升</span>
          </div>
          <div style="width:19%;" class="border-l">
            <span class="i-b" style="margin-bottom:5px;">景观：{{order.other.landscape}}</span>
            <span class="i-b">建筑：{{order.other.building}}</span>
          </div>
        </div>
        <div class="flex border-b">
          <div style="width:19%;height:100px;line-height:100px;" class="center">模型比例</div>
          <div style="flex:1;" class="center li-he border-l">
            <div class="height border-b"></div>
            <div class="height"></div>
          </div>
          <div style="width:19%;" class="li-he border-l">
            <div class="height border-b">
              <span class="i-b">外尺寸：{{order.projectSandTable.externalDimensions}}</span>
            </div>
            <div class="height">
              <span class="i-b">内尺寸：{{order.projectSandTable.innerDimension}}</span>
            </div>
          </div>
          <div style="width:19%;" class="center li-he border-l">
            <div class="height border-b">
              <span v-if="order.liftingEquipment.type === '选升'" class="marqueed">选升</span>
              <span v-else class="marquee">选升</span>
            </div>
            <div class="height">
              <span v-if="order.liftingEquipment.type === '层数'" class="marqueed">层数</span>
              <span v-else class="marquee">层数</span>
            </div>
          </div>
          <div style="width:19%;" class="li-he border-l">
            <div class="height border-b">
              <span class="i-b">外尺寸：{{order.other.externalDimensions}}</span>
            </div>
            <div class="height">
              <span class="i-b">内尺寸：{{order.other.innerDimension}}</span>
            </div>
          </div>
        </div>
        <div class="flex-j-i border-b" style="line-height:30px;">
          <span :class="formatProductionType('玻璃罩')">玻璃罩</span>
          <span :class="formatProductionType('自定义厚度及高度')">
            厚度及高度：
            <span
              style="text-decoration:underline;"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </span>
          <span :class="formatProductionType('玻璃护栏')">玻璃护栏</span>
          <span :class="formatProductionType('其它特殊要求')">
            其它特殊要求：
            <span
              style="text-decoration:underline;"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </span>
        </div>
        <h3 class="height border-b center li-he">模型底座要求</h3>
        <div class="flex border-b">
          <div class="li-he center border-r" style="width:19%;">项目沙盘</div>
          <div class="flex-j-i" style="flex:1;">
            <span :class="formatProjectSandTableType('天然大理石')">天然大理石</span>
            <span :class="formatProjectSandTableType('颜色待定')">颜色待定</span>
            <span :class="formatProjectSandTableType('不锈钢')">不锈钢</span>
            <span :class="formatProjectSandTableType('木质烤漆')">木质烤漆</span>
            <span :class="formatProjectSandTableType('仿石材')">仿石材</span>
            <span :class="formatProjectSandTableType('人造大理石')">人造大理石</span>
            <span :class="formatProjectSandTableType('其它')">其它</span>
            <span :class="formatProjectSandTableType('底座高度 600mm')">底座高度 600mm</span>
            <span :class="formatProjectSandTableType('黑色镜面玻璃')">黑色镜面玻璃</span>
          </div>
        </div>
        <div class="flex border-b" style="min-height:200px;">
          <div
            style="width:19%;align-items:center;justify-content: center"
            class="flex center border-r"
          >
            <div>底座说明</div>
          </div>
          <div style="display:flex;flex:1;">
            <div style="width:50%;max-width:50%;height:100%;font-size:0;" class="border-r">
              <img
                crossorigin="anonymous"
                v-if="order.modelBase.referenceMap"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + order.modelBase.referenceMap"
              />
            </div>
            <div style="width:50%;max-width:50%;height:100%;" class="box-s">
              <p style="margin-bottom:10px;">
                大理石型号：
                <span class="col-8">{{order.modelBase.marbleType}}</span>
              </p>
              <p style="margin-bottom:10px;">
                贴脚线灯光：
                <span class="col-8">{{order.modelBase.footLineLighting}}</span>
              </p>
              <p>
                其它要求说明：
                <span class="col-8">{{order.modelBase.description}}</span>
              </p>
            </div>
          </div>
        </div>
        <h3 class="height border-b center li-he">建筑制作要求</h3>
        <div class="flex border-b" style="min-height:200px;">
          <div
            style="width:19%;align-items:center;justify-content: center"
            class="flex center border-r"
          >
            <div>住宅建筑外立面</div>
          </div>
          <div class="flex" style="flex:1;">
            <div style="width:50%;max-width:50%;height:100%;font-size:0;" class="border-r">
              <img
                crossorigin="anonymous"
                v-if="order.buildingProduction.facade.referenceMap"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + order.buildingProduction.facade.referenceMap"
              />
            </div>
            <div class="box-s" style="width:50%;max-width:50%;height:100%;">
              <p style="margin-bottom:10px;">
                <span :class="formatbuildingProductionFacade('外墙写实表现')">外墙写实表现</span>
                <span :class="formatbuildingProductionFacade('镜面')">镜面</span>
                <span :class="formatbuildingProductionFacade('幕墙玻璃')">幕墙玻璃</span>
                <span :class="formatbuildingProductionFacade('木质')">木质</span>
                <span :class="formatbuildingProductionFacade('水钻')">水钻</span>
                <span :class="formatbuildingProductionFacade('外墙磨砂')">外墙磨砂</span>
              </p>
              <p>
                其它要求说明：
                <span class="col-8">{{order.buildingProduction.facade.description}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex border-b">
          <div class="li-he center border-r" style="width:19%;">项目沙盘</div>
          <div class="flex-j-i" style="flex:1;">
            <span :class="order.buildingProduction.abs === 'ABS1.0' ? 'marqueed' : 'marquee'">ABS1.0</span>
            <span :class="order.buildingProduction.abs === 'ABS1.2' ? 'marqueed' : 'marquee'">ABS1.2</span>
            <span :class="order.buildingProduction.abs === 'ABS1.5' ? 'marqueed' : 'marquee'">ABS1.5</span>
            <span :class="order.buildingProduction.abs === 'ABS2.0' ? 'marqueed' : 'marquee'">ABS2.0</span>
            <span
              :class="order.buildingProduction.abs === 'ABS3.0拼角' ? 'marqueed' : 'marquee'"
            >ABS3.0拼角</span>
            <span
              :class="order.buildingProduction.abs === 'ABS4.0拼角' ? 'marqueed' : 'marquee'"
            >ABS4.0拼角</span>
          </div>
        </div>
        <div class="flex border-b" style="min-height:200px;">
          <div
            style="width:19%;align-items:center;justify-content: center"
            class="flex center border-r"
          >
            <div>住宅内部及立面灯光</div>
          </div>
          <div class="flex" style="flex:1;">
            <div style="width:50%;max-width:50%;height:100%;font-size:0;" class="border-r">
              <img
                crossorigin="anonymous"
                v-if="order.buildingProduction.innerFacade.referenceMap"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + order.buildingProduction.innerFacade.referenceMap"
              />
            </div>
            <div style="width:50%;max-width:50%;height:100%;" class="box-s">
              <p style="margin-bottom:10px;">
                <span :class="formatbuildingProductionInnerFacade('万家灯动态控制')">万家灯动态控制</span>
                <span :class="formatbuildingProductionInnerFacade('透明玻璃灯板')">透明玻璃灯板</span>
                <span :class="formatbuildingProductionInnerFacade('整体透暖色天花灯')">整体透暖色天花灯</span>
              </p>
              <p style="margin-bottom:10px;">
                建筑内部灯光：
                <br />
                <span
                  :class="order.buildingProduction.innerFacade.internalLight === '全亮' ? 'marqueed' : 'marquee'"
                >全亮</span>
                <span
                  :class="order.buildingProduction.innerFacade.internalLight === '交替变化' ? 'marqueed' : 'marquee'"
                >交替变化</span>
                <span
                  :class="order.buildingProduction.innerFacade.internalLight   === '二维灯光' ? 'marqueed' : 'marquee'"
                >二维灯光</span>
              </p>
              <p style="margin-bottom:10px;">
                建筑轮廓灯光：
                <br />
                <span
                  :class="order.buildingProduction.innerFacade.contourLight === '单色' ? 'marqueed' : 'marquee'"
                >单色</span>
                <span
                  :class="order.buildingProduction.innerFacade.contourLight === '彩色' ? 'marqueed' : 'marquee'"
                >彩色</span>
                <span
                  :class="order.buildingProduction.innerFacade.contourLight   === '全彩二维' ? 'marqueed' : 'marquee'"
                >全彩二维</span>
              </p>
              <p>
                其它要求说明：
                <span class="col-8">{{order.buildingProduction.innerFacade.description}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex border-b" style="min-height:200px;">
          <div
            style="width:19%;align-items:center;justify-content: center"
            class="flex center border-r"
          >
            <div>商业建筑外立面</div>
          </div>
          <div class="flex" style="flex:1;">
            <div style="width:50%;max-width:50%;height:100%;font-size:0;" class="border-r">
              <img
                crossorigin="anonymous"
                v-if="order.buildingProduction.businessFacade.referenceMap"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + order.buildingProduction.businessFacade.referenceMap"
              />
            </div>
            <div style="width:50%;max-width:50%;height:100%;" class="box-s">
              <p style="margin-bottom:10px;">
                <span
                  :class="formatbuildingProductionBusinessFacade('商业写实制作，内部按甲方平面要求布局')"
                >商业写实制作，内部按甲方平面要求布局</span>
                <span :class="formatbuildingProductionBusinessFacade('外墙写实表现')">外墙写实表现</span>
                <span :class="formatbuildingProductionBusinessFacade('商业支撑剖开制作')">商业支撑剖开制作</span>
                <span :class="formatbuildingProductionBusinessFacade('镜面')">镜面</span>
                <span :class="formatbuildingProductionBusinessFacade('幕墙玻璃')">幕墙玻璃</span>
                <span :class="formatbuildingProductionBusinessFacade('木质')">木质</span>
                <span :class="formatbuildingProductionBusinessFacade('水钻')">水钻</span>
                <span :class="formatbuildingProductionBusinessFacade('外墙磨砂')">外墙磨砂</span>
                <span :class="formatbuildingProductionBusinessFacade('商业镜面勾线，屋面屋顶花园')">商业镜面勾线，屋面屋顶花园</span>
              </p>
              <p>
                其它要求说明：
                <span class="col-8">{{order.buildingProduction.businessFacade.description}}</span>
              </p>
            </div>
          </div>
        </div>
        <h3 class="height border-b center li-he">景观制作要求</h3>
        <div class="flex border-b">
          <div class="li-he center border-r" style="width:19%;">景观表现</div>
          <div class="flex-j-i" style="flex:1;">
            <span
              :class="order.landscapeProduction.landscapePerformance   === '无地形' ? 'marqueed' : 'marquee'"
            >无地形</span>
            <span
              :class="order.landscapeProduction.landscapePerformance   === '微地形' ? 'marqueed' : 'marquee'"
            >微地形</span>
            <span
              :class="order.landscapeProduction.landscapePerformance   === '有地形' ? 'marqueed' : 'marquee'"
            >有地形</span>
            <span
              :class="order.landscapeProduction.landscapePerformance   === '其它' ? 'marqueed' : 'marquee'"
            >其它</span>
          </div>
        </div>
        <div class="flex border-b">
          <div class="li-he center border-r" style="width:19%;line-height:100px;">园林风光</div>
          <div class="center" style="flex:1;">
            <div class="height li-he border-b" style="width:100%;">
              <span :class="formatlandscapeProductionGardenScenery('8mm高仿真草坪')">8mm高仿真草坪</span>
            </div>
            <div class="li-he" style="width:100%;">
              <span :class="formatlandscapeProductionGardenScenery('建筑屋顶绿化')">建筑屋顶绿化</span>
              <span :class="formatlandscapeProductionGardenScenery('其它（铺砖、种植按照甲方提供景观图纸制作（提供资料））')">
                其它
                <span style="text-decoration:underline;">铺砖、种植按照甲方提供景观图纸制作</span>（提供资料）
              </span>
            </div>
          </div>
        </div>
        <div class="flex border-b" style="min-height:200px;">
          <div
            style="width:19%;align-items:center;justify-content: center"
            class="flex center border-r"
          >
            <div>景观道路</div>
          </div>
          <div class="flex" style="flex:1;">
            <div style="width:50%;max-width:50%;height:100%;font-size:0;" class="border-r">
              <img
                crossorigin="anonymous"
                v-if="order.landscapeProduction.landscapeRoad.referenceMap"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + order.landscapeProduction.landscapeRoad.referenceMap"
              />
            </div>
            <div style="width:50%;max-width:50%;height:100%;" class="box-s">
              <p style="margin-bottom:10px;">
                景观道路：
                <br />
                <span :class="formatlandscapeProductionLandscapeRoadType('亚克力道路（汽车打灯）')">亚克力道路（汽车打灯）</span>
                <span :class="formatlandscapeProductionLandscapeRoadType('边预埋蓝色灯带')">边预埋蓝色灯带</span>
                <span :class="formatlandscapeProductionLandscapeRoadType('边预埋其它颜色灯带')">边预埋____色灯带</span>
              </p>
              <p>
                其它要求说明：
                <span class="col-8">{{order.landscapeProduction.landscapeRoad.description}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex border-b">
          <div class="li-he center border-r" style="width:19%;">地形表现</div>
          <div class="flex-j-i" style="flex:1;">
            <span :class="formatlandscapeProductionTerrainPerformance('常规表现')">常规表现</span>
            <span :class="formatlandscapeProductionTerrainPerformance('等高线表现')">等高线表现</span>
            <span :class="formatlandscapeProductionTerrainPerformance('其它（参考照片）')">
              其它
              <span
                style="text-decoration:underline;"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>（参考照片）
            </span>
          </div>
        </div>
        <div class="flex border-b">
          <div class="li-he center border-r" style="width:19%;">地形表现</div>
          <div class="flex-j-i" style="flex:1;">
            <span :class="formatLandscapeLight('地灯')">地灯</span>
            <span :class="formatLandscapeLight('路灯')">路灯</span>
            <span :class="formatLandscapeLight('庭院灯')">庭院灯</span>
            <span :class="formatLandscapeLight('商业街程序灯光（预埋）')">商业街程序灯光（预埋）</span>
            <span :class="formatLandscapeLight('节点灯光')">节点灯光</span>
          </div>
        </div>
        <div class="flex border-b" style="min-height:200px;">
          <div
            style="width:19%;align-items:center;justify-content: center"
            class="flex center border-r"
          >
            <div>水景表现及灯光</div>
          </div>
          <div class="flex" style="flex:1;">
            <div style="width:50%;max-width:50%;height:100%;font-size:0;" class="border-r">
              <img
                crossorigin="anonymous"
                v-if="order.landscapeProduction.WaterPerformanceLight.referenceMap"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + order.landscapeProduction.WaterPerformanceLight.referenceMap"
              />
            </div>
            <div style="width:50%;max-width:50%;height:100%;" class="box-s">
              <p style="margin-bottom:10px;">
                <span
                  :class="order.landscapeProduction.WaterPerformanceLight.type === '亚克力水面' ? 'marqueed' : 'marquee'"
                >亚克力水面</span>
                <span
                  :class="order.landscapeProduction.WaterPerformanceLight.type === '真水' ? 'marqueed' : 'marquee'"
                >真水</span>
                <span
                  :class="order.landscapeProduction.WaterPerformanceLight.type === 'LED水' ? 'marqueed' : 'marquee'"
                >LED水</span>
              </p>
              <p>
                其它要求说明：
                <span
                  class="col-8"
                >{{order.landscapeProduction.WaterPerformanceLight.description}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex border-b">
          <div class="li-he center border-r" style="width:19%;line-height:100px;">水晶及其它表现方式灯光方式</div>
          <div class="center" style="flex:1;line-height:50px;">
            <div class="height border-b" style="width:100%;">
              <span :class="formatCrystalPerformanceLight('透明水晶')">透明水晶</span>（
              <span :class="formatCrystalPerformanceLight('底板金色材质板')">底板金色材质板</span>
              <span :class="formatCrystalPerformanceLight('整体透光（透明水晶）')">整体透光（透明水晶）</span>
              <span :class="formatCrystalPerformanceLight('底板贴银铂纸')">底板贴银铂纸</span>）
              <span :class="formatCrystalPerformanceLight('住宅水晶高度')">住宅水晶高度</span>
              <span :class="formatCrystalPerformanceLight('亚克力镜面体块')">亚克力镜面体块</span>
              <span :class="formatCrystalPerformanceLight('贴膜勾窗线体块')">贴膜勾窗线体块</span>
              <span :class="formatCrystalPerformanceLight('磨砂亚克力体块')">磨砂亚克力体块</span>
            </div>
            <div class="height" style="width:100%;line-height:50px;">
              <span :class="formatCrystalPerformanceLight('金色水晶')">金色水晶</span>（
              <span :class="formatCrystalPerformanceLight('底板轮廊灯（白色）')">底板轮廊灯（白色）</span>
              <span :class="formatCrystalPerformanceLight('整体透光（金色水晶）')">整体透光（金色水晶）</span>
              <span :class="formatCrystalPerformanceLight('底板贴银布')">底板贴银布</span>）
              <span :class="formatCrystalPerformanceLight('商业水晶高度')">商业水晶高度</span>
              <span :class="formatCrystalPerformanceLight('商业勾线镜面体块')">商业勾线镜面体块</span>
            </div>
          </div>
        </div>
        <div class="flex border-b" style="min-height:200px;">
          <div
            style="width:19%;align-items:center;justify-content: center"
            class="flex center border-r"
          >
            <div>建筑体块</div>
          </div>
          <div class="flex" style="flex:1;">
            <div style="width:50%;max-width:50%;height:100%;font-size:0;" class="border-r">
              <img
                crossorigin="anonymous"
                v-if="order.landscapeProduction.buildingBlock.referenceMap"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + order.landscapeProduction.buildingBlock.referenceMap"
              />
            </div>
            <div style="width:50%;max-width:50%;height:100%;" class="box-s">
              <p>
                其它要求说明：
                <span class="col-8">{{order.landscapeProduction.buildingBlock.description}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div style="width:19%;" class="height li-he border-r">
            <span class="i-b">业务员：</span>
          </div>
          <div style="width:20%;" class="height li-he border-r">
            <span class="i-b">车间主任：</span>
          </div>
          <div style="width:20.5%;" class="height li-he border-r">
            <span class="i-b">预审部：</span>
          </div>
          <div style="width:20%;" class="height li-he border-r">
            <span class="i-b">总金额：</span>
          </div>
          <div style="flex:1;" class="center height li-he">综合评审由质检部评审</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestUrl } from "@/default";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
export default {
  created() {
    this.order = JSON.parse(sessionStorage.getItem("order"));
  },
  data() {
    return {
      order: {},
      requestUrl,
      src: ""
    };
  },
  methods: {
    formatProjectSandTableType(str) {
      const { order } = this;
      let className;
      order.modelBase.projectSandTableType.forEach(item => {
        if (item === str) {
          className = "marqueed";
        }
      });
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatLandscapeLight(str) {
      const { order } = this;
      let className;
      order.landscapeProduction.landscapeLight.forEach(item => {
        if (item === str) {
          className = "marqueed";
        }
      });
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatCrystalPerformanceLight(str) {
      const { order } = this;
      let className;
      order.landscapeProduction.crystalPerformanceLight.forEach(item => {
        if (item === str) {
          className = "marqueed";
        }
      });
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatProductionType(str) {
      const { order } = this;
      let className;
      order.productionType.forEach(item => {
        if (item === str) {
          className = "marqueed";
        }
      });
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatbuildingProductionFacade(str) {
      const { order } = this;
      let className;
      order.buildingProduction.facade.type.forEach(item => {
        if (item === str) {
          className = "marqueed";
        }
      });
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatbuildingProductionInnerFacade(str) {
      const { order } = this;
      let className;
      order.buildingProduction.innerFacade.type.forEach(item => {
        if (item === str) {
          className = "marqueed";
        }
      });
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatbuildingProductionBusinessFacade(str) {
      const { order } = this;
      let className;
      order.buildingProduction.businessFacade.type.forEach(item => {
        if (item === str) {
          className = "marqueed";
        }
      });
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatlandscapeProductionGardenScenery(str) {
      const { order } = this;
      let className;
      order.landscapeProduction.gardenScenery.forEach(item => {
        if (item === str) {
          className = "marqueed";
        }
      });
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatlandscapeProductionLandscapeRoadType(str) {
      const { order } = this;
      let className;
      order.landscapeProduction.landscapeRoad.type.forEach(item => {
        if (item === str) {
          className = "marqueed";
        }
      });
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatlandscapeProductionTerrainPerformance(str) {
      const { order } = this;
      let className;
      order.landscapeProduction.terrainPerformance.forEach(item => {
        if (item === str) {
          className = "marqueed";
        }
      });
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    download() {
      domtoimage
        .toBlob(document.getElementsByClassName("table-container")[0])
        .then(blob => {
          saveAs(blob, this.order.projectName);
        })
        .catch(error => {
          this.$notify.error({
            title: "错误",
            message: "下载失败"
          });
        });
    }
  }
};
</script>

<style scoped>
@import "../../../../static/css/template.css";
</style>
