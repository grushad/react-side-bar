import { Layout as DashboardLayout } from '../components/dashboard/layout';

const HomePage = () => {
    return(
    <>
         <DashboardLayout>
            <h1> Home </h1>
        </DashboardLayout>
    </>
    );
};

// HomePage.getLayout = (page) =>(    
//     <DashboardLayout>
//         {page}
//     </DashboardLayout>    
// );

export default HomePage;