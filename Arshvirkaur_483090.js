//  PART 1 – Text Manipulation 
$("#changetext").click(function () {
    $("#heading").text("Great! Text Changed Using JQuery.");
});
$("#Resettext").click(function () {
    $("#heading").text("My First JQuery Application ");
});



// PART 2 – CSS Manipulation
$("#highlighttext").click(function () {
    $("#paragragh").addClass("highlight");
});

$("#removehighlight").click(function () {
    $("#paragragh").removeClass("highlight");
});



// PART 3 – Effects
$("#hidetext").click(function () {
    $("#section").hide(1000)
});
$("#showtext").click(function () {
    $("#section").show(1000)
});
$("#toggletext").click(function () {
    $("#section").toggle(1000)
});



// PART 4 – Dynamic Shopping List
$("#addbtn").click(function () {

    let item = $("#itemtext").val();
    //checking the box shoudn't be empty. 
    if (item.trim() == "") {
        $("#message").text("Please enter an item.").css({ "color": "red" });
        return;
    }
    $("#itemlist").append(
        "<li>" + item +
        "<button class='removebtn'>Remove</button></li>"
    );
    $("#message").text("Item added successfully!").css({ "color": "green" });

    $("#itemtext").val("");
});
$(document).on("click", ".removebtn", function () {
    $(this).parent().remove();
});




// PART 4 – Dynamic Shopping List
$("#btn1").click(function () {
    $("#image").fadeOut(500, function () {
        $("#image").attr(
            "src",
            "https://img.magnific.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_hybrid&w=740&q=80"
        );
        $("#heading2").text("Nature Image");
        $("#image").fadeIn(500);
    });
});
$("#btn2").click(function () {
    $("#image").fadeOut(500, function () {
        $("#image").attr(
            "src",
            "https://www.sciencenews.org/wp-content/uploads/sites/2/2022/11/Hubble-Pillars-of-Creation.jpg"
        );
        $("#heading2").text("Space Image");
        $("#image").fadeIn(500);
    });
});
$("#btn3").click(function () {
    $("#image").fadeOut(500, function () {
        $("#image").attr(
            "src",
            "https://i.ytimg.com/vi/3Fy668pn5ZQ/sddefault.jpg"
        );
        $("#heading2").text("Animal Image");
        $("#image").fadeIn(500);
    });
});




// PART 6 – Form Validation
$(document).ready(function () {

    $("#submitBtn").click(function (e) {
        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let age = $("#age").val();

        $("#error").text("");

        if (name == "" || email == "" || age == "") {
            $("#error").text("All fields are required.");
            return;
        }

        if (isNaN(age)) {
            $("#error").text("Age must be numeric.");
            return;
        }

        if (Number(age) <= 0) {
            $("#error").text("Age must be greater than 0.");
            return;
        }

        $("#error").text("Form submitted successfully!");
    });

});




//  PART 7 – FAQ Accordion      
$(document).ready(function () {
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });
});



// FULL WEBPAGE IN DARK MODE 
$(document).ready(function () {
    $("#darkBtn").click(function () {
        $("body").toggleClass("dark-mode");
    });
});
