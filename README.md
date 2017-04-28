# JQuery-Extension-Function
This is a helper JQuery function to detect when an element is inside the viewport 
IT'S an example of how to extend JQuery functionalities.
Basically a function to detect when a selected element is inside the view port.
Is a usefull way to fire and event when some elements are visibles to the user on scroll.

# Fucnction charcteristics
1- Name: isInViewPort
2- Parameter: offset
3- Return: true/false

# How to use it
$('your_element').isInViewPort(number_of_pixels)

# Example
*Imagin you have a logo with a class name 'logo-center' and you want to make it appears when it gets the center of your screen - 150 pixels.

jQuery(document).ready(function($){

    $(window).scroll(function () {
        
        if($(".logo-center").isInViewPort(-150))
            $(".logo-center").addClass('center-logo-appear');
        else
            $(".logo-center").removeClass('center-logo-appear');     
      
    }
    
});
