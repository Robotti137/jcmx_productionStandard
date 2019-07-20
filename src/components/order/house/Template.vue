<template>
  <div class="container">
    <div class="flex border-b">
      <div style="width:19%;" class="border-r">
        <div class="center height border-b li-he">文档编号</div>
        <div class="height li-he">TS&nbsp;&nbsp;{{houseOrder.documentNumber}}</div>
      </div>
      <h3 style="width:50%;line-height:100px;" class="center border-r">精诚模型项目制作单</h3>
      <div style="width:10%;" class="border-r">
        <div class="center height border-b li-he">下单日期</div>
        <div class="center height li-he">完成日期</div>
      </div>
      <div style="flex:1;">
        <div class="center height border-b li-he">{{houseOrder.orderDate}}</div>
        <div class="center height li-he">{{houseOrder.completeDate}}</div>
      </div>
    </div>
    <div class="flex border-b">
      <div style="width:15%;" class="height li-he">项目名称：</div>
      <div style="width:54%;" class="height li-he border-l">&nbsp;&nbsp;{{houseOrder.projectName}}</div>
      <div style="width:10%;" class="height border-l"></div>
      <div style="flex:1;" class="height center li-he border-l">项目地址</div>
    </div>
    <div class="flex border-b">
      <div style="width:19%;" class="border-r">
        <div class="height border-b"></div>
        <div class="height"></div>
      </div>
      <div style="width:41%;" class="border-r">
        <div class="height border-b li-he">
          <span class="i-b">项目节点总负责人：{{houseOrder.projectPrincipal}}</span>
        </div>
        <div class="height li-he">
          <span class="i-b">项目策划人：{{houseOrder.projectPlanner}}</span>
        </div>
      </div>
      <div style="width:19%;" class="border-r">
        <div class="height border-b li-he">
          <span class="i-b">业务员：{{houseOrder.salesman}}</span>
        </div>
        <div class="height li-he"></div>
      </div>
      <div style="flex:1;" class="box-s">{{houseOrder.projectAddress}}</div>
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
        <template v-if="houseOrder.projectSandTable.number">{{houseOrder.projectSandTable.number}}</template>
        <template v-else>&nbsp;</template>
        套
      </div>
      <div style="width:19%;" class="height center li-he border-l">
        <template v-if="houseOrder.liftingEquipment.number">{{houseOrder.liftingEquipment.number}}</template>
        <template v-else>&nbsp;</template>
        套
      </div>
      <div style="width:19%;" class="height center li-he border-l">
        <template v-if="houseOrder.other.number">{{houseOrder.other.number}}</template>
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
          style="margin-bottom:5px;word-break:break-all;"
        >景观：{{houseOrder.projectSandTable.landscape}}</span>
        <span class="i-b" style="word-break:break-all;">建筑：{{houseOrder.projectSandTable.building}}</span>
      </div>
      <div class="flex-j-i border-l" style="justify-content:center;width:19%;">
        <span v-if="houseOrder.liftingEquipment.type === '直升'" class="marqueed">直升</span>
        <span v-else class="marquee">直升</span>
      </div>
      <div style="width:19%;" class="border-l">
        <span
          class="i-b"
          style="margin-bottom:5px;word-break:break-all;"
        >景观：{{houseOrder.other.landscape}}</span>
        <span class="i-b" style="word-break:break-all;">建筑：{{houseOrder.other.building}}</span>
      </div>
    </div>
    <div class="flex border-b">
      <div style="width:19%;height:100px;line-height:100px;" class="center">模型比例</div>
      <div style="flex:1;" class="center li-he border-l">
        <div class="height border-b"></div>
        <div class="height"></div>
      </div>
      <div style="width:19%;" class="border-l">
        <div class="height border-b">
          <span
            class="i-b"
            style="word-break:break-all;"
          >外尺寸：{{houseOrder.projectSandTable.externalDimensions}}</span>
        </div>
        <div class="height">
          <span
            class="i-b"
            style="word-break:break-all;"
          >内尺寸：{{houseOrder.projectSandTable.innerDimension}}</span>
        </div>
      </div>
      <div style="width:19%;" class="center li-he border-l">
        <div class="height border-b">
          <span v-if="houseOrder.liftingEquipment.type === '选升'" class="marqueed">选升</span>
          <span v-else class="marquee">选升</span>
        </div>
        <div class="height">
          <span v-if="houseOrder.liftingEquipment.type === '层数'" class="marqueed">层数</span>
          <span v-else class="marquee">层数</span>
        </div>
      </div>
      <div style="width:19%;" class="border-l">
        <div class="height border-b">
          <span
            class="i-b"
            style="word-break:break-all;"
          >外尺寸：{{houseOrder.other.externalDimensions}}</span>
        </div>
        <div class="height">
          <span class="i-b" style="word-break:break-all;">内尺寸：{{houseOrder.other.innerDimension}}</span>
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
    <div class="flex border-b center">
      <div class="flex-j-i border-r" style="width:19%;">户型沙盘</div>
      <div class="flex-j-i" style="flex-wrap:wrap;flex:1;">
        <span :class="formatHouseholdTandTable('石材')">石材</span>
        <span :class="formatHouseholdTandTable('木质')">木质</span>
        <span :class="formatHouseholdTandTable('皮革')">皮革</span>
        <span :class="formatHouseholdTandTable('玻璃')">玻璃</span>
        <span :class="formatHouseholdTandTable('亚克力')">亚克力</span>
        <span :class="formatHouseholdTandTable('不锈钢')">不锈钢</span>
        <span :class="formatHouseholdTandTable('高度')">高度</span>
        <span :class="formatHouseholdTandTable('其它')">其它</span>
      </div>
    </div>
    <div class="flex border-b center">
      <div class="flex-j-i border-r" style="width:19%;">户型模型</div>
      <div class="flex-j-i" style="flex-wrap:wrap;flex:1;">
        <span :class="formatHouseModel('石材')">石材</span>
        <span :class="formatHouseModel('木质')">木质</span>
        <span :class="formatHouseModel('皮革')">皮革</span>
        <span :class="formatHouseModel('玻璃')">玻璃</span>
        <span :class="formatHouseModel('亚克力')">亚克力</span>
        <span :class="formatHouseModel('不锈钢')">不锈钢</span>
        <span :class="formatHouseModel('高度')">高度</span>
        <span :class="formatHouseModel('其它')">其它</span>
      </div>
    </div>
    <div class="flex border-b" style="min-height:200px;">
      <div
        style="width:19%;align-items:center;justify-content: center"
        class="flex center border-r"
      >
        <div>底座参考图</div>
      </div>
      <div class="flex" style="flex:1;">
        <div class="pd5 border-r" style="width:50%;max-width:50%;height:100%;font-size:0;">
          <img
            v-if="houseOrder.modelBase.referenceMap"
            style="max-width:100%;"
            :src="requestUrl + '/upload/' + houseOrder.modelBase.referenceMap"
          />
        </div>
        <div style="width:50%;max-width:50%;height:100%;" class="box-s">
          其它要求说明：
          <span class="col-8">{{houseOrder.modelBase.description}}</span>
        </div>
      </div>
    </div>
    <div
      class="flex-j-i border-b"
      style="padding:15px 0;"
    >变更说明：制作完成或者制作过程中：1.各户修改 2.沟通原因 3.质量问题导致增加工作量 须补充 （项目修改通知单）</div>
    <h3 class="height border-b center li-he">户型制作要求</h3>
    <div class="flex border-b center">
      <div class="flex-j-i border-r" style="width:19%;">户型风格</div>
      <div class="flex-j-i" style="flex-wrap:wrap;justify-content:end;flex:1;">
        <span :class="formatHouseStyle('简欧')">简欧</span>
        <span :class="formatHouseStyle('住宅现代')">住宅现代</span>
        <span :class="formatHouseStyle('办公现代')">办公现代</span>
        <span :class="formatHouseStyle('欧式')">欧式</span>
        <span :class="formatHouseStyle('中式')">中式</span>
        <span :class="formatHouseStyle('田园')">田园</span>
        <span :class="formatHouseStyle('新古典')">新古典</span>
        <span :class="formatHouseStyle('现代简欧')">现代简欧</span>
        <span :class="formatHouseStyle('东南亚')">东南亚</span>
        <span :class="formatHouseStyle('美式')">美式</span>
        <span :class="formatHouseStyle('地中海')">地中海</span>
        <span :class="formatHouseStyle('藏式')">藏式</span>
        <span :class="formatHouseStyle('其它(参照图片)')">其它(参照图片)</span>
      </div>
    </div>
    <div class="flex border-b center">
      <div class="flex-j-i border-r" style="width:19%;">办公及酒店风格</div>
      <div class="flex-j-i" style="flex-wrap:wrap;justify-content:end;flex:1;">
        <span :class="formatOfficeHotelStyle('简欧')">简欧</span>
        <span :class="formatOfficeHotelStyle('住宅现代')">住宅现代</span>
        <span :class="formatOfficeHotelStyle('办公现代')">办公现代</span>
        <span :class="formatOfficeHotelStyle('欧式')">欧式</span>
        <span :class="formatOfficeHotelStyle('中式')">中式</span>
        <span :class="formatOfficeHotelStyle('田园')">田园</span>
        <span :class="formatOfficeHotelStyle('新古典')">新古典</span>
        <span :class="formatOfficeHotelStyle('现代简欧')">现代简欧</span>
        <span :class="formatOfficeHotelStyle('东南亚')">东南亚</span>
        <span :class="formatOfficeHotelStyle('美式')">美式</span>
        <span :class="formatOfficeHotelStyle('地中海')">地中海</span>
        <span :class="formatOfficeHotelStyle('藏式')">藏式</span>
        <span :class="formatOfficeHotelStyle('其它(参照图片)')">其它(参照图片)</span>
      </div>
    </div>
    <div class="flex border-b center">
      <div class="flex-j-i border-r" style="width:19%;">平层户型制作要求</div>
      <div style="flex:1;">
        <div class="flex-j-i" style="flex-wrap:wrap;justify-content:end;flex:1;">
          <span :class="formatFlatFloorProduction('外墙')">外墙</span>（
          <span :class="formatFlatFloorProduction('透明(外墙)')">透明</span>
          <span :class="formatFlatFloorProduction('写实(外墙)')">写实</span>
          <span :class="formatFlatFloorProduction('贴水银(外墙)')">贴水银</span>
          <span :class="formatFlatFloorProduction('贴银铂纸(外墙)')">贴银铂纸</span>
          <span :class="formatFlatFloorProduction('木质(外墙)')">木质</span>
          <span :class="formatFlatFloorProduction('磨砂(外墙)')">磨砂</span>
          <span :class="formatFlatFloorProduction('其它(外墙 参照图片)')">其它(参照图片)</span>
          ）
        </div>
        <div class="flex-j-i" style="flex-wrap:wrap;justify-content:end;flex:1;">
          <span :class="formatFlatFloorProduction('内墙')">内墙</span>（
          <span :class="formatFlatFloorProduction('透明(内墙)')">透明</span>
          <span :class="formatFlatFloorProduction('写实(内墙)')">写实</span>
          <span :class="formatFlatFloorProduction('贴水银(内墙)')">贴水银</span>
          <span :class="formatFlatFloorProduction('贴银铂纸(内墙)')">贴银铂纸</span>
          <span :class="formatFlatFloorProduction('木质(内墙)')">木质</span>
          <span :class="formatFlatFloorProduction('磨砂(内墙)')">磨砂</span>
          <span :class="formatFlatFloorProduction('其它(内墙 参照图片)')">其它(参照图片)</span>
          ）
        </div>
      </div>
    </div>
    <div class="flex border-b center">
      <div class="flex-j-i border-r" style="width:19%;">跃层户型制作要求</div>
      <div style="flex:1;">
        <div class="flex-j-i" style="flex-wrap:wrap;justify-content:end;flex:1;">
          <span :class="formatLeapFloorProduction('外墙')">外墙</span>（
          <span :class="formatLeapFloorProduction('透明(外墙)')">透明</span>
          <span :class="formatLeapFloorProduction('写实(外墙)')">写实</span>
          <span :class="formatLeapFloorProduction('贴水银(外墙)')">贴水银</span>
          <span :class="formatLeapFloorProduction('贴银铂纸(外墙)')">贴银铂纸</span>
          <span :class="formatLeapFloorProduction('木质(外墙)')">木质</span>
          <span :class="formatLeapFloorProduction('磨砂(外墙)')">磨砂</span>
          <span :class="formatLeapFloorProduction('其它(外墙 参照图片)')">其它(参照图片)</span>
          ）
        </div>
        <div class="flex-j-i" style="flex-wrap:wrap;justify-content:end;flex:1;">
          <span :class="formatLeapFloorProduction('内墙')">内墙</span>（
          <span :class="formatLeapFloorProduction('透明(内墙)')">透明</span>
          <span :class="formatLeapFloorProduction('写实(内墙)')">写实</span>
          <span :class="formatLeapFloorProduction('贴水银(内墙)')">贴水银</span>
          <span :class="formatLeapFloorProduction('贴银铂纸(内墙)')">贴银铂纸</span>
          <span :class="formatLeapFloorProduction('木质(内墙)')">木质</span>
          <span :class="formatLeapFloorProduction('磨砂(内墙)')">磨砂</span>
          <span :class="formatLeapFloorProduction('其它(内墙 参照图片)')">其它(参照图片)</span>
          ）
        </div>
      </div>
    </div>
    <div class="flex height li-he border-b center">
      <div style="width:19%;" class="border-r">户型及单体内部灯光</div>
      <div style="flex:1;" class="flex-j-i">
        <span :class="formatHouseLight('灯光')">灯光</span>
        <span :class="formatHouseLight('MP4屏播放器')">MP4屏播放器</span>
        <span :class="formatHouseLight('背景墙灯光')">背景墙灯光</span>
        <span :class="formatHouseLight('节点灯光')">节点灯光</span>
      </div>
    </div>
    <div class="flex height li-he border-b center">
      <div style="width:19%;" class="border-r">家装布置平面彩图</div>
      <div style="flex:1;" class="flex-j-i">
        <span :class="houseOrder.houseType.houseLayoutPicture === '有' ? 'marqueed' : 'marquee'">有</span>
        <span :class="houseOrder.houseType.houseLayoutPicture === '无' ? 'marqueed' : 'marquee'">无</span>
        <span
          :class="houseOrder.houseType.houseLayoutPicture === '有(参照效果图)' ? 'marqueed' : 'marquee'"
        >有(参照效果图)</span>
        <span
          :class="houseOrder.houseType.houseLayoutPicture === '无(参照效果图)' ? 'marqueed' : 'marquee'"
        >无(参照效果图)</span>
      </div>
    </div>
    <div class="flex height li-he border-b center">
      <div style="width:19%;" class="border-r">制作效果等级</div>
      <div style="flex:1;" class="flex-j-i">
        <span
          :class="houseOrder.houseType.productionEffectLevel === '简装' ? 'marqueed' : 'marquee'"
        >简装</span>
        <span
          :class="houseOrder.houseType.productionEffectLevel === '精装' ? 'marqueed' : 'marquee'"
        >精装</span>
        <span
          :class="houseOrder.houseType.productionEffectLevel === '精品精装' ? 'marqueed' : 'marquee'"
        >精品精装</span>
      </div>
    </div>
    <div class="flex border-b">
      <div style="width:19%;" class="border-r center flex-j-i">
        <span>其它特殊要求及具体制作内容说明</span>
      </div>
      <div style="flex:1;" class="box-s">{{houseOrder.houseType.claimSpecificDescription}}</div>
    </div>
    <div class="flex border-b" style="min-height:200px;">
      <div style="width:19%;" class="border-r center flex-j-i">
        <span>参考图片</span>
      </div>
      <div style="flex:1;" class="flex-j-i">
        <div class="pd5 border-r" style="width:33.33%;max-width:33.33%;height:100%;font-size:0;">
          <img
            v-if="houseOrder.houseType.referenceMap[0]"
            style="max-width:100%;"
            :src="requestUrl + '/upload/' + houseOrder.houseType.referenceMap[0]"
          />
        </div>
        <div
          class="pd5 border-r"
          style="width:33.33%;max-width:33.33%;height:100%;padding-top:20px;font-size:0;"
        >
          <img
            v-if="houseOrder.houseType.referenceMap[1]"
            style="max-width:100%;"
            :src="requestUrl + '/upload/' + houseOrder.houseType.referenceMap[1]"
          />
        </div>
        <div
          class="pd5 border-r"
          style="width:33.33%;max-width:33.33%;height:100%;padding-top:20px;font-size:0;"
        >
          <img
            v-if="houseOrder.houseType.referenceMap[2]"
            style="max-width:100%;"
            :src="requestUrl + '/upload/' + houseOrder.houseType.referenceMap[2]"
          />
        </div>
      </div>
    </div>
    <div class="flex border-b">
      <div style="width:19%;" class="flex-j-i border-r center">其它特殊要求及建筑制作内容说明</div>
      <div style="flex:1;" class="box-s">{{houseOrder.houseType.claimBuildDescription}}</div>
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
</template>

<script>
import { requestUrl } from "@/default";
export default {
  created() {
    this.houseOrder = JSON.parse(sessionStorage.getItem("houseOrder"));
  },
  data() {
    return {
      houseOrder: {},
      requestUrl
    };
  },
  methods: {
    formatHouseholdTandTable(str) {
      const { houseOrder } = this;
      let className;
      houseOrder.modelBase.householdTandTable.forEach(item => {
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
    formatHouseModel(str) {
      const { houseOrder } = this;
      let className;
      houseOrder.modelBase.houseModel.forEach(item => {
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
    formatHouseStyle(str) {
      const { houseOrder } = this;
      let className;
      houseOrder.houseType.houseStyle.forEach(item => {
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
    formatOfficeHotelStyle(str) {
      const { houseOrder } = this;
      let className;
      houseOrder.houseType.officeHotelStyle.forEach(item => {
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
    formatFlatFloorProduction(str) {
      const { houseOrder } = this;
      let className;
      houseOrder.houseType.flatFloorProduction.forEach(item => {
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
    formatLeapFloorProduction(str) {
      const { houseOrder } = this;
      let className;
      houseOrder.houseType.leapFloorProduction.forEach(item => {
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
    formatHouseLight(str) {
      const { houseOrder } = this;
      let className;
      houseOrder.houseType.houseLight.forEach(item => {
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
      const { houseOrder } = this;
      let className;
      houseOrder.productionType.forEach(item => {
        if (item === str) {
          className = "marqueed";
        }
      });
      if (className) {
        return className;
      } else {
        return "marquee";
      }
    }
  }
};
</script>

<style scoped>
@import "../../../../static/css/template.css";
</style>