import React, { useRef, useEffect } from 'react'
import { Card, Col, Row } from 'antd'

import PictorialBar from './components/PictorialBar'
import Bar from './components/Bar'
import BarGradient from './components/BarGradient'
import Map from './components/Map'
import Earth from './components/Earth'
import MapOne from './components/MapOne'
import MapXm from './components/MapXm'

const Echart: React.FC = () => {
    return (
        <Card style={{ minHeight: '80vh' }}>
            <Row gutter={48}>
                <Col span={12}>
                    <PictorialBar />
                </Col>
                <Col span={12}>
                    <Bar />
                </Col>
            </Row>
            <Row gutter={48} style={{ marginTop: 20 }}>
                <Col span={12}>
                    <BarGradient />
                </Col>
                <Col span={12}>
                    <Map />
                </Col>
            </Row>
            <Row gutter={48} style={{ marginTop: 20 }}>
                <Col span={12}>
                    <MapOne />
                </Col>
                <Col span={12}>
                    {/* <MapXm /> */}
                </Col>
            </Row>
        </Card>
    )
}
export default Echart;
