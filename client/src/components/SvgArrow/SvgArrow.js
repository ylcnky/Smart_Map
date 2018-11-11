import React from 'react';

const svgArrow = (props) => {

  const dString = `M${props.x0},${props.y0} L ${props.x1}, ${props.y1}`
  let arrow = null;
  if (props.hasArrow) {
    arrow = (<g>
    <defs>
        <marker id='head'
        orient='auto'
        markerWidth='2'
        markerHeight='4'
        refX='1'
        refY='2'>
          <path d='M0,0 V4 L2,2 Z' fill={props.color}/>
        </marker>
      </defs>
      <path
      marker-end='url(#head)'
      stroke-width='0.2'
      stroke={props.color}
      d={dString}/>
    </g>)
  } else {
    arrow = (
      <g>
        <path
        stroke-width='0.2'
        stroke={props.color}
        d={dString}/>
    </g>)
  }
  return(
    {arrow}
  );
}

export default svgArrow;
