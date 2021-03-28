import React, { useState } from 'react';
import { StCollapse } from '🦄';
import { StButton } from '🦄';

const Individual: React.FC = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  return (
    <>
      <div>{active ? '👴' : '🎅'}</div>
      <StButton onClick={() => setActive(!active)}>toggle</StButton>
      <StCollapse.Panel active={active}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis unde nesciunt
          laudantium quidem sint, suscipit sit facere quos dolor. Iure omnis aspernatur magni
          laudantium rerum enim quam placeat libero voluptate.
        </p>
        <StButton onClick={() => setActive(!active)}>toggle</StButton>
        <StButton onClick={() => setActive2(!active2)}>inner toggle2</StButton>
        <StCollapse.Panel active={active2}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero facilis
            architecto? Sunt, delectus mollitia quaerat ad ut laboriosam enim quis perspiciatis
            culpa beatae! Veritatis odio consequuntur iure magnam esse!
          </p>
        </StCollapse.Panel>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero facilis
          architecto? Sunt, delectus mollitia quaerat ad ut laboriosam enim quis perspiciatis culpa
          beatae! Veritatis odio consequuntur iure magnam esse!
        </p>
      </StCollapse.Panel>
    </>
  );
};

export default Individual;
