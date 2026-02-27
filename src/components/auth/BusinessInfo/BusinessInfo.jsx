import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BusinessInfo.module.css';

const BusinessInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    avgMonthlyConsumption: '',
    primaryPowerSource: '',
    stateCity: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const businessTypes = [
    'Select Business Type',
    'Retail',
    'Restaurant/Food Service',
    'Manufacturing',
    'Office/Corporate',
    'Healthcare',
    'Education',
    'Hospitality',
    'Technology',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.businessType || formData.businessType === 'Select Business Type') {
      newErrors.businessType = 'Please select a business type';
    }

    if (!formData.avgMonthlyConsumption.trim()) {
      newErrors.avgMonthlyConsumption = 'Average monthly consumption is required';
    }

    if (!formData.primaryPowerSource.trim()) {
      newErrors.primaryPowerSource = 'Primary power source is required';
    }

    if (!formData.stateCity.trim()) {
      newErrors.stateCity = 'State/City is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // TODO: Send to backend
      // const response = await fetch('YOUR_BACKEND_ENDPOINT/onboarding/business', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      console.log('Business info submitted:', formData);
      navigate('/login');
      
    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: 'Failed to save information. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundDecoration}></div>

      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg
              className={styles.logoSvg}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className={styles.logoText}>EnergyWise</span>
        </div>

        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>My Business</h1>
            <p className={styles.subtitle}>Kindly fill the details below</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Business Name"
                className={`${styles.input} ${errors.businessName ? styles.inputError : ''}`}
              />
              {errors.businessName && (
                <p className={styles.errorText}>{errors.businessName}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className={`${styles.select} ${errors.businessType ? styles.inputError : ''}`}
              >
                {businessTypes.map((type, index) => (
                  <option key={index} value={type} disabled={index === 0}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className={styles.errorText}>{errors.businessType}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="avgMonthlyConsumption"
                value={formData.avgMonthlyConsumption}
                onChange={handleChange}
                placeholder="Average Monthly Consumption (kWh)"
                className={`${styles.input} ${errors.avgMonthlyConsumption ? styles.inputError : ''}`}
              />
              {errors.avgMonthlyConsumption && (
                <p className={styles.errorText}>{errors.avgMonthlyConsumption}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="primaryPowerSource"
                value={formData.primaryPowerSource}
                onChange={handleChange}
                placeholder="Primary Power Source"
                className={`${styles.input} ${errors.primaryPowerSource ? styles.inputError : ''}`}
              />
              {errors.primaryPowerSource && (
                <p className={styles.errorText}>{errors.primaryPowerSource}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="stateCity"
                value={formData.stateCity}
                onChange={handleChange}
                placeholder="State/City"
                className={`${styles.input} ${errors.stateCity ? styles.inputError : ''}`}
              />
              {errors.stateCity && (
                <p className={styles.errorText}>{errors.stateCity}</p>
              )}
            </div>

            {errors.submit && (
              <div className={styles.submitError}>
                {errors.submit}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={styles.submitButton}
            >
              {loading ? 'Saving...' : 'Continue'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
