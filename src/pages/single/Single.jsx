import React, { useEffect, useState } from 'react';
import './single.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table'
import { useParams } from 'react-router-dom';
import Services from '../../components/services/Services';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { host } from '../../host';
import TheList from '../tradeLicenses/TheList';




const Single = () => {

    const { nid } = useParams();

    const [ammountPaid, setAmmountPaid] = useState(0)

    const [citizen, setCitizen] = useState({});

    useEffect(() => {
        const url = `${host}/citizen/${nid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCitizen(data[0]))

    }, [nid, ammountPaid])


    const paidTaxButton = (nid, paidAmount, paidTax, current) => {

        const dataForSend = {
            due: parseInt(current) - parseInt(paidAmount),
            totalTax: parseInt(paidTax) + parseInt(paidAmount)
        }



        fetch(`${host}/paidTax/${nid}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForSend)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount === 1) {
                    swal("ধন্যবাদ!", ` ${citizen.nameBn} এর বর্তমান অর্থবছরের টেক্স সফলভাবে পরিশোধ হয়েছে`, "success");
                    setAmmountPaid(1);

                } else {
                    swal("দুঃখিত!", `  ${citizen.nameBn} এর বর্তমান অর্থবছরের টেক্স পরিশোধ হয়নি, আবার চেষ্টা করুন `, "warning");

                }
            })
    }


    const handlConfirm = (nid, current, paidTax) => {


        Swal.fire({
            title: 'টাকার পরিমান লিখুন',
            html: `<input type="number" id="paidAmmount" class="swal2-input" placeholder="টেক্স এর পরিমাণ">`,
            confirmButtonText: 'পরিশোধ করুন',
            focusConfirm: true,

            preConfirm: () => {
                const ammount = Swal.getPopup().querySelector('#paidAmmount').value
                if (!ammount) {
                    Swal.showValidationMessage(`সঠিক পরিমাণ বসান`)
                }
                const paidAmount = parseInt(ammount);
                paidTaxButton(nid, paidAmount, paidTax, current)
                return { ammount: paidAmount }
            }
        }).then((result) => {

            // Swal.fire(`
            //   ${name}'s Addmission Successful & Payment ${result.value.ammount} Was Added Successfully;`
            //     .trim())
        })


    }


    const [licenseWithNid, setLicenseWithNid] = useState([])

    useEffect(() => {
        const url = `${host}/licenseWithNid/${nid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLicenseWithNid(data))


    }, [nid])




    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />

                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src={citizen.image}
                                alt="profile" className='profileImage' />

                            <div className="details">
                                <div className="profileTitle">{citizen.nameBn}</div>
                                <div className="detailItem">
                                    <span className="itemKey">জন্ম তারিখঃ</span>
                                    <span className="itemValue">{citizen.dob}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">পিতাঃ</span>
                                    <span className="itemValue">{citizen.father}</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">মাতাঃ</span>
                                    <span className="itemValue">{citizen.mother}</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">আইডিঃ</span>
                                    <span className="itemValue">{citizen.nid}</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">মোবাইলঃ</span>
                                    <span className="itemValue">{citizen.phone}</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">গ্রামঃ </span><span className="itemValue">{citizen.village}</span>,
                                    <span className="itemKey">ওয়ার্ডঃ </span><span className="itemValue">{citizen.wordNo}</span>,
                                    <span className="itemKey">হোল্ডিং নংঃ </span><span className="itemValue">{citizen.holdingNo}</span>,
                                </div>


                                <div className="detailItem">
                                    <span className="itemKey">পরিবারের সদস্য সংখ্যাঃ </span><span className="itemValue">{citizen.familyMember}</span>,
                                    <span className="itemKey">বাড়ির ধরনঃ </span><span className="itemValue">{citizen.house}</span>,

                                </div>




                            </div>

                        </div>
                        <div className="tax">
                            <div className="taxTitle">টেক্স হিসাব</div>
                            <div className="taxArea">
                                <div className="paidTax">সর্বমোট পরিশোধিতঃ <span>{citizen.paidTax}</span></div>
                                <div className={citizen.current !== 0 ? ' notPaid' : 'paidTax'}> <span >{citizen.current !== 0 ? <button className='taxPayButton' onClick={() => handlConfirm(citizen.nid, citizen.current, citizen.paidTax)}>{citizen.current} টাকা বকেয়া পরিশোধ করুন</button> : 'চলমান অর্থবছরের টেক্স পরিশোধিত'}</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <Chart aspect={2 / 1} title="Citizen Paid Last 6 Month" />

                    </div>

                </div>
                <div className="bottom">
                    <div className="serviceList">
                        <h1 className="title">Services</h1>
                        {
                            citizen.current <= 0 ? <Services citizen={citizen} /> : <div className="notPaidTax">আপনার বর্তমান অর্থ বছরের টেক্স পরিশোধ করা হয়নি, তাই সেবা সমুহ আপনার জন্য প্রযোয্য নয়।</div>
                        }

                    </div>
                    <div className="list">
                        <h1 className="title">{citizen.nameBn} এর ট্রেড লাইসেন্স সমূহ</h1>

                        <TheList tradeLicenses={licenseWithNid} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;