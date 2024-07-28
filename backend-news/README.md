- mkdir backend-news

- cd backend-news

- npm init -y

- npm install 
  @types/express
  @types/mongoose
  @types/node
  @types/nodemon
  body-parser
  cors
  express
  mongoose
  multer
  nodemon
  ts-node
  typescript  
  @types/cors
  @types/multer

- Crie um arquivo tsconfig.json na raiz do projeto e adicione o seguinte conteúdo:
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}

### Executar o projeto
- npm start

### Para rodar o banco de dados
- Vai em serviços do Windows, procure por MongoDB e inicie o banco de dados




