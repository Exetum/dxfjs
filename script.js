import { Dxftemplate } from "./dxftemplate";


// function myFunction() {
//     var type = 'data:application/octet-stream;base64, ';
//     var dxfobj = new Dxftemplate;
//     var text = dxfobj.header + dxfobj.entityexample + dxfobj.footer;
//     var base = btoa(text);
//     var res = type + base;
//     document.getElementById('test').href = res;
// }

function writeFile(name, value) {
    var val = value;
    if (value === undefined) {
    val = "";
    }
    var download = document.createElement("a");
    download.href = "data:text/plain;content-disposition=attachment;filename=file," + val;
    download.download = name;
    download.style.display = "none";
    download.id = "download"; document.body.appendChild(download);
    document.getElementById("download").click();
    document.body.removeChild(download);
}

// writeFile("9dksk239xwd.dxf", "jxowsjsivneic");