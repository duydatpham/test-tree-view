/*
 * Created by duydatpham@gmail.com on 16/06/2022
 * Copyright (c) 2022 duydatpham@gmail.com
 */
import React, { memo } from "react";

import Tree from 'react-d3-tree';


const renderRectSvgNode = ({ nodeDatum, onNodeClick }: any) => (
  <g>
    <svg width="200" height="300" x="-100" y="-150" onClick={(e: any) => {
      e.stopPropagation()
      e.type_for = 'click'
      onNodeClick(e)
    }}>
      <rect width="200" height="300" fill="gray" stroke='none' />
      <defs>
        <rect id="rect" x="50" y="30" width="100" height="100" rx="100" />
        <clipPath id="clip">
          <use href="#rect" />
        </clipPath>
      </defs>
      <use href="#rect" strokeWidth="2" stroke="black" />
      <image x="50" y="30" href="https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg" width="100" height="100" clipPath="url(#clip)" />

      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{nodeDatum.name}</text>
      <rect width="50" height="50" fill="red" y='220' x='30' onClick={(e: any) => {
        e.stopPropagation()
        e.type_for = 'delete'
        onNodeClick(e)
      }} rx='50' stroke="none">
      </rect>
      <rect width="50" height="50" x='120' y='220' fill="green" onClick={(e: any) => {
        e.stopPropagation()
        e.type_for = 'add-child'
        onNodeClick(e)
      }} rx='50' stroke="none">
      </rect>
    </svg>
    <rect width="50" height="50" x='130' y='-25' fill="green" onClick={(e: any) => {
      e.stopPropagation()
      e.type_for = 'add-wife'
      onNodeClick(e)
    }} rx='50' stroke="none">
    </rect>
  </g>
);

export default memo(() => {

  const [orgChart] = React.useState({
    name: 'CEO ',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
    ],
  })

  return <div id="treeWrapper" style={{ height: '100vh' }}>
    <Tree data={orgChart}
      orientation='vertical'
      zoomable={true}
      pathFunc='step'
      renderCustomNodeElement={renderRectSvgNode}
      collapsible={false}
      nodeSize={{
        x: 300, y: 500
      }}
      zoom={0.5}
      translate={{
        x: 100,
        y: 0
      }}
      svgClassName='classss'
      onNodeClick={(node, { type_for }: any) => {
        console.log('value', node, type_for);

        !!(window as any).ReactNativeWebView && (window as any).ReactNativeWebView.postMessage(type_for)
      }}
    />
  </div>
})