NAME	= ft_transcendence

.PHONY	: all
all	: $(NAME)

$(NAME)	:
	@printf "Launching microservices ${NAME} ...\n"
	@docker-compose up

.PHONY : down
down   :
	@printf "Stopping configuration ${NAME}...\n"
	@docker-compose -f ./docker-compose.yml --env-file backend/.env down

.PHONY : clean
clean	:
	@printf "Cleaning configuration ${NAME}...\n"
	docker-compose -f ./docker-compose.yml down -v --rmi all --remove-orphans

.PHONY	: fclean
fclean	: clean
	@printf "Total clean of all configurations docker\n"
	docker system prune --volumes --all --force
	docker network prune --force
	docker volume prune --force

.PHONY	: re
re	: fclean all

.PHONY	: ps
ps	:
	docker-compose -f ./docker-compose.yml ps

.PHONY : ls
ls :
	docker-compose ls