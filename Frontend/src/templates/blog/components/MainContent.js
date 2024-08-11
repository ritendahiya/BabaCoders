import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Unstable_Grid2'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Cardiology',
    title: 'Heart Health: Tips and Latest Treatments',
    description:
      'Learn about maintaining heart health and the latest treatments available. Our experts share valuable tips and advancements in cardiology.',
    authors: [
      { name: 'Dr. Emily Johnson', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Dr. Michael Lee', avatar: '/static/images/avatar/2.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Orthopedics',
    title: 'Innovative Orthopedic Solutions for Joint Pain',
    description:
      'Explore new solutions for managing joint pain and orthopedic conditions. Find out how cutting-edge treatments can improve your quality of life.',
    authors: [{ name: 'Dr. Sarah Davis', avatar: '/static/images/avatar/6.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=3',
    tag: 'Dermatology',
    title: 'Skin Care: Advances in Dermatology',
    description:
      'Stay updated with the latest trends and treatments in dermatology. Our dermatologists provide insights into skin care and advanced therapies.',
    authors: [{ name: 'Dr. Jessica Adams', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=4',
    tag: 'Pediatrics',
    title: 'Pediatric Care: New Guidelines and Practices',
    description:
      'Discover the latest guidelines and best practices in pediatric care. Our pediatricians share their expertise on caring for children and adolescents.',
    authors: [{ name: 'Dr. Alan Smith', avatar: '/static/images/avatar/3.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=45',
    tag: 'Gastroenterology',
    title: 'Gut Health: Innovations in Gastroenterology',
    description:
      'Learn about the latest innovations in gastroenterology and how they impact gut health. Our specialists provide valuable information and new treatment options.',
    authors: [
      { name: 'Dr. Laura Brown', avatar: '/static/images/avatar/4.jpg' },
      { name: 'Dr. David Wilson', avatar: '/static/images/avatar/5.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=6',
    tag: 'Oncology',
    title: 'Advancements in Cancer Treatment',
    description:
      'Stay informed about the latest advancements in cancer treatment. Our oncologists discuss new therapies and strategies for combating cancer.',
    authors: [{ name: 'Dr. Angela Martinez', avatar: '/static/images/avatar/2.jpg' }],
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
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
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">August 10, 2024</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search doctors, treatments…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Healthcare Insights
        </Typography>
        <Typography>Stay informed with the latest updates and expert advice in healthcare</Typography>
      </div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          gap: 4,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Chip onClick={handleClick} label="All specialties" />
          <Chip
            onClick={handleClick}
            label="Cardiology"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            label="Orthopedics"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            label="Dermatology"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            label="Pediatrics"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            label="Gastroenterology"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
          }}
        >
          
        </Box>
      </Box>
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <SyledCard
              onClick={() => console.info('You clicked the card.')}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              tabIndex={0}
            >
              <CardMedia
                component="img"
                height="140"
                image={card.img}
                alt={card.title}
              />
              <SyledCardContent>
                <Chip label={card.tag} variant="outlined" color="primary" />
                <StyledTypography variant="h6" gutterBottom>
                  {card.title}
                </StyledTypography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
                <Author authors={card.authors} />
              </SyledCardContent>
            </SyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
