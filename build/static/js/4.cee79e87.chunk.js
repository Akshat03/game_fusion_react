webpackJsonp([4],{176:function(e,a,n){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function p(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function x(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var r=n(0),o=n.n(r),A=(n(20),n(64)),i=n.n(A),s=n(11),b=n(19),C=n.n(b),g=n(215),c=(n.n(g),n(250)),d=n.n(c),l=n(251),m=n.n(l),w=n(252),h=n.n(w),f=n(253),k=n.n(f),B=n(254),u=n.n(B),G=n(255),E=n.n(G),_=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}(),v=function(e){function a(e){t(this,a);var n=p(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return n.checkUserCoin=function(e){var a,t=e.target.id;new Promise(function(e,p){C.a.create({timeout:1e3,headers:{"X-Custom-Header":"foobar",Authorization:localStorage.getItem("token")||""}}).post(s.a+"/api/user-coin",{userid:localStorage.getItem("user-id")}).then(function(p){console.log("coin coin",p.data.data[0].currentCoins),!1===p.data.error&&("opt1"===t?(a=9,p.data.data[0].currentCoins>a?n.props.history.push("/challenge/"+n.state.option1.value):i()("Opps! You don't have enough coin to play this match, Purchase coins to continue.",{buttons:{cancel:"Not Now",catch:{text:"Purchase Now",value:"catch"}}}).then(function(e){switch(e){case"catch":n.props.history.push("/coin-offer")}})):"opt2"===t?(a=49,p.data.data[0].currentCoins>a?n.props.history.push("/challenge/"+n.state.option2.value):i()("Opps! You don't have enough coin to play this match, Purchase coins to continue.",{buttons:{cancel:"Not Now",catch:{text:"Purchase Now",value:"catch"}}}).then(function(e){switch(e){case"catch":n.props.history.push("/coin-offer")}})):"opt3"===t&&(a=99,p.data.data[0].currentCoins>a?n.props.history.push("/challenge/"+n.state.option3.value):i()("Opps! You don't have enough coin to play this match, Purchase coins to continue.",{buttons:{cancel:"Not Now",catch:{text:"Purchase Now",value:"catch"}}}).then(function(e){switch(e){case"catch":n.props.history.push("/coin-offer")}}))),e()})})},n.state={option1:{img:k.a,value:"1/1"},option2:{img:u.a,value:"1/2"},option3:{img:E.a,value:"1/3"}},n}return x(a,e),_(a,[{key:"componentDidMount",value:function(){2==window.location.href.split("/")[4]&&this.setState({option1:{img:d.a,value:"2/1"},option2:{img:m.a,value:"2/2"},option3:{img:h.a,value:"2/3"}})}},{key:"render",value:function(){return o.a.createElement("section",{className:"game-option-circle hidden-xs",id:"game-option-circle"},o.a.createElement("div",{className:"container text-center"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 col-sm-12"},o.a.createElement("div",{className:"full-width"},o.a.createElement("div",{className:"arc_reactor"},o.a.createElement("div",{className:"case_container center-block"},o.a.createElement("div",{className:"e7"},o.a.createElement("div",{className:"semi_arc_3 e5_1"},o.a.createElement("div",{className:"semi_arc_3 e5_2"},o.a.createElement("div",{className:"semi_arc_3 e5_3"},o.a.createElement("div",{className:"semi_arc_3 e5_4",id:"opt1",onClick:this.checkUserCoin})))),o.a.createElement("div",{className:"core2"},o.a.createElement("img",{src:this.state.option1.img,className:"core2-img center-block",alt:"img"}))))))),o.a.createElement("div",{className:"col-md-4 col-sm-12"},o.a.createElement("div",{className:"full-width"},o.a.createElement("div",{className:"arc_reactor"},o.a.createElement("div",{className:"case_container center-block"},o.a.createElement("div",{className:"e7"},o.a.createElement("div",{className:"semi_arc_3 e5_1"},o.a.createElement("div",{className:"semi_arc_3 e5_2"},o.a.createElement("div",{className:"semi_arc_3 e5_3"},o.a.createElement("div",{className:"semi_arc_3 e5_4",id:"opt2",onClick:this.checkUserCoin})))),o.a.createElement("div",{className:"core2"},o.a.createElement("img",{src:this.state.option2.img,className:"core2-img center-block",alt:"img"}))))))),o.a.createElement("div",{className:"col-md-4 col-sm-12"},o.a.createElement("div",{className:"full-width"},o.a.createElement("div",{className:"arc_reactor"},o.a.createElement("div",{className:"case_container center-block"},o.a.createElement("div",{className:"e7"},o.a.createElement("div",{className:"semi_arc_3 e5_1"},o.a.createElement("div",{className:"semi_arc_3 e5_2"},o.a.createElement("div",{className:"semi_arc_3 e5_3"},o.a.createElement("div",{className:"semi_arc_3 e5_4",id:"opt3",onClick:this.checkUserCoin})))),o.a.createElement("div",{className:"core2"},o.a.createElement("img",{src:this.state.option3.img,className:"core2-img center-block",alt:"img"}))))))))))}}]),a}(r.Component);a.default=v},215:function(e,a,n){var t=n(216);"string"===typeof t&&(t=[[e.i,t,""]]);var p={hmr:!1};p.transform=void 0;n(174)(t,p);t.locals&&(e.exports=t.locals)},216:function(e,a,n){a=e.exports=n(173)(!0),a.push([e.i,'.game-option-circle{background:#1c1c1c;padding:55px 0}.home-game-option{padding:15px 0}.game-option-circle .has-line-center:after{background:#000}.headline{font-size:42px;line-height:1.1em;text-shadow:0 0 10px #000;margin-bottom:.5em;margin-top:0;font-weight:300;color:#fff}.game-option-circle .has-line-center:after{background:#fff}.has-line-center:after,.has-line:after{content:"";display:block;width:100px;height:2px;margin:15px 0}.has-line-center:after{margin:20px auto}.core2{background:#cedce0;width:240px;height:240px;border-radius:50%;border:10px solid rgba(2,255,255,.15);-webkit-animation:flicker2 .2s infinite;animation:flicker2 .2s infinite;margin-left:auto;margin-right:auto;margin-top:60px}.core2 .core2-img{margin-top:16%;margin-bottom:16%}.semi_arc_3{content:"";position:absolute;width:94%;height:94%;left:3%;top:3%;border:5px solid #02feff;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:rotate 4s linear infinite;animation:rotate 4s linear infinite;text-align:center;line-height:129px}.e5_1{color:rgba(2,255,255,.15);border:2px solid;border-left:2px solid transparent;-webkit-animation:rotate 5s linear infinite;animation:rotate 5s linear infinite}.e5_2{color:rgba(2,255,255,.7);border:4px solid;border-left:4px solid transparent;border-right:4px solid transparent;-webkit-animation:rotate_anti 4s linear infinite;animation:rotate_anti 4s linear infinite}.e5_3{color:rgba(2,255,255,.5);border:2px solid;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotate 3s linear infinite;animation:rotate 3s linear infinite}.e5_4{color:rgba(2,255,255,.15);border:4px solid;border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid transparent;-webkit-animation:rotate_anti 2s linear infinite;animation:rotate_anti 2s linear infinite}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes rotate_anti{0%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes rotate_anti{0%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes colour_ease{0%{border-color:#02feff}50%{border-color:rgba(2,254,255,.5)}to{border-color:#02feff}}@keyframes colour_ease{0%{border-color:#02feff}50%{border-color:rgba(2,254,255,.5)}to{border-color:#02feff}}@-webkit-keyframes flicker{0%{-webkit-box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}40%{-webkit-box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}50%{-webkit-box-shadow:0 0 16px 6px rgba(150,255,255,.5),inset 0 1px 100px 2px rgba(21,211,233,.3);box-shadow:0 0 16px 6px rgba(150,255,255,.5),inset 0 1px 100px 2px rgba(21,211,233,.3)}60%{-webkit-box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}to{-webkit-box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}}@keyframes flicker{0%{-webkit-box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}40%{-webkit-box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}50%{-webkit-box-shadow:0 0 16px 6px rgba(150,255,255,.5),inset 0 1px 100px 2px rgba(21,211,233,.3);box-shadow:0 0 16px 6px rgba(150,255,255,.5),inset 0 1px 100px 2px rgba(21,211,233,.3)}60%{-webkit-box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}to{-webkit-box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 16px 8px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}}@-webkit-keyframes flicker2{0%{-webkit-box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}40%{-webkit-box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}50%{-webkit-box-shadow:0 0 50px 17px rgba(150,255,255,.5),inset 0 1px 100px 2px rgba(21,211,233,.3);box-shadow:0 0 50px 17px rgba(150,255,255,.5),inset 0 1px 100px 2px rgba(21,211,233,.3)}60%{-webkit-box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}to{-webkit-box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}}@keyframes flicker2{0%{-webkit-box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}40%{-webkit-box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}50%{-webkit-box-shadow:0 0 50px 17px rgba(150,255,255,.5),inset 0 1px 100px 2px rgba(21,211,233,.3);box-shadow:0 0 50px 17px rgba(150,255,255,.5),inset 0 1px 100px 2px rgba(21,211,233,.3)}60%{-webkit-box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}to{-webkit-box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3);box-shadow:0 0 60px 25px rgba(150,255,255,.5),inset 0 1px 4px 2px rgba(21,211,233,.3)}}@-webkit-keyframes big_flicker{0%{-webkit-box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3);box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3)}40%{-webkit-box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3);box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3)}50%{-webkit-box-shadow:0 0 35px 17px rgba(150,255,255,.5),inset 0 1px 50px 40px rgba(21,211,233,.3);box-shadow:0 0 35px 17px rgba(150,255,255,.5),inset 0 1px 50px 40px rgba(21,211,233,.3)}60%{-webkit-box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3);box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3)}to{-webkit-box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3);box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3)}}@keyframes big_flicker{0%{-webkit-box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3);box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3)}40%{-webkit-box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3);box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3)}50%{-webkit-box-shadow:0 0 35px 17px rgba(150,255,255,.5),inset 0 1px 50px 40px rgba(21,211,233,.3);box-shadow:0 0 35px 17px rgba(150,255,255,.5),inset 0 1px 50px 40px rgba(21,211,233,.3)}60%{-webkit-box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3);box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3)}to{-webkit-box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3);box-shadow:0 0 40px 20px rgba(150,255,255,.5),inset 0 1px 30px 15px rgba(21,211,233,.3)}}.arc_reactor{position:relative;top:50%;border-radius:50%}.arc_reactor,.e7{margin-left:auto;margin-right:auto}.e7{width:95.25%;height:95.25%;left:2.5475%;right:2.5475%;border:6px solid transparent;background:transparent;border-radius:50%;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-box-shadow 3s ease;transition:-webkit-box-shadow 3s ease;-o-transition:box-shadow 3s ease;transition:box-shadow 3s ease;transition:box-shadow 3s ease,-webkit-box-shadow 3s ease;text-align:center;line-height:100px}.case_container{width:400px;height:400px;overflow:hidden;border-radius:50%}.full-width{width:100%}@media only screen and (max-width:420px){.core2{width:200px;height:200px;margin-top:40px}.case_container{width:300px;height:300px}}',"",{version:3,sources:["/var/www/html/gamefusion_master/src/include/GameOption.css"],names:[],mappings:"AAAA,oBACI,mBAAoB,AACpB,cAAgB,CACnB,AACD,kBACE,cAAgB,CACjB,AACD,2CACI,eAAiB,CACpB,AAED,UACI,eAAgB,AAChB,kBAAmB,AACnB,0BAA2B,AAC3B,mBAAoB,AACpB,aAAc,AACd,gBAAiB,AACjB,UAAY,CACf,AAED,2CACI,eAAgB,CACnB,AAED,uCAEI,WAAY,AACZ,cAAe,AACf,YAAa,AACb,WAAY,AACZ,aAAc,CACjB,AAED,uBACI,gBAAiB,CACpB,AAED,OACE,mBAAoB,AACpB,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,sCAA2C,AAC3C,wCAA0C,AAClC,gCAAkC,AAC1C,iBAAkB,AAClB,kBAAmB,AACnB,eAAiB,CAClB,AACD,kBACI,eAAgB,AAChB,iBAAmB,CACtB,AAED,YACE,WAAY,AACZ,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,QAAS,AACT,OAAQ,AACR,yBAA0B,AAC1B,kBAAmB,AACnB,8BAA+B,AAC/B,sBAAuB,AACvB,4CAA6C,AACrC,oCAAqC,AAC7C,kBAAmB,AACnB,iBAAmB,CACpB,AAED,MACE,0BAA+B,AAC/B,iBAAkB,AAClB,kCAAmC,AACnC,4CAA6C,AACrC,mCAAqC,CAC9C,AAED,MACE,yBAA8B,AAC9B,iBAAkB,AAClB,kCAAmC,AACnC,mCAAoC,AACpC,iDAAkD,AAC1C,wCAA0C,CACnD,AAED,MACE,yBAA8B,AAC9B,iBAAkB,AAClB,kCAAmC,AACnC,mCAAoC,AACpC,4CAA6C,AACrC,mCAAqC,CAC9C,AAED,MACE,0BAA+B,AAC/B,iBAAkB,AAClB,kCAAmC,AACnC,mCAAoC,AACpC,oCAAqC,AACrC,iDAAkD,AAC1C,wCAA0C,CACnD,AAGD,0BACE,GACE,+BAAiC,AACzB,sBAAyB,CAClC,AACD,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,CACF,AAGD,kBACE,GACE,+BAAiC,AACzB,sBAAyB,CAClC,AACD,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,CACF,AACD,+BACE,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,AACD,GACE,+BAAiC,AACzB,sBAAyB,CAClC,CACF,AACD,uBACE,GACE,gCAAmC,AAC3B,uBAA2B,CACpC,AACD,GACE,+BAAiC,AACzB,sBAAyB,CAClC,CACF,AACD,+BACE,GACE,oBAAsB,CACvB,AACD,IACE,+BAAqC,CACtC,AACD,GACE,oBAAsB,CACvB,CACF,AACD,uBACE,GACE,oBAAsB,CACvB,AACD,IACE,+BAAqC,CACtC,AACD,GACE,oBAAsB,CACvB,CACF,AACD,2BACE,GACE,6FAA6G,AACrG,oFAAqG,CAC9G,AACD,IACE,6FAA6G,AACrG,oFAAqG,CAC9G,AACD,IACE,+FAA+G,AACvG,sFAAuG,CAChH,AACD,IACE,6FAA6G,AACrG,oFAAqG,CAC9G,AACD,GACE,6FAA6G,AACrG,oFAAqG,CAC9G,CACF,AACD,mBACE,GACE,6FAA6G,AACrG,oFAAqG,CAC9G,AACD,IACE,6FAA6G,AACrG,oFAAqG,CAC9G,AACD,IACE,+FAA+G,AACvG,sFAAuG,CAChH,AACD,IACE,6FAA6G,AACrG,oFAAqG,CAC9G,AACD,GACE,6FAA6G,AACrG,oFAAqG,CAC9G,CACF,AACD,4BACE,GACE,8FAA8G,AACtG,qFAAsG,CAC/G,AACD,IACE,8FAA8G,AACtG,qFAAsG,CAC/G,AACD,IACE,gGAAgH,AACxG,uFAAwG,CACjH,AACD,IACE,8FAA8G,AACtG,qFAAsG,CAC/G,AACD,GACE,8FAA8G,AACtG,qFAAsG,CAC/G,CACF,AACD,oBACE,GACE,8FAA8G,AACtG,qFAAsG,CAC/G,AACD,IACE,8FAA8G,AACtG,qFAAsG,CAC/G,AACD,IACE,gGAAgH,AACxG,uFAAwG,CACjH,AACD,IACE,8FAA8G,AACtG,qFAAsG,CAC/G,AACD,GACE,8FAA8G,AACtG,qFAAsG,CAC/G,CACF,AACD,+BACE,GACE,gGAAgH,AACxG,uFAAwG,CACjH,AACD,IACE,gGAAgH,AACxG,uFAAwG,CACjH,AACD,IACE,gGAAgH,AACxG,uFAAwG,CACjH,AACD,IACE,gGAAgH,AACxG,uFAAwG,CACjH,AACD,GACE,gGAAgH,AACxG,uFAAwG,CACjH,CACF,AACD,uBACE,GACE,gGAAgH,AACxG,uFAAwG,CACjH,AACD,IACE,gGAAgH,AACxG,uFAAwG,CACjH,AACD,IACE,gGAAgH,AACxG,uFAAwG,CACjH,AACD,IACE,gGAAgH,AACxG,uFAAwG,CACjH,AACD,GACE,gGAAgH,AACxG,uFAAwG,CACjH,CACF,AAED,aACE,kBAAmB,AACnB,QAAS,AAGT,iBAAmB,CACpB,AAED,iBALE,iBAAkB,AAClB,iBAAmB,CAwBpB,AApBD,IACE,aAAc,AACd,cAAe,AACf,aAAc,AACd,cAAe,AACf,6BAA8B,AAC9B,uBAAwB,AACxB,kBAAmB,AAGnB,+BAAiC,AAC7B,2BAA4B,AACxB,uBAAyB,AACjC,8CAA+C,AAC/C,sCAAuC,AACvC,iCAAkC,AAClC,8BAA+B,AAC/B,yDAA2D,AAC3D,kBAAmB,AACnB,iBAAmB,CACpB,AAED,gBACE,YAAa,AACb,aAAc,AACd,gBAAiB,AACjB,iBAAmB,CACpB,AAED,YACE,UAAY,CACb,AAED,yCACI,OACE,YAAY,AACZ,aAAc,AACd,eAAgB,CACjB,AAED,gBACE,YAAY,AACZ,YAAc,CACf,CACJ",file:"GameOption.css",sourcesContent:[".game-option-circle {\n    background: #1c1c1c;\n    padding: 55px 0;\n}\n.home-game-option{\n  padding: 15px 0;\n}\n.game-option-circle .has-line-center:after{\n    background: #000;\n}\n\n.headline{\n    font-size: 42px;\n    line-height: 1.1em;\n    text-shadow: 0 0 10px #000;\n    margin-bottom: .5em;\n    margin-top: 0;\n    font-weight: 300;\n    color: #fff;\n}\n\n.game-option-circle .has-line-center:after{\n    background: #fff\n}\n\n.has-line-center::after,\n.has-line::after {\n    content: '';\n    display: block;\n    width: 100px;\n    height: 2px;\n    margin: 15px 0\n}\n\n.has-line-center::after {\n    margin: 20px auto\n}\n\n.core2 {\n  background: #cedce0;\n  width: 240px;\n  height: 240px;\n  border-radius: 50%;\n  border: 10px rgba(2, 255, 255, 0.15) solid;\n  -webkit-animation: flicker2 0.2s infinite;\n          animation: flicker2 0.2s infinite;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 60px;\n}\n.core2 .core2-img{\n    margin-top: 16%;\n    margin-bottom: 16%;\n}\n\n.semi_arc_3 {\n  content: \"\";\n  position: absolute;\n  width: 94%;\n  height: 94%;\n  left: 3%;\n  top: 3%;\n  border: 5px solid #02feff;\n  border-radius: 50%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-animation: rotate 4s linear infinite;\n          animation: rotate 4s linear infinite;\n  text-align: center;\n  line-height: 129px;\n}\n\n.e5_1 {\n  color: rgba(2, 255, 255, 0.15);\n  border: 2px solid;\n  border-left: 2px solid transparent;\n  -webkit-animation: rotate 5s linear infinite;\n          animation: rotate 5s linear infinite;\n}\n\n.e5_2 {\n  color: rgba(2, 255, 255, 0.7);\n  border: 4px solid;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  -webkit-animation: rotate_anti 4s linear infinite;\n          animation: rotate_anti 4s linear infinite;\n}\n\n.e5_3 {\n  color: rgba(2, 255, 255, 0.5);\n  border: 2px solid;\n  border-left: 2px solid transparent;\n  border-right: 2px solid transparent;\n  -webkit-animation: rotate 3s linear infinite;\n          animation: rotate 3s linear infinite;\n}\n\n.e5_4 {\n  color: rgba(2, 255, 255, 0.15);\n  border: 4px solid;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n  -webkit-animation: rotate_anti 2s linear infinite;\n          animation: rotate_anti 2s linear infinite;\n}\n\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n@-webkit-keyframes rotate_anti {\n  0% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n  100% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n}\n@keyframes rotate_anti {\n  0% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n  100% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n}\n@-webkit-keyframes colour_ease {\n  0% {\n    border-color: #02feff;\n  }\n  50% {\n    border-color: rgba(2, 254, 255, 0.5);\n  }\n  100% {\n    border-color: #02feff;\n  }\n}\n@keyframes colour_ease {\n  0% {\n    border-color: #02feff;\n  }\n  50% {\n    border-color: rgba(2, 254, 255, 0.5);\n  }\n  100% {\n    border-color: #02feff;\n  }\n}\n@-webkit-keyframes flicker {\n  0% {\n    -webkit-box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  40% {\n    -webkit-box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  50% {\n    -webkit-box-shadow: 0px 0px 16px 6px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 16px 6px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);\n  }\n  60% {\n    -webkit-box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  100% {\n    -webkit-box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n}\n@keyframes flicker {\n  0% {\n    -webkit-box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  40% {\n    -webkit-box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  50% {\n    -webkit-box-shadow: 0px 0px 16px 6px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 16px 6px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);\n  }\n  60% {\n    -webkit-box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  100% {\n    -webkit-box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n}\n@-webkit-keyframes flicker2 {\n  0% {\n    -webkit-box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  40% {\n    -webkit-box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  50% {\n    -webkit-box-shadow: 0px 0px 50px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 50px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);\n  }\n  60% {\n    -webkit-box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  100% {\n    -webkit-box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n}\n@keyframes flicker2 {\n  0% {\n    -webkit-box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  40% {\n    -webkit-box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  50% {\n    -webkit-box-shadow: 0px 0px 50px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 50px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);\n  }\n  60% {\n    -webkit-box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  100% {\n    -webkit-box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n}\n@-webkit-keyframes big_flicker {\n  0% {\n    -webkit-box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n  40% {\n    -webkit-box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n  50% {\n    -webkit-box-shadow: 0px 0px 35px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 50px 40px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 35px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 50px 40px rgba(21, 211, 233, 0.3);\n  }\n  60% {\n    -webkit-box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n  100% {\n    -webkit-box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n}\n@keyframes big_flicker {\n  0% {\n    -webkit-box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n  40% {\n    -webkit-box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n  50% {\n    -webkit-box-shadow: 0px 0px 35px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 50px 40px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 35px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 50px 40px rgba(21, 211, 233, 0.3);\n  }\n  60% {\n    -webkit-box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n  100% {\n    -webkit-box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n            box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n}\n\n.arc_reactor {\n  position: relative;\n  top: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%;\n}\n\n.e7 {\n  width: 95.25%;\n  height: 95.25%;\n  left: 2.5475%;\n  right: 2.5475%;\n  border: 6px solid transparent;\n  background: transparent;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  -webkit-transform: rotateZ(0deg);\n      -ms-transform: rotate(0deg);\n          transform: rotateZ(0deg);\n  -webkit-transition: -webkit-box-shadow 3s ease;\n  transition: -webkit-box-shadow 3s ease;\n  -o-transition: box-shadow 3s ease;\n  transition: box-shadow 3s ease;\n  transition: box-shadow 3s ease, -webkit-box-shadow 3s ease;\n  text-align: center;\n  line-height: 100px;\n}\n\n.case_container {\n  width: 400px;\n  height: 400px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n@media only screen and (max-width: 420px) {\n    .core2{\n      width:200px;\n      height: 200px;\n      margin-top:40px;\n    }\n\n    .case_container{\n      width:300px;\n      height: 300px;\n    }\n}"],sourceRoot:""}])},250:function(e,a,n){e.exports=n.p+"static/media/game-cr-option-10.a6ea88eb.png"},251:function(e,a,n){e.exports=n.p+"static/media/game-cr-option-50.168a99d3.png"},252:function(e,a,n){e.exports=n.p+"static/media/game-cr-option-100.457637ae.png"},253:function(e,a,n){e.exports=n.p+"static/media/game-ttt-option-10.445c956e.png"},254:function(e,a,n){e.exports=n.p+"static/media/game-ttt-option-50.be37b6c1.png"},255:function(e,a,n){e.exports=n.p+"static/media/game-ttt-option-100.3982c3e4.png"}});
//# sourceMappingURL=4.cee79e87.chunk.js.map