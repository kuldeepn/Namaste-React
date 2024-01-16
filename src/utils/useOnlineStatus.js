const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    onlineStatus();
  }, []);

  const onlineStatus = () => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  };

  return isOnline;
};

export default useOnlineStatus;
