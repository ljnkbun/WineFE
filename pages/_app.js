import { Provider } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components//footer/Footer';
import store from '../redux/store';
import '../styles/globals.css';    
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
