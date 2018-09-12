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

The only difference between the production config and the base config is that the production one defines volumes required for data persistence.
This config might _require additional configuration_ that is described under _Production configuration_ in this Readme (see below).

##### Setting up bind volumes

_Bind mounts allow a directory to be mounted into a container and must be configured for the production use._

Default configuration:
* `/var/docker-mounts/designer` for designer
* `/var/docker-mounts/admin_area` for admin area
* `/var/docker-mounts/liveartjs-db` for the database

These values should be updating respectively in `liveartjs-lacp.prod.d-compose.yml` to the ones that are available on the host machine.

##### Assets URL mapping
We strongly advise to configure [Assets URL mapping](CONFIGURATION.md#assets-url-mapping) to your docker host external ip.
 
### Optional Configuration

For optional configuration refer to [CONFIGURATION.md](CONFIGURATION.md).
