import React, { useState } from 'react';
import { Button, Card, Row, Col, Container, Navbar, Nav, img, Modal } from 'react-bootstrap';
import { ShowKrathong, krathongBaseList, krathongDecorList, krathongList, ChangekrathongBase, folder, krathongStat, krathong, krathongDecorDescription } from './KrathongManager';
import './selection.css';
import axios from 'axios';
import { Route, BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import { OnSubmit } from './sendData';

export default function () {

  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [kraThong, setKrathong] = useState(0);
  const [place, setPlace] = useState("ภาคกลาง");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleWishChange = (e) => {
    setWish(e.target.value);
  };


  function openForm(imgid, id) {
    document.getElementById("pop-up").style.display = "block";
    document.getElementById(imgid).src = folder[0] + krathongList[id].src;
  }

  function closeForm() {
    document.getElementById("pop-up").style.display = "none";
  }

  function changeBFOnclick(x, value, UP, place) {
    document.getElementById("bgPopup").style.backgroundImage = "url(" + x + ")";
    document.getElementById("bgPopup").alt = value;
    setPlace(place);
  }

  function openSelectPlace() {
    document.getElementById("SelectKratong").style.display = "block";

  }

  function closeSelectPlace() {
    document.getElementById("SelectKratong").style.display = "none";

  }

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet"></link>
      </head>
      <body className="bg" >
        <div>
          <div>
            <Nav class="navbar navbar-expand-md navbar-dark fixed-top bg-transparent">
              <div class="container-fluid">
                  <img class="kmutt-logo" src="https://www.kmutt.ac.th/wp-content/themes/kmutt/inc/assets/img/icons/kmutt-logo.svg" alt="kmutt" width="60" height="48">
                  </img>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>

            </Nav>
          </div>



          <br />
          <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center" id="featured-3">
            <div class="row">


              <div class="col-md-4 themed-grid-col">
                <div class="row">
                  <div class="col-sm-12">
                    <h1 class="text-center">เลือกกระทง</h1>
                  </div>
                </div>

                <div class="row align-items-center" style={{ height: "170px" }}>
                  <div class="col-sm-2 p-0 m-0">
                    <img onClick={() => ChangekrathongBase("backward")} src="left.png" width="30" height="40"></img>
                  </div>
                  <div class="col-sm-4 p-0 m-0">
                    <img onClick={() => ShowKrathong("show", "base", document.getElementById("box1").alt, setKrathong)} id="box1" class="kratong1" src={folder[1] + (krathongBaseList[0].src)} width="100%" height="100%" alt="0"></img>
                  </div>
                  <div class="col-sm-4 p-0 m-0">
                    <img onClick={() => ShowKrathong("show", "base", document.getElementById("box2").alt, setKrathong)} id="box2" class="kratong2" src={folder[1] + (krathongBaseList[1].src)} width="100%" height="100%" alt="1"></img>
                  </div>
                  <div class="col-sm-2 p-0 m-0">
                    <img onClick={() => ChangekrathongBase("forward")} src="right.png" width="30" height="40"></img>
                  </div>
                </div>

                <div class="leftbotcorner">
                  <div class="row ">
                    <h1>ความสวยงาม</h1>
                  </div>
                  <div class="row">
                    <div class="bd-example">
                      <img id="beauty" src={krathong.getSrc.call(krathongStat, krathongBaseList[0].stat.beauty)} width="150" height="25"></img>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <h1>รักโลก</h1>
                  </div>
                  <div class="row">
                    <div class="bd-example">
                      <img id="love" src={krathong.getSrc.call(krathongStat, krathongBaseList[0].stat.love)} width="150" height="25"></img>

                    </div>
                  </div>
                  <div class="row">
                    <h1>ความทนทาน</h1>
                  </div>
                  <div class="row">
                    <div class="bd-example">
                      <img id="decay" src={krathong.getSrc.call(krathongStat, krathongBaseList[0].stat.decay)} width="150" height="25"></img>

                    </div>
                  </div>

                  <div class="row mt-4">
                    <Link to="/">
                      <Button class="btn btn-secondary btn-lg" role="button"><h3>กลับสู่หน้าหลัก</h3></Button>
                    </Link>
                  </div>
                </div>

              </div>

              <div class="col-md-4 themed-grid-col">
                <div class="row" >
                  <div class="col-sm-12">
                    <div class="titlename">
                      {/*<h6 class="pb-2 sticky-top justify-content-center " >สร้างกระทง</h6>*/}
                    </div>
                    <div class="row align-items-bottom justify-content-center" style={{ height: "600px" }}>
                      <div class="col-sm-2 mx-1">
                        <div class="krathongmidlle"><img id="show" src={folder[0] + krathongList[0].src} width="500" height="500" alt="0"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 themed-grid-col">
                  <div class="row ">
                    <h3 class="text-center">เลือกของประดับกระทง</h3>
                  </div>
                  <div class="row align-items-end" style={{ height: "120px" }}>
                    <Col md={{ span: 4}}>
                      <img onClick={() => ShowKrathong("show", "decor", document.getElementById("decor1").alt, setKrathong)} class="item1" id="decor1" src={folder[2] + krathongDecorList[0].src} width="60" height="60" alt="0"></img>
                     </Col>
                    <Col md={{ span: 4}}>
                      <img onClick={() => ShowKrathong("show", "decor", document.getElementById("decor2").alt, setKrathong)} class="item2" id="decor2" src={folder[2] + krathongDecorList[1].src} width="60" height="60" alt="1"></img>
                    </Col>
                    <Col md={{ span: 4}}>
                      <img onClick={() => ShowKrathong("show", "decor", document.getElementById("decor3").alt, setKrathong)} id="decor3" class="item3" src={folder[2] + krathongDecorList[2].src} width="60" height="60" alt="2"></img>
                    </Col>
                  </div>

                <div class="row align-items-end" style={{ height: "120px" }}>
                  <Col md={{ span: 4, offset: 2 }}>
                    <img onClick={() => ShowKrathong("show", "decor", document.getElementById("decor4").alt, setKrathong)} id="decor4" class="item1" src={folder[2] + krathongDecorList[3].src} width="60" height="60" alt="3"></img>
                  </Col>
                  <Col md={{ span: 4}}>
                    <img onClick={() => ShowKrathong("show", "decor", document.getElementById("decor5").alt, setKrathong)} id="decor5" class="item2" src={folder[2] + krathongDecorList[4].src} width="60" height="60" alt="4"></img>
                  </Col>
                </div>

                <div class="row mt-5">
                  <h1 id="name" >{krathongDecorDescription[0].descript.name}</h1>
                  <h4 id="des" >{krathongDecorDescription[0].descript.des}</h4>
                </div>

                <div class="col-md-6 themed-grid-col">
                  <div class="rightbotcorner">
                    <button onClick={() => openForm("show2", document.getElementById("show").alt)} class="btn btn-success btn-md rounded" data-target="#kratong" data-toggle="modal">
                      <h3>ใส่คำอธิฐาน</h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="pop-up" class="modal" tabindex="-1">
            <div class="modal-dialog modal-fullscreen bg-transparent">
              <div class="modal-content" id="bgPopup" alt="0">
                <div class="modal-body">
                  <form action="/Loy-krathong-back-end-main/store_data.php" method = "POST" >
                    <div class="container-fluid px-3 py-3">

                      <div class="row md-2">
                        <div class="col-md-6 ">

                          <div class="row d-flex justify-item-center" style={{ height: "350px", width: "350px" }}>
                            <Col md={{ span: 5, offset: 3 }}>
                              <img id="show2" src={folder[0] + krathongList[0].src} alt="0" width="350" height="350"></img>
                            </Col>
                          </div>
                          <div class="row py-5 px-5" style={{ height: "75px" }}>
                            {/*<label for="InputWish" class="col-form-label"> ใส่ชื่อ</label>*/}
                            <input type="text" class="form-control rounded" placeholder="ชื่อ" name="name" onChange={handleNameChange} value={name}></input>
                          </div>
                          <div class="row py-2 px-5" style={{ height: "170px" }}>
                            {/*<label for="InputWish" class="col-form-label" style={{ height: "50px" }}> ใส่คำอธิฐาน</label>*/}
                            <textarea class="form-control rounded" style={{ height: "120px" }} placeholder="ขอให้" name="wish" onChange={handleWishChange} value={wish}></textarea>
                          </div>
                          <div class="row" style={{ height: "50px", width: "150px" }}>
                            <button onClick={() => closeForm()} type="button" class="btn btn-secondary rounded" data-dismiss="modal">ย้อนกลับ!</button>
                          </div>
                        </div>

                        <div class="col-md-5 mx-auto align-items-center text-center">
                          <div class="row" style={{ height: "350px" }}>
                            <h3>กดเลือกสถานที่ลอยกระทง</h3><br />
                            <button onClick={() => openSelectPlace()} type="button" class="btn btn-transparent" data-bs-target="#SelectKratong" data-bs-toggle="modal" style={{ height: "250px", width: "300" }}>
                              <img src="./logo.PNG" id="wish" width="300" height="250" class="rounded"></img>
                            </button>
                          </div>
                          <div class="row" style={{ height: "50px", width: "200px", position: "relative", left: "38%", top: "15%" }}>
                            <Link to ="/">
                            <Button type="submit" disabled={!name || !wish} class="btn btn-secondary btn-lg" role="button" ><h3>ลอยเลย</h3></Button>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="modal" id="SelectKratong" tabindex="-2">
              <div class="modal-dialog modal-xl bg-white">
                <div class="modal-content">
                  <div class="popup1">
                    <Modal.Header>
                      <Modal.Title >
                        <div class="middleWherePlace ">
                          <h2>กดเลือกสถานที่ลอยกระทง</h2>
                        </div>
                      </Modal.Title>
                      <button onClick={() => closeSelectPlace()} type="button" class="btn-close" aria-label="Close"></button>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                      <Container>
                        <Row style={{ height: "250px" }}>
                          <Col xs={12} md={6}>
                            <div class="text-center">
                              <button onClick={() => changeBFOnclick("./BG/ภาคเหนือ.svg", document.getElementById("place1").alt, setPlace, "ภาคเหนือ")}><img id="place1" class="item3" src="./BG/ภาคเหนือ.svg" width="200" height="130" alt="1"></img></button>
                              <h2>ภาคเหนือ</h2>
                            </div>
                          </Col>
                          <Col xs={6} md={6}>
                            <div class="text-center">
                              <button onClick={() => changeBFOnclick("./BG/ภาคอีสาน.svg", document.getElementById("place2").alt, setPlace, "ภาคอีสาน")}><img id="place2" class="item3" src="./BG/ภาคอีสาน.svg" width="200" height="130" alt="2"></img></button>
                              <h2>ภาคอีสาน</h2>
                            </div>
                          </Col>
                        </Row>

                        <Row style={{ height: "250px" }}>
                          <Col xs={6} md={6}>
                            <div class="text-center">
                              <button onClick={() => changeBFOnclick("./BG/ภาคกลาง.png", document.getElementById("place3").alt, setPlace, "ภาคกลาง")}><img id="place3" class="item3" src="./BG/ภาคกลาง.png" width="200" height="130" alt="3"></img></button>
                              <h2>ภาคกลาง</h2>
                            </div>
                          </Col>
                          <Col xs={6} md={6}>
                            <div class="text-center">
                              <button onClick={() => changeBFOnclick("./BG/ภาคใต้.svg", document.getElementById("place4").alt, setPlace, "ภาคใต้")}><img id="place4" class="item3" src="./BG/ภาคใต้.svg" width="200" height="130" alt="4"></img></button>
                              <h2>ภาคใต้</h2>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/*<button onClick={() => closeSelectPlace()} type="button" class="btn-close d-flex justify-content-end" data-bs-dismiss="modal" aria-label="Close"></button>*/}
        </div>
      </body>
    </>
  );
}