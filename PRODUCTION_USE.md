## Configuration for Production Usage

### Prerequisites:
* Linux Platform only

### Run

Run-command:
```shell
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
 
### Optional Configuration

##### Port configuration
_Port configuration gives control under what ports should the services be exposed on the host machine._

Ports are getting configured in the "ports" key defined in the docker compose yaml file.
Signature: `<exposed_port>:<internal_service_port>`.

>__Note:__ Only _exposed_port_ may be changed, _internal_service_port_ should be left as it has been configured!

Default configuration:
* `9000:80` for designer
* `3000:3000` for admin area

These values should be updating respectively in `liveartjs-lacp.prod.d-compose.yml` to the ones that are available on the host machine.

###### Examples:
Say, we need to use "8080" instead of "9000" for designer, and "3333" instead of "3000" for the admin area.
Then the "ports" key should be updated to the following with respect to the services:
 * `8080:80` for designer
 * `3333:3000` for admin area

##### Default admin area user
You may configure default credentials in the in `Docker/liveartjs-lacp.env` file.

Values to change:
```env
LACP_DEFAULT_ADMIN_EMAIL=<email>
LACP_DEFAULT_ADMIN_PASSWORD=<password>
```

##### Use Https protocol
The services are being configured with `Docker/liveartjs-lacp.env` file.
* `LACP_PROTOCOL` - Must represent a protocol that the admin area application is available on. It is recommended to set it to "https"
 if "https" protocol is available to access the application. This option allows the admin area service to properly resolve some URL's.

##### Serve docker container without port
Use reverse-proxy to point custom URL's to these addresses.
E.g. for Apache Server please refer to [docs](https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html).