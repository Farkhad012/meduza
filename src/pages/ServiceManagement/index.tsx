import React, { useState, useEffect, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Notification, DashboardSectionTitle, Dropdown, DashboardTable, ContactSupport } from 'components';

import './styles.scss';

interface Service {
  id: number;
  name: string;
  period: string;
  plan: string;
  location?: string;
  ip?: string;
  status?: string;
}

export const ServiceManagement: React.FC = () => {
  const { t } = useTranslation('serviceManagement');

  
const columns = [
  { key: 'id', label: t('ID_') },
  { key: 'name', label: t('Name_') },
  { key: 'period', label: t('Period_') },
  { key: 'plan', label: t('Plan_') }
];


  const [filters, setFilters] = useState({
    id: '',
    tag: '',
    location: '',
    ip: '',
    status: ''
  });

  const [services, setServices] = useState<Service[]>([]);
  const [statusOptions, setStatusOptions] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleStatusChange = (status: string) => {
    setFilters({ ...filters, status });
  };

  // Пример данных для демонстрации, заменить на логику получения реальных данных
  const mockServices: Service[] = [
    { id: 1, name: 'Service A', period: 'Monthly', plan: 'Basic', location: 'NY', ip: '192.168.1.1', status: 'active' },
    { id: 2, name: 'Service B', period: 'Yearly', plan: 'Premium', location: 'LA', ip: '192.168.1.2', status: 'inactive' },
  ];

  useEffect(() => {
    filterServices();
  }, [filters]);

  useEffect(() => {
    setStatusOptions(['active', 'inactive']);
  }, []);


  const filterServices = () => {
    const filtered = mockServices.filter(service => {
      return (
        (filters.id === '' || service.id.toString().includes(filters.id)) &&
        (filters.tag === '' || service.name.toLowerCase().includes(filters.tag.toLowerCase())) &&
        (filters.location === '' || (service.location && service.location.toLowerCase().includes(filters.location.toLowerCase()))) &&
        (filters.ip === '' || (service.ip && service.ip.includes(filters.ip))) &&
        (filters.status === '' || (service.status && service.status === filters.status))
      );
    });
    setServices(filtered);
  };

  return (
    <div className="service-management">
      <Notification message="There are no services requiring payment and extension" />
      <Notification message="Payment is not required, the balance is sufficient." />
      <form id="service-filter-form">
        <DashboardSectionTitle text={t('All_services_')} />
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="service-id">
            {t('ID_')}
            </label>
            <input type="text" id="service-id" name="id" aria-labelledby="service-id" onChange={handleInputChange} />
          </div>
          <div className="filter-group">
            <label htmlFor="service-tag">
            {t('Tag_')}
            </label>
            <input type="text" id="service-tag" name="tag" aria-labelledby="service-tag" onChange={handleInputChange} />
          </div>
          <div className="filter-group">
            <label htmlFor="service-location">
            {t('Location_')}
            </label>
            <input type="text" id="service-location" name="location" aria-labelledby="service-location" onChange={handleInputChange} />
          </div>
          <div className="filter-group">
            <label htmlFor="service-ip">
            {t('IP_')}
            </label>
            <input type="text" id="service-ip" name="ip" aria-labelledby="service-ip" onChange={handleInputChange} />
          </div>
          <div className="filter-group">
            <label htmlFor="service-status">
            {t('Status_')}
            </label>
            <Dropdown
              options={['option 1', 'option 2', 'option 3']}
              onChange={handleStatusChange}
            />
          </div>
        </div>
      </form>
      <DashboardTable
        ariaLabel="Service Table"
        columns={columns}
        content={services}
        error={t('Services_not_found_')}
      />
      <ContactSupport />
    </div>
  );
};
