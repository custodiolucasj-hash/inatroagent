 <script>
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
            document.getElementById('mainNav').classList.toggle('active');
        });
        
      
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mainNav').classList.remove('active');
            });
        });
        
       
        document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const formData = {
                nome: document.getElementById('nome').value,
                bi: document.getElementById('bi').value,
                telefone: document.getElementById('telefone').value,
                email: document.getElementById('email').value,
                escola: document.getElementById('escola').value,
                tipoExame: document.getElementById('tipo-exame').value,
                data: document.getElementById('data').value,
                categoria: document.getElementById('categoria').value
            };
            
           
            if (!formData.nome || !formData.bi || !formData.telefone || !formData.escola || !formData.tipoExame || !formData.data || !formData.categoria) {
                alert('Por favor, preencha todos os campos obrigatórios (*)');
                return;
            }
            
            alert(`Agendamento submetido com sucesso!\n\nNome: ${formData.nome}\nEscola: ${formData.escola}\nExame: ${formData.tipoExame}\nData: ${formData.data}\n\nReceberá uma confirmação por SMS em breve.`);
            
           
            document.getElementById('agendamentoForm').reset();
            
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
        
       
        document.getElementById('agendarBtn').addEventListener('click', function() {
            document.getElementById('agendamento').scrollIntoView({behavior: 'smooth'});
        });
        
        document.getElementById('escolaBtn').addEventListener('click', function() {
            alert('Funcionalidade de registro de escola será implementada em breve!');
        });
        
       
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const minDate = tomorrow.toISOString().split('T')[0];
        document.getElementById('data').setAttribute('min', minDate);
                
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>