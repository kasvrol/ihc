import React from 'react';
import { Card, Col, Row, Typography, Avatar, Divider } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
import { criadores } from "./criadores";
import "./curriculo.css";

const CriadoresVitrine = () => {
  return (
    <div className='containerCurriculo'>
      <Title level={2} style={{ textAlign: 'center' }}>Conheça os criadores do novo site</Title>
			<div className='vitrine'>
        {criadores.map((criador) => (
            <Card
							hoverable
							key={criador.id}
							className='cardCurriculo'
              cover={<Avatar src={criador.imagem} size={128} className='avatarCurriculo' />}
            >
              <Title level={4} style={{ textAlign: 'center' }}>{criador.nome}</Title>
              <Text type="secondary" block style={{ textAlign: 'center' }}>{criador.cargo}</Text>
              <Divider />
              <Text>{criador.descricao}</Text>
              <Divider />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <a href={criador.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined style={{ fontSize: 20 }} />
                </a>
                <a href={criador.github} target="_blank" rel="noopener noreferrer">
                  <GithubOutlined style={{ fontSize: 20 }} />
                </a>
                <a href={`mailto:${criador.email}`} target="_blank" rel="noopener noreferrer">
                  <MailOutlined style={{ fontSize: 20 }} />
                </a>
              </div>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default CriadoresVitrine;