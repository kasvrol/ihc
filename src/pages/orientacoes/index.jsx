import { Collapse, Typography, List } from "antd"; // Adicione List aqui
import {
    SolutionOutlined,
    UserAddOutlined,
    ScheduleOutlined,
    FileAddOutlined,
    AccountBookOutlined,
    FileSyncOutlined,
    FileTextOutlined, // Ícone para o painel de Formulários
    DownloadOutlined, // Ícone para cada formulário listado
    QuestionCircleOutlined, // Este era o placeholder para o Tópico 7, será substituído.
} from "@ant-design/icons";

import "./orientacoes-gerais.css";

const { Title, Paragraph, Text, Link: AntLink } = Typography; // Adicionei Text e AntLink para uso no conteúdo
const { Panel } = Collapse;

const listaOrientacoes = [
    {
        key: "1",
        icon: <SolutionOutlined />,
        label: "Processos Seletivos",
        content: (
            <>
                <Title level={5} style={{ marginTop: 0, marginBottom: '0.5em' }}>
                    Seleção de Tutores
                </Title>
                <Paragraph>
                    Para organizar o processo seletivo de tutores, siga estas recomendações:
                </Paragraph>
                <List
                    size="small"
                    bordered
                    dataSource={[
                        "Observar o disposto na Portaria CAPES nº 183/2016, na Instrução Normativa CAPES nº 02/2017 e na Portaria CAPES nº 249/2018.",
                        "Preencher o edital conforme modelo fornecido pela Coordenação UAB/CIPEAD (solicitar à coordenação), respeitando as especificações do curso.",
                        "Abrir processo no SEI (Sistema Eletrônico de Informações) e preencher um memorando solicitando a publicação do edital.",
                        "Enviar o memorando e o edital (em PDF) para publicação via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD, com antecedência mínima de 03 dias.",
                        "Conduzir o processo seletivo e encaminhar o resultado via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD para publicação e armazenamento das informações.",
                    ]}
                    renderItem={(item) => <List.Item style={{fontSize: '0.95em'}}>{item}</List.Item>}
                    style={{ marginBottom: '1.5em' }}
                />

                <Title level={5} style={{ marginTop: '1em', marginBottom: '0.5em' }}>
                    Seleção de Professor Formador (Quadro Efetivo da UFPR)
                </Title>
                <Paragraph>
                    Quando o professor formador pertence ao quadro de servidores da UFPR, é necessário realizar processo seletivo e obter aprovação na instância colegiada competente (departamento, câmara ou colegiado de curso). Siga estas orientações:
                </Paragraph>
                <List
                    size="small"
                    bordered
                    dataSource={[
                        "Observar o disposto na Portaria CAPES nº 183/2016, na Instrução Normativa CAPES nº 02/2017 e na Portaria CAPES nº 249/2018.",
                        "Preencher o edital conforme modelo fornecido pela Coordenação UAB/SEaDIP (solicitar à coordenação), respeitando as especificidades do curso.",
                        "Abrir processo no SEI e preencher um memorando solicitando a publicação do edital.",
                        "Enviar o memorando e o edital (em PDF) para publicação via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD, com antecedência mínima de 03 dias.",
                        "Conduzir o processo seletivo e encaminhar o resultado via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD para publicação e armazenamento das informações.",
                    ]}
                    renderItem={(item) => <List.Item style={{fontSize: '0.95em'}}>{item}</List.Item>}
                    style={{ marginBottom: '0.5em' }}
                />
                <Paragraph style={{ marginTop: '0.5em', fontSize: '0.95em' }}>
                    <Text strong>Importante:</Text> Anexar a ata de aprovação em órgão colegiado e o Plano Individual de Trabalho (PIT) do professor formador selecionado.
                </Paragraph>

                <Title level={5} style={{ marginTop: '1.5em', marginBottom: '0.5em' }}>
                    Seleção de Professor Formador (Quadro Externo)
                </Title>
                <Paragraph>
                    O sistema UAB permite a participação de colaboradores externos, não devendo ultrapassar 25% do total de professores. Para contratar professores do quadro externo, deve ser realizado processo seletivo público, seguindo estas orientações:
                </Paragraph>
                <List
                    size="small"
                    bordered
                    dataSource={[
                        "Observar o disposto na Portaria CAPES nº 183/2016, na Instrução Normativa CAPES nº 02/2017 e na Portaria CAPES nº 249/2018.",
                        "Preencher o edital conforme modelo fornecido pela Coordenação UAB/CIPEAD (solicitar à coordenação), respeitando as especificidades do curso.",
                        "Abrir processo no SEI e preencher um memorando solicitando a publicação do edital.",
                        "Enviar o memorando e o edital (em PDF) para publicação via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD, com antecedência mínima de 03 dias.",
                        "Conduzir o processo seletivo e encaminhar o resultado via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD para publicação e armazenamento das informações.",
                    ]}
                    renderItem={(item) => <List.Item style={{fontSize: '0.95em'}}>{item}</List.Item>}
                    style={{ marginBottom: '0.5em' }}
                />
                <Paragraph style={{ marginTop: '0.5em', fontSize: '0.95em' }}>
                    <Text strong>Importante:</Text> Caso tenha dúvidas sobre o preenchimento do edital, você pode enviar um e-mail para <AntLink href="mailto:uab_ufpr@ufpr.br">uab_ufpr@ufpr.br</AntLink> ou consultar o <AntLink href="#" target="_blank" rel="noopener noreferrer">site da UAB/UFPR</AntLink> (solicitar link à coordenação, caso necessário).
                </Paragraph>
            </>
        ),
    },
    // --- Os próximos 6 tópicos permanecem como placeholders por enquanto ---
    {
        key: "2",
        icon: <UserAddOutlined />, // Ícone atualizado
        label: "Cadastramento de Bolsistas", // Título atualizado
        content: (
            <>
                <Paragraph>
                    O cadastramento de novos bolsistas deve ser realizado <Text strong>apenas e exclusivamente após a finalização do processo seletivo</Text>.
                </Paragraph>
                <Paragraph>
                    Todos os bolsistas devem, obrigatoriamente, cumprir os requisitos estabelecidos na <Text strong>Portaria CAPES nº 183/2016</Text> e na <Text strong>Instrução Normativa CAPES nº 02/2017</Text>.
                </Paragraph>
                <Paragraph style={{ marginTop: '1em' }}>
                    Para realizar o cadastramento, observe os seguintes procedimentos:
                </Paragraph>
                <List
                    size="small"
                    bordered
                    dataSource={[
                        "Abrir processo no SEI (Sistema Eletrônico de Informações).",
                        "Anexar o formulário com os dados cadastrais do bolsista (modelo disponível junto à coordenação), devidamente assinado pelo coordenador de curso e pelo bolsista.",
                        "Anexar cópias dos documentos pessoais do bolsista (RG, CPF, comprovante de residência, dados bancários, etc.).",
                        "Anexar comprovante de experiência profissional: para professores formadores do quadro da UFPR, anexar cópia da carteira funcional; para professores externos, anexar comprovante de vínculo empregatício ou de prestação de serviços (ex: registro em carteira, contrato de trabalho, nota fiscal de serviço).",
                        "Realizar a autenticação dos documentos anexados via SEI, conforme normativas.",
                        "Anexar o termo de compromisso do bolsista, devidamente assinado por ele.",
                        "Enviar o processo completo via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD.",
                        "Arquivar cópias digitais de todos os documentos dos bolsistas de forma organizada e segura.",
                    ]}
                    renderItem={(item, index) => (
                        <List.Item style={{ fontSize: '0.95em' }}>
                            <Text>{`${index + 1}. ${item}`}</Text>
                        </List.Item>
                    )}
                    style={{ marginBottom: '1.5em' }}
                />
                <Paragraph
                    style={{
                        backgroundColor: '#fffbe6',
                        border: '1px solid #ffe58f',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        lineHeight: '1.6'
                    }}
                >
                    <Text strong style={{ color: '#d46b08', display: 'block', marginBottom: '4px' }}>ATENÇÃO:</Text>
                    O cadastramento de novos bolsistas precisa ser realizado <Text strong>impreterivelmente até o dia 05 (cinco) de cada mês</Text>. Atrasos podem impactar o recebimento da bolsa.
                </Paragraph>
            </>
        ),
    },
    // Tópico 3: Envio de Lote Mensal
    {
        key: "3",
        icon: <ScheduleOutlined />, // Ícone atualizado
        label: "Envio de Lote Mensal", // Título atualizado
        content: (
            <>
                <Paragraph>
                    O cálculo da quantidade de bolsas a que o curso UAB (Universidade Aberta do Brasil) tem direito mensalmente é realizado de forma automática, com base nos dados disponíveis no <Text strong>Sisuab (Sistema de Gestão de Bolsas da UAB)</Text>.
                </Paragraph>
                <Paragraph>
                    Por essa razão, é fundamental <Text strong>manter os dados dos bolsistas sempre atualizados no Sisuab</Text>, pois informações desatualizadas podem impactar o cálculo correto e o pagamento das bolsas.
                </Paragraph>
                <Paragraph style={{ marginTop: '1em' }}>
                    Para enviar o lote mensal de bolsistas para pagamento, observe os seguintes procedimentos:
                </Paragraph>
                <List
                    size="small"
                    bordered
                    dataSource={[
                        "Abrir processo no SEI (Sistema Eletrônico de Informações).",
                        "Anexar o formulário específico para o lote mensal, devidamente preenchido com os dados dos bolsistas que devem receber a bolsa no respectivo mês (o modelo do formulário é disponibilizado pela coordenação).",
                        "Enviar o processo completo via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD.",
                    ]}
                    renderItem={(item, index) => (
                        <List.Item style={{ fontSize: '0.95em' }}>
                            <Text>{`${index + 1}. ${item}`}</Text>
                        </List.Item>
                    )}
                    style={{ marginBottom: '1.5em' }}
                />
                <Paragraph
                    style={{
                        backgroundColor: '#fffbe6',
                        border: '1px solid #ffe58f',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        lineHeight: '1.6'
                    }}
                >
                    <Text strong style={{ color: '#d46b08', display: 'block', marginBottom: '4px' }}>ATENÇÃO:</Text>
                    A lista do lote mensal dos bolsistas deve ser encaminhada <Text strong>impreterivelmente até o dia 05 (cinco) de cada mês</Text>. O cumprimento deste prazo é crucial para o processamento pontual dos pagamentos das bolsas.
                </Paragraph>
            </>
        ),
    },
    {
        key: "4",
        icon: <FileAddOutlined />, // Ícone atualizado
        label: "Envio de Lote Complementar de Bolsistas", // Título atualizado
        content: (
            <>
                <Paragraph>
                    Conforme definição da CAPES e dos Coordenadores do Sistema UAB, o pagamento em lote complementar é <Text strong>restrito à parcela do mês imediatamente anterior ao mês vigente</Text>. Não é possível incluir parcelas de meses mais antigos em lotes complementares.
                </Paragraph>
                <Paragraph>
                    É fundamental o acompanhamento e a verificação contínua dos bolsistas aptos a receber pagamentos. Em caso de identificação de erros, omissões ou pendências que não permitiram a inclusão no lote mensal regular, é importante <Text strong>entrar em contato imediatamente com os setores responsáveis</Text> para viabilizar a correção e inclusão em lote complementar, evitando transtornos.
                </Paragraph>
                <Paragraph style={{ marginTop: '1em' }}>
                    Para enviar o lote complementar de bolsistas, observe os seguintes procedimentos:
                </Paragraph>
                <List
                    size="small"
                    bordered
                    dataSource={[
                        "Abrir processo no SEI (Sistema Eletrônico de Informações) específico para o lote complementar.",
                        "Anexar o formulário de lote complementar, devidamente preenchido com os dados dos bolsistas que devem receber a bolsa referente ao mês anterior (o modelo do formulário é disponibilizado pela coordenação).",
                        "Enviar o processo completo via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD.",
                    ]}
                    renderItem={(item, index) => (
                        <List.Item style={{ fontSize: '0.95em' }}>
                            <Text>{`${index + 1}. ${item}`}</Text>
                        </List.Item>
                    )}
                    style={{ marginBottom: '1.5em' }}
                />
                <Paragraph
                    style={{
                        backgroundColor: '#fffbe6',
                        border: '1px solid #ffe58f',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        lineHeight: '1.6'
                    }}
                >
                    <Text strong style={{ color: '#d46b08', display: 'block', marginBottom: '4px' }}>ATENÇÃO:</Text>
                    A lista para o lote complementar de bolsistas (referente à parcela do mês anterior) deve ser encaminhada <Text strong>impreterivelmente até o dia 05 (cinco) de cada mês</Text>. Este prazo visa alinhar o processamento dos pagamentos complementares.
                </Paragraph>
            </>
        ),
    },
    {
        key: "5",
        icon: <AccountBookOutlined />, // Ícone atualizado
        label: "Procedimentos para Viagens: Passagens, Diárias e Conta", // Título atualizado
        content: (
            <>
                {/* --- Solicitação de Passagens --- */}
                <Title level={5} style={{ marginTop: 0, marginBottom: '0.5em' }}>
                    Solicitação de Passagens (Aéreas ou Terrestres)
                </Title>
                <Paragraph>
                    Os custos com passagens para deslocamento a polos ou eventos são cobertos pela UAB, em conformidade com as normativas da UFPR. É responsabilidade do Coordenador de Curso planejar os encontros presenciais com antecedência para solicitação tempestiva.
                </Paragraph>
                <Paragraph>
                    Para solicitar passagens, observe a <Text strong>antecedência mínima de 20 dias</Text> e os seguintes procedimentos:
                </Paragraph>
                <List
                    size="small"
                    bordered
                    dataSource={[
                        "Abrir processo no SEI (Sistema Eletrônico de Informações).",
                        "Preencher e anexar o formulário de solicitação de passagem (modelo fornecido pela coordenação).",
                        "Enviar o processo via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD.",
                    ]}
                    renderItem={(item, index) => (<List.Item style={{ fontSize: '0.95em' }}><Text>{`${index + 1}. ${item}`}</Text></List.Item>)}
                    style={{ marginBottom: '1em' }}
                />
                <Paragraph style={{ backgroundColor: '#e6f7ff', border: '1px solid #91d5ff', padding: '12px 16px', borderRadius: '4px' }}>
                    <Text strong style={{ color: '#096dd9' }}>OBSERVAÇÃO IMPORTANTE:</Text> Não haverá ressarcimento por despesas de deslocamento com veículo próprio. Para cobrir tais custos, o viajante deve solicitar adiantamento de diárias.
                </Paragraph>

                {/* --- Solicitação de Adiantamento de Diárias --- */}
                <Title level={5} style={{ marginTop: '1.5em', marginBottom: '0.5em' }}>
                    Solicitação de Adiantamento de Diárias
                </Title>
                <Paragraph>
                    Os gastos com deslocamento para polos são custeados pela UAB, seguindo parâmetros do Ministério da Educação e normativas da UFPR. Os valores, conforme Anexo I do Decreto nº 6.907/2009, são:
                </Paragraph>
                <List size="small" style={{ marginBottom: '1em', marginLeft: '1em' }}>
                    <List.Item style={{padding: '4px 0'}}><Text strong>R$ 200,60</Text> – para deslocamentos a capitais.</List.Item>
                    <List.Item style={{padding: '4px 0'}}><Text strong>R$ 177,00</Text> – para deslocamentos a outras cidades.</List.Item>
                </List>
                <Paragraph>
                    As diárias são contadas pelo número de pernoites fora da região metropolitana da sede do projeto. Sem pernoite, o valor da diária é reduzido em 50%. A concessão de adiantamento impede o ressarcimento posterior de despesas com hospedagem, alimentação ou locomoção local.
                </Paragraph>
                <Paragraph>
                    Em caso de prorrogação justificada da viagem, a diferença de diárias será ressarcida na prestação de contas (com comprovantes). Em caso de retorno antecipado, as diárias não utilizadas devem ser devolvidas.
                </Paragraph>
                <Paragraph>
                    Para solicitar adiantamento de diárias, observe a <Text strong>antecedência mínima de 20 dias</Text> e o seguinte procedimento:
                </Paragraph>
                <List
                    size="small"
                    bordered
                    dataSource={[
                        "Abrir processo no SEI (se houver solicitação conjunta de passagens e diárias, utilizar um único processo).",
                        "Preencher e anexar o formulário de pedido de adiantamento de diárias (modelo fornecido pela coordenação).",
                        "Enviar o processo via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD.",
                    ]}
                    renderItem={(item, index) => (<List.Item style={{ fontSize: '0.95em' }}><Text>{`${index + 1}. ${item}`}</Text></List.Item>)}
                    style={{ marginBottom: '1.5em' }}
                />

                {/* --- Prestação de Contas --- */}
                <Title level={5} style={{ marginTop: '1.5em', marginBottom: '0.5em' }}>
                    Prestação de Contas de Viagem
                </Title>
                <Paragraph>
                    A prestação de contas deve ocorrer em <Text strong>até 30 dias após o retorno da viagem</Text>.
                </Paragraph>
                <Paragraph style={{ backgroundColor: '#fffbe6', border: '1px solid #ffe58f', padding: '12px 16px', borderRadius: '4px', lineHeight: '1.6' }}>
                    <Text strong style={{ color: '#d46b08' }}>ATENÇÃO:</Text> Novas passagens e/ou diárias não serão concedidas enquanto houver prestação de contas pendente de viagem anterior.
                </Paragraph>
                <Paragraph style={{ marginTop: '1em' }}>
                    Para realizar a prestação de contas:
                </Paragraph>
                <List
                    size="small"
                    bordered
                    dataSource={[
                        "Preencher e anexar o formulário de prestação de contas no mesmo processo SEI da solicitação original de passagem e/ou adiantamento.",
                        "Anexar cópia do cartão de embarque (ida e volta) e documentos que comprovem a participação no evento/atividade que motivou a viagem (ex: certificados, listas de presença).",
                        "Enviar o processo com a prestação de contas via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD.",
                    ]}
                    renderItem={(item, index) => (<List.Item style={{ fontSize: '0.95em' }}><Text>{`${index + 1}. ${item}`}</Text></List.Item>)}
                />
            </>
        ),
    },
    {
        key: "6",
        icon: <FileSyncOutlined />, // Ícone atualizado
        label: "Relatório da Equipe Multidisciplinar", // Título (levemente ajustado para fluidez)
        content: (
            <>
                <Paragraph>
                    A equipe multidisciplinar é fundamental para assessorar a operacionalização dos cursos ofertados no âmbito da Universidade Aberta do Brasil (UAB).
                </Paragraph>
                <Paragraph>
                    <Text strong>Bolsas da Equipe Multidisciplinar:</Text> A equipe pode ser contemplada com bolsas na modalidade "Professor Conteudista". O montante financeiro destinado a essas bolsas corresponde a 6% do valor total das demais modalidades de bolsas disponibilizadas para a instituição. As mensalidades são concedidas no início de cada período letivo, com base nas informações atualizadas no sistema eletrônico de gestão designado pela CAPES.
                </Paragraph>
                <Paragraph>
                    <Text strong>Licenciamento de Recursos Educacionais:</Text> Todos os recursos educacionais produzidos com o fomento das bolsas previstas para a equipe multidisciplinar deverão ser licenciados em conformidade com o Art. 2º, §4º da <Text strong>Resolução CNE/CES nº 01, de 11 de março de 2016</Text>.
                </Paragraph>
                <Paragraph style={{ marginTop: '1em' }}>
                    <Text strong>Importante:</Text> O professor integrante da equipe multidisciplinar UAB/UFPR deverá enviar, mensalmente, um relatório de atividades, seguindo as orientações abaixo:
                </Paragraph>
                <List
                    size="small"
                    bordered
                    dataSource={[
                        "Abrir processo no SEI (Sistema Eletrônico de Informações) e preencher um memorando para o encaminhamento do relatório.",
                        "Preencher o relatório de atividades conforme modelo apresentado pela coordenação, assinando-o devidamente.",
                        "Enviar o processo completo (memorando e relatório assinado) via SEI para UFPR/R/PROGRAD/CIPEAD/NEAD.",
                    ]}
                    renderItem={(item, index) => (<List.Item style={{ fontSize: '0.95em' }}><Text>{`${index + 1}. ${item}`}</Text></List.Item>)}
                    style={{ marginBottom: '1.5em' }}
                />
                <Paragraph
                    style={{
                        backgroundColor: '#fffbe6',
                        border: '1px solid #ffe58f',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        lineHeight: '1.6'
                    }}
                >
                    <Text strong style={{ color: '#d46b08', display: 'block', marginBottom: '4px' }}>ATENÇÃO AO PRAZO:</Text>
                    O relatório de atividades da equipe multidisciplinar deve ser encaminhado <Text strong>impreterivelmente até o dia 05 (cinco) de cada mês</Text>.
                </Paragraph>
            </>
        ),
    },
    {
        key: "7",
        icon: <FileTextOutlined />, // Ícone atualizado para o painel
        label: "Formulários", // Título atualizado
        content: (
            <>
                <Paragraph>
                    Abaixo você encontra os links para os principais formulários e modelos de documentos necessários para os procedimentos da UAB/UFPR. Clique no nome do formulário para visualizá-lo ou baixá-lo (links nominais).
                </Paragraph>

                {/* A) PROCESSOS SELETIVOS */}
                <Title level={5} style={{ marginTop: '1.5em', marginBottom: '0.8em' }}>A) Processos Seletivos</Title>
                <List
                    itemLayout="horizontal"
                    dataSource={[
                        { title: "Minuta Edital Seleção de Tutores" },
                        { title: "Minuta Edital Seleção Professor Formador I" },
                        { title: "Minuta Edital Seleção Professor Formador II" },
                        { title: "Minuta Edital Seleção Professor Conteudista" },
                        { title: "Minuta Edital Seleção de Coordenador de Tutoria" },
                    ]}
                    renderItem={(item) => (
                        <List.Item style={{padding: '8px 0'}}>
                            <AntLink href="#" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95em' }}>
                                <DownloadOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                                {item.title}
                            </AntLink>
                        </List.Item>
                    )}
                />

                {/* B) CADASTRAMENTO DE NOVOS BOLSISTAS */}
                <Title level={5} style={{ marginTop: '1.5em', marginBottom: '0.8em' }}>B) Cadastramento de Novos Bolsistas</Title>
                <List
                    itemLayout="horizontal"
                    dataSource={[
                        { title: "Formulário Coordenador de Curso" },
                        { title: "Formulário Coordenador de Tutoria" },
                        { title: "Formulário Professor Formador" },
                        { title: "Formulário Professor Conteudista" },
                        { title: "Formulário Tutor a Distância/Tutor Presencial" },
                        { title: "Declaração de Acúmulo de Bolsas" },
                        { title: "Formulário de Encerramento de Vínculo de Bolsistas" },
                    ]}
                    renderItem={(item) => (
                        <List.Item style={{padding: '8px 0'}}>
                            <AntLink href="#" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95em' }}>
                                <DownloadOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                                {item.title}
                            </AntLink>
                        </List.Item>
                    )}
                />

                {/* C) ENVIO DE LOTE MENSAL DE BOLSISTAS */}
                <Title level={5} style={{ marginTop: '1.5em', marginBottom: '0.8em' }}>C) Envio de Lote Mensal de Bolsistas</Title>
                <List
                    itemLayout="horizontal"
                    dataSource={[
                        { title: "Formulário Lote Mensal" },
                        { title: "Modelo Relatório de Atividades (Bolsista)" },
                    ]}
                    renderItem={(item) => (
                        <List.Item style={{padding: '8px 0'}}>
                            <AntLink href="#" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95em' }}>
                                <DownloadOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                                {item.title}
                            </AntLink>
                        </List.Item>
                    )}
                />

                {/* D) ENVIO DE LOTE COMPLEMENTAR */}
                <Title level={5} style={{ marginTop: '1.5em', marginBottom: '0.8em' }}>D) Envio de Lote Complementar</Title>
                <List
                    itemLayout="horizontal"
                    dataSource={[
                        { title: "Formulário Lote Complementar" },
                    ]}
                    renderItem={(item) => (
                        <List.Item style={{padding: '8px 0'}}>
                            <AntLink href="#" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95em' }}>
                                <DownloadOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                                {item.title}
                            </AntLink>
                        </List.Item>
                    )}
                />

                {/* E) SOLICITAÇÃO DE PASSAGEM / ADIANTAMENTO DE DIÁRIAS / PRESTAÇÃO DE CONTAS */}
                <Title level={5} style={{ marginTop: '1.5em', marginBottom: '0.8em' }}>E) Viagens e Auxílios (Passagens, Diárias, Contas)</Title>
                <List
                    itemLayout="horizontal"
                    dataSource={[
                        { title: "Formulário de Solicitação de Passagens" },
                        { title: "Formulário de Solicitação de Adiantamento de Diárias" },
                        { title: "Formulário de Prestação de Contas de Viagem" },
                        { title: "Modelo Relatório de Viagem" },
                    ]}
                    renderItem={(item) => (
                        <List.Item style={{padding: '8px 0'}}>
                            <AntLink href="#" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95em' }}>
                                <DownloadOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                                {item.title}
                            </AntLink>
                        </List.Item>
                    )}
                />

                {/* F) RELATÓRIO MENSAL EQUIPE MULTIDISCIPLINAR */}
                <Title level={5} style={{ marginTop: '1.5em', marginBottom: '0.8em' }}>F) Relatório Mensal da Equipe Multidisciplinar</Title>
                <List
                    itemLayout="horizontal"
                    dataSource={[
                        { title: "Modelo Relatório de Atividades (Equipe Multidisciplinar)" },
                    ]}
                    renderItem={(item) => (
                        <List.Item style={{padding: '8px 0'}}>
                            <AntLink href="#" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95em' }}>
                                <DownloadOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                                {item.title}
                            </AntLink>
                        </List.Item>
                    )}
                />
            </>
        ),
    },
];

// O restante do componente OrientacoesGerais.jsx (função, return, export) permanece o mesmo.

const OrientacoesGerais = () => {
    return (
        // Novo container externo com a cor de fundo #f6f6f6
        <div className="paginaWrapper">
            {/* Container interno branco que já existia */}
            <div className="containerOrientacoes">
                <Title level={2} className="tituloPagina">
                    Orientações Gerais
                </Title>
                <Paragraph className="subtituloPagina">
                    Informações importantes para o funcionamento da UAB.
                    Clique nos tópicos abaixo para expandir e ver os detalhes.
                </Paragraph>

                <Collapse
                    accordion
                    bordered={false}
                    className="collapseOrientacoes"
                >
                    {listaOrientacoes.map((orientacao) => (
                        <Panel
                            header={
                                <span className="panelHeader">
                  {orientacao.icon && <span className="panelIcon">{orientacao.icon}</span>}
                                    {orientacao.label}
                </span>
                            }
                            key={orientacao.key}
                            className="painelOrientacao"
                        >
                            <Paragraph>{orientacao.content}</Paragraph>
                        </Panel>
                    ))}
                </Collapse>
            </div>
        </div>
    );
};

export default OrientacoesGerais;