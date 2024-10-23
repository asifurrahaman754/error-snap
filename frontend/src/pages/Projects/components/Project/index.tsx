import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { cssColor } from "utils/colors";

export default function Project() {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate("/project/test/errors");
  };

  return (
    <Card
      variant="outlined"
      sx={{
        border: "1px solid #333",
        color: "white",
        minHeight: "80px",
        backgroundColor: cssColor("paper"),
      }}
      onClick={handleProjectClick}
    >
      <CardActionArea>
        <CardContent>
          <Typography color="white" gutterBottom sx={{ fontSize: 14 }}>
            Prject name
          </Typography>
        </CardContent>
        <CardActions>Learn More</CardActions>
      </CardActionArea>
    </Card>
  );
}
