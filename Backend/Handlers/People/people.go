package people

import (
	database "documenta/Database"
	"fmt"
	"regexp"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

type Person struct {
	ID  	uint64	`json:"id" field:"id"`
	CNP 	uint64	`json:"cnp" field:"cnp"`
	Nume 	string	`json:"nume" field:"nume"`
	Prenume	string	`json:"prenume" field:"prenume"`

}

type Document struct {
	ID				[]byte		`json:"id" field:"id"`
	Person 			uint64 		`json:"person" field:"person"`
	Document_name 	string 		`json:"document_name" field:"document_name"`
	Document_hash	string		`json:"document_hash" field:"document_hash"`
}

const control string = "279146358279"

func validateCNP(cnp string) bool {
	if matched, _ := regexp.MatchString(`^\d{13}$`, cnp); !matched {
		return false
	}

	s := cnp[0:1]
	// aa := cnp[1:3]
	ll := cnp[3:5]
	zz := cnp[5:7]
	c, _ := strconv.Atoi(cnp[13:13])

	if s < "1" || s > "8" {
		return false
	}

	if month, err := strconv.Atoi(ll); err != nil || month < 1 || month > 12 {
		return false
	}

	if day, err := strconv.Atoi(zz); err != nil || day < 1 || day > 31 {
		return false
	}


	controlSum := 0
	
	for i := 0; i<12; i++ {
		cnpDigit, _ := strconv.Atoi(cnp[i:i])
		controlDigit, _ := strconv.Atoi(control[i:i])
		controlSum += cnpDigit * controlDigit
	}

	checksum := controlSum % 11

	if checksum == 10 {
		checksum = 1
	}

	if c != checksum {
		return false
	}


	return true
}

func GetPerson(c *fiber.Ctx) error {
	cnpStr := c.Params("CNP")

	if !validateCNP(cnpStr) {
		return fiber.ErrBadRequest
	}

	cnp, err:= strconv.ParseInt(cnpStr, 10, 64)
	if err != nil {
		return fiber.ErrBadRequest
	}

	row := database.DB.QueryRow("SELECT * FROM people WHERE CNP=?", cnp)

	person := &Person{}

	err = row.Scan(&person.ID, &person.CNP, &person.Nume, &person.Prenume)
	

	if err != nil {
		fmt.Println(err)
		return fiber.ErrNotFound
	}

	return c.JSON(fiber.Map{
		"person": person,
	})
	
}

func GetDocuments(c *fiber.Ctx) error {
	personStr := c.Params("person_id")


	fmt.Println(personStr)


	person, err := strconv.ParseInt(personStr, 10, 64)

	rows, err := database.DB.Query("SELECT * FROM documents WHERE person=?", person)
	if err != nil {
		return fiber.ErrBadRequest
	}

	documents := fiber.Map{}

	for rows.Next() {
		document := &Document{}
		
		err = rows.Scan(&document.ID, &document.Document_name, &document.Person, &document.Document_hash)
		if err != nil {
			break
		}

		fmt.Println(document)

		u, _ := uuid.ParseBytes(document.ID)
		documents[u.String()] = document
	}

	return c.JSON(fiber.Map{
		"documents": documents,
	})
}