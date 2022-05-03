import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal/Fade";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const Hero2 = () => {
  return (
    <Wrapper className="section-center">
      <Fade bottom>
        {" "}
        <h4>Những câu hỏi thường gặp</h4>
      </Fade>

      <Fade bottom>
        <div className="content-faq">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className="question">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className="question">
                Lorem ipsum dolor sit adipiscing sit amet elit?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <p className="question">
                Lorem ipsum dolor sitsit ametsit amet adipiscing elit?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <p className="question">
                Lorem ipsusit ametm dolor sit adipiscing elit?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <p className="question">
                Lorem isit ametsit ametpsum dolor sit adipiscing elit?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </Fade>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 70%;
  place-items: center;

  .content-faq {
    padding: 2rem;
  }

  h4 {
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-black);
    font-size: 1rem;
  }
  .question {
    font-weight: bold;
  }
  .question:hover {
    color: var(--clr-primary-5);
    
  }
  .answer {
  }
  @media (min-width: 992px) {
    p {
      font-size: 1.25rem;
    }
  }
`;

export default Hero2
