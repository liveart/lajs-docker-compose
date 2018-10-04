## Running Admin area with sample php services without designer and DB

:page_facing_up: [lacp.no-mongo.prod.d-compose.yml](lacp.no-mongo.prod.d-compose.yml)

:heavy_check_mark: Linux - :heavy_check_mark: Windows - :heavy_check_mark: MacOS

### Services

:heavy_check_mark: Admin area

:heavy_check_mark: Php sample services

:heavy_multiplication_x: Designer

:heavy_multiplication_x: MongoDB instance


### Run

```bash
docker-compose -f lacp.no-mongo.prod.d-compose.yml up
```

_Note: The command might require running with sudo depending on the running system and user._


#### :arrow_forward: Setting up bind volumes

_Bind mounts allow a directory to be mounted into a container and must be configured for the production use._

Value syntax: `<host_directory>:<container_directory>`

Change `<host_directory>` to the one on the host. `<container_directory>` should not be changed!

:heavy_exclamation_mark: `<host_directory>` must exist!


Default configurations:

##### Windows
* `c:/Users/Public/docker-mounts/admin-area/files` for admin area
* `c:/Users/Public/docker-mounts/php-sample-services/files` for sample PHP services

:heavy_exclamation_mark: Make sure both directories exist on host!

##### Linux
* `/var/docker-mounts/admin-area/files` for admin area
* `/var/docker-mounts/php-sample-services/files` for sample PHP services


#### :arrow_forward: Other configuration
Please see other available configuration options in [CONFIGURATION](CONFIGURATION.md).

:heavy_exclamation_mark: Some options may be critical for the production use (such as [Public address](https://github.com/liveart/lajs-docker-compose/blob/master/CONFIGURATION.md#small_blue_diamond-public-address)), so please consider checking the [CONFIGURATION](CONFIGURATION.md) readme.

### :point_up_2: Troubleshooting

#### Windows mount issue
` Cannot create container for service ... Mount denied ... "..." is not a valid Windows path`

1. On Command Line: `set COMPOSE_CONVERT_WINDOWS_PATHS=1`;
2. Restart Docker for Windows;
3. Go to "Docker for Windows" settings > Shared Drives > Reset credentials > select drive > Apply;
4. Reopen Command Line;
5. Kill the Containers;
6. Rerun the Containers.

[Original GitHub Issue](https://github.com/docker/compose/issues/4303)

### :link: Docker docs
[Official docs](https://docs.docker.com/engine/reference/commandline/run/)
