import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (options = { duration: 1000, offset: 100 }) => {
  useEffect(() => {
    AOS.init(options);
  }, [options]);
};

export default useAOS;
