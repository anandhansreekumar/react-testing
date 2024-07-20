import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const MuiMode = () => {
  const theme = useTheme();

  const mode = `${theme.palette.mode} mode`;

  return <Typography component="h1">{mode}</Typography>;
};

export default MuiMode;
