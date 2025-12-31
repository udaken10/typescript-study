FROM node:20-slim
WORKDIR /app
RUN npm install -g typescript ts-node
CMD ["bash"]