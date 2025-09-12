import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaFilePdf } from "react-icons/fa";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { resetStatus, sendBookingFile } from "../../store/Apllication";
import { sendBookingForm } from "../../store/Apllication";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 1024px) {
    padding: 0px;
    margin: 40px 0px 40px 0px;
  }
`;

const StepBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #6dd5fa;
  min-height: 230px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    min-height: auto;
    background-color: white;
    box-shadow: none;
  }
`;

const StepTitle = styled.h2`
  flex-shrink: 0;
  margin-right: 20px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 1);
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 34px;
  line-height: 120%;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const StepText = styled.p`
  color: #333;
  max-width: 600px;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  @media (max-width: 1024px) {
    font-size: 16px;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  background: white;
  color: #0077b6;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  transition: background 0.2s;
  &:hover {
    background: #f0f0f0;
  }
  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    background-color: rgba(103, 212, 255, 1);
  }
`;

const PdfButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  svg {
    font-size: 20px;
  }
`;

// form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  font-family: Montserrat, sans-serif;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #0077b6;
    box-shadow: 0 0 0 2px rgba(0, 119, 182, 0.2);
  }
`;

const SubmitButton = styled.button`
  background: #0077b6;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #005f8d;
  }
`;

const CloseButton = styled.button`
  margin-top: 15px;
  background: transparent;
  color: #555;
  border: none;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  align-self: center;

  &:hover {
    color: #000;
  }
`;

// ...StepBox, StepTitle, StepText, Button, Form, Input, SubmitButton, CloseButton, PdfButton, Container

const StepsSection = () => {
  const dispatch = useDispatch();
  const { formStatus, formError, applicationId } = useSelector(
    (state) => state?.booking || {}
  );

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    child_full_name: "",
    parent_full_name: "",
    phone: "",
    email: "",
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // сброс ошибки при изменении
  };

  const validate = () => {
    const newErrors = {};

    // Проверка текстовых полей (только буквы)
    if (!formData.child_full_name.trim() || /\d/.test(formData.child_full_name))
      newErrors.child_full_name = "Ошибка: только текст!";
    if (
      !formData.parent_full_name.trim() ||
      /\d/.test(formData.parent_full_name)
    )
      newErrors.parent_full_name = "Ошибка: только текст!";

    // Проверка номера телефона: только кыргыз номера
    // Пример: +996 XXX XXX XXX (или 9 цифр после +996)
    const phoneRegex = /^\+996\d{9}$/;
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Ошибка: некорректный номер! Например: +996500600605";

    // Email – простая проверка на @
    if (!formData.email.trim() || !formData.email.includes("@"))
      newErrors.email = "Ошибка: некорректный email!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(sendBookingForm(formData)); // <-- форма + PDF жөнөтүлөт
  };

  useEffect(() => {
    if (formStatus === "success") {
      toast.success("Заявка успешно отправлена!");
      setFormData({
        child_full_name: "",
        parent_full_name: "",
        phone: "",
        email: "",
      });
      setShowModal(false);
      dispatch(resetStatus()); // <-- статусду reset кылып жатабыз
    } else if (formStatus === "error") {
      toast.error("Ошибка при отправке заявки: " + formError);
      dispatch(resetStatus()); // <- ката болсо да reset кылуу
    }
  }, [formStatus, formError, dispatch]);

  const handlePdfClick = () => fileInputRef.current.click();
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === "application/pdf") {
      if (applicationId) {
        dispatch(sendBookingFile({ file: selected, id: applicationId }));
        toast.success("Файл ийгиликтүү жүктөлдү!");
      } else {
        toast.error("Алгач заявка жөнөтүңүз!");
      }
    } else {
      toast.error("Только PDF файл жүктөңүз!");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000} // 5 секунддан кийин жоголот
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="child_full_name"
            placeholder="ФИО ребенка"
            value={formData.child_full_name}
            onChange={handleChange}
            style={{ borderColor: errors.child_full_name ? "red" : "#ccc" }}
          />
          <Input
            type="text"
            name="parent_full_name"
            placeholder="ФИО родителя"
            value={formData.parent_full_name}
            onChange={handleChange}
            style={{ borderColor: errors.parent_full_name ? "red" : "#ccc" }}
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Телефон +996..."
            value={formData.phone}
            onChange={handleChange}
            style={{ borderColor: errors.phone ? "red" : "#ccc" }}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: errors.email ? "red" : "#ccc" }}
          />
          <SubmitButton type="submit">
            {formStatus === "pending" ? "Отправка..." : "Отправить"}
          </SubmitButton>
          <CloseButton type="button" onClick={() => setShowModal(false)}>
            Отмена
          </CloseButton>
        </Form>
      </Modal>

      {/** Остальной StepsSection как было */}
      <Container>
        <StepBox>
          <StepTitle>1. Отправка заявки</StepTitle>
          <div>
            <StepText>
              Свяжитесь с нами по телефону: +7 (495) 988 89 06 или
              воспользуйтесь возможностью отправить заявку через интернет. Наши
              специалисты всегда готовы помочь вам, ответить на все вопросы и
              предложить наилучшие решения. Мы стремимся обеспечить максимально
              быстрый и качественный сервис для наших клиентов.
            </StepText>
            <Button onClick={() => setShowModal(true)}>Оставить заявку</Button>
          </div>
        </StepBox>

        <StepBox>
          <StepTitle>2. Собеседование</StepTitle>
          <div>
            <StepText>
              Если для вашего ребенка найдется свободное место, специалисты
              свяжутся с вами по предоставленным контактным данным и пригласят
              на собеседование с психологом, логопедом и учителями. В течение
              30-60 минут, учитывая возрастные особенности ребенка, специалисты
              проведут беседу с ним. Педагоги предложат ребенку выполнить
              задания по математике, русскому и английскому языкам,
              соответствующие программе его будущего класса. Также сотрудник
              школы организует экскурсию для родителей, чтобы они смогли
              ознакомиться с учебным заведением.
            </StepText>
          </div>
        </StepBox>

        <StepBox>
          <StepTitle>3. Обратная связь</StepTitle>
          <div>
            <StepText>
              На основании собеседования специалисты выносят рекомендацию о
              приеме или отказе в обучении в школе "Наши традиции".
            </StepText>
          </div>
        </StepBox>

        <StepBox>
          <StepTitle>4. Заключение договора</StepTitle>
          <div>
            <StepText>
              При заключении договора предоставляется полный пакет документов.
              Договор вступает в силу после оплаты.
            </StepText>
            <PdfButton onClick={handlePdfClick}>
              <FaFilePdf /> PDF
            </PdfButton>
            <input
              type="file"
              accept="application/pdf"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </StepBox>
      </Container>
    </>
  );
};

export default StepsSection;
