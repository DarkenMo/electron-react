import {
    FaMoon,
    FaSun,
  } from 'react-icons/fa';
  import useDarkMode from '../../hooks/useDarkMode';
  
  const TopNavigation = () => {
    return (
      <div className='top-navigation'>
        <ThemeIcon />
      </div>
    );
  };
  
  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };
  export default TopNavigation;