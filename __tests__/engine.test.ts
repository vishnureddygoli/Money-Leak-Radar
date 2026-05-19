import { cancellationTemplate, detectSmsOptOut, detectSubscriptions, detectTrials, leakScore, yearlySavings } from '../src/features/leaks/engine';

describe('leak engine', () => {
  test('leak scoring logic', () => {
    expect(leakScore([{ id: '1', title: 'a', type: 'subscription', monthly: 20, details: '' } as any])).toBe(80);
  });

  test('subscription detection logic', () => {
    expect(detectSubscriptions(['Monthly plan', 'hello']).length).toBe(1);
  });

  test('free trial detection logic', () => {
    expect(detectTrials(['Trial expires tomorrow']).length).toBe(1);
  });

  test('sms opt-out detection logic', () => {
    expect(detectSmsOptOut('Reply STOP to end')).toBe(true);
  });

  test('savings calculation', () => {
    expect(yearlySavings([{ id: '1', title: 'a', type: 'subscription', monthly: 10, details: '' } as any])).toBe(120);
  });

  test('message template generation', () => {
    expect(cancellationTemplate('Gym')).toContain('Gym');
  });
});
