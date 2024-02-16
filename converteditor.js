// Add an event listener to the button
    document.getElementById("extractButton").addEventListener("click", function() {
        // Extracting HTML content from the div with the class 'ck-content'
        var myDiv = document.querySelector(".ck-content");
        var htmlContent = myDiv.innerHTML;

        // Remove classes and IDs from the HTML content
        var cleanedHTML = removeClassesAndIds(htmlContent);

        // Copying the cleaned HTML content to the clipboard
        copyToClipboard(cleanedHTML);
    });

    // Function to remove classes and IDs from HTML content
    function removeClassesAndIds(html) {
        // Create a temporary element to parse the HTML
        var tempElement = document.createElement("div");
        tempElement.innerHTML = html;

        // Remove classes and IDs from all elements
        var allElements = tempElement.querySelectorAll("*");
        allElements.forEach(function (element) {
            element.removeAttribute("class");
            element.removeAttribute("id");
        });

        // Return the cleaned HTML
        return tempElement.innerHTML;
    }

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
