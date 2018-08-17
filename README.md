# LiveArt with Admin Area
##### As Docker demo

This file contains instructions on how to run LiveArtJS and Admin Area when served as Docker images.

## Package Description
- _`liveartjs-lacp.d-compose.yml`_
    - configs for Docker Compose to run the demo (any platform)
- _`liveartjs-lacp.prod.d-compose.yml`_ 
    - configs for Docker Compose to use as production server (more details in [Production Configuration](PRODUCTION_USE.md))
- _`Docker/liveartjs-lacp.env`_
    - Environment Variables - configuration file's syntax consists of key-value pairs    

## Run a Demo

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
    _Note: The command might require running with sudo depending on the running system and user._
3. The services will be available at the following default URL's:
   * LiveArt Designer: [http://localhost:9000](http://localhost:9000)
   * Admin area: [http://localhost:3000](http://localhost:3000)
        * Default admin credentials for the Admin area:
            * `admin@example.com`
            * `XXk2Q4BN0n6nu3c2OB9zRckDFjX39HyFZ1WCIFtdSS`

#### Close demos
1. Press `Ctrl+C` in the command line and wait for all service are stopped
2. Close command line window

#### Limitations
1. All data will be loss after demos area closed
    1. For production configuration please refer to [Production Configuration](PRODUCTION_USE.md)
            
#### Troubleshooting
1.  `This site can’t be reached` issue:
    * Check if some software (firewall, antivirus) blocks docker and/or used ports
    * [Docker Toolbox](https://docs.docker.com/toolbox/overview/) uses docker machine with it's own ip address.
      Use command `docker-machine ip` to [get ip](http://img.newtonideas.com/rO3mztwc3iukOJQ1jV2h.png) and access the demos, e.g.:
        *  [http://192.168.99.100:9000](http://192.168.99.100:9000)
        *  [http://192.168.99.100:3000](http://192.168.99.100:3000)
2. Specified ports are used
    * Refer to [Port configuration](PRODUCTION_USE.md#Port-configuration)

