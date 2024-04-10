import React from 'react';
import { Anchor } from 'antd';
import { Charti } from './Charti';
import SideCard1 from "./SideCard1";
import SideCard2 from "./SideCard2";
import {Line1} from "./Line1";
import Table1 from "./Table1";

const App = () => (
  <>
    <div
      style={{
        padding: '20px',
      }}
    >
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </div>
      <div>

          <div className="container">
              <div className="row">
                  <div className="col-8">
                      <Charti/>
                  </div>
                  <div className="col-4">
                      <div className="row">
                          <div className="col-12  mb-3">
                              <SideCard1/>
                          </div>
                      </div>
                      <div className="row">
                          <br/>
                          <div className="col-12">
                              <SideCard2/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div
              id="part-1"
              style={{
                  width: '80vw',
                  height: '5vh',
                  textAlign: 'center',
                  background: 'rgba(0,255,0,0.02)',
              }}
          />
          <div
              id="part-2"
              style={{
                  width: '80vw',
                  height: '5vh',
                  textAlign: 'center',
                  background: 'rgba(0,0,255,0.02)',
              }}
          />

          <div className="container">
              <div className="row">
                  <div className="col-4">
                      <SideCard1/>
                  </div>
                  <div className="col-8">
                      <Table1/>
                  </div>
              </div>
          </div>
          <div
              id="part-3"
              style={{
                  width: '80vw',
                  height: '5vh',
                  textAlign: 'center',
                  background: '#FFFBE9',
              }}
          />
      </div>
  </>
);
export default App;