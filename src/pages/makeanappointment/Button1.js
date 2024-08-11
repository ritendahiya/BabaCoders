import { Button } from "@mui/material";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const ButtonRoot = styled(Button)`
  width: 154px;
  height: 42px;
`;

const Button1 = ({ className = "", showArrowRight = true }) => {
  const Navigator = useNavigate();
  return (
    <ButtonRoot
      endIcon={
        <img
          width="20px"
          height="20px"
          src="/arrowright.svg"
          className={className}
          onClick={() => {
            Navigator("/payment");
          }}
        
        />
      }
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "16",
        background: "#3b82f6",
        borderRadius: "5px",
        "&:hover": { background: "#3b82f6" },
        width: 154,
        height: 42,
      }}
    >
      Book Now
    </ButtonRoot>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
  showArrowRight: PropTypes.bool,
};

export default Button1;
