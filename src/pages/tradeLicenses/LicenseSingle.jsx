import React from 'react';
import './tradeLicenseList.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { host } from '../../host';
import ReactToPrint from 'react-to-print';

const LicenseSingle = () => {
    document.title = 'Trade License List';
    const ref = useRef()


    const { lincesKey } = useParams();

    const [tradeLicense, setTradeLicense] = useState([])

    useEffect(() => {
        const url = `${host}/singleTradeLicense/${lincesKey}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTradeLicense(data[0]))

    }, [lincesKey])



    const { tradeLicenseNo, image, organizationName, businessType, licenseFee, issuedDate, financialYear, nameBn, father, mother, village } = tradeLicense;


    return (
        <div className='tradeLicensList'>
            <Sidebar />
            <div className="tradeListContainer">
                <Navbar />
                <div className="theListofTrade">

                    <div className='printableArea'>
                        <div className='printButton'>
                            <ReactToPrint trigger={() => <button>Print/ save</button>} content={() => ref.current} />
                        </div>
                        <div ref={ref} className="tradeLicensePrint">
                            <div className="licenseHeader">
                                <span>ইউ, পি ৭নং ফরম</span>
                                <span>[১২ (১) নং বিধান দ্রষ্টব্য]</span>
                            </div>
                            <div className="upName">০৪নং কালিকচ্ছ ইউনিয়ন পরিষদ</div>
                            <div className="upAddress">ডাকঘরঃ কালিকচ্ছ, উপজেলাঃ সরাইল, জেলাঃ ব্রাহ্মণবাড়িয়া</div>
                            <div className="logoAndPhoto">

                                <div className="upLogo">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/480px-BMW_logo_%28gray%29.svg.png" alt="" />
                                </div>
                                <div className="licenseTitle">ব্যবসা-বাণিজ্যের লাইসেন্স</div>



                            </div>
                            <div className="licenseNoWithYear">
                                <div className="licenseNo"> লাইসেন্স নংঃ {tradeLicenseNo}</div>
                                <div className="financialYear">অর্থবছরঃ {financialYear}</div>
                            </div>
                            <div className="licenseBody">
                                <div className="fullInfo">
                                    <div className="titleText">
                                        <div className="licenseText">প্রতিষ্ঠানের নামঃ </div>
                                        <div className="licenseText"> প্রাপকের নামঃ </div>
                                        <div className="licenseText">পিতার নামঃ  </div>
                                        <div className="licenseText">মাতার নামঃ  </div>
                                    </div>
                                    <div className="userInformation">
                                        <div className="licenseText"> {organizationName}</div>
                                        <div className="licenseText">   {nameBn}</div>
                                        <div className="licenseText"> {father} </div>
                                        <div className="licenseText"> {mother} </div>
                                    </div>
                                </div>


                                <div className="fixedAddress">
                                    <h2 className="addressTitle">স্থায়ী ঠিকানাঃ</h2>
                                    <div className="towColumn">
                                        <div className="licenseText">গ্রামঃ {village} </div>
                                        <div className="licenseText">ইউনিয়নঃ কালিকচ্ছ</div>

                                    </div>
                                    <div className="towColumn">

                                        <div className="licenseText">উপজেলাঃ সরাইল</div>
                                        <div className="licenseText">জেলাঃ ব্রাহ্মণবাড়িয়া</div>
                                    </div>
                                </div>
                                <div className="fixedAddress">
                                    <h2 className="addressTitle">বর্তমান ঠিকানাঃ</h2>
                                    <div className="towColumn">
                                        <div className="licenseText">গ্রামঃ {village} </div>
                                        <div className="licenseText">ইউনিয়নঃ কালিকচ্ছ</div>

                                    </div>
                                    <div className="towColumn">

                                        <div className="licenseText">উপজেলাঃ সরাইল</div>
                                        <div className="licenseText">জেলাঃ ব্রাহ্মণবাড়িয়া</div>
                                    </div>
                                </div>

                                <div className="licenseFee">
                                    <div className="businessType">ব্যবসায়ের ধরণঃ {businessType}</div>
                                    <div className="fee">লাইসেন্স ফিঃ {licenseFee} টাকা মাত্র </div>

                                </div>

                            </div>
                            <div className="licenseFooter">
                                <div className="meyad">প্রদান করায় তাহাকে এই লাইসেন্স মঞ্জুর করা হইল, বর্তমান আর্থিক বছরের জন্য বলবত থাকিবে।</div>
                                <div className="dateAndSign">
                                    <div className="date"> ইস্যুর তারিখঃ {issuedDate} ইং</div>
                                    <div className="chairmansign">
                                        চেয়ারম্যান <br />
                                        মোঃ ছায়েদ হোসেন
                                    </div>
                                </div>
                            </div>
                            <div className="userPhoto">
                                <img src={image} alt="লাইসেন্স প্রাপকের ছবি" />
                            </div>

                        </div>



                    </div>

                </div>
            </div>


        </div>
    );
};

export default LicenseSingle;