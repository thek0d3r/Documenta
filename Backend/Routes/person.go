package routes

import (
	people "documenta/Handlers/People"

	"github.com/gofiber/fiber/v2"
)

func RegisterPeopleRoutes(app fiber.Router) {
	app.Get("/:CNP", people.GetPerson)

	app.Get("/:person_id/documents", people.GetDocuments)

	app.Get("/:person_id/documents/:document_id", people.GetDocument)

	app.Post("/:person_id/document", func(c *fiber.Ctx) error {
		return fiber.ErrBadRequest
	})

	app.Delete("/:person_id/documents/:document_id", func(c *fiber.Ctx) error {
		return fiber.ErrConflict
	})
}
