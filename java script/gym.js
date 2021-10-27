var aboutUsButton=document.getElementById("aboutUsButton"),
    learnMore=document.getElementById("learnMore"),
    home=document.getElementById("home"),
    classesButton=document.getElementById("classesButton"),
    schedulesButton=document.getElementById("schedulesButton"),
    contactButton=document.getElementById("contactButton"),
    member=document.getElementById("member"),
    membership=document.getElementById("membership"),
    close=document.getElementById("close"),
    getstarted=document.getElementById("getstarted");
    
/*      pressing on home   */
home.onclick=function()
{
    var i=scrollY,
        animation=setInterval(function()
{
    if (i<=0) {
        clearInterval(animation);
    }
    i-=10;
    window.scrollTo(0,i);
},1);
};
/*      pressing on about us   */
aboutUsButton.onclick=function()
{
    var i=scrollY,
        animation;
    if (i>1252.4444580078125) {
        animation=setInterval(function()
        {
            if (i<=1252.4444580078125) {
                clearInterval(animation);
            }
            i-=10;
            window.scrollTo(0,i);
        },1);
    }
    else if (i<1252.4444580078125) {
        animation=setInterval(function()
        {
            if (i>=1252.4444580078125) {
                clearInterval(animation);
            }
            i+=10;
            window.scrollTo(0,i);
        },1);
    }
    window.scrollTo(0,1252.4444580078125);
};
/*      pressing on learn more   */
learnMore.onclick=function()
{
    var i=scrollY,
        animation;
    if (i>1280) {
        animation=setInterval(function()
        {
            if (i<=1280) {
                clearInterval(animation);
            }
            i-=10;
            window.scrollTo(0,i);
        },1);
    }
    else if (i<1280) {
        animation=setInterval(function()
        {
            if (i>=1280) {
                clearInterval(animation);
            }
            i+=10;
            window.scrollTo(0,i);
        },1);
    }
    window.scrollTo(0,1280);
};
getstarted.onclick=function()
{
    var i=scrollY,
        animation;
    if (i>660) {
        animation=setInterval(function()
        {
            if (i<=660) {
                clearInterval(animation);
            }
            i-=10;
            window.scrollTo(0,i);
        },1);
    }
    else if (i<660) {
        animation=setInterval(function()
        {
            if (i>=660) {
                clearInterval(animation);
            }
            i+=10;
            window.scrollTo(0,i);
        },1);
    }
    window.scrollTo(0,660);
};
/*      pressing on classes   */
classesButton.onclick=function()
{
    var i=scrollY,
        animation;
    if (i>1856.800048828125) {
        animation=setInterval(function()
        {
            if (i<=1856.800048828125) {
                clearInterval(animation);
            }
            i-=10;
            window.scrollTo(0,i);
        },1);
    }
    else if (i<1856.800048828125) {
        animation=setInterval(function()
        {
            if (i>=1856.800048828125) {
                clearInterval(animation);
            }
            i+=10;
            window.scrollTo(0,i);
        },1);
    }
    window.scrollTo(0,1856.800048828125);
};
/*      pressing on schedules   */
schedulesButton.onclick=function()
{
    var i=scrollY,
        animation;
    if (i>2588.800048828125) {
        animation=setInterval(function()
        {
            if (i<=2588.800048828125) {
                clearInterval(animation);
            }
            i-=10;
            window.scrollTo(0,i);
        },1);
    }
    else if (i<2588.800048828125) {
        animation=setInterval(function()
        {
            if (i>=2588.800048828125) {
                clearInterval(animation);
            }
            i+=10;
            window.scrollTo(0,i);
        },1);
    }
    window.scrollTo(0,2588.800048828125);
};
/*      pressing on contact   */
contactButton.onclick=function()
{
    var i=scrollY,
        animation;
    if (i>3347.5556640625) {
        animation=setInterval(function()
        {
            if (i<=3347.5556640625) {
                clearInterval(animation);
            }
            i-=10;
            window.scrollTo(0,i);
        },1);
    }
    else if (i<3347.5556640625) {
        animation=setInterval(function()
        {
            if (i>=3347.5556640625) {
                clearInterval(animation);
            }
            i+=10;
            window.scrollTo(0,i);
        },1);
    }
    window.scrollTo(0,3347.5556640625);
};
window.onscroll=function()
{
    if (window.scrollY<1252.4444580078125)
    {
        home.classList.add("active");
        aboutUsButton.classList.remove("active");
        classesButton.classList.remove("active");
        schedulesButton.classList.remove("active");
        contactButton.classList.remove("active");
    }
    else if (window.scrollY<1781.3333740234375) {
        home.classList.remove("active");
        aboutUsButton.classList.add("active");
        classesButton.classList.remove("active");
        schedulesButton.classList.remove("active");
        contactButton.classList.remove("active");
    }
    else if (window.scrollY<2517.333251953125) {
        home.classList.remove("active");
        aboutUsButton.classList.remove("active");
        classesButton.classList.add("active");
        schedulesButton.classList.remove("active");
        contactButton.classList.remove("active");
    }
    else if (window.scrollY<3347.5556640625) {
        home.classList.remove("active");
        aboutUsButton.classList.remove("active");
        classesButton.classList.remove("active");
        schedulesButton.classList.add("active");
        contactButton.classList.remove("active");
    }
    else
    {
        home.classList.remove("active");
        aboutUsButton.classList.remove("active");
        classesButton.classList.remove("active");
        schedulesButton.classList.remove("active");
        contactButton.classList.add("active");
    }
};
/*    start member ship   */
member.onclick=function()
{
    membership.classList.add("memberhidden");
};
close.onclick=function()
{
    membership.classList.remove("memberhidden");
};