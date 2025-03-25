sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    'sap/m/Dialog',
    "sap/ui/core/format/DateFormat",
], function (Controller, JSONModel, MessageBox, Dialog, DateFormat) {

    return {
        data: [],
        onInit: function (filterbar) {
            var a = new Citek()
            a.oninit('Đây là ở file js khác')
            alert(a._citek)
        },
        // xoá Pallet ID
    }
}
)