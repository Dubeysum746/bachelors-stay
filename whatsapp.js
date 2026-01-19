document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;

    var whatsappNumber = "917460046500";

    var whatsappURL = "https://wa.me/" + whatsappNumber + "?text="
        + encodeURIComponent(
            "Name: " + name + "\n"
            + "Mobile: " + mobile + "\n"
            + "Message: " + message
        );

    window.open(whatsappURL, "_blank");
    
    alert("Message sent successfully on WhatsApp!")
});
