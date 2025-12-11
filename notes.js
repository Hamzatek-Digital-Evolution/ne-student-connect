document.addEventListener("DOMContentLoaded", () => {
  const notesContainer = document.getElementById("notesContainer");

  fetch("notes.json")
    .then((response) => response.json())
    .then((data) => {
      Object.keys(data).forEach((subject) => {
        const subjectSection = document.createElement("div");
        subjectSection.className = "mb-10";

        const subjectTitle = document.createElement("h2");
        subjectTitle.className =
          "text-2xl font-semibold text-green-700 mb-4 border-b pb-2";
        subjectTitle.textContent = subject;
        subjectSection.appendChild(subjectTitle);

        data[subject].forEach((note) => {
          const noteCard = document.createElement("div");
          noteCard.className =
            "border rounded-lg mb-3 overflow-hidden bg-white shadow-sm";

          const header = document.createElement("button");
          header.className =
            "w-full text-left px-4 py-3 font-medium bg-gray-100 hover:bg-green-100";
          header.textContent = note.title;

          const content = document.createElement("div");
          content.className = "hidden px-4 py-3 text-gray-700 bg-white";

          const noteText = document.createElement("p");
          noteText.textContent = note.content;

          content.appendChild(noteText);

          // Add download button if a file exists
          if (note.file) {
            const downloadLink = document.createElement("a");
            downloadLink.href = note.file;
            downloadLink.download = "";
            downloadLink.target = "_blank";
            downloadLink.className =
              "inline-block mt-3 px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition";
            downloadLink.textContent = "Download Note 📥";
            content.appendChild(downloadLink);
          }

          header.addEventListener("click", () => {
            content.classList.toggle("hidden");
          });

          noteCard.appendChild(header);
          noteCard.appendChild(content);
          subjectSection.appendChild(noteCard);
        });

        notesContainer.appendChild(subjectSection);
      });
    })
    .catch((err) => {
      notesContainer.innerHTML =
        "<p class='text-red-600'>Failed to load notes data.</p>";
      console.error(err);
    });
});
