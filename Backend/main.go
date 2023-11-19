package main

import (
	routes "documenta/Routes"
	"github.com/gofiber/swagger"

	_ "documenta/docs"
	"github.com/gofiber/fiber/v2"
)

// @title			Documenta API
// @version		1.0
// @description	Main Documenta API
// @host			documenta.cyberdojotm.ro:3000
// @BasePath		/
func main() {
	app := fiber.New()

	app.Server().MaxRequestBodySize = 50 * 1024 * 1024

	app.Get("/swagger/*", swagger.HandlerDefault)

	app.Get("/swagger/*", swagger.New())

	routes.RegisterPeopleRoutes(app.Group("/people"))

	app.Listen(":3000")
}
