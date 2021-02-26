/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, Container, Row ,Label,Input,FormGroup,FormText} from "reactstrap";

// core components
import Header from "../../components/Headers/Header";



const Maps = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
            <FormGroup>
        <Label for="exampleFile">فایل گزارش کارآموزی / پروژه</Label>
        <Input style={{marginLeft:"40%"}} type="file" name="file" id="exampleFile" />
        <FormText color="muted">
        اینجا گزارش کارآموزی / پروژه ی خود را آپلود کنید
        </FormText>
      </FormGroup>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Maps;
