import * as React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

const articleInfo = [
  {
    tag: "Healthcare",
    title: "Advancements in Telemedicine for Remote Consultations",
    description:
      "Telemedicine is revolutionizing remote healthcare by enabling patients to consult with doctors from the comfort of their homes. Discover the latest advancements and how they improve access to healthcare.",
    authors: [
      { name: "Dr. Alice Johnson", avatar: "/static/images/avatar/1.jpg" },
      { name: "Dr. Robert Smith", avatar: "/static/images/avatar/2.jpg" },
    ],
  },
  {
    tag: "Healthcare",
    title: "The Role of AI in Personalized Medicine",
    description:
      "Artificial intelligence is playing a crucial role in personalizing medical treatments. Learn how AI algorithms are being used to tailor treatments to individual patients.",
    authors: [
      { name: "Dr. Emma Brown", avatar: "/static/images/avatar/3.jpg" },
    ],
  },
  {
    tag: "Counseling",
    title: "Enhancing Mental Health with Virtual Therapy",
    description:
      "Virtual therapy has become a vital tool in mental health care. Explore how online counseling platforms are helping individuals manage their mental health more effectively.",
    authors: [{ name: "Dr. James Lee", avatar: "/static/images/avatar/4.jpg" }],
  },
  {
    tag: "Healthcare",
    title: "Innovations in Remote Patient Monitoring",
    description:
      "Remote patient monitoring technologies are improving chronic disease management. Learn about the innovations that allow healthcare providers to monitor patients remotely and ensure timely interventions.",
    authors: [
      { name: "Dr. Olivia Wilson", avatar: "/static/images/avatar/5.jpg" },
    ],
  },
  {
    tag: "Counseling",
    title: "The Impact of Video Counseling on Patient Engagement",
    description:
      "Video counseling has transformed how patients engage with healthcare providers. Discover the benefits and challenges of this approach and its impact on patient outcomes.",
    authors: [
      { name: "Dr. Michael Green", avatar: "/static/images/avatar/6.jpg" },
      { name: "Dr. Sarah Davis", avatar: "/static/images/avatar/7.jpg" },
    ],
  },
  {
    tag: "Healthcare",
    title: "Future Trends in Digital Health",
    description:
      "Digital health is evolving rapidly with new technologies shaping the future of healthcare. Stay informed about the trends that will define the future of health tech.",
    authors: [
      { name: "Dr. Jessica Turner", avatar: "/static/images/avatar/8.jpg" },
      { name: "Dr. Daniel Martinez", avatar: "/static/images/avatar/9.jpg" },
    ],
  },
  {
    tag: "Counseling",
    title: "Addressing Health Disparities Through Virtual Care",
    description:
      "Virtual care is a powerful tool for addressing health disparities. Learn how virtual health solutions are reaching underserved populations and improving healthcare equity.",
    authors: [
      { name: "Dr. Karen Scott", avatar: "/static/images/avatar/10.jpg" },
    ],
  },
  {
    tag: "Healthcare",
    title: "Using AI for Early Detection of Diseases",
    description:
      "AI technologies are increasingly being used for the early detection of diseases. Explore how these innovations are helping in early diagnosis and better health outcomes.",
    authors: [
      { name: "Dr. Brian Anderson", avatar: "/static/images/avatar/11.jpg" },
    ],
  },
  {
    tag: "Counseling",
    title: "Building Trust in Virtual Counseling Relationships",
    description:
      "Trust is essential in counseling relationships. Discover strategies for building and maintaining trust in virtual counseling settings and their importance for effective therapy.",
    authors: [
      { name: "Dr. Laura Adams", avatar: "/static/images/avatar/12.jpg" },
    ],
  },
];

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  textDecoration: "none",
  "&:hover": { cursor: "pointer" },
  "& .arrow": {
    visibility: "hidden",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  "&:hover .arrow": {
    visibility: "visible",
    opacity: 0.7,
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "3px",
    borderRadius: "8px",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: 0,
    height: "1px",
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.text.primary,
    opacity: 0.3,
    transition: "width 0.3s ease, opacity 0.3s ease",
  },
  "&:hover::before": {
    width: "100%",
  },
}));

function Author({ authors }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(", ")}
        </Typography>
      </Box>
      <Typography variant="caption">August 11, 2024</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function Latest() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Latest
      </Typography>
      <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
        {articleInfo.map((article, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 1,
                height: "100%",
              }}
            >
              <Typography gutterBottom variant="caption" component="div">
                {article.tag}
              </Typography>
              <TitleTypography
                gutterBottom
                variant="h6"
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === index ? "Mui-focused" : ""}
              >
                {article.title}
                <NavigateNextRoundedIcon
                  className="arrow"
                  sx={{ fontSize: "1rem" }}
                />
              </TitleTypography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {article.description}
              </StyledTypography>

              <Author authors={article.authors} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 4 }}>
        <Pagination
          hidePrevButton
          hideNextButton
          count={10}
          boundaryCount={10}
        />
      </Box>
    </div>
  );
}
