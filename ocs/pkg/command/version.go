package command

import (
	"fmt"
	"os"

	"github.com/micro/cli/v2"
	"github.com/micro/go-micro/v2/registry/mdns"
	tw "github.com/olekukonko/tablewriter"
	"github.com/owncloud/ocis/ocs/pkg/config"
	"github.com/owncloud/ocis/ocs/pkg/flagset"
)

// PrintVersion prints the service versions of all running instances.
func PrintVersion(cfg *config.Config) *cli.Command {
	return &cli.Command{
		Name:  "version",
		Usage: "Print the versions of the running instances",
		Flags: flagset.ListOcsWithConfig(cfg),
		Action: func(c *cli.Context) error {
			reg := mdns.NewRegistry()
			services, err := reg.GetService(cfg.Service.Namespace + "." + cfg.Service.Name)
			if err != nil {
				fmt.Println(fmt.Errorf("could not get ocs services from the registry: %v", err))
				return err
			}

			if len(services) == 0 {
				fmt.Println("No running ocs service found.")
				return nil
			}

			table := tw.NewWriter(os.Stdout)
			table.SetHeader([]string{"Version", "Address", "Id"})
			table.SetAutoFormatHeaders(false)
			for _, s := range services {
				for _, n := range s.Nodes {
					table.Append([]string{s.Version, n.Address, n.Id})
				}
			}
			table.Render()
			return nil
		},
	}
}
