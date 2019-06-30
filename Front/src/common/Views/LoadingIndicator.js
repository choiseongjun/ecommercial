import React from 'react';
import './LoadingIndicator.css';
export default function LoadingIndicator(props) {
    return (
        <div>
          <div className="loading-container">
            <div className="loading-progress">
              <div className="rotator">
                <div className="rotator">
                  <div className="rotator colored">
                    <div className="rotator">
                      <div className="rotator colored">
                        <div className="rotator colored" />
                        <div className="rotator" />
                      </div>
                      <div className="rotator colored" />
                    </div>
                    <div className="rotator" />
                  </div>
                  <div className="rotator" />
                </div>
                <div className="rotator" />
              </div>
              <div className="rotator" />
            </div>
          </div>
          <div className="container bootstrap snippets">
            <div className="jumbotron">
              <h1 id="loading-text"></h1>
            </div>
          </div>
      </div>
      
    );
}