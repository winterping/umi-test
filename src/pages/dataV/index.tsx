import React from 'react';
import { Card } from 'antd';
import { Loading, FullScreenContainer, PercentPond ,ActiveRingChart} from '@jiaminghi/data-view-react'

const config = {
    value: 60,
}
const DataV: React.FC = () => {
    return (
        // <FullScreenContainer>
        //     <div style={{width:'100%',height:'100%',background:"#aabbcc"}}>
        //         ddd
        //     </div>
        // </FullScreenContainer>
        <Card style={{ minHeight: '90vh' ,background:'#aabbcc'}}>
            <PercentPond config={config} style={{ width: '200px', height: '100px' }} />
            <ActiveRingChart config={{
                 data: [
                    {
                      name: '周口',
                      value: 55
                    },
                    {
                      name: '南阳',
                      value: 120
                    },
                    {
                      name: '西峡',
                      value: 78
                    },
                    {
                      name: '驻马店',
                      value: 66
                    },
                    {
                      name: '新乡',
                      value: 80
                    }
                  ]
            }} style={{ width: '300px', height: '300px'}} />
        </Card>
    )
}


export default DataV;