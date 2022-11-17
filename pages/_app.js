import Sidebar from '../components/sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='main_wrapper'>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
