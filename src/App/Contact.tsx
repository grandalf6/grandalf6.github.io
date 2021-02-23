import Flexbox from "../components/Flexbox";
import Typography from "../components/Typography";
import cms from "../assets/cms";
import Box from "../components/Box";
import Link from "../components/Link";

const Contact = () => {
  return (
    <Flexbox padding="0 20px" flexDirection="column">
      <Box marginBottom="10px">
        <Typography type="heading4">{cms.contactHeader}</Typography>
      </Box>
      <Flexbox>
        <Typography type="heading4">
          <Link to={`mailto:${cms.email}`}>{cms.email}</Link>
        </Typography>
      </Flexbox>
    </Flexbox>
  );
};

export default Contact;
