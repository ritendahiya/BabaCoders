import styled from "styled-components";
import ComponentFields from "./ComponentFields";
import PropTypes from "prop-types";

const FullName = styled.div`
  position: relative;
  letter-spacing: 0.02em;
  line-height: 150%;
  font-weight: 500;
`;
const PleaseFillThe = styled.div`
  width: 146px;
  position: relative;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  color: #e46363;
`;
const FieldWithLabelRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  text-align: left;
  font-size: 17.7px;
  color: #111827;
  font-family: Poppins;
`;

const FieldWithLabel = ({
  className = "",
  label = "Share Your Message",
  error = "please fill the field",
  showError = false,
}) => {
  return (
    <FieldWithLabelRoot className={className}>
      <FullName>{label}</FullName>
      <ComponentFields />
      {showError && <PleaseFillThe>{error}</PleaseFillThe>}
    </FieldWithLabelRoot>
  );
};

FieldWithLabel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  showError: PropTypes.bool,
};

export default FieldWithLabel;