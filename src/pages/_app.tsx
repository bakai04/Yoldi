import '@/assets/styles/globals.css'
import Header from "@/components/Header/Header"
import { Inter } from "@next/font/google"
import type { AppProps } from 'next/app'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  )
}
