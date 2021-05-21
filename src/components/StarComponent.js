import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEgg } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
`;

const StyledFaEgg = styled(FaEgg)`
  transition: color ease-out 0.1s;
`;

const StarComponent = ({ starCount, onChange, rating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const renderStars = () => {
    const stars = [];
    for (var i = 1; i < starCount + 1; i++) {
      const newVar = i;

      const hoverColor = hoverRating >= newVar ? 'red' : 'white';
      const trueColor = rating >= newVar ? 'yellow' : 'white';
      const style = {
        color: isHovering ? hoverColor : trueColor,
      };

      stars.push(
        <StyledFaEgg
          onMouseOver={() => {
            setIsHovering(true);
            setHoverRating(newVar);
          }}
          onMouseOut={() => {
            setIsHovering(false);
          }}
          onClick={() => {
            onChange(newVar);
          }}
          style={style}
        />
      );
    }

    return stars;
  };

  return <Container>{renderStars()}</Container>;
};

StarComponent.defaultProps = {
  starCount: 5,
};

export default StarComponent;
