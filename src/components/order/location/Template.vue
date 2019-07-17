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
            <div class="height li-he">TS&nbsp;&nbsp;{{locationOrder.documentNumber}}</div>
          </div>
          <h3 style="width:50%;line-height:100px;" class="center border-r">精诚模型项目制作单</h3>
          <div style="width:10%;" class="border-r">
            <div class="center height border-b li-he">下单日期</div>
            <div class="center height li-he">完成日期</div>
          </div>
          <div style="flex:1;">
            <div class="center height border-b li-he">{{locationOrder.orderDate}}</div>
            <div class="center height li-he">{{locationOrder.completeDate}}</div>
          </div>
        </div>
        <div class="flex border-b">
          <div style="width:7%;" class="height li-he border-r">项目名称：</div>
          <div
            style="width:62%;"
            class="height li-he border-r"
          >&nbsp;&nbsp;{{locationOrder.projectName}}</div>
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
              <span class="i-b">项目节点总负责人：{{locationOrder.projectPrincipal}}</span>
            </div>
            <div class="height li-he">
              <span class="i-b">项目策划人：{{locationOrder.projectPlanner}}</span>
            </div>
          </div>
          <div style="width:19%;" class="border-r">
            <div class="height border-b li-he">
              <span class="i-b">业务员：{{locationOrder.salesman}}</span>
            </div>
            <div class="height li-he"></div>
          </div>
          <div style="flex:1;" class="box-s">{{locationOrder.projectAddress}}</div>
        </div>
        <div class="height center li-he border-b">模型制作内容（模型范围示意图）</div>
        <div class="flex border-b">
          <div style="width:19%;" class="height center li-he">模型类别</div>
          <div style="flex:1;" class="height center li-he border-l">项目沙盘</div>
          <div style="width:19%;" class="height center li-he border-l">项目沙盘</div>
          <div style="width:19%;" class="height center li-he border-l">安装性质</div>
          <div style="width:19%;" class="height center li-he border-l">其它</div>
        </div>
        <div class="flex border-b">
          <div style="width:19%;" class="height center li-he">模型数量</div>
          <div style="flex:1;" class="height center li-he border-l"></div>
          <div style="width:19%;" class="height center li-he border-l">
            <template
              v-if="locationOrder.projectSandTable.number"
            >{{locationOrder.projectSandTable.number}}</template>
            <template v-else>&nbsp;</template>
            套
          </div>
          <div style="width:19%;" class="height center li-he border-l">
            <template
              v-if="locationOrder.installationNature.number"
            >{{locationOrder.installationNature.number}}</template>
            <template v-else>&nbsp;</template>
            套
          </div>
          <div style="width:19%;" class="height center li-he border-l">
            <template v-if="locationOrder.other.number">{{locationOrder.other.number}}</template>
            <template v-else>&nbsp;</template>
            套
          </div>
        </div>

        <div class="flex border-b">
          <div style="width:19%;" class="flex-j-i">
            <span>模型比例</span>
          </div>
          <div style="flex:1;" class="height center li-he border-l"></div>
          <div style="width:19%;" class="border-l">
            <span
              class="i-b"
              style="margin-bottom:5px;"
            >景观：{{locationOrder.projectSandTable.landscape}}</span>
            <span class="i-b">建筑：{{locationOrder.projectSandTable.building}}</span>
          </div>
          <div class="flex-j-i border-l" style="justify-content:center;width:19%;">
            <span v-if="locationOrder.installationNature.type === '底座安装'" class="marqueed">底座安装</span>
            <span v-else class="marquee">底座安装</span>
          </div>
          <div style="width:19%;" class="border-l">
            <span class="i-b" style="margin-bottom:5px;">景观：{{locationOrder.other.landscape}}</span>
            <span class="i-b">建筑：{{locationOrder.other.building}}</span>
          </div>
        </div>
        <div class="flex border-b">
          <div style="width:19%;height:100px;line-height:100px;" class="center">地盘规格</div>
          <div style="flex:1;" class="center li-he border-l">
            <div class="height border-b"></div>
            <div class="height"></div>
          </div>
          <div style="width:19%;" class="li-he border-l">
            <div class="height border-b">
              <span class="i-b">外尺寸：{{locationOrder.projectSandTable.externalDimensions}}</span>
            </div>
            <div class="height">
              <span class="i-b">内尺寸：{{locationOrder.projectSandTable.innerDimension}}</span>
            </div>
          </div>
          <div style="width:19%;" class="center li-he border-l">
            <div class="height border-b">
              <span v-if="locationOrder.installationNature.type === '挂墙安装'" class="marqueed">挂墙安装</span>
              <span v-else class="marquee">挂墙安装</span>
            </div>
            <div class="height">
              <span v-if="locationOrder.installationNature.type === '下沉安装'" class="marqueed">下沉安装</span>
              <span v-else class="marquee">下沉安装</span>
            </div>
          </div>
          <div style="width:19%;" class="li-he border-l">
            <div class="height border-b">
              <span class="i-b">外尺寸：{{locationOrder.other.externalDimensions}}</span>
            </div>
            <div class="height">
              <span class="i-b">内尺寸：{{locationOrder.other.innerDimension}}</span>
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

        <div class="flex height li-he border-b center">
          <div style="width:19%;" class="border-r">区位沙盘</div>
          <div style="flex:1;" class="flex-j-i">
            <span :class="formatLocationSandTable('石材(人造)')">石材(人造)</span>
            <span :class="formatLocationSandTable('木质')">木质</span>
            <span :class="formatLocationSandTable('皮革')">皮革</span>
            <span :class="formatLocationSandTable('玻璃')">玻璃</span>
            <span :class="formatLocationSandTable('亚克力')">亚克力</span>
            <span :class="formatLocationSandTable('石材(天然)')">石材(天然)</span>
            <span :class="formatLocationSandTable('不锈钢')">不锈钢</span>
            <span :class="formatLocationSandTable('高度')">高度</span>
            <span :class="formatLocationSandTable('其它')">其它</span>
          </div>
        </div>

        <div class="flex border-b">
          <div style="width:19%;" class="border-r center flex-j-i">
            <span>材料说明</span>
          </div>
          <div style="flex:1;" class="box-s">{{locationOrder.materialDescription}}</div>
        </div>

        <div class="flex height li-he border-b center">
          <div style="width:19%;" class="border-r">安装方式</div>
          <div style="flex:1;" class="flex-j-i">
            <span :class="locationOrder.installationMethod === '挂壁式' ? 'marqueed' : 'marquee'">挂壁式</span>
            <span :class="locationOrder.installationMethod === '镶嵌式' ? 'marqueed' : 'marquee'">镶嵌式</span>
            <span :class="locationOrder.installationMethod === '常规式' ? 'marqueed' : 'marquee'">常规式</span>
          </div>
        </div>

        <div
          class="center border-b"
          style="line-height:40px;"
        >变更说明：制作完成或者制作过程中：1.各户修改 2.沟通原因 3.质量问题导致增加工作量 须补充 （项目修改通知单）</div>

        <div class="flex border-b">
          <div style="width:19%;" class="border-r center flex-j-i">
            <span>其它特殊要求及具体制作内容说明</span>
          </div>
          <div style="flex:1;" class="box-s">{{locationOrder.claimSpecificDescription}}</div>
        </div>

        <h3 class="height border-b center li-he">区位模型制作要求</h3>

        <div class="flex li-he border-b center">
          <div style="width:19%;line-height:60px;" class="border-r">区位表现方式</div>
          <div style="flex:1;">
            <div style="height:30px;line-height:30px;" class="center">
              <span :class="formatLocationPerformance('钢化玻璃丝印')">钢化玻璃丝印</span>
              <span
                :class="formatLocationPerformance('亚克力+道路乳化玻璃(自定亚克力颜色)')"
              >亚克力+道路乳化玻璃(亚克力颜色：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</span>
              <span :class="formatLocationPerformance('仿铜表现')">仿铜表现</span>
              <span :class="formatLocationPerformance('侧边透光')">侧边透光</span>
              <span
                :class="formatLocationPerformance('不绣刚表现(自定颜色)')"
              >不绣刚表现(颜色：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</span>
              <span :class="formatLocationPerformance('镜面钢化玻璃丝印')">镜面钢化玻璃丝印</span>
            </div>
            <div style="height:30px;line-height:30px;" class="center">
              <span
                :class="formatLocationPerformance('皮革+道路乳化玻璃(自定皮革材料编号)')"
              >皮革+道路乳化玻璃(皮革材料编号：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</span>
              <span
                :class="formatLocationPerformance('木质表现(自定木质材料)')"
              >木质表现(木质材料名称：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</span>
              <span :class="formatLocationPerformance('其拉丝仿铜区位它')">拉丝仿铜区位</span>
              <span :class="formatLocationPerformance('真铜区位')">真铜区位</span>
              <span :class="formatLocationPerformance('写实区位')">写实区位</span>
            </div>
          </div>
        </div>

        <div class="flex border-b" style="min-height:200px;">
          <div
            style="width:19%;align-items:center;justify-content: center"
            class="flex center border-r"
          >
            <div>区位本案表现</div>
          </div>
          <div class="flex" style="flex:1;">
            <div style="width:50%;max-width:50%;height:100%;font-size:0;" class="border-r">
              <img
                v-if="locationOrder.locationModelProduction.locationItselfPerformance.referenceMap"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' 
                + locationOrder.locationModelProduction.locationItselfPerformance.referenceMap"
              />
            </div>
            <div style="width:50%;max-width:50%;height:100%;" class="box-s">
              <p style="margin-bottom:10px;">
                <span :class="formatLocationItselfPerformanceType('水晶')">水晶</span>（
                <span :class="formatLocationItselfPerformanceType('透明水晶')">透明水晶</span>
                <span :class="formatLocationItselfPerformanceType('金色水晶')">金色水晶</span>
                <span :class="formatLocationItselfPerformanceType('琥珀色水晶')">琥珀色水晶</span>
                ）
                <span :class="formatLocationItselfPerformanceType('其它')">其它</span>
              </p>
              <p>
                其它要求说明：
                <span
                  class="col-8"
                >{{locationOrder.locationModelProduction.locationItselfPerformance.description}}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="flex border-b" style="min-height:200px;">
          <div
            style="width:19%;align-items:center;justify-content: center"
            class="flex center border-r"
          >
            <div>区位灯光要求</div>
          </div>
          <div class="flex" style="flex:1;">
            <div style="width:50%;height:100%;font-size:0;" class="flex border-r">
              <div style="width:33.33%;height:100%;font-size:0;" class="border-r">
                <img
                  v-if="locationOrder.locationModelProduction.locationLight.referenceMap[0]"
                  style="max-width:100%;"
                  :src="requestUrl + '/upload/' 
                + locationOrder.locationModelProduction.locationLight.referenceMap[0]"
                />
              </div>
              <div style="width:33.33%;height:100%;font-size:0;" class="border-r">
                <img
                  v-if="locationOrder.locationModelProduction.locationLight.referenceMap[1]"
                  style="max-width:100%;"
                  :src="requestUrl + '/upload/' 
                + locationOrder.locationModelProduction.locationLight.referenceMap[1]"
                />
              </div>
              <div style="width:33.33%;height:100%;font-size:0;" class="border-r">
                <img
                  v-if="locationOrder.locationModelProduction.locationLight.referenceMap[2]"
                  style="max-width:100%;"
                  :src="requestUrl + '/upload/' 
                + locationOrder.locationModelProduction.locationLight.referenceMap[2]"
                />
              </div>
            </div>
            <div style="width:50%;max-width:50%;height:100%;" class="box-s">
              <p style="margin-bottom:10px;">
                <span :class="formatLocationLightType('本案')">本案</span>（
                <span :class="formatLocationLightType('本案(底部透灯)')">底部透灯</span>
                <span :class="formatLocationLightType('本案(七彩)')">七彩</span>
                <span :class="formatLocationLightType('本案(单色)')">单色</span>）
                <span :class="formatLocationLightType('周边配套')">周边配套</span>（
                <span :class="formatLocationLightType('周边配套(底部透灯)')">底部透灯</span>
                <span :class="formatLocationLightType('周边配套(七彩)')">七彩</span>
                <span :class="formatLocationLightType('周边配套(单色)')">单色</span>）
                <span :class="formatLocationLightType('商圈')">商圈</span>（
                <span :class="formatLocationLightType('商圈(底部透灯)')">底部透灯</span>
                <span :class="formatLocationLightType('商圈(七彩)')">七彩</span>
                <span :class="formatLocationLightType('商圈(单色)')">单色</span>
                <span :class="formatLocationLightType('商圈(跑动)')">跑动</span>）
                <span :class="formatLocationLightType('地铁路线及高贴路线圈')">地铁路线及高贴路线圈</span>（
                <span :class="formatLocationLightType('地铁路线及高贴路线圈(底部透灯)')">底部透灯</span>
                <span :class="formatLocationLightType('地铁路线及高贴路线圈(七彩)')">七彩</span>
                <span :class="formatLocationLightType('地铁路线及高贴路线圈(单色)')">单色</span>
                <span :class="formatLocationLightType('地铁路线及高贴路线圈(跑动)')">跑动</span>）
                <span :class="formatLocationLightType('其它')">其它</span>
              </p>
              <p>
                其它要求说明：
                <span
                  class="col-8"
                >{{locationOrder.locationModelProduction.locationLight.description}}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="flex border-b">
          <div style="width:19%;" class="border-r center flex-j-i">
            <span>其它特殊要求及具体制作内容说明</span>
          </div>
          <div
            style="flex:1;"
            class="box-s"
          >{{locationOrder.locationModelProduction.claimContentDescription}}</div>
        </div>

        <h3 class="height border-b center li-he">规划模型景观制作要求</h3>

        <div class="flex height li-he border-b center">
          <div style="width:19%;" class="border-r">景观表现</div>
          <div style="flex:1;" class="flex-j-i">
            <span
              :class="locationOrder.landscapeProduction.landscapePerformance === '无地形' ? 'marqueed' : 'marquee'"
            >无地形</span>
            <span
              :class="locationOrder.landscapeProduction.landscapePerformance === '微地形' ? 'marqueed' : 'marquee'"
            >微地形</span>
            <span :class="locationOrder.landscapeProduction === '有地形' ? 'marqueed' : 'marquee'">有地形</span>
            <span
              :class="locationOrder.landscapeProduction.landscapePerformance === '其它' ? 'marqueed' : 'marquee'"
            >其它</span>
          </div>
        </div>

        <div class="flex border-b">
          <div class="li-he center border-r" style="width:19%;line-height:100px;">园林风格</div>
          <div class="li-he center" style="flex:1;">
            <div class="flex-j-i height border-b" style="width:100%;">
              <span :class="formatGardenStyle('精诚景观')">精诚景观</span>
              <span :class="formatGardenStyle('木质景观表现(提供照片)')">木质景观表现(提供照片)</span>
              <span :class="formatGardenStyle('概念景观表现(提供照片)')">概念景观表现(提供照片)</span>
              <span :class="formatGardenStyle('其它(提供照片)')">
                其它
                <span
                  style="text-decoration:underline;"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                (提供照片)
              </span>
            </div>
            <div class="height flex-j-i" style="width:100%;">
              <span :class="formatGardenStyle('亚克力景观(提供照片)')">亚克力景观(提供照片)</span>
              <span :class="formatGardenStyle('局部现场取景写实制作(参照图片)')">局部现场取景写实制作(提供照片)</span>
            </div>
          </div>
        </div>

        <div class="flex height li-he border-b center">
          <div style="width:19%;" class="border-r">景观道路</div>
          <div style="flex:1;" class="flex-j-i">
            <span :class="formatLandscapeRoad('沥青道路')">沥青道路</span>
            <span :class="formatLandscapeRoad('亚克力动感道路')">亚克力动感道路</span>
            <span :class="formatLandscapeRoad('亚克力沥青道路')">亚克力沥青道路</span>
            <span :class="formatLandscapeRoad('镜面玻璃动感道路')">镜面玻璃动感道路</span>
            <span :class="formatLandscapeRoad('其它(参照图片)')">
              其它
              <span
                style="text-decoration:underline;"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>(参考照片)
            </span>
          </div>
        </div>

        <div class="flex height li-he border-b center">
          <div style="width:19%;" class="border-r">地形表现</div>
          <div style="flex:1;" class="flex-j-i">
            <span :class="formatTerrainPerformance('常规表现')">常规表现</span>
            <span :class="formatTerrainPerformance('等高线表现')">等高线表现</span>
            <span :class="formatTerrainPerformance('其它(参照图片)')">
              其它
              <span
                style="text-decoration:underline;"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>(参照图片)
            </span>
          </div>
        </div>

        <div class="flex li-he border-b center">
          <div style="width:19%;line-height:90px;" class="border-r">景观灯光</div>
          <div style="flex:1;">
            <div style="height:30px;line-height:30px;">
              <span :class="formatLandscapeLight('地灯')">地灯</span>
              <span :class="formatLandscapeLight('路灯')">路灯</span>
              <span :class="formatLandscapeLight('庭院灯')">庭院灯</span>
              <span :class="formatLandscapeLight('商业街程序灯光')">商业街程序灯光</span>
              <span :class="formatLandscapeLight('重要道路线灯光')">重要道路线灯光</span>（
              <span :class="formatLandscapeLight('重要道路线灯光(单体)')">单体</span>
              <span :class="formatLandscapeLight('重要道路线灯光(七彩)')">七彩</span>
              <span :class="formatLandscapeLight('重要道路线灯光(静态)')">静态</span>
              <span :class="formatLandscapeLight('重要道路线灯光(动态)')">动态</span>）
            </div>
            <div style="height:30px;line-height:30px;">
              <span :class="formatLandscapeLight('重要地区轮廊灯光')">重要地区轮廊灯光</span>（
              <span :class="formatLandscapeLight('重要地区轮廊灯光(单色)')">单色</span>
              <span :class="formatLandscapeLight('重要地区轮廊灯光(七彩)')">七彩</span>
              <span :class="formatLandscapeLight('重要地区轮廊灯光(静态)')">静态</span>
              <span :class="formatLandscapeLight('重要地区轮廊灯光(动态)')">动态</span>）
              <span :class="formatLandscapeLight('商业街程序灯光(预埋)')">商业街程序灯光(预埋)</span>
              <span :class="formatLandscapeLight('节点灯光')">节点灯光</span>
            </div>
            <div style="height:30px;line-height:30px;">
              <span :class="formatLandscapeLight('地铁路线及高铁路线圈')">地铁路线及高铁路线圈</span>（
              <span :class="formatLandscapeLight('地铁路线及高铁路线圈(七彩)')">七彩</span>
              <span :class="formatLandscapeLight('地铁路线及高铁路线圈(单色)')">单色</span>
              <span :class="formatLandscapeLight('地铁路线及高铁路线圈(静态)')">静态</span>
              <span :class="formatLandscapeLight('地铁路线及高铁路线圈(跑动)')">跑动</span>）
              <span :class="formatLandscapeLight('其它(参照图片)')">其它(参照图片)</span>
            </div>
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
                v-if="locationOrder.landscapeProduction.waterPerformanceLight.referenceMap"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' 
                + locationOrder.landscapeProduction.waterPerformanceLight.referenceMap"
              />
            </div>
            <div style="width:50%;max-width:50%;height:100%;" class="box-s">
              <p style="margin-bottom:10px;">
                <span :class="formatWaterPerformanceLightType('整体LED透光')">整体LED透光</span>（
                <span :class="formatWaterPerformanceLightType('整体LED透光(亚克力)')">亚克力</span>
                <span :class="formatWaterPerformanceLightType('整体LED透光(水纹玻璃)')">水纹玻璃</span>）
                <span :class="formatWaterPerformanceLightType('侧边透光')">侧边透光</span>（
                <span :class="formatWaterPerformanceLightType('侧边透光(亚克力)')">亚克力</span>
                <span :class="formatWaterPerformanceLightType('侧边透光(水纹玻璃)')">水纹玻璃</span>）
                <span :class="formatWaterPerformanceLightType('镭射灯投影灯光')">侧边透光</span>（
                <span :class="formatWaterPerformanceLightType('镭射灯投影灯光(亚克力)')">亚克力</span>
                <span :class="formatWaterPerformanceLightType('镭射灯投影灯光(水纹玻璃)')">水纹玻璃</span>）
                <span :class="formatWaterPerformanceLightType('其它')">其它</span>
              </p>
              <p>
                其它要求说明：
                <span
                  class="col-8"
                >{{locationOrder.landscapeProduction.waterPerformanceLight.description}}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="flex li-he border-b center">
          <div style="width:19%;height:90px;line-height:90px;" class="border-r">
            水晶及灯光方式
            <span>
              <span :class="formatCrystalLight('平放')">平放</span>
              <span :class="formatCrystalLight('挂靠')">挂靠</span>
            </span>
          </div>
          <div style="flex:1;">
            <div style="height:30px;" class="flex-j-i border-b">
              <span :class="formatCrystalLight('透明水晶')">透明水晶</span>（
              <span :class="formatCrystalLight('透明水晶(轮廊灯)')">轮廊灯</span>
              <span :class="formatCrystalLight('透明水晶(整体透光)')">整体透光</span>
              <span :class="formatCrystalLight('透明水晶(底板贴钻)')">底板贴钻</span>
              <span :class="formatCrystalLight('透明水晶(底板贴银布)')">底板贴银布</span>）
              <span :class="formatCrystalLight('透明水晶(住宅水晶高度)')">住宅水晶高度</span>
              <span :class="formatCrystalLight('透明水晶(商业水晶高度)')">商业水晶高度</span>
            </div>
            <div style="height:30px;" class="flex-j-i border-b">
              <span :class="formatCrystalLight('金色水晶')">金色水晶</span>（
              <span :class="formatCrystalLight('金色水晶(轮廊灯)')">轮廊灯</span>
              <span :class="formatCrystalLight('金色水晶(整体透光)')">整体透光</span>
              <span :class="formatCrystalLight('金色水晶(底板贴钻)')">底板贴钻</span>
              <span :class="formatCrystalLight('金色水晶(底板贴银布)')">底板贴银布</span>）
              <span :class="formatCrystalLight('金色水晶(住宅水晶高度)')">住宅水晶高度</span>
              <span :class="formatCrystalLight('金色水晶(商业水晶高度)')">商业水晶高度</span>
            </div>
            <div style="height:30px;" class="flex-j-i">
              <span :class="formatCrystalLight('琥珀水晶')">琥珀水晶</span>（
              <span :class="formatCrystalLight('琥珀水晶(轮廊灯)')">轮廊灯</span>
              <span :class="formatCrystalLight('琥珀水晶(整体透光)')">整体透光</span>
              <span :class="formatCrystalLight('琥珀水晶(底板贴钻)')">底板贴钻</span>
              <span :class="formatCrystalLight('琥珀水晶(底板贴银布)')">底板贴银布</span>）
              <span :class="formatCrystalLight('琥珀水晶(住宅水晶高度)')">住宅水晶高度</span>
              <span :class="formatCrystalLight('琥珀水晶(商业水晶高度)')">商业水晶高度</span>
            </div>
          </div>
        </div>

        <div class="flex height li-he border-b center">
          <div style="width:19%;" class="border-r">体块</div>
          <div style="flex:1;" class="flex-j-i">
            <span :class="formatBodyBlock('磨砂体块')">磨砂体块</span>
            <span :class="formatBodyBlock('贴钻体块')">贴钻体块</span>
            <span :class="formatBodyBlock('贴银布体块')">贴银布体块</span>
            <span :class="formatBodyBlock('ABS体块')">ABS体块</span>
            <span :class="formatBodyBlock('其它(提供照片)')">
              其它
              <span
                style="text-decoration:underline;"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>(提供照片)
            </span>
          </div>
        </div>

        <div class="flex border-b" style="min-height:200px;">
          <div style="width:19%;" class="border-r center flex-j-i">
            <span>参考图片</span>
          </div>
          <div style="flex:1;" class="flex-j-i">
            <div style="width:33.33%;max-width:33.33%;height:100%;font-size:0;" class="border-r">
              <img
                v-if="locationOrder.landscapeProduction.referenceMap[0]"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + locationOrder.landscapeProduction.referenceMap[0]"
              />
            </div>
            <div style="width:33.33%;max-width:33.33%;height:100%;font-size:0;" class="border-r">
              <img
                v-if="locationOrder.landscapeProduction.referenceMap[1]"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + locationOrder.landscapeProduction.referenceMap[1]"
              />
            </div>
            <div style="width:33.33%;max-width:33.33%;height:100%;font-size:0;" class="border-r">
              <img
                v-if="locationOrder.landscapeProduction.referenceMap[2]"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + locationOrder.landscapeProduction.referenceMap[2]"
              />
            </div>
          </div>
        </div>

        <div class="flex border-b">
          <div style="width:19%;" class="border-r center flex-j-i">
            <span>其它特殊要求及建筑制作内容说明</span>
          </div>
          <div
            style="flex:1;"
            class="box-s"
          >{{locationOrder.landscapeProduction.claimBuildDescription}}</div>
        </div>

        <h3 class="height border-b center li-he">规划模型建筑制作要求</h3>

        <div class="flex li-he border-b center">
          <div style="width:19%;line-height:60px;" class="border-r">建筑立面</div>
          <div style="flex:1;">
            <div style="height:30px;line-height:30px;">
              <span :class="formatBuildingFacade('外墙写真表现')">外墙写真表现</span>
              <span :class="formatBuildingFacade('外墙贴钻表现')">外墙贴钻表现</span>
              <span :class="formatBuildingFacade('外墙亚克力表现')">外墙亚克力表现</span>
              <span :class="formatBuildingFacade('外墙木质表现')">外墙木质表现</span>
              <span :class="formatBuildingFacade('外墙概念表现')">外墙概念表现</span>
              <span :class="formatBuildingFacade('其它')">其它</span>
            </div>
            <div style="height:30px;line-height:30px;">
              <span :class="formatBuildingFacade('公建现场取景写实制作')">公建现场取景写实制作</span>
              <span :class="formatBuildingFacade('幕墙贴膜表现(颜色客户选择)')">幕墙贴膜表现(颜色客户选择)</span>
              <span :class="formatBuildingFacade('幕墙镜面表现')">幕墙镜面表现</span>
              <span :class="formatBuildingFacade('幕墙喷色表现(甲方定色)')">幕墙喷色表现(甲方定色)</span>
            </div>
          </div>
        </div>

        <div class="flex li-he border-b center">
          <div style="width:19%;height:90px;line-height:90px;" class="border-r">建筑内部及外立面灯光</div>
          <div style="flex:1;">
            <div style="height:30px;line-height:30px;" class="border-b center">
              <span :class="formatBuildingInteriorFacadeLight('住宅常规万家灯光')">住宅常规万家灯光</span>（
              <span :class="formatBuildingInteriorFacadeLight('住宅常规万家灯光(整体透光)')">整体透光</span>
              <span :class="formatBuildingInteriorFacadeLight('住宅常规万家灯光(分组亮灯)')">分组亮灯</span>）
              <span :class="formatBuildingInteriorFacadeLight('商业暖色灯光')">商业暖色灯光</span>
              <span :class="formatBuildingInteriorFacadeLight('内部常规整体透光')">内部常规整体透光</span>
              <span :class="formatBuildingInteriorFacadeLight('写字楼')">写字楼</span>
              <span :class="formatBuildingInteriorFacadeLight('外立面LED轮廊灯光(外贴)')">外立面LED轮廊灯光(外贴)</span>
            </div>
            <div style="height:30px;line-height:30px;" class="border-b center">
              <span :class="formatBuildingInteriorFacadeLight('外立面竖向LED灯光(外贴)')">外立面竖向LED灯光(外贴)</span>
              <span :class="formatBuildingInteriorFacadeLight('外立面节点(外贴)')">外立面节点(外贴)</span>
              <span :class="formatBuildingInteriorFacadeLight('公建灯光(写实参照)')">公建灯光(写实参照)</span>
            </div>
            <div style="height:30px;line-height:30px;" class="center">
              <span :class="formatBuildingInteriorFacadeLight('内部楼板横向LED轮廊灯光')">内部楼板横向LED轮廊灯光</span>（
              <span :class="formatBuildingInteriorFacadeLight('内部楼板横向LED轮廊灯光(单色)')">单色</span>
              <span :class="formatBuildingInteriorFacadeLight('内部楼板横向LED轮廊灯光(七彩)')">七彩</span>）
              <span :class="formatBuildingInteriorFacadeLight('内部柱位竖向LED流星灯光')">内部柱位竖向LED流星灯光</span>（
              <span :class="formatBuildingInteriorFacadeLight('内部柱位竖向LED流星灯光(单色)')">单色</span>
              <span :class="formatBuildingInteriorFacadeLight('内部柱位竖向LED流星灯光(七彩)')">七彩</span>）
            </div>
          </div>
        </div>

        <div class="flex border-b" style="min-height:200px;">
          <div style="width:19%;" class="border-r center flex-j-i">
            <span>参考图片</span>
          </div>
          <div style="flex:1;" class="flex-j-i">
            <div style="width:33.33%;max-width:33.33%;height:100%;font-size:0;" class="border-r">
              <img
                v-if="locationOrder.buildingProduction.referenceMap[0]"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + locationOrder.buildingProduction.referenceMap[0]"
              />
            </div>
            <div style="width:33.33%;max-width:33.33%;height:100%;font-size:0;" class="border-r">
              <img
                v-if="locationOrder.buildingProduction.referenceMap[1]"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + locationOrder.buildingProduction.referenceMap[1]"
              />
            </div>
            <div style="width:33.33%;max-width:33.33%;height:100%;font-size:0;" class="border-r">
              <img
                v-if="locationOrder.buildingProduction.referenceMap[2]"
                style="max-width:100%;"
                :src="requestUrl + '/upload/' + locationOrder.buildingProduction.referenceMap[2]"
              />
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
    this.locationOrder = JSON.parse(sessionStorage.getItem("locationOrder"));
  },
  data() {
    return {
      locationOrder: {},
      requestUrl
    };
  },
  methods: {
    formatLocationSandTable(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.locationSandTable.forEach(item => {
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
    formatLocationPerformance(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.locationModelProduction.locationPerformance.forEach(
        item => {
          if (item === str) {
            className = "marqueed";
          }
        }
      );
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatLocationItselfPerformanceType(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.locationModelProduction.locationItselfPerformance.type.forEach(
        item => {
          if (item === str) {
            className = "marqueed";
          }
        }
      );
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatLocationLightType(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.locationModelProduction.locationLight.type.forEach(item => {
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
    formatGardenStyle(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.landscapeProduction.gardenStyle.forEach(item => {
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
    formatLandscapeRoad(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.landscapeProduction.landscapeRoad.forEach(item => {
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
    formatTerrainPerformance(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.landscapeProduction.terrainPerformance.forEach(item => {
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
      const { locationOrder } = this;
      let className;
      locationOrder.landscapeProduction.landscapeLight.forEach(item => {
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
    formatWaterPerformanceLightType(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.landscapeProduction.waterPerformanceLight.type.forEach(
        item => {
          if (item === str) {
            className = "marqueed";
          }
        }
      );
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatCrystalLight(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.landscapeProduction.crystalLight.forEach(item => {
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
    formatBodyBlock(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.landscapeProduction.bodyBlock.forEach(item => {
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
    formatBuildingFacade(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.buildingProduction.buildingFacade.forEach(item => {
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
    formatBuildingInteriorFacadeLight(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.buildingProduction.buildingInteriorFacadeLight.forEach(
        item => {
          if (item === str) {
            className = "marqueed";
          }
        }
      );
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    },
    formatProductionType(str) {
      const { locationOrder } = this;
      let className;
      locationOrder.productionType.forEach(item => {
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
          saveAs(blob, this.locationOrder.projectName);
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
