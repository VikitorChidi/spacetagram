import * as React from 'react';
import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { IPlanetary } from '../../utils/type';
import { getPlanetaryPosts } from './planetary.api';


interface IPlanetaryProps {
}

const Planetary: React.FC<IPlanetaryProps> = ({ }) => {
    const [data, setData] = useState<IPlanetary[] | null>(null)

    useEffect(() => {
        const fetchPlanetartList = async () => {
            const planetary = await getPlanetaryPosts();
            // console.log(planetary)
            setData(planetary)
        }
        fetchPlanetartList();
    }, [])


    return (
        <div>
            {data && data.map(info => (
                <Container>
                    <Card style={{ width: '18rem' }} key={info.title}>
                        <Card.Img variant='top' src={info.url}></Card.Img>
                        <Card.Body>
                            <Card.Title>{info.title} - {info.date}</Card.Title>
                            <Card.Text>{info.explanation}</Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            )
            )}
        </div>
    );
}

export default Planetary;
