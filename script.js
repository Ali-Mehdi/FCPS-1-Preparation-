const questions = [
  {
    q: "Most common cause of nephritic syndrome is:",
    options: ["IgA nephropathy", "MPGN", "Minimal change disease", "FSGS"],
    answer: 0
  },
  {
    q: "Thrombophlebitis obliterans is most commonly associated with:",
    options: ["Diabetes", "Smoking", "Hypertension", "Hyperlipidemia"],
    answer: 1
  },
  {
    q: "In PSGN, which complement level is reduced?",
    options: ["C1", "C2", "C3", "C4"],
    answer: 2
  },
  {
    q: "C3 levels in IgA nephropathy are usually:",
    options: ["Low", "Normal", "Absent", "Fluctuating"],
    answer: 1
  },
  {
    q: "Tram-track appearance is seen in:",
    options: ["Minimal change disease", "MPGN", "FSGS", "IgA nephropathy"],
    answer: 1
  },
  {
    q: "Dense deposit disease is classified as:",
    options: ["Type I MPGN", "Type II MPGN", "Type III MPGN", "FSGS variant"],
    answer: 1
  },
  {
    q: "Tissue injury in PSGN occurs due to:",
    options: ["Antibody deposition", "Immune complexes", "Complement activation", "T-cell activation"],
    answer: 2
  },
  {
    q: "Most common cause of nephrotic syndrome in adults:",
    options: ["Minimal change disease", "FSGS", "Membranous nephropathy", "Amyloidosis"],
    answer: 1
  },
  {
    q: "All are causes of FSGS except:",
    options: ["HIV", "Heroin abuse", "Obesity", "Diabetes mellitus"],
    answer: 3
  },
  {
    q: "Minimal change disease is associated with:",
    options: ["Hodgkin lymphoma", "Multiple myeloma", "CLL", "SLE"],
    answer: 0
  },
  {
    q: "Primary bladder defense mechanism is:",
    options: ["IgA", "Low pH", "Voiding", "Mucus layer"],
    answer: 2
  },
  {
    q: "Most reliable urine specimen is obtained by:",
    options: ["Midstream urine", "Catheterization", "Suprapubic aspiration", "Random sample"],
    answer: 2
  },
  {
    q: "Drug of choice for uncomplicated UTI in women:",
    options: ["Ciprofloxacin", "Nitrofurantoin", "TMP-SMX", "Amoxicillin"],
    answer: 2
  },
  {
    q: "Optimal duration of therapy for uncomplicated UTI in women:",
    options: ["1 day", "3 days", "7 days", "14 days"],
    answer: 1
  },
  {
    q: "Screening for bacteriuria is recommended in:",
    options: ["Elderly", "Diabetics", "Pregnancy", "Children"],
    answer: 2
  },
  {
    q: "Nitrofurantoin is effective in UTI because it:",
    options: ["Acts systemically", "Concentrates in urine", "Kills biofilms", "Alters pH"],
    answer: 1
  },
  {
    q: "Most reliable indicator of septicemia:",
    options: ["Fever", "Hypotension", "Hyperventilation", "Leukocytosis"],
    answer: 2
  },
  {
    q: "Renal oncocytoma shows which feature on EM?",
    options: ["Podocyte effacement", "Multiple mitochondria", "Immune deposits", "Basement membrane thickening"],
    answer: 1
  },
  {
    q: "Alport syndrome is due to defect in which collagen?",
    options: ["Type I", "Type III", "Type IV", "Type V"],
    answer: 2
  },
  {
    q: "Most common renal stone type:",
    options: ["Uric acid", "Struvite", "Calcium oxalate", "Cystine"],
    answer: 2
  },
  {
    q: "Most ischemia-sensitive part of nephron:",
    options: ["Loop of Henle", "DCT", "PCT", "Collecting duct"],
    answer: 2
  }
];

const quizForm = document.getElementById("quizForm");

questions.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `<p><strong>Q${index + 1}.</strong> ${item.q}</p>`;

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  item.options.forEach((opt, i) => {
    optionsDiv.innerHTML += `
      <label>
        <input type="radio" name="q${index}" value="${i}">
        ${opt}
      </label>`;
  });

  div.appendChild(optionsDiv);
  quizForm.appendChild(div);
});

document.getElementById("submitBtn").addEventListener("click", () => {
  let score = 0;

  questions.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const questionDiv = quizForm.children[index];

    if (selected && parseInt(selected.value) === item.answer) {
      score++;
    } else {
      questionDiv.classList.add("incorrect");
    }

    const labels = questionDiv.querySelectorAll("label");
    labels[item.answer].classList.add("correct");
    labels[item.answer].innerHTML += `<span class="tick">✔️</span>`;
  });

  document.getElementById("result").innerText =
    `Your Score: ${score} / ${questions.length}`;
});
