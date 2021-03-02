import Typography from "../../components/Typography";
import cms from "../../assets/cms";

const Title = () => {
  return (
    <Typography textAlign="center" type="heading3">
      {cms.desktopVersionLabel}
    </Typography>
  );
};

export default Title;
