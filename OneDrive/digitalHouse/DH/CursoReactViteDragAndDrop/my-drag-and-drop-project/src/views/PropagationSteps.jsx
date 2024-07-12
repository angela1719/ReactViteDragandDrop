import React, { useState } from 'react';
import Modal from '../components/Modal';
import './PropagationSteps.css';

const steps = [
  "Select a healthy parent plant.",
  "Prepare the cuttings or seeds.",
  "Plant the cuttings or seeds in suitable soil.",
  "Water regularly and provide appropriate light.",
  "Wait for roots to establish and new growth to appear."
];

const descriptions = [
  "Choose a parent plant that is healthy and free of diseases.",
  "Carefully cut a section of the plant or collect seeds.",
  "Place the cuttings or seeds into appropriate soil mix.",
  "Ensure the plant gets enough water and sunlight for growth.",
  "Be patient as the plant establishes roots and starts to grow."
];

const PropagationSteps = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const openModal = (index) => {
    setCurrentStep(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="propagation-steps-container">
      <h1>Propagation Steps</h1>
      <div className="steps-buttons">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => openModal(index)}
            className="step-button"
          >
            {step}
          </button>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>{steps[currentStep]}</h2>
        <p>{descriptions[currentStep]}</p>
      </Modal>
    </div>
  );
};

export default PropagationSteps;
