export const rowsColumns = [
    { field: 'id', headerName: 'ID', width: 40 },
    {
        field: 'image', headerName: 'ছবি', width: 60,

        renderCell: (params) => {
            return (
                <div className="imageCell" >
                    <img className="cellImagephoto" src={params.row.image} alt="avatar" />
                </div >
            )
        }
    },
    { field: 'fullNameBn', headerName: 'নাম বাংলা', width: 150 },
    { field: 'fatherNameBn', headerName: 'পিতার নাম', width: 150, },
    { field: 'motherNameBn', headerName: 'মাতার নাম', width: 120, },
    { field: 'phoneNumber', headerName: 'মোবাইল নাম্বার', width: 120, },
    { field: 'holding', headerName: 'পাড়া', width: 100, },




];



export const cetizenData = [
    {
        id: 1,
        fullName: 'Murshed Al Main',
        fullNameBn: 'মোর্শেদ আল মাঈন',
        fatherNameBn: 'মাঞ্জু মিয়া',
        motherNameBn: 'নেকজান বেগম',
        dateOfBirth: '01/04/1997',
        image: 'https://murshedkoli-portfolio.web.app/static/media/murshedalmain.20bae363.jpg',
        phoneNumber: '01781981486',
        village: 'চাকসার',
        holding: 'দৌলতপাড়া',
        holdingNo: '220',
        wordNo: 3,
        familyMember: 7,
        houseType: 'পাকা',
        taxPaid: 210,
        lastTaxPayemnt: true,
    },
    {
        id: 2,
        fullName: 'Bashir Ullah',
        fullNameBn: 'বশির উল্লাহ',
        fatherNameBn: 'ক্বারী আমীর উল্লাহ',
        motherNameBn: 'মমতাজ বেগম',
        dateOfBirth: '01/04/1981',
        image: 'https://murshedkoli-portfolio.web.app/static/media/murshedalmain.20bae363.jpg',
        phoneNumber: '01765018854',
        village: 'চাকসার',
        holding: 'দৌলতপাড়া',
        holdingNo: '220',
        wordNo: 3,
        familyMember: 5,
        houseType: 'টিন',
        taxPaid: 210,
        lastTaxPayemnt: true,
    },
    {
        id: 3,
        fullName: 'Mahidul Islam',
        fullNameBn: 'মাহিদুল ইসলাম',
        fatherNameBn: 'সাইফুল ইসলাম',
        motherNameBn: 'জানানাই',
        dateOfBirth: '01/04/1998',
        image: 'https://murshedkoli-portfolio.web.app/static/media/murshedalmain.20bae363.jpg',
        phoneNumber: '01781981486',
        village: 'চাকসার',
        holding: 'দৌলতপাড়া',
        holdingNo: '220',
        wordNo: 3,
        familyMember: 7,
        houseType: 'টিন',
        taxPaid: 210,
        lastTaxPayemnt: true,
    },


];