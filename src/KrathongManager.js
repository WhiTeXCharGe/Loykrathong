import './selection.css';
export const folder = ["/krathong", "/base", "/decor"];

const krathongBaseShift = [{ id: 0, src: "/baitong.png" }, { id: 1, src: "/han.png" },
{ id: 2, src: "/ice.png" }, { id: 3, src: "/bread.png" },
{ id: 4, src: "/kala.png" }, { id: 5, src: "/bua.png" }];

export const krathongBaseList = [{ id: 0, src: "/baitong.png", stat: { beauty: 3, love: 2, decay: 4 } }, { id: 1, src: "/han.png", stat: { beauty: 5, love: 0, decay: 5 } },
{ id: 2, src: "/ice.png", stat: { beauty: 4, love: 5, decay: 3 } }, { id: 3, src: "/bread.png", stat: { beauty: 4, love: 5, decay: 2 } },
{ id: 4, src: "/kala.png", stat: { beauty: 4, love: 4, decay: 4 } }, { id: 5, src: "/bua.png", stat: { beauty: 5, love: 3, decay: 2 } }];//baitong han ice bread kala

export const krathongDecorList = [{ id: 0, src: "/dowreung.png" }, { id: 1, src: "/thong.png" },
{ id: 2, src: "/kluay.png" }, { id: 3, src: "/mali.png" },
{ id: 4, src: "/ban.png" }];//dowreung thong kluay mali ban

export const krathongList = [{ id: 0, src: "/baitongdow.png" }, { id: 1, src: "/baitongthong.png" }, { id: 2, src: "/baitongkluay.png" }, { id: 3, src: "/baitongmali.png" }, { id: 4, src: "/baitongban.png" }, 
{ id: 5, src: "/handow.png" }, { id: 6, src: "/hanthong.png" }, { id: 7, src: "/hankluay.png" }, { id: 8, src: "/hanmali.png" }, { id: 9, src: "/hanban.png" }, 
{ id: 10, src: "/icedow.png" }, { id: 11, src: "/icethong.png" }, { id: 12, src: "/icekluay.png" }, { id: 13, src: "/icemali.png" }, { id: 14, src: "/iceban.png" }, 
{ id: 15, src: "/breaddow.png" }, { id: 16, src: "/breadthong.png" }, { id: 17, src: "/breadkluay.png" },{ id: 18, src: "/breadmali.png" }, { id: 19, src: "/breadban.png" }, 
{ id: 20, src: "/kaladow.png" }, { id: 21, src: "/kalathong.png" }, { id: 22, src: "/kalakluay.png" }, { id: 23, src: "/kalamali.png" },{ id: 24, src: "/kalaban.png" }, 
{ id: 25, src: "/buadow.png" }, { id: 26, src: "/buathong.png" }, { id: 27, src: "/buakluay.png" }, { id: 28, src: "/buamali.png" }, { id: 29, src: "/buaban.png" }];


export const krathongStat = [{ id: 0, src: "/0.png" }, { id: 1, src: "/1.png" },
{ id: 2, src: "/2.png" }, { id: 3, src: "/3.png" },
{ id: 4, src: "/4.png" }, { id: 5, src: "/5.png" }];

export const krathongDecorDescription = [{ id: 0, descript: {name : "ดาวเรือง", des : "ความเจริญรุ่งเรืองและความเป็นสิริมงคลในชีวิต"} },
{ id: 1, descript: {name : "ทอง", des : "โชคลากและร่ำรวยเงินทอง"} },
{ id: 2, descript: {name : "ดอกกล้วยไม้", des : "ความมั่งคั่งและความสง่างาม"} },
{ id: 3, descript: {name : "ดอกมะลิ", des : "ความรักที่บริสุทธิ์"} },
{ id: 4, descript: {name : "ดอกบานไม่รู้โรย", des : "ความไม่ร่วงโรยและคงอยู่ตลอดไป"} },
];

export const regionPlace = [ {id: 0,name :"ภาคเหนือ"},{id : 1,name : "ภาคอีสาน"},{id :2,name : "ภาคกลาง"},{id:3,name :"ภาคใต้"}];

export const krathong = {
  getId: function (id) {
    var result = -1;
    for (var loop = 0; loop < this.length; loop++) {
      if (this[loop].id == id) {

        return loop;
      }
    }

    return result;
  },
  
  getSrc: function (id) {
    var result = -1;
    for (var loop = 0; loop < this.length; loop++) {
      if (this[loop].id == id) {
        return this[loop].src;
      }
    }

    return result;
  }
};

function SetSrc(pos, item, value) {
  if(value !== undefined)
  {
    document.getElementById(pos).alt = value;
  }
  document.getElementById(pos).src = item;
  
}

export function ChangekrathongBase(order) {
  if (order == "backward") {
    var first = krathongBaseShift.pop();
    krathongBaseShift.unshift(first);
  }
  else if (order == "forward") {
    var last = krathongBaseShift.shift();
    krathongBaseShift.push(last);
  }
  SetSrc("box1", folder[1] + (krathongBaseShift[0].src), krathongBaseShift[0].id);
  SetSrc("box2", folder[1] + (krathongBaseShift[1].src), krathongBaseShift[1].id);
}

export function ShowKrathong(id, type, value, object) {

  var base = krathong.getId.call(krathongBaseList, value);
  var decor = krathong.getId.call(krathongDecorList, value);

  var index;
  if (type == "base") {
    decor = krathong.getId.call(krathongList, document.getElementById(id).alt) % (krathongDecorList.length);
  }
  else if (type == "decor") {
    base = krathong.getId.call(krathongList, document.getElementById(id).alt);

    switch (base) {
      //1
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        base = 0;
        break;
      //2
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        base = 1;
        break;
      //3
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
        base = 2;
        break;
      //4
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
     
        base = 3;
        break;
      //5
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
        base = 4;
        break;
      //6
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
        base = 5;
        break;
    }

  }

  if (base != -1 && decor != -1) {
    index = base * (krathongDecorList.length) + decor;

    SetSrc(id,folder[0]+krathongList[index].src,index);
    SetSrc("beauty",krathong.getSrc.call(krathongStat, krathongBaseList[base].stat.beauty));
    SetSrc("love",krathong.getSrc.call(krathongStat, krathongBaseList[base].stat.love));
    SetSrc("decay",krathong.getSrc.call(krathongStat, krathongBaseList[base].stat.decay));
    document.getElementById("name").innerHTML = krathongDecorDescription[decor].descript.name;
    document.getElementById("des").innerHTML = krathongDecorDescription[decor].descript.des;
    object(index);
  }

}



