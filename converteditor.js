// Add an event listener to the button
    document.getElementById("extractButton").addEventListener("click", function() {
        // Extracting HTML content from the div with the class 'ck-content'
        var myDiv = document.querySelector(".ck-content");
        var htmlContent = myDiv.innerHTML;

        // Copying the HTML content to the clipboard
        copyToClipboard(htmlContent);
    });

    // Function to copy text to the clipboard
    function copyToClipboard(text) {
        var textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        // Optionally, provide feedback to the user
        alert("HTML content copied to clipboard!");
    }