import prismadb from "@/lib/prismadb";
import React from "react";

interface DashboardPageProps {
    params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
        },
    });

    return (
        <div>
            <div>Dashboard</div>
            <div>Store active : {store?.name}</div>
        </div>
    );
};

export default DashboardPage;
