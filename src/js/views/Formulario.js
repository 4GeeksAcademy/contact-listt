import React from 'react'
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";


const Formulario = () => {
  const { store, actions } = useContext(Context)


  return <>
    <h1 className='d-flex justify-content-center'>Add a New Contact!</h1>

    <div className="mb-3 row mx-5">

      <div className="col-12">
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-12">
            <label for="validationCustomUsername" className="form-label">Full Name</label>
            <div className="input-group has-validation">
              <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">
                Please choose a Name.
              </div>
            </div>
          </div>

          <div className="col-12">
            <label for="validationCustom01" className="form-label">Email</label>
            <input type="text" className="form-control" id="validationCustom01" required />
            <div className="valid-feedback">
              Please choose a Email
            </div>
          </div>


          <div className="col-12">
            <label for="validationCustomUsername" className="form-label">Phone</label>
            <div className="input-group has-validation">
              <input type="number" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">
                Please put a Phone number .
              </div>
            </div>
          </div>


          <div className="col-12">
            <label for="validationCustom03" className="form-label">Address</label>
            <input type="text" className="form-control" id="validationCustom03" required />
            <div className="invalid-feedback">
              Please provide a valid Address.
            </div>
          </div>


          <div className="col-12">
            <button className="btn btn-primary w-100" type="submit">Save</button>
          </div>

        </form>
      </div>
    </div>

  </>
}

export default Formulario