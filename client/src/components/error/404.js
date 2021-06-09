import React from "react";
import "./404.css";
const MissingPage = () => {
  return (
    <div class="main">
      <div class="mainbox">
        <div class="err">4</div>
        <i class="far fa-question-circle fa-spin"></i>
        <div class="err2">4</div>
        <div class="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place? or maybe you are not worthy.
          <p>
            Anyhow, You can back <a className='font-white' href="/">home</a> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissingPage;
