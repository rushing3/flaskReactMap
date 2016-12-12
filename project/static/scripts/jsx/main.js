import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Map, Marker, InfoWindow, Circle} from 'react-gmaps';
import MapEvents from '../components/map';

const coords = {
    lat: 51.5258541,
    lng: -0.08040660000006028
};

const styles = {
      item: {
              backgroundColor: 'white',
              transition: 'background-color 0.2s linear'
            },
      left: {
              float: 'left'
            },
      flex: {
              display: 'flex'
            }
};

const App = React.createClass({

    handler(_event) {
        const item = ReactDOM.findDOMNode(this.refs[_event]);
        item.style.backgroundColor = '#99ccff';
        setTimeout(function() {
            item.style.backgroundColor = 'white';
        }, 500);
    },

    render() {

        const events = [];
        const handlers = {};
        for (let _event in MapEvents) {
            if (MapEvents.hasOwnProperty(_event)) {
                events.push(
                    <li key={MapEvents[_event]} ref={MapEvents[_event]}>
                        {MapEvents[_event]}
                    </li>
                );
                handlers[_event] = this.handler.bind(this, MapEvents[_event]);
            }
        }

        return (
            <div className="well" style={styles.flex}>
                <Gmaps
                    width={'50%'}
                    height={'500px'}
                    lat={coords.lat}
                    lng={coords.lng}
                    float={'left'}
                    zoom={12}
                    loadingMessage={'Map loading...'}                                     
                    params={{v: '3.exp', key: 'AIzaSyDnGm7uncUevD9dv_m1QGhQ1GbAXyttC8Q'}}
                    onMapCreated={this.onMapCreated}
                    {...handlers}>
                    <Marker
                        lat={coords.lat}
                        lng={coords.lng}
                        draggable={true}
                        onDragEnd={this.onDragEnd} />
                    <InfoWindow
                        lat={coords.lat}
                        lng={coords.lng}
                        content={'Hello, world'}
                        onCloseClick={this.onCloseClick} />
                    <Circle
                        lat={coords.lat}
                        lng={coords.lng}
                        radius={500}
                        onClick={this.onClick} />
                </Gmaps>
                <ul style={styles.left}>
                    {events}
                </ul>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('content'));
