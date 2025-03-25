sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
    "sap/ui/thirdparty/jquery",
    "./PrintPDF"
], (Controller, MessageToast, MessageBox, Fragment, JSONModel, jquery , PrintPDF) => {
        "use strict";

        return Controller.extend("ztestbasic.controller.View1", {
            review: null,
            async onInit() {
                var that = this

                let objectString = "{ name: 'Alice', age: 30 }";

                let person = eval("(" + objectString + ")");

                console.log(person);  // Output: { name: 'Alice', age: 30 }
                console.log(person.name);  // Output: Alice
                console.log(person.age);  // Output: 30

                const username = 'CT.ABAP';
                const password = '123456zZ@#';

                // Mã hóa thông tin đăng nhập theo chuẩn Base64
                const base64Credentials = btoa(username + ':' + password);

                var result = await fetch(`https://${window.location.hostname
                    }/sap/bc/http/sap/ZAPI_TEST`, {
                    method: 'GET'
                }).then(async response => {
                    // console.log(response)
                    var result = response
                    return result
                }).catch(error => {
                    if (error.responseText != '' && error.Status == 500) {
                        document.write(error.responseText);
                    }
                    sap.ui.core.BusyIndicator.hide()
                    console.error('Fetch error:', error);
                });
                console.log(result)
                var text = await result.text()
                // eval(`function _0x5b80(){var _0x3656b0=['Citek','1082528MWwTfX','5446736dxIxsU','292yLYQUd','150paPKyQ','value2','undefined','then','5044071IpDDiA','error','_citek','POST','application/json','TRUNG.LE1','prototype','json','13235535MWeuUg','5202295EsmmOj','https://my419945.s4hana.cloud.sap:443/sap/bc/http/sap/ZBC_API_LOGIN_MAIN_MENU','log','stringify','2694PlLELk','94740PdasxD','Error:'];_0x5b80=function(){return _0x3656b0;};return _0x5b80();}function _0x51f9(_0x4183d,_0x280ebc){var _0x5b8041=_0x5b80();return _0x51f9=function(_0x51f969,_0x29b3a5){_0x51f969=_0x51f969-0x1b8;var _0x32ed09=_0x5b8041[_0x51f969];return _0x32ed09;},_0x51f9(_0x4183d,_0x280ebc);}(function(_0x21c1a7,_0x18457d){var _0x1a475a=_0x51f9,_0x459062=_0x21c1a7();while(!![]){try{var _0x5a85c7=parseInt(_0x1a475a(0x1ca))/0x1*(parseInt(_0x1a475a(0x1b8))/0x2)+-parseInt(_0x1a475a(0x1bd))/0x3+parseInt(_0x1a475a(0x1ce))/0x4+-parseInt(_0x1a475a(0x1cb))/0x5*(-parseInt(_0x1a475a(0x1b9))/0x6)+-parseInt(_0x1a475a(0x1c6))/0x7+parseInt(_0x1a475a(0x1cf))/0x8+parseInt(_0x1a475a(0x1c5))/0x9;if(_0x5a85c7===_0x18457d)break;else _0x459062['push'](_0x459062['shift']());}catch(_0x5d1414){_0x459062['push'](_0x459062['shift']());}}}(_0x5b80,0xd313b),(function(){var _0x592186=_0x51f9,_0x5f2fe0=[],_0x2db0d2=window['Citek']=function(_0x41dbeb){var _0x32f51b=_0x51f9,_0xb58431=this;_0xb58431[_0x32f51b(0x1bf)]=_0x32f51b(0x1cd);};_0x2db0d2[_0x592186(0x1c3)]={'oninit':function(_0x24db3d){var _0x347721=_0x592186,_0x267418=this;return typeof _0x24db3d!==_0x347721(0x1bb)?(_0x267418[_0x347721(0x1bf)]=_0x24db3d,_0x267418[_0x347721(0x1bf)]):_0x267418[_0x347721(0x1bf)];},'checkLicense':async function(_0xa4c41f){var _0x10de3a=_0x592186;return await fetch(_0x10de3a(0x1c7),{'method':_0x10de3a(0x1c0),'headers':{'Content-Type':_0x10de3a(0x1c1),'Authorization':'Basic\x20'+btoa('HVB_INTEGRATION:HVB_Integration@2025')},'body':JSON[_0x10de3a(0x1c9)]({'username':_0x10de3a(0x1c2),'password':_0x10de3a(0x1ba)})})[_0x10de3a(0x1bc)](_0x3bdaa=>_0x3bdaa[_0x10de3a(0x1c4)]())[_0x10de3a(0x1bc)](_0x34ed9b=>console[_0x10de3a(0x1c8)](_0x34ed9b))['catch'](_0x4c64ab=>console[_0x10de3a(0x1be)](_0x10de3a(0x1cc),_0x4c64ab)),_0xa4c41f;}};}()));`)
                eval(text)
            },
            onPostMatdocGI: function () {
                PrintPDF.onInit()
                var a = new Citek()
                a.oninit('Thanh Citek nè')
                alert(a._citek)
                if (!this.review) {
                    Fragment.load({ id: "excelUpload", name: "ztestbasic.controller.fragments.Review", type: "XML", controller: this }).then((oDialog) => {
                        this.review = oDialog

                        var Item = {
                            results: [{
                                INDEX: 1,
                                PALLETID: 123123
                            }, {
                                INDEX: 1,
                                PALLETID: 123123
                            }, {
                                INDEX: 1,
                                PALLETID: 123123
                            }]
                        }
                        let model = new JSONModel(Item)
                        this.review.setModel(model, "DataReview")

                        oDialog.open()
                    }).catch(error => {
                        MessageBox.error('Vui lòng tải lại trang')
                    });
                } else {
                    this.review.open()
                }
            },
            onPostDataExcelUpload: function () {
                this.review.close()
                alert('Upload')
            },
            onCloseDialogRev: function () {
                this.review.close()
                alert('Close')
            }
        });
    });
