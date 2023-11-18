package database

import (
	"database/sql"

	immudb "github.com/codenotary/immudb/pkg/client"
	"github.com/codenotary/immudb/pkg/stdlib"
)

var DB *sql.DB

func init() {
	opts := immudb.DefaultOptions()
	opts.Username = "documenta2"
	opts.Password = "*PfDl{tQtpRJ.em1%"
	opts.Database = "defaultdb"

	DB = stdlib.OpenDB(opts)

}
