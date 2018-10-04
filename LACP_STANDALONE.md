## Running Admin area with sample php services without designer and DB

```bash
docker-compose -f lacp.no-mongo.prod.d-compose.yml up
```

Includes the ticked services:

:heavy_check_mark: Admin area

:heavy_check_mark: Php sample services

:heavy_multiplication_x: Designer

:heavy_multiplication_x: MongoDB instance


### Configurable options

#### :arrow_forward: Bind mount a volume for data persistence
Option: `v`

Default: `-v /c/Users/Public/docker-mounts/admin-area/files:/app/client/public/files`

Maps the host directory to the one inside the containers. 

It is required for the production use.

Value syntax: `<host_directory>:<container_directory>`

Change `<host_directory>` to the one on the host. `<container_directory>` should not be changed!

:heavy_exclamation_mark: `<host_directory>` must exist!

#### :arrow_forward: Expose to a port on the host
Option: `p`

Default: `-p 3000:3000`

Value syntax: `<port_on_host>:<port_in_container>`

Change `<port_on_host>` to the one on the host. `<port_in_container>` should not be changed!

#### :arrow_forward: Other configuration
Please see available configuration options for [liveartjs-lacp.prod.env](/Docker/liveartjs-lacp.prod.env) in [CONFIGURATION](CONFIGURATION.md).

:heavy_exclamation_mark: Some options may be critical for the production use (such as [Public address](https://github.com/liveart/lajs-docker-compose/blob/master/CONFIGURATION.md#small_blue_diamond-public-address)), so please consider checking the [CONFIGURATION](CONFIGURATION.md) readme.

### Docker docs
[Official docs](https://docs.docker.com/engine/reference/commandline/run/)
