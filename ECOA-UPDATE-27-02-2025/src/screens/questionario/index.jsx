import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, HelpCircle } from "lucide-react";
import './questionario.css';

function Questionario() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const questions = [
    {
      id: 1,
      type: "multiple",
      question: "Qual o nível de maturidade da sua equipe em relação a metodologias ágeis?",
      options: [
        "Iniciante - Ainda não utilizamos metodologias ágeis",
        "Básico - Começamos a implementar algumas práticas",
        "Intermediário - Utilizamos regularmente, mas ainda temos dificuldades",
        "Avançado - Somos proficientes e aplicamos com eficiência"
      ]
    },
    {
      id: 2,
      type: "multiple",
      question: "Com que frequência sua equipe realiza reuniões de retrospectiva?",
      options: [
        "Nunca realizamos",
        "Raramente (menos de uma vez por mês)",
        "Mensalmente",
        "Quinzenalmente",
        "Semanalmente"
      ]
    },
    {
      id: 3,
      type: "text",
      question: "Descreva os principais desafios que sua equipe enfrenta no processo de inovação:"
    },
    {
      id: 4,
      type: "multiple",
      question: "Qual ferramenta de gestão de projetos sua equipe utiliza atualmente?",
      options: [
        "Não utilizamos nenhuma ferramenta específica",
        "Trello",
        "Jira",
        "Asana",
        "Monday",
        "Outra"
      ]
    },
    {
      id: 5,
      type: "text",
      question: "Quais melhorias você sugere para o processo de inovação da sua empresa?"
    }
  ];

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    alert("Questionário enviado com sucesso!");
    // Aqui você poderia enviar as respostas para um servidor
    console.log(answers);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="dashboard-background">
      <div className="questionario-container">
        <div className="questionario-header">
          <h1>Questionário de Avaliação</h1>
          <p>Ajude-nos a entender melhor o processo de inovação da sua equipe</p>
        </div>

        <div className="questionario-content">
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          
          <p>Questão {currentQuestion + 1} de {questions.length}</p>

          <div className="questionario-form">
            <div className="question-card">
              <h3 className="question-title">{currentQuestionData.question}</h3>
              
              {currentQuestionData.type === "multiple" ? (
                <div className="question-options">
                  {currentQuestionData.options.map((option, index) => (
                    <div className="option-item" key={index}>
                      <input 
                        type="radio" 
                        id={`option-${index}`} 
                        name={`question-${currentQuestionData.id}`}
                        checked={answers[currentQuestionData.id] === option}
                        onChange={() => handleAnswerChange(currentQuestionData.id, option)}
                      />
                      <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                  ))}
                </div>
              ) : (
                <textarea 
                  className="text-answer"
                  placeholder="Digite sua resposta aqui..."
                  value={answers[currentQuestionData.id] || ""}
                  onChange={(e) => handleAnswerChange(currentQuestionData.id, e.target.value)}
                ></textarea>
              )}
            </div>

            <div className="navigation-buttons">
              <button 
                className="nav-button back-button"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft size={16} /> Anterior
              </button>
              
              {currentQuestion < questions.length - 1 ? (
                <button 
                  className="nav-button"
                  onClick={handleNext}
                >
                  Próxima <ArrowRight size={16} />
                </button>
              ) : (
                <button 
                  className="nav-button submit-button"
                  onClick={handleSubmit}
                >
                  Enviar <Check size={16} />
                </button>
              )}
            </div>
          </div>

          <Link to="/dashboard" className="back-link">
            <ArrowLeft size={16} /> Voltar para o Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Questionario;
