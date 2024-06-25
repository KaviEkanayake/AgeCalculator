function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }
    

    const dobDate = new Date(dob);
    const today = new Date();

    let year, month, date;

    let monthN = today.getMonth() - 1;
    let dateN = today.getDate() + 30;
    let monthA = today.getMonth() + 12;
    let yearN = today.getFullYear() - 1;
    let monthNE = monthN + 12;
    

    // Calculate age
    if(today.getFullYear() < dobDate.getFullYear()){
        alert('You have entered a future date. Please enter a valid date of birth.');
        return;
    }
    if (today.getMonth() >= dobDate.getMonth() && today.getDate() >= dobDate.getDate()) {
        year = today.getFullYear() - dobDate.getFullYear();
        month = today.getMonth() - dobDate.getMonth();
        date = today.getDate() - dobDate.getDate();
       
    } 
    else if (dobDate.getMonth() < today.getMonth() && dobDate.getDate() > today.getDate()) {
        year = today.getFullYear() - dobDate.getFullYear();
        month = monthN - dobDate.getMonth();
        date = dateN - dobDate.getDate();
         
    }
    else if (dobDate.getMonth() == today.getMonth() && dobDate.getDate() > today.getDate()){
        year = yearN - dobDate.getFullYear();
        month = monthNE - dobDate.getMonth();
        date = dateN - dobDate.getDate();
       
    }
    else if (dobDate.getMonth() > today.getMonth() && dobDate.getDate() <= today.getDate()){
        year = yearN - dobDate.getFullYear();
        month = monthA - dobDate.getMonth();
        date = today.getDate() - dobDate.getDate();
        
    }
    else if (dobDate.getMonth() > today.getMonth() && dobDate.getDate() > today.getDate()){
        year = yearN - dobDate.getFullYear();
        month = monthNE - dobDate.getMonth();
        date = dateN - dobDate.getDate();
        
    } 
    
    
    document.getElementById('year').innerText =  year+'  Year ' ;
    document.getElementById('month').innerText = month+'  Month ' ;
    document.getElementById('day').innerText =  date+'  Day ' ;
}




