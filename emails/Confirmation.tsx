import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface LinearLoginCodeEmailProps {
    validationCode?: string;
  }
  
  export const LinearLoginCodeEmail = ({
    validationCode,
  }: LinearLoginCodeEmailProps) => (
    <Html>
      <Head />
      <Preview>Hjälp är påväg.</Preview>
      <Body style={main}>   
        <Container style={container}>
        <Text style={paragraph}>
            Tant Rut Alltjänst
          </Text>
        <Section>
          <Img    style={headerImage} height={240} width={200} src={'https://tantrut.netlify.app/hero.jpg'} />
        </Section>
          <Heading style={heading}>Tack för din förfrågan.</Heading>
          <Text style={paragraph}>
            Vi har fått din förfrågan och snart kommer du att få kontakt och en offert av oss. Besök vår hemsida om du vill ha mer information.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href="https://tantrut.netlify.app/">
              Besök vår hemsida
            </Button>
          </Section>
          <Hr style={hr} />
          <Link href="https://tantrut.netlify.app/" style={reportLink}>
            Tant Rut 
          </Link>
        </Container>
      </Body>
    </Html>
  );
  
  LinearLoginCodeEmail.PreviewProps = {
    validationCode: "tt226-5398x",
  } as LinearLoginCodeEmailProps;
  
  export default LinearLoginCodeEmail;
  
  const logo = {
    borderRadius: 21,
    width: 82,
    height: 82,
  };
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "560px",
  };
  
  const heading = {
    fontSize: "24px",
    letterSpacing: "-0.5px",
    lineHeight: "1.3",
    fontWeight: "400",
    color: "#484848",
    padding: "17px 0 0",
  };
  
  const paragraph = {
    margin: "0 0 15px",
    fontSize: "15px",
    lineHeight: "1.4",
    color: "#3c4149",
  };
  
  const buttonContainer = {
    padding: "27px 0 27px",
  };
  
  const button = {
    backgroundColor: "#32de84",
    borderRadius: "3px",
    fontWeight: "600",
    color: "black",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "11px 23px",
  };
  
  const reportLink = {
    fontSize: "14px",
    color: "#b4becc",
  };
  
  const hr = {
    borderColor: "#dfe1e4",
    margin: "42px 0 26px",
  };
  
  const code = {
    fontFamily: "monospace",
    fontWeight: "700",
    padding: "1px 4px",
    backgroundColor: "#dfe1e4",
    letterSpacing: "-0.3px",
    fontSize: "21px",
    borderRadius: "4px",
    color: "#3c4149",
  };
  const headerImage = {
    width: "100%",
  };
  
  