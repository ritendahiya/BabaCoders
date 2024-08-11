import styled from "styled-components";
import PropTypes from "prop-types";

const ComponentFieldsRoot = styled.textarea`
  border: 1px solid #eef4ff;
  background-color: #f7f9ff;
  height: 159px;
  width: auto;
  outline: none;
  align-self: stretch;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 17.7px;
  color: #111827;
`;

const ComponentFields = ({ className = "" }) => {
  return (
    <ComponentFieldsRoot
      placeholder="Message"
      rows={8}
      cols={19}
      className={className}
    />
  );
};

ComponentFields.propTypes = {
  className: PropTypes.string,
};

export default ComponentFields;