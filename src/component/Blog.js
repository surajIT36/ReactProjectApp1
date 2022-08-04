import Card from 'react-bootstrap/Card';

const styleBlog = {
    display: 'flex',
  flexWrap: 'wrap',
    padding: '0',
    margin: '0',
    justifyContent: 'space-between',
}
const flexwrap ={

    margin: '20px'
    
}
const teams = [
    {
        id: 1,
        teamNmae: "Suraj",
        urlImage: "/img1.png",
    },
    {
        id: 2,
        teamNmae: "Prince",
        urlImage: "/img2.png",
    },
    {
        id: 3,
        teamNmae: "mukesh",
        urlImage: "/img3.png",
    },
    {
        id: 4,
        teamNmae: "aditya",
        urlImage: "/img4.png",
    },
    {
        id: 5,
        teamNmae: "ranjan",
        urlImage: "./img5.png",
    },
    {
        id: 1,
        teamNmae: "Suraj",
        urlImage: "/img1.png",
    },
    {
        id: 2,
        teamNmae: "Prince",
        urlImage: "/img2.png",
    },
    {
        id: 3,
        teamNmae: "mukesh",
        urlImage: "/img3.png",
    },
    {
        id: 4,
        teamNmae: "aditya",
        urlImage: "/img4.png",
    },
    {
        id: 5,
        teamNmae: "ranjan",
        urlImage: "./img5.png",
    },
    {
        id: 2,
        teamNmae: "Prince",
        urlImage: "/img2.png",
    },
    {
        id: 3,
        teamNmae: "mukesh",
        urlImage: "/img3.png",
    },
    {
        id: 4,
        teamNmae: "aditya",
        urlImage: "/img4.png",
    },
    {
        id: 5,
        teamNmae: "ranjan",
        urlImage: "./img5.png",
    },
    

];

export default function Blog() {
    return (
        <>
            <div style={styleBlog}>
            {teams.map(({ teamNmae, urlImage }) => {
                <div style={flexwrap}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" key={teams.id} src={urlImage} />
                    <Card.Body>
                        <Card.Title>{teamNmae}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                
            })}
            </div>

        </>
    )
}
