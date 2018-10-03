## Running Admin area as docker container standalone

```bash
docker run --name lacp -it -v /c/Users/Public/docker-mounts/admin-area/files:/app/client/public/files --env-file ./Docker/liveartjs-lacp.env -p 3000:3000 --restart always liveart/admin-area
```

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


### Docker docs
[Official docs](https://docs.docker.com/engine/reference/commandline/run/)
