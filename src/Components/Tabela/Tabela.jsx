import React, { useEffect, useState } from "react";
import styles from "./Tabela.module.css";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { deletePhone, getPhones } from "../../api";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const Tabela = () => {
  const navigate = useNavigate();

  const [phones, setPhones] = useState([]);

  const loadData = async () => {
    const data = await getPhones();
    setPhones(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleClickAdd = () => {
    navigate("/new");
  };

  const handleClickUpadte = (id) => {
    navigate(`/update/${id}`);
  };

  const handleClickDelete = async (id) => {
    let isConfirm = window.confirm(
      "Tem certeza que deseja delatar este celular da base de dados"
    );

    if (isConfirm) {
      await deletePhone(id);
      loadData();
    }
  };
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Produtos</h2>
          <button className={styles.button} onClick={handleClickAdd}>
            <IoPhonePortraitSharp />
            Adicionar
          </button>
        </header>
        <Table className={styles.border}>
          <thead>
            <tr>
              <td style={{ paddingTop: 20, paddingBottom: 20 }}>
                <span className={styles.ft}>Codigo</span>
              </td>
              <td style={{ paddingTop: 20, paddingBottom: 20 }}>Modelo</td>
              <td style={{ paddingTop: 20, paddingBottom: 20 }}>Preço</td>
              <td style={{ paddingTop: 20, paddingBottom: 20 }}>Marca</td>
              <td style={{ paddingTop: 20, paddingBottom: 20 }}>Cor</td>
            </tr>
          </thead>
          <tbody>
            {phones?.map((phone) => (
              <tr key={phone._id}>
                <td style={{ paddingTop: 20, paddingBottom: 20 }}>
                  {phone?.code}
                </td>
                <td style={{ paddingTop: 20, paddingBottom: 20 }}>
                  {phone.model}
                </td>
                <td style={{ paddingTop: 20, paddingBottom: 20 }}>
                  {phone.price}
                </td>
                <td style={{ paddingTop: 20, paddingBottom: 20 }}>
                  {phone.brand}
                </td>
                <td style={{ paddingTop: 20, paddingBottom: 20 }}>
                  {phone.color}
                </td>
                <td style={{ paddingTop: 20, paddingBottom: 20 }}>
                  <FaPaintBrush
                    className={styles.update}
                    onClick={() => handleClickUpadte(phone._id)}
                  />
                </td>
                <td style={{ paddingTop: 20, paddingBottom: 20 }}>
                  <MdDelete
                    className={styles.delete}
                    onClick={() => handleClickDelete(phone._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Tabela;
