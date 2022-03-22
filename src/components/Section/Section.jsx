import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const Section = () => {
  return (
    <div>
      <div className="container text-center text-light">
        <h1 className="my-4">About React</h1>
        <h3 className="my-4 fw-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          provident cumque, nisi excepturi adipisci minus unde rerum quasi
          officia debitis accusantium. Incidunt soluta suscipit, beatae a iste
          rerum ut accusantium veritatis voluptatum animi facilis. Sunt,
          repellat. Ipsum expedita in eum vel sapiente id facilis optio. Iusto
          quos adipisci reiciendis soluta veniam officiis eum possimus odio
          harum ut obcaecati dolores quam exercitationem, est incidunt! Rem,
          distinctio! Molestiae distinctio ratione, adipisci doloremque eligendi
          saepe optio aliquam delectus quam possimus vitae cum fugit non
          assumenda, in expedita, reiciendis facere? Adipisci cum velit
          laboriosam, incidunt quam nihil. Optio rerum voluptatum maxime
          recusandae, officiis doloribus.
        </p>
        <h2 className="fw-bold">Mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          provident cumque, nisi excepturi adipisci minus unde rerum quasi
          officia debitis accusantium. Incidunt soluta suscipit, beatae a iste
          rerum ut accusantium veritatis voluptatum animi facilis. Sunt,
          repellat. Ipsum expedita in eum vel sapiente id facilis optio. Iusto
          quos adipisci reiciendis soluta veniam officiis eum possimus odio
          harum ut obcaecati dolores quam exercitationem, est incidunt! Rem,
          distinctio! Molestiae distinctio ratione, adipisci doloremque eligendi
          saepe optio aliquam delectus quam possimus vitae cum fugit non
          assumenda, in expedita, reiciendis facere? Adipisci cum velit
          laboriosam, incidunt quam nihil. Optio rerum voluptatum maxime
          recusandae, officiis doloribus.
        </p>
        <h2 className="fw-bold">Vision</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          provident cumque, nisi excepturi adipisci minus unde rerum quasi
          officia debitis accusantium. Incidunt soluta suscipit, beatae a iste
          rerum ut accusantium veritatis voluptatum animi facilis. Sunt,
          repellat. Ipsum expedita in eum vel sapiente id facilis optio. Iusto
          quos adipisci reiciendis soluta veniam officiis eum possimus odio
          harum ut obcaecati dolores quam exercitationem, est incidunt! Rem,
          distinctio! Molestiae distinctio ratione, adipisci doloremque eligendi
          saepe optio aliquam delectus quam possimus vitae cum fugit non
          assumenda, in expedita, reiciendis facere? Adipisci cum velit
          laboriosam, incidunt quam nihil. Optio rerum voluptatum maxime
          recusandae, officiis doloribus.
        </p>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card className=" m-3">
                <Card.Img
                  className="w-5 h-5"
                  variant="top"
                  src="https://i.pinimg.com/564x/18/c1/75/18c175a219225fcc3f1aef05c92a9bf0.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Section;
