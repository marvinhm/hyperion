import React from "react";

function Card(props) {
  return (
    <div>
      <div class="media">
        <a class={props.cardClass} href="#"></a>
        <div class="media-body">
          <img class="media-object" src={props.bodyImg} alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Card;
