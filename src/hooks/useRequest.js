import {useEffect} 'react-redux';

const useRequest = (request, data) => {
  useEffect(() => {
    if (!data) {
      request();
    }
  }, [request, data])
}

export default useRequest;
