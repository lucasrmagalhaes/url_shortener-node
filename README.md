<hr />
<br />

<p align="center">
  <a href="#" target="_blank">
    <img 
         src="https://github.com/lucasrmagalhaes/urlShortener-DIO/blob/main/img/urlShortener-gif.gif" 
         alt="urlShortener" 
    />
  </a>
  <br>
  Encurtador de URL. :scissors:
</p>

<hr />
<br />

<p align="center">
  <a href="#" target="_blank">
    <img 
         src="https://github.com/lucasrmagalhaes/urlShortener-DIO/blob/main/img/urlShortener-DIO.jpg" 
         alt="Insomnia" 
    />
  </a>
  <br>
  Testando no Insomnia.
</p>

<hr />
<br />

<p align="center">
  <a href="#" target="_blank">
    <img 
         src="https://github.com/lucasrmagalhaes/urlShortener-DIO/blob/main/img/mongodb-collections.jpg" 
         alt="Collections no MongoDB - Cloud" 
    />
  </a>
  <br>
  Collections no MongoDB - Cloud.
</p>

<hr />

<h3 align="center">Objetivos do Projeto</h3>

<ol>
    <li>Construir uma API com NodeJS e Typescript.</li>
    <li>Gerar Hashes únicos para cada entrada.</li>
    <li>Conectar as entradas com os hashes gerados.</li>
</ol>

<hr />

<h3 align="center">Requisitos Básicos</h3>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ter instalado NodeJS.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Editor de texto da sua escolha.
</p>

<hr>

<h3 align="center">Parte 1: TypeScript</h3>
<h4 align="center">Linguagem Base</h4>

<h4 align="left">Typescript</h4>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem.
</p>

<hr>

<h3 align="center">Parte 2: MongoDB</h3>
<h4 align="center">Base de Dados</h4>

<h4 align="left">MongoDB</h4>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MongoDB é um banco de dados NoSQL orientado à documentos.
</p>

<hr>

<h3 align="center">Iniciando o Projeto</h3>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MongoDB é um banco de dados NoSQL orientado à documentos.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pode ser utilizado instalado localmente ou em Cloud.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No projeto vai ser utilizado em Cloud.<br>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Build a Cluster.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cluster Name: urlShortener-DIO
</p>

<hr>

<pre>npm init</pre>
<pre>npm i typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint</pre>
<pre>npm i nodemon express cors</pre>

<hr>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criar a pasta: src<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Onde vai ter o código fonte.<br>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dentro da pasta: src<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criar o arquivo: index.ts
</p>

<hr>

- Gera TypeScript em JS.
<pre>npm run build:watch</pre>

- Restarta a API a cada mudança.
<pre>npm run dev</pre>

<hr>

<p align="left">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Testando no <a href="https://insomnia.rest/">Insomnia</a><br>
</p>

<pre>
GET

http://localhost:5000/test

{
  "success": true
}
</pre>

<hr>

- shortid
<pre>npm install --save shortid</pre>

- Matando o servidor
<pre>lsof -i tcp:3000</pre>
<pre>kill -9 5805</pre>

<hr>

<pre>
POST

http://localhost:5000/shorten

{
	"originURL":
	"https://cloud.mongodb.com/v2/5ff4fd9e15b4cc384aa5e559#clusters"
}
</pre>

- Preview

<pre>
{
  "originURL": "https://cloud.mongodb.com/v2/5ff4fd9e15b4cc384aa5e559#clusters",
  "hash": "VaDg91-3w",
  "shortURL": "http://localhost:5000/VaDg91-3w"
}
</pre>

<hr>

- Acessando via Browser: Dados inseridos direto no banco para teste.
<pre>http://localhost:5000/VaDg91-3w</pre>

<hr>

- Mongoose
<pre>npm i mongoose @types/mongoose</pre>

- Typegose
<pre>npm i @hasezoey/typegoose</pre>

<pre>
POST
http://localhost:5000/shorten

JSON
{
	"originURL":
	"https://cloud.mongodb.com/v2/5ff4fd9e15b4cc384aa5e559#clusters"
}

Preview: 200 OK

{
  "_id": "5ff670e09f8ffb2f64250618",
  "hash": "Z41vvIrNd",
  "shortURL": "http://localhost:5000/Z41vvIrNd",
  "originURL": "https://cloud.mongodb.com/v2/5ff4fd9e15b4cc384aa5e559#clusters",
  "__v": 0
}
</pre>
