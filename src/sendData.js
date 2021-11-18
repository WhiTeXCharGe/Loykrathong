import axios from "axios";
/*export const toSend = {
    material: "",
    ulity: "",
    place: "",

    setJson: function (material, ulity, place) {
        this.place = regionPlace[parseInt(document.getElementById(material).alt) - 1].name;
        /*this.material = krathong.getSrc.call(krathongBaseList, document.getElementById(material).alt);
        this.ulity = krathong.getSrc.call(krathongDecorList, document.getElementById(ulity).alt);
        
    }
};
export function SendToDatabase(params) {

    //const json = JSON.stringify(params);



    const xmlHttp = new XMLHttpRequest();
    /*xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
        }
    };
    xmlHttp.open("POST","Loy-krathong-back-end-main/store_data.php");
    xmlHttp.setRequestHeader("Test","data");
    xmlHttp.send("store=test");
}*/
export function OnSubmit (e){
    e.preventDefault();
    alert(this.state.username);
    //!!! need to stringify the payload before sending it to phpmyadmin.
    var payload = {
       username: this.state.username
    };

    axios.post('http://localhost/phpmyadmin/index.php',
       JSON.stringify(payload)).then(res => {
       console.log(res);
    }).catch(error => {
       console.log(error);
    });
 };


