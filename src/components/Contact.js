import Fade from 'react-bootstrap/Fade'
import Alert from 'react-bootstrap/Alert';

export default function Contact () {
    return(
        <div className="ContactPage">
            <h1>Graduating December 2022!</h1>
            <Fade mountOnEnter>
                <h2>Set up an interview with me for more information.</h2>
            </Fade>
            <h3>Check out the projects I have completed here!</h3>
            <div>
                 <Alert variant="success">This is a success alert—check it out!</Alert>
            </div>
        </div>
    )

}