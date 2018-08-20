# LiveArt with Admin Area
##### As Docker demo

This file contains instructions on how to run LiveArtJS and Admin Area when served as Docker images.

### Content
- [Package Description](#Package-Description)
- [Run the Demo](#Run-the-Demo)
    - [Prerequisites](#Prerequisites)
    - [Embed LiveArt demo](#Embed-LiveArt-demo)
- [Troubleshooting](#Troubleshooting)

## Package Description
- _`liveartjs-lacp.d-compose.yml`_
    - Configs for Docker Compose to run the demo (any platform)
- _`liveartjs-lacp.prod.d-compose.yml`_ 
    - Configs for Docker Compose to use as production server (more details in [Production Configuration](PRODUCTION_USE.md))
- _`Docker/liveartjs-lacp.env`_
    - Environment Variables - configuration file's syntax consists of key-value pairs
- _`redirect`_
    - Folder with remap address utility for legacy docker versions
- _`samples`_
    - Integration samples (HTML, CSS, JS). More info in [Integration](CUSTOMIZATION.md) manual.

## Run the Demo

### Prerequisites

In order to run the containers you'll need docker and docker-compose installed.

##### Install Docker:
* [Linux](https://docs.docker.com/install/#server)
    * [Docker Compose installation](https://docs.docker.com/compose/install/)
* [OS X](https://docs.docker.com/docker-for-mac/install/)
* [Windows](https://docs.docker.com/docker-for-windows/install/)

##### Verify it works:
1. Run `docker --version` to ensure that you have a supported version of Docker
2. Run `docker-compose --version` to ensure that you have a supported version of Docker Compose

### Running

1. Clone the repository [lajs-docker-compose](https://github.com/liveart/lajs-docker-compose)
    - Or download ZIP
2. In the command line navigate to the folder and run: 
    ```shell
    docker-compose -f liveartjs-lacp.d-compose.yml up
    ```
    _Note 1: The command might require running with sudo depending on the running system and user._

    _Note 2: The command might require to clean-up current containers and pull last changes - see [Troubleshooting](#Troubleshooting) > "Get the latest images"._
3. The services will be available at the following default URL's:
   * LiveArt Designer: [http://localhost:9000](http://localhost:9000)
   * Admin area: [http://localhost:3000](http://localhost:3000)
        * Default admin credentials for the Admin area:
            * `admin@example.com`
            * `XXk2Q4BN0n6nu3c2OB9zRckDFjX39HyFZ1WCIFtdSS`

#### Close demos
1. Press `Ctrl+C` in the command line and wait for all service are stopped
2. Close command line window

OR

1.  Use this commands if you just closed command line window
    ```sh
    docker stop liveart_designer
    docker stop liveart_admin_area
    docker stop liveart_mongo
    ```

#### Demos Limitations
1. All data will be loss after [demos are closed](https://docs.docker.com/storage/) (although not constantly)
    1. For production configuration please refer to [Production Configuration](PRODUCTION_USE.md)

### Embed LiveArt demo

Read [Customization](CUSTOMIZATION.md) manual.
            
## Troubleshooting
1.  __`This site can’t be reached`__ issue:
    * Check if some software (firewall, antivirus) blocks docker and/or used ports
    * [Docker Toolbox](https://docs.docker.com/toolbox/overview/) uses docker machine with it's own ip address.
      1. Use command `docker-machine ip` to [get ip address](http://img.newtonideas.com/rO3mztwc3iukOJQ1jV2h.png) and access the demos, e.g.:
            *  [http://192.168.99.100:9000](http://192.168.99.100:9000)
            *  [http://192.168.99.100:3000](http://192.168.99.100:3000)
      2. Setup redirect proxy:
            1. Install latest [nodejs](https://nodejs.org) LTS
            2. open _`/redirect`_ folder in command line
            3. run `npm i`
            4. run `npm run redirect -- --host 192.168.99.100` with respective ip address
2. Get the latest images from [Docker Hub](https://hub.docker.com/u/liveart/) (if you loaded images before)
    1. Run `docker pull liveart/admin-area`
    2. Run `docker pull liveart/designer`
3. Specified ports are used
    * Refer to [Port configuration](PRODUCTION_USE.md#Port-configuration)

