#all : docker-compose --build

# docker-compose up -d : run in background (detached mode)
up :
	docker-compose up -d

down :
	docker-compose down 

clean :
	docker-compose down

ps :
	docker-compose ps

fclean :
	docker-compose down -v

restart :
	docker-compose down -v
	docker-compose up -d

# -v : remove volumes (data)

.PHONY: all up clean fclean