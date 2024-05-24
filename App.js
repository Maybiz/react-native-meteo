import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Home from './pages/Home/Home'
import { ImageBackground } from 'react-native'
import backgroundImage from './assets/background.png'

export default function App() {
	return (
		<ImageBackground source={backgroundImage} className="flex-1 bg-black" imageStyle={{ opacity: 0.75 }}>
			<SafeAreaProvider>
				<SafeAreaView className="flex-1">
					<Home />
				</SafeAreaView>
			</SafeAreaProvider>
		</ImageBackground>
	)
}
