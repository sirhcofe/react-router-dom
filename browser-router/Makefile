# Define variables
NPM=npm
DOCKER_COMPOSE=docker-compose

# Paths
HOST_DIR=./host
MFE1_DIR=./mfe1
MFE2_DIR=./mfe2

# Build everything and run
all: install-mfe build-mfe build-docker

clean: stop-docker

fclean: clean clean-docker

re: fclean all

# Install MFE applications dependencies
install-mfe:
	@echo "Installing Host Application dependencies..."
	@cd $(HOST_DIR) && $(NPM) install
	@echo "Building MFE1..."
	@cd $(MFE1_DIR) && $(NPM) install
	@echo "Building MFE2..."
	@cd $(MFE2_DIR) && $(NPM) install

# Build MFE applications
build-mfe:
	@echo "Building Host Application..."
	@cd $(HOST_DIR) && $(NPM) run build
	@echo "Building MFE1..."
	@cd $(MFE1_DIR) && $(NPM) run build
	@echo "Building MFE2..."
	@cd $(MFE2_DIR) && $(NPM) run build

# Build and run Docker containers
build-docker:
	@echo "Building Docker images..."
	$(DOCKER_COMPOSE) build
	@echo "Running Docker containers..."
	$(DOCKER_COMPOSE) up -d

# Stop Docker containers
stop-docker:
	@echo "Stopping Docker containers..."
	$(DOCKER_COMPOSE) down

# Clean Docker environment
clean-docker:
	@echo "Removing Docker images and cleaning up..."
	$(DOCKER_COMPOSE) down --rmi all

.PHONY: all build-mfe build-docker stop-docker clean-docker
