import { format } from "currency-formatter";
import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

import "./App.css";
import PaymentCmp from "./PaymentCmp";

const App = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [prevAmount, setPrevAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const modalCtrl = (title, amount) => {
    setShow(!show);
    setTitle(title);
    setAmount(amount);
  };
  const reqObj = {
    amount,
    title,
    quantity,
    name,
    email,
    number,
  };
  return (
    <div>
      <div id="Welcome">
        <nav class="navbar navbar-expand-lg navbar fixed-top  navbar-light bg-light">
          <a class="navbar-brand" href="#Welcome">
            <img
              src="assets/images/logo.png"
              width="50"
              height="50"
              class="d-inline-block"
              alt=""
            />{" "}
            CSC CANTEEN
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#Welcome">
                  Welcome
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Restaurant">
                  Restaurant
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Menu">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Reservation">
                  Reservation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Socials">
                  Socials
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 img-fluid img-slider"
                src="assets/images/slider1.jpg"
                alt="First slide"
              />
              <div class="carousel-caption">
                <h2>An Automated Online Food Ordering System Created by:</h2>
                <h6>
                  Name: Orieke Obughikem Daleth
                  <br />
                  Department: Computer Science
                  <br />
                  Mat No: U2017/5570093
                </h6>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 img-fluid img-slider"
                src="assets/images/slider2.jpg"
                alt="Second slide"
              />
              <div class="carousel-caption">
                <h2>Fresh food, fresh ideas</h2>
                <p>
                  Where the chefs and gardeners work together to create a unique
                  dining experience
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 img-fluid img-slider"
                src="assets/images/slider3.jpg"
                alt="Third slide"
              />
              <div class="carousel-caption">
                <h2>Good food, Good life.</h2>
                <p>Making the world a better place one plate at a time.</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="container">
        <div class="row" id="Restaurant">
          <div class="col navMenu">
            <h2 class="text-center">~ Happy To Have You Here! ~</h2>
          </div>
        </div>
        <div class="row bg-light">
          <div class="col-md-6">
            <h3>Location</h3>
            <p>
              Address: <b>CSC CANTEEN</b> Port Harcourt, East/West Road, PMB
              5323 Choba, Rivers State, Nigeria.
            </p>
            <h5>A Unique Experience</h5>
            <p>
              Our ingredients are selected for their freshness and the work
              ethic of our employees. We place eclectic over specific and mix
              ingredients with a hunger for new experiences. Expect of us to be
              different and look forward to be surprised. In return we will
              serve you a new culture where there is no needed timing for
              comfort dining, service is caring and indulging means sharing.
            </p>
          </div>
          <div class="col-md-6" data-aos="fade-up">
            <img class="img-fluid" src="assets/images/uniport.jpeg" />
          </div>
        </div>
        <div class="row bg-light">
          <br />
        </div>
        <div class="row bg-light">
          <div class="col-md-6 order-md-1 order-2" data-aos="fade-up">
            <img class="img-fluid " src="assets/images/cuisine.jpg" />
          </div>
          <div class="col-md-6 order-md-12 order-1">
            <h3>Open tables and free seating</h3>
            <p>
              Out of respect for your daily needs and of for love your
              spontaneous cravings, Csc Canteen steers free of conventional
              reservations, so you can find comfort in whichever seat you
              prefer.
            </p>
            <h5>Booking</h5>
            <p>
              Regardless of date, time and crowd, on any day and in every way.
              We are happy to host the party of two and we don't mind if you
              like to party. If however the need for space regards a party of 8
              or more, we have enough tables able for booking.
            </p>
          </div>
        </div>

        <div class="row" id="Menu">
          <div class="col navMenu">
            <h2 class="text-center">~ FOOD MENU ~</h2>
          </div>
        </div>
        <div class="row bg-light">
          <div class="col-md-4" data-aos="slide-up">
            <div
              class="card view zoom"
              onClick={() => {
                modalCtrl("Jollof Rice & Chicken", 2500);
                setPrevAmount(2500);
              }}
            >
              <img
                class="card-img-top img-fluid "
                src="assets/images/jollof-rice.jpg"
              />
              <div class="card-body">
                <div className="title-row">
                  <h5 class="card-title">~ Jollof Rice & Chicken ~</h5>
                  <h5>₦2,500</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">A plate of jollof rice</li>
                  <li class="list-group-item">1 full sized fried chicken</li>
                  <li class="list-group-item">A bottle of water</li>
                  <li class="list-group-item">A bottle of soft drink</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div
              class="card"
              onClick={() => {
                modalCtrl("Beef Kebabs", 3000);
                setPrevAmount(3000);
              }}
            >
              <img
                class="card-img-top img-fluid "
                src="assets/images/beef-kebab.jpg"
              />
              <div class="card-body">
                <div className="title-row">
                  <h5 class="card-title">~ Beef Kebabs ~</h5>
                  <h5>₦3,000</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">2 rows of Beef Kebabs</li>
                  <li class="list-group-item">One plate of beef sauce</li>
                  <li class="list-group-item">A bottle of water</li>
                  <li class="list-group-item">A bottle of soft drink</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div
              class="card"
              onClick={() => {
                modalCtrl("Moi Moi & Plantain", 2000);
                setPrevAmount(2000);
              }}
            >
              <img
                class="card-img-top img-fluid"
                src="assets/images/moi-moi.jpg"
              />
              <div class="card-body">
                <div className="title-row">
                  <h5 class="card-title">~ Moi Moi & Plantain ~</h5>
                  <h5>₦2,000</h5>
                </div>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">A plate of moi moi</li>
                  <li class="list-group-item">6 pieces of fried plantain</li>
                  <li class="list-group-item">A bottle of water</li>
                  <li class="list-group-item">A bottle of soft drink</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div
              class="card"
              onClick={() => {
                modalCtrl("Garri & Soup", 2500);
                setPrevAmount(2500);
              }}
            >
              <img
                class="card-img-top img-fluid"
                src="assets/images/bitter-leaf-soup.jpg"
              />
              <div class="card-body">
                <div className="title-row">
                  <h5 class="card-title">~ Garri & Soup ~</h5>
                  <h5>₦2,500</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">A plate of soup</li>
                  <li class="list-group-item">Two wraps of garri</li>
                  <li class="list-group-item">A bottle of water</li>
                  <li class="list-group-item">A bottle of soft drink</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div
              class="card"
              onClick={() => {
                modalCtrl("Potato Mash", 1500);
                setPrevAmount(1500);
              }}
            >
              <img
                class="card-img-top img-fluid"
                src="assets/images/potato-mash.jpg"
              />
              <div class="card-body">
                <div className="title-row">
                  <h5 class="card-title">~ Potato Mash ~</h5>
                  <h5>₦1,500</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">A bowl of Potato Mash</li>
                  <li class="list-group-item">A bottle of water</li>
                  <li class="list-group-item">A bottle of soft drink</li>
                  <li class="list-group-item">One chocolate bar (Bonus)</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div
              class="card"
              onClick={() => {
                modalCtrl("Porridge Yam", 2000);
                setPrevAmount(2000);
              }}
            >
              <img
                class="card-img-top img-fluid"
                src="assets/images/porridge-yam.jpg"
              />
              <div class="card-body">
                <div className="title-row">
                  <h5 class="card-title">~ Porridge Yam ~</h5>
                  <h5>₦2,000</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">A plate of porridge yam</li>
                  <li class="list-group-item">2 pieces of smoked fish</li>
                  <li class="list-group-item">A bottle of water</li>
                  <li class="list-group-item">A bottle of soft drink</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row" id="Reservation">
          <div class="col navMenu">
            <h2 class="text-center">~ Reservation ~</h2>
          </div>
        </div>
        <div class="row">
          <div class=" col-lg-12 reserve-container" data-aos="fade-up">
            <img
              class="img-fluid image-reserve"
              src="assets/images/reserve.jpg"
            />
            <div class="reserve-text col-lg-12 ">
              <h1 class="text-center">Timetables</h1>
              <div class="row">
                <div class="col-6">
                  <h2 class="text-center">Lunch</h2>
                  <h5 class="text-center">12:00 - 15:00</h5>
                </div>
                <div class="col-6">
                  <h2 class="text-center">Dinner</h2>
                  <h5 class="text-center">19:30 - 23:30</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row bg-light">
          <div class="col">
            <form>
              <div class="form-row">
                <div class="form-group col-6">
                  <h3>Reserve</h3>
                  <label for="inputDate"> Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="inputDate"
                    placeholder="Data gg/mm/aaaa"
                  />
                </div>
                <div class="form-group col-6">
                  <h3>Details</h3>
                  <label for="inputName"> Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group col-6">
                  <label for="inputTime"> Timetables</label>
                  <input
                    type="time"
                    class="form-control"
                    id="inputTime"
                    placeholder="Timetables"
                  />
                </div>
                <div class="form-group col-6">
                  <label for="inputEmail"> Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group col-6">
                  <label for="inputNumber"> Number of Guests</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputNumber"
                    placeholder="Number of Guests"
                  />
                </div>
                <div class="form-group col-6">
                  <label for="inputCel"> Phone</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="inputCel"
                    placeholder="Phone"
                  />
                </div>
                <div class="form-group col-12">
                  <label for="inputComment"> Further requests</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    id="inputComment"
                    placeholder="Further requests"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-md-offset-4">
                  <button type="submit" class="btn btn-secondary btn-block">
                    Reserve
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <div class="row" id="OurLocation">
            <div class="col navMenu">
              <h2 class="text-center">~ Our Location ~</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <h3>Address:</h3>
              <p>Test street no 78963 </p>
              <h3>Email:</h3>
              <p>mail@example.com</p>
            </div>
            <div class="col-md-3">
              <h3>Address:</h3>
              <p>Test street no 78963 </p>
              <h3>Email:</h3>
              <p>mail@example.com</p>
            </div>
            <div class="col-md-3">
              <h3>Address:</h3>
              <p>Test street no 78963 </p>
              <h3>Email:</h3>
              <p>mail@example.com</p>
            </div>
            <div class="col-md-3">
              <h3>Address:</h3>
              <p>Test street no 78963 </p>
              <h3>Email:</h3>
              <p>mail@example.com</p>
            </div>
          </div> */}

        <div class="row footer bg-light" id="Socials">
          <div class="col">
            <p class="text-center">
              <span style={{ marginRight: "15px" }}>Follow us:</span>
              <a class="social-icon" href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a class="social-icon" href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </p>
          </div>
          <div class="col">
            <p class="text-center">Copyright &copy; 2020</p>
          </div>
          <div class="col">
            <p class="text-center">
              Created by:{" "}
              <p>
                Name: Orieke Obughikem Daleth
                <br />
                Department: Computer Science
                <br />
                Mat No: U2017/5570093
              </p>
            </p>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <span>Order Form</span>
            <span>{"  "}</span>
            <span>({title})</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="form-row">
              <div>
                <Form.Group className="mb-3" controlId="order-type">
                  <Form.Select
                    aria-label="orderType"
                    onChange={(e) => {
                      if (e.target.value === "delivery") {
                        setAmount(amount + 1000);
                        setPrevAmount(amount);
                      } else {
                        setAmount(prevAmount);
                      }
                    }}
                    defaultValue="delivery"
                  >
                    <option value="pick up">Pick up</option>
                    <option value="delivery">Delivery</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    Delivery incurs an extra fee of ₦1,000.00
                  </Form.Text>
                </Form.Group>
              </div>
              <div>
                <Form.Group className="mb-3" controlId="quantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Quantity"
                    min={1}
                    defaultValue={1}
                    onChange={(e) => {
                      setAmount(parseInt(e.target.value) * prevAmount);
                      setQuantity(e.target.value);
                    }}
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3" controlId="full-name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="quantity">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                isValid
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="quantity">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </Form.Group>
            <div className="form-row">
              <PaymentCmp reqObj={reqObj} disabled={name && email && number} />
              <div>
                <h4>₦{format(amount, "NG")}</h4>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default App;
