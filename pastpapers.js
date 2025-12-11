document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("papersContainer");

  fetch("pastpapers.json")
    .then((res) => res.json())
    .then((data) => {
      Object.keys(data).forEach((level) => {
        const levelSection = document.createElement("div");
        levelSection.className = "mb-10";

        const title = document.createElement("h2");
        title.className =
          "text-2xl font-semibold text-green-700 mb-4 border-b pb-2";
        title.textContent = level + " Past Papers";
        levelSection.appendChild(title);

        const grid = document.createElement("div");
        grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";

        data[level].forEach((paper) => {
          const card = document.createElement("div");
          card.className =
            "bg-white p-5 rounded-lg shadow-md border hover:shadow-lg transition";

          const subject = document.createElement("h3");
          subject.className = "font-semibold text-green-800 mb-2";
          subject.textContent = paper.subject;

          const year = document.createElement("p");
          year.className = "text-gray-600 mb-3";
          year.textContent = `Year: ${paper.year}`;

          const link = document.createElement("a");
          link.href = paper.file;
          link.download = "";
          link.target = "_blank";
          link.className =
            "inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition";
          link.textContent = "Download Paper 📄";

          card.appendChild(subject);
          card.appendChild(year);
          card.appendChild(link);
          grid.appendChild(card);
        });

        levelSection.appendChild(grid);
        container.appendChild(levelSection);
      });
    })
    .catch((err) => {
      container.innerHTML =
        "<p class='text-red-600'>Failed to load past papers data.</p>";
      console.error(err);
    });
});
