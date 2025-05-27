import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Clock, Users, ArrowLeft, Search, Filter } from "lucide-react";
import './academy.css';

function Academy() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  
  const courses = [
    {
      id: 1,
      title: "Introdução à Inovação",
      description: "Aprenda os conceitos básicos de inovação e como aplicá-los no seu dia a dia.",
      duration: "2h 30min",
      students: 128,
      level: "Iniciante"
    },
    {
      id: 2,
      title: "Design Thinking",
      description: "Metodologia de design centrado no usuário para resolução de problemas complexos.",
      duration: "4h 15min",
      students: 95,
      level: "Intermediário"
    },
    {
      id: 3,
      title: "Gestão Ágil de Projetos",
      description: "Aprenda a gerenciar projetos com metodologias ágeis como Scrum e Kanban.",
      duration: "5h 45min",
      students: 210,
      level: "Avançado"
    },
    {
      id: 4,
      title: "Liderança Inovadora",
      description: "Desenvolva habilidades de liderança para fomentar a inovação em equipes.",
      duration: "3h 20min",
      students: 76,
      level: "Intermediário"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    return matchesSearch && course.level.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="dashboard-background">
      <div className="academy-container">
        <div className="academy-header">
          <h1>ECOA Academy</h1>
          <p>Aprimore suas habilidades com nossos cursos exclusivos</p>
        </div>

        <div className="academy-content">
          <div className="filters">
            <div className="search-bar">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Buscar cursos..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-options">
              <select 
                className="filter-select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">Todos os níveis</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediário">Intermediário</option>
                <option value="avançado">Avançado</option>
              </select>
            </div>
          </div>

          <div className="courses-grid">
            {filteredCourses.map(course => (
              <div className="course-card" key={course.id}>
                <div className="course-image">
                  <GraduationCap size={60} />
                </div>
                <div className="course-details">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <div className="course-meta">
                    <span><Clock size={14} /> {course.duration}</span>
                    <span><Users size={14} /> {course.students} alunos</span>
                  </div>
                  <div className="course-meta">
                    <span>Nível: {course.level}</span>
                  </div>
                  <Link to="#" className="course-button">
                    Acessar Curso
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Link to="/dashboard" className="back-link">
            <ArrowLeft size={16} /> Voltar para o Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Academy;
