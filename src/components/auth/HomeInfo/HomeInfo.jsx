import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeInfo.module.css";

const HomeInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    primaryPowerSource: "",
    householdSize: "",
    country: "",
    stateCity: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.primaryPowerSource.trim()) {
      newErrors.primaryPowerSource = "Primary power source is required";
    }

    if (!formData.householdSize.trim()) {
      newErrors.householdSize = "Household size is required";
    }

    if (!formData.country.trim()) {
      newErrors.stateCity = "Country is required";
    }
    if (!formData.stateCity.trim()) {
      newErrors.stateCity = "State/City is required";
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
      const token = localStorage.getItem("ew_token");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/profile`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            primary_power_source: formData.primaryPowerSource,
            household_size: Number(formData.householdSize),
            city: formData.stateCity,
            country: formData.country,
          }),
        },
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to save");
      console.log("Home info submitted:", formData);
      navigate("/meter-setup");
    } catch (error) {
      console.error("Error:", error);
      setErrors({ submit: "Failed to save information. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.backgroundDecoration}></div>
      {/* Logo */}
      <div className={styles.logoBar}>
        <div className={styles.logoIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="none"
          >
            <rect width="36" height="36" fill="#008070" rx="10" />
            <path
              fill="#f59e0b"
              stroke="#f59e0b"
              strokeWidth=".04"
              d="m22.47 9.02-1.56 6.27-.005.027h4.477L14.46 26.93l2.444-9.82.007-.027H13.31l2.006-8.058z"
            />
          </svg>
        </div>
        <span className={styles.logoText}>EnergyWise</span>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>My Home</h1>
            <p className={styles.subtitle}>Kindly fill the details below</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="primaryPowerSource"
                value={formData.primaryPowerSource}
                onChange={handleChange}
                placeholder="Primary Power Source"
                className={`${styles.input} ${errors.primaryPowerSource ? styles.inputError : ""}`}
              />
              {errors.primaryPowerSource && (
                <p className={styles.errorText}>{errors.primaryPowerSource}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="householdSize"
                value={formData.householdSize}
                onChange={handleChange}
                placeholder="Household Size"
                className={`${styles.input} ${errors.householdSize ? styles.inputError : ""}`}
              />
              {errors.householdSize && (
                <p className={styles.errorText}>{errors.householdSize}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className={styles.input}
              />
              {errors.country && (
                <p className={styles.errorText}>{errors.country}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="stateCity"
                value={formData.stateCity}
                onChange={handleChange}
                placeholder="State/City"
                className={`${styles.input} ${errors.stateCity ? styles.inputError : ""}`}
              />
              {errors.stateCity && (
                <p className={styles.errorText}>{errors.stateCity}</p>
              )}
            </div>

            {errors.submit && (
              <div className={styles.submitError}>{errors.submit}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={styles.submitButton}
            >
              {loading ? "Saving..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
