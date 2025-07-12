# Use Node.js 20 slim bookworm as base image
FROM node:20-slim-bookworm

# Install essential packages categorized by purpose
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        # Basic system utilities
        less \
        procps \
        unzip \
        # Network & security essentials
        curl \
        ca-certificates \
        # Development & version control
        git \
        gh \
        # Shell & productivity tools
        zsh \
        fzf \
        ripgrep \
        jq \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

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


# Configure zsh as default shell for node user
USER root
RUN chsh -s $(which zsh) node
USER node

# Set working directory
WORKDIR /workspace

# Copy package files for dependency installation
COPY package*.json ./
RUN chown -R node:node /workspace

# Install project dependencies as node user
USER node
RUN npm ci --only=production

# Switch back to root for final setup
USER root

# Default to zsh
SHELL ["/bin/zsh", "-c"]
CMD ["/bin/zsh"]
