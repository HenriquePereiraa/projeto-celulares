import React, { useState } from "react";
import styles from "./New.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { postPhone } from "../../api";
import moment from "moment";

const getFormateDate = (currentDate) => {
  return currentDate.split("/").reverse().join("-");
};

const getReformateDate = (currentDate) => {
  return currentDate.split("-").reverse().join("/");
};

const schema = Yup.object().shape({
  modelo: Yup.string().min(2).max(255).required("Campo Obrigatório"),
  marca: Yup.string().min(2).max(255).required("Campo Obrigatório"),
  preco: Yup.number().positive().required("Campo Obrigatório"),
  color: Yup.string().required("Campo Obrigatório"),
  startDate: Yup.date().min(getFormateDate("25/12/2018")).required("Campo Obrigatório"),
  endDate: Yup.date().required("Campo Obrigatorio"),
});

const New = () => {
  const onSubmit = (values) => {
    const value = {
      model: values.modelo,
      brand: values.marca,
      price: values.preco,
      date: getReformateDate(values.startDate),
      endDate: getReformateDate(values.endDate),
      color: values.color,
    };
    
    if(moment(values.date).isSameOrAfter(values.endDate)) {
      alert("Data final das vendas inválida! Por favor insira uma data válida")
    } else {
      postPhone(value);
    }
  };

  const initialValues = {
    modelo: "",
    marca: "",
    preco: "",
    color: "",
    startDate: "",
    endDate: "",
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Adicionar do produto</h1>
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={initialValues}
          render={({ isValid }) => (
            <Form>
              <div className={styles.input}>
                <label htmlFor="modelo">Modelo</label>
                <Field type="text" name="modelo" placeholder="Modelo" />
                <ErrorMessage
                  render={(msg) => (
                    <div style={{ color: "red", fontSize: 13 }}>{msg}</div>
                  )}
                  name="modelo"
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="marca">Marca</label>
                <Field type="text" name="marca" placeholder="Marca" />
                <ErrorMessage
                  name="marca"
                  render={(msg) => (
                    <div style={{ color: "red", fontSize: 13 }}>{msg}</div>
                  )}
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="cor">Cor</label>
                <Field as="select" name="color">
                  <option value="" disabled>COR</option>
                  <option value="BLACK">BLACK</option>
                  <option value="WHITE">WHITE</option>
                  <option value="GOLD">GOLD</option>
                  <option value="PINK">PINK</option>
                </Field>
              </div>
              <div className={styles.input}>
                <label htmlFor="preco">Preço</label>
                <Field type="number" name="preco" placeholder="Preço" />
                <ErrorMessage
                  name="preco"
                  render={(msg) => (
                    <div style={{ color: "red", fontSize: 13 }}>{msg}</div>
                  )}
                />
              </div>
              <div className={styles.input}>
                <label>Inicio das Vendas</label>
                <Field type="date" name="startDate" />
                <ErrorMessage
                  name="startDate"
                  render={(msg) => (
                    <div style={{ color: "red", fontSize: 13 }}>{msg}</div>
                  )}
                />
              </div>
              <div className={styles.input}>
                <label>Fim das Vendas</label>
                <Field type="date" name="endDate" />
                <ErrorMessage
                  name="endDate"
                  render={(msg) => (
                    <div style={{ color: "red", fontSize: 13 }}>{msg}</div>
                  )}
                />
              </div>
              <div className={styles.buttons}>
                <div className={styles.back}>
                  {/* <Button name="voltar" /> */}
                  <button className={styles.button} onClick={handleBack}>
                    Voltar
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={!isValid}
                  className={styles.button}
                >
                  Salvar
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    </>
  );
};

export default New;
