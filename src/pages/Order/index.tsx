import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

import { Button, Checkbox, DashboardSectionTitle, Dropdown, RangeSlider, } from 'components';

import './styles.scss';

interface OrderProps {
  toggleForm?: () => void;
}

export const Order: React.FC<OrderProps> = ({ toggleForm }) => {
  const [country, setCountry] = useState<string | null>(null);
  const [promocode, setPromocode] = useState('Enter Promocode');
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState(0)


  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry);
  };

  return (
    <div className="order-container">
      <Box
        
      >
        <div className="order order-paper">
          <h5>
            Your best location is
            <span>
              DataLine (Tier-3).
            </span>
          </h5>
          <DashboardSectionTitle text='Choose another location:' />

          <Dropdown
            options={["DataLine (Tier-3) (Russia, Moscow) (19 ms)", "DataLine (Tier-3) (Russia, Moscow) (19 ms)"]}
            onChange={handleCountryChange}
          />

          <div className="payment-period">
            <DashboardSectionTitle text='Payment period' />
            <div>

              <RangeSlider />

            </div>
          </div>

          <div className="promocode">
            <DashboardSectionTitle text='Have a promocode?' />
            <div className="promocode-input">
              <input
                type='text'
                value={promocode}
                onChange={(e) => setPromocode(e.target.value)}
                placeholder="Enter Promocode"
              />
              <Button type='button' color='blue' text='apply' />
            </div>
          </div>

          <div className="subscription">
            <div className='priceboard'>
              <div className="price-amount">
                <p className="subscription-plan">6 months for</p>
                <span className="subscription-price">$89,70</span>
              </div>
              |
              <div className="price-amount">
                <p className="subscription-plan">1 month for</p>
                <span className="subscription-price">$1,49</span>
              </div>
            </div>
            <Button type='button' color='purple' text='order plan' />
          </div>

          <div className="order__form-agreement">
            <Checkbox
              checked={isChecked}
              onChange={setIsChecked}
            />
            <p>
              Agree with the terms of
              <NavLink
                to="#"
              >
                the offer
              </NavLink>
            </p>
          </div>

          <p>
            If you ordered a VPS and you are not satisfied with the quality of its work,
            then within 15 days from the date of order, we will make a refund in any case.
          </p>
        </div>


      </Box>
      <Box>
        <div className="order-receipt order-paper">
          <DashboardSectionTitle text='Your order:' />

          <div className="order-details">
            <div className="order-details__item">
              <span>
                Virtualization
              </span>
              <p>
                KVM
              </p>
            </div>
            <div className="order-details__item">
              <span>
                Bandwidth (fair-share)
              </span>
              <p>
                500 Mbit
              </p>
            </div>
            <div className="order-details__item">
              <span>
                CPU cores
              </span>
              <p>
                4
              </p>
            </div>
            <div className="order-details__item">
              <span>
                RAM size
              </span>
              <p>
                4096 Mb
              </p>
            </div>
            <div className="order-details__item">
              <span>
                NVMe size
              </span>
              <p>
                50 Gb
              </p>
            </div>
            <div className="order-details__item">
              <span>
                IPv4 addresses 1 unit
              </span>
              <p>
                $0 / month
              </p>
            </div>
            <div className="order-details__item">
              <span>
                IPv6 addresses
              </span>
              <p>
                $0 / month
              </p>
            </div>
            <div className="order-details__item">
              <span>
                CentOS 7 64bit (default)
              </span>
              <p>
                $0
              </p>
            </div>
            <div className="order-details__item">
              <span>
                Location
              </span>
              <p>
                DataLine (Tier-3).
              </p>
            </div>
            <div className="order-details__item">
              <span>
                NVMe I/O
              </span>
              <p>
                700 MB/sec
              </p>
            </div>
          </div>

          <div className="subscription">
            <div className='priceboard'>
              <div className="price-amount">
                <p className="subscription-plan">6 months for</p>
                <span className="subscription-price">$89,70</span>
              </div>
              |
              <div className="price-amount">
                <p className="subscription-plan">1 month for</p>
                <span className="subscription-price">$1,49</span>
              </div>
            </div>
            <Button type='button' color='purple' text='order plan' />
          </div>

          <div className="order-receipt__form-agreement">
            <Checkbox
              checked={isChecked}
              onChange={setIsChecked}
            />
            <p>
              Agree with the terms of
              <NavLink
                to="#"
              >
                the offer
              </NavLink>
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
}
