import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuickSetup.module.css';

const QuickSetup = () => {
  const navigate = useNavigate();
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  const [loading, setLoading] = useState(false);

  const commonAppliances = [
    { id: 'bulb', name: 'Bulb', icon: '💡', defaultPower: 60, defaultHours: 5 },
    { id: 'lamp', name: 'Lamp', icon: '🪔', defaultPower: 40, defaultHours: 8 },
    { id: 'fridge', name: 'Fridge', icon: '🧊', defaultPower: 150, defaultHours: 24 },
    { id: 'kettle', name: 'Kettle', icon: '☕', defaultPower: 2000, defaultHours: 0.5 },
    { id: 'dryer', name: 'Hand Dryer', icon: '💨', defaultPower: 1800, defaultHours: 0.25 },
    { id: 'modem', name: 'Modem', icon: '📡', defaultPower: 10, defaultHours: 24 },
    { id: 'notebook', name: 'Notebook', icon: '💻', defaultPower: 65, defaultHours: 8 },
    { id: 'fan', name: 'Fan', icon: '🌀', defaultPower: 75, defaultHours: 12 },
    { id: 'ac', name: 'Air Conditioner', icon: '❄️', defaultPower: 1500, defaultHours: 8 },
    { id: 'laptop', name: 'Laptop', icon: '💻', defaultPower: 65, defaultHours: 6 },
    { id: 'tv', name: 'TV', icon: '📺', defaultPower: 100, defaultHours: 6 },
    { id: 'microwave', name: 'Microwave', icon: '📻', defaultPower: 1000, defaultHours: 0.5 }
  ];

  const handleApplianceClick = (appliance) => {
    const exists = selectedAppliances.find(a => a.id === appliance.id);
    
    if (exists) {
      setSelectedAppliances(selectedAppliances.filter(a => a.id !== appliance.id));
    } else {
      setSelectedAppliances([
        ...selectedAppliances,
        {
          id: appliance.id,
          name: appliance.name,
          icon: appliance.icon,
          power: appliance.defaultPower,
          hoursPerDay: appliance.defaultHours
        }
      ]);
    }
  };

  const handleApplianceUpdate = (id, field, value) => {
    setSelectedAppliances(
      selectedAppliances.map(appliance =>
        appliance.id === id
          ? { ...appliance, [field]: parseFloat(value) || 0 }
          : appliance
      )
    );
  };

  const calculateDailyUsage = (power, hours) => {
    return ((power * hours) / 1000).toFixed(2);
  };

  const handleContinue = async () => {
    if (selectedAppliances.length === 0) {
      alert('Please select at least one appliance');
      return;
    }

    setLoading(true);

    try {
      // TODO: Send to backend
      // const response = await fetch('YOUR_BACKEND_ENDPOINT/appliances', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   },
      //   body: JSON.stringify({ appliances: selectedAppliances })
      // });

      console.log('Appliances saved:', selectedAppliances);
      navigate('/dashboard');
      
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save appliances. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isSelected = (id) => selectedAppliances.some(a => a.id === id);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundDecoration}></div>

      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg className={styles.logoSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className={styles.logoText}>EnergyWise</span>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Quick Setup</h1>
          <p className={styles.subtitle}>
            Select all your appliances to get personalized insights and accurate energy consumption tracking.
          </p>

          {}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Common Appliances</h2>
            <div className={styles.applianceGrid}>
              {commonAppliances.map((appliance) => (
                <button
                  key={appliance.id}
                  onClick={() => handleApplianceClick(appliance)}
                  className={`${styles.applianceButton} ${isSelected(appliance.id) ? styles.applianceButtonActive : ''}`}
                >
                  <span className={styles.applianceIcon}>{appliance.icon}</span>
                  <span className={styles.applianceName}>{appliance.name}</span>
                  {isSelected(appliance.id) && (
                    <span className={styles.checkmark}>✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {}
          {selectedAppliances.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Add usage details for your appliances</h2>
              <div className={styles.detailsGrid}>
                {selectedAppliances.map((appliance) => (
                  <div key={appliance.id} className={styles.applianceCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.cardIcon}>{appliance.icon}</span>
                      <span className={styles.cardName}>{appliance.name}</span>
                    </div>
                    
                    <div className={styles.cardInputs}>
                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Power (Watts)</label>
                        <input
                          type="number"
                          value={appliance.power}
                          onChange={(e) => handleApplianceUpdate(appliance.id, 'power', e.target.value)}
                          className={styles.input}
                          placeholder="1500"
                        />
                        <p className={styles.inputHint}>Check on AC label</p>
                      </div>
                      
                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Hours per Day</label>
                        <input
                          type="number"
                          step="0.5"
                          value={appliance.hoursPerDay}
                          onChange={(e) => handleApplianceUpdate(appliance.id, 'hoursPerDay', e.target.value)}
                          className={styles.input}
                          placeholder="8"
                        />
                        <p className={styles.inputHint}>Average daily usage</p>
                      </div>
                    </div>
                    
                    <div className={styles.cardUsage}>
                      <span className={styles.usageLabel}>Daily usage:</span>
                      <span className={styles.usageValue}>
                        {calculateDailyUsage(appliance.power, appliance.hoursPerDay)} kWh
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {}
          <button
            onClick={handleContinue}
            disabled={loading || selectedAppliances.length === 0}
            className={styles.continueButton}
          >
            {loading ? 'Saving...' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickSetup;
