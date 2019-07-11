<template>
  <div class="container">
    <div class="flex border-b">
      <div style="width:19%;" class="border-r">
        <div class="center height border-b li-he">文档编号</div>
        <div class="height li-he">
          TS
          <input type="text" />
        </div>
      </div>
      <h3 style="width:50%;line-height:100px;" class="center border-r">精诚模型项目制作单</h3>
      <div style="width:10%;" class="border-r">
        <div class="center height border-b li-he">下单日期</div>
        <div class="center height li-he">完成日期</div>
      </div>
      <div style="flex:1;">
        <div class="center height border-b li-he">
          <input type="text" />
        </div>
        <div class="center height li-he">
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="flex border-b">
      <div style="width:7%;" class="height li-he border-r">项目名称：</div>
      <div style="width:62%;" class="height li-he border-r">
        <input style="width:100%;" type="text" />
      </div>
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
          <span class="i-b">
            项目节点总负责人：
            <input type="text" />
          </span>
        </div>
        <div class="height li-he">
          <span class="i-b">
            项目策划人：
            <input type="text" />
          </span>
        </div>
      </div>
      <div style="width:19%;" class="border-r">
        <div class="height border-b li-he">
          <span class="i-b">
            业务员：
            <input type="text" style="width:65%;" />
          </span>
        </div>
        <div class="height li-he">
          <input type="text" />
        </div>
      </div>
      <div style="flex:1;" class="center li-he">
        <textarea style="width:98%;height:96s%;"></textarea>
      </div>
    </div>
    <div class="height center li-he border-b">模型制作内容（模型范围示意图）</div>
    <div class="flex border-b">
      <div style="width:19%;" class="height center li-he">模型类别</div>
      <div style="flex:1;" class="height center li-he border-l">项目沙盘</div>
      <div style="width:19%;" class="height center li-he border-l">项目沙盘</div>
      <div style="width:19%;" class="height center li-he border-l">升降设备</div>
      <div style="width:19%;" class="height center li-he border-l">其他</div>
    </div>
    <div class="flex border-b">
      <div style="width:19%;" class="height center li-he">模型数量</div>
      <div style="flex:1;" class="height center li-he border-l">
        <input type="text" />
      </div>
      <div style="width:19%;" class="height center li-he border-l">
        <input style="width:30px;" type="text" />&nbsp;套
      </div>
      <div style="width:19%;" class="height center li-he border-l">
        <input style="width:30px;" type="text" />&nbsp;套
      </div>
      <div style="width:19%;" class="height center li-he border-l">
        <input style="width:30px;" type="text" />&nbsp;套
      </div>
    </div>
    <div class="flex border-b">
      <div style="width:19%;" class="height center li-he">模型比例</div>
      <div style="flex:1;" class="height center li-he border-l">
        <input type="text" />
      </div>
      <div style="width:19%;" class="height center li-he border-l">
        <span class="i-b" style="width:50%;">
          景观:
          <input style="width:50%;" type="text" />
        </span>
        <span class="i-b" style="width:50%;">
          建筑:
          <input style="width:50%;" type="text" />
        </span>
      </div>
      <div style="width:19%;" class="height center li-he border-l">
        <el-checkbox text-color="#000" fill="#000">直升</el-checkbox>
      </div>
      <div style="width:19%;" class="height center li-he border-l">
        <span class="i-b" style="width:50%;">景观:</span>
        <span class="i-b" style="width:50%;">建筑:</span>
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
          <span class="i-b">外尺寸:</span>
        </div>
        <div class="height">
          <span class="i-b">内尺寸:</span>
        </div>
      </div>
      <div style="width:19%;" class="center li-he border-l">
        <div class="height border-b">
          <el-checkbox text-color="#000" fill="#000">选升</el-checkbox>
        </div>
        <div class="height">
          <el-checkbox text-color="#000" fill="#000">层数</el-checkbox>
        </div>
      </div>
      <div style="width:19%;" class="li-he border-l">
        <div class="height border-b">
          <span class="i-b">外尺寸:</span>
        </div>
        <div class="height">
          <span class="i-b">内尺寸:</span>
        </div>
      </div>
    </div>
    <div class="center li-he border-b">
      <el-checkbox text-color="#000" fill="#000">玻璃罩</el-checkbox>
      <el-checkbox text-color="#000" fill="#000">厚度及高度：厚度 12mm,高度400mm</el-checkbox>
      <el-checkbox text-color="#000" fill="#000">玻璃护栏</el-checkbox>
      <el-checkbox text-color="#000" fill="#000">厚度高度： 根据地形高度制作300mm高 12mm厚</el-checkbox>
      <el-checkbox text-color="#000" fill="#000">其他</el-checkbox>
      <el-checkbox text-color="#000" fill="#000">特殊要求：根据地形做护栏</el-checkbox>
    </div>
    <h3 class="height border-b center li-he">模型底座要求</h3>
    <div class="flex border-b">
      <div class="li-he center border-r" style="width:19%;">项目沙盘</div>
      <div class="li-he center" style="flex:1;">
        <el-checkbox text-color="#000" fill="#000">天然大理石</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">颜色待定</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">不锈钢</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">木质烤漆</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">仿石材</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">人造大理石</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">其它</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">底座高度 600mm</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">黑色镜面玻璃</el-checkbox>
      </div>
    </div>
    <div class="flex border-b" style="min-height:200px;">
      <div
        style="width:19%;align-items:center;justify-content: center"
        class="flex center border-r"
      >
        <div>底座说明</div>
      </div>
      <div style="flex:1;">
        <div style="width:50%;max-width:50%;height:100%;" class="border-r"></div>
        <div style="width:50%;max-width:50%;height:100%;"></div>
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
        <div style="width:50%;max-width:50%;height:100%;" class="border-r"></div>
        <div style="width:50%;max-width:50%;height:100%;"></div>
      </div>
    </div>
    <div class="flex border-b">
      <div class="li-he center border-r" style="width:19%;">项目沙盘</div>
      <div class="li-he center" style="flex:1;">
        <el-checkbox text-color="#000" fill="#000">ABS1.0</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">ABS1.2</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">ABS1.5</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">ABS2.0</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">ABS3.0拼角</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">ABS4.0拼角</el-checkbox>
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
        <div style="width:50%;max-width:50%;height:100%;" class="border-r"></div>
        <div style="width:50%;max-width:50%;height:100%;"></div>
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
        <div style="width:50%;max-width:50%;height:100%;" class="border-r"></div>
        <div style="width:50%;max-width:50%;height:100%;"></div>
      </div>
    </div>
    <h3 class="height border-b center li-he">景观制作要求</h3>
    <div class="flex border-b">
      <div class="li-he center border-r" style="width:19%;">景观表现</div>
      <div class="li-he center" style="flex:1;">
        <el-checkbox text-color="#000" fill="#000">无地形</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">微地形</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">有地形</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">其它</el-checkbox>
      </div>
    </div>
    <div class="flex border-b">
      <div class="li-he center border-r" style="width:19%;line-height:100px;">园林风光</div>
      <div class="li-he center" style="flex:1;">
        <div class="height border-b" style="width:100%;">
          <el-checkbox text-color="#000" fill="#000">8mm高仿真草坪</el-checkbox>
        </div>
        <div class="height" style="width:100%;">
          <el-checkbox text-color="#000" fill="#000">建筑屋顶绿化</el-checkbox>
          <el-checkbox text-color="#000" fill="#000">
            其它
            <span style="text-decoration:underline;">铺砖、种植按照甲方提供景观图纸制作</span>（提供资料）
          </el-checkbox>
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
        <div style="width:50%;max-width:50%;height:100%;" class="border-r"></div>
        <div style="width:50%;max-width:50%;height:100%;"></div>
      </div>
    </div>
    <div class="flex border-b">
      <div class="li-he center border-r" style="width:19%;">地形表现</div>
      <div class="li-he center" style="flex:1;">
        <el-checkbox text-color="#000" fill="#000">常规表现</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">等高线表现</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">
          其它
          <span
            style="text-decoration:underline;"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>（参考照片）
        </el-checkbox>
      </div>
    </div>
    <div class="flex border-b">
      <div class="li-he center border-r" style="width:19%;">地形表现</div>
      <div class="li-he center" style="flex:1;">
        <el-checkbox text-color="#000" fill="#000">地灯</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">路灯</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">庭院灯</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">商业街程序灯光（预埋）</el-checkbox>
        <el-checkbox text-color="#000" fill="#000">节点灯光</el-checkbox>
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
        <div style="width:50%;max-width:50%;height:100%;" class="border-r"></div>
        <div style="width:50%;max-width:50%;height:100%;"></div>
      </div>
    </div>
    <div class="flex border-b">
      <div class="li-he center border-r" style="width:19%;line-height:100px;">水晶及其他表现方式灯光方式</div>
      <div class="center" style="flex:1;line-height:23px;">
        <div class="height border-b" style="width:100%;">
          <el-checkbox text-color="#000" fill="#000">透明水晶</el-checkbox>（
          <el-checkbox text-color="#000" fill="#000">底板金色材质板</el-checkbox>
          <el-checkbox text-color="#000" fill="#000">整体 透光</el-checkbox>
          <el-checkbox text-color="#000" fill="#000">底板贴银铂纸</el-checkbox>）
          <el-checkbox text-color="#000" fill="#000">住宅水晶高度</el-checkbox>
          <el-checkbox text-color="#000" fill="#000">亚克力镜面体块</el-checkbox>
          <el-checkbox text-color="#000" fill="#000">贴膜勾窗线体块</el-checkbox>
          <el-checkbox text-color="#000" fill="#000">磨砂亚克力体块</el-checkbox>
        </div>
        <div class="height" style="width:100%;line-height:50px;">
          <el-checkbox text-color="#000" fill="#000">金色水晶</el-checkbox>（
          <el-checkbox text-color="#000" fill="#000">底板轮廊灯（白色）</el-checkbox>
          <el-checkbox text-color="#000" fill="#000">整体透光</el-checkbox>
          <el-checkbox text-color="#000" fill="#000">底板贴银布</el-checkbox>）
          <el-checkbox text-color="#000" fill="#000">商业水晶高度</el-checkbox>
          <el-checkbox text-color="#000" fill="#000">商业勾线镜面体块</el-checkbox>
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
        <div style="width:50%;max-width:50%;height:100%;" class="border-r"></div>
        <div style="width:50%;max-width:50%;height:100%;"></div>
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
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
div {
  box-sizing: border-box;
}
h3 {
  margin: 0;
  padding: 0;
}
.container {
  margin: 10px;
  border: 1px solid;
}
.flex {
  display: flex;
}
.center {
  text-align: center;
}
.li-he {
  line-height: 50px;
}
.height {
  height: 50px;
}
.border-b {
  border-bottom: 1px solid;
}
.border-r {
  border-right: 1px solid;
}
.border-l {
  border-left: 1px solid;
}
.i-b {
  display: inline-block;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  padding: 0 5%;
}

input,
textarea {
  border: none;
  outline: none;
  font-size: 16px;
  resize: none;
}
</style>
