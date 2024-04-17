import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  useEffect(() => {
    scheduleDailyNotification();
  }, []);

  async function scheduleDailyNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bom dia!",
        body: 'Não se esqueça de lavar a careca.',
      },
      trigger: {
        hour: 11, // Defina a hora desejada para a notificação (no formato de 24 horas)
        minute: 45, // Defina os minutos desejados para a notificação
        repeats: true, // Notificação será repetida diariamente
      },
    });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notificação diária será agendada automaticamente!</Text>
    </View>
  );
}
