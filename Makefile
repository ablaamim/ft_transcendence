#all : docker-compose --build

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

# -v : remove volumes (data)

.PHONY: all up clean fclean