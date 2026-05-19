import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '@/components/Card';
import { leakScore, yearlySavings } from '@/features/leaks/engine';
import { useAppStore } from '@/store/useAppStore';
import { useAppTheme } from '@/theme';

export default function HomeScreen() {
  const t = useAppTheme();
  const { loadLeaks, leaks, loading } = useAppStore();

  useEffect(() => {
    loadLeaks();
  }, [loadLeaks]);

  if (loading) {
    return (
      <View style={[styles.center, { backgroundColor: t.colors.background }]}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!leaks.length) {
    return (
      <View style={[styles.center, { backgroundColor: t.colors.background }]}>
        <Text style={{ color: t.colors.text }}>No leaks found yet.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: t.colors.background }} contentContainerStyle={{ padding: 16 }}>
      <Text style={[styles.h, { color: t.colors.text }]}>Dashboard</Text>
      <Card>
        <Text>Leak Score: {leakScore(leaks)}</Text>
        <Text>Monthly Leak: ${leaks.reduce((a, l) => a + l.monthly, 0).toFixed(2)}</Text>
        <Text>Yearly Potential: ${yearlySavings(leaks)}</Text>
      </Card>
      {leaks.map((l) => (
        <Card key={l.id}>
          <Text>{l.title}</Text>
          <Text>${l.monthly.toFixed(2)}/mo</Text>
          <Text>{l.details}</Text>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  h: { fontSize: 30, fontWeight: '700', marginBottom: 8 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
