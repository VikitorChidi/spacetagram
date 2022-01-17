import * as React from 'react';
import { useEffect, useState } from 'react';
import { Accordion, Card, Col, Container, Row, Spinner, Stack } from 'react-bootstrap';
import { IPlanetary } from '../../utils/type';
import LikeBtn from '../like';
import { getPlanetaryPosts } from './planetary.api';


interface IPlanetaryProps {
}

const Planetary: React.FC<IPlanetaryProps> = () => {
    const [data, setData] = useState<IPlanetary | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const planetary = await getPlanetaryPosts();
            // console.log(planetary)
            setData(planetary)
        }
        fetchData();
    }, [])

    console.log("data ::", data)
    return (
        <div className='row justify-content-center'>
            {
                data == null ? (
                    <Container className='fluid align-items-center'>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Spinner animation={'border'}></Spinner>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <Container className='fluid align-items-center'>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Stack gap={1}>
                                    <Card className='mt-5 mb-5'
                                        style={{ width: '25rem' }}>
                                        <Card.Header>
                                            <div className='ml-2'>
                                                <h4><b>Spacetagram</b></h4>
                                                <p>Brought to you by NASA's API</p>
                                            </div>
                                        </Card.Header>
                                        <Card.Img
                                            variant='top'
                                            src={data.url}
                                            className='round' />
                                        <Card.Body style={{ backgroundColor: 'Gainsboro' }}>
                                            <Card.Title>
                                                <h5>{data.copyright}</h5>
                                                <p>{data.title}</p>
                                                <p>{data.date}</p>
                                            </Card.Title>
                                            <LikeBtn />
                                            <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Tap To Read Article</Accordion.Header>
                                                    <Accordion.Body>
                                                        {data.explanation}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Card.Body>
                                    </Card>
                                </Stack>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        </div>
    );
}

export default Planetary;
