import React, { useState } from 'react';
import './new.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { host } from '../../host';
import uploader from '../../photo/upload.png'




const New = () => {

    document.title = `New Citizen Add Page Of Kalikaccha Union Parishad `


    const [imageUrl, setImageUrl] = useState(uploader);

    const [uploadPercentage, setUploadPercentage] = useState(0);


    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        fullName: "",
        fullNameBn: '',
        fatherNameBn: '',
        motherNameBn: '',
        nidNumber: '',
        dateOfBirth: '',
        phoneNumber: '',
        village: '',
        holding: '',
        wordNo: '',
        holdingNo: '',
        familyMember: '',
        houseType: '',
        totalTaxPaid: 0,
        currentTaxStatus: 210

    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;



        setUserData({ ...userData, [name]: value })

    }




    const handleSubmit = (e) => {
        e.preventDefault();

        const { wordNo, fullName, fullNameBn, fatherNameBn, motherNameBn, nidNumber, dateOfBirth, phoneNumber, village, holding, holdingNo, familyMember, houseType, totalTaxPaid, currentTaxStatus } = userData;

        if (imageUrl.length !== 0 && wordNo.length !== 0 && fullName.length !== 0 && fullNameBn !== 0 && motherNameBn.length !== 0 && nidNumber.length !== 0 && dateOfBirth.length !== 0 && village.length !== 0 && holding.length !== 0 && holdingNo.length !== 0 && familyMember.length !== 0 && houseType.length !== 0) {
            if (nidNumber.length === 10 || nidNumber.length === 13 || nidNumber === 17) {
                if (phoneNumber.length === 11) {
                    const citizenDataToSubmit = {
                        nameBn: fullNameBn,
                        name: fullName,
                        father: fatherNameBn,
                        mother: motherNameBn,
                        nid: nidNumber,
                        dob: dateOfBirth,
                        phone: phoneNumber,
                        village: village,
                        holding: holding,
                        holdingNo: holdingNo,
                        familyMember: familyMember,
                        house: houseType,
                        paidTax: totalTaxPaid,
                        current: currentTaxStatus,
                        image: imageUrl


                    }
                    fetch(`${host}/addCitizen`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(citizenDataToSubmit)
                    }).then(res => res.json())
                        .then(data => {
                            if (data.insert === 1) {
                                swal("ধন্যবাদ!", `আপনি ${fullNameBn} কে সফল ভাবে যুক্ত করেছেন`, "success");


                                navigate('/');


                            } else {
                                swal("দুঃখিত!", `  ${nidNumber} আইডি নাম্বার টি অথবা ${holdingNo} হোল্ডিং নাম্বার আগে  থেকেই সিস্টেমে যুক্ত আছে।  আবার চেষ্টা করুন `, "warning");
                            }

                        })
                } else {
                    Swal.fire({
                        icon: 'failed',
                        title: 'মোবাইল নাম্বার ভূল হয়েছে, সঠিক নাম্বারটি লিখুন',
                        showConfirmButton: true,
                    })
                }
            } else {
                Swal.fire({
                    icon: 'failed',
                    title: 'আইডি নাম্বার সঠিকভাবে লিখুন',
                    showConfirmButton: true,
                })
            }
        } else {
            Swal.fire({
                icon: 'failed',
                title: 'কোন তথ্য খালি রাখা যাবে না, সব গুলো তথ্য প্রদান করুন',
                showConfirmButton: true,
            })
        }

    };




    const handleImgUpload = event => {

        const image = event.target.files[0];
        const imagefile = event.target;


        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;


        if (!allowedExtensions.exec(imagefile.value)) {
            Swal({
                title: "Your file is not a photo",
                text: "Select a photo",
                icon: "warning",
                button: "Okay!",
            });

            imagefile.value = "";
        }


        if (image.size > 500000) {
            Swal({
                title: "Your file is big",
                text: "Select A small size file!",
                icon: "warning",
                button: "Okay!",

            });
            imagefile.value = "";
        }


        else {
            uploadImage(image)
        }

    }



    const uploadImage = (image) => {

        const imageData = new FormData();
        imageData.set('key', 'b24984d25dcce8d78b7e6427dade3d03')
        imageData.append('image', image);


        const options = {
            onUploadProgress: (ProgressEvent) => {
                const { loaded, total } = ProgressEvent;
                let percent = Math.floor((loaded * 100) / total)

                if (percent < 100) {
                    setUploadPercentage(percent)
                }
            }
        }

        axios.post('https://api.imgbb.com/1/upload', imageData, options)
            .then(response => {
                setImageUrl(response.data.data.display_url);
                setUploadPercentage(100, () => {
                    setTimeout(() => {
                        setUploadPercentage(0);
                    }, 1000);
                })
            })
            .catch(err => {
            });
    }




    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add New Citizen</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={imageUrl} alt="profile" />
                        {
                            uploadPercentage > 0 &&
                            <div class="progress" style={{ marginBottom: '15px' }}>
                                <div class={"progress-bar progress-bar-striped " + (uploadPercentage > 80 ? 'bg-success' : 'bg-danger')} role="progressbar" style={{ width: uploadPercentage + '%' }} aria-valuenow={uploadPercentage} aria-valuemin="0" aria-valuemax="100">{uploadPercentage}%</div>
                                <br /><br />
                            </div>
                        }

                    </div>
                    <div className="right">
                        <form method='POST'>

                            <div className="formInput">
                                <label htmlFor="profileImage">ছবি আপলোড করুন</label>
                                <input onChange={handleImgUpload} name='profileImage' id='profileImage' type="file" />
                            </div>

                            <div className="formInput">
                                <label htmlFor="fullName"> নাগরিকের নাম (ইংরেজি) </label>
                                <input onChange={handleInput} name='fullName' id='fullName' type="text" placeholder='Murshed Al Main' />
                            </div>

                            <div className="formInput">
                                <label htmlFor="fullNameBn"> নাগরিকের নাম (বাংলা) </label>
                                <input onChange={handleInput} type="text" name='fullNameBn' id='fullNameBn' placeholder='মোর্শেদ আল মাঈন' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="nidNumber">জাতীয় পরিচয়পত্র নাম্বার </label>
                                <input onChange={handleInput} type="number" name='nidNumber' id='nidNumber' placeholder='1219428.....' />
                            </div>

                            <div className="formInput">
                                <label htmlFor="fatherNameBn">পিতার নাম </label>
                                <input onChange={handleInput} type="text" name='fatherNameBn' id='fatherNameBn' placeholder='মাঞ্জু মিয়া' />
                            </div>

                            <div className="formInput">
                                <label htmlFor="motherNameBn">মাতার নাম </label>
                                <input onChange={handleInput} type="text" name='motherNameBn' id='motherNameBn' placeholder='নেকজান বেগম' />
                            </div>

                            <div className="formInput">
                                <label htmlFor="dateOfBirth">জন্ম তারিখ লিখুন </label>
                                <input onChange={handleInput} type="date" name='dateOfBirth' id='dateOfBirth' placeholder='01/04/1997' />
                            </div>


                            <div className="formInput">
                                <label htmlFor="phoneNumber">মোবাইল নাম্বার </label>
                                <input onChange={handleInput} type="phone" name='phoneNumber' id='phoneNumber' placeholder='01781981486' />
                            </div>


                            <div className="formInput">
                                <label htmlFor="village">গ্রামঃ </label>
                                <input onChange={handleInput} type="text" name='village' id='village' placeholder='চাকসার' />
                            </div>


                            <div className="formInput">
                                <label htmlFor="holding">হোল্ডিংঃ </label>
                                <input onChange={handleInput} type="text" name='holding' id='holding' placeholder='দৌলতপাড়া' />
                            </div>


                            <div className="formInput">
                                <label htmlFor="holdingNo">হোল্ডিং নাম্বারঃ </label>
                                <input onChange={handleInput} type="number" name='holdingNo' id='holdingNo' placeholder='220' />
                            </div>

                            <div className="formInput">
                                <label htmlFor="wordNo">ওয়ার্ড নাম্বারঃ </label>
                                <input onChange={handleInput} type="number" name='wordNo' id='wordNo' placeholder='3' />
                            </div>


                            <div className="formInput">
                                <label htmlFor="familyMember">পরিবারের সদস্য </label>
                                <input onChange={handleInput} type="number" name='familyMember' id='familyMember' placeholder='5' />
                            </div>


                            <div className="formInput">
                                <label htmlFor="houseType">ঘরের ধরণ </label>
                                <select onChange={handleInput} name="houseType" id="houseType" >
                                    <option value="Not Define">একটি সিলেক্ট করুন</option>
                                    <option value="পাকা">পাকা</option>
                                    <option value="টিনসেট">টিনসেট</option>
                                    <option value="কাচা">কাচা</option>
                                </select>
                            </div>

                            <button type='submit' onClick={handleSubmit}>সাবমিট</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;