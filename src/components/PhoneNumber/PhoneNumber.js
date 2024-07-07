import React from 'react';
import './PhoneNumber.scss'


const PhoneNumber = () => {
  const phoneNumber = '+7 (918) 292-1781';

  return (
    <a className={'PhoneNumber'} href={`tel:${phoneNumber}`}>
      {phoneNumber}
    </a>
  );
};

export default PhoneNumber;
