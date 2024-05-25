import React from 'react';

function Notification({ message, type }) {
  const color = type === 'error' ? 'var(--secondary-color)' : 'var(--primary-color)';
  return (
    <div style={{ backgroundColor: color, color: 'white', padding: '10px', borderRadius: '5px' }}>
      {message}
    </div>
  );
}

export default Notification;
