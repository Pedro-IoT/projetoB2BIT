FROM node:20-alpine

WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (otimiza o cache do Docker)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto do código da aplicação
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 5173

# Roda o Vite expondo o host para a rede do Docker
CMD ["npm", "run", "dev", "--", "--host"]