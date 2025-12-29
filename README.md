[admin_login.html](https://github.com/user-attachments/files/24372597/admin_login.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Administrativo - DH PE 2026</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
        body { 
            background: radial-gradient(circle, #001d4d 0%, #000a1a 100%); 
            height: 100vh; display: flex; justify-content: center; align-items: center; 
        }
        .login-card { 
            background: white; padding: 40px; border-radius: 20px; width: 100%; max-width: 400px; 
            box-shadow: 0 20px 40px rgba(0,0,0,0.4); text-align: center;
        }
        .logo-area i { font-size: 50px; color: #003399; margin-bottom: 15px; }
        h2 { color: #001d4d; margin-bottom: 5px; font-weight: 900; }
        p { color: #666; font-size: 14px; margin-bottom: 30px; }

        .input-group { text-align: left; margin-bottom: 20px; }
        label { font-size: 12px; font-weight: 800; color: #003399; text-transform: uppercase; margin-left: 5px; }
        input { 
            width: 100%; padding: 15px; border: 2px solid #eee; border-radius: 12px; 
            font-size: 16px; outline: none; transition: 0.3s;
        }
        input:focus { border-color: #ffcc00; background: #fffdf0; }

        .btn-entrar { 
            width: 100%; padding: 15px; background: #003399; color: white; border: none; 
            border-radius: 12px; font-weight: 900; font-size: 16px; cursor: pointer;
            transition: 0.3s; box-shadow: 0 10px 20px rgba(0,51,153,0.3);
        }
        .btn-entrar:hover { background: #ffcc00; color: #001d4d; transform: translateY(-2px); }
        
        #error-msg { color: #d32f2f; font-size: 13px; margin-top: 15px; font-weight: 600; display: none; }
    </style>
</head>
<body>

    <div class="login-card">
        <div class="logo-area">
            <i class="fas fa-user-shield"></i>
            <h2>DH PE 2026</h2>
            <p>Painel de Controle do Administrador</p>
        </div>

        <div class="input-group">
            <label>CPF do Administrador</label>
            <input type="text" id="admin-cpf" placeholder="000.000.000-00" maxlength="14">
        </div>

        <div class="input-group">
            <label>Senha de Acesso</label>
            <input type="password" id="admin-senha" placeholder="••••••••">
        </div>

        <div id="error-msg">Acesso negado: CPF ou Senha inválidos.</div>

        <button class="btn-entrar" onclick="validarAcesso()">ENTRAR NO SISTEMA</button>
    </div>

    <script>
        // Máscara de CPF automática
        document.getElementById('admin-cpf').addEventListener('input', function(e) {
            let v = e.target.value.replace(/\D/g, "");
            v = v.replace(/(\d{3})(\d)/, "$1.$2");
            v = v.replace(/(\d{3})(\d)/, "$1.$2");
            v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            e.target.value = v;
        });

        function validarAcesso() {
            const cpf = document.getElementById('admin-cpf').value;
            const pass = document.getElementById('admin-senha').value;
            const error = document.getElementById('error-msg');

            // --- CREDENCIAIS DO ADMINISTRADOR ---
            const CPF_CORRETO = "000.000.000-00"; // COLOQUE SEU CPF AQUI COM PONTOS
            const SENHA_CORRETA = "admin2026";    // COLOQUE SUA SENHA AQUI

            if (cpf === CPF_CORRETO && pass === SENHA_CORRETA) {
                localStorage.setItem("admin_auth", "true");
                window.location.href = "admin.html";
            } else {
                error.style.display = "block";
                setTimeout(() => error.style.display = "none", 3000);
            }
        }
    </script>
</body>
</html>[cadastro.html](https://github.com/user-attachments/files/24372602/cadastro.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro Oficial - Downhill PE</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        body { 
            background: linear-gradient(rgba(0, 51, 153, 0.8), rgba(0, 51, 153, 0.8)), 
                        url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Bandeira_de_Pernambuco.svg/1200px-Bandeira_de_Pernambuco.svg.png'); 
            background-size: cover; background-position: center; background-attachment: fixed;
            display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px;
        }
        .box { background: white; padding: 35px; border-radius: 20px; width: 100%; max-width: 650px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); border-top: 8px solid #ffcc00; }
        h2 { color: #003399; text-align: center; margin-bottom: 30px; font-weight: 800; text-transform: uppercase; letter-spacing: -1px; }
        
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        @media (max-width: 550px) { .form-grid { grid-template-columns: 1fr; } }
        
        .full-width { grid-column: span 2; }
        label { display: block; font-size: 11px; font-weight: 700; margin-bottom: 5px; color: #003399; text-transform: uppercase; }
        
        .wrapper { position: relative; display: flex; align-items: center; }
        .wrapper i.icon-left { position: absolute; left: 15px; color: #003399; }
        
        input, select { 
            width: 100%; padding: 12px 12px 12px 45px; border: 2px solid #eee; border-radius: 10px; 
            outline: none; background: #fafafa; font-size: 14px; transition: 0.3s;
        }
        input:focus, select:focus { border-color: #003399; background: white; }

        button { 
            grid-column: span 2; padding: 18px; background: #e63946; color: white; border: none; 
            border-radius: 10px; font-weight: bold; cursor: pointer; margin-top: 15px; font-size: 16px; 
            text-transform: uppercase; transition: 0.3s;
        }
        button:hover { background: #003399; transform: scale(1.02); }
    </style>
</head>
<body>
    <div class="box">
        <h2>CADASTRO DE PILOTO</h2>
        <form id="cadastroForm" class="form-grid">
            
            <div class="group full-width">
                <label>Nome Completo</label>
                <div class="wrapper"><i class="fas fa-user icon-left"></i><input type="text" id="nome" required></div>
            </div>

            <div class="group full-width">
                <label>Sua Foto (Selfie)</label>
                <div class="wrapper"><i class="fas fa-camera icon-left"></i><input type="file" id="selfie" accept="image/*" style="padding: 8px;"></div>
            </div>

            <div class="group">
                <label>Nascimento</label>
                <div class="wrapper"><i class="fas fa-calendar icon-left"></i><input type="date" id="nascimento" required></div>
            </div>

            <div class="group">
                <label>CPF</label>
                <div class="wrapper"><i class="fas fa-id-card icon-left"></i><input type="text" id="cpf" maxlength="14" required placeholder="000.000.000-00"></div>
            </div>

            <div class="group full-width">
                <label>Categoria Oficial</label>
                <div class="wrapper">
                    <i class="fas fa-bicycle icon-left"></i>
                    <select id="categoria" required>
                        <option value="">Selecione sua categoria...</option>
                        <optgroup label="PRO">
                            <option value="ELITE">ELITE (Livre)</option>
                            <option value="RIGIDA PRO">RÍGIDA PRO (Livre)</option>
                            <option value="SUB-30">SUB-30 (19 a 29 anos)</option>
                        </optgroup>
                        <optgroup label="MASTER">
                            <option value="MASTER A1">MASTER A1 (30 a 34 anos)</option>
                            <option value="MASTER A2">MASTER A2 (35 a 39 anos)</option>
                            <option value="MASTER B1">MASTER B1 (40 a 44 anos)</option>
                            <option value="MASTER B2">MASTER B2 (45 a 49 anos)</option>
                            <option value="MASTER C">MASTER C (50 anos +)</option>
                        </optgroup>
                        <optgroup label="BASE">
                            <option value="INFANTO">INFANTO (12 a 14 anos)</option>
                            <option value="JUVENIL">JUVENIL (15 e 16 anos)</option>
                            <option value="JUNIOR">JÚNIOR (17 e 18 anos)</option>
                        </optgroup>
                        <optgroup label="OUTROS">
                            <option value="FEMININO">FEMININO (Livre)</option>
                            <option value="ESTREANTE">ESTREANTE (Livre)</option>
                        </optgroup>
                    </select>
                </div>
            </div>

            <div class="group">
                <label>Equipe / Patrocínio</label>
                <div class="wrapper"><i class="fas fa-users icon-left"></i><input type="text" id="equipe" placeholder="Sua equipe"></div>
            </div>

            <div class="group">
                <label>Tipo Sanguíneo</label>
                <div class="wrapper"><i class="fas fa-tint icon-left"></i><select id="sangue">
                    <option value="A+">A+</option><option value="O+">O+</option><option value="B+">B+</option><option value="AB+">AB+</option>
                    <option value="A-">A-</option><option value="O-">O-</option><option value="B-">B-</option><option value="AB-">AB-</option>
                </select></div>
            </div>

            <div class="group full-width">
                <label>Crie sua Senha</label>
                <div class="wrapper"><i class="fas fa-lock icon-left"></i><input type="password" id="pass" required></div>
            </div>

            <button type="submit">CONCLUIR CADASTRO</button>
        </form>
    </div>

    <script>
        document.getElementById('cpf').addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '');
            v = v.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = v;
        });

        document.getElementById('cadastroForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const file = document.getElementById('selfie').files[0];
            const dados = {
                nome: document.getElementById('nome').value,
                nascimento: document.getElementById('nascimento').value,
                cpf: document.getElementById('cpf').value,
                categoria: document.getElementById('categoria').value,
                equipe: document.getElementById('equipe').value,
                sangue: document.getElementById('sangue').value,
                senha: document.getElementById('pass').value,
                foto: ""
            };

            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => { 
                    dados.foto = reader.result; 
                    localStorage.setItem('usuarioPiloto', JSON.stringify(dados)); 
                    alert("Cadastro Realizado com sucesso!");
                    window.location.href="perfil.html"; 
                };
                reader.readAsDataURL(file);
            } else { 
                localStorage.setItem('usuarioPiloto', JSON.stringify(dados)); 
                window.location.href="perfil.html"; 
            }
        });
    </script>
</body>
</html>[login.html](https://github.com/user-attachments/files/24372605/login.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Downhill PE</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        body { 
            background: linear-gradient(rgba(0, 51, 153, 0.7), rgba(0, 51, 153, 0.7)), 
                        url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Bandeira_de_Pernambuco.svg/1200px-Bandeira_de_Pernambuco.svg.png'); 
            background-size: cover; background-position: center; background-attachment: fixed;
            display: flex; justify-content: center; align-items: center; min-height: 100vh;
        }
        .login-box { 
            background: white; padding: 50px 40px; border-radius: 25px; width: 90%; max-width: 400px; text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4); border-bottom: 8px solid #ffcc00;
        }
        .icon-bike { font-size: 60px; color: #e63946; margin-bottom: 15px; }
        h2 { color: #003399; font-size: 28px; font-weight: 900; margin-bottom: 30px; text-transform: uppercase; }
        input { width: 100%; padding: 14px; margin-bottom: 15px; border: 2px solid #f0f0f0; border-radius: 12px; outline: none; font-size: 16px; background: #fafafa; }
        button { width: 100%; padding: 16px; background: #003399; color: white; border: none; border-radius: 12px; font-weight: bold; font-size: 16px; cursor: pointer; transition: 0.3s; text-transform: uppercase; }
        button:hover { background: #002266; transform: translateY(-2px); }
        .links { margin-top: 25px; font-size: 14px; color: #666; }
        a { color: #e63946; text-decoration: none; font-weight: bold; }
    </style>
</head>
<body>
    <div class="login-box">
        <i class="fas fa-bicycle icon-bike"></i>
        <h2>DOWNHILL PE</h2>
        <input type="text" id="loginCpf" placeholder="Digite seu CPF">
        <input type="password" id="loginPass" placeholder="Sua Senha">
        <button onclick="fazerLogin()">ACESSAR MINHA CONTA</button>
        <div class="links">
            <p>Ainda não tens conta? <br> <a href="cadastro.html">Cadastrar Piloto Agora</a></p>
        </div>
    </div>
    <script>
        function fazerLogin() {
            const cpf = document.getElementById('loginCpf').value;
            const pass = document.getElementById('loginPass').value;
            const salvo = JSON.parse(localStorage.getItem('usuarioPiloto'));
            if (salvo && salvo.cpf === cpf && salvo.senha === pass) {
                window.location.href = "dashboard.html";
            } else { alert("CPF ou Senha incorretos!"); }
        }
        document.getElementById('loginCpf').addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '');
            v = v.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = v;
        });
    </script>
</body>
</html>[menu.html](https://github.com/user-attachments/files/24372609/menu.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal Downhill PE</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        
        body { 
            background: linear-gradient(rgba(0, 51, 153, 0.7), rgba(0, 0, 0, 0.8)), 
                        url('https://images.unsplash.com/photo-1544191161-50f6652c0d46?q=80&w=2070&auto=format&fit=crop'); 
            background-size: cover; 
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .header-menu {
            text-align: center;
            color: white;
            margin-bottom: 40px;
        }

        .header-menu h1 { font-size: 32px; font-weight: 900; letter-spacing: 2px; }
        .header-menu p { color: #ffcc00; font-weight: bold; text-transform: uppercase; font-size: 14px; }

        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 15px;
            width: 100%;
            max-width: 900px;
        }

        .menu-item {
            background: rgba(255, 255, 255, 0.95);
            padding: 25px 10px;
            border-radius: 20px;
            text-align: center;
            text-decoration: none;
            color: #003399;
            font-weight: bold;
            transition: 0.3s;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
            border-bottom: 4px solid #ffcc00;
        }

        .menu-item:hover {
            transform: translateY(-5px);
            background: #ffcc00;
            color: #003399;
            border-bottom-color: #003399;
        }

        .menu-item i {
            font-size: 30px;
            margin-bottom: 12px;
        }

        .menu-item span {
            font-size: 12px;
            text-transform: uppercase;
            line-height: 1.2;
        }

        .highlight {
            background: #fffdf0;
            border-left: 2px solid #ffcc00;
        }

        /* ESTILO DA ÁREA DO ORGANIZADOR */
        .admin-item {
            background: #e63946;
            color: white;
            border-bottom-color: #9b1c2e;
        }
        
        .admin-item:hover {
            background: #c12a36;
            color: white;
            border-bottom-color: white;
        }

        .admin-item i { color: white; }
    </style>
</head>
<body>

    <div class="header-menu">
        <h1 id="boas-vindas">DOWNHILL PE</h1>
        <p>Painel do Piloto</p>
    </div>

    <div class="menu-grid">
        <a href="#" class="menu-item highlight">
            <i class="fas fa-file-signature"></i>
            <span>Inscrições</span>
        </a>

        <a href="#" class="menu-item highlight">
            <i class="fas fa-calendar-check"></i>
            <span>Mensalidade</span>
        </a>

        <a href="dashboard.html" class="menu-item">
            <i class="fas fa-id-card"></i>
            <span>Minha Carteira</span>
        </a>

        <a href="#" class="menu-item">
            <i class="fas fa-trophy"></i>
            <span>Ranking</span>
        </a>

        <a href="#" class="menu-item">
            <i class="fas fa-stopwatch"></i>
            <span>Tempos</span>
        </a>

        <a href="#" class="menu-item">
            <i class="fas fa-hospital-user"></i>
            <span>Plano Cirurgia</span>
        </a>

        <a href="#" class="menu-item">
            <i class="fas fa-truck-pickup"></i>
            <span>Transporte</span>
        </a>

        <a href="#" class="menu-item">
            <i class="fas fa-user-check"></i>
            <span>Afiliação</span>
        </a>

        <a href="#" class="menu-item">
            <i class="fas fa-handshake"></i>
            <span>Parcerias</span>
        </a>

        <a href="#" class="menu-item admin-item">
            <i class="fas fa-user-shield"></i>
            <span>Área Organizador</span>
        </a>
    </div>

    <script>
        const piloto = JSON.parse(localStorage.getItem('usuarioPiloto'));
        if(piloto && piloto.nome) {
            const primeiroNome = piloto.nome.split(' ')[0];
            document.getElementById('boas-vindas').innerText = `ATLETA: ${primeiroNome.toUpperCase()}`;
        }
    </script>
</body>
</html>[calendario para inscicoes.html](https://github.com/user-attachments/files/24372610/calendario.para.inscicoes.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscrições e Calendário 2026 - Downhill PE</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        
        body {
            background: linear-gradient(rgba(0, 51, 153, 0.8), rgba(0, 0, 0, 0.9)), 
                        url('https://images.unsplash.com/photo-1544191161-50f6652c0d46?q=80&w=2070&auto=format&fit=crop');
            background-size: cover;
            background-attachment: fixed;
            color: white;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        .header { text-align: center; margin-bottom: 30px; }
        .header h1 { font-size: 28px; color: #ffcc00; font-weight: 900; }
        .header p { font-size: 14px; color: #fff; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }

        .lista-etapas {
            width: 100%;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .etapa-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 20px;
            color: #333;
            cursor: pointer;
            transition: 0.3s;
            border-left: 10px solid #003399;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .etapa-card:hover { transform: scale(1.03); background: #ffcc00; }
        .etapa-card.cbc { border-left-color: #27ae60; }

        .etapa-info h2 { font-size: 18px; color: #003399; margin-bottom: 5px; }
        .etapa-info p { font-size: 13px; color: #555; font-weight: 600; }
        
        .badge-cbc {
            background: #27ae60;
            color: white;
            font-size: 10px;
            padding: 3px 8px;
            border-radius: 4px;
            font-weight: bold;
        }

        .icon-click { color: #003399; font-size: 20px; opacity: 0.5; }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.85);
            backdrop-filter: blur(5px);
            z-index: 1000;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .modal-content {
            background: white;
            color: #333;
            padding: 30px;
            border-radius: 25px;
            width: 100%;
            max-width: 400px;
            text-align: center;
            position: relative;
        }

        .btn-acao {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            padding: 15px;
            margin-top: 12px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            transition: 0.2s;
        }

        .btn-inscricao { background: #003399; color: white; }
        .btn-pagamento { background: #27ae60; color: white; }
        .btn-fechar { color: #888; text-decoration: none; font-size: 13px; display: inline-block; margin-top: 20px; }

        .btn-voltar-home {
            margin-top: 30px;
            color: #ffcc00;
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>INSCRIÇÕES E CALENDÁRIO 2026</h1>
        <p>Downhill Pernambucano</p>
    </div>

    <div class="lista-etapas">
        <div class="etapa-card" onclick="abrirDetalhes('1ª ETAPA - OURICURI', '25 e 26 de Abril de 2026', 'Pista do Tambor', 'Válida pelo Pernambucano')">
            <div class="etapa-info">
                <h2>OURICURI</h2>
                <p><i class="far fa-calendar-alt"></i> 25 e 26 de Abril</p>
            </div>
            <i class="fas fa-chevron-right icon-click"></i>
        </div>

        <div class="etapa-card" onclick="abrirDetalhes('2ª ETAPA - CARUARU', '16 e 17 de Maio de 2026', 'Morro do Bom Jesus', 'Válida pelo Pernambucano')">
            <div class="etapa-info">
                <h2>CARUARU</h2>
                <p><i class="far fa-calendar-alt"></i> 16 e 17 de Maio</p>
            </div>
            <i class="fas fa-chevron-right icon-click"></i>
        </div>

        <div class="etapa-card cbc" onclick="abrirDetalhes('3ª ETAPA - SANTA CRUZ', '28 e 29 de Agosto de 2026', 'Serra do Pará', 'Válida pelo Pernambucano e Nacional CBC')">
            <div class="etapa-info">
                <h2>SANTA CRUZ <span class="badge-cbc">CBC</span></h2>
                <p><i class="far fa-calendar-alt"></i> 28 e 29 de Agosto</p>
            </div>
            <i class="fas fa-chevron-right icon-click"></i>
        </div>

        <div class="etapa-card" onclick="abrirDetalhes('4ª ETAPA - GRAVATÁ', '19 e 20 de Setembro de 2026', 'Pista da Serra', 'Grande Final do Campeonato')">
            <div class="etapa-info">
                <h2>GRAVATÁ</h2>
                <p><i class="far fa-calendar-alt"></i> 19 e 20 de Setembro</p>
            </div>
            <i class="fas fa-chevron-right icon-click"></i>
        </div>
    </div>

    <a href="index.html" class="btn-voltar-home"><i class="fas fa-arrow-left"></i> VOLTAR AO PAINEL</a>

    <div id="modalDetalhes" class="modal">
        <div class="modal-content">
            <h2 id="modalTitulo" style="color: #003399; font-size: 22px;"></h2>
            <p id="modalData" style="font-weight: bold; margin-top: 10px; color: #e67e22;"></p>
            <p id="modalLocal" style="margin-bottom: 20px; color: #666; font-size: 14px; white-space: pre-line;"></p>
            
            <hr style="opacity: 0.2;">

            <a href="form-inscricao.html" class="btn-acao btn-inscricao">
                <i class="fas fa-file-signature"></i> FAZER INSCRIÇÃO
            </a>
            <a href="pagamento.html" class="btn-acao btn-pagamento">
                <i class="fas fa-pix"></i> PAGAR INSCRIÇÃO
            </a>
            
            <a href="javascript:void(0)" class="btn-fechar" onclick="fecharModal()">FECHAR JANELA</a>
        </div>
    </div>

    <script>
        function abrirDetalhes(titulo, data, local, detalhes) {
            document.getElementById('modalTitulo').innerText = titulo;
            document.getElementById('modalData').innerText = data;
            document.getElementById('modalLocal').innerText = local + "\n" + detalhes;
            document.getElementById('modalDetalhes').style.display = 'flex';
            
            // Opcional: Salva a etapa escolhida para usar no formulário depois
            localStorage.setItem('etapaSelecionada', titulo);
        }

        function fecharModal() {
            document.getElementById('modalDetalhes').style.display = 'none';
        }

        window.onclick = function(event) {
            const modal = document.getElementById('modalDetalhes');
            if (event.target == modal) {
                fecharModal();
            }
        }
    </script>
</body>
</html>[área ouricuri.html](https://github.com/user-attachments/files/24372611/area.ouricuri.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel Administrativo - DH PE</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        body { background: #f4f7f6; color: #333; padding-bottom: 50px; }

        .top-bar { 
            background: #003399; color: white; padding: 15px 30px; 
            display: flex; justify-content: space-between; align-items: center;
            position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        .saldo-topo { background: #ffcc00; color: #003399; padding: 8px 15px; border-radius: 8px; font-weight: 900; font-size: 18px; }

        .container { max-width: 1000px; margin: 30px auto; padding: 0 20px; }

        /* Stats Grid */
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 20px; }
        .stat-icon { width: 45px; height: 45px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
        .pagas { background: #e8f5e9; color: #27ae60; }
        .pendentes { background: #fff3e0; color: #f39c12; }

        /* Seções */
        .secao-card { background: white; border-radius: 15px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin-bottom: 30px; }
        .secao-card h3 { margin-bottom: 15px; color: #003399; border-left: 5px solid #ffcc00; padding-left: 10px; font-size: 16px; }

        /* Configuração PIX */
        .config-pix { background: #fdfdfd; border: 1px solid #eee; display: flex; flex-wrap: wrap; gap: 15px; align-items: flex-end; }
        .input-group { display: flex; flex-direction: column; gap: 5px; flex: 1; min-width: 200px; }
        .input-group label { font-size: 12px; font-weight: bold; color: #666; }
        .input-group input { padding: 10px; border: 1px solid #ddd; border-radius: 8px; outline: none; }
        .btn-salvar-pix { background: #003399; color: white; border: none; padding: 11px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; }

        table { width: 100%; border-collapse: collapse; }
        th { text-align: left; padding: 12px; color: #888; font-size: 12px; border-bottom: 2px solid #f4f4f4; text-transform: uppercase; }
        td { padding: 15px 12px; border-bottom: 1px solid #f4f4f4; font-size: 14px; }

        .btn-detalhe { background: #eee; border: none; padding: 6px 12px; border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 12px; }

        /* Modal */
        .modal { display: none; position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:200; justify-content:center; align-items:center; }
        .modal-content { background:white; padding:30px; border-radius:20px; width:90%; max-width:400px; }
        .modal-content p { margin-bottom: 10px; font-size: 15px; color: #444; }
        .modal-content strong { color: #003399; }
    </style>
</head>
<body>

    <div class="top-bar">
        <div><i class="fas fa-bicycle"></i> <strong>ADMIN | <span id="etapa-nome">ETAPA</span></strong></div>
        <div class="saldo-topo" id="saldo-atual">R$ 0,00</div>
    </div>

    <div class="container">
        
        <div class="secao-card config-pix">
            <div style="width: 100%; margin-bottom: 10px;">
                <h3><i class="fas fa-id-card"></i> Dados de Recebimento da Etapa</h3>
            </div>
            <div class="input-group">
                <label>Chave PIX</label>
                <input type="text" id="chave-pix-input" placeholder="CPF, E-mail ou Celular">
            </div>
            <div class="input-group">
                <label>Titular da Conta</label>
                <input type="text" id="titular-pix-input" placeholder="Nome Completo">
            </div>
            <button class="btn-salvar-pix" onclick="salvarConfigPix()">SALVAR DADOS</button>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon pagas"><i class="fas fa-check-circle"></i></div>
                <div><p style="font-size: 11px; color: #888;">INSCRIÇÕES PAGAS</p><h2 id="count-pagas">0</h2></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon pendentes"><i class="fas fa-clock"></i></div>
                <div><p style="font-size: 11px; color: #888;">PENDENTES</p><h2 id="count-pendentes">0</h2></div>
            </div>
        </div>

        <div class="secao-card">
            <h3>Gerenciar Inscritos</h3>
            <table>
                <thead><tr><th>ATLETA</th><th>CATEGORIA</th><th>STATUS</th><th></th></tr></thead>
                <tbody id="lista-atletas"></tbody>
            </table>
        </div>
    </div>

    <div id="modalAtleta" class="modal">
        <div class="modal-content">
            <h3 id="det-nome" style="color:#003399; margin-bottom: 20px;">Nome do Atleta</h3>
            <p><strong><i class="fas fa-map-marker-alt"></i> Cidade:</strong> <span id="det-cidade"></span></p>
            <p><strong><i class="fas fa-id-card"></i> CPF:</strong> <span id="det-cpf"></span></p>
            <p><strong><i class="fas fa-users"></i> Equipe:</strong> <span id="det-equipe"></span></p>
            <p><strong><i class="fas fa-tag"></i> Categoria:</strong> <span id="det-cat"></span></p>
            
            <button id="btn-aprovar-manual" style="width:100%; margin-top:20px; padding:15px; background:#27ae60; color:white; border:none; border-radius:12px; font-weight:bold; cursor:pointer; display:none;">CONFIRMAR PAGAMENTO</button>
            <button onclick="fecharModal()" style="width:100%; margin-top:10px; padding:10px; background:#f4f4f4; border:none; border-radius:12px; cursor:pointer; font-weight:bold; color:#666;">VOLTAR</button>
        </div>
    </div>

    <script>
        const etapaAtual = localStorage.getItem('adminEtapa') || "OURICURI";
        
        let db_atletas = {
            "OURICURI": [
                { id: 1, nome: "Bruno Rocha", categoria: "Elite", status: "Pendente", cpf: "123.456.789-00", equipe: "Sertão DH", cidade: "Ouricuri-PE" },
                { id: 2, nome: "João Silva", categoria: "Master A", status: "Pago", cpf: "444.555.666-11", equipe: "Avulso", cidade: "Araripina-PE" }
            ],
            "CARUARU": [
                { id: 3, nome: "Ricardo Melo", categoria: "Master B", status: "Pago", cpf: "987.654.321-00", equipe: "DH Caruaru", cidade: "Caruaru-PE" }
            ]
        };

        let historicoKey = `historico_${etapaAtual}`;
        let pixKey = `pix_config_${etapaAtual}`;
        let historico = JSON.parse(localStorage.getItem(historicoKey)) || [];
        
        function carregarConfigPix() {
            const config = JSON.parse(localStorage.getItem(pixKey));
            if(config) {
                document.getElementById('chave-pix-input').value = config.chave;
                document.getElementById('titular-pix-input').value = config.titular;
            }
        }

        function salvarConfigPix() {
            const chave = document.getElementById('chave-pix-input').value;
            const titular = document.getElementById('titular-pix-input').value;
            localStorage.setItem(pixKey, JSON.stringify({ chave, titular }));
            alert("Dados PIX salvos!");
        }

        function atualizarPainel() {
            document.getElementById('etapa-nome').innerText = etapaAtual;
            const lista = document.getElementById('lista-atletas');
            lista.innerHTML = "";
            let pagas = 0, pendentes = 0;

            const atletasEtapa = db_atletas[etapaAtual] || [];

            atletasEtapa.forEach(a => {
                if(a.status === "Pago") pagas++; else pendentes++;
                lista.innerHTML += `
                    <tr>
                        <td><strong>${a.nome}</strong></td>
                        <td>${a.categoria}</td>
                        <td><b style="color:${a.status==='Pago'?'#27ae60':'#f39c12'}">${a.status}</b></td>
                        <td style="text-align:right"><button class="btn-detalhe" onclick="verAtleta(${a.id})">DETALHES</button></td>
                    </tr>`;
            });

            document.getElementById('count-pagas').innerText = pagas;
            document.getElementById('count-pendentes').innerText = pendentes;
            
            // O saldo ainda é calculado pelo histórico interno para manter a precisão
            const total = historico.filter(h => h.tipo === 'entrada').reduce((acc, h) => acc + h.valor, 0);
            document.getElementById('saldo-atual').innerText = "R$ " + total.toFixed(2);
            
            localStorage.setItem(historicoKey, JSON.stringify(historico));
        }

        function verAtleta(id) {
            const a = db_atletas[etapaAtual].find(x => x.id === id);
            document.getElementById('det-nome').innerText = a.nome;
            document.getElementById('det-cidade').innerText = a.cidade;
            document.getElementById('det-cpf').innerText = a.cpf;
            document.getElementById('det-equipe').innerText = a.equipe;
            document.getElementById('det-cat').innerText = a.categoria;

            const btn = document.getElementById('btn-aprovar-manual');
            btn.style.display = a.status === "Pendente" ? "block" : "none";
            btn.onclick = () => { 
                a.status = "Pago"; 
                historico.push({ data: new Date().toLocaleDateString(), desc: `Inscrição: ${a.nome}`, valor: 120.00, tipo: "entrada" });
                fecharModal(); 
                atualizarPainel(); 
            };
            document.getElementById('modalAtleta').style.display = "flex";
        }

        function fecharModal() { document.getElementById('modalAtleta').style.display = "none"; }
        
        carregarConfigPix();
        atualizarPainel();
    </script>
</body>
</html>[área de pagamento.html](https://github.com/user-attachments/files/24372617/area.de.pagamento.html)

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscri��o Ouricuri 2026</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        body { background: #f0f2f5; color: #333; padding-bottom: 100px; }

        .header-etapa {
            background: #003399;
            color: white;
            padding: 30px 20px;
            text-align: center;
            border-bottom: 5px solid #ffcc00;
        }

        .valor-inscricao {
            background: #ffcc00;
            color: #003399;
            display: inline-block;
            padding: 10px 20px;
            border-radius: 10px;
            font-weight: 900;
            font-size: 24px;
            margin-top: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .container { max-width: 500px; margin: 20px auto; padding: 0 15px; }

        .card { background: white; border-radius: 15px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .card h3 { color: #003399; margin-bottom: 15px; font-size: 18px; border-left: 4px solid #ffcc00; padding-left: 10px; }

        /* Estilo das Categorias */
        .grid-categorias { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .categoria-item {
            background: #fff;
            border: 2px solid #ddd;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
            transition: 0.3s;
            font-weight: bold;
            font-size: 14px;
        }
        .categoria-item:hover { border-color: #ffcc00; background: #fffdf0; }
        .categoria-item.selected { border-color: #003399; background: #003399; color: white; }

        /* Avisos Obrigat�rios */
        .alerta { background: #fff5f5; border-left: 4px solid #e74c3c; padding: 15px; border-radius: 8px; }
        .alerta li { font-size: 13px; color: #c0392b; margin-left: 20px; margin-bottom: 5px; }

        /* Bot�o Flutuante */
        .footer-action {
            position: fixed;
            bottom: 0; left: 0; width: 100%;
            background: white;
            padding: 20px;
            box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
            display: flex;
            justify-content: center;
            z-index: 1000;
        }
        .btn-pagar {
            background: #27ae60;
            color: white;
            width: 100%;
            max-width: 400px;
            padding: 15px;
            border-radius: 10px;
            text-decoration: none;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
            display: none; /* S� aparece ao selecionar categoria */
        }
    </style>
</head>
<body>

    <div class="header-etapa">
        <p>1� ETAPA - PERNAMBUCANO 2026</p>
        <h1>OURICURI - PE</h1>
        <div class="valor-inscricao">R$ 120,00</div>
    </div>

    <div class="container">
        <div class="card">
            <h3>Selecione sua Categoria</h3>
            <div class="grid-categorias" id="listaCategorias">
                <div class="categoria-item" onclick="selecionar(this, 'Iniciante')">Iniciante</div>
                <div class="categoria-item" onclick="selecionar(this, 'Junior')">Junior</div>
                <div class="categoria-item" onclick="selecionar(this, 'R�gida')">R�gida</div>
                <div class="categoria-item" onclick="selecionar(this, 'Master A')">Master A</div>
                <div class="categoria-item" onclick="selecionar(this, 'Master B')">Master B</div>
                <div class="categoria-item" onclick="selecionar(this, 'Sub-30')">Sub-30</div>
                <div class="categoria-item" onclick="selecionar(this, 'Elite')">Elite</div>
                <div class="categoria-item" onclick="selecionar(this, 'Feminina')">Feminina</div>
            </div>
        </div>

        <div class="card">
            <h3>Lembretes Obrigat�rios</h3>
            <div class="alerta">
                <p style="font-weight: bold; margin-bottom: 10px;">Equipamentos de Seguran�a:</p>
                <ul>
                    <li>Capacete Integral (Full Face) com trava.</li>
                    <li>Protetor de coluna ou Colete.</li>
                    <li>Joelheiras e luvas.</li>
                    <li>Cal�ado fechado resistente.</li>
                </ul>
                <p style="margin-top: 10px; font-size: 12px; font-weight: bold; color: #e74c3c;">
                    <i class="fas fa-exclamation-triangle"></i> O descumprimento ocasionar� puni��o ou desclassifica��o imediata.
                </p>
            </div>
        </div>
    </div>

    <div class="footer-action">
        <a href="pagamento.html" class="btn-pagar" id="botaoPagar">
            IR PARA O PAGAMENTO <i class="fas fa-chevron-right"></i>
        </a>
    </div>

    <script>
        let categoriaEscolhida = "";

        function selecionar(elemento, categoria) {
            // Remove sele��o dos outros
            const itens = document.querySelectorAll('.categoria-item');
            itens.forEach(i => i.classList.remove('selected'));

            // Adiciona sele��o ao clicado
            elemento.classList.add('selected');
            categoriaEscolhida = categoria;

            // Salva para o sistema usar depois
            localStorage.setItem('categoriaInscricao', categoria);
            localStorage.setItem('valorEtapa', '120.00'); // Valor para o financeiro
            
            // Mostra o bot�o de pagamento
            document.getElementById('botaoPagar').style.display = 'block';
        }
    </script>
</body>
</html>[carteirinha.html](https://github.com/user-attachments/files/24372620/carteirinha.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carteirinha - Downhill PE</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        body { background: #f0f2f5; display: flex; flex-direction: column; align-items: center; min-height: 100vh; padding: 20px; }
        
        .card { background: white; width: 100%; max-width: 380px; border-radius: 25px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.1); border: 2px solid #003399; }
        .card-header { background: #003399; color: white; padding: 25px; text-align: center; border-bottom: 6px solid #ffcc00; }
        
        .profile-box { width: 100px; height: 100px; border-radius: 50%; border: 4px solid white; background: #eee; margin: 0 auto 10px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        #view-foto { width: 100%; height: 100%; object-fit: cover; }
        
        h2 { text-transform: uppercase; font-size: 18px; font-weight: 800; }
        .card-body { padding: 20px; }

        .info { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px; }
        .info label { display: block; font-size: 9px; color: #888; text-transform: uppercase; font-weight: 700; }
        .info p { font-weight: bold; color: #333; font-size: 14px; }

        .highlight-box { background: #f8f9fa; padding: 10px; border-radius: 10px; border-left: 4px solid #003399; grid-column: span 2; margin-top: 5px; }
        .emergency-box { background: #fff3f3; padding: 10px; border-radius: 10px; border-left: 4px solid #e63946; grid-column: span 2; }
        
        .qrcode-box { display: flex; justify-content: center; padding: 10px; background: white; margin-top: 5px; }
        .btn-print { margin-top: 20px; padding: 15px 30px; background: #003399; color: white; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; width: 100%; max-width: 380px; }
    </style>
</head>
<body>

    <div class="card" id="printArea">
        <div class="card-header">
            <div class="profile-box">
                <img id="view-foto" src="" style="display:none;">
                <i id="foto-padrao" class="fas fa-user-ninja" style="font-size: 40px; color: #999;"></i>
            </div>
            <h2 id="view-nome">CARREGANDO...</h2>
        </div>

        <div class="card-body">
            <div class="info">
                <div><label>CPF</label><p id="view-cpf">---</p></div>
                <div><label>Sangue</label><p id="view-sangue" style="color:#e63946">---</p></div>
                
                <div class="highlight-box">
                    <label>Cartão SUS</label>
                    <p id="view-sus" style="color: #003399; font-size: 16px;">---</p>
                </div>

                <div class="emergency-box">
                    <label style="color: #e63946;">Emergência Familiar</label>
                    <p id="view-emergencia" style="font-size: 16px;">---</p>
                </div>
            </div>

            <div class="qrcode-box" id="qrcode"></div>
            <p style="text-align: center; font-size: 8px; color: #aaa; margin-top: 5px;">SCAN PARA DADOS DE RESGATE</p>
        </div>
    </div>

    <button class="btn-print" onclick="window.print()">IMPRIMIR CARTEIRA</button>

    <script>
        const piloto = JSON.parse(localStorage.getItem('usuarioPiloto'));

        if(piloto) {
            document.getElementById('view-nome').innerText = piloto.nome;
            document.getElementById('view-cpf').innerText = piloto.cpf;
            document.getElementById('view-sangue').innerText = piloto.sangue;
            document.getElementById('view-sus').innerText = piloto.sus || "NÃO INFORMADO";
            document.getElementById('view-emergencia').innerText = piloto.emergencia || "NÃO INFORMADO";
            
            if(piloto.foto){
                document.getElementById('view-foto').src = piloto.foto;
                document.getElementById('view-foto').style.display = "block";
                document.getElementById('foto-padrao').style.display = "none";
            }

            // Gerando QR Code com todas as informações, incluindo emergência
            new QRCode(document.getElementById("qrcode"), { 
                text: `PILOTO: ${piloto.nome}\nSANGUE: ${piloto.sangue}\nSUS: ${piloto.sus}\nEMERGÊNCIA: ${piloto.emergencia}`, 
                width: 100, 
                height: 100,
                colorDark : "#003399"
            });
        }
    </script>
</body>
</html>[login organizador.html](https://github.com/user-attachments/files/24372621/login.organizador.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Login Organizador</title>
    <style>
        body { background: #001a4d; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; }
        .login-box { background: white; padding: 40px; border-radius: 20px; width: 350px; text-align: center; }
        input, select { width: 100%; padding: 12px; margin: 10px 0; border: 1px solid #ddd; border-radius: 8px; }
        button { width: 100%; padding: 15px; background: #ffcc00; border: none; font-weight: bold; cursor: pointer; border-radius: 8px; }
    </style>
</head>
<body>
    <div class="login-box">
        <h2>Área do Organizador</h2>
        <select id="etapa">
            <option value="OURICURI">Ouricuri</option>
            <option value="CARUARU">Caruaru</option>
            <option value="SANTA CRUZ">Santa Cruz</option>
            <option value="GRAVATÁ">Gravatá</option>
        </select>
        <input type="text" id="cpf" placeholder="CPF">
        <input type="password" id="pass" placeholder="Senha">
        <button onclick="logar()">ENTRAR</button>
    </div>
    <script>
        function logar() {
            const etapa = document.getElementById('etapa').value;
            localStorage.setItem('adminEtapa', etapa);
            window.location.href = 'admin.html';
        }
    </script>
</body>
</html>[plano cirugia.html](https://github.com/user-attachments/files/24372627/plano.cirugia.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plano Cirurgia - DH PE</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
        body { background: #f0f2f5; color: #333; padding-bottom: 80px; }

        /* CABEÇALHO */
        .header { background: #001233; color: white; padding: 20px 20px 60px 20px; position: relative; border-bottom: 5px solid #ffcc00; }
        .header-top { display: flex; justify-content: space-between; align-items: center; max-width: 600px; margin: 0 auto; }
        .header h1 { font-size: 20px; font-weight: 900; text-transform: uppercase; }
        .btn-admin-login { background: none; border: none; color: #ffcc00; cursor: pointer; font-size: 18px; }

        .container { max-width: 600px; margin: -40px auto 20px auto; padding: 0 15px; position: relative; z-index: 10; }

        /* DASHBOARD FINANCEIRO */
        .card-financeiro {
            background: linear-gradient(135deg, #003399, #001233);
            color: white; padding: 25px; border-radius: 20px; text-align: center;
            box-shadow: 0 10px 30px rgba(0, 51, 153, 0.3); margin-bottom: 25px;
        }
        .label-caixa { font-size: 11px; text-transform: uppercase; letter-spacing: 2px; opacity: 0.8; }
        .valor-caixa { font-size: 40px; font-weight: 900; color: #ffcc00; margin: 5px 0; }
        .status-geral { display: flex; justify-content: center; gap: 30px; margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px; }
        .stat-item b { display: block; font-size: 18px; }
        .stat-item span { font-size: 10px; color: #aaa; text-transform: uppercase; }

        /* BOTÃO ADESÃO */
        .btn-adesao {
            display: flex; align-items: center; justify-content: center; gap: 10px;
            width: 100%; padding: 20px; background: #27ae60; color: white;
            border: none; border-radius: 12px; font-weight: 900; font-size: 16px;
            text-transform: uppercase; cursor: pointer; box-shadow: 0 5px 15px rgba(39, 174, 96, 0.4);
            margin-bottom: 30px; transition: 0.3s;
        }
        .btn-adesao:hover { transform: scale(1.02); background: #219150; }

        /* LISTA DE ATLETAS */
        .card-lista { background: white; border-radius: 15px; padding: 20px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); }
        .titulo-lista { color: #003399; font-weight: 800; font-size: 14px; text-transform: uppercase; margin-bottom: 15px; border-bottom: 2px solid #eee; padding-bottom: 10px; display: flex; justify-content: space-between; align-items: center; }
        
        .atleta-row { display: flex; align-items: flex-start; gap: 12px; padding: 15px 0; border-bottom: 1px solid #f5f5f5; }
        .foto-perfil { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid #eee; background: #ddd; }
        .info-atleta { flex: 1; }
        .nome { font-weight: 800; color: #333; display: block; font-size: 15px; }
        .cpf-mask { font-size: 11px; color: #777; letter-spacing: 1px; margin-bottom: 5px; }
        .valor-pago { font-weight: 900; color: #003399; font-size: 14px; align-self: flex-start; margin-top: 5px; }

        /* VISUAL DOS MESES PAGOS */
        .meses-grid { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px; }
        .tag-mes { 
            font-size: 9px; font-weight: 800; padding: 3px 6px; border-radius: 4px; 
            background: #27ae60; color: white; text-transform: uppercase;
        }

        /* BADGES DE STATUS */
        .badge { font-size: 9px; font-weight: 900; padding: 3px 6px; border-radius: 4px; text-transform: uppercase; margin-left: 5px; display: inline-block; }
        .bg-analise { background: #eee; color: #777; border: 1px solid #ccc; }
        .bg-carencia { background: #fff3cd; color: #856404; }
        .bg-apto { background: #d4edda; color: #155724; }

        /* MODAIS */
        .modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 999; justify-content: center; align-items: center; padding: 20px; }
        .modal-box { background: white; padding: 25px; border-radius: 20px; width: 100%; max-width: 400px; position: relative; max-height: 95vh; overflow-y: auto; }
        
        /* PIX AREA */
        .pix-container { background: #e8f5e9; border: 2px dashed #27ae60; padding: 15px; border-radius: 12px; text-align: center; margin-bottom: 20px; }
        .pix-titulo { color: #27ae60; font-weight: 900; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
        .pix-chave { font-family: monospace; font-size: 16px; font-weight: bold; background: white; padding: 8px; border-radius: 6px; display: block; margin: 5px 0; word-break: break-all; }
        .btn-copiar { background: #27ae60; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold; margin-top: 5px; }
        .btn-copiar:active { background: #1e8449; transform: scale(0.95); }

        /* SELFIE AREA */
        .selfie-area { text-align: center; margin-bottom: 20px; }
        #preview-img { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; background: #f0f0f0; display: block; margin: 0 auto 15px auto; border: 4px solid #27ae60; }
        .btn-foto { background: #003399; color: white; padding: 10px 20px; border-radius: 8px; font-size: 12px; cursor: pointer; display: inline-block; font-weight: bold; }

        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; font-size: 11px; font-weight: bold; color: #555; margin-bottom: 5px; text-transform: uppercase; }
        input, select { width: 100%; padding: 15px; border: 2px solid #eee; border-radius: 10px; font-size: 16px; outline: none; }
        
        .btn-finalizar { width: 100%; padding: 18px; background: #ffcc00; color: #001233; border: none; border-radius: 10px; font-weight: 900; font-size: 14px; cursor: pointer; text-transform: uppercase; display: flex; align-items: center; justify-content: center; gap: 10px; }
        .close-modal { position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 24px; cursor: pointer; color: #999; }

        /* CONTROLES ADM */
        .admin-controls { display: none; margin-top: 10px; border-top: 1px dashed #ccc; padding-top: 10px; gap: 5px; flex-wrap: wrap; }
        .btn-adm { padding: 8px 12px; border-radius: 6px; border: none; font-size: 10px; font-weight: bold; cursor: pointer; color: white; flex: 1; }
        .btn-ativar { background: #27ae60; }
        .btn-pay { background: #2980b9; }
        .btn-del { background: #c0392b; }
        
        /* Classe ativada via JS quando logado */
        .modo-adm-ativo .admin-controls { display: flex; }
        .modo-adm-ativo #status-adm-label { display: block !important; }

    </style>
</head>
<body>

    <div class="header">
        <div class="header-top">
            <h1>Plano Cirurgia DH PE</h1>
            <button class="btn-admin-login" onclick="loginAdmin()"><i class="fas fa-lock"></i></button>
        </div>
    </div>

    <div class="container">
        
        <div class="card-financeiro">
            <div class="label-caixa">SALDO TOTAL EM CAIXA</div>
            <div class="valor-caixa" id="saldo-total">R$ 0,00</div>
            <div class="status-geral">
                <div class="stat-item"><b id="qtd-aptos">0</b><span>APTOS</span></div>
                <div class="stat-item"><b id="qtd-carencia">0</b><span>CARÊNCIA</span></div>
                <div class="stat-item"><b id="qtd-analise">0</b><span>EM ANÁLISE</span></div>
            </div>
        </div>

        <button class="btn-adesao" onclick="abrirModal('modal-inscricao')">
            <i class="fas fa-file-invoice-dollar"></i> SOLICITAR ADESÃO AO PLANO
        </button>

        <div class="card-lista">
            <div class="titulo-lista">
                <span>Participantes</span>
                <span id="status-adm-label" style="color:#27ae60; display:none; font-size:10px; border:1px solid #27ae60; padding:2px 5px; border-radius:4px;">MODO ADM ATIVO</span>
            </div>
            <div id="lista-participantes"></div>
        </div>
        
        <p style="text-align: center; font-size: 11px; color: #999; margin-top: 20px;">
            Carência de 6 meses. Mensalidade R$ 100,00.<br>
            A ativação ocorre após a confirmação do pagamento pelo ADM.
        </p>
    </div>

    <div id="modal-inscricao" class="modal">
        <div class="modal-box">
            <button class="close-modal" onclick="fecharModal('modal-inscricao')">&times;</button>
            <h3 style="color:#003399; margin-bottom: 15px; text-align: center;">NOVA ADESÃO</h3>

            <div class="pix-container">
                <div class="pix-titulo"><i class="fas fa-qrcode"></i> CHAVE PIX</div>
                <span id="chave-pix" class="pix-chave">87999999999</span>
                <button class="btn-copiar" onclick="copiarPix()">COPIAR CHAVE PIX</button>
            </div>

            <div class="selfie-area">
                <img id="preview-img" src="https://via.placeholder.com/120?text=Selfie">
                <label class="btn-foto">
                    <i class="fas fa-camera"></i> TIRAR FOTO ROSTO
                    <input type="file" id="foto-input" accept="image/*" capture="user" style="display: none;" onchange="lerFoto(this)">
                </label>
            </div>

            <div class="form-group">
                <label>Nome Completo</label>
                <input type="text" id="nome" placeholder="Seu nome">
            </div>

            <div class="form-group">
                <label>CPF</label>
                <input type="text" id="cpf" placeholder="000.000.000-00" maxlength="14">
            </div>

            <button class="btn-finalizar" onclick="solicitarAdesao()">
                <i class="fab fa-whatsapp"></i> ENVIAR COMPROVANTE
            </button>
        </div>
    </div>

    <div id="modal-pagamento" class="modal">
        <div class="modal-box">
            <button class="close-modal" onclick="fecharModal('modal-pagamento')">&times;</button>
            <h3 style="color:#003399; margin-bottom: 15px; text-align: center;">REGISTRAR MENSALIDADE</h3>
            <p id="nome-atleta-pag" style="text-align:center; font-weight:bold; margin-bottom:15px;"></p>
            <input type="hidden" id="id-atleta-pag">

            <div class="form-group">
                <label>Qual mês foi pago?</label>
                <select id="mes-pagamento">
                    </select>
            </div>

            <button class="btn-finalizar" onclick="confirmarPagamentoMensal()">
                CONFIRMAR R$ 100,00
            </button>
        </div>
    </div>

    <script>
        // --- CONFIGURAÇÕES ---
        const ZAP_ADM = "5587999999999"; 
        const SENHA_ADM = "1234"; 
        const CHAVE_PIX_REAL = "87999999999"; 
        const VALOR_MENSAL = 100.00;

        document.getElementById('chave-pix').innerText = CHAVE_PIX_REAL;

        // --- DADOS DE EXEMPLO (PARA VISUALIZAÇÃO) ---
        const dadosExemplo = [
            {
                id: 101,
                nome: "Bruno Rocha (Exemplo Apto)",
                cpf: "123.456.789-00",
                foto: "https://i.pravatar.cc/150?img=3",
                // Data antiga para simular APTO (> 6 meses)
                dataEntrada: "2025-01-01T12:00:00.000Z", 
                // Pagou Jan, Fev, Mar de 2026
                historicoPagamentos: ["2026-01", "2026-02", "2026-03"],
                ativo: true
            },
            {
                id: 102,
                nome: "Lucas Silva (Exemplo Carência)",
                cpf: "987.654.321-99",
                foto: "https://i.pravatar.cc/150?img=8",
                // Data recente (mês passado)
                dataEntrada: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString(),
                // Pagou apenas o mês atual
                historicoPagamentos: [new Date().toISOString().slice(0, 7)],
                ativo: true
            },
            {
                id: 103,
                nome: "Diego Santos (Em Análise)",
                cpf: "456.789.123-44",
                foto: "https://i.pravatar.cc/150?img=12",
                dataEntrada: new Date().toISOString(),
                historicoPagamentos: [],
                ativo: false // Aguardando ADM
            }
        ];

        // --- BANCO DE DADOS ---
        // Carrega do localStorage OU usa os dados de exemplo se estiver vazio
        let participantes = JSON.parse(localStorage.getItem('db_plano_v6_demo')) || dadosExemplo;
        let fotoBase64 = ""; 
        let modoAdm = false;

        // Meses para exibição e seleção
        const mesesAno = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        // --- UTILITÁRIOS ---
        function copiarPix() {
            navigator.clipboard.writeText(CHAVE_PIX_REAL);
            alert("Chave Copiada! Faça o pagamento e depois envie o comprovante.");
        }

        document.getElementById('cpf').addEventListener('input', function(e) {
            let v = e.target.value.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            e.target.value = v;
        });

        function lerFoto(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('preview-img').src = e.target.result;
                    fotoBase64 = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        // --- FLUXO DE ADESÃO ---
        function solicitarAdesao() {
            const nome = document.getElementById('nome').value;
            const cpf = document.getElementById('cpf').value;
            
            if (!nome || !cpf || !fotoBase64) return alert("Preencha todos os campos e a foto!");

            if(confirm("Confirma que fez o PIX e quer enviar o comprovante?")) {
                const novo = {
                    id: Date.now(),
                    nome: nome,
                    cpf: cpf,
                    foto: fotoBase64,
                    dataEntrada: new Date().toISOString(),
                    historicoPagamentos: [], 
                    ativo: false
                };
                participantes.push(novo);
                salvarRenderizar();
                fecharModal('modal-inscricao');
                
                const texto = `*ADESÃO PLANO CIRURGIA*\nNome: ${nome}\nCPF: ${cpf}\n\n*Segue comprovante do PIX de R$ 100,00:*`;
                window.open(`https://wa.me/${ZAP_ADM}?text=${encodeURIComponent(texto)}`, '_blank');
            }
        }

        // --- ADM ---
        function loginAdmin() {
            if(prompt("Senha ADM:") === SENHA_ADM) {
                modoAdm = true;
                document.body.classList.add('modo-adm-ativo');
                renderizarTela();
                alert("Painel ADM Ativado!");
            }
        }

        // 1. ATIVAR USUÁRIO (O primeiro pagamento)
        function ativarUsuario(id) {
            if(confirm("Pagamento inicial recebido? ATIVAR usuário?")) {
                const p = participantes.find(x => x.id === id);
                p.ativo = true;
                p.dataEntrada = new Date().toISOString();
                
                // Registra o mês atual automaticamente como pago
                const hoje = new Date();
                const mesAtual = `${hoje.getFullYear()}-${String(hoje.getMonth()+1).padStart(2, '0')}`;
                p.historicoPagamentos = [mesAtual];
                
                salvarRenderizar();
            }
        }

        // 2. PAGAMENTO MENSAL (Abre Modal para escolher mês)
        function abrirModalPagamento(id) {
            const p = participantes.find(x => x.id === id);
            document.getElementById('id-atleta-pag').value = id;
            document.getElementById('nome-atleta-pag').innerText = p.nome;

            const select = document.getElementById('mes-pagamento');
            select.innerHTML = "";
            const anoAtual = new Date().getFullYear();
            
            // Gera opções para ano atual e próximo
            [anoAtual, anoAtual+1].forEach(ano => {
                mesesAno.forEach((mes, index) => {
                    const valorMes = `${ano}-${String(index+1).padStart(2, '0')}`;
                    // Só mostra se ainda NÃO foi pago
                    if(!p.historicoPagamentos.includes(valorMes)) {
                        const option = document.createElement('option');
                        option.value = valorMes;
                        option.text = `${mes}/${ano}`;
                        select.appendChild(option);
                    }
                });
            });

            document.getElementById('modal-pagamento').style.display = "flex";
        }

        function confirmarPagamentoMensal() {
            const id = parseInt(document.getElementById('id-atleta-pag').value);
            const mes = document.getElementById('mes-pagamento').value;
            
            if(!mes) return alert("Selecione um mês.");

            const p = participantes.find(x => x.id === id);
            p.historicoPagamentos.push(mes);
            p.historicoPagamentos.sort();
            
            salvarRenderizar();
            fecharModal('modal-pagamento');
        }

        function excluirUsuario(id) {
            if(confirm("Excluir cadastro permanentemente?")) {
                participantes = participantes.filter(x => x.id !== id);
                salvarRenderizar();
            }
        }

        function salvarRenderizar() {
            // Usando uma nova chave para garantir que os dados de exemplo apareçam
            localStorage.setItem('db_plano_v6_demo', JSON.stringify(participantes));
            renderizarTela();
        }

        // --- RENDERIZAÇÃO ---
        function calcularCarencia(dataEntrada) {
            const diffDays = Math.ceil(Math.abs(new Date() - new Date(dataEntrada)) / (1000 * 60 * 60 * 24));
            return diffDays >= 180;
        }

        // Converte "2026-01" -> "JAN"
        function formatarMesCurto(anoMes) {
            const [ano, mes] = anoMes.split('-');
            const nomes = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
            return nomes[parseInt(mes)-1];
        }

        function renderizarTela() {
            const lista = document.getElementById('lista-participantes');
            lista.innerHTML = "";
            let saldo = 0, aptos = 0, carencia = 0, analise = 0;

            const listaOrdenada = participantes.sort((a, b) => a.ativo === b.ativo ? 0 : a.ativo ? 1 : -1);

            listaOrdenada.forEach(p => {
                const qtdPagos = p.historicoPagamentos ? p.historicoPagamentos.length : 0;
                const total = qtdPagos * VALOR_MENSAL;
                
                if(p.ativo) saldo += total;

                // Status
                let badgeHTML = "";
                let classRow = "";

                if(!p.ativo) {
                    analise++;
                    badgeHTML = `<span class="badge bg-analise">EM ANÁLISE</span>`;
                    classRow = "opacity: 0.6;";
                } else {
                    const isApto = calcularCarencia(p.dataEntrada);
                    if(isApto) { aptos++; badgeHTML = `<span class="badge bg-apto">APTO</span>`; }
                    else { carencia++; badgeHTML = `<span class="badge bg-carencia">CARÊNCIA</span>`; }
                }

                // Renderiza as tags dos meses
                let mesesHTML = "";
                if(p.historicoPagamentos && p.historicoPagamentos.length > 0) {
                    mesesHTML = `<div class="meses-grid">`;
                    // Mostra os últimos 6
                    const ultimos = p.historicoPagamentos.slice(-6);
                    ultimos.forEach(m => {
                        mesesHTML += `<span class="tag-mes">${formatarMesCurto(m)}</span>`;
                    });
                    if(p.historicoPagamentos.length > 6) mesesHTML += `<span class="tag-mes" style="background:#ccc; color:#555;">+${p.historicoPagamentos.length-6}</span>`;
                    mesesHTML += `</div>`;
                } else if (p.ativo) {
                    mesesHTML = `<div class="meses-grid"><span style="font-size:9px; color:#999;">Nenhum pagamento registrado</span></div>`;
                }

                const cpfOculto = p.cpf.replace(/^(\d{3})\.(\d{3})/, "***.***");

                // Botões ADM
                let btnPrincipal = !p.ativo 
                    ? `<button class="btn-adm btn-ativar" onclick="ativarUsuario(${p.id})">ATIVAR</button>`
                    : `<button class="btn-adm btn-pay" onclick="abrirModalPagamento(${p.id})">+ MÊS</button>`;

                const controls = `
                    <div class="admin-controls">
                        ${btnPrincipal}
                        <button class="btn-adm btn-del" onclick="excluirUsuario(${p.id})"><i class="fas fa-trash"></i></button>
                    </div>
                `;

                lista.innerHTML += `
                    <div class="atleta-row" style="${classRow}">
                        <img src="${p.foto}" class="foto-perfil">
                        <div class="info-atleta">
                            <span class="nome">${p.nome} ${badgeHTML}</span>
                            <div class="cpf-mask">CPF: ${cpfOculto}</div>
                            ${mesesHTML}
                            ${modoAdm ? controls : ''}
                        </div>
                        <div class="valor-pago">R$ ${total.toFixed(0)}</div>
                    </div>
                `;
            });

            document.getElementById('saldo-total').innerText = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById('qtd-aptos').innerText = aptos;
            document.getElementById('qtd-carencia').innerText = carencia;
            document.getElementById('qtd-analise').innerText = analise;
        }

        function abrirModal(id) { document.getElementById(id).style.display = "flex"; }
        function fecharModal(id) { document.getElementById(id).style.display = "none"; }

        renderizarTela();

    </script>
</body>
</html>[ranking_card.html](https://github.com/user-attachments/files/24372629/ranking_card.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Top 10 - DH PE 2026</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
        body { background: #111; color: white; display: flex; flex-direction: column; align-items: center; padding: 10px; }

        .controles {
            background: #222; padding: 15px; border-radius: 12px; margin-bottom: 10px;
            width: 100%; max-width: 400px; text-align: center;
        }
        select { width: 100%; padding: 12px; border-radius: 8px; margin-bottom: 10px; font-weight: bold; background: #fff; color: #000; }
        .btn-print { background: #27ae60; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: bold; width: 100%; cursor: pointer; }

        #card-instagram {
            width: 1080px; height: 1920px; background: #001233;
            border: 15px solid #ffcc00; display: flex; flex-direction: column;
            position: relative; transform: scale(0.32); transform-origin: top center;
        }

        @media print {
            body { background: white; padding: 0; }
            .controles { display: none; }
            #card-instagram { transform: scale(1); border: none; }
        }

        .header-card {
            background: #ffcc00; height: 250px; display: flex; flex-direction: column;
            justify-content: center; align-items: center; color: #001233;
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
        }
        .header-card h1 { font-size: 80px; font-weight: 900; line-height: 0.8; }
        .header-card p { font-size: 30px; font-weight: 700; letter-spacing: 5px; }

        .categoria-faixa {
            background: #003399; color: white; font-size: 40px; font-weight: 900;
            text-align: center; padding: 15px; margin: 20px 80px;
            text-transform: uppercase; border-radius: 10px;
        }

        .lista-ranking { flex: 1; padding: 0 80px; display: flex; flex-direction: column; justify-content: center; }

        .linha-piloto {
            display: flex; align-items: center; background: rgba(255,255,255,0.06);
            margin-bottom: 12px; padding: 20px 35px; border-radius: 15px;
            border-bottom: 4px solid rgba(0,0,0,0.2);
        }
        
        .rank-1 { background: rgba(255, 204, 0, 0.15); border: 2px solid #ffcc00; }
        .posicao { font-size: 45px; font-weight: 900; color: #ffcc00; width: 90px; }
        .info { flex: 1; }
        .info .nome { font-size: 38px; font-weight: 800; color: white; display: block; text-transform: uppercase; }
        .info .cidade-equipe { font-size: 22px; color: #aaa; font-weight: 600; }
        .pontos { font-size: 38px; font-weight: 900; color: white; background: #27ae60; padding: 10px 20px; border-radius: 12px; }

        .footer-social { background: #ffcc00; padding: 35px; text-align: center; color: #001233; margin-top: 20px; }
        .footer-social h2 { font-size: 35px; font-weight: 900; }
        .footer-social .insta-tag { font-size: 32px; font-weight: 700; margin-top: 5px; display: block; }
    </style>
</head>
<body>

    <div class="controles">
        <select id="selectCat" onchange="atualizarCard()">
            <optgroup label="PRO">
                <option value="ELITE (Livre)">ELITE (Livre)</option>
                <option value="RÍGIDA PRO (Livre)">RÍGIDA PRO (Livre)</option>
                <option value="SUB-30 (19 a 29 anos)">SUB-30 (19 a 29 anos)</option>
            </optgroup>
            <optgroup label="MASTER">
                <option value="MASTER A1 (30 a 34 anos)">MASTER A1 (30 a 34 anos)</option>
                <option value="MASTER A2 (35 a 39 anos)">MASTER A2 (35 a 39 anos)</option>
                <option value="MASTER B1 (40 a 44 anos)">MASTER B1 (40 a 44 anos)</option>
                <option value="MASTER B2 (45 a 49 anos)">MASTER B2 (45 a 49 anos)</option>
                <option value="MASTER C (50 anos +)">MASTER C (50 anos +)</option>
            </optgroup>
            <optgroup label="BASE">
                <option value="JUVENIL (15 e 16 anos)">JUVENIL (15 e 16 anos)</option>
                <option value="INFANTO (12 a 14 anos)">INFANTO (12 a 14 anos)</option>
                <option value="JÚNIOR (17 e 18 anos)">JÚNIOR (17 e 18 anos)</option>
            </optgroup>
            <optgroup label="OUTROS">
                <option value="FEMININO (Livre)">FEMININO (Livre)</option>
                <option value="ESTREANTE (Livre)">ESTREANTE (Livre)</option>
            </optgroup>
        </select>
        <button class="btn-print" onclick="window.print()">GERAR IMAGEM</button>
    </div>

    <div id="card-instagram">
        <div class="header-card">
            <p>RANKING 2026</p>
            <h1>DH PE</h1>
        </div>

        <div class="categoria-faixa" id="titulo-categoria">TOP 10 ELITE (Livre)</div>

        <div class="lista-ranking" id="ranking-container"></div>

        <div class="footer-social">
            <h2>DOWNHILL PERNAMBUCANO</h2>
            <span class="insta-tag"><i class="fab fa-instagram"></i> @Downhill_Pernambuco</span>
        </div>
    </div>

    <script>
        const dadosRanking = {
            "ELITE (Livre)": [
                { nome: "Bruno Rocha", cidade: "Ouricuri-PE", equipe: "Sertão DH", pts: 150 },
                { nome: "Lucas Silva", cidade: "Surubim-PE", equipe: "Agreste Racing", pts: 135 }
            ],
            "RÍGIDA PRO (Livre)": [],
            "SUB-30 (19 a 29 anos)": [],
            "MASTER A1 (30 a 34 anos)": [],
            "MASTER A2 (35 a 39 anos)": [],
            "MASTER B1 (40 a 44 anos)": [],
            "MASTER B2 (45 a 49 anos)": [],
            "MASTER C (50 anos +)": [],
            "JUVENIL (15 e 16 anos)": [],
            "INFANTO (12 a 14 anos)": [],
            "JÚNIOR (17 e 18 anos)": [],
            "FEMININO (Livre)": [],
            "ESTREANTE (Livre)": []
        };

        function atualizarCard() {
            const cat = document.getElementById('selectCat').value;
            document.getElementById('titulo-categoria').innerText = "TOP 10 " + cat;
            const container = document.getElementById('ranking-container');
            container.innerHTML = "";

            const atletas = (dadosRanking[cat] || []);

            if (atletas.length === 0) {
                container.innerHTML = "<p style='text-align:center; font-size:30px; color:#aaa;'>Aguardando dados desta categoria...</p>";
                return;
            }

            atletas.slice(0, 10).forEach((a, index) => {
                const pos = index + 1;
                container.innerHTML += `
                    <div class="linha-piloto ${pos === 1 ? 'rank-1' : ''}">
                        <div class="posicao">${pos}º</div>
                        <div class="info">
                            <span class="nome">${a.nome}</span>
                            <span class="cidade-equipe">${a.cidade} • ${a.equipe}</span>
                        </div>
                        <div class="pontos">${a.pts}</div>
                    </div>`;
            });
        }

        atualizarCard();
    </script>
</body>
</html>[tempos.html](https://github.com/user-attachments/files/24372630/tempos.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ADM DH PE 2026 - Oficial</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
        body { background: #f4f4f4; color: #333; padding-bottom: 50px; }

        .admin-nav { 
            background: #001233; color: white; padding: 15px 20px; border-bottom: 4px solid #ffcc00;
            display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 1000;
        }

        .container { max-width: 600px; margin: 30px auto; padding: 0 20px; }

        /* Card de Controles */
        .controls-card { 
            background: white; padding: 30px; border-radius: 20px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.1); margin-bottom: 40px; 
        }
        
        h3 { margin-bottom: 15px; color: #003399; text-transform: uppercase; font-size: 14px; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        select { width: 100%; padding: 15px; border-radius: 10px; border: 2px solid #003399; font-weight: bold; margin-bottom: 20px; font-size: 16px; background: #f9fbfd; }

        /* Área de Preview (Fundo Escuro) */
        .preview-area {
            display: flex; justify-content: center; align-items: flex-start;
            background: #000a1a; padding: 40px 20px; border-radius: 20px;
            overflow: hidden; 
            box-shadow: inset 0 0 50px rgba(0,0,0,0.8);
            min-height: 850px; /* Altura para acomodar o card */
        }

        /* CARD REAL (1080x1920) */
        #area-print {
            width: 1080px; height: 1920px; 
            background: #001233; border: 15px solid #ffcc00;
            display: flex; flex-direction: column; padding: 60px;
            
            /* Truque para mostrar pequeno na tela mas ser grande na realidade */
            transform: scale(0.35); 
            transform-origin: top center;
            margin-bottom: -1100px; /* Compensa o espaço vazio do scale */
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        /* Conteúdo do Card */
        .header-print { text-align: center; margin-bottom: 40px; }
        .header-print h1 { font-size: 140px; color: white; font-weight: 900; line-height: 0.9; }
        .header-print p { font-size: 45px; color: #ffcc00; font-weight: 700; letter-spacing: 10px; }
        
        .cat-faixa { background: #ffcc00; color: #001233; font-size: 50px; font-weight: 900; text-align: center; padding: 20px; margin: 20px 0 40px 0; border-radius: 10px; text-transform: uppercase; }
        
        /* Lista preenche o espaço disponível */
        #ranking-lista { flex: 1; display: flex; flex-direction: column; gap: 15px; }

        .linha { display: flex; align-items: center; background: rgba(255,255,255,0.05); padding: 25px; border-radius: 15px; border-left: 12px solid #ffcc00; }
        .pos { font-size: 60px; font-weight: 900; color: #ffcc00; width: 130px; }
        .atleta { flex: 1; }
        .atleta .n { font-size: 48px; font-weight: 800; color: white; display: block; text-transform: uppercase; line-height: 1.1; }
        .atleta .e { font-size: 30px; color: #aaa; text-transform: uppercase; }
        .tempo { font-size: 55px; font-weight: 900; color: #27ae60; font-family: monospace; }
        
        /* Rodapé fixado no fluxo (Flexbox) para não cortar */
        .footer-print { 
            margin-top: auto; /* Empurra para o final */
            text-align: center; 
            border-top: 3px solid rgba(255,255,255,0.1); 
            padding-top: 40px; 
            padding-bottom: 20px;
        }
        .footer-print b { font-size: 45px; color: #ffcc00; display: block; }
        .footer-print span { font-size: 38px; color: white; margin-top: 15px; display: inline-block; }

        /* Botões */
        .btn { width: 100%; padding: 20px; border: none; border-radius: 12px; font-weight: 900; cursor: pointer; margin-top: 10px; text-transform: uppercase; display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 16px; transition: 0.3s; text-decoration: none; }
        .btn-insta { background: #c13584; color: white; }
        .btn-whats { background: #25d366; color: white; }
        .btn:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
    </style>
</head>
<body>

    <div class="admin-nav">
        <span><i class="fas fa-stopwatch"></i> ADM DH PE 2026</span>
        <button onclick="location.reload()" style="background:none; border:none; color:white; cursor:pointer;"><i class="fas fa-sync"></i></button>
    </div>

    <div class="container">
        
        <div class="controls-card">
            <h3>1. Configurar Categoria</h3>
            <select id="cat-select" onchange="atualizarCard()">
                <option value="">-- SELECIONE --</option>
                <optgroup label="PRO">
                    <option value="ELITE (Livre)">ELITE (Livre)</option>
                    <option value="RÍGIDA PRO (Livre)">RÍGIDA PRO (Livre)</option>
                    <option value="SUB-30 (19 a 29 anos)">SUB-30 (19 a 29 anos)</option>
                </optgroup>
                <optgroup label="MASTER">
                    <option value="MASTER A1 (30 a 34 anos)">MASTER A1 (30 a 34 anos)</option>
                    <option value="MASTER A2 (35 a 39 anos)">MASTER A2 (35 a 39 anos)</option>
                    <option value="MASTER B1 (40 a 44 anos)">MASTER B1 (40 a 44 anos)</option>
                    <option value="MASTER B2 (45 a 49 anos)">MASTER B2 (45 a 49 anos)</option>
                    <option value="MASTER C (50 anos +)">MASTER C (50 anos +)</option>
                </optgroup>
                <optgroup label="BASE">
                    <option value="JUVENIL (15 e 16 anos)">JUVENIL (15 e 16 anos)</option>
                    <option value="INFANTO (12 a 14 anos)">INFANTO (12 a 14 anos)</option>
                    <option value="JÚNIOR (17 e 18 anos)">JÚNIOR (17 e 18 anos)</option>
                </optgroup>
                <optgroup label="OUTROS">
                    <option value="FEMININO (Livre)">FEMININO (Livre)</option>
                    <option value="ESTREANTE (Livre)">ESTREANTE (Livre)</option>
                </optgroup>
            </select>

            <h3>2. Ações</h3>
            <button class="btn btn-insta" onclick="baixarImagem()">
                <i class="fab fa-instagram"></i> Baixar Imagem (PNG)
            </button>
            <a id="btn-whats-link" href="#" target="_blank" class="btn btn-whats">
                <i class="fab fa-whatsapp"></i> Enviar no WhatsApp
            </a>
        </div>

        <div class="preview-area">
            <div id="area-print">
                <div class="header-print">
                    <p>RANKING 2026</p>
                    <h1>DH PE</h1>
                </div>
                <div class="cat-faixa" id="print-cat">SELECIONE</div>
                
                <div id="ranking-lista">
                    </div>

                <div class="footer-print">
                    <b>DOWNHILL PERNAMBUCANO</b>
                    <span><i class="fab fa-instagram"></i> @Downhill_Pernambuco</span>
                </div>
            </div>
        </div>

    </div>

    <script>
        // Dados de Exemplo
        const listaExemplo = [
            { p: "1º", n: "Bruno Rocha", e: "Sertão DH • Ouricuri-PE", t: "2:45.120" },
            { p: "2º", n: "Lucas Silva", e: "Agreste Racing • Surubim-PE", t: "2:48.345" },
            { p: "3º", n: "Diego Santos", e: "Caruaru Team • Caruaru-PE", t: "2:50.010" },
            { p: "4º", n: "Tiago Melo", e: "Recife DH • Recife-PE", t: "2:52.400" },
            { p: "5º", n: "Felipe Góes", e: "Bike Shop • Garanhuns-PE", t: "2:55.150" }
        ];

        function atualizarCard() {
            const cat = document.getElementById('cat-select').value;
            if(!cat) return;

            document.getElementById('print-cat').innerText = cat;
            const container = document.getElementById('ranking-lista');
            container.innerHTML = "";

            listaExemplo.forEach(item => {
                container.innerHTML += `
                    <div class="linha">
                        <div class="pos">${item.p}</div>
                        <div class="atleta">
                            <span class="n">${item.n}</span>
                            <span class="e">${item.e}</span>
                        </div>
                        <div class="tempo">${item.t}</div>
                    </div>
                `;
            });

            const msg = encodeURIComponent(`*RANKING DH PE 2026*\nCategoria: ${cat}\n\n1º ${listaExemplo[0].n} - ${listaExemplo[0].t}`);
            document.getElementById('btn-whats-link').href = "https://wa.me/?text=" + msg;
        }

        function baixarImagem() {
            const elementoOriginal = document.getElementById('area-print');
            const nomeArquivo = `Ranking-${document.getElementById('cat-select').value || 'Geral'}.png`;

            // 1. Clona o elemento para não mexer na visualização da tela
            const clone = elementoOriginal.cloneNode(true);
            
            // 2. Configura o clone para ser invisível mas renderizável em tamanho real
            clone.style.transform = "none"; 
            clone.style.margin = "0";
            clone.style.position = "fixed";
            clone.style.top = "0";
            clone.style.left = "-9999px"; // Joga para fora da tela
            clone.style.zIndex = "-1";
            document.body.appendChild(clone);

            // 3. Gera a imagem a partir do clone (sem cortes!)
            html2canvas(clone, {
                scale: 1, 
                width: 1080,
                height: 1920,
                backgroundColor: "#001233",
                windowWidth: 1080,
                windowHeight: 1920
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = nomeArquivo;
                link.href = canvas.toDataURL('image/png');
                link.click();
                
                // 4. Remove o clone da memória
                document.body.removeChild(clone);
            }).catch(err => {
                console.error("Erro ao gerar imagem:", err);
                alert("Erro ao gerar imagem. Tente novamente.");
            });
        }

        atualizarCard();
    </script>
</body>
</html>
