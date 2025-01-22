"use client";
import React from 'react'
import { createFirebaseApp } from './analytics';

const TriggerAnalytics = () => {
  React.useEffect(() => {
    createFirebaseApp();
  }, []);

  return (
    <div></div>
  )
}

export default TriggerAnalytics