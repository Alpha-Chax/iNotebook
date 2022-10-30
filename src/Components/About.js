import React from "react";

function About() {
  return (<>
    <h1 style={{borderRadius:"5px",display:"inline-block", backgroundColor:"beige", padding:"7px"}}>About iNotebook</h1>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
          <strong>User Friendly And Secure</strong>  
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            iNotebook is created in such a way that only you can acess your
            notes from anywhere just by logging in to your account and no one
            else can acess them. You can Add New Notes, Update and Delete your
            Notes any time in this app.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
           <strong> Free To Use</strong>
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            iNotebook is your digital notebook which is free of cost and you can
            store your notes digitally and acess that anytime from anywhere just
            by logging in to your account.
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
