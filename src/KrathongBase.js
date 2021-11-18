

const krathongBaseShift = [{ id: 0, src: "./baitong.png" },{ id: 1, src: "./seiya.jpg" }];
const Setbase = (pos,item,value) =>
{
  document.getElementById(pos).src = item;
  document.getElementById(pos).alt = value;
}
const ChangekrathongBase = (order) => {
  if (order == "backward") {
    var first = krathongBaseShift.pop();
    krathongBaseShift.unshift(first);
  }
  else if (order == "forward") {
    var last = krathongBaseShift.shift();
    krathongBaseShift.push(last);
  }
  Setbase("box1",krathongBaseShift[0].src,krathongBaseShift[0].id);
  Setbase("box2",krathongBaseShift[1].src,krathongBaseShift[1].id);
}
export default ChangekrathongBase;
