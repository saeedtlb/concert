import React from 'react';

const index = () => {
  const mapStyle = {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    textTransform: 'uppercase',
    width: '15%',
    height: '10%',
    color: '#fff',
    fontSize: '28px',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div className="location" style={{ position: 'relative' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d32643.787486481993!2d51.417969052484274!3d35.73423795360607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710d5918403%3A0x74f5290b67841378!2sMilad%20Tower!5e0!3m2!1sen!2s!4v1582962832012!5m2!1sen!2s"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen=""
        title="concert place"
      ></iframe>
      <div className="map" style={mapStyle}>
        location
      </div>
    </div>
  );
};

export default index;
