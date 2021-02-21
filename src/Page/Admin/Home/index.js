import React, { useEffect, useState } from 'react';

import { Row, Col, Form, Button, Container, Dropdown, Table, DropdownButton } from 'react-bootstrap';
import { useTable } from 'react-table'
import db from "../../../Config";
import Aos from 'aos';
import 'firebase/database';
import './index.scss';
import { v1 as uuidv1 } from 'uuid';
import Icons from '../../../Icons';
import 'firebase/firestore'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPlus, faTimes, faFileUpload } from '@fortawesome/free-solid-svg-icons';







const Control = () => {

  const [quality, setQuality] = useState([]);
  const [qualityEdited, setQualityEdited] = useState({ status: false, idx: null });
  const [state, setState] = useState({ id: uuidv1(), icon: '', name: '', description: '', number: '' });
  const [stateQuality, setStateQuality] = useState({ id: '', icon: '', name: '', description: '', number: '' });




  const dbFire = db.firestore();
  const storage = db.storage();
  const { t, } = useTranslation(); //i18n
  const [welcome, setWelcome] = useState('');
  const [bookImage, setBookImage] = useState(null);
  const [book, setBook] = useState({ url: "", imageName: "" });
  const [bookText, setBookText] = useState({ text1: "", text2: "" });
  const [progressUploadBookImage, setProgressUploadedBookImage] = useState('');


  //membuat service item baru
  const [createServices, setCreateServices] = useState({ image: '', title: "", description: "", id: uuidv1() })
  //menampung data dari firestore saat halaman di buka
  const [services, setServices] = useState([]);
  //pembanding saat edit
  const [servicesEdited, setServicesEdited] = useState({ status: false, idx: null });
  //menampung data sementara saat edit
  const [stateServices, setStateServices] = useState({ id: '', title: '', description: '', image: '' });
  //menampung image sementara saat edit
  const [editServicesImage,setEditServicesImage] = useState(null);








  useEffect(() => {
    const qualityFromDb = [];
    const servicesFromDb = [];
    Aos.init({ duration: 1500 });
    dbFire.collection('quality').get()
      .then((snapshoot) => {
        snapshoot.forEach((docs) => {
          qualityFromDb.push(docs.data());
        })
      })
      .then(() => {
        setQuality(qualityFromDb)
      })


    dbFire.collection('welcome').get()
      .then((snapshoot) => {
        snapshoot.forEach((docs) => {
          setWelcome(docs.data().description)

        })
      })

    dbFire.collection('book').get()
      .then((snapshoot) => {
        snapshoot.forEach(async (docs) => {
          const url = docs.data().url
          const name = docs.data().name
          setBook({ ...book, url: url, imageName: name })
        })

      })


    dbFire.collection('book_text').get()
      .then((snapshoot) => {
        snapshoot.forEach(async (docs) => {
          const text1 = docs.data().text1
          const text2 = docs.data().text2
          setBookText({ ...bookText, text1: text1, text2: text2 })
        })
      })

    dbFire.collection('services').get()
      .then((snapshoot) => {
        snapshoot.forEach(async (docs) => {
         servicesFromDb.push(docs.data())
        })
        
      }).then(()=>{
        setServices(servicesFromDb)
      })
  }, [])





  //------------------------------------------handele book row------------------------------------------------
  const uploadBookImage = async () => {


    const uploaded = storage.ref(`/imagesBook/${bookImage.name}`).put(bookImage, { contentType: 'image/jpg' });

    uploaded.on('state_changed', (snapshoot) => {
      var progress = (snapshoot.bytesTransferred / snapshoot.totalBytes) * 100;
      setProgressUploadedBookImage(Math.round(progress))
      return;
    })
    uploaded.then(async (snapshoot) => {
      return snapshoot.ref.getDownloadURL();
    })
      .then((url) => {
        dbFire.collection('book').doc('image').update({ url: url, name: bookImage.name })
      })

      .then(() => {
        alert('succes')
        window.location.reload(false);
      })
      .catch((error) => { alert(error) })



  }

  const getImage = async (e) => {


    // await setBookImage(e.target.files[0])
    var image = e.target.files[0]
    var newFile = new File([image], 'book-image.jpg', { type: 'image/jpg' });

    setBookImage(newFile)

  }



  //----------------------------------------------end book row --------------------------------------

  //------------------------edit quality--------------------------------

  const addQuality = async () => {
    await setState({ ...state, id: uuidv1() })
    await dbFire.collection('quality').doc(state.id).set({ name: state.name, description: state.description, icon: state.icon, id: state.id })
      .then((data) => {
        alert('succes')
      })
      .catch((error) => {
        alert(error)
      })
    window.location.reload(false)
  }




  const deleteQuality = (id) => {
    dbFire.collection('quality').doc(`${id}`).delete()
      .then(() => {
        alert('Success')
      })
      .catch((error) => {
        alert(error)
      })
  }



  //ketika button edit  di tekan
  const handleQualityEdit = async (ctx, index) => {

    await setQualityEdited({ ...qualityEdited, status: !qualityEdited.status, idx: index })
    await setStateQuality(ctx)
  }



  //ketika button submit edit di tekan
  const qualityHasEdit = async () => {

    dbFire.collection('quality').doc(`${stateQuality.id}`)
      .set(stateQuality)
      .then(() => {
        alert('succes edit')
      })
      .catch(error =>
        alert(error)
      )

    setQualityEdited({ ...qualityEdited, status: false, idx: null });
  }




  //-----------------------------------------end quality----------------------------------------------------------

















  //-----------------------------------------services-------------------------------------------------------------

  const addServices = async () => {
    //upload gambar ke storage
    const uploaded = storage.ref(`/imageServices/${createServices.image.name}`).put(createServices.image, { contentType: 'image/jpg' });


    //mengambil url gambar
    uploaded.then(async (snapshoot) => {
      return snapshoot.ref.getDownloadURL();
    })
      .then((url) => {
        dbFire.collection('services')
          .doc(createServices.id)
          .set({
            title: createServices.title,
            id: createServices.id,
            description: createServices.description,
            image: url
          })
      })
      .then(() => {
        alert('succes')
      })
      .catch((error) => {
        alert(error)
      })
  }

  const handleServicesEdit = async (ctx, index) => {

    await setServicesEdited({ ...servicesEdited, status: !servicesEdited.status, idx: index })
    await setStateServices(ctx)


  }

  const deleteServices = (id) => {
    dbFire.collection('services').doc(`${id}`).delete()
      .then(() => {
        alert('Success')
      })
      .catch((error) => {
        alert(error)
      })
  }

  const servicesHasEdit = async () => {


    await storage.ref(`/imageServices/${editServicesImage.name}`).put(editServicesImage, { contentType: 'image/jpg' })

    .then(()=>{
      dbFire.collection('services').doc(`${stateServices.id}`)
      .set(stateServices)
      .then(() => {
        alert('succes edit')
      })
      .catch(error =>
        alert(error)
      )
      .then(() => {
        window.location.reload(false)

      })

    })
  

  }

  const onChangeImageservices = (e,) => {
    let id = uuidv1();
    let image = e.target.files[0]
    let newFile = new File([image], `${id}.jpg`, { type: 'image/jpg' });

    setCreateServices({ ...createServices, image: newFile, id: id })
    console.log(createServices.image)

  }

  //ketika edit gambar services
  const onEditImageServices = (e, id) => {
    let image = e.target.files[0]
    let newFile = new File([image], `${id}.jpg`, { type: 'image/jpg' });

    setEditServicesImage(newFile)
  }
  //-----------------------------------------end srevices------------------------------------------------------














  const updateWelcome = () => {

    dbFire.collection('welcome').doc('description').set({ description: welcome })

  }

  const updatebookText = () => {
    dbFire.collection('book_text').doc('text1').set(bookText)
      .then(() => {
        alert('success')
      })
  }





  return (
    <div className="admin-home">
      <div >
        <Container fluid >
          <Row>
            <Col xs={12} lg={6} className="row1-col1" style={{ minHeight: '91vh' }}>
              <div className="row1-back-ar ">
                <p>AR</p>
              </div>
              <div>
                {/* <img className="hand-img" src={hands} style={{ width: 250, height: 250, position: "absolute", bottom: 0, right: 0 }} alt="img" /> */}
              </div>
              <div className="mx-auto description-text" style={{ width: '80%', color: "#78909C", zIndex: 99, }}>
                <h1 className="text-info"><b>{t('welcome.1')}</b></h1>
                <h1><b>ARWICS</b></h1>
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea9">
                    <Form.Control as="textarea" rows={8} value={welcome} onChange={(e) => { setWelcome(e.target.value) }} />
                  </Form.Group>
                  <Button onClick={updateWelcome}>
                    Update
                  </Button>
                </Form>
              </div>
            </Col>
            <Col xs={12} lg={6} className="bg-light">
              <div className="row1-back-wics ">
                <p>wics</p>
              </div>
              <div>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
      <div className="home-card-container text-center">
        <ul className="p-0">
          <li>
            <Form>
              <Button className="btn-edit-quality" style={{ backgroundColor: "teal" }} onClick={() => addQuality()}>
                <FontAwesomeIcon icon={faPlus} style={{ color: "white", fontSize: '13px' }} />
              </Button>
              <div className="home-card-add">
                <Row>
                  <Col className="col-icons-container">
                    <div className="icon-container mx-auto">
                      <DropdownButton title="Icons" id="bg-vertical-dropdown-3 " className="my-4" onSelect={(e) => setState({ ...state, icon: e })}>
                        {Icons.map((ctx, index) => {
                          return (
                            <Dropdown.Item key={index} eventKey={index}>{ctx.iconName}</Dropdown.Item>
                          )
                        })}
                      </DropdownButton>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-card-title px-5">
                    <Form.Group controlId="exampleForm.ControlTextarea11s" >
                      <Form.Control as="textarea" rows={3} placeholder="title" onChange={(e) => { setState({ ...state, name: e.target.value }) }} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-card-description">
                    <Form.Group controlId="exampleForm.ControlTextarea3">
                      <Form.Control as="textarea" rows={5} placeholder="decription" onChange={(e) => { setState({ ...state, description: e.target.value }) }} />
                    </Form.Group>

                  </Col>
                </Row>
              </div>
            </Form>
          </li>
          {Object.values(quality).reverse().map((ctx, index) => {
            return (
              <li key={index}>
                <div style={{ display: 'flex' }}>


                  {qualityEdited.status && index === qualityEdited.idx ?

                    <Button className="btn-edit-quality" style={{ backgroundColor: "teal" }} onClick={qualityHasEdit}>
                      <FontAwesomeIcon icon={faFileUpload} style={{ color: "white", fontSize: '18px' }} />
                    </Button>

                    :
                    <Button className="btn-edit-quality" onClick={() => handleQualityEdit(ctx, index)}>
                      <FontAwesomeIcon icon={faEdit} style={{ color: "white", fontSize: '13px' }} />
                    </Button>
                  }

                  <Button className="btn-edit-quality" style={{ backgroundColor: "red" }} onClick={() => deleteQuality(ctx.id)}>
                    <FontAwesomeIcon icon={faTrash} style={{ color: "white", fontSize: '13px' }} />
                  </Button>
                  <Button
                    className="btn-edit-quality"
                    style={{ backgroundColor: "#42A5F5", visibility: qualityEdited.status && index === qualityEdited.idx ? 'visible' : 'hidden' }}
                    onClick={() => setQualityEdited({ ...qualityEdited, status: false, idx: null })}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: "white", fontSize: '19px' }} />
                  </Button>
                </div>
                <div className="home-card">
                  <Row>
                    <Col className="col-icons-container">
                      <div className="icon-container mx-auto">
                        {qualityEdited.status && index === qualityEdited.idx ?
                          <DropdownButton title="Icons" id="bg-vertical-dropdown-3 " className="m-0" onSelect={(e) => setStateQuality({ ...stateQuality, icon: e })}>
                            {Icons.map((ctx, index) => {
                              return (
                                <Dropdown.Item eventKey={index}>{ctx.iconName}</Dropdown.Item>
                              )
                            })}
                          </DropdownButton> :
                          <FontAwesomeIcon icon={Icons[ctx.icon]} size="2x" style={{ color: "teal" }} />
                        }
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-card-title px-5">
                      {qualityEdited.status && index === qualityEdited.idx ?
                        <Form.Group controlId="exampleForm.ControlTextarea4" >
                          <Form.Control as="textarea" rows={3} value={stateQuality.name} onChange={(e) => { setStateQuality({ ...stateQuality, name: e.target.value }) }}
                          />
                        </Form.Group>
                        :
                        <b>{ctx.name}</b>
                      }
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-card-description">
                      {qualityEdited.status && index === qualityEdited.idx ?
                        <Form.Group controlId="exampleForm.ControlTextarea5">
                          <Form.Control as="textarea" rows={5} value={stateQuality.description} onChange={(e) => { setStateQuality({ ...stateQuality, description: e.target.value }) }} />
                        </Form.Group>

                        :
                        <b>{ctx.description}</b>
                      }
                    </Col>
                  </Row>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div style={{ backgroundColor: "#26A69A", }} className="row-3  text-center text-light ">
        <Container fluid>
          <Row >
            <Col xs={12} md={6} xl={6} className="p-0 m-0" >
              <div className="w-100" style={{}} style={{ minHeight: 500, display: 'flex', alignItems: "center", backgroundImage: `url('${book.url}')`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>

                {/* upload book image */}
                <div className="mx-auto " >
                  <Form.File className="ml-5" id="exampleFormControlFile1" onChange={(e) => { getImage(e) }} />
                  <Button className="m-5" onClick={uploadBookImage}>Upload {progressUploadBookImage} </Button>
                </div>
              </div>

            </Col>
            <Col xs={12} md={6} xl={6} style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }} >

              <div className="w-100">
                <Form.Group controlId="exampleForm.ControlTextarea6">
                  <Form.Control as="textarea" rows={3} placeholder="decription" value={bookText.text1}
                    onChange={(e) => { setBookText({ ...bookText, text1: e.target.value }) }} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea7">
                  <Form.Control as="textarea" rows={3} placeholder="decription" value={bookText.text2} onChange={(e) => { setBookText({ ...bookText, text2: e.target.value }) }} />
                </Form.Group>
                <Button className="m-1" onClick={updatebookText}>Update</Button>
                <p>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="home-card-container  " style={{ background: '#EEEEEE' }}>
        <Row>
          <Col className="text-center">
            <h1><b>Other Services that We can Provide</b></h1>
            <hr style={{ borderWidth: 2, maxWidth: '50%' }}></hr>
          </Col>
        </Row>
        <Row style={{ width: '90%' }} className="mx-auto home-card-description-row4 ">
          <Col lg={3} md={5} className="m-1" style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left ">
                <Col style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: 200,}}>
                  <Form.File className="ml-5" id="exampleFormControlFile1" onChange={(e) => onChangeImageservices(e)} />
                </Col>
              </Row>
              <Form.Group controlId="exampleForm.ControlTextarea4"  >
                <Form.Control className="mt-2" as="textarea" rows={3} onChange={(e) => { setCreateServices({ ...createServices, title: e.target.value }) }}
                />
                <Form.Control className="mt-2" as="textarea" rows={3} onChange={(e) => { setCreateServices({ ...createServices, description: e.target.value }) }}
                />
              </Form.Group>
              <Button className="mb-3 w-100" onClick={addServices}>Add</Button>
            </div>
          </Col>
          <div className="card-services-container">
            <ul>


              {services !== null ?
                Object.values(services).map((ctx, index) => {
                  return (
                    <li key={index} className="card-services">
                      <div style={{ display: 'flex' }}>
                        {servicesEdited.status && index === servicesEdited.idx ?

                          <Button className="btn-edit-quality" style={{ backgroundColor: "teal" }} onClick={servicesHasEdit}>
                            <FontAwesomeIcon icon={faFileUpload} style={{ color: "white", fontSize: '18px' }} />
                          </Button>
                          :
                          <Button className="btn-edit-quality" onClick={() => handleServicesEdit(ctx, index)}>
                            <FontAwesomeIcon icon={faEdit} style={{ color: "white", fontSize: '13px' }} />
                          </Button>
                        }

                        <Button className="btn-edit-quality" style={{ backgroundColor: "red" }} onClick={() => deleteServices(ctx.id)}>
                          <FontAwesomeIcon icon={faTrash} style={{ color: "white", fontSize: '13px' }} />
                        </Button>
                        <Button
                          className="btn-edit-quality"
                          style={{ backgroundColor: "#42A5F5", visibility: servicesEdited.status && index === servicesEdited.idx ? 'visible' : 'hidden' }}
                          onClick={() => setServicesEdited({ ...servicesEdited, status: false, idx: null })}>
                          <FontAwesomeIcon icon={faTimes} style={{ color: "white", fontSize: '19px' }} />
                        </Button>
                      </div>
                      <Container className="bg-light" style={{ height: '100%' }}>
                        <Row>
                          <Col style={{ height: 200, backgroundImage: `url('${ctx.image}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            {servicesEdited.status && index === servicesEdited.idx ?
                              <Form.File className="ml-5 my-5" id="exampleFormControlFile1" onChange={(e) => onEditImageServices(e, ctx.id)} /> : null}

                          </Col>
                        </Row>
                        <Row className="py-2 text-left px-4">
                          {servicesEdited.status && index === servicesEdited.idx ?
                            <Form.Group controlId="exampleForm.ControlTextarea6">
                              <Form.Control as="textarea" rows={3} placeholder="decription" value={stateServices.title}
                                onChange={(e) => { setStateServices({ ...stateServices, title: e.target.value }) }} />
                            </Form.Group> : <h5><b>{ctx.title}</b></h5>}
                        </Row>
                        <Row className="text-left text-secondary p-4 " >
                          {servicesEdited.status && index === servicesEdited.idx ?
                            <Form.Group controlId="exampleForm.ControlTextarea6">
                              <Form.Control as="textarea" rows={3} placeholder="decription" value={stateServices.description}
                                onChange={(e) => { setStateServices({ ...stateServices, description: e.target.value }) }} />
                            </Form.Group> :
                            <p className="">{ctx.description}</p>}

                        </Row>
                      </Container>

                    </li>
                  )
                })
                : null
              }
            </ul>
          </div>

          {/* <Col lg={3} md={5} className="m-1" style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left ">
                <img src="https://images.unsplash.com/photo-1520869562399-e772f042f422?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"
                />
              </Row>
              <Row className="px-4 py-2 ">
                <h5><b>GSM PBX</b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className=""> this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col>
          <Col lg={3} md={5} className="m-1 " style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left home-card-description-row4">
                <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"
                />
              </Row>
              <Row className="py-2 text-left px-4">
                <h5><b>ENTERPRISE MOBILE SOLUTION </b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className="">this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col>
          <Col lg={3} md={5} className="m-1 " style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left home-card-description-row4">
                <img src="https://images.unsplash.com/photo-1591017923291-5d5df5eb7d78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"
                />
              </Row>
              <Row className="py-2 text-left px-4">
                <h5><b>VEHICLE TRACKING</b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className="">this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col>
          <Col lg={3} md={5} className=" m-1 " style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left ">
                <img src="https://images.unsplash.com/photo-1520869562399-e772f042f422?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"
                />
              </Row>
              <Row className="py-2 text-left px-4">
                <h5><b>MOBILE SURVEIL LANCE & FACE RECOGNITION </b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className="">this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col>
          <Col lg={3} md={5} className="m-1" style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left home-card-description-row4">
                <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"
                />
              </Row>
              <Row className="py-2 text-left px-4">
                <h5><b>AUTOMATIC METER READER</b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className="">this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col>
          <Col lg={3} md={5} className="m-1" style={{ backgroundColor: "white" }}>
            <div>
              <Row className="text-left home-card-description-row4">
                <img src="https://images.unsplash.com/photo-1591017923291-5d5df5eb7d78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" style={{ width: '100%', height: 200 }}
                  alt="img"

                />
              </Row>
              <Row className="py-2 text-left px-4 ">
                <h5><b>APLICATION FINANCE  & SERVICE</b></h5>
              </Row>
              <Row className="text-left text-secondary p-4" >
                <p className="">this service allows corporate customers to treat their GSM cellular as part of their corporate landine network</p>
              </Row>
            </div>
          </Col> */}
        </Row>
      </div>
    </div >

  );
}



export default Control;
