## Docker Compose configuration

#### :small_blue_diamond: Port configuration
File: [liveartjs-lacp.prod.d-compose.yml](liveartjs-lacp.prod.d-compose.yml)

This configures the ports at which the services will be exposed on the host machine.

Ports are getting configured in the "ports" key defined in the docker compose yaml file.
Signature: `<exposed_port>:<internal_service_port>`.

>__Note:__ Only _exposed_port_ may be changed, _internal_service_port_ should be left as it is already set!

Default configuration:
* `9000:80` for designer
* `3000:3000` for admin area

###### Examples:
Say, we need to use "8080" instead of "9000" for designer, and "3333" instead of "3000" for the admin area.
Then the "ports" key should be updated to the following with respect to the services:
 * `8080:80` for designer
 * `3333:3000` for admin area

#### :small_blue_diamond: Public address 
:heavy_exclamation_mark: The option is critical for production and is not pre-configured!

File: [Docker/liveartjs-lacp.env](/Docker/liveartjs-lacp.env)

This option must be set to the **public** address at which the admin area is available.
The admin area will use this to properly resolve the URLs of the assets for the designer.

Value to change:
```env
LACP_PUBLIC_ADDRESS=https://lacp.domain.com/
```

#### :small_blue_diamond: Default admin area user
File: [Docker/liveartjs-lacp.env](/Docker/liveartjs-lacp.env)

Values to change:
```env
LACP_DEFAULT_ADMIN_EMAIL=<email>
LACP_DEFAULT_ADMIN_PASSWORD=<password>
```

#### :small_blue_diamond: Use Https protocol
File: [Docker/liveartjs-lacp.env](/Docker/liveartjs-lacp.env)

:warning: This option is deprecated and will be removed in future releases.

:warning: Has no effect in the latest builds.


The services are being configured with `Docker/liveartjs-lacp.env` file.
* `LACP_PROTOCOL` - Must represent a protocol that the admin area application is available on. It is recommended to set it to "https"
 if "https" protocol is available to access the application. This option allows the admin area service to properly resolve some URL's.

#### :small_blue_diamond: Assets URL mapping
File: [Docker/liveartjs-lacp.env](/Docker/liveartjs-lacp.env)

:warning: This option is deprecated and will be removed in future releases.
Please use [Public address](#small_blue_diamond-public-address) option instead.

By default, all the assets served by the admin area are available by absolute url on "http://localhost:3000".

Value to change:
```env
LACP_FILES_URL=http://localhost:3000
```

>Note: the value should not contain the trailing slash.

If "LACP_FILES_URL" is omitted from the configuration, all the urls will be served as relative.


### Other tips

##### Serve docker container without port
Use reverse-proxy to point custom URL's to these addresses.
E.g. for Apache Server please refer to [docs](https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html).
