# Use Node.js 20 as base image
FROM node:20-bullseye

# Install essential packages
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        git \
        zsh \
        curl \
        wget \
        unzip \
        ca-certificates \
        gnupg \
        lsb-release \
        fzf \
        ripgrep \
        jq \
        tree \
        neovim \
    && apt-get autoremove -y && apt-get clean -y

# Install Oh My Zsh for the node user
USER node
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended \
    && echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc

# Install mise for Node.js version management
RUN curl https://mise.run | sh \
    && echo 'eval "$(/home/node/.local/bin/mise activate zsh)"' >> ~/.zshrc \
    && echo 'eval "$(/home/node/.local/bin/mise activate bash)"' >> ~/.bashrc

# Set up development environment
RUN mkdir -p /home/node/.vscode-server/extensions \
    && mkdir -p /home/node/.vscode-server-insiders/extensions

# Install global npm packages useful for TypeScript CLI development
USER root
RUN npm install -g \
        typescript \
        ts-node \
        tsx \
        nodemon \
        prettier \
        eslint \
    && npm cache clean --force

# Install Claude CLI
USER root
RUN npm install -g @anthropic-ai/claude-code

# Configure zsh as default shell for node user
USER root
RUN chsh -s $(which zsh) node
USER node

# Set working directory
WORKDIR /workspace

# Ensure proper permissions
USER root
RUN chown -R node:node /workspace
USER node

# Default to zsh
SHELL ["/bin/zsh", "-c"]
CMD ["/bin/zsh"]