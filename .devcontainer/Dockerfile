FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

RUN apt update
RUN apt install -y curl
RUN apt install -y httpie
RUN curl -fsSL https://just.systems/install.sh | bash -s -- --to /usr/bin
RUN curl -fsSL https://bun.sh/install | bash