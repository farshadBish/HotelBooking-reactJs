
import { useEffect, useState } from "react";
import { Col, Container, Form, Navbar, Row, Button, Badge } from "react-bootstrap/esm";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";
import "../styles/RegisterPage.css";
import { useFormik } from "formik";
<link
  rel="stylesheet"
  type="text/css"
  href="//fonts.googleapis.com/css?family=Open+Sans"
/>;



const LoginRegister = () => {

  // formik
const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Email Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.username) {
    errors.username = 'Username Required'
  } else if (values.username.length < 4) {
    errors.username = 'Username must be more than 4 characters'
  } else if (12 < values.username.length){
    errors.username = 'Username must be less than 12 characters'
  }
  
  if (!values.password) {
    errors.password = 'password Required'
  } else if (values.password.length < 4) {
    errors.password = 'password must be more than 4 characters'
  } else if (12 < values.password.length){
    errors.password = 'password must be less than 12 characters'
  }

  if (!values.address) {
    errors.address = 'address Required'
  } else if (values.address.length < 10) {
    errors.address = 'address must be more than 10 characters'
  } else if (200 < values.address.length){
    errors.address = 'address must be less than 200 characters'
  }

  return errors
}

const formik = useFormik({
  initialValues: {
    email: '',
    username:'',
    password:'',
    address:'',
  },
  validate,
  onSubmit: async (values) => {
    try {
      // if(username !== '' && password !== '' && email !== '' && address !== ''){
      let response = await fetch('https://impalaapi.herokuapp.com/users', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(values)
      })
        if(response.ok){
          let data = await response.json()
          console.log(data , "voilaaa the data");
          setHaveAccount(true)
        } else {
          console.log("error with response");
        }
      // }
      // else{
        // setIsFilled(false)
      // }
    } catch (error) {
      console.log(error , "eerrrror bro");
      setHaveAccount(false)
    }
  },
})

  const [isLoading,setIsLoading] = useState(false)
  // for changing between sign up and log in
  const [haveAccount, setHaveAccount] = useState(false);

  // for badge
  const [isFilled, setIsFilled] = useState(true)

  // for wrong Username or password
  const [isCorrect , setIsCorrect] = useState(true)

  // for posting
  const [username , setusername] = useState('');
  const [email , setemail] = useState('');
  const [password , setpassword] = useState('');
  const [address,setAddress] = useState('')

  // const registerPost = async (e) => {
  //   e.preventDefault();
  //   const userInfos = {username , email , password , address}
  //   console.log(userInfos);
  //   try {
  //     if(username !== '' && password !== '' && email !== '' && address !== ''){
  //     let response = await fetch('https://impalaapi.herokuapp.com/users', {
  //       method: "POST",
  //       headers: {
  //           "Content-Type" : "application/json",
  //       },
  //       body : JSON.stringify(userInfos)
  //     })
  //       if(response.ok){
  //         let data = await response.json()
  //         console.log(data , "voilaaa the data");
  //         setHaveAccount(true)
  //       } else {
  //         console.log("error with response");
  //       }
  //     }
  //     else{
  //       setIsFilled(false)
  //     }
  //   } catch (error) {
  //     console.log(error , "eerrrror bro");
  //     setHaveAccount(false)
  //   }
  // }

  useEffect(()=>{
    setTimeout(()=>{
      setIsCorrect(true)
    },3200)
  },[isCorrect])


  const navigate = useNavigate()


  const loginUser = async (e) =>{
    e.preventDefault();
    const userInfos = {email , password};
    console.log(userInfos);
    try {
      if(password !== '' && email !== ''){
        setIsFilled(true)
      let response = await fetch(`https://impalaapi.herokuapp.com/users/login`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(userInfos)
      })
      if(response.ok){
        let data = await response.json()
        console.log(data);
        window.localStorage.setItem("SetToken",data.accessToken)
        setIsLoading(true)
        setTimeout(()=>{
          setIsLoading(false)
          navigate('/')
        },3000) 
      }else{
        console.log("response error");
        setIsCorrect(false)
      }
    }else{
      setIsFilled(false)
    }
    } catch (error) {
      console.log(error,"error buddy");
      
    }
  }

  useEffect(() => {
      console.log(window.localStorage.getItem("SetToken"),"token stored!");
  }, [isLoading]);


  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }


  return (
    <Container fluid style={{ backgroundColor: "#724BB1",minHeight:"100vh" }} className="pb-5">
      {haveAccount === false ? (
        <Row>
          <Col xs={12} className="pr-0 pl-0">
            <Navbar
              className="pb-3 pt-3"
              style={{ backgroundColor: "whiteSmoke" }}
             
            >
              <Col xs={2} className="text-left">
              <img
                src="https://media.discordapp.net/attachments/713873647550464000/991280660314591303/victorops-logo-clr.png"
                alt=""
                height={40}
                className="theLogo"
              />
              </Col>
              <Col xs={8} className="text-center">
                <h2>
                  Create your{" "}
                  <span style={{ color: "#FBB040" }}>
                    <b>VictorOps</b>
                  </span>{" "}
                  account for free!
                </h2>
              </Col>
            </Navbar>
          </Col>
          <Col className="offset-0" style={{ marginTop: "10rem" }} xs={12}>
            <div
              className=" pl-2 pr-2 pt-4 p-md-5 shadow-lg mx-auto signupContainer"
            >
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col lg={6} xs={12} className="">
                    <Form.Group  className="">
                      <Form.Label>
                        <b>Email address</b>
                      </Form.Label>
                      <Form.Control
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Example : jack@gmail.com"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        style={{width:"100%"}}
                        className="ml-auto mr-auto"
                      />
                      <Form.Text className="text-muted">
                      {formik.errors.email ?<Col xs={12}> <Badge className="p-3 mt-4" variant="danger">{formik.touched.email && formik.errors.email}</Badge></Col> : null}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col lg={3} xs={12} className="pr-lg-0">
                    <Form.Group className="">
                      <Form.Label>
                        <b>User Name</b>
                      </Form.Label>
                      <Form.Control
                       id="username"
                       name="username"
                       type="text"
                       placeholder="Example : jack" 
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.username}
                       style={{width:"100%"}}
                       className="ml-auto mr-auto"/>
                       <Form.Text className="text-muted">
                      {formik.errors.username ?<Col xs={12}> <Badge className="p-3 mt-4" variant="danger">{formik.touched.username && formik.errors.username}</Badge></Col> : null}
                      </Form.Text>
                       
                    </Form.Group>
                  </Col>
                  <Col lg={3} xs={12} className="">
                    <Form.Group>
                      <Form.Label>
                        <b>Password</b>
                      </Form.Label>
                      <Form.Control 
                       id="password"
                       name="password"
                       type="password"
                       placeholder="Password" 
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.password}
                       style={{width:"100%"}}
                       className="ml-auto mr-auto"/>
                       <Form.Text className="text-muted">
                      {formik.errors.password ?<Col xs={12}> <Badge className="p-3 mt-4" variant="danger">{formik.touched.password && formik.errors.password}</Badge></Col> : null}
                      </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col lg={6} xs={12}>
                    <Form.Group className="">
                      <Form.Label>
                        <b>Address</b>
                      </Form.Label>
                      <Form.Control
                        id="address"
                        name="address"
                        type="text"
                        placeholder="rue de la caserne n20"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        style={{width:"100%"}}  
                        className="ml-auto mr-auto mb-3"
                      />
                      <Form.Text className="text-muted">
                      {formik.errors.address ?<Col xs={12}> <Badge className="p-3 mt-4" variant="danger">{formik.touched.address && formik.errors.address}</Badge></Col> : null}
                      </Form.Text>
                    </Form.Group>
                    </Col> 
                    <Col xs={12}>
                    <Form.Group>
                      <Form.Check
                        type="checkbox"
                        label="I agree to the terms and conditions"
                      />
                    </Form.Group>
                    </Col>
                    <Col xs={12}>
                    <Button variant="primary" type="submit" >
                      Sign up
                    </Button>
                    </Col>
                    <Col xs={12}>
                    <p
                      onClick={() => setHaveAccount(true)}
                      style={{ cursor: "pointer" }}
                      className="text-muted mt-3"
                    >
                      <b> Already have an account ? log in here!</b>
                    </p>
                    </Col>
                  <Col xs={12}>
                    <Row className="mt-5">
                      <Col xs={12} lg={5} className="text-lg-right">
                        <span>--------------------</span>
                      </Col>
                      <Col xs={12} lg={2}>
                        <div className="">OR</div>
                      </Col>
                      <Col xs={12} lg={5} className="text-lg-left">
                        <span>--------------------</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <div className="mt-4 d-flex align-items-center justify-content-center mb-md-0 mb-3">
                      <div
                        style={{
                          border: "4px #1A8BF6 solid",
                          cursor: "pointer",
                        }}
                        className="text-center pt-3 pb-3 pl-3 pr-3"
                      >
                        <FaGoogle style={{ color: "#46A1F8" }} />
                      </div>
                      <div
                        className="text-white p-3 shadow-lg"
                        style={{
                          backgroundColor: "#1A8BF6",
                          border: "4px #1A8BF6 solid",
                          cursor: "pointer",
                        }}
                      >
                        Sign in with <b>google</b>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      ) : isLoading === true ? (
        <div id="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div> ): (
        
        <Row>
        <Col xs={12} className="pr-0 pl-0">
          <Navbar
            className="pb-3 pt-3"
            style={{ backgroundColor: "whiteSmoke" }}
          >
            <Col xs={2} className="text-left">
            <img
                src="https://media.discordapp.net/attachments/713873647550464000/991280660314591303/victorops-logo-clr.png"
                alt=""
                height={40}
                className="theLogo"
              />
            </Col>
            <Col xs={8} className="text-center">
              <h2>
                Login to your{" "}
                <span style={{ color: "#FBB040" }}>
                  <b>VictorOps</b>
                </span>{" "}
                account
              </h2>
            </Col>
          </Navbar>
        </Col>
        <Col className="offset-0" style={{ marginTop: "10rem" }} xs={12}>
          <div
            className=" pl-2 pr-2 pt-4 p-md-5 shadow-lg loginContainer mx-auto"
          >
            <Form>
              <Row>
                <Col md={12} xs={12} className="">
                  <Form.Group className="">
                    <Form.Label>
                      <b>Email address</b>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Example : jack@gmail.com"
                      value={email}
                      onChange={(e)=> setemail(e.target.value)}
                      style={{width:"90%"}}
                      className="ml-auto mr-auto"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col md={12} xs={12} className="m-auto">
                  <Form.Group>
                    <Form.Label>
                      <b>Password</b>
                    </Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e)=> setpassword(e.target.value)}
                    style={{width:"90%"}}
                    className="ml-auto mr-auto"/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      label="Save email & password"
                    />
                  </Form.Group>
                    <Button variant="success" type="submit" onClick={loginUser}>
                  Log In
                  </Button>
                  {isFilled === false ?                     <div>
                    <Badge className="p-3 mt-4" variant="danger">Please fill all the requirements!</Badge>{' '}
                    </div> : <></> }
                    {isCorrect === false ?
                            <div>
                            <Badge className="p-3 mt-4" variant="danger">Wrong email or password</Badge>{' '}
                            </div> : <></>}
                  <p
                    onClick={() => setHaveAccount(false)}
                    style={{ cursor: "pointer" }}
                    className="text-muted mt-3"
                  >
                    <b> Don't have an account ? make one here!</b>
                  </p>
                </Col>
                <Col xs={12}>
                  <Row className="mt-5">
                    <Col xs={12} lg={5} className="text-lg-right">
                      <span>--------------------</span>
                    </Col>
                    <Col xs={12} lg={2}>
                      <div className="">OR</div>
                    </Col>
                    <Col xs={12} lg={5} className="text-lg-left">
                      <span>--------------------</span>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <div className="mt-4 d-flex align-items-center justify-content-center mb-md-0 mb-3">
                    <div
                      style={{
                        border: "4px #1A8BF6 solid",
                        cursor: "pointer",
                      }}
                      className="text-center pt-3 pb-3 pl-3 pr-3"
                    >
                      <FaGoogle style={{ color: "#46A1F8" }} />
                    </div>
                    <div
                      className="text-white p-3 shadow-lg"
                      style={{
                        backgroundColor: "#1A8BF6",
                        border: "4px #1A8BF6 solid",
                        cursor: "pointer",
                      }}
                    >
                      log in with <b>google</b>
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
      )}
    </Container>
  );
};

export default LoginRegister;
