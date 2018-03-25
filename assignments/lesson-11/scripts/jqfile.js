    /*$(function () {
            // All jQuery code goes here*/

    /*$(function(){....}) is the same like $(document).ready(function(){
        })*/

    /* First approach with jQuery. Test of correct operation */
    /*$(function() {
                // All jQuery code goes here
                alert('Hello jQuery!!');
            })*/

    /* applying opacity to the logo - selects one element with the ID provided*/
    /*window.onload = function(){
    var element = document.getElementById('alcoveLogo');
    element.style.opacity = 0.2;
}*/

/* applying color to the selected elements - selects one or more elements with the class provided and returns a nodelist*/
/*window.onload = function(){
            var elements = document.getElementsByClassName('servicesBtn');
            for(var i = 0; i < elements.length; i ++){
                if(i % 2 == 0){
                    elements[i].style.color = 'rgb(0 , 106, 255)';
                    }
                }
            } */

/* applying styles to the selected elements  - selects one or more elements of the specified type and returns a nodelist */
/*window.onload = function(){
            var elements = document.getElementsByTagName('h2');
            for(var i = 0; i < elements.length; i ++){
                elements[i].style.borderColor = 'rgb(255,0,0)';
                elements[i].style.borderWidth = '2px';
                elements[i].style.borderStyle = 'solid';
                elements[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
                }
            } */

/* applying styles to the selected element - selects one element using the CSS selector provide */
/*(function(){
            var element = document.querySelector(".navigation > li:nth-child(3) > a");
            element.style.color = 'rgb(255, 0, 0)';
            })*/

/* applying styles to the selected elements - selects one or more elements using the CSS selector provided and returns a nodelist */
/*$(function(){
                var elements = document.querySelectorAll(".navigation > li:nth-child(even) > a");
                for(var i = 0; i < elements.length; i ++){
                    elements[i].style.color = 'rgb(255 , 0, 0)';
                }
            }) */

/*$('#alcoveLogo').css('opacity', 0.4);

                $('.servicesBtn').css('color', '#FFF');*/

/*$('button').css('border', '1px solid red');
                $('h2').css('border', '1px solid red');*/

/* select the input field that has the attribute name = nameVal
                $('input[name="nameVal"]').css('border', '1px solid red');*/

/* select all inputs field that do not have their name attributes set to the value phoneNum.
                $('input[name!="phoneNum"]').css('border', '1px solid red');*/

/* *= Select all the input fields where the name contains the words Num
                $('input[name*="Num"]').css('border', '1px solid red');*/

/* $= Select Input field(s) where the attribute 'name' contains words that end with 'Val' like 'emailVal' or 'prodVal'

                $('input[name$="Val"]').css('border', '1px solid red'); */

/* next() method selects the next sibling to the element
                $('#alcoveLogo').next().css('background-color','rgba(255, 0, 0, 0.2)');*/

/* .nextAll() selects all the siblings to the element
                $('.box1').nextAll().css('background-color','rgba(255, 0, 0, 0.2)');*/

/* .children()  selects all child elements
                $('.header').children().css('background-color','rgba(255, 0, 0, 0.2)');*/

/* .parent()  selects parent element
                $(".navigation > li:eq(2)").parent().css('opacity', '0.3');*/

/* .parent().parent().parent()
                $(".navigation > li:eq(2)").parent().parent().parent().css('opacity', '0.3');*/

/* .closest() method returns the first ancestor of the selected element. Selector method which takes an argument in the form of the element type that you wish to find and select. */

/* $('.servicesBtn').closest('article').css('background-color','rgba(255, 0, 0, 0.2)'); */

/* change the style - set the text background alternatively to red and white*/
/*console.log( $('input[type="text"]').css('background-color') );*/
/*var toggleStyle = function() {
                var inputFields = $('input[type="text"]');
                if( inputFields.css('background-color') === 'rgb(255, 0, 0)' ) {
                    // set background color to white
                    inputFields.css('background-color', 'rgb(255, 255, 255)');
                } else {
                    // set background color to red
                    inputFields.css('background-color', 'rgb(255, 0, 0)');
                }
            }
            $('#ReqAQuoteBtn').click( toggleStyle );*/

/* insert content in the DOM */
$function({
    $('.coreValues').append("<li><strong>This is brand new !!</strong></li>");
})

