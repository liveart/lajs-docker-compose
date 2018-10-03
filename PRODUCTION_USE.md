## Configuration for Production Usage

### Prerequisites:
* Linux Platform only

### Run

Run-command:
```sh
docker-compose -f liveartjs-lacp.prod.d-compose.yml up
```
_Note: The command might require running with sudo depending on the running system and user._

### Required Configuration

This config might _require additional configuration_ that is described under _Production configuration_ in this Readme (see below).

##### Setting up bind volumes

_Bind mounts allow a directory to be mounted into a container and must be configured for the production use._

Default configuration:
* `/var/docker-mounts/designer` for designer
* `/var/docker-mounts/admin_area` for admin area
* `/var/docker-mounts/liveartjs-db` for the database

These values should be updating respectively in `liveartjs-lacp.prod.d-compose.yml` to the ones that are available on the host machine.

##### Public address configuration
It is required to configure the public address of the admin area as described in [Assets URL mapping](CONFIGURATION.md##small_blue_diamond-public-address).
 
### App Configuration

For full information on the application configuration refer to [CONFIGURATION.md](CONFIGURATION.md).
