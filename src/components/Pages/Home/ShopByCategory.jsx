import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCategoryDetails from './ShopCategoryDetails';

const ShopByCategory = () => {
    const [datas, setDatas] = useState([]);
    const [title, setTitle] = useState('truck');

    useEffect(() => {
        fetch(`https://toy-marketplace-server-gold.vercel.app/shopCategory/${title}`)
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [title])
    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            <h2 className="text-center text-6xl font-bold text-gray-700 mt-24 mb-16">Shop By Category</h2>
            <Tabs>
                <TabList className='flex justify-center border-b-2'>
                    <Tab><button onClick={() => setTitle('truck')} className='btn w-28'>Truck</button></Tab>
                    <Tab><button onClick={() => setTitle('car')} className='btn w-28'>car</button></Tab>
                    <Tab><button onClick={() => setTitle('bus')} className='btn w-28'>bus</button></Tab>
                </TabList>
                <TabPanel >
                    <div className='md:flex md:gap-12 mt-8'>
                        {
                            datas.map(data => <ShopCategoryDetails key={data._id} data={data}></ShopCategoryDetails>)
                        }
                    </div>
                </TabPanel>
                <TabPanel >
                    <div className='md:flex md:gap-12 mt-8'>
                        {
                            datas.map(data => <ShopCategoryDetails key={data._id} data={data}></ShopCategoryDetails>)
                        }
                    </div>
                </TabPanel>
                <TabPanel >
                    <div className='md:flex md:gap-12 mt-8'>
                        {
                            datas.map(data => <ShopCategoryDetails key={data._id} data={data}></ShopCategoryDetails>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;