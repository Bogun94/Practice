//scrolling to sections
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;

            });
            $('html, body').fadeIn(1200);
        } // End if
    });
});


//canvas arrow

window.onload = function() {
    var canvas = document.getElementById("arrowCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 37;
    canvas.height = 37;
    var checker = true;
    var imageObj = new Image();
    var imageObj2 = new Image();
    imageObj.onload = function() {

        ctx.drawImage(imageObj, 6, 6, 25, 25);
    };
    imageObj.src = "img/arrowd.png";
    imageObj2.src = "img/arrowu.png";
    checker = true;
    $("a.toggle").on('click', function(event) {
        if (checker == true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imageObj2, 6, 6, 25, 25);
            checker = false;
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imageObj, 6, 6, 25, 25);
            checker = true;
        }
    });
};

//validation 
$(document).ready(function() {
    $("#submit").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var phone = $("#phone").val();
        $("#returnmessage").empty(); // To empty previous error/success message.
        // Checking for blank fields.
        if (name == '' || email == '' || phone == '') {
            alert("Please Fill Required Fields (Company is optional)");
        } else {
            // Returns successful data submission message when the entered information is stored in database.
            $.post("contact_form.php", {
                name1: name,
                email1: email,
                message1: message,
                contact1: phone
            }, function(data) {
                $("#returnmessage").append(data); // Append returned message to message paragraph.
                if (data == "Your Query has been received, We will contact you soon.") {
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });
});