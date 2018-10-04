## Full-stack configuration for Production Use

:page_facing_up: [liveartjs-lacp.prod.d-compose.yml	](liveartjs-lacp.prod.d-compose.yml	)


:heavy_check_mark: Linux - :heavy_multiplication_x: Windows - :heavy_multiplication_x: MacOS


### Services
:heavy_check_mark: Admin area

:heavy_check_mark: PHP sample services

:heavy_check_mark: Designer

:heavy_check_mark: MongoDB instance


### Run

```sh
docker-compose -f liveartjs-lacp.prod.d-compose.yml up
```

_Note: The command might require running with sudo depending on the running system and user._


##### Setting up bind volumes

_Bind mounts allow a directory to be mounted into a container and must be configured for the production use._

Default configuration:
* `/var/docker-mounts/designer` for designer
* `/var/docker-mounts/admin-area/files` for admin area
* `/var/docker-mounts/liveartjs-db` for MongoDB
* `/var/docker-mounts/php-sample-services/files` for sample PHP services

These values should be updating respectively in `liveartjs-lacp.prod.d-compose.yml` to the ones that are available on the host machine.

##### Public address configuration
It is required to configure the public address of the admin area as described in [Assets URL mapping](CONFIGURATION.md##small_blue_diamond-public-address).
 
### App Configuration

For full information on the application configuration refer to [CONFIGURATION.md](CONFIGURATION.md).
