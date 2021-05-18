import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonaldChart from "components/DonaldChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary">Dashboard de vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secundary">Taxa de sucesso(%)</h5>
                        <BarChart />
                        <div className="row px-3">
                            <div className="col-sm-6">
                                <h5 className="text-center text-secundary">Taxa de sucesso(%)</h5>
                                <DonaldChart />

                            </div>
                        </div>


                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas vendas</h2>
                </div>




                <DataTable />

            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
