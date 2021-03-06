import React, { useState } from 'react';
import { Descriptions, Typography, Input, Button, Alert } from 'antd';
import { useUser } from 'hooks/useUser';
import styled from 'styled-components';

const { Paragraph, Title } = Typography;

export const ProfileDescription: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>();
  const [updatingUserStatus, setUpdatingUserStatus] = useState<string>();
  const { userData, updatePartialUser } = useUser();

  const onChangePassword = () => updatePartialUser({ password: newPassword });

  return (
    <section>
      <Title level={2}>Вы вошли как: {userData.username}</Title>
      <Descriptions title="Информация:">
        <Descriptions.Item label="Имя">
          <Paragraph editable={{ onChange: (str) => updatePartialUser({ username: str }) }}>
            {userData.username || ''}
          </Paragraph>
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          <Paragraph editable={{ onChange: (str) => updatePartialUser({ email: str }) }}>
            {userData.email || ''}
          </Paragraph>
        </Descriptions.Item>
        <Descriptions.Item label="Дата регистрации">{userData.registrationDate}</Descriptions.Item>
        <Descriptions.Item label="Правильных ответов">
          {userData.correctReportsCount}
        </Descriptions.Item>
      </Descriptions>

      {updatingUserStatus && (
        <AlertChangedPassword type="success" closable message={updatingUserStatus} />
      )}
      <PasswordInput
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Введите новый пароль"
      />
      <Button
        onClick={() => onChangePassword().then(() => setUpdatingUserStatus('Пароль обновлен'))}
      >
        Сменить пароль
      </Button>
    </section>
  );
};

const PasswordInput = styled(Input.Password)`
  width: 200px;
`;

const AlertChangedPassword = styled(Alert)`
  margin-bottom: 15px;
`;
