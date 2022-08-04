import Card from "react-bootstrap/Card";


const styleBlog = {
    display: "flex",
    flexWrap: "wrap",
    padding: "0",
    margin: "0",
    justifyContent: "space-evenly",
  };
  
  
const flexwrap = {
    margin: "20px",
  };
const ApiCard = (p) =>{
    return(
        <>
        <div style={styleBlog}>
        <div style={flexwrap}>
            <Card style={{ width: "16rem",height:"25rem" ,backgroundColor: "#0e0808ab",color: "#030202" }}>
              <Card.Img variant="top" key={p.id} />
              <Card.Body>
                <Card.Title><h2>  {p.ti}  {p._id} </h2></Card.Title>
                <Card.Text>
                {p.bo}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>   
        </div>
         <div>Hii Suraj</div>
        </>
    )
} 

export default ApiCard;