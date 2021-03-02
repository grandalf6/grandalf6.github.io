import Flexbox from "../components/Flexbox";
import Typography from "../components/Typography";
import cms from "../assets/cms";
import Box from "../components/Box";
import Link from "../components/Link";
import styled from "styled-components/macro";

const Contact = () => {
  return (
    <Flexbox padding="0 20px" flexDirection="column">
      <Box marginBottom="10px">
        <Typography type="heading4">{cms.contactHeader}</Typography>
      </Box>
      <Flexbox flexWrap="wrap">
        {cms.contact.map(({ to, label }, index) => (
          <ContactItem alignItems="center" key={label}>
            <Typography type="heading4">
              <Link to={to}>{label}</Link>
            </Typography>
            {cms.contact.length - 1 !== index && <Separator />}
          </ContactItem>
        ))}
      </Flexbox>
    </Flexbox>
  );
};

const ContactItem = styled(Flexbox)`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Separator = styled.hr`
  width: 1px;
  height: 75%;
  border: none;
  background: lightgray;
  margin: 0 0 0 10px;
`;

export default Contact;
