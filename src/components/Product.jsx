import React from "react";
import TableProduct from "./tableProduct";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
const Product = () => {
    return (
        <div className="Product">
            <TableProduct
                id='1'
                name='Việt'
                delete={<DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />}
                fix={<FormOutlined style={{ color: '#096dd9', cursor: 'pointer' }} />}
            />
        </div>
    )
}

export default Product;