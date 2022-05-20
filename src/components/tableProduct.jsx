import React, { useState } from "react";
import { Table, Button } from "antd";
import "antd/dist/antd.css";

const TableProduct = (props) => {
    const dataSource = [
        {
            key: '1',
            id: props.id,
            name: props.name,
            delete: props.delete,
            fix: props.fix,
        },
        {
            key: '2',
            id: props.id,
            name: props.name,
            delete: props.delete,
            fix: props.fix,
        },
        {
            key: '3',
            id: props.id,
            name: props.name,
            delete: props.delete,
            fix: props.fix,
        },
        {
            key: '3',
            id: props.id,
            name: props.name,
            delete: props.delete,
            fix: props.fix,
        },
    ];

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'delete',
        },
        {
            title: 'Fix',
            dataIndex: 'fix',
            key: 'option',
        },
    ];
    const [data, setdata] = useState()
    return (
        <div style={{ height: " calc(100vh- 60px)", padding: '0px 40px' }}>
            <label>
                <h2>
                    Product
                </h2>
            </label>
            <div className="" style={{ float: 'left', padding: '20px 0' }}>
                <Button type="primary">Thêm</Button>
            </div>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    )
}

export default TableProduct;