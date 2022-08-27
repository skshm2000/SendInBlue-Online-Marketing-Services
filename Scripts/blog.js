import navbar from "../Components/exNavbar.js"
import footer from "../Components/exFooter.js"
import navbarworks from "../Components/navbarcontrols.js"
import navbarLogout from "../Components/navbarfunc.js"

document.querySelector('#navbar').innerHTML = navbar()
document.querySelector('#footer').innerHTML = footer();

document.getElementById("blog").style.textDecoration = "underline";
document.getElementById("blog").style.color = "#091e3f";
document.getElementById("blog").style.fontWeight = "600";

navbarworks()
navbarLogout()

let image = [
    'https://www.sendinblue.com/wp-content/uploads/2019/07/email_autoresponder-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2021/11/cheap_email_marketing-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2020/08/Best-email-marketing-services-ft-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2019/11/christmas_newsletter_ideas-min-1-768x299.png',
    'https://www.sendinblue.com/wp-content/uploads/2019/12/christmas_email_subject_lines-768x299.png',
    'https://www.sendinblue.com/wp-content/uploads/2020/07/onboarding_emails_ft-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2022/06/best_chatbot_software-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2021/11/Best_Live_Chat_Software-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2020/02/SMS_marketing-768x299.png',
    'https://www.sendinblue.com/wp-content/uploads/2019/05/email_automation-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2019/11/Holiday-email-marketing-strategy-min-768x299.png',
    'https://www.sendinblue.com/wp-content/uploads/2022/08/best_email_autoresponders-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2020/10/Giving-Tuesday-emails-ft-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2021/11/small-business-saturday-ideas_feature.png',
    'https://www.sendinblue.com/wp-content/uploads/2019/10/Black-Friday-subject-lines-ft.png',
    'https://www.sendinblue.com/wp-content/uploads/2022/08/WP-featured-image-2-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2018/02/Transactional_email_examples-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2022/08/WP-featured-image-1.png',
    'https://www.sendinblue.com/wp-content/uploads/2021/10/halloween-email-subject-lines_feature-image-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2019/10/Halloween_email_marketing-min-768x299.png',
    'https://www.sendinblue.com/wp-content/uploads/2022/06/live_chat_widget-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2021/08/Fall-newsletter-ideas-ft-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2022/07/instagram_dm_api-768x298.png',
    'https://www.sendinblue.com/wp-content/uploads/2022/07/facebook_messenger_for_business-768x298.png'
    

]

let text_heading = [
    'Whats an Email Autoresponder & How to Quickly Set One Up',
    '19 Best Cheap Email Marketing Services (September 2022)',
    'The Best Email Marketing Services Compared (September 2022)',
    '8 Christmas Newsletter Ideas & Examples to Wow Your Subscribers',
    '50 Holiday and Christmas Email Subject Lines for Higher Open Rates',
    '10 of the Best Onboarding Email Examples to Engage New Customers',
    '12 Best Chatbot Software in 2022 Compared',
    'The 11 Best Live Chat Software Compared (2022)',
    'SMS Marketing: Definition, Benefits, and Best Practices for Top Results',
    'Automated Emails: Benefits, Examples & Tips to Grow Your Business',
    '10 Holiday Email Marketing Strategies to Boost Sales',
    '9 Best Email Autoresponders in 2022 [Free and Paid] Reading time about 15 min',
    '10 Giving Tuesday Email Examples That’ll Make Your Donation Drive a Success',
    '11 Small Business Saturday Ideas to Give Your Business a Boost',
    '40 Black Friday & Cyber Monday Email Subject Lines to Boost Your Open Rate',
    'Christmas Email Marketing: Examples & Ideas to Captivate Customers',
    '9 Transactional Email Examples to Inspire You',
    'How to Add Live Chat to Your Website',
    '100 Halloween Email Subject Lines to Treat (Not Trick!) Your Readers',
    'Halloween Email Marketing: How to Make Monster Sales This Fall',
    '10 Best Live Chat Widgets for Your Website (Paid & Free)',
    'Our Best Fall Newsletter Ideas to Inspire Your New Season Emails',
    'Guide to Using Instagram Direct Messaging API for Business',
    'Guide to Using Facebook Messenger for Business'
    
]

let conatiner_articles = document.querySelector('#articles');
conatiner_articles.innerHTML = '';

let data = [];

function dataCreate() {

    for (let i = 0; i < image.length; i++) {
        let obj = {
            image: image[i],
            date: Math.floor(Math.abs((Math.random() * (30-1+1) + 1))),
            text_heading: text_heading[i],
            reading_time: Math.floor(Math.abs((Math.random() * (15-7+1) + 7))),
        }
        data[i] = obj;
    }
}

let append = (data) => {

    conatiner_articles.innerHTML = '';
    data.forEach(element => {
        let div = document.createElement('div');

        let card_image = document.createElement('div');
        card_image.setAttribute('id','card_image')

        let img = document.createElement('img');
        img.src = element.image;

        let card_info = document.createElement('div');
        card_info.setAttribute('id','card_info');

        let date = document.createElement('p');
        date.innerText = 'August ' + element.date + " 2022"
        date.setAttribute('id','card-date')

        let h3 = document.createElement('h3');
        h3.innerText = element.text_heading;
        h3.setAttribute('id','card-heading');

        let reading_time = document.createElement('p');
        reading_time.innerText = "🕓 Reading time about " + element.reading_time + " min";
        reading_time.setAttribute('id','card-reading-time');

        div.append(card_image,card_info);
        card_image.append(img)
        card_info.append(date,h3,reading_time)
        conatiner_articles.append(div)
    });
}
let limit = 6;

let initialAppend = (data) => {
    let initial_data=[];
    for(let i=0; i<limit; i++){
        initial_data.push(data[i]);
    }
    append(initial_data)
}



function showButtons(data) {

    let show_buttons =document.querySelector('#show_buttons');
    showButtons.innerHTML='';
    let n = Math.ceil(data.length/limit);
    for(let i=1; i<=n; i++){
        let button = document.createElement('button');
        button.innerText=i;
        button.setAttribute('id',"paginate_button")

        button.addEventListener('click',function() {
            pagination(data,i,limit);
            buttonDecoration(i,data,limit)
        })
        show_buttons.append(button)

    }
}

let pagination =(data,page_no,limit) => {
    let new_data = [];
    for(let i=((page_no-1)*limit); i<(((page_no-1)*limit)+limit); i++){
        new_data.push(data[i])
    }
    console.log('end')
    append(new_data)
}


dataCreate()
showButtons(data)
initialAppend(data)

function buttonDecoration(page_no,data,limit) {

    let buttons = document.querySelectorAll('#paginate_button')
    let n = Math.ceil(data.length/limit);
    for(let i=1; i<=n; i++){
        if(buttons[i-1].innerText==page_no) {
            buttons[i-1].style.backgroundColor = "#044a75";
            buttons[i-1].style.color = "#fff";
        } else {
            buttons[i-1].style.background= "none";
            buttons[i-1].style.color = "#606469";
        }
    }
}

document.querySelector('#paginate_button').style.backgroundColor ="#044a75";
document.querySelector('#paginate_button').style.color = "#fff";