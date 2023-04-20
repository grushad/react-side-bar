import { styled } from '@mui/material/styles';
import { SideBar } from './side-bar';

const LayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingLeft: 250 //width of side bar
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: 250 //width of side bar
    // }
  }));
  
  const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%'
  });

  
  export const Layout = ((props) => {
    const { children } = props;    
    return (
      <>        
        <SideBar/>                
        <LayoutRoot>
          <LayoutContainer>
            {children}
          </LayoutContainer>
        </LayoutRoot>
      </>
    );
  });
  