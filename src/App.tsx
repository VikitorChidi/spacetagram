import { Col, Container, Row } from "react-bootstrap";
import Planetary from "./components/Planetary/planetary";

const App = () => {

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Planetary />
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default App;