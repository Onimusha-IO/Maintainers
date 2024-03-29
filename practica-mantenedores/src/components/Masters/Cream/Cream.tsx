import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import Crud from "../../../client";
import { getCreamList, setCream } from "../../../redux/slices/masters/creamSlice";
import Modal from "../../ui/myModal";

import styles from "./Cream.module.scss";
import Dialog from "./Dialog";
import List from "./List";

const Cream = () => {
  const [action, setAction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const getList = async () => {
    const server = new Crud(`/api/cream`);
    const res = await server.get("/list");
    dispatch(getCreamList(res?.data));
  };

  const onClose = () => {
    getList();
    setShowModal(false);
  };

  const creamList = useSelector((state: any) => {
    return state.creamSlice.creamList;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getList();
    dispatch(setCream({ name, id }));
  }, [name, id]);

  const labels = {
    title: {
      create: "Nueva Crema",
      modify: "Modificar Crema",
      delete: "¿Está seguro que desea eliminar el registro?",
    },
    buttons: {
      create: {
        accept: "Agregar",
        reject: "Cancelar",
      },
      modify: {
        accept: "Modificar",
        reject: "Cancelar",
      },
      delete: {
        accept: "Si",
        reject: "No",
      },
    },
  };

  return (
    <div className={styles.page}>
      <label className={styles.label}>Cremas</label>
      <div className={styles.content}>
        <List
          list={creamList}
          setAction={setAction}
          setShowModal={setShowModal}
          setId={setId}
          setName={setName}
          setTitle={setModalTitle}
          labels={labels}
        />
      </div>
      <Modal onClose={onClose} showModal={showModal} tittle={modalTitle}>
        <Dialog
          onClose={onClose}
          action={action}
          getList={getList}
          setId={setId}
          id={id}
          setName={setName}
          name={name}
          labels={labels}
        />
      </Modal>
      <div
        className={styles.add}
        onClick={() => {
          setAction("post");
          setId("");
          setName("");
          setModalTitle(labels.title.create);
          setShowModal(true);
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default Cream;
