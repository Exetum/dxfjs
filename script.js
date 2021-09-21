import { Dxftemplate } from "./dxftemplate";


function myFunction() {
    var type = 'data:application/octet-stream;base64, ';
    var dxfobj = new Dxftemplate;
    var text = dxfobj.header + dxfobj.entityexample + dxfobj.footer;
    var base = btoa(text);
    var res = type + base;
    document.getElementById('test').href = res;
}