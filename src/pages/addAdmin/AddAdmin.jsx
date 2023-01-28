import React, { useState } from 'react';
import './addAdmin.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { host } from '../../host';
import uploader from '../../photo/upload.png'



const AddAdmin = () => {

    document.title = `New Admin Add Page of Kalikaccha Union Parishad `


    const [imageUrl, setImageUrl] = useState(uploader);

    const [uploadPercentage, setUploadPercentage] = useState(0);


    const navigate = useNavigate();

    const [adminData, setAdminData] = useState({
        fullName: "",
        fullNameBn: '',
        fatherNameBn: '',
        motherNameBn: '',
        nidNumber: '',
        dateOfBirth: '',
        phoneNumber: '',

    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;



        setAdminData({ ...adminData, [name]: value })

    }




    const handleSubmit = (e) => {
        e.preventDefault();

        const { fullName, fullNameBn, fatherNameBn, motherNameBn, nidNumber, dateOfBirth, phoneNumber, password } = adminData;

        if (password.length !== 0 && imageUrl.length !== 0 && fullName.length !== 0 && fullNameBn !== 0 && motherNameBn.length !== 0 && nidNumber.length !== 0 && dateOfBirth.length !== 0) {
            if (nidNumber.length === 10 || nidNumber.length === 13 || nidNumber === 17) {
                if (phoneNumber.length === 11) {
                    const adminDataToSubmit = {
                        nameBn: fullNameBn,
                        name: fullName,
                        father: fatherNameBn,
                        mother: motherNameBn,
                        nid: nidNumber,
                        dob: dateOfBirth,
                        phone: phoneNumber,
                        isAdmin: true,
                        image: imageUrl,
                        password: password


                    }
                    fetch(`${host}/addAdmin`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(adminDataToSubmit)
                    }).then(res => res.json())
                        .then(data => {
                            if (data.insert === 1) {
                                swal("ধন্যবাদ!", `আপনি ${adminData.fullNameBn} কে সফল ভাবে যুক্ত করেছেন`, "success");


                                navigate('/');


                            } else {
                                swal("দুঃখিত!", ` ${adminData.fullNameBn} আগে  থেকেই সিস্টেমে যুক্ত আছেন `, "warning");
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
                    <h1>Add New Admin</h1>
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
                                <label htmlFor="profileImage">Upload Image</label>
                                <input onChange={handleImgUpload} name='profileImage' id='profileImage' type="file" />
                            </div>

                            <div className="formInput">
                                <label htmlFor="fullName">Full Name </label>
                                <input onChange={handleInput} name='fullName' id='fullName' type="text" placeholder='Murshed Al Main' />
                            </div>

                            <div className="formInput">
                                <label htmlFor="fullNameBn">Full Name Bn </label>
                                <input onChange={handleInput} type="text" name='fullNameBn' id='fullNameBn' placeholder='মোর্শেদ আল মাঈন' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="nidNumber">NID Number </label>
                                <input onChange={handleInput} type="number" name='nidNumber' id='nidNumber' placeholder='1219428.....' />
                            </div>

                            <div className="formInput">
                                <label htmlFor="fatherNameBn">Father's Name Bn </label>
                                <input onChange={handleInput} type="text" name='fatherNameBn' id='fatherNameBn' placeholder='মাঞ্জু মিয়া' />
                            </div>

                            <div className="formInput">
                                <label htmlFor="motherNameBn">Mother's Name Bn </label>
                                <input onChange={handleInput} type="text" name='motherNameBn' id='motherNameBn' placeholder='নেকজান বেগম' />
                            </div>

                            <div className="formInput">
                                <label htmlFor="dateOfBirth">Date Of Birth </label>
                                <input onChange={handleInput} type="date" name='dateOfBirth' id='dateOfBirth' placeholder='01/04/1997' />
                            </div>


                            <div className="formInput">
                                <label htmlFor="phoneNumber">Phone Number </label>
                                <input onChange={handleInput} type="phone" name='phoneNumber' id='phoneNumber' placeholder='01781981486' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="phoneNumber">Password  </label>
                                <input onChange={handleInput} type="number" name='password' id='password' placeholder='1234..' />
                            </div>



                            <button type='submit' onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;