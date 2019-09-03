
 const createStudentComponent = (name, subject, info, score) => {
    if (score >= 60) {
        theStudent = `
            <h1 class="passing">${name}</h1>
            <p>${subject}</p>
            <p>${info}</p>
            <p>${score}</p>
    `
    } else {
       theStudent = `
       <h1 class="failing">${name}</h1>
       <p>${subject}</p>
       <p>${info}</p>
       <p>${score}</p>
    `
    }
   return theStudent;
  }


  //css
  /* :root {
    --passOrFail: purple;

}
.studentComponent {
  color: var(--passOrFail);
} */