const baseConhecimentoOMASP = [
    // 1. DISPOSIÇÕES GERAIS
    { pergunta: "o que é a OMASP", keywords: ["omasp", "olimpíada", "matemática", "o que é", "significado"], resposta: "A OMASP é a Olimpíada de Matemática das Escolas Estaduais de São Paulo, realizada pela SEDUC-SP com apoio da AOBM." },
    { pergunta: "qual o objetivo da OMASP", keywords: ["objetivo", "finalidade", "visa", "para que serve"], resposta: "Potencializar a aprendizagem de Matemática e melhorar a proficiência dos estudantes da rede estadual paulista." },
    { pergunta: "quais temas caem na prova", keywords: ["temas", "matéria", "conteúdo", "assuntos", "cai"], resposta: "A prova aborda Geometria, Aritmética, Álgebra, Números, Grandezas e Medidas, Probabilidade, Estatística e Lógica." },
    { pergunta: "quem organiza a OMASP", keywords: ["organização", "quem faz", "responsável", "seduc", "aobm"], resposta: "A SEDUC-SP (Secretaria da Educação) organiza a olimpíada com o apoio técnico da AOBM (Associação da Olimpíada Brasileira de Matemática)." },

    // 2. PÚBLICO E NÍVEIS
    { pergunta: "quem pode participar", keywords: ["participar", "quem", "público", "alunos", "posso"], resposta: "Estudantes do 6º ao 9º ano do Ensino Fundamental e todas as séries do Ensino Médio da rede estadual de SP." },
    { pergunta: "o que é o Nível 1", keywords: ["nível 1", "6 ano", "7 ano", "sexto", "sétimo"], resposta: "O Nível 1 é voltado para estudantes do 6º e 7º anos do Ensino Fundamental." },
    { pergunta: "o que é o Nível 2", keywords: ["nível 2", "8 ano", "9 ano", "oitavo", "nono"], resposta: "O Nível 2 abrange estudantes do 8º e 9º anos do Ensino Fundamental." },
    { pergunta: "o que é o Nível 3", keywords: ["nível 3", "ensino médio", "1 serie", "2 serie", "3 serie", "colegial"], resposta: "O Nível 3 é destinado a todos os estudantes do Ensino Médio (1ª, 2ª e 3ª séries)." },
    { pergunta: "escola integral participa", keywords: ["pei", "tempo integral", "integral", "regular"], resposta: "Sim! Alunos de Escolas de Tempo Integral (PEI) e de Ensino Regular participam com as mesmas regras." },

    // 3. FASE I
    { pergunta: "como funciona a Fase 1", keywords: ["fase 1", "primeira fase", "inscrição", "prova paulista"], resposta: "A Fase 1 usa a nota de Matemática da Prova Paulista do 1º Bimestre de 2026. A inscrição é automática para todos." },
    { pergunta: "quantos passam para a Fase 2", keywords: ["classificação", "quantos passam", "30%", "corte"], resposta: "Passam para a Fase 2 os 30% dos estudantes com melhor desempenho em cada escola, ano e série." },
    { pergunta: "empate na Fase 1", keywords: ["empate", "nota igual", "mesma nota"], resposta: "Se houver empate na nota de corte da escola, todos os estudantes com aquela nota são classificados para a Fase 2." },
    { pergunta: "resultado da Fase 1", keywords: ["resultado", "quando sai", "lista", "divulgação"], resposta: "O resultado sai em até 12 dias úteis após o encerramento da Prova Paulista do 1º Bimestre." },

    // 4. FASE II - REGRAS E DATAS
    { pergunta: "como é a prova da Fase 2", keywords: ["prova fase 2", "formato", "questões", "múltipla escolha"], resposta: "É uma prova on-line com 20 questões de múltipla escolha, feita obrigatoriamente dentro da escola." },
    { pergunta: "duração da prova", keywords: ["tempo", "duração", "minutos", "horas"], resposta: "Você terá exatamente 1 hora e 20 minutos (80 minutos) para concluir a prova da Fase 2." },
    { pergunta: "data do nível 3", keywords: ["data nível 3", "19 de maio", "terça"], resposta: "A prova do Nível 3 (Ensino Médio) acontece no dia 19 de maio de 2026." },
    { pergunta: "data do nível 2", keywords: ["data nível 2", "20 de maio", "quarta"], resposta: "A prova do Nível 2 (8º e 9º anos) acontece no dia 20 de maio de 2026." },
    { pergunta: "data do nível 1", keywords: ["data nível 1", "21 de maio", "quinta"], resposta: "A prova do Nível 1 (6º e 7º anos) acontece no dia 21 de maio de 2026." },
    { pergunta: "pode usar calculadora", keywords: ["calculadora", "celular", "consulta", "internet"], resposta: "Não! É proibido o uso de calculadoras, celulares ou qualquer tipo de consulta externa. O descumprimento gera desclassificação." },
    { pergunta: "pode usar rascunho", keywords: ["rascunho", "folha", "papel", "caneta"], resposta: "Sim! A escola fornecerá folhas de rascunho. Elas devem ser entregues ao fiscal ao final da prova." },
    { pergunta: "horários da prova", keywords: ["horário", "que horas", "manhã", "tarde", "noite"], resposta: "As janelas são: Manhã (08:00-09:20), Tarde (14:00-15:20) ou Noite (19:30-20:50)." },

    // 5. PREMIAÇÃO FASE II
    { pergunta: "medalhas da fase 2", keywords: ["medalha", "ganha", "prêmio", "ouro", "prata", "bronze"], resposta: "São premiados os 5% melhores de cada município por série. Ouro (0,6%), Prata (0,6% a 2%) e Bronze (2% a 5%)." },
    { pergunta: "como funciona o desempate", keywords: ["desempate", "critério", "nota"], resposta: "Os critérios são: 1º Maior nota na Fase 1; 2º Maior frequência escolar (presença)." },
    { pergunta: "prêmio para professores", keywords: ["professor", "docente", "medalha professor"], resposta: "Sim! Professores cujos alunos forem premiados recebem a Medalha Olímpica OMASP." },
    { pergunta: "prêmio para diretores", keywords: ["diretor", "gestão", "escola"], resposta: "Diretores das 20% melhores escolas de cada Regional (URE) recebem a Medalha Olímpica." },

    // 6. FASE III - ESTADUAL
    { pergunta: "quem vai para a Fase 3", keywords: ["fase 3", "final", "estadual", "quem participa"], resposta: "Apenas os medalhistas de OURO da Fase 2 são convocados para a Fase 3 (Estadual)." },
    { pergunta: "data da Fase 3", keywords: ["data fase 3", "6 de agosto", "agosto"], resposta: "A prova da Fase 3 será realizada no dia 06 de agosto de 2026, às 9h." },
    { pergunta: "onde é a prova final", keywords: ["local fase 3", "onde", "sede"], resposta: "A prova é on-line, mas realizada em polos ou escolas específicas definidas pela Regional (URE)." },
    { pergunta: "quantas medalhas no estado", keywords: ["total medalhas", "quantas", "estaduais"], resposta: "Na Fase Estadual são: 225 Ouros, 510 Pratas e 1200 Bronzes distribuídos entre os níveis." },

    // 7. EXTRAS E CONTATO
    { pergunta: "convite OBM", keywords: ["obm", "olimpíada brasileira", "75 primeiros"], resposta: "Os 75 melhores estudantes de cada nível na Fase 3 são convidados para a OBM (Olimpíada Brasileira de Matemática)." },
    { pergunta: "viagem para São Paulo", keywords: ["viagem", "passeio", "capital", "palestra"], resposta: "Medalhistas de ouro estaduais são convidados para cerimônias e palestras especiais na cidade de São Paulo." },
    { pergunta: "e-mail de contato", keywords: ["e-mail", "contato", "duvida", "ajuda", "suporte"], resposta: "O e-mail oficial para suporte é: olimpiadassp@educacao.sp.gov.br." },
    { pergunta: "uso de imagem", keywords: ["imagem", "foto", "vídeo", "autorizo"], resposta: "Ao participar, o aluno autoriza automaticamente o uso de sua imagem para fins pedagógicos e de divulgação da SEDUC-SP." },
    { pergunta: "o que é URE", keywords: ["ure", "diretoria", "regional"], resposta: "URE significa Unidade Regional de Ensino, responsável por organizar a aplicação das provas em sua região." }
];

// DICA: Para chegar em 100, adicione variações de "Data da prova de 6 ano", "Data da prova de 1 serie", etc.