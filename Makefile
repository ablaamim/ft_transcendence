NAME	= ft_transcendence

all	: $(NAME)

$(NAME)	:
	@printf "\nLaunching ft_transcendence Microservices ${NAME} ...\n\n"
	@docker-compose up -d

up	:
	@printf "Launching ft_transcendence Microservices ${NAME} ...\n\n"
	@docker-compose up -d

down   :
	@printf "\nStopping configuration ${NAME}...\n\n"
	@docker-compose -f ./docker-compose.yml --env-file backend/.env down

clean	:
	@printf "\nCleaning configuration ${NAME}...\n"
	docker-compose -f ./docker-compose.yml down -v --rmi all --remove-orphans

fclean	: clean
	@printf "\nTotal clean of all configurations docker...\n\n"
	docker system prune --volumes --all --force
	docker network prune --force
	docker volume prune --force

re	: fclean all

.PHONY	: ps
ps	:
	docker-compose -f ./docker-compose.yml ps

ls :
	docker-compose ls

.PHONY : all down clean fclean re ls 