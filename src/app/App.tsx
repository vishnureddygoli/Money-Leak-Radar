import React from 'react';
import RootNav from '@/navigation';
import { useAppStore } from '@/store/useAppStore';

export default function App() {
  const onboarded = useAppStore((s) => s.onboarded);
  return <RootNav onboarded={onboarded} />;
}
