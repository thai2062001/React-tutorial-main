import React, { useState } from 'react';
import Header from '../DefaultLayout/Header/Header';
import SiderLayout from '../DefaultLayout/Sider/SiderLayout';
import TableLayout from '../DefaultLayout/Table/TableLayout';
import Search from '../DefaultLayout/Search/Search';
import Revenue from '../DefaultLayout/revenue/revenue';
import Overview from '../DefaultLayout/Overview/Overview';
import './DashBoard.css'
import { Col, MenuProps, Row, Table } from 'antd';
import { Layout, theme } from 'antd';
const { Content } = Layout;
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  type MenuItem = Required<MenuProps>['items'][number];
  function getItem(
    label: React.ReactNode,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
        icon,
        children,
        label,
    } as MenuItem;
  }
  const items: MenuItem[] = [
      getItem(<PieChartOutlined style={{fontSize:20}} />),
      getItem(<DesktopOutlined style={{fontSize:20}} />),
      getItem(<UserOutlined style={{fontSize:20}} />, [
  
      ]),
  ];
  
const DashBoard= () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Row  >
            <SiderLayout name='DTD' item={items} />
            </Row>
            <Layout className="site-layout">
                <Header version='Version 1.0.0' name='Phạm Bá Thái' />
                <Content style={{ margin: '0 16px' }}>
                    <Row style={{ marginLeft: 20, marginBottom:20 }}>
                        <Col span={10} style={{ textAlign: 'left',alignItems:'center', display: 'flex', flexDirection: 'row' }}>
                            <h3>DashBoard</h3>
                            <Row style={{width:200,height:40,borderRadius:100,marginLeft:20}}><Search title='Tìm kiếm ....'/></Row>
                        </Col>
                    </Row>  
                    <Row>
                        <Col style={{marginLeft:10}}>
                        <Revenue revenue='Doanh thu ngày'  />
                        </Col>
                        <Col style={{marginLeft:20}}>
                        <Overview overview='Tổng quan' />
                        </Col>
                        
                    </Row>
                    <Col style={{marginTop:40}} span={50}>
                        <h3 style={{textAlign:'left'}}>Booking List</h3>
                    <TableLayout/>;
                    </Col>
                </Content>
            </Layout>
        </Layout>
    );
}
export default DashBoard;


