import './tradeLicense.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Sidebar from '../../sidebar/Sidebar';
import swal from 'sweetalert';
import TradeLicenseWidget from '../../widget/TradeLicenseWidget';
import { host } from '../../../host';


const TradeLicense = () => {



    const { nid } = useParams();

    const [isPrint, setisPrint] = useState(false)

    const [citizen, setCitizen] = useState({});

    useEffect(() => {
        const url = `${host}/citizen/${nid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCitizen(data[0]))

    }, [nid])

    document.title = `Trade License of ${citizen.name}`

    const [tradeLicense, setTradeLicense] = useState({});


    useEffect(() => {
        const url = `${host}/tradeLicense`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTradeLicense(data)
            })

    }, [])


    const [tradeInfo, setTradeInfo] = useState({
        organizationName: '',
        businessType: '',
        licenseFee: '',
    });



    const currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    if (currentMonth < 7) {
        currentYear = currentYear - 1
    };

    const financialYear = `${currentYear}-${currentYear + 1}`;

    const { nameBn, father, mother, village } = citizen;

    const issuedDate = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`

    const handleOnChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setTradeInfo({ ...tradeInfo, [name]: value })


    }

    const tradeLicenseNo = `KTL${new Date().getFullYear()}-${tradeLicense.length + 1}`


    const onClickTrade = (e) => {
        const { organizationName, businessType, licenseFee } = tradeInfo;

        if (organizationName.length > 5 && businessType.length > 5 && licenseFee.length > 2) {
            const licenseInfo = {
                tradeLicenseNo: tradeLicenseNo,
                nid: citizen.nid,
                organizationName: organizationName,
                businessType: businessType,
                licenseFee: licenseFee,
                financialYear: financialYear,
                issuedDate: issuedDate,
                nameBn: citizen.nameBn,
                village: citizen.village,
                father: citizen.father,
                mother: citizen.mother,
                image: citizen.image


            }
            fetch(`${host}/addTradeLicense`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(licenseInfo)
            }).then(res => res.json())
                .then(data => {
                    if (data.insertedCount === 1) {
                        swal("ধন্যবাদ!", ` ${citizen.nameBn} এর ব্যবসায়ের লাইসেন্স সফল ভাবে তৈরি হয়েছে`, "success");
                    } else {
                        swal("দুঃখিত!", `  কোন একটি সমস্যা হয়েছে, আবার চেষ্টা করুন `, "warning");
                    }
                })

            setisPrint(true)
        } else {
            swal("দুঃখিত!", `  খালি ঘর গুলো সঠিক ভাবে পূরণ করুন `, "warning");
        }

        e.preventDefault()


    }



    return (
        <>
            <div className='tradeLicense'>
                <Sidebar />
                <div className="tradeContainer">
                    <Navbar />
                    {isPrint ?

                        <TradeLicenseWidget citizen={citizen} tradeInfo={tradeInfo} tradeLicenseNo={tradeLicenseNo}
                            issuedDate={issuedDate} financialYear={financialYear}
                        />


                        :


                        <div className="tradeLicenseContainer">
                            <h2 style={{ padding: '20px', marginRight: '40px' }}>ফরমটি পূরণ করুন</h2>
                            <form action="">
                                <div className="userInfo">
                                    <div>লাইসেন্স প্রাপকের নামঃ {nameBn}</div>
                                    <div>পিতার নামঃ {father}</div>
                                    <div>মাতার নামঃ {mother}</div>
                                    <div>গ্রামঃ {village}</div>

                                </div>
                                <label htmlFor="">প্রতিষ্ঠানের নামঃ</label>
                                <input className='inputBox' name='organizationName' onChange={handleOnChange} type="text" placeholder='প্রতিষ্ঠানের নাম' required />
                                <label htmlFor="">ব্যবসার ধরণঃ</label>
                                <input className='inputBox' name='businessType' onChange={handleOnChange} type="text" placeholder='ব্যবসার ধরণ' required />
                                <label htmlFor="">লাইসেন্স ফিঃ</label>
                                <input className='inputBox' name='licenseFee' onChange={handleOnChange} type="text" placeholder='লাইসেন্স ফি' required />
                                <label htmlFor="">অর্থবছরঃ</label>
                                <input className='inputBox' onChange={handleOnChange} value={financialYear} type="text" placeholder='' required />
                                <button className='licenseCreateButton' onClick={onClickTrade} > লাইসেন্স তৈরি করুন</button>
                            </form>
                        </div>
                    }

                </div>

            </div>

        </>
    );
};

export default TradeLicense;