FROM node:10

# Debian Stretch is EOL - update sources to use archive repositories
RUN sed -i 's/deb.debian.org/archive.debian.org/g' /etc/apt/sources.list && \
    sed -i 's|security.debian.org|archive.debian.org|g' /etc/apt/sources.list && \
    sed -i '/stretch-updates/d' /etc/apt/sources.list

# Install system dependencies required for canvas and other native modules
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    python \
    && rm -rf /var/lib/apt/lists/*

# Install gulp globally
RUN npm install -g gulp-cli

# Set working directory
WORKDIR /primo-explore-devenv

# Expose the development server port
EXPOSE 8003
