import React from 'react'
import {
  useQuery,
  gql
} from "@apollo/client"
import {Container, Card, CardDeck} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Rocket() {
  const { loading, error, data } = useQuery(gql`
    query {
      launchesPast (limit: 20){
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        links {
          video_link
          flickr_images
        }
        rocket {
          rocket_name
        }
      }
    }
  `);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {JSON.stringify(error)}</p>;
  return (
    <Container>
      <CardDeck className="row" >
      {data.launchesPast.length>0 && data.launchesPast.map((launchResult, index) => (
        launchResult.links.flickr_images.length > 0 && ( 
        <Card className="col-xs-12 col-sm-6 col-md-4 card-tall card-wide" key={index}>
          <Card.Img className="card-img-top image" src={launchResult.links.flickr_images[0]} alt="some image" />
          <Card.Body style={{margin: "0% 0% 0% 3%", padding: "6% 0%"}}>
            <Card.Title>
              <Card.Title>{launchResult.mission_name}</Card.Title>
            </Card.Title>
            <Card.Text>
              <li>{launchResult.launch_site.site_name_long}</li>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <div>{launchResult.launch_date_local}</div>
            <a href={launchResult.links.video_link}>
              <FontAwesomeIcon size="2x" color="#FF0000" icon={faYoutube}/>
            </a>
          </Card.Footer>
        </Card>
        )
      ))}
      </CardDeck>
    </Container> 
  )
}
