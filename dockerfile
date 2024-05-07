# 使用 Node.js 官方提供的 Node 镜像作为基础镜像
FROM node:latest

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将应用程序源代码复制到工作目录
COPY . .

# 暴露 Nest.js 应用程序运行的端口
EXPOSE 3000

# 运行 Nest.js 应用程序
RUN nx build server