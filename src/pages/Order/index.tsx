import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

import { Button, Checkbox, DashboardSectionTitle, Dropdown, RangeSlider, } from 'components';

import { close } from 'assets/images/icons';

import './styles.scss';
import { ModalContext } from 'context/ModalContext';

interface OrderProps {
  toggleForm?: () => void;
}

export const Order: React.FC<OrderProps> = ({ toggleForm }) => {
  const { t } = useTranslation('order');
  const [country, setCountry] = useState<string | null>(null);
  const [promocode, setPromocode] = useState('Enter Promocode');
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState(0)


  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry);
  };

  return (
    <div className="order-container">
      <Box>
        <div className="order order-paper">
          <div className='order__header'>
            <div className='modal-paper__header'>
              <button
                onClick={toggleForm}
                className='close-btn'>
                <img src={close} alt="close" />
              </button>
            </div>
            <h3>
              {t('Your_best_location_is_')}
              <span> {t('DataLine_Tier_3_')}.</span>
            </h3>
            <DashboardSectionTitle text={t('Choose_another_location_')} />
          </div>

          <Dropdown
            options={["DataLine (Tier-3) (Russia, Moscow) (19 ms)", "DataLine (Tier-3) (Russia, Moscow) (19 ms)"]}
            onChange={handleCountryChange}
          />

          <div className="payment-period">
            <DashboardSectionTitle text={t('Payment_period_')} />
            <div>

              <RangeSlider />

            </div>
          </div>

          <div className="promocode">
            <DashboardSectionTitle text={t('Have_a_promocode_')} />
            <div className="promocode-input">
              <input
                type='text'
                // value={promocode}
                // onChange={(e) => setPromocode(e.target.value)}
                placeholder={t('Enter_Promocode_')}
              />
              <Button type='button' color='blue' text={t('Apply_')} />
            </div>
          </div>

          <div className='order__footer'>
            <div className="subscription">
              <div className='priceboard'>
                <div className="price-amount">
                  <p className="subscription-plan">6 {t('Months_for_')}</p>
                  <span className="subscription-price">$89,70</span>
                </div>
                |
                <div className="price-amount">
                  <p className="subscription-plan">1 {t('Month_for_')}</p>
                  <span className="subscription-price">$1,49</span>
                </div>
              </div>
              <Button type='button' color='purple' text={t('Order_plan_')} />
            </div>
            <div className="order__form-agreement">
              <Checkbox
                checked={isChecked}
                onChange={setIsChecked}
              />
              <p>
                {t('Accept_')}
                <NavLink
                  to="#"
                >
                  {t('The_terms_of_the_offer_')}
                </NavLink>
              </p>
            </div>
            <p className='term'>
              {t('If_you_ordered_a_VPS_and_you_are_not_satisfied_with_the_quality_of_its_work_then_within_15_days_from_the_date_of_order_we_will_make_a_refund_in_any_case_')}
            </p>
          </div>
        </div>


      </Box>
      <Box>
        <div className="order-receipt order-paper">
          <DashboardSectionTitle text={t('Your_order_')} />

          <div className="order-details">
            <div className="order-details__item">
              <span>
                {t('Virtualization_')}
              </span>
              <p>
                {t('KVM_')}
              </p>
            </div>
            <div className="order-details__item">
              <span>
                {t('Bandwidth_fair_share_')}
              </span>
              <p>
                500 {t('Mbit_')}
              </p>
            </div>
            <div className="order-details__item">
              <span>
                {t('CPU_cores_')}
              </span>
              <p>
                4
              </p>
            </div>
            <div className="order-details__item">
              <span>
                {t('RAM_size_')}
              </span>
              <p>
                4096 Mb
              </p>
            </div>
            <div className="order-details__item">
              <span>
                {t('NVMe_size_')}
              </span>
              <p>
                50 Gb
              </p>
            </div>
            <div className="order-details__item">
              <span>
                {t('IPv4_addresses_1_unit_')}
              </span>
              <p>
                0 {t('Month_')}
              </p>
            </div>
            <div className="order-details__item">
              <span>
                {t('IPv6_addresses_1_unit_')}
              </span>
              <p>
                $0 / {t('Month_')}
              </p>
            </div>
            <div className="order-details__item">
              <span>
                {t('CentOS_7_64bit_default_')}
              </span>
              <p>
                $0
              </p>
            </div>
            <div className="order-details__item">
              <span>
                {t('Location_')}
              </span>
              <p>
                {t('DataLine_Tier_3_')}
              </p>
            </div>
            <div className="order-details__item">
              <span>
                {t('NVMe_IO_')}
              </span>
              <p>
                700 {t('MB_sec_')}
              </p>
            </div>
          </div>

          <div className="subscription">
            <div className='priceboard'>
              <div className="price-amount">
                <p className="subscription-plan">6 {t('Months_for_')}</p>
                <span className="subscription-price">$89,70</span>
              </div>
              |
              <div className="price-amount">
                <p className="subscription-plan">1 {t('Month_for_')}</p>
                <span className="subscription-price">$1,49</span>
              </div>
            </div>
            <Button type='button' color='purple' text={t('Order_plan_')} />
          </div>

          <div className="order-receipt__form-agreement">
            <Checkbox
              checked={isChecked}
              onChange={setIsChecked}
            />
            <p>
              {t('Accept_')}
              <NavLink
                to="#"
              >
                {t('The_terms_of_the_offer_')}
              </NavLink>
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
}
