<template>
  <div class="enterprise">
    <div class="nav-title title1">
      <img
        src="http://www.ky200.com/api/file/showImg/1293036387491885058"
        class="header-hidden-img"
      />
      <span class="header-follow-no">关注</span>
    </div>
    <div class="nav-content content">
      <p class="header-eName">板城酒业集团</p>
      <p class="header-synopsis">“冀酒振兴 板城先行”</p>
      <div class="header-certification">
        <div class="header-certification-box border-yes">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAAEO0lEQVRYR82XXWgcVRTHf2d2Z3ZrDAYUwWqhGj9qi9XaNMluUkKq1YpU0IeilqJYbIuKSBVFsVg/UFS09EEiUdBqkVr6VGrUWI2pzWxaQ2pRqV+loCJiHkRt2sxMOkdmslt3k93MbEKK92nY+Z///c2559x7V/ifDanEoztJeHO4T33WinCFgjkddhEc4Gugw8qwrZJXWSDtIe2l+EBh2XQgKk4q7DCbWS2CP15TFsjNsVWVB2cCpuBpCI+ZGV6KBPL6afV9egFjJoEETvomi9JL+L54npIMqc0sT/hKlctnEqbgLWCb3SyVzf8tXQmQY/My8MiZgCnMocLGdIYtRZBjj26OJlX6gMSZBAJOWBYLpYGjwbxhhvRHUu4Qh4ArI2D+UmXQEJoVZk2mFfgbGFDIEK3tNTO0i6AhkGPzPPB4VGYE1ltZOkcGqBeXj4H6cjEiDLoJbj67kd8dm2eATTG8H7CyvCZuP4vVpx9IRgUZ8JSZDSfA7WOJCgcKWS6KdVWZn24ZWwI3R6cq90Z5oxz3Da4SN8cnqlwfGTC2wL9YI1wi7YzmM/sRcGNJ2wrbrQxrwlLooc5L8bNCbRx/EbaJk+M4Sk2cgECTSLA62cR7wbNns8KHD0uAkjRajXwZvs/xqK+8GNcb4QdxbY4ozIsdBIOpLIvDDChBhr893QxKf6olLGJ0ANN1OQZcGNdb4FNxbO4UYXtgHjfQ8FlmttIT1ojNeoXXw+wZ3JFsZke+xtao8E5cT5RTRoLlhS4LOizotLhjTyrLyjATwe4OxxQcy+JSacDL11ewjVwTy1DwBe4JbgGns+LkeBblyTgGwSltKgsky3dhNg7QEJSM1cThfG1d58PeOF7BN4lwv5WhY6xvioab4xVVNsYxEuENK8O6clrHpgu4KY6PITxsZni1oJ1QNyM2HQIbosyC09pR5ta28EexVvuZ7/p8U2Z/mmipbEq18FzxiwlA+c55C7grCgrh6VSGzSVZtnlTYW1kLLyQyvLEeF35G+NOEu5F4V6zajJjgSGzhovlaoYD3fB+ZpsGRxXSEXFbrSwPldNUvlMH+4jHLpRbIsy3WNmxunNs3o/xEZ1mhg3BQVoVUNjSXaTcOnYDN1SCyhu/rUodcGsE/LtmN3cXX8hiLVlJkQ5wlufRpUpbjLqoKDFgV/JXbpdVnIqAjp5maD+15yToVqU5Wl1WsceyuK2waU4bKFy+Q9R5J/lMYVE1UAJ7TYeV0s5InLjY51cINcB5nsvnCgtimn9hWqyQBk7E0QeaqoDC1t7HBclk+DfpsklTLxz8R1h+bnN4lY09qgYKM3WQOe4o+4C5ZVtXOGzW0C4L+TM2SV44JaAgdqSPepEwU+PvO0esNG1yLUPVwkxpyYoncWzmKfQKnJ///adRn7aaVn6bCsy0gcLlG2S267DOAHd4lI66pdUvUzH8v/mTV4jm3t3oAAAAAElFTkSuQmCC"
          />
          <p class="header-state">认证企业</p>
        </div>
        <div class="header-certification-tel">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABi0lEQVRIS8WWTyiDYRjAfx9LmR0sHNiFJSl/DpQoh91kLQcltZU77lJrDlwcFAm7uQhnO2q1JJFcXBy0VhxMSzOrbTR8en0M21fft+1bnuPX+/5+z/M+79vzSVQ4pArzyQlm9uR5WWYBqC1TmpYklrbc0rLg5ATTu3LaAPh3bmm/R6rLF8hlZv5nu98jfSb/u4L/ETRaYKIf7I0QuITjsL46dVfgHQWbVYG+vYMvAAnRLY3QLVifBFP1D237BC5utPCgW7A4BuKYRIRj4D+CTNZAgXsAhtsV4FoQrmPacLFCdwWtDTA3okCvorARMlggcLMO6GpRwDtncBrRluiuQKCaLOB1Qo0JXl5hNQi3cbCaIZmBN5UXVJRASAbbYGpIyfw5C3cJsDdB9Ak2QxDPu7pFCwTY2Q2u3sLjiTzAyuHf7yUJBMLRAeN9YKr6AT6mwHtgkEBgbPXg6oHOZqUX++dwnzRQoH2HingHemBqa9R6kALMpQLz9hUOnK+R6TNAoj4yDcq8AFPxv4oP5G+cGakCYE0AAAAASUVORK5CYII="
          /><span>400-996-1956</span>
        </div>
      </div>
      <div class="header-site">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAkCAYAAACe0YppAAAAAXNSR0IArs4c6QAABZNJREFUWAm9l1lMnFUUxxkY9urQ2EqlaR9qom2ixqS4pioypVBKWjeocamND2yBBxok8aGGqDGmIS3IOmgfGrVtUAe7pLHB1lRrTLSa6ANKbHwRQbSYtpaJoIC//+X7hm9mPicDNT3JnXvu2f7n3O2740laBDU1NV0XCoWWTU9Pp2VnZw+3tLRMLDSMJxGH2traJYBsn52dLfZ4PBvpl0b5/YH8DK1/ZmbmaG9v76UofcwwLnBlZWVWcnJyHcFewHNZjLe74CLi19LT099ob2+fdDdJSvpP4Jqamlupsh/HdXKmmstUegL2WEpKylBaWtrw5OSkl8SWY3cb8hL0ZfQ+mui81+vd2tXV9f3cMPLXFbiqqqoUs0MEup4+BOhen8+3B/oz0j1yxAz5sN2FdBe+S+gvMS4PBAIDkZYuFVPpeio4i2EGTkNUV0bW56Md442t2foQm7XE0HRvAPyc0yfZOSBj7dQgMoF+kZmZee9CQRWvu7t7KCcn525ifE7l6YiC9fX1y6WzKQIYYTttNQ6/ZGRkPNra2qqNsijSshDjccUCfNXU1FSHM1B4jan2dhTf0jxM74Nk/ZnTcLE8cTfgq1izxL2TuN8pllc/Fu2mJ0HPsXigBLoJG22+fCqR/TepqanHOzo6RuxAzp4zfRafo8i2sowv0T8hvZnq5uZmramOgpBfVe9G7PYdyAcBfItWDV9FH2AaB6urq59385GMmK9Yui0NDQ2Z4g3w2NjYwwSQYLinp+dLyyiiI/DT2BxAmEMgLcnrahbv45LZj81OZDGkHY3dzygyJiYmCmVggHG6XwOUJ9VHEwFvBFQbT7TP7/evZwpfVBMvmRTEadVSiHehjyTjwjFYBpixbfyji0MSoJtoS0lsMC8vr6miomLathMvmXTIfATebOucPf4mNr3BMsAMVsiI/lensYNXVaIB9sM/c+z8ryU7JQlV589r5jkSsmPnSmqAyXZq3iSWIyG7wtRY7ZwEG3NCiBWTmCzQ20f3b43tiu1s7CmXLkxka647nIt1AsIKi7FORbGG2HwdrdeYhCJm1a5YO07KW9RHEwd/AN1vyG8eHR0N2EdCduJHRkZ6AVyDzTifQ33BYgi9iU0RBstMD8LTsqQ3WUd7dXZ2jnOGa5B/gM0OjkQB49PwHl4ihchXyQfgOr7Bv4t3oRLJsDF7wVTMrvwKmRzyCHifDKKJsxgk28esylcDuhOb5+gFegF5OXfA4Wg/jTli92C3Epvx3Nxcc08YYNZoBv07MsJgt3o3InB/VlbWOhLYjn4PgVpoT3JlriWx9918JMNGV6XobQtr/gWiS4Kj8BPKbAL7ATHTb8yv4oe4BcT9hBAhPrNr2traxhTOVCwGIG2eveIxPIjDSvFXQ3V1dXnM4CErxj4bVOMwsAas9ct0Z2i5OAT1upR8MdTY2JjNxyNInBVM9afEbnbGsQ91WGbdy+dw0KZREqXcyaGwQQKMjhi7/QQxCjAfZorzndUqRETFEmjKWeMistSl8hDtiNulIVs34omTDugRC1TrWRQNKr8YYAn1ZqLz03TENnJBBAFPg49LsrGmtwjDC+x2P7P1g5tTzFQ7jXgt3sFG00VxAzOgKsoJZO5ap514QL0k+B7sIzT9syjkiOm77UquFduWeh8RQNlfBHQb/MG+vr4UW2/3knGVvstYoHogFsUDlV/cimUgYnffxXvpY8D1wD/IDn2WCmeko08G9AC6Z0jsshJln7i+YmRvU9yKbSPe1rpSSwh6hf4pgPYD5FFjet+0QK/wMdmcCKjiJlSxDEWs+QNUridMFi1AImCaR18I0FKWRscvIVoQsCJyzgsBO07LtBD+IoEy1vRUQoiW0YKB5cfXZhNgeivrA7CN6T0p/poQ4Fuo3rzFrwng/wXyL1zQiB3UKZ/aAAAAAElFTkSuQmCC"
        />
        <p>河北省承德市承德县下板城镇和顺路</p>
      </div>
    </div>
    <van-tabs
      v-model:active="active"
      swipeable
      sticky
      color="#69A5FF"
      line-width="50%"
      line-height="2px"
      title-active-color="#69A5FF"
      title-inactive-color="#999999"
    >
      <van-tab title="企业介绍">
        <div class="introduce">
          <p style="text-align: center">
            <img
              src="http://www.ky200.com/api/file/showImg/1293023929352040450"
              style="max-width: 100%"
            />
          </p>
        </div>
      </van-tab>
      <van-tab title="企业资讯">
        <div class="newsList">
          <div class="news-card" v-for="i in 5" :key="i">
            <div class="card" @click="handleJump(i)">
              <img
                src="http://www.ky200.com/api/file/showImg/1293036941232287746"
              />
              <div class="news-title">
                <p>龍印盛世封坛酒限量首发，匠心之作荣耀献礼！</p>
              </div>
              <div class="release-msg">
                <p>carl</p>
                <p>2020-08-11 11:27:50</p>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const handleJump = (id) => {
      router.push(`/e-detail/${id}`);
    };
    return {
      handleJump,
    };
  },
});
</script>

<style lang="less" scoped>
.title1 {
  display: flex;
  justify-content: space-between;
  padding: 11px 15px;
  background: #ffffff;
  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
  .header-follow-no {
    color: #69a5ff;
    margin-top: 0.133333rem;
    height: 22px;
    line-height: 22px;
    text-align: center;
    border: 1px solid;
    font-size: 14px;
    font-weight: 500;
    border-radius: 0.08rem;
    padding: 0 0.186667rem;
  }
}
.content {
  padding: 0 15px;
  background: #fff;
  .header-eName {
    color: #333;
    font-size: 16px;
    font-weight: 600;
  }
  .header-synopsis {
    color: #666;
    font-size: 12px;
    margin-top: 5px;
  }
}
.header-certification {
  width: 100%;
  height: 0.693333rem;
  margin-top: 0.16rem;
}
.header-certification-box,
.header-certification {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.border-yes {
  border: 0.026667rem solid #f9c600;
}
.header-certification-box {
  height: 0.346667rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0.093333rem 0.213333rem;
  border-radius: 0.4rem;
  margin-right: 0.453333rem;
  img {
    width: 0.346667rem;
    height: 0.293333rem;
    margin-right: 0.106667rem;
    display: block;
  }
  p {
    font-size: 0.32rem;
  }
}
.header-certification-tel {
  height: 0.373333rem;
  line-height: 0.373333rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  img {
    width: 0.373333rem;
    height: 0.373333rem;
  }
  span {
    font-size: 0.32rem;
    color: #69a5ff;
    margin-left: 0.106667rem;
  }
}
.header-site {
  display: flex;
  font-size: 0.346667rem;
  color: #999;
  margin-top: 0.266667rem;
  width: 100%;
  height: 0.373333rem;
  img {
    margin-right: 0.133333rem;
    width: 0.346667rem;
    height: 0.373333rem;
    display: block;
  }
  p {
    height: 0.373333rem;
    line-height: 0.373333rem;
  }
}
.introduce {
  padding: 10px 15px;
  padding-bottom: 50px;
  background: #fff;
}
.newsList {
  background: #fff;
  padding-bottom: 50px;
  .news-card {
    width: 100%;
    height: 6.8rem;
    background: #fff;
    box-sizing: border-box;
    padding: 0.4rem 0.4rem 0.266667rem 0.4rem;
    margin-top: 0.266667rem;
    .card {
      position: relative;
      width: 100%;
      height: 5.333333rem;
      border-radius: 0.266667rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.213333rem;
      }
      .news-title {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1.386667rem;
        border-bottom-left-radius: 0.213333rem;
        border-bottom-right-radius: 0.213333rem;
        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.77));
        p {
          font-size: 0.426667rem;
          color: #fff;
          line-height: 0.56rem;
          width: 100%;
          height: 100%;
          padding: 0.16rem 0.32rem;
          box-sizing: border-box;
          text-align: justify;
        }
      }
      .release-msg {
        margin-top: 0.266667rem;
        font-size: 0.373333rem;
        color: #999;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>