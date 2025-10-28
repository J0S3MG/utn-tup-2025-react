import { Stack, Typography } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"; // fácil
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral"; // medio
import WhatshotIcon from "@mui/icons-material/Whatshot"; // difícil

const IndicadorDificultad = ({ dif }) => {
  let icon, color, label;

  switch (dif) {
    case "Facil":
      icon = <EmojiEmotionsIcon color="success" />;
      label = "Fácil";
      color = "success.main";
      break;
    case "Medio":
      icon = <SentimentNeutralIcon color="warning" />;
      label = "Medio";
      color = "warning.main";
      break;
    case "Dificil":
      icon = <WhatshotIcon color="error" />;
      label = "Difícil";
      color = "error.main";
      break;
    default:
      icon = <SentimentNeutralIcon color="disabled" />;
      label = "Sin dificultad";
      color = "text.secondary";
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {icon}
      <Typography sx={{ color }}>{label}</Typography>
    </Stack>
  );
};

export default IndicadorDificultad;