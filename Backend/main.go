package main

import (
	routes "documenta/Routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	routes.RegisterPeopleRoutes(app.Group("/people"))

	app.Listen(":3000")
}